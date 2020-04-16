const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/json_test', function (req, res) {
  res.json({
    postfix: "Build Status",
    color: "green",
    data: { value: "Passed" }
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))