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
  res.status(200).json({ data });
})

app.get('/gsignin', (req, res) => {
  let token = "h28b91b2y 81vbu2b192h9iu1h92192"
  res.status(200).json({ access_token: token });
})

app.delete('/products', (req, res) => {
  res.send('Product has been deleted!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})