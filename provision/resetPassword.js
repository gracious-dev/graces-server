var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

Parse.User.requestPasswordReset("raymond.xie@gracious.ai").then(() => {
  console.log("Password reset request was sent successfully");
}).catch((error) => {
  console.log("The login failed with error: " + error.code + " " + error.message);
});
