const mongoose = require("mongoose");


const Schema = mongoose.Schema;
c
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
            type:String
            default
        }
    }
)

const UISchema = new Schema(
    {
        type:{
            type:String
        },
        value:{
            type:String
        },
        name:{
            type:String
        }
    }
)

const NodeSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        transitions:{
            type:[TransitionSchema]
        },
        uis:{
            type:[UISchema]
        }
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