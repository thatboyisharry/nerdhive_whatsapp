const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParentSchema = new Schema({
    userId:{type:String,required:true},
    learnerId:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String},
    learners:{type:[String]},
    coach:{type:String,required:true}
})


// let Parent = mongoose.model('Parent',ParentSchema);
// exports.Parent = Parent

module.exports= ParentSchema