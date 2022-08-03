const { getUserResponse } = require('./utils');
const { getBotResponses } = require('./engine');
const { onboardingActions, updateUser } = require('../flows/onboarding/actions');
const { askName, parent_or_learner, start, what_grade_learner, what_grade_parent } = require("../flows/onboarding/ui")


const onboardUser=async(user,msg)=>{
  console.log("inside onboarding...")
  // save the user's name
  if(user.name===null|user.name===" "){
    if(msg.type==='text'){
       let saved=false
      try{
        let name = await getUserResponse(msg)
        console.log(`name :${name}`)
        saved = await onboardingActions("saveName",name,user);
      }catch(error){
        console.log(" error saving name")
      }
      
      if(saved){
        let response;
        try{
           response = await askParentOrLearner();
          return response
          
        }catch(error){
          console.log("error saving name, name not saved")
        }
       
      }
    }
  }else if(!(user.isParent|user.isLearner)){
     // is it a parent or learner
        if(msg.type==='interactive'){
          let response = getUserResponse(msg)
          let saved=false;
          if(response==='parent'){
              saved = await onboardingActions("isParent","",user);
               if(saved){
                  return await askWhatGradeParent()
                }
          }
          if(response==='learner'){
              saved = await onboardingActions("isLearner","",user);
               if(saved){
                  return await askWhatGradeLearner()
                }
          }

        }
  }else if(user.grade===null|user.grade===" "){
      if(msg.type==='text'){
        let grade = getUserResponse(msg)
        //save learner grade
  
        let saved = await onboardingActions("saveGrade",grade,user);
        if(saved){
          //change flows and intiate questionnaire
            let flowChange = await startQuestionnaire(user);
            saved = await onboardingActions("doneOnboarding",grade,user);
            if(saved&&flowChange){
              console.log("user after changing flow")
              console.log(user)
              return user
            }
            
          }
        }
  }

}


const askParentOrLearner=()=>{
  let bot_response={
            messaging_product: "whatsapp",
            recipient_type:"individual",
            to:'', 
            type:'interactive'
      }
  
  
    bot_response.interactive=parent_or_learner.value;
  return bot_response
        
}

const askWhatGradeParent=()=>{
    let bot_response = what_grade_parent.value;
    return bot_response
        
}

const askWhatGradeLearner=()=>{
    let bot_response = what_grade_learner.value;
    return bot_response
        
}

const startQuestionnaire=async(user)=>{
   let saved;
    let change_flow=false;
    let res;
   if(user.isParent){
     let data = {
       session:{
         flow:'parent_questionnaire',
         node:'start'
       }
     }
    saved =await updateUser(user,data)
    if(saved){
      change_flow=true;
      return user;
    }
  }
  
  if(user.isLearner){
    let data = {
       session:{
         flow:'learner_questionnaire',
         node:'start'
       }
     }
    saved =await updateUser(user,data)
    if(saved){
    
      return user;
      
    }
  }
}

module.exports={
  onboardUser
}