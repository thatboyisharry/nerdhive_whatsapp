const User = require("../models/user.model");



const onboardingActions=async(action,user_response,user)=>{
  let action_status
  
  if(action==='saveName'){
    console.log("saving name")
    action_status = await saveName(user,user_response);
  }
  if(action=='isLandlord'){
    action_status = await isLandlord(user);
  }
  
  if(action=='isTenant'){r
    action_status = await isTenant(user);
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

const doneOnboarding=async(user)=>{
  
  let data={
    isOnboarding:false,
    isOnboarded:true
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}

//////////////////////////
const isLandlord=async(user)=>{
  
  let data={
    isLandlord:true
  }
  
  let status = await updateUser(user,data);
  
  return status
  
    
}


/////////////////////
const isTenant=async(user)=>{
  
  let data={
    isTenant:true
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