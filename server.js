const express = require('express')
const app = express()
const score = require('./scores.js')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('scoreboard', score.getScore())
})

app.get('/newScore/:name/:score', function(req, res) {
  score.addScore({"name": req.params.name, "score": req.params.score})
  res.send("wow")
})


app.listen(80)
