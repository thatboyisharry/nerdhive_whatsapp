const Property = require("../models/property.model");
const {getProperty} = require("../services/apiCalls");



const landlordFlowActions=async(action,user_response,user)=>{
  let action_status
  if(action==='saveProvince'){
    action_status = await saveProvince(user,user_response);
  }
  if(action==='saveCity'){
    action_status = await saveCity(user,user_response);
  }
  if(action=='saveTown'){
    action_status = await saveTown(user,user_response);
  }

  if(action=='saveStreetAddress'){
    action_status = await saveStreetAddress(user,user_response);
  }
  
  if(action==="savePropertyType"){
    action_status = await savePropertyType(user,user_response);
  }
  
  if(action==="saveAvailableRoomsNum"){
    action_status = await saveAvailableRoomsNum(user,user_response)
  }

  if(action==="saveBedroomsNum"){
    action_status = await saveBedroomsNum(user,user_response)
  }

  if(action==="hasOwnBathroom"){
    action_status = await hasOwnBathroom(user,user_response)
  }

  if(action==="hasShower"){
    action_status = await hasShower(user,user_response)
  }

  if(action==="hasParking"){
    action_status = await hasParking(user,user_response)
  }

  if(action==="saveRentAmount"){
    action_status = await saveRentAmount(user,user_response)
  }

  if(action==="depositRequired"){
    action_status = await depositRequired(user,user_response)
  }

  if(action==="saveDepositAmount"){
    action_status = await saveDepositAmount(user,user_response)
  }  

  if(action==="saveAdditionalInfo"){
    console.log("saving additional info...")
    action_status = await saveAdditionalInfo(user,user_response)
  }

  
  if(action==="savePropertyPictures"){
    action_status = await savePropertyPictures(user,user_response)
  }
  
  return action_status
}



const saveProvince=async(user,province)=>{
  
  let data={
    province:province
  }
  
  let status = await updateProperty(user,data);
  
  return status
  
    
}


//////////////////
const saveCity=async(user,city)=>{
  
  let data={
    city:city
  }
  
  let status = await updateProperty(user,data);
  
  return status
  
    
}
////////////////////////////////////
const saveTown=async(user,town)=>{
  
  let data={
    town:town
  }
  
  let status = await updateProperty(user,data);
  
  return status
  
    
}

/////////////////////////////////////
const saveStreetAddress=async(user,streetAddress)=>{
  
    let data={
      streetAddress:streetAddress
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}


///////////////////////////////////////
const savePropertyType=async(user,type)=>{
  
    let data={
      type:type
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}
  
///////////////////////////////////////
const saveAvailableRoomsNum=async(user,availableRoomsNum)=>{
  
    let data={
      numOfAvailableRooms:availableRoomsNum
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}
  
/////////////////////////////////////
const saveBedroomsNum=async(user,numOfBedrooms)=>{
  
    let data={
      numOfBedrooms:numOfBedrooms
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}
/////////////////////////////////////
const hasOwnBathroom=async(user,user_response)=>{
  
    let response;
  
    if(user_response==='yes'){
     response=true;
    }else{
      response=false;
    }
  
    let data={
      hasOwnBathroom:response
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}

/////////////////////////////////////
const hasShower=async(user,user_response)=>{
  
    let response;
  
    if(user_response==='yes'){
     response=true;
    }else{
      response=false;
    }
  
    let data={
      hasShower:response
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}
/////////////////////////////////////
const hasParking=async(user,user_response)=>{
  
    let response;
  
    if(user_response==='yes'){
     response=true;
    }else{
      response=false;
    }
  
    let data={
      hasParking:response
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}

/////////////////////////////////////
const depositRequired=async(user,user_response)=>{
  
    let response;
  
    if(user_response==='yes'){
     response=true;
    }else{
      response=false;
    }
  
  
    let data={
      depositRequired:response
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}

/////////////////////////////////////
const saveDepositAmount=async(user,depositAmount)=>{
  
    let data={
      depositAmount:depositAmount
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}

/////////////////////////////////////
const saveRentAmount=async(user,rentAmount)=>{
  
    let data={
      rentAmount:rentAmount
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}

/////////////////////////////////////
const saveAdditionalInfo=async(user,additionalInfo)=>{
    console.log("saving additional info")
    let data={
      additionalInfo:additionalInfo
    }
    
    let status = await updateProperty(user,data);
    
    return status
    
      
}

/////////////////////////////////////

const savePropertyPictures=async(user,image_id)=>{
  
    let data={id:image_id}
    let type='image'
    
    let status = await updateProperty(user,data,type);
    
    return status
    
      
}

///////////////////////////////////////



/////////////////////
const updateProperty=async(user,data,type)=>{

   
  try{
     let property=await getProperty(user._id) 
     if(type&&type==="image"){
       console.log('saving image')
       data=property.images.push(data);
      }
     let updatedUser= await Property.findByIdAndUpdate(property._id,data)
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
  landlordFlowActions,
  updateProperty
}