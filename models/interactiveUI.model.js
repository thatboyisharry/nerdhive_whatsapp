const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const headerIDMeta = new Schema(
    {
        id:{
            type:String,
        },
        filename:{
            type:String
        }
    }
)

const documentHeader = new Schema(
    {
        type:{
            type:String,
            default:'document'
        },
        document:{
            type:String
        }
    }
)

module.exports = mongoose.model("Flow", FlowSchema);