const dataConnection = require('../models/connections/data');
const User=dataConnection.models.User;

const onboardingActions=async(action,user_response,user)=>{
  
  if(action.name==='isLearner'){
    let success = await isLearner(user);
    if(success){
      return action.onSuccess
    }else{
        return action.onFailure
    }
  }
  if(action.name==='saveName'){
    console.log("saving name")
    let success = await saveName(user,user_response);
    if(success){
      return action.onSuccess
    }else{
        return action.onFailure
    }
  }
  if(action.name==='isParent'){
    let success = await isParent(user);
    if(success){
      return action.onSuccess
    }else{
        return action.onFailure
    }
  }
  
  if(action.name==="saveGrade"){
    let success = await saveGrade(user,user_response);
    if(success){
      return action.onSuccess
    }else{
        return action.onFailure
    }
  }
  
  if(action.name==="doneOnboarding"){
    let success = await doneOnboarding(user)
  }
  return ""
 
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
  
  return status;
  
    
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