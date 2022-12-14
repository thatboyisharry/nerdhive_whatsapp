const { startChat } = require("../dialogEngine/startChat");
const { getChatUser, getLearner, getLearnerCoach, getUser, getCoach, getParent } = require("../services/apiCalls");


const learnerMenuFlowActions=async(action,user_response,user)=>{
    
    
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
    learnerMenuFlowActions
  }