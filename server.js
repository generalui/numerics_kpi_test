const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/json_test', function (req, res) {
  res.json({
    postfix: "Cool Seconds",
    color: "blue",
    data: { value: `${(new Date).getSeconds()}` }
  });
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
