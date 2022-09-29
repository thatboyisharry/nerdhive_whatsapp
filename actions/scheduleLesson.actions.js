import { v1 as uuidv1 } from 'uuid';
const {updateUser,updateTimetable,getTimetable} = require("../services/apiCalls");
///create updateTimetable
const scheduleLessonFlowActions= async(action,user_response,user)=>{

    if(action.name==='saveDay'){
        let success= await saveDay(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='saveTime'){
        let success= await saveTime(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }

    if(action.name==='confirm'){
        let success= await saveAppointment(user,user_response);
        if(success){
            return action.onSuccess
        }else{
            return action.onFailure
        }
    }
}




/////////////////////////////////////


const saveDay=async(user,day)=>{
    const {lesson}=user.session.data;
    let data={
        id:uuidv1(),
        lessonId:lesson.id,
        time:''
    }
    let appointment={
        day:day,
        data:data
    }

    user.session.data.appointment=appointment

    let res = await updateUser(user);
    
    return res

}
//////////////////////////////

const saveTime=async(user,time)=>{
    const {lesson, appointment}=user.session.data;

    let tutorTimetable = await getTimetable(lesson.tutorId);
    let learnerTimetable = await getTimetable(lesson.learnerId);

    if(appointment.day==='monday'){
        for(let i = 0 ; i < tutorTimetable.monday.length ; i++){
            let savedAppointemnt=tutorTimetable.monday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.monday.length ; i++){
            let savedAppointemnt=learnerTimetable.monday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

    if(appointment.day==='tuesday'){
        for(let i = 0 ; i < tutorTimetable.tuesday.length ; i++){
            let savedAppointemnt=tutorTimetable.tuesday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.tuesday.length ; i++){
            let savedAppointemnt=learnerTimetable.tuesday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

    if(appointment.day==='wednesday'){
        for(let i = 0 ; i < tutorTimetable.wednesday.length ; i++){
            let savedAppointemnt=tutorTimetable.wednesday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.wednesday.length ; i++){
            let savedAppointemnt=learnerTimetable.wednesday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

    if(appointment.day==='thursday'){
        for(let i = 0 ; i < tutorTimetable.thursday.length ; i++){
            let savedAppointemnt=tutorTimetable.thursday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.thursday.length ; i++){
            let savedAppointemnt=learnerTimetable.thursday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

    if(appointment.day==='friday'){
        for(let i = 0 ; i < tutorTimetable.friday.length ; i++){
            let savedAppointemnt=tutorTimetable.friday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.friday.length ; i++){
            let savedAppointemnt=learnerTimetable.friday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

    if(appointment.day==='saturday'){
        for(let i = 0 ; i < tutorTimetable.saturday.length ; i++){
            let savedAppointemnt=tutorTimetable.saturday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.saturday.length ; i++){
            let savedAppointemnt=learnerTimetable.saturday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

    if(appointment.day==='sunday'){
        for(let i = 0 ; i < tutorTimetable.sunday.length ; i++){
            let savedAppointemnt=tutorTimetable.sunday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                await updateUser(user);
                return false
            }
        }
        for(let i = 0 ; i < learnerTimetable.sunday.length ; i++){
            let savedAppointemnt=learnerTimetable.sunday[i];
            if(savedAppointemnt.time===time){
                user.session.data.clash=savedAppointemnt
                let res = await updateUser(user);
                return false
            }
        }

        user.session.data.appointment.data.time=time;
        let res = await updateUser(user);
        return res
    }

}


/////////////////////////////////////////////////////
const saveAppointment=async(user,day)=>{
    const {lesson, appointment}=user.session.data;

    let tutorTimetable = await getTimetable(lesson.tutorId);
    let learnerTimetable = await getTimetable(lesson.learnerId);
   
    if(appointment.day=='monday'){
        tutorTimetable.monday.push(appointment.data)
        learnerTimetable.monday.push(appointment.data)
    }
    
    if(appointment.day=='tuesday'){
        tutorTimetable.tuesday.push(appointment.data)
        learnerTimetable.tuesday.push(appointment.data)
    }

    
    if(appointment.day=='wednesday'){
        tutorTimetable.wednesday.push(appointment.data)
        learnerTimetable.wednesday.push(appointment.data)
    }

    
    if(appointment.day=='thursday'){
        tutorTimetable.thursday.push(appointment.data)
        learnerTimetable.thursday.push(appointment.data)
    }

    
    if(appointment.day=='friday'){
        tutorTimetable.friday.push(appointment.data)
        learnerTimetable.friday.push(appointment.data)
    }

    
    if(appointment.day=='saturday'){
        tutorTimetable.saturday.push(appointment.data)
        learnerTimetable.saturday.push(appointment.data)
    }

    
    if(appointment.day=='sunday'){
        tutorTimetable.sunday.push(appointment.data)
        learnerTimetable.sunday.push(appointment.data)
    }

   
    try{
        await updateTimetable(tutorTimetable)
        await updateTimetable(learnerTimetable)
        user.session.data={}
        let res = await updateUser(user);
        return res
    }catch(error){
        console.log(error)
    }
    

}

module.exports = {
    scheduleLessonFlowActions
}