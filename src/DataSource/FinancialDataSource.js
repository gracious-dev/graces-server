// Data from RapidApi - could use subclass, or parameters to constructor to fetch particular types of data
// import DataSource from "./DataSource";
// import Config from "./Config/weather-datasource";
const DataSource = require("./DataSource");
const Config = require("./Config/rapidapi-datasource").financial;

class FinancialDataSource extends DataSource {
  constructor() {
    super(Config.id, Config.label);
    this.desc = Config.description;

    this.config = {};
    this.entities = new Map();
    this._cache = {};
    this._endPoints = {"news": "ne/news/", "quotes": "qu/quote/"};
    this.req = null;
  }

  connect(endpoint, query) {
    var unirest = require("unirest")
    var ep = this._endPoints[endpoint];
    console.log("endpoints: " + endpoint + "  ep: " + ep);
    this.req = unirest.get(Config.url + ep + query);
    this.req.headers(Config.headers);
  }

  query(callback) {
    var result = null;

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

module.exports = FinancialDataSource;
