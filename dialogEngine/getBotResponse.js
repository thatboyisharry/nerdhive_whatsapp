const { updateUserSession, getUser} = require("../services/apiCalls");
const { actionsHandler } = require('../actions');
const { onboardUser} = require("../services/onboarding.services");
const { getMessages, getTransition, getFlow, getNode } = require('./utils');




////////////////////////////////////////////////


const getBotResponses=async(user,user_response,Project)=>{
  console.log(user);
  let project_flows=Project.flows
  let responses;
  
  if(!(user.isOnboarded|user.isOnboarding)){
      console.log("current user")
      console.log(user)

        responses= await onboardUser(user);
        let updatedUser = await getUser(user.phone);
        if(updatedUser.isOnboarding){
          let user=updatedUser;
          return getBotResponses(updatedUser,user_response)
        }

  }
  
  
  if(user.isOnboarded|user.isOnboarding){
    console.log(user)
    let session=user.session;
    console.log("session");
    console.log(session)
    let current_flow = await getFlow(session.flow,project_flows);
    console.log(current_flow)
    let current_node = await getNode(current_flow,session.node);
    console.log("current node")
    console.log(current_node)
    //get the next transition
    let executed = true;
    let transition;
    
    if(current_node.sticky){
      transition = await getTransition(current_node,user_response,user); 
      if(transition==null&&session.num!=0){
        executed = await actionsHandler(current_node,user_response,user)
        }
    }else{
      if(session.num!==0){
        executed = await actionsHandler(current_node,user_response,user)
      }
      transition = await getTransition(current_node,user_response,user); 
    }
    
    
    
    if(session.num===0){
      transition = current_node;
    }

    if(executed&&transition!==null){
         
       console.log("transition is not null")
        
        let updatedUser = await getUser(user.phone);
        let responses = await getMessages(transition,updatedUser,project_flows);
        let isUpdated = await updateUserSession(user,transition);
        //isUpdated returns a boolean variable 
        if(isUpdated){
            console.log("user updated")
            return responses
        }
      
      console.log('user not updated')
    }

    if(transition==null){
        console.log("transition is null");
        responses = current_node.catch
    }

    
    
    console.log("Failed getting bot responses")
  }
  
   
  
}






module.exports={
    getBotResponses,
    
}