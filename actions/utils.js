const {v1} =require('uuid');
const uuidv1 = v1;


class LearnerQuestion{
    constructor(user,subject){
        this.id=uuidv1();
        this.userId=user.id;
        this.subject=subject;
        this.grade=user.grade;
        this.topic='';
        this.difficulty='';
        this.status='';
        this.sentTo=[];
        this.question={id:'',text:''};
        this.attempt={id:'',text:''};
        this.solver={
            userId:'',
            rating:''
        }
        this.date=''
        
    }
}

const createLearnerQuestion=(user,subject)=>{
    let question = new LearnerQuestion(user,subject);
    return question;
}

module.exports={
    createLearnerQuestion
}