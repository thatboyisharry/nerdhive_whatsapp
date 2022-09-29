const mongoose = require('mongoose');
const { lessonSchema } = require('./lesson.model');



const Schema = mongoose.Schema;

const objectiveSchema = new Schema({
    objective:{type:String}
})

const JobSchema = new Schema({
    id:{type:String,required:true},
    lesson:{type:lessonSchema},
    interestedCandidates:{type:[String]},
    uninterestedCandidates:{type:[String]},
    status:{type:String,required:true,default:'active'},
    payout:{type:String,required:true}
    
})


exports.Job = mongoose.models.Job || mongoose.model('Job',JobSchema);