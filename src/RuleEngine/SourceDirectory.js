// The directories of data sources.
// To be used to organize data sources, data entity and associated rules
// Note: each entry has id, for identify and for store/retrieve.
// This complete directory is stored internally as "source/entity/rule"
// The data sources have a "label-path" to "conceptually" organize the data sources,
// such as "Sports/Basketball" adding a virtual structure,
// even though all datasources are flat in SourceDirectory.

/*
  Directory: Map()
    Source1: Map()
      /Entity1a
      /Entity1b
    Source2
      /Entity2a
      /Entity2b: Map()
        /Rule2b1
        /Rule2b2
      /Entity2c
*/

export class SourceDirectory {
  constructor() {
    this.directory = new Map();
  }

  // source: an instance of Data Source
  addSource(source) {
    const sourceId = source.id;
    this.directory.set(sourceId, source);
  }

  getSource(id) {
    return this.directory.get(id);
  }

  addEntity(sourceId, entity) {
    const source = this.getSource(sourceId);
    if (source) {
      source.setEntity(entity);
    } else {
      console.log('No data source with ID: ' + sourceId);
    }
  }

  getEntity(sourceId, id) {
    const source = this.getSource(sourceId);
    if (source) {
      return source.getEntity(id);
    }

    return null;
  }

  findEntity(id) {
    const sources = this.directory;
    for (const source of sources.values()) {
      const entity = source.get(id);
      if (entity) {
        return entity;
      }
    }
    return null;
  }
}

export default SourceDirectory;
