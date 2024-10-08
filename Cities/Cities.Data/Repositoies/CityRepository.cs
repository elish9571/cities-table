using Cities.Core.Entities;
using Cities.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cities.Data.Repositoies
{
    public class CityRepository : ICityRepository
    {   
        private readonly DataContext _context;
        public CityRepository(DataContext context)
        {
            _context = context;
        }

        public List<City> GetList()
        {
            return _context.Cities.ToList();
        }
        public City GetById(int id)
        {
            return _context.Cities.SingleOrDefault(c => c.Id == id);
        }
        public City Add(City newCity)
        {
            _context.Cities.Add(newCity);
            _context.SaveChanges();
            return newCity;
        }

        public City Update(int id, City city)
        {
            var existCity = GetById(id);

            existCity.Name = city.Name;

            _context.SaveChanges();
            return existCity;
        }

        public void Delete(int id)
        {
            var city = GetById(id);
            _context.Cities.Remove(city);
            _context.SaveChanges();
        }

    }
}
