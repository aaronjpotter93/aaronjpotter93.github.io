using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace TestBackEnd.Pages.Users
{
    public class CreateModel : PageModel
    {
        public UserInfo userInfo = new UserInfo();
        public string errorMessage = "";
        public string successMessage = "";
        public void OnGet()
        {

        }

        public void OnPost()
        {
            userInfo.firstName = Request.Form["fname"];
            userInfo.lastName = Request.Form["lname"];

            if (userInfo.firstName == null || userInfo.lastName == null)
            {
                errorMessage = "First and Last name are required";
                return;
            }
            else if (userInfo.firstName.Length == 0 || userInfo.lastName.Length == 0)
            {
                errorMessage = "First and Last name are required";
                return;
            }

            try
            {
                string connectionString = "Data Source=database-1.cpznz6rshzd4.us-east-1.rds.amazonaws.com,1433;Initial Catalog=restaurant_website;User ID=testuser;Password=NY5H72ZjGM2Le2N";
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string sql = "EXEC AddUser @last_name = "+ userInfo.lastName +", @first_name = " + userInfo.firstName;
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            //command.Parameters.AddWithValue("@first_name", userInfo.firstName);
                            //command.Parameters.AddWithValue("@last_name", userInfo.lastName);

                            //command.ExecuteNonQuery();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            userInfo.firstName = "";
            userInfo.lastName = "";
            successMessage = "User Added";

            Response.Redirect("/Users/Index");
        }
    }
}
