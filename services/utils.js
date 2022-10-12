const { updateUser } = require("./apiCalls");
const {v1} =require('uuid');
const uuidv1 = v1;

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

const createUser=(user_phone)=>{
    let date = new Date()
    let user={
        id:uuidv1(),
        name:null,
        isOnboarding:false,
        grade:null,
        phone:user_phone,
        session:{
            flow:'onboarding',
            node:'start',
            num:0,
            lastUpdated:date,
            isActive:true,
            chat:{
              active:false,
              partiipant:null
            }
        }
    }

    return user
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
    createUserCode,
    createUser
}




const createDummyData=async()=>{
    let date = new Date();
    let user1={
        id:'LEARNER100',
        name:'Harold',
        isOnboarding:false,
        userCode:"HAR9604",
        grade:'12',
        phone:'27834939604',
        session:{
            flow:'onboarding',
            node:'start',
            num:0,
            isActive:true,
            chat:{
            active:false,
            partiipant:null
            }
        }
    }

    let user2={
        id:'COACH100',
        name:'JAY',
        userCode:'JAY404',
        isOnboarding:false,
        grade:'12',
        phone:'27681508705',
        session:{
            flow:'onboarding',
            node:'start',
            num:0,
            isActive:true,
            chat:{
            active:false,
            partiipant:null
            }
        }
    }


    let learner={
        userId:'LEARNER100',
        learnerCode:'HAR9604',
        parentId:'HARPAR1',
        name:'Harold',
        surname:"Muchengeta",
        school:"Gatang Sec School",
        grade:"12",
        phone:'27834939604',
        email:"harold@gmail.com",
        location:"Pretoria",
        coachId:'COACH100',
        timetableId:'LEARNER100'
    
    }   

    let coach={
        userId:'COACH100',
        sessions:[],
        tutors:['HAR9604'],
        learners:['HAR9604'],
        timetableId:['COACH100']
    }
    let tutor ={
        userId:'COACH100',
        name:"Harry",
        surname:"Muchengeta",
        phone:'27681508705',
        email:"harold@gmail.com",
        lessons:[],
        sentJobs:[],
        learners:['LEARNER100'],
        coach:'COACH100',
        timetableId:"COACH100"

    }
    let tutorTimetable={
        userId :"COACH100",
        monday:[{
            id:'APPOINTMENT101',
            time:'16:00',
            day:'Monday',
            lessonId:'TRIG121'
        
        }],
        tuesday:[],
        wednesday:[],
        thursday:[],
        friday:[],
        saturday:[],
        sunday:[],
    }

    let learnerTimetable={
        userId :"LEARNER100",
        monday:[{
            id:'APPOINTMENT101',
            time:'16:00',
            day:'Monday',
            lessonId:'TRIG121'
        
        }],
        tuesday:[{
            id:'APPOINTMENT102',
            time:'16:00',
            day:'Tuesday',
            lessonId:'ALG121'
        
        }],
        wednesday:[],
        thursday:[],
        friday:[],
        saturday:[],
        sunday:[],
    }

    let lesson1 = {
        id:'TRIG121',
        lessonCode:'TRIG121',
        learnerId:'LEARNER100',
        tutorId:'',
        appointmentId:'APPOINTMENT101',
        subject:"MATHEMATICS",
        topic:"TRIGNOMETRY",
        subtopic:"Identies",
        day:"MONDAY",
        time:"16:00"
    }


    let lesson2 = {
        id:'ALG121',
        lessonCode:'ALG121',
        learnerId:'LEARNER100',
        tutorId:'',
        appointmentId:'APPOINTMENT102',
        subject:"MATHEMATICS",
        topic:"ALGEBRA",
        subtopic:"Inequalities",
        day:"TUESDAY",
        time:"16:00"
    }

    let job1 = {
        id:'JOB101',
        lesson:{
            id:'TRIG122',
            lessonCode:'TRIG122',
            learnerId:'LEARNER100',
            tutorId:'',
            subject:"MATHEMATICS",
            topic:"TRIGNOMETRY",
            subtopic:"Identies",
        },
        interestedCandidates:[],
        uninterestedCandidates:[],
        status:'active',
        payout:'R175'
        
    }

    await addUser(user1);
    await addUser(user2);
    await addLearner(learner);
    await addTutor(tutor)
    await addCoach(coach);
    await addTimetable(learnerTimetable);
    await addTimetable(coachTimetable)
    await addJob(job1);
}