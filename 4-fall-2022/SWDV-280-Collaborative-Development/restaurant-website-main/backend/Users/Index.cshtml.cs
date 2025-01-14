using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace TestBackEnd.Pages.Users
{
    public class IndexModel : PageModel
    {
        public List<UserInfo> users = new List<UserInfo>();
        public void OnGet()
        {

            try
            {
                string connectionString = "Data Source=database-1.cpznz6rshzd4.us-east-1.rds.amazonaws.com,1433;Initial Catalog=restaurant_website;User ID=aidenb;Password=1xRw1ZXcLZaCwRz";
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string sql = "SELECT * FROM users";
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                UserInfo userInfo = new UserInfo();
                                userInfo.firstName = reader.GetString(1);
                                userInfo.lastName = reader.GetString(0);
                                userInfo.id = ""+reader.GetInt32(2);
                                //userInfo.created_at = reader.GetDateTime(3).ToString();
                                users.Add(userInfo);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }

    public class UserInfo
    {
        public string id;
        public string firstName;
        public string lastName;
        internal string created_at;
    }

    
}
