// DataEntity holds information for getting an actual data record object,
// by query a data source with specific set of parameters.
// For example, a configuration to get an NBA game result of Lakers on a particular date.
// the result shall have some "fixed" attributes, so rules can be created out of those attributes.

export class DataEntity {
  constructor() {
    this.properties = []; // a list of properties to be evaluated by rule engine
    this.rules = new Map();
  }

  addRule(rule) {
    this.rules.set(rule.id, rule);
  }

  getRule(id) {
    return this.rules.get(id);
  }

  getRules() {
    return this.rules;
  }
}

export default DataEntity;
