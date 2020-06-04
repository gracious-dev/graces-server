var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

//const uniqid = require('uniqid');
// var tenant_id = uniqid();
var tenant_id = "1iw931n55k9bx5oyj";

const query = new Parse.Query('Profile');
query.equalTo("workEmail", "faraz.syed@gracious.ai");
query.find().then((results) => {
  var obj = results[0];
  console.log(obj.get('displayName'));
});


/*
const query = new Parse.Query('_User');
query.equalTo("username", "rxie");
query.find().then((results) => {
  var obj = results[0];
  console.dir(obj);
});
*/