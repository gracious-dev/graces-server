var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

Parse.User.logIn("rxie", "password").then((user) => {
  console.log('User login successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
}).catch((error) => {
  console.log("Error: " + error.code + " " + error.message);
});
