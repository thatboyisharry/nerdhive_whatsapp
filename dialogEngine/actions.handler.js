const { onboardingActions } = require('../flows/onboarding/actions');

const actionsHandler= async(transition,user_response,user)=>{
  
  let executed;
  if(transition.flow==='onboarding'){
    console.log("onboading flow...")
    executed = await onboardingActions(transition.actions,user_response,user);
  }
  
 
  return true
  
  
}

module.exports={
  actionsHandler
}