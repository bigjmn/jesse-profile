var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shock-and-draw', function(req, res, next){
  res.render('shock-and-draw')
})

router.get('/chess-stats', function(req, res, next){
  res.render('chess-stats')
})

router.get('/tetris-buddies', function(req, res, next){
  res.render('tetris-project-page')
})

router.get('/q-maze-ai', function(req, res, next){
  res.render('mazebot-project-page')
})

module.exports = router;
