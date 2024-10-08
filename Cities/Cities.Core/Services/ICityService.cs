using Cities.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cities.Core.Services
{
    public interface ICityService
    {
        public List<City> GetAll();
        public City GetById(int id);
        public City Add(City city);
        public City Update(int id, City city);
        public void DeleteById(int id);


    }
}
