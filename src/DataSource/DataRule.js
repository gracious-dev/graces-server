// Represents a rule created on DataEntity
import uniqid from 'uniqid';

export class DataRule {
  constructor(name, subject, priority = 1) {
    this.name = name;
    this.subject = subject; // to refer to an entity or a fact, also to profile (e.g. hire-date for work anniversary)
    this.priority = priority;
    this.id = uniqid();
  }

  setCondition(condition) {
    this.conditions = condition;
  }

  setEvent(event) {
    this.event = event;
  }

  save() {
    // persist to database
  }
}

export default DataRule;
