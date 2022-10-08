const { updateUser } = require("./apiCalls");


class Timetable{
    constructor(userId){
        this.userId = userId;
        this.monday=[];
        this.tuesday=[];
        this.wednesday=[];
        this.thursday=[];
        this.friday=[];
        this.saturday=[];
        this.sunday=[];
    }
}

class Learner{
    constructor(userId){
        this.userId=userId;
        this.coachId=userId;
        this.learnerCode=userId;
    }
}

class Coach{
    constructor(learner){
        this.userId=learner.userId;
        this.coachId=learner.userId;
        this.learner=[learner.userId]
        this.phone=[learner.phone]
    }
}

const createUserCode=async(user)=>{
    if(user.phone&&user.name){
        let num_part = user.phone.split('').slice(8,).join('');
        let alpha_part = user.name.split('').slice(0,4).join('');
        let userCode = alpha_part + num_part;
        userCode=userCode.toUpperCase();
        await updateUser(user,{userCode:userCode});
    }
}
const createTimetable=(userId)=>{
    let timetable = new Timetable(userId);
    return timetable
}

const createLearner=(userId)=>{
    let learner = new Learner(userId);
    return learner
}

const createCoach=(learner)=>{
    let coach = new Coach(learner);
    return coach
}
module.exports={
    createTimetable,
    createLearner,
    createCoach,
    createUserCode
}