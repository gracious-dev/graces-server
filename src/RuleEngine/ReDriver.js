// Driver program to start the entire process
// main program to start up Rule Engine
const facts = require('./Test/dynamic-facts');
const rules = require('./Test/rules');
const Processor = require('./ReProcessor.js');

const callback = (status, event, almanac, ruleResult) => {
  console.log('-->', status);
  console.log(event.params.message);
  console.log(almanac);
  console.log(ruleResult);

  almanac.factValue('username').then((username) => {
    console.log(`${username} is a ${event.params.message}`);
  });
};

// known facts
const joe = { athlete: false, GPA: 3.9, username: 'joe' };
const larry = { athlete: true, GPA: 3.5, username: 'larry' };

// input to query facts
const jefferson = { username: 'jefferson' };
const washington = { username: 'washington' };
const lincoln = { username: 'lincoln' };

// input to query facts
const lakers = { teamname: 'Lakers' };
const warriors = { teamname: 'Warriors' };

var input1 = [lincoln, washington, jefferson];
var input2 = [joe, larry, lincoln];
var input3 = [lakers, warriors];

const inputs = input1.concat(input3).concat(input2);

const processor = new Processor(callback);
processor.addRules(rules);
processor.addFacts(facts);

processor.addInputs(inputs);
processor.startAll();
// processor.start(input1);
