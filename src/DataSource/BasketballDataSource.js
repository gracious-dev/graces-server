// Data from RapidApi - could use subclass, or parameters to constructor to fetch particular types of data
// import DataSource from "./DataSource";
// import Config from "./Config/weather-datasource";
const DataSource = require("./DataSource");
const Config = require("./Config/rapidapi-datasource").basketball;

class WeatherDataSource extends DataSource {
  constructor() {
    super(Config.id, Config.label);
    this.desc = Config.description;

    this.config = {};
    this.entities = new Map();
    this._cache = {};
    this.req = null;
  }

  connect(what) {
    var unirest = require("unirest")
    this.req = unirest.get(Config.url + what);
    this.req.headers(Config.headers);
  }

  query(query, callback) {
    var result = null;
    // add league number
    query.league = Config.defaults.league;

    this.req.query(query);
    this.req
      .then((res) => {
        // console.log(res);
        if (res.error) {
          console.log(res.error);
        }
        else {
          result = res.body;
        }
        callback(result);
      });
  }
}

module.exports = WeatherDataSource;
// export default WeatherDataSource;
