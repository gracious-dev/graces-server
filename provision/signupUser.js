var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

var user = new Parse.User();
// three User fields
user.set("username", "rxie");
user.set("password", "password");
user.set("email", "raymond.xie@gracious.ai");
// any other fields
user.set("phone", "925-222-0202");
user.set('tid', "1iw9321pzk9awcchu");

// enforce security: only user can reads this user's data
// user.setACL(new Parse.ACL(user));
user.setACL(new Parse.ACL(Parse.User.current()));

user.signUp().then((user) => {
  console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
}).catch((error) => {
  console.log("Error: " + error.code + " " + error.message);
});

// try {
//   await user.signUp();
// }
// catch (error) {
//   // Show error message and let the user try again.
//   console.log("Error: " + error.code + " " + error.message);
// }
