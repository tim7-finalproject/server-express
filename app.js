const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res) => {
  res.send('Login success!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})