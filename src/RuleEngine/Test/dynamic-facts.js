const Fact = require('json-rules-engine').Fact;
const api = require('./facts-source.js');

const acctFact = new Fact('account-information', function (params, almanac) {
  return almanac.factValue('username').then((username) => {
    return api.getAccountInformation(username);
  });
});
// const facts = [acctFact];
// module.exports = facts;

// let studentFact = api.getStudents();
// module.exports = studentFact;

const gameFact = new Fact('game-result', function (params, almanac) {
  return almanac.factValue('teamname').then((team) => {
    return api.getGameResult(team);
  });
});

const facts = [acctFact, gameFact];
module.exports = facts;
