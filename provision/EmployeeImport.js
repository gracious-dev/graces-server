var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

const JsonFile = require('jsonfile');
// get employee directory:
// https://api.bamboohr.com/api/gateway.php/gracious8/v1/employees/directory
// here an example dump of employee directory
const employeeDirectoryFile = "./BambooHR/directory.json";
const hrconfig = require("./BambooHR/config");

// const uniqid = require('uniqid');
// var tenant_id = uniqid();
// We have created a new customer/company, and got a new tenant_id
// we configure the tenent_id in "config.js" file, so all employees imported here are associated with that tenant_id
var tenant_id = hrconfig.tenantId;

JsonFile.readFile(employeeDirectoryFile)
  .then(obj => {
    // console.dir(obj)
    let chain = Promise.resolve();

    for(const employee of obj.employees) {
      chain = chain.then(() => processImport(employee))
    }
    // console.log(mappings);
  })
  .catch(error => console.error(error));

var processImport = function(employee) {
  const query = new Parse.Query("Profile");
  query.equalTo("email", employee.workEmail);
  query.find().then((results) => {
    if(results.length > 0) {
      console.log("Profile exists: " + employee.workEmail);
    }
    else {
      addUser(employee).then((user) => {
        importProfile(user, employee);
      });

    }
  });
}

var addUser = function(employee) {
  console.log(employee.workEmail);

  // add employee to User table if not existed yet
  // return user_id
  var addUserPromise = new Promise(function(resolve, reject) {
    var user = new Parse.User();
    user.set('tenant_id', tenant_id);
    
    user.set("username", employee.firstName + "." + employee.lastName);
    user.set("password", "Welcome.Gracious.8");
    user.set("email", employee.workEmail);
    user.set("phone", employee.workPhone);

    // enforce security: only user can reads this user's data
    user.setACL(new Parse.ACL(Parse.User.current()));
    user.save().then(
      (user) => {
        console.log("created new user: " + user.id);
        resolve(user);
      },
      (error) => {
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
        reject(error);
      }
    )
  });

  return addUserPromise;
}

// add employee information into Profile table
var importProfile = function(user, employee) {
  var Profile = Parse.Object.extend("Profile");
  var profile = new Profile();
  profile.set('tenant_id', tenant_id);
  profile.set("user", user);

  var mappings = hrconfig.fieldMappings;
  Object.entries(mappings).forEach(([key, value]) => {
    // console.log(`${key} ${value}`);
    profile.set(key, employee[value]);
  });
  // srcEntityId: should be set in the fieldMapping config
  // profile.set("srcEntityId", employee.id)

  Parse.Object.saveAll(profile).then(
    (newProfile) => {
      console.log('New object created with objectId: ' + newProfile.id);
    },
    (error) => {
      // error is a Parse.Error with an error code and message.
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  )
}
