// Representing "Rule" for Rule Engineering processing: properties and functions
export class ReRule {
  className() {
    return 'ReRule';
  }
  // list of properties
  /*
  id
  tenant_id
  name
  subject     --> to refer to a fact, also to profile (e.g. hire-date for work anniversary)
  property
  operattor
  value
  priority    --> to control rule engine execution order
  */

  // functions for "Rule"
  load() {
    const fs = require('fs');
    const rules = JSON.parse(fs.readFileSync('../Test/rules.json', 'utf8'));
    return rules;
  }
}

export default ReRule;
