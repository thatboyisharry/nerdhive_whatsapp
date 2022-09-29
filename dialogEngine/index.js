const {sendResponse,updateStatus} = require("./sendResponse");
const {getUserResponse} = require("./getUserResponse");
const {getBotResponses} = require("./getBotResponse");
const { updateUser, getUser } = require("../services/apiCalls");
const { startChat, endChat } = require("./startChat");

const token = process.env.WHATSAPP_TOKEN;
const phone_number_id = process.env.phone_number_id;


const NerdHiveDialogEngine=async(msg,user)=>{
  if(user.session.chat.active){
    let participant = user.session.chat.participant;
    let user_text= await getUserResponse(msg);
    let chat_ended= await endChat(user_text,user);
    if(chat_ended){
      let bot_response = await getBotResponses(user,user_text);
      //below we are sending texts to let users know that the chat has ended
      await sendResponse(phone_number_id,token,user.phone,bot_response) 
      await sendResponse(phone_number_id,token,participant,bot_response) 
    }
    let user_msg = [user_text];
    await sendResponse(phone_number_id,token,participant,user_msg)

  }else{
    if(user.session.isActive){
      try{
        let user_response= await getUserResponse(msg);
        let bot_response = await getBotResponses(user,user_response);
        await sendResponse(phone_number_id,token,user.phone,bot_response)
      }catch(error){
        console.log(error)
      }
      
    }else{
      if(user.isLearner){
        try{
          let date = new Date()
          user.session={
            flow:'learner_menu',
            node:'menu',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser);
          await sendResponse(phone_number_id,token,user.phone,bot_response);
        }catch(err){
          console.log(err)
        }
      }
      if(user.isTutor){
        try{
          let date = new Date()
          user.session={
            flow:'tutor_menu',
            node:'menu',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser);
          await sendResponse(phone_number_id,token,user.phone,bot_response);
        }catch(err){
          console.log(err)
        }
      }
      if(user.isCoach){
        try{
          let date = new Date()
          user.session={
            flow:'coach_menu',
            node:'menu',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser);
          await sendResponse(phone_number_id,token,user.phone,bot_response);
        }catch(err){
          console.log(err)
        }
      }
      if(user.isParent){
        try{
          let date = new Date()
          user.session={
            flow:'parent_menu',
            node:'menu',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser);
          await sendResponse(phone_number_id,token,user.phone,bot_response);
        }catch(err){
          console.log(err)
        }
      }
      if(user.isAdmin){
        try{
          let date = new Date()
          user.session={
            flow:'admin_menu',
            node:'menu',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser);
          await sendResponse(phone_number_id,token,user.phone,bot_response);
        }catch(err){
          console.log(err)
        }
      }
    }  

  }
  
}

module.exports={
  sendResponse,
  getBotResponses,
  getUserResponse,
  updateStatus,
  startChat,
  NerdHiveDialogEngine
}