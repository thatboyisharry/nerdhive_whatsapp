const {sendResponse,updateStatus} = require("./sendResponse");
const {getUserResponse} = require("./getUserResponse");
const {getBotResponses} = require("./getBotResponse");
const { updateUser, getUser } = require("../services/apiCalls");
const { startChat, endChat } = require("./startChat");
const { goToPrevOrMenu } = require("./nerdHiveEngineSerivices");

const token = process.env.WHATSAPP_TOKEN;
const phone_number_id = process.env.phone_number_id;


const NerdHiveDialogEngine=async(msg,user,project_flows)=>{
  let user_text= await getUserResponse(msg);
  if(user.session.chat.active){
    let participant = user.session.chat.participant;
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
        let go_to_prev_or_menu = await goToPrevOrMenu(user,user_response)
        let bot_response;
         // check if user want to go back or back to menu
        if(go_to_prev_or_menu){
          let updatedUser = await getUser(user.phone);
          bot_response = await getBotResponses(updatedUser,user_text,project_flows);
        }else{
          bot_response = await getBotResponses(user,user_response,project_flows); 
        }

        // check if user have activated chat
        let updatedUser = await getUser(user.phone);
        if(updatedUser.session.chat.active){
          let participant = user.session.chat.participant;
          await sendResponse(phone_number_id,token,participant,bot_response)
        }else{
          await sendResponse(phone_number_id,token,user.phone,bot_response)
        }
      }catch(error){
        console.log(error)
      }
      
    }else{
      if(user.isLearner){
        try{
          let date = new Date()
          user.session={
            flow:'learner_menu',
            node:'start',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser,user_text,project_flows);
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
            node:'start',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser,user_text,project_flows);
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
            node:'start',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser,user_text,project_flows);
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
            node:'start',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser,user_text,project_flows);
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
            node:'start',
            data:{},
            lastUpdated:date,
            isActive:true
          }
          await updateUser(user);
          let updatedUser = await getUser(user.phone);
          let bot_response = await getBotResponses(updatedUser,user_text,project_flows);
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