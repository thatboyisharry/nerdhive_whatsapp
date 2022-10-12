const { startChat,chatInvite } = require("../dialogEngine/startChat");
const { getChatUser, getLearner, getLearnerCoach, getUser, getCoach, getParent } = require("../services/apiCalls");


const startChatFlowActions=async(action,user_response,user)=>{
    
    if(action.name==="startChat"){
        let success= await openChat(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==="talkToCoach"){
        let success= await sendChatInvite(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }
}


const sendChatInvite=async(user,code)=>{

    try {
        let res =false
        if(user.isCoach||user.isAdmin){
            let participant = await getChatUser(code);
            res = await chatInvite(participant.userCode,user)
        }else if(user.isLearner){
            let learner = await getLearner(user.id)
            let coach = await getLearnerCoach(learner);
            let coachUser = await getUser(coach.userId)
            res = await chatInvite(coachUser.userCode,user)
        }else if(user.isParent){
            let parent = await getParent(user.id);
            let coach = await getCoach(parent.coach);
            let coachUser = await getUser(coach.userId)
            res = await chatInvite(coachUser.userCode,user)

        }
        
        return res
        
    } catch (error) {
        console.log(error)
        return false
    }

   

}


const openChat=async(user,code)=>{

    try {
        let res =false
        if(user.isCoach||user.isAdmin){
            let participant = await getChatUser(code);
            res = await startChat(participant.userCode,user)
        }else if(user.isLearner){
            let learner = await getLearner(user.id)
            let coach = await getLearnerCoach(learner);
            let coachUser = await getUser(coach.userId)
            res = await startChat(coachUser.userCode,user)
        }else if(user.isParent){
            let parent = await getParent(user.id);
            let coach = await getCoach(parent.coach);
            let coachUser = await getUser(coach.userId)
            res = await startChat(coachUser.userCode,user)

        }
        
        return res
        
    } catch (error) {
        console.log(error)
        return false
    }

   

}

module.exports={
    startChatFlowActions
  }