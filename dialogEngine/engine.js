const { updateUserSession, getUser} = require("./apiCalls");
const { Flows } = require('../flows');
const { actionsHandler } = require('./actions.handler');
const User = require('../models/user.model');
const { onboardUser} = require("../services/onboarding.services");
const { askName, parent_or_learner, start, what_grade_learner, what_grade_parent } = require("../flows/onboarding/ui")
const { getUserResponse, getMessages, getTransition, getFlow, getNode } = require('./utils');




////////////////////////////////////////////////


const getBotResponses=async(user,msg)=>{
  let responses;
  
  if(!(user.isOnboarded|user.isOnboarding)){
      console.log("current user")
      console.log(user)

        responses= await onboardUser(user,msg);
        let updatedUser = await getUser(user.phone);
        if(updatedUser.isOnboarding){
          let user=updatedUser;
          return getBotResponses(updatedUser,msg)
        }

  }
     
    
     //user is not onboarding and has a name => go to questionnaire
   
  
  if(user.isOnboarded|user.isOnboarding){
    console.log("user inside if onboarding")
    console.log(user)
      
    let user_response = await getUserResponse(msg);
    let session=user.session;
    console.log("session");
    console.log(session)
    let current_flow = await getFlow(session.flow);
    let current_node = await getNode(current_flow,session.node);
    console.log("current node")
    console.log(current_node)
    //get the next transition
      let transition = await getTransition(current_node,user_response); 

    // what if user_response doesn't match any user_response?
    
   
  
    //execute transition actions using user response
    // let action_status
    // if(transition!==null){
    //     if(transition.function&&transition.function!=="none"){
    //     //execute the function
    //       action_status = await actionsHandler(transition,user_response,user)
    //     }
    // }

    let responses;
    let isUpdated;
    if(transition!==null){
         
       
        //excute transition node actions
        if(transition.flow===current_node.flow){
          let executed = await actionsHandler(current_node,user_response,user)
        }
      
      //Problem: solve for a case whereby the transition flow != current node flow
        // if(transition.actions!="none"){
        //   console.log("excuting actions......")
        //   let executed = await actionsHandler(transition,user_response,user)
        // }
  
        responses = await getMessages(transition,user_response);
        isUpdated = await updateUserSession(user,transition)
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





const isOnboarding=async(user)=>{
  
  let data={
    isOnboarding:true
  }
  return await updateUser(user,data);
}

const updateUser=async(user,data)=>{
  try{
     let updatedUser= await User.findByIdAndUpdate(user._id,data)
      console.log("updated user")
     return true;
  
    
  }catch(error){
    console.log(error);
    return false;
    
  }
}



module.exports={
    getBotResponses,
    
}