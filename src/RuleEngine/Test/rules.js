const rule1 = {
  conditions: {
    all: [
      {
        fact: 'athlete',
        operator: 'equal',
        value: true,
      },
      {
        fact: 'GPA',
        operator: 'greaterThanInclusive',
        value: 3.5,
      },
    ],
  },
  event: {
    // define the event to fire when the conditions evaluate truthy
    type: 'honor-roll',
    params: {
      message: 'Student made the athletics honor-roll',
    },
  },
  name: 'Athlete GPA Rule',
};

const rule2 = {
  conditions: {
    all: [
      {
        fact: 'account-information',
        operator: 'equal',
        value: 'microsoft',
        path: '$.company', // access the 'company' property of "account-information"
      },
      {
        fact: 'account-information',
        operator: 'in',
        value: ['active', 'paid-leave'], // 'status'' can be active or paid-leave
        path: '$.status', // access the 'status' property of "account-information"
      },
      {
        fact: 'account-information',
        operator: 'contains',
        value: '2016-12-25',
        path: '$.ptoDaysTaken', // access the 'ptoDaysTaken' property of "account-information"
      },
    ],
  },
  event: {
    type: 'microsoft-christmas-pto',
    params: {
      message: 'current microsoft employee taking christmas day off',
    },
  },
  priority: 10,
};

const rule3 = {
  conditions: {
    all: [
      {
        fact: 'game-result',
        path: '$.status',
        operator: 'equal',
        value: 'win',
      },
    ],
  },
  event: {
    type: 'game-winner',
    params: {
      message: 'won the game!',
    },
  },
};

const rules = [rule1, rule2, rule3];
// const rules = [rule2, rule3];
// const rules = [rule2];

module.exports = rules;
