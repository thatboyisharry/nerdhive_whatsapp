const { updateUser } = require("../services/apiCalls");



const goToPrevOrMenu=async(user,user_response)=>{

    let response = user_response.toLowerCase();
    let session=user.session;
    if(response==='back'){
        session.flow = session.prevFlow;
        session.node = session.prevNode;
        await updateUser(user);
        return true
    }

    if(response==='menu'||response==='main menu'){
        if(user.isLearner){
            session.flow = 'learner_menu';
            session.node = 'start';
        }
        if(user.isTutor){
            session.flow = 'tutor_menu';
            session.node = 'start';
        }
        if(user.isCoach){
            session.flow = 'coach_menu';
            session.node = 'start';
        }
        if(user.isParent){
            session.flow = 'parent_menu';
            session.node = 'start';
        }
        if(user.isAdmin){
            session.flow = 'admin_menu';
            session.node = 'start';
        }
        await updateUser(user);
        return true
    }

    return false


}

module.exports={
    goToPrevOrMenu
}