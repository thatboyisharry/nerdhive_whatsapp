const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const TransitionSchema = new Schema(

    {
        name:{
            type:String,
            required:true 
        },
        flow:{
            type:String,
            required:true
        },
        trigger:{
            type:String,
            default:''
        }
    }
)

const ActionSchema = new Schema(
    {
        name:{
            type:String,
            required:true
          
        },
        flow:{
            type:String,
            required:true
        },
        trigger:{
            type:String,
            default:'',
            required:true
        }
    }
)


const NodeSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        flow:{
            type:String,
            required:true,
        },
        actions:[ActionSchema],
        uis:[],
        catch:'',
        transitions:{
            type:[TransitionSchema]
        },
      
    }
)

const FlowSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        nodes:{
            type:[NodeSchema]
        }
    }
)

module.exports = mongoose.model("Flow", FlowSchema);