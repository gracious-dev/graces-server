var config = {};

config.fieldMappings = {
  srcEntityId: "id",
  displayName: "displayName",
  firstName: "firstName",
  lastName: "lastName",
  gender: "gender",
  jobTitle: "jobTitle",
  department: "department",
  workEmail: "workEmail",
  workPhone: "workPhone"
}

config.connection = {
  company: "gracious8",
  apiKey: "383479f3a6fba13ed52720a395d21272666a0e8e:x",
  url: "https://api.bamboohr.com/api/gateway.php/gracious8/v1/employees/directory"
}

config.tenantId = "1iw931n55k9bx5oyj";

module.exports = config;
