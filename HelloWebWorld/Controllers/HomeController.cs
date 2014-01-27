using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using HelloWebWorld.Models;

namespace HelloWebWorld.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult GetMessage(UserData myData)
        {
            myData.UserName += " (verified)";
            var dt = DateTime.Now.AddYears(-1);
            DateTime.TryParse(myData.RequestedDate, out dt);
            myData.RequestedDate = dt.ToLongDateString();
            myData.ServerDate = DateTime.Now.ToShortDateString();
            return Json(myData, JsonRequestBehavior.AllowGet);
        }
    }
}
