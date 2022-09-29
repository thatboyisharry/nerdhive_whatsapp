const mongoose = require('mongoose');
const { learnerSchema } = require('./learner.model');


const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    lessonRating:{type:String,required:true},
    understandingRating:{type:String,required:true},
    prosNotes:{type:String},
    consNotes:{type:String},
    appropriateConduct:{type:Boolean,default:true},
    conductNotes:{type:String},
    additionalNotes:{type:String},
    date:{type:Date}
})

const objectiveSchema = new Schema({
    objective:{type:String}
})

const lessonSchema = new Schema({
    id:{type:String,required:true},
    learnerId:{type:String,required:true},
    tutorId:{type:String},
    timeId:{type:String},
    subject:{type:String},
    topic:{type:String},
    subtopic:{type:String},
    objectives:{type:[objectiveSchema]},
    location:{type:String},
    status:{type:String,required:true},
    learnerReview:{type:reviewSchema},
    tutorReview:{type:reviewSchema}
})

exports.lessonSchema=lessonSchema;
exports.Lesson = mongoose.models.Lesson || mongoose.model('Lesson',lessonSchema);