var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

//const uniqid = require('uniqid');
// var tenant_id = uniqid();
var tenant_id = "1iw931n55k9bx5oyj";

const query = new Parse.Query(Parse.User);
query.equalTo("username", "grace.love");
query.find().then((results) => {
  var user = results[0];
  console.log("user: " + user).username;

  var Profile = Parse.Object.extend("Profile");
  var profile = new Profile();
  profile.set("tenant_id", tenant_id);
  profile.set("user", user);
  profile.set("birthday", new Date());
  profile.set("anniversary", new Date());
  profile.set("address", {});
  profile.set("work_address", {});
  profile.set("interests", ['sports', 'travel']);
  profile.set("family", {});
  profile.set("prefered_channel", []);
  profile.set("nudge_filter", {});

  var ProfileExt = Parse.Object.extend("ProfileExt");
  var profExt = new ProfileExt();
  profExt.set("tenant_id", tenant_id);
  profExt.set("user", user);
  profExt.set("badges", []);
  profExt.set("scores", []);
  profExt.set("nps", []);
  profExt.set("feedbacks", []);
  profExt.set("reviews", []);
  profExt.set("actions", []);

  // profileNotes
  var ProfNotes = Parse.Object.extend("ProfileNotes");
  var profNotes = new ProfNotes();
  profNotes.set("tenant_id", tenant_id);
  profNotes.set("user", user);
  profNotes.set("note_owner", user);
  profNotes.set("details", {});

  // profile.set("profileExt", profExt);
  // profile.set("profileNotes", profNotes);

  // actionLogs
  // var actLog = new Parse.Object.extend("ActionLog");
  // actLog.set("tenant_id", tenant_id);
  // actLog.set("user", user);
  // actLog.set("statistics", {});
  var objects = [profile, profExt, profNotes];
  Parse.Object.saveAll(objects).then(
    (profile) => {
      console.log('New object created with objectId: ' + profile.id);
    },
    (error) => {
    // error is a Parse.Error with an error code and message.
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  );
}, (error) => {
  console.log(error.message);
});

