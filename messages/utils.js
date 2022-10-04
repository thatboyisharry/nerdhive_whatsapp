
const getWeelkyAppointments=(timetable)=>{
    let appointments=[];
    
    appointments=timetable.monday.length>0?appointments.push(timetable.monday):appointments
    appointments=timetable.tuesday.length>0?appointments.push(timetable.tuesday):appointments
    appointments=timetable.wednesday.length>0?appointments.push(timetable.wednesday):appointments
    appointments=timetable.thursday.length>0?appointments.push(timetable.thursday):appointments
    appointments=timetable.friday.length>0?appointments.push(timetable.friday):appointments
    appointments=timetable.saturday.length>0?appointments.push(timetable.saturday):appointments
    appointments=timetable.sunday.length>0?appointments.push(timetable.sunday):appointments

    return appointments

}

module.exports={
    getWeelkyAppointments
 }