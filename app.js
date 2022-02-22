const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res) => {
  res.send('Login success!')
})

app.get('/products', (req, res) => {
  let data = [
    {
      id: 1,
      name: 'Jacket'
    },
    {
      id: 2,
      name: 'Sandal'
    }
  ]
  es.status(200).json({ data });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})