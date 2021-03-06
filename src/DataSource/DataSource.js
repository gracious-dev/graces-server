// Represents a data source for incoming data points
// import DataCache from './DataCache';
// import hash from 'object-hash';
const DataCache = require('./DataCache');
const hash = require('object-hash');

class DataSource {
  constructor(sourceId, labelPath) {
    this.id = sourceId;
    this.path = labelPath;
    this.desc = '';
    this.config = {};
    this.entities = new Map();
    // may make multiple queries with different parameters, we should cache them
    this._cache = {};
  }

  // get id() {
  //   return this.id;
  // }

  // get desc() {
  //   return this.desc;
  // }

  config(options) {
    this.config = options;
  }

  connect() {
    // to be implemented by child class
  }

  fetch(query) {
    // to be implemented by child class
    console.log(query);
  }

  get(label, options) {
    if (!options) {
      options = {};
    }
    options.path = label;
    const key = hash(options);
    let cache = DataCache.get(key);
    if (!cache) {
      cache = this.fetch(options);
      DataCache(key, cache);
    }
  }

  setEntity(entity) {
    this.entities.set(entity.id, entity);
  }
  getEntity(id) {
    return this.entities.get(id);
  }
  getEntities() {
    return this.entities;
  }
}

module.exports = DataSource;
