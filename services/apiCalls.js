const dataConnection = require('../models/connections/data');
const projectConnection = require('../models/connections/project');
const Project=projectConnection.models.Project;
const User=dataConnection.models.User;
const Learner=dataConnection.models.Learner;
const Lesson=dataConnection.models.Lesson;
const Tutor=dataConnection.models.Tutor;
const Coach=dataConnection.models.Coach;
const Parent=dataConnection.models.Parent;
const Timetable=dataConnection.models.Timetable;
const Job=dataConnection.models.Job;
const {v1} =require('uuid');
const { createTimetable } = require('./utils');
const uuidv1 = v1;



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
    await addLesson(lesson1);
    await addLesson(lesson2)
    await addTimetable(learnerTimetable);
    await addTimetable(coachTimetable)
    await addJob(job1);
}

const getTemplate=async(name,templates)=>{

    // const PROJECT_NAME='kasi rentals'
    // const Project=await getProject(PROJECT_NAME);
    //get all templates then filter by name
    // let templates = Project.templates;
    for(let i = 0;i<templates.length;i++){
        let template=templates[i];
        if(template.name===name){
            return template.value;
        }
    }
}

const addLearner=async(learner)=>{

    try{
        let newLearner= new Learner(learner)
        let savedLearner = await newLearner.save(); 
        console.log(savedLearner);
        return true
    }catch(error){
        console.log(error)
    }
}
const getLearner = async(userId)=>{
    try{
        let learner = await Learner.findOne({userId:userId})
        if(learner==null){
            let phone = userId
            learner = await Learner.findOne({phone:phone})
        }
        if(learner==null){
            let learnerCode=userId
            learner = await Learner.findOne({learnerCode:learnerCode})
            //change phone to some code
        }
        
        
        return learner
    }catch(error){
        console.log(error);
    }
}

const getLearners = async()=>{
    try{
        let learners = await Learner.find({})
        if(learners!==null){
            console.log("found learners")
            return learners
        }
       
    }catch(error){
        console.log(error);
    }
}

const getCoachLearners = async(coach)=>{
    try{
        let learners = await Learner.find({})
        if(learners!==null){
            console.log("found learners")
            learners=learners.filter(learner=>learner.coachId!==coach.userId)
            return learners
        }
       
    }catch(error){
        console.log(error);
    }
}

const getParentLearners = async(parent)=>{
    try{
        let learners = await Learner.find({})
        if(learners!==null){
            console.log("found learners")
            learners=learners.filter(learner=>learner.parentId!==parent.userId)
            return learners
        }
       
    }catch(error){
        console.log(error);
    }
}

const addCoach=async(coach)=>{

    try{
        let newCoach= new Coach(coach)
        let savedCoach = await newCoach.save(); 
        console.log(savedCoach);
        return true
    }catch(error){
        console.log(error)
    }
}
const getCoach = async(userId)=>{
    try{
        let coach = await Coach.findOne({userId:userId})
        if(coach!==null){
            console.log("found coach")
            return coach
        }
       
    }catch(error){
        console.log(error);
    }
}

const getTutor = async(userId)=>{
    try{
        let tutor = await Tutor.findOne({userId:userId})
        if(tutor!==null){
            console.log("found tutor")
            return tutor
        }
       
    }catch(error){
        console.log(error);
    }
}

const getLearnerCoach = async(learner)=>{
    try{
        let coaches = await Coach.find({})
        if(coaches!==null){
        
            console.log("found coaches")
            for(let i = 0; i<coaches.length;i++){
                let coach=coaches[i]
                for(let j = 0 ;j < coach.learners.length ; i++){
                    if(coach.learners[j]===learner.userId){
                        return coach
                    }
                }
            }
            coaches=coaches.filter(lesson=>lesson.learnerId!==learner.userId)
            return coaches
        
        }
       
    }catch(error){
        console.log(error);
    }
}
const getTutors = async()=>{
    try{
        let tutors = await Tutor.find({})
        if(tutors!==null){
            console.log("found tutors")
            return tutors
        }
       
    }catch(error){
        console.log(error);
    }
}
const getLearnerParent = async(user)=>{
    try{
        let parent = await Parent.findOne({learnerId:user.id})
        if(parent==null){
            console.log("found parent")
            return parent
        }
       
    }catch(error){
        console.log(error);
    }
}

const getParent = async(userId)=>{
    try{
        let parent = await Parent.findOne({userId:userId})
        if(parent!==null){
            console.log("found parent")
            return parent
        }
       
    }catch(error){
        console.log(error);
    }
}


const getTimetable = async(userId)=>{
    try{
        let timetable = await Timetable.findOne({userId:userId})
        if(timetable!==null){
            console.log("found timetable")
            return timetable
        }
       
    }catch(error){
        console.log(error);
    }
}

const getTimetables = async(userId)=>{
    try{
        let timetables = await Timetable.find({})
        if(timetables!==null){
            console.log("found timetables")
            return timetables
        }
       
    }catch(error){
        console.log(error);
    }
}

const updateTimetable = async(timetable)=>{
    try{
        let updatedTimetable= await Timetable.findByIdAndUpdate(timetable._id,timetable)
        if(updatedTimetable!==null){
            console.log("found timetable")
            return timetable
        }
       
    }catch(error){
        console.log(error);
    }
}

const getLessons = async(learner)=>{
    try{
        let lessons = await Lesson.find({})
        if(lessons!==null){
            console.log("found lessons")
            if(learner){
                lessons=lessons.filter(lesson=>lesson.learnerId!==learner.userId)
            }
            
            return lessons
        }
       
    }catch(error){
        console.log(error);
    }
}

