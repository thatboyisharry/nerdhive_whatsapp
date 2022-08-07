const { onboardingActions } = require('./onboarding.actions');
const { landlordFlowActions } = require('./landlord.actions');


const actionsHandler= async(node,user_response,user)=>{
  
  if(node.actions&&node.actions.length>0){
    let action=node.actions[0]
  
    if(node.actions.length>1){
      for(let i = 0;i<node.actions.length;i++){
        let node_action = node.actions[i];
        if(node_action.trigger==='user_response'){
              action=node_action
        }
      }
    }
    
    let executed=true;
    if(action.flow==='onboarding'){
      console.log("onboading flow...")
      executed = await onboardingActions(action.name,user_response,user);
    }
    if(action.flow==='landlord'){
      console.log("landlord flow...")
      console.log(action.name)
      executed = await landlordFlowActions(action.name,user_response,user);
    }

    return executed
    
    
  }
  
  return true
  
  
}



module.exports={
  actionsHandler
}