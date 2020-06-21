// Representing "Fact" for Rule Engineering processing: properties and functions
export class ReFact {
  // functions for "Fact"
  className() {
    return 'ReFact';
  }

  load() {
    const fs = require('fs');
    const facts = JSON.parse(fs.readFileSync('../Test/facts.json', 'utf8'));
    return facts;
  }
}

export default ReFact;
