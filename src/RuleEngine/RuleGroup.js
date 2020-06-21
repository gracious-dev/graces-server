// a grouping of a set of rule elements
export class RuleGroup {
  constructor(flagAll) {
    this.flag = flagAll; // true - all, false - any
    this.group = [];
  }

  addRuleElement(element) {
    this.group.push(element);
  }

  getGroup() {
    const rules = [];
    for (const item of this.group) {
      rules.push(item);
    }

    let tmp = null;
    if (this.flag) {
      tmp = { all: rules };
    } else {
      tmp = { any: rules };
    }
    return tmp;
  }
}
