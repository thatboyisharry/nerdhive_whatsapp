const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const NextNodeSchema = new Schema(
    {
        name:{
            type:String
        },
        flow:{
            type:String
        }
    }
)
const TransitionSchema = new Schema(

    {
        name:{
            type:String,
            required:true 
        },
        function:{
            type:String
        },
        nextNode:{
            type:NextNodeSchema
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
        },
        user_interfaces:{
            type:[]
        }
    }
)

module.exports = mongoose.model("Flow", FlowSchema);