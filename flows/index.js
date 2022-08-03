
const { onboardingMenuFlow } = require("./onboardingMenu/flow");


const Flows = [
      onboardingMenuFlow,
      onboardingLearnerFlow,
      onboardingParentFlow,
      parent_questionnaireFlow,
      learner_questionnaireFlow
  ]
module.exports = {
    Flows
}