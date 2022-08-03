const User = require("../../models/user.model");
require("../../messages/templates");


const onboardingActions=async(action,user_response,user)=>{
  let action_status
  if(action==='isLearner'){
    action_status = await isLearner(user);
  }
  if(action==='saveName'){
    console.log("saving name")
    action_status = await saveName(user,user_response);
  }
  if(action=='isParent'){
    action_status = await isParent(user);
  }
  
  if(action==="saveGrade"){
    action_status = await saveGrade(user,user_response);
  }
  
  if(action==="doneOnboarding"){
    action_status = await doneOnboarding(user)
  }
  
  return action_status
}



const isLearner=async(user)=>{
  
  let data={
    isLearner:true
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}


//////////////////
const saveName=async(user,name)=>{
  
  let data={
    name:name
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}
////////////////////////////////////
const saveGrade=async(user,grade)=>{
  
  let data={
    grade:grade
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}

/////////////////////////////////////

const doneOnboarding=async(user)=>{
  
  let data={
    isOnboarding:false,
    isOnboarded:true
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}

//////////////////////////
const isParent=async(user)=>{
  
  let data={
    isParent:true
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}


/////////////////////
const updateUser=async(user,data)=>{
  try{
     let updatedUser= await User.findByIdAndUpdate(user._id,data)
      console.log("updated user")
      console.log(data)
      console.log(updatedUser)
     return true;
  
    
  }catch(error){
    console.log(error);
    return false;
    
  }
}

module.exports = {
  onboardingActions,
  updateUser
}