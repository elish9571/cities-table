function addCity() {
    var name = document.getElementById("name").value;
    axios.post("https://localhost:7040/api/Cities", {
        name: name   
      }).then((res) => {
        console.log("add:", res);
    }).catch((err) => {
        console.log("An error occurred while adding:", err);
    })
}
function getCitiesTemp() {
    axios.get("https://localhost:7040/api/Cities").then((res) => {
        console.log("get:", res);
    }).catch((err) => {
        console.log("An error occurred while getting:", err);
    })
}
function getCities() {
  document.addEventListener("DOMContentLoaded", function () {
    axios.get("https://localhost:7040/api/Cities").then((res) => {
      var cities = res.data;
      cities.forEach((city) => {
        var row = document.createElement("tr");
        row.innerHTML = `
          <td>${city.name}</td>
          <td><button onclick="updateEvent()">update</button></td>
          <td><button onclick="deleteEvent()">delete</button></td>
        `;
        document.getElementById("oDiv").appendChild(row);
      });
      var table = document.getElementById("table");
      table.render();
    });
  });
;

}
 
  function updateEvent() {
    var cityId = document.getElementById("id").value;
    axios.put(`https://localhost:7040/api/Cities${cityId}`, {
        name: name
    }).then((res) => {
        console.log("Update:", res);
    }).catch((err) => {
        console.log("An error occurred while update:", err);
    })
}

function deleteEvent() {
    var id = document.getElementById("id").value;
    axios.delete(`https://localhost:7040/api/Cities${id}`, {
      id: id,
        name: name
      }).then((res) => {
        console.log("Delete:", res);
    }).catch((err) => {
        console.log("An error occurred while deleting:", err);
    })
  }