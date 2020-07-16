// Each registry entry holds one API endpoint
// It is associated to one Profile field;
// It can take some parameters (with one or a collection of parameter values for each parameter)
// It will return one type of data entity, with a set of result fields to be extracted as values
// It is attached with one or more rules to process the data entity
// contains properites for Config time and Run time.
export class DsRegistry {
  regitry = [];

  addEntry(entry) {
    this.regitry.add(entry);
  }

}

export default DsRegistry;
