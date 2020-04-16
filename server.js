require('coffee-script/register')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
let {getJson} = require('art-rest-client')

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/json_test', function (req, res) {
  res.json({
    postfix: "Cool Seconds",
    color: "blue",
    data: { value: `${(new Date).getSeconds()}` }
  });
});

app.get('/iss', (req, res) => {
  getJson("http://api.open-notify.org/iss-now.json")
  .then (({iss_position}) => {
    let {latitude, longitude} = iss_position;
    res.json({
      postfix: "coordinates", color: "green", data: [{value: latitude}, {value: longitude}]
    })
  })
});

app.get('/json_graph', function (req, res) {
  res.json({
    color: "green",
    data: [
      {
        name: "Jean-Luc Picard",
        value: 1450
      },
      {
        name: "James T. Kirk",
        value: 350
      },
      {
        name: "Kathryn Janeway",
        value: 1850
      }
    ]
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
