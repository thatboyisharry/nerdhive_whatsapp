const mongoose = require("mongoose");
const { FlowSchema } =require('./flow.model');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
    {
        id:{type:String},
        name:{
            type:String,
            required:true,
        },
        flows:{
            type:[FlowSchema]
        },
        businessID:{
            type:String
        }
    }
)

module.exports = mongoose.model("Project", ProjectSchema);