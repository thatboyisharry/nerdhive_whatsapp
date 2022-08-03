
const { onboarding } = require("./onboarding/flow");
const { landlord } = require("./landlord/flow");

const Flows = [
      onboarding,
      landlord
  ]
module.exports = {
    Flows
}