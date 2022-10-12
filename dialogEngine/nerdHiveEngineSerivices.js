const { updateUser} = require("../services/apiCalls");



const goToPrevOrMenu=async(user,user_response)=>{

    let response = user_response.toLowerCase();
    let session=user.session;
    if(response==='back'){
      
        session.flow=session.prevFlow
        session.node=session.prevNode
        session.num=0
        user.session=session
        await updateUser(user);
        return true
    }

    if(response==='menu'||response==='main menu'){
        let flow='';
        let node='';
        if(user.isLearner){
            flow = 'learner_menu';
            node = 'start';
        }
        if(user.isTutor){
            flow = 'tutor_menu';
            node = 'start';
        }
        if(user.isCoach){
            flow = 'coach_menu';
            node = 'start';
        }
        if(user.isParent){
            flow = 'parent_menu';
            node = 'start';
        }
        if(user.isAdmin){
            flow = 'admin_menu';
            node = 'start';
        }
        
        user.session.flow=flow
        user.session.node=node
        await updateUser(user)
        return true
    }

    return false


}

module.exports={
    goToPrevOrMenu
}