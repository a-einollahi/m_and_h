const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('>>>', req.body);
  res.json({ text: 'Hello world' });
});

module.exports = router;
