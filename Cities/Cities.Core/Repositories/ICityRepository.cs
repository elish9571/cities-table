using Cities.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cities.Core.Repositories
{
    public interface ICityRepository
    {
        public List<City> GetList();
        public City GetById(int id);
        public City Add(City newCity);
        public City Update(int id, City city);
        public void Delete(int id);

    }
}
