const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const LearnerQuestionSchema = new Schema({
        id:{type:String,required:true},
        userId:{type:String,required:true},
        subject:{type:String,required:true,default:'mathematics'},
        topic:{type:String,required:true},
        grade:{type:String,required:true},
        difficulty:{type:String},
        question:{
            type:{type:String},
            id:{type:String},
            text:{type:String}
        },
        sentTo:{type:[String]},
        attempt:{
            type:{type:String},
            id:{type:String},
            text:{type:String}
        },
        status:{type:String,required:true,default:'unsolved'},
        solver:{
            userId:{type:String},
            rating:{type:String}
        },
        notes:{
            type:String
        },
        date:{
            type:String
        },
    
    },

    { timestamps: true }
)


// exports.Job = mongoose.models.Job || mongoose.model('Job',JobSchema);
module.exports= LearnerQuestionSchema