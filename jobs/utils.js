const { getTimetables, getLesson } = require("../services/apiCalls");

const getAppointments=async()=>{
    let date = new Date();
    let day = date.getDay();
    let  timetables = await getTimetables()

    if(day==0){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let sundays=timetables[i].sunday
            appointments=appointments.concat(sundays) 
        }
        return appointments
    }

    if(day==1){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let mondays=timetables[i].monday
            appointments=appointments.concat(mondays) 
        }
        return appointments
        
    }

    if(day==2){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let tuesdays=timetables[i].tuesday
            appointments=appointments.concat(tuesdays) 
        }
        return appointments
        
    }

    if(day==3){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let wednesdays=timetables[i].wednesday
            appointments=appointments.concat(wednesdays) 
        }
        return appointments
        
    }

    if(day==4){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let thursdays=timetables[i].thursday
            appointments=appointments.concat(thursdays) 
        }
    }

    if(day==5){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let fridays=timetables[i].friday
            appointments=appointments.concat(fridays) 
        }
        return appointments
    }

    if(day==6){
        let appointments=[]
        for(let i = 0 ; i < timetables.length ; i++){
            let saturdays=timetables[i].saturday
            appointments=appointments.concat(saturdays) 
        }
        return appointments
    }

}



const getAppointmentMembers=async(appointments)=>{

    let lessons = []
        for(let k = 0 ; k< appointments; k++){
            let appointment=appointments[j]
            let lessonId = appointment.lessonId;
            let lesson = await getLesson(lessonId);
            lessons.push(lesson)
        }

        let learners=[]
        let tutors=[]
        for (let c = 0; c<lessons.length;c++){
            let learnerId = lessons[c].learnerId
            let tutorId = lessons[c].tutorId
            for(let i = 0; i<learners.length;i++){
                if(learnerId===learners[i]){
                    break
                }
                learners.push(learnerId)

            }

            for(let i = 0; i<tutors.length;i++){
                if(tutorId===tutors[i]){
                    break
                }
                tutors.push(tutorId)
            }
        }

        return {
            learners,
            tutors
        }

}

const getActiveJobs=(allJobs)=>{
    let jobs=[];
    for(let i = 0 ; i< allJobs.length ;i++){
        let job = allJobs[i];
        if(job.status==='active'){
            jobs.push(job);
        }
    }

    return jobs
}

const isSentJob=(job,user)=>{
    let sentJobs = user.sentJobs;
    for(let i = 0 ; i <sentJobs.length ; i++){
        if(sentJobs[i]===job.id){
            return true
        }
    }
    return false
}

module.exports={
   getAppointments,
   getAppointmentMembers,
   getActiveJobs,
   isSentJob
}