const getLesson = async(lessonId)=>{

    try{
        let lesson = await Lesson.findOne({id:lessonId})
        if(lesson==null){
            let lessonCode=lessonId
            lesson = await lesson.findOne({lessonCode:lessonCode})
            //change phone to some code
        }

        return lesson
               
    }catch(error){
        console.log(error);
    }
}
const updateLesson = async(lesson)=>{
    try{
        let updatedLesson= await Lesson.findByIdAndUpdate(lesson._id,lesson)
        if(updatedLesson!==null){
            console.log("updated Lesson")
            console.log(updateLesson)
            return updatedLesson
        }
       
    }catch(error){
        console.log(error);
    }
}


const addLesson=async(lesson)=>{

    try{
        let newLesson= new Lesson(lesson);
        let savedLesson = await newLesson.save(); 
        console.log(savedLesson);
        return true
    }catch(error){
        console.log(error)
    }
}

const addJob=async(job)=>{

    try{
        let newJob= new Job(job)
        let savedJob = await newJob.save(); 
        console.log(savedJob);
        return true
    }catch(error){
        console.log(error)
    }
}

const getJobs = async()=>{
    try{
        let jobs = await Job.find({})
        return jobs
    }catch(error){
        console.log(error);
    }
}

const getJob = async(jobID)=>{
    try{
        let jobs = await Job.findOne({id:jobID})
        return jobs
    }catch(error){
        console.log(error);
    }
}

const updateJob = async(job)=>{
    try{
        let updatedJob= await Job.findByIdAndUpdate(job._id,job)
        if(updatedJob==null){
            console.log("updated Job")
            console.log(updatedJob)
            return updatedJob
        }
       
    }catch(error){
        console.log(error);
    }
}
//create updateJob, updateTutor, updateCoach, updateLearner




const addProperty=async(user_id)=>{

     let property={
         ownerID:user_id
     }
 
     try{
         let newProperty= new Property(property);
         let savedProperty = await newProperty.save(); 
         return savedProperty;
     }catch(error){
         console.log(error)
     }
 }







 const getProject = async(name)=>{
   
      try{
      let project = await Project.findOne({name:name})

      console.log("found project")
      console.log(project)
        return project
      }catch(error){
          console.log(error);
      }

   
}


const getUser = async(user_number)=>{
    
    try{
        let user = await User.findOne({phone:user_number})
        if(user==null){
            if(user_number==='27834939604'){
                await createDummyData();
                await getUser(user_number);
            }else{
                user = await addUser(user_number);
                return user;
            }
            
        }
        console.log("found user")
        return user
    }catch(error){
        console.log(error);
    }
}

const getChatUser = async(user_code)=>{
    try{
        let user = await User.findOne({userCode:user_code})
        
      console.log("found user")
        return user
    }catch(error){
        console.log(error);
    }
}

const getAllUsers = async()=>{
    try{
        let users = await User.find({})
      
        console.log("found users")
        return users
    }catch(error){
        console.log(error);
    }
}

const updateUserSession = async (user,transition)=>{
    let date = new Date()
    let session=user.session;
    session.flow=transition.flow
    session.node=transition.node
    session.num=session.num + 1;
    session.lastUpdated=date;
   
    try{
      
      console.log(data)
      let updatedUser= await User.findByIdAndUpdate(user._id,session)
      console.log("updated user session")
      console.log(updatedUser.session)
      return true;
         
    }catch(error){
      console.log(error);
      return false;
      
    }
    
}
const updateUserInfo = async(user,data)=>{
    try{
        let updatedUser= await User.findByIdAndUpdate(user._id,)
        console.log("updated user")
        console.log(updatedUser)
        return true;
    
      
    }catch(error){
      console.log(error);
      return false;
      
    }

}
const updateUser = async (user,data)=>{
 
    try{
        let updatedData=data;
        if(!data){
            if(user.session.num){
                let sessionNum = user.session.num +1;
               user.session.num =sessionNum
            }else{
                user.session.num = 0;
            }
    
            updatedData= user.session
        }
        
        console.log(updatedData)
        let updatedUser= await User.findByIdAndUpdate(user._id,updatedData)
        console.log("updated user")
        console.log(updatedUser.session)
        return true;
    
      
    }catch(error){
      console.log(error);
      return false;
      
    }
      
  }

  const addTimetable=async(timetable)=>{
 
     try{
         let newTimetable= new Timetable(timetable);
         let savedTimetable = await newTimetable.save(); 
         return savedTimetable;
     }catch(error){
         console.log(error)
     }
 }


const addUser=async(userData)=>{

    let user = userData.phone?userData:createUser(userData);

    try{
        let newUser= new User(user);
        let savedUser = await newUser.save(); 
        // if(savedUser){
        //     let userTimetable = createTimetable(savedUser.id);
        //     let timetable = await addTimetable(userTimetable);
        // }
        return savedUser;
    }catch(error){
        console.log(error)
    }
}



module.exports = {
    addJob,
    getJob,
    getJobs,
    updateJob,
    addUser,
    getUser,
    getChatUser,
    getAllUsers,
    getProject,
    updateUser,
    getTimetable,
    getTimetables,
    updateTimetable,
    addLesson,
    getLearner,
    getLearners,
    getLesson,
    getLessons,
    getTutor,
    getTutors,
    updateLesson,
    updateUserSession,
    getTemplate,
    getLearnerCoach,
    getCoach,
    getParent,
    addJob,
    addLearner,
    addCoach,
}