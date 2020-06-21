// the smallest unit of Rule
export class RuleElement {
  constructor(fact, operator, value) {
    this.fact = fact; // the particular field / parameter of source data
    this.operator = operator;
    this.value = value;
  }

  getElement() {
    return new JSON(this);
  }
}
