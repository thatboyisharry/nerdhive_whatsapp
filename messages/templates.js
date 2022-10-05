const {getProperty, getTimetable, getLesson} = require("../services/apiCalls");
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
      for (let j = 0 ; j < appointments.length; j++){
        let appointment=appointments[j]
        let lessonId = appointment.lessonId;
        let lesson = await getLesson(lessonId);
        lessons.push(lesson)
      }
      //fill templates with lesson details and return an array of templates
      for(let i = 0 ; i < lessons.length; i++){
        filledTemplate = await  upcomingLessonsActions(template,lessons[i])
        message.template=filledTemplate
        messages.push(message);
      }
      
      
      return messages

    }

    // if(template.name==='landlord_or_renter'){
    //     filledTemplate = await landlordOrRenter_Actions(template,user)
    // }
    
    message.template=filledTemplate
    return message.template=filledTemplate

}

const upcomingLessonsActions=async(template,lesson)=>{

    template.components[0].parameters[0].text=lesson.code;
    template.components[1].parameters[0].text=lesson.topic;
    template.components[1].parameters[1].text=lesson.day;
    template.components[1].parameters[2].text=lesson.time;

  return template

}

// const landlordOrRenter_Actions = async(template,user)=>{
    
//     template.components[0].parameters[0].text=user.name;
//     return template
// }

module.exports={
  templateActionsHandler
}