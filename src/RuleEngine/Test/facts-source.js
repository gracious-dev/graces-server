'use strict';

const accountData = {
  washington: {
    company: 'microsoft',
    status: 'terminated',
    ptoDaysTaken: ['2016-12-25', '2016-04-01'],
    createdAt: '2012-02-14',
  },
  jefferson: {
    company: 'apple',
    status: 'active',
    ptoDaysTaken: ['2015-01-25'],
    createdAt: '2005-04-03',
  },
  lincoln: {
    company: 'microsoft',
    status: 'active',
    ptoDaysTaken: ['2016-02-21', '2016-12-25', '2016-03-28'],
    createdAt: '2015-06-26',
  },
};

const students = [
  { athlete: false, GPA: 3.9, username: 'joe' },
  { athlete: true, GPA: 3.5, username: 'larry' },
  { athlete: false, GPA: 3.1, username: 'jane' },
  { athlete: true, GPA: 4.0, username: 'janet' },
  { athlete: true, GPA: 1.1, username: 'sarah' },
];

const basketballs = {
  Lakers: {
    status: 'win',
    score: 125,
    opponent: 'Clippers',
    oppt_score: 118,
    gameDay: '2020-02-12',
  },
  Bucks: {
    status: 'win',
    score: 133,
    opponent: 'Raptors',
    oppt_score: 108,
    gameDay: '2020-02-12',
  },
  Warriors: {
    status: 'loss',
    score: 112,
    opponent: 'Mavericks',
    oppt_score: 125,
    gameDay: '2020-02-13',
  },
};

/**
 * mock api client for retrieving data
 */

module.exports = {
  getAccountInformation: (accountId) => {
    var message = 'loading account information for "' + accountId + '"';
    console.log(message);
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setImmediate(() => {
        resolve(accountData[accountId]);
      });
    });
  },

  getStudent: (name) => {
    var message = 'loading student information for "' + name + '"';
    console.log(message);
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setImmediate(() => {
        for (var student in students) {
          if (student.name === name) {
            resolve(student);
            break;
          }
        }
      });
    });
  },

  getStudents: () => {
    return students;
  },

  getGameResult: (team) => {
    console.log('fetching game results for ' + team);
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setImmediate(() => {
        resolve(basketballs[team]);
      });
    });
  },
};
