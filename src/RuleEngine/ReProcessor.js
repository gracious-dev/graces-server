// RuleEngine Main Processor
// It uses an instance of engine, which can hold a set or subset of rules, to process a specific set of facts.
// We can run multiple instances of this class to process varieties of data sources independently.

const Engine = require('json-rules-engine').Engine;
class ReProcessor {
  constructor(cb) {
    const options = { allowUndefinedFacts: false };
    this.engine = new Engine([], options);

    this.engine.on('success', (event, almanac, ruleResult) => {
      cb('success', event, almanac, ruleResult);
    });

    this.engine.on('failure', (event, almanac, ruleResult) => {
      cb('failure', event, almanac, ruleResult);
    });

    this.inputs = [];
  }

  addRule(rule) {
    this.engine.addRule(rule);
  }

  addRules(rules) {
    for (var rule of rules) {
      console.log(rule);
      this.engine.addRule(rule);
    }
  }

  addFact(fact) {
    this.engine.addFact(fact);
  }

  addFacts(facts) {
    for (var fact of facts) {
      console.log(fact);
      this.engine.addFact(fact);
    }
  }

  addInputs(inputs) {
    for (var input of inputs) {
      this.inputs.push(input);
    }
  }

  startAll() {
    if (this.inputs.length === 0) {
      console.log('===> No inputs to start rule engine. Quitting...');
    } else {
      this.start(this.inputs);
    }
  }

  start(inputs) {
    const jobs = inputs.map((input) => {
      try {
        this.engine.run(input);
      } catch (e) {
        console.log('error in running engine: ', e);
      }
    });
    Promise.all(jobs);
  }

  stop() {
    this.engine.stop();
  }
}

module.exports = ReProcessor;
