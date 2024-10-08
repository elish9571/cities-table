const express = require('express');
const app = express();
const path = require('path');

// // הגדרת תיקיה סטטית
// app.use(express.static(path.join(__dirname, 'public')));

// דף הבית
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const url = ("https://localhost:7040/api/Cities");
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// fetch(url)
//   .then(res => res.json())
//   .then(data => {

//   })
//   .catch(err => {
//     console.error('Error: ', err)
//   })


// post body data
const city = {
 name: 'Tel-Aviv',
}

// request options
const options = {
  method: 'POST',
  body: JSON.stringify(city),
  headers: {
    'Content-Type': 'application/json'
  }
}

// send POST request
fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res))


// post body data
const user = {
  first_name: 'John',
  last_name: 'Doe',
  job_title: 'Blogger'
}

// create request object
const request = new Request(url, {
  method: 'POST',
  body: JSON.stringify(city),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})

// pass request object to `fetch()`
fetch(request)
  .then(res => res.json())
  .then(res => console.log(res))