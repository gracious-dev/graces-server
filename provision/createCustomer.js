var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

var Customer = Parse.Object.extend("Customer");
var customer = new Customer();

// const uniqid = require('uniqid');
// var tenant_id = uniqid();
var tenant_id = "1iw931n55k9bx5oyj";
customer.set("parent_id", null);
customer.set("tenant_id", tenant_id);
customer.set("name", "Gracious AI");
customer.set("address", "123 Virtual Street, Atherton, CA 91212");
customer.set("contacts", null);
customer.set('status', 'new');

customer.save().then(
  (customer) => {
    console.log('New Customer created with objectId: ' + customer.id);
    return Promise.resolve(tenant_id);
  },
  (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
).then((tid) => {
  // create a Customer user object
  var user = new Parse.User();

  user.set('tenant_id', tid);
  user.set("username", "grace.love");
  user.set("password", "password");
  user.set("email", "grace.love@gracious.ai");
  user.set("phone", "925-111-0101");

  // enforce security: only user can reads this user's data
  user.setACL(new Parse.ACL(Parse.User.current()));

  user.save().then((user) => {
    console.log('New AcctUser created with objectId: ' + user.id);
  });
}, (error) => {
  console.log('Failed with error code: ' + error.message);
});
