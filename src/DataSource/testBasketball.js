const BasketballDS = require("./BasketballDataSource")

const showGamesResult = function(result) {
  console.log(result.response[0].status);
  console.log(result.response[0].teams);
  console.log(result.response[0].scores);
  var teams = result.response[0].teams;
  var scores = result.response[0].scores;
  console.log(teams.home.name + " - " + scores.home.total)
  console.log(teams.away.name + " - " + scores.away.total)
  console.log();
}

const showTeamsResult = function(result) {
  // console.log(result);
  var teams = result.response;
  for (const team of teams) {
    console.log(team.name + " id: " + team.id);
  }
  console.log();
}

const basketball = new BasketballDS();

basketball.connect("games");
var options = {
  "season":"2019-2020",
  "date":"2019-11-26",
  "team":"145"
}
basketball.query(options, showGamesResult);


basketball.connect("teams");
options = {
  "season":"2019-2020"
}
basketball.query(options, showTeamsResult);
