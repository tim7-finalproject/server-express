const router = require('express').Router();

router.post('/register', (req, res) => {
  res.send('register success!')
})

module.exports = router;