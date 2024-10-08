using Cities.Core.Entities;
using Cities.Core.Repositories;
using Cities.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cities.Service
{
    public class CityService : ICityService
    {
        private readonly ICityRepository _cityReposutory;
        public CityService(ICityRepository cityRepository)
        {
            _cityReposutory = cityRepository;  
        }
        public List<City> GetAll()
        {
            return _cityReposutory.GetList();
        }
        public City GetById(int id)
        {
            return _cityReposutory.GetById(id);
        }
        public City Add(City city)
        {
            return _cityReposutory.Add(city);
        }
        public City Update(int id ,City city)
        {
            return _cityReposutory.Update(id,city);
        }
        public void DeleteById(int id)
        {
            _cityReposutory.Delete(id);
        }
    }
}
