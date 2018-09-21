const jsonFile = require("jsonfile")

const SCORE_FILE_NAME = "scores.json"
const JSON_FILE_PARAMETERS = {spaces: 2}



// Add a score to the json file
// @param the new score (object with score and name)
exports.addScore = (newScore) => {
  console.log("addscore")
  jsonFile.readFile(SCORE_FILE_NAME, (err, score) => {
    score.scores.push(newScore)
    score.scores.sort(sortByScore)
    console.log(score)

    jsonFile.writeFile(SCORE_FILE_NAME, score, JSON_FILE_PARAMETERS,  (err) => {
      console.log(score)
      if(err)
        console.log("err" + err)
    })
  });
},

// Get the scores for the highscores lists
exports.getScore = () => {
  return jsonFile.readFileSync(SCORE_FILE_NAME)
}

// Deletes all the scores from the scoreboard
exports.deleteAllScores = () => {
  score.scores = []
  jsonFile.writeFile(SCORE_FILE_NAME, score, JSON_FILE_PARAMETERS, (err) => {
    console.log(score)
    if(err)
      console.log("err" + err)
  })
}

// Sort by score
// @Param object with score
function sortByScore(a, b) {
  return b.score - a.scores
}
