// Redis cache for data source
const redis = require('redis');

export class DataCache {
  constructor(connectionString) {
    if (connectionString === undefined) {
      console.error('Please set the REDIS_URL environment variable');
      process.exit(1);
    }

    if (connectionString.startsWith('rediss://')) {
      this.client = redis.createClient(connectionString, {
        tls: { servername: new URL(connectionString).hostname },
      });
    } else {
      this.client = redis.createClient(connectionString);
    }
  }

  static get(key) {
    this.client.get(key).then((err, result) => {
      if (result) {
        return new JSON(result);
      }
      if (err) {
        console.log('Error in retrieving from cache');
        return null;
      }
    });
  }

  static set(key, jsonObject) {
    const jsonString = JSON.stringify(jsonObject);
    this.client.set(key, jsonString);
  }

  static setEx(key, ttl, jsonObject) {
    const jsonString = JSON.stringify(jsonObject);
    this.client.setex(key, ttl, jsonString);
  }
}

export default DataCache;
