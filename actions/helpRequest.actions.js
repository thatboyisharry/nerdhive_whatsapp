const { startChat} = require("../dialogEngine/startChat");
const {  getUser, updateUser } = require("../services/apiCalls");


const helpRequestFlowActions=async(action,user_response,user)=>{
    
    if(action.name==="acceptInvite"){
        let success= await acceptInvite(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==="declineInvite"){
        let success= await declineInvite(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }
}


const acceptInvite=async(user)=>{
    const {learnerId}=user.session.helpRequest.learnerId
   
    try {
        let res =false
        let learner = await getUser(learnerId)
        res = await startChat(learner.userCode,user)
        
        return res
        
    } catch (error) {
        console.log(error)
        return false
    }

   

}

const declineInvite=async(user)=>{
    const {helpRequest}=user.session;
    helpRequest.invite=false
    helpRequest.learnerId=''
    helpRequest.requestId=''
    user.session.helpRequest=helpRequest;
    res = await updateUser(user);
   

}

module.exports={
    helpRequestFlowActions
}