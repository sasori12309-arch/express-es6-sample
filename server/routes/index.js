import express from 'express';

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('My Student ID is 21938690. Welcome to Express');
});

export default router;
