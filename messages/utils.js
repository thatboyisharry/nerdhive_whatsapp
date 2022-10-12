
const getWeelkyAppointments=(timetable)=>{
    let appointments=[];
    

    if(timetable.monday.length>0){
        appointments.push(timetable.monday)
    }

    if(timetable.tuesday.length>0){
        appointments.push(timetable.tuesday)
    }

    if(timetable.wednesday.length>0){
        appointments.push(timetable.wednesday)
    }
    if(timetable.thursday.length>0){
        appointments.push(timetable.thursday)
    }
    if(timetable.friday.length>0){
        appointments.push(timetable.friday)
    }
    if(timetable.saturday.length>0){
        appointments.push(timetable.saturday)
    }

    if(timetable.sunday.length>0){
        appointments.push(timetable.sunday)
    }
    
    return appointments

}

module.exports={
    getWeelkyAppointments
 }