const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoachSchema = new Schema({
    userId:{type:String,required:true},
    sessions:{type:[String]},
    learners:{type:[String]},
    tutors:{type:[String]},
    timetableId:{type:String,required:true}
   
})


// let Coach = mongoose.model('Coach',CoachSchema);
// exports.Coach = Coach
module.exports= CoachSchema