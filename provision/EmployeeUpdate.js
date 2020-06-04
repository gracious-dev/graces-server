var Parse = require('parse/node');
Parse.initialize("rxieAppId");
Parse.serverURL = "http://localhost:1337/parse";

const JsonFile = require('jsonfile');
const hrconfig = require("./BambooHR/config.js");
const webhook_data = "./BambooHR/webhook-update.txt"

// we configure the tenent_id in "config.js" file, so all employees imported here are associated with that tenant_id
var tenant_id = hrconfig.tenantId;

// There are two types of updates:  
// 1. add / remove employees:  need to call API to pull in
// 2. update existing employee field values:  setup webhooks for receiving updates

var addEmployee = function(id) {
  // make API call to pull in the employee details:
  //  /api/gateway.php/{company}/v1/employees/{number}?fields={fieldList}

} 

var removeEmployee = function(id) {
  // remove the employee in Gracious system
  // resolve the id to "source_entity_id" 

}

var convertWebhookResults = function() {
  var jsonResults = {};
  // use regexp to pick out "one" employee_id, and get all lines related to that employee_id
  /* process it into a JSON format, such as:
  {[
    {
        "employeeId": "1001",
        "fields": {
            "Job title": "Senior Designer",
            "preferredName": "Flying Monkey"
        }
    }
  ]}
  */
  return jsonResults;
}

var updateFields = function (josnRecords) {
  let chain = Promise.resolve();
  for(const employee of josnRecords) {
    chain = chain.then(() => processUpdate(employee))
  }
}

var processUpdate = function(employee) {
    const query = new Parse.Query("Profile");
    query.equalTo("source_entity_id", employee.id);
    query.find().then((results) => {
      if(results.length > 0) {
        console.log("Profile exists: " + employee.id);
        
      }
      else {
        console.log("Profile does not exist: " + employee.id);   
      }
    });
  }
}  