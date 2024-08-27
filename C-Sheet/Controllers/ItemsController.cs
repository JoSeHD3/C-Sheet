using C_Sheet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace C_Sheet.Controllers
{
    public class ItemsController : Controller
    {
        public IActionResult Index()
        {
            var items = new List<Item>
            {
                new Item { Id = 1, Name = "Item 1", Quantity = 5 },
                new Item { Id = 2, Name = "Item 2", Quantity = 3 },
                new Item { Id = 3, Name = "Item 3", Quantity = 4 }
            };

            ViewBag.InitialData = System.Text.Json.JsonSerializer.Serialize(items);

            return View();
        }
    }
}
