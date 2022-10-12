const {v1} =require('uuid');
const uuidv1 = v1;
const {updateUser,updateTimetable,getTimetable, getLesson, addQuestion} = require("../services/apiCalls");
const { createLearnerQuestion } = require('./utils');
///create updateTimetable
const homeworkAssistanceFlowActions= async(action,user_response,user)=>{

    if(action.name==='saveSubject'){
        let success= await saveSubject(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='saveTopic'){
        let success= await saveTopic(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='saveLearnerQuestion'){
        let success= await saveLearnerQuestion(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='saveLearnerAttempt'){
        let success= await saveLearnerAttempt(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='saveAdditionalNotes'){
        let success= await saveAdditionalNotes(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='uploadLearnerQuestion'){
        let success= await uploadLearnerQuestion(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }
}



/////////////////////////////////////


const saveSubject=async(user,subject)=>{
    let question = createLearnerQuestion(user,subject)
    user.session.data.question=question;
    let res= await updateUser(user);
    return res
}

/////////////////////////////////////


const saveTopic=async(user,topic)=>{
    const {question}=user.session.data;
    question.topic=topic
   
    user.session.data.question=question;
    let res= await updateUser(user);
    return res

}

/////////////////////////////////////

const saveLearnerQuestion=async(user,learnerQuestion)=>{
    const {question}=user.session.data;
    question.question.id=learnerQuestion;
   
    user.session.data.question=question;
    let res= await updateUser(user);
    return res

}

/////////////////////////////////////
const saveLearnerAttempt=async(user,attempt)=>{
    const {question}=user.session.data;
    question.attempt.id=attempt
   
    user.session.data.question=question;
    let res= await updateUser(user);
    return res

}

/////////////////////////////////////

const saveAdditionalNotes=async(user,notes)=>{
    const {question}=user.session.data;
    question.notes=notes
   
    user.session.data.question=question;
    let res= await updateUser(user);
    return res

}

/////////////////////////////////////

const uploadLearnerQuestion=async(user)=>{
    const {question}=user.session.data;
   

    await addQuestion(question);
    let res= await updateUser(user);
    return res

}

/////////////////////////////////////




module.exports = {
    homeworkAssistanceFlowActions
}