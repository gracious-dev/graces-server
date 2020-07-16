const WeatherDS = require("./WeatherDataSource")

const weather = new WeatherDS();
weather.connect();
var options = {
  'lat':'37.91',
  'lon':'-122.06',
  'lang':'en'
}

weather.query(options);
