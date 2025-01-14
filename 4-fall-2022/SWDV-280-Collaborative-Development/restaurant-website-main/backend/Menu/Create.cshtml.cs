using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace TestBackEnd.Pages.Menu
{
    public class CreateModel : PageModel
    {
        public MenuItem menuItem = new MenuItem();
        public string errorMessage = "";
        public string successMessage = "";
        public void OnGet()
        {

        }

        public void OnPost()
        {
            menuItem.MenuItemName = Request.Form["mname"];
            menuItem.MenuItemDescription = Request.Form["mdesc"];
            menuItem.MenuItemPrice = Request.Form["mprice"];

            if (menuItem.MenuItemName == null || menuItem.MenuItemDescription == null)
            {
                errorMessage = "Menu item name and description are required.";
                return;
            }
            else if (menuItem.MenuItemName.Length == 0 || menuItem.MenuItemDescription.Length == 0)
            {
                errorMessage = "Menu item name and description are required.";
                return;
            }

            try
            {
                string connectionString = "Data Source=database-1.cpznz6rshzd4.us-east-1.rds.amazonaws.com,1433;Initial Catalog=restaurant_website;User ID=testuser;Password=NY5H72ZjGM2Le2N";
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string sql = "EXEC AddMenuItem @name = " + menuItem.MenuItemName + ", @type = " + menuItem.MenuItemDescription + ", @price = $" + menuItem.MenuItemPrice.ToString();
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            //command.Parameters.AddWithValue("@first_name", menuItem.MenuItemName);
                            //command.Parameters.AddWithValue("@last_name", menuItem.MenuItemDescription);

                            //command.ExecuteNonQuery();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            menuItem.MenuItemName = "";
            menuItem.MenuItemDescription = "";
            successMessage = "User Added";

            Response.Redirect("/Menu/MenuEditor");
        }
    }
}
