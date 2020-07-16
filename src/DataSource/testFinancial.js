const FinancialDS = require("./FinancialDataSource")

var newsCallback = function(result) {
  let count = 0;
  for(const story of result.item) {
    console.log("============");
    console.log(story.title);
    console.log(story.description);
    console.log();
    if (count++ > 5) break;
  }
}

var quotesCallback = function(result) {
  for(const quote of result) {
    console.log(quote.shortName + " (" + quote.symbol + "): " + quote.regularMarketPrice);
  }
  console.log();
}

const financial = new FinancialDS();
financial.connect("news", "INTU");
financial.query(newsCallback);

financial.connect("quotes", "TSLA,MSFT,SBUX");
financial.query(quotesCallback);
