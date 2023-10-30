const express = require('express');
const router = express.Router();

// Import your data or mock data here if necessary

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render your template here
  res.render('index', { title: 'Food Blog', posts: /* Your posts data */ });
});

module.exports = router;

