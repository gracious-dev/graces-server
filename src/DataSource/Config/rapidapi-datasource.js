const weatherDs = {
  id: "weather",
  label: "weather",
  description: "Weather data source from Rapid API",
  url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
  headers: {
    "x-rapidapi-host":"weatherbit-v1-mashape.p.rapidapi.com",
    "x-rapidapi-key":"b48b49f9e1msh6dec5a0c703c0a6p1404f2jsn7129a198230e",
    "useQueryString":true
  },
  defaults: {
    units: 'I',
    lang: 'en'
  }
}

/*
set in GET path, with a set of query parameters
games/
teams/
each materialized url will have its own response parsers, and extracted entity attributes
*/
const basketBallDs = {
  id: "basketball",
  label: "sports/BasketBall",
  description: "Basketball data source from Rapid API",
  url: "https://api-basketball.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host":"api-basketball.p.rapidapi.com",
    "x-rapidapi-key":"b48b49f9e1msh6dec5a0c703c0a6p1404f2jsn7129a198230e",
    "useQueryString":true
  },
  defaults: {
    league: 12
  }
}

/*
set in GET path.
nu/news/INTU
qu/quote/TSLA,MSFT,APPL

each materialized URL will have its own response parser
*/
const financialNewsDs = {
  id: "news",
  label: "corporate/news",
  description: "Financial News data source from Rapid API",
  url: "https://yahoo-finance15.p.rapidapi.com/api/yahoo/",
  headers: {
    "x-rapidapi-host":"yahoo-finance15.p.rapidapi.com",
    "x-rapidapi-key":"b48b49f9e1msh6dec5a0c703c0a6p1404f2jsn7129a198230e",
    "useQueryString":true
  }
}

const RapidAPI = {
  weather: weatherDs,
  basketball: basketBallDs,
  financial: financialNewsDs
}

module.exports = RapidAPI;
