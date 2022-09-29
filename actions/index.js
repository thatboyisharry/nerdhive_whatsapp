const { createLessonFlowActions } = require('./createLesson.actions');
const { postLessonFlowActions } = require('./postLesson.actions');
const { scheduleLessonFlowActions } = require('./scheduleLesson.actions');
const { startChatFlowActions } = require('./startChat.actions');

const actionsHandler= async(node,user_response,user)=>{
  console.log("Inside actions")
  console.log(node)
  console.log(user_response)
  if(node.actions&&node.actions.length>0){
    let action=node.actions[0]
  
    if(node.actions.length>1){
      for(let i = 0;i<node.actions.length;i++){
        let node_action = node.actions[i];
        if(node_action.trigger===user_response){
            action=node_action
        }
      }
    }
    
    let trigger=" ";
    if(node.flow==='scheduleLesson'){
      console.log("scheduleLesson flow...")
      trigger = await scheduleLessonFlowActions(action,user_response,user);
    }

    if(node.flow==='postLesson'){
      console.log("postLesson flow...")
      trigger = await postLessonFlowActions(action,user_response,user);
    }

    if(node.flow==='createLesson'){
      console.log("createLesson flow...")
      trigger = await createLessonFlowActions(action,user_response,user);
    }

    if(node.flow==='startChat'){
      console.log("startChat flow...")
      trigger = await startChatFlowActions(action,user_response,user);
    }
   
    return trigger
    
    
  }
  
  return " "
  
  
}



module.exports={
  actionsHandler
}