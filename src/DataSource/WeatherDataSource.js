// Data from RapidApi - could use subclass, or parameters to constructor to fetch particular types of data
// import DataSource from "./DataSource";
// import Config from "./Config/weather-datasource";
const DataSource = require("./DataSource");
const Config = require("./Config/rapidapi-datasource").weather;

class WeatherDataSource extends DataSource {
  constructor() {
    super(Config.id, Config.label);
    this.desc = Config.description;

    this.config = {};
    this.entities = new Map();
    this._cache = {};
    this.req = null;
  }

  connect() {
    var unirest = require("unirest")
    this.req = unirest.get(Config.url);
    this.req.headers(Config.headers);
  }

  query(query) {
    var result = null;
    this.req.query(query);
    // console.log(this.req);
    this.req
      .then((res) => {
        // console.log(res);
        if (res.error) {
          console.log(res.error);
        }
        else {
          result = res.body;
        }
        console.log(result);
        return result;
      });
  }
}

module.exports = WeatherDataSource;
// export default WeatherDataSource;
