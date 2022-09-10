const { Flows } = require('../flows');

const User = require('../models/user.model');
const Property = require('../models/property.model');

// const Flow = require('../models/flow.model');

const getProject = async(user)=>{
    try{
        let property = await Property.findOne({ownerID:user._id})
        if(property==null){
            property = await addProperty(user._id);
            return property;
        }
      console.log("found property")
        return property
    }catch(error){
        console.log(error);
    }
}


const getUser = async(user_number)=>{
    try{
        let user = await User.findOne({phone:user_number})
        if(user==null){
            user = await addUser(user_number);
            return user;
        }
      console.log("found user")
        return user
    }catch(error){
        console.log(error);
    }
}

const getProperty = async(user)=>{
    try{
        let property = await Property.findOne({ownerID:user._id})
        if(property==null){
            property = await addProperty(user._id);
            return property;
        }
      console.log("found property")
        return property
    }catch(error){
        console.log(error);
    }
}

const addProperty=async(user_id)=>{

     let property={
         ownerID:user_id
     }
 
     try{
         let newProperty= new Property(property);
         let savedProperty = await newProperty.save(); 
         return savedProperty;
     }catch(error){
         console.log(error)
     }
 }

const updateUserSession = async (user,transition)=>{
  let date = new Date()
  let sessionNum = user.session.num +1;
  try{
    let session = {
      session:{
        flow:transition.flow,
        node:transition.name,
        lastUpdated:date,
        num:sessionNum
      }
      
    }
    console.log(session)
     let updatedUser= await User.findByIdAndUpdate(user._id,session)
        console.log("updated user")
      console.log(updatedUser.session)
     return true;
  
    
  }catch(error){
    console.log(error);
    return false;
    
  }
    
}



const getFlow=async(flow_name)=>{
    // try{
    //     let flow = await Flow.findOne({name:flow_name})
    //     return flow
    // }catch(error){
    //     console.log(error)
    // }
    for(let i = 0 ; i < Flows.length; i++){
        let flow = Flows[i]
        if(flow.name===flow_name){
            return flow
        }
    }
}

const addUser=async(user_phone)=>{
   let date = new Date()
    let user={
        name:null,
        isOnboarding:false,
        grade:null,
        phone:user_phone,
        session:{
            flow:'onboarding',
            node:'start',
            lastUpdated:date
        }
    }

    try{
        let newUser= new User(user);
        let savedUser = await newUser.save(); 
        return savedUser;
    }catch(error){
        console.log(error)
    }
}



module.exports = {
    addUser,
    getFlow,
    getUser,
    getProperty,
    updateUserSession
}