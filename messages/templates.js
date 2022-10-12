const {getProperty, getTimetable, getLesson, getTutor, getLearner} = require("../services/apiCalls");
const { getWeelkyAppointments } = require("./utils");


const templateActionsHandler=async(message,user)=>{
    const { template } = message;
    let filledTemplate

    if(template.name==='upcoming_lessons'){
      let messages=[]
      //get learner timetable
      let timetable = await getTimetable(user.id);
      //filter from current day to sunday
      let appointments = getWeelkyAppointments(timetable)
      //get lessons from all appointments from current day to sunday
      let lessons=[]
      if(appointments.length>0){
        for (let j = 0 ; j < appointments.length; j++){
          let appointment=appointments[j]
          let lessonId = appointment.lessonId;
          let lesson = await getLesson(lessonId);
          lessons.push(lesson)
        }
        //fill templates with lesson details and return an array of templates
        for(let i = 0 ; i < lessons.length; i++){
          let lesson=lessons[i]
          filledTemplate = await  upcomingLessonsTemplate(template,lesson)
          message.template=filledTemplate
          let msg= JSON.parse(JSON.stringify(message));
          messages.push(msg);
          console.log(messages[i].template.components[0].parameters[0])
        }
        
      }
      
      
      return messages
      
    
    }

    
    if(template.name==='confirm_reschedule_lesson'){
      
      filledTemplate = await confirmRescheduleTemplate(template,user)
      message.template = filledTemplate;
      return message;
    }

    if(template.name==='confirm_time_changes'){
      
      filledTemplate = await confirmTimeChangesTemplate(template,user)
      message.template = filledTemplate;
      return message;
    }

    if(template.name==='chat_invite'){
      filledTemplate = await chatInviteTemplate(template,user)
    }
    
    
    return message

}

const chatInviteTemplate=async(template,user)=>{

  template.components[0].parameters[0].text=user.name

return template

}

const upcomingLessonsTemplate=async(template,lesson)=>{

    template.components[0].parameters[0].text=lesson.code;
    template.components[1].parameters[0].text=lesson.topic;
    template.components[1].parameters[1].text=lesson.day;
    template.components[1].parameters[2].text=lesson.time;

  return template

}

const confirmRescheduleTemplate=async(template,user)=>{
  const { lesson } = user.session.data

  if(user.isLearner){
    let tutor = await getTutor(lesson.tutorId);
    template.components[0].parameters[0].text=tutor.name;
    template.components[0].parameters[1].text=lesson.day;
    template.components[0].parameters[2].text=lesson.time;
  }
  //Reschedule lesson with {tutor} on {day} @ {time} 
  if(user.isTutor){
    let learner = await getLearner(lesson.learnerId)
    template.components[0].parameters[0].text=learner.name;
    template.components[0].parameters[1].text=lesson.day;
    template.components[0].parameters[2].text=lesson.time;
  }
 

return template

}

const confirmTimeChangesTemplate=async(template,user)=>{
  const { lesson, appointment} = user.session.data

  if(user.isLearner){
    let tutor = await getTutor(lesson.tutorId);
    template.components[0].parameters[0].text=tutor.name;
    template.components[0].parameters[1].text=lesson.day;
    template.components[0].parameters[2].text=lesson.time;
    template.components[0].parameters[2].text=appointment.day;
    template.components[0].parameters[4].text=appointment.time;
    //you  have changed lesson with {tutor} from {day} @ {time} to {day} @time
  }
  
  if(user.isTutor){
    let learner = await getLearner(lesson.learnerId)
    template.components[0].parameters[0].text=learner.name;
    template.components[0].parameters[1].text=lesson.day;
    template.components[0].parameters[2].text=lesson.time;
    template.components[0].parameters[3].text=appointment.day;
    template.components[0].parameters[4].text=appointment.time;
    //you  have changed lesson with {learner} from {day} @ {time} to {day} @time
  }
 

return template

}

module.exports={
  templateActionsHandler
}