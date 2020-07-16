// Each registry entry holds one API endpoint
// It is associated to one Profile field;
// It can take some parameters (with one or a collection of parameter values for each parameter)
// It will return one type of data entity, with a set of result fields to be extracted as values
// It is attached with one or more rules to process the data entity
// contains properites for Config time and Run time.
//

export class RegistryEntry {
  name:String = "";
  endpoint:String;
  params:String[] = [];
  paramValues:Map;
  sampleResult = {};
  entityParser;

  constructor(name, url) {
    this.name = name;
    this.endpoint = url;
  }

  setSampleResult(result) {
    this.sampleResult = result;
  }
  // then base on the sample result to build a parser for result entity

  addQueryParam(param) {
    this.params.push(param);
  }

  collectValues(param, values) {
    const existingValues = this.paramValues.get(param);
    existingValues.add(values);
  }
}

export default RegistryEntry;
