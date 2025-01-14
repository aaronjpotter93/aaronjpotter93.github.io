using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;
using TestBackEnd.Pages.Users;

namespace TestBackEnd.Pages.Menu
{
    public class MenuEditorModel : PageModel
    {
        public List<MenuItem> menu = new List<MenuItem>();
        public List<IngredientInfo> ingredients = new List<IngredientInfo>();
        public void OnGet()
        {
            try
            {
                string connectionString = "Data Source=database-1.cpznz6rshzd4.us-east-1.rds.amazonaws.com,1433;Initial Catalog=restaurant_website;User ID=aidenb;Password=1xRw1ZXcLZaCwRz";
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string sql = "SELECT * FROM items";
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                MenuItem menuItem = new MenuItem();
                                menuItem.id = "" + reader.GetInt32(4);
                                menuItem.MenuItemName = reader.GetString(0);
                                menuItem.MenuItemDescription = reader.GetString(1);
                                //menuItem.MenuItemPrice = "" + reader.GetFloat(2);
                                //menuItem.MenuItemPrice = menuItem.MenuItemPriceCalc(reader.GetFloat(2));
                                //menuItem.Ingredients = "" + reader.GetInt32(2);
                                //userInfo.created_at = reader.GetDateTime(3).ToString();
                                menu.Add(menuItem);
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
    public class MenuItem
    {
        public string id { get; set; }
        public string MenuItemName { get; set; }
        public string MenuItemDescription { get; set; }
        public List<Tuple<string, decimal>> Ingredients { get; set; }
        public string MenuItemPrice { get; set; }
        public float MenuItemPriceCalc(float iList)
        {
            //decimal cost = 0;
            //foreach (Tuple<string, decimal> price in Ingredients)
            //{
            //    cost += price.Item2;
            //}
            //return cost;
            return iList;
        }
    }
    public class IngredientInfo
    {

    }
}
