const { onboardingActions } = require('../flows/onboarding/actions');
const { onboardingLearnerActions } = require('../flows/onboardingLearner/actions');
const { onboardingParentActions } = require('../flows/onboardingParent/actions');

const actionsHandler= async(transition,user_response,user)=>{
  
  let executed;
  if(transition.flow==='onboarding'){
    console.log("onboading flow...")
    executed = await onboardingActions(transition.actions,user_response,user);
  }
  
  if(transition.flow==='onboarding_parent'){
    console.log("onboading parent flow...")
    executed = await onboardingParentActions(transition.actions,user_response,user);
  }
  
  if(transition.flow==='onboarding_learner'){
    console.log("onboading learner flow...")
    executed = await onboardingLearnerActions(transition.actions,user_response,user);
  }
  
  return true
  
  
}

module.exports={
  actionsHandler
}