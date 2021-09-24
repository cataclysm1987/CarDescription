using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarDescription.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarController : ControllerBase
    {

        private readonly ILogger<CarController> _logger;

        public CarController(ILogger<CarController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return new List<Car>(){
                new Car("Corvette", "Chevrolet", 59995, "Sports Car"),
                new Car("GV80", "Genesis", 48900, "SUV"),
                new Car("Accord", "Honda", 24970, "Sedan"),
                new Car("Tellurida", "Kia", 32790, "SUV"),
                new Car("CX-5", "Mazda", 34160, "SUV"),
                new Car("718 Boxster", "Porsche", 62600, "Sports Car"),
                new Car("Macan", "Porsche", 54900, "SUV"),
                new Car("1500", "Ram", 33975, "Pickup Truck"),
                new Car("Supra", "Toyota", 43190, "Sports Car"),
                new Car("Golf GTI", "Volkswagen", 28695, "Sedan"),
            };
        }

        public class Car
        {
            public string Model { get; set; }
            public string Make { get; set; }
            public double Price { get; set; }
            public string Type { get; set; }

            public Car(string model, string make, double price, string type)
            {
                Model = model;
                Make = make;
                Price = price;
                Type = type;
            }
        }


    }
}
