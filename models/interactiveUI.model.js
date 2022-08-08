const mongoose = require("mongoose");


const Schema = mongoose.Schema;



const HeaderMetaSchema = new Schema(
    {
      
        id:{
            type:String,
        },
        link:{
            type:String,
        },
        provider:{
            name:{
              type:String
            }
        },
        filename:{
          type:String
        }
    }
)

const DocumentHeaderSchema = new Schema(
    {
        type:{
            type:String,
            default:'document'
        },
        document:{
            type:HeaderMetaSchema
        }
    }
)


const VideoHeaderSchema = new Schema(
    {
        type:{
            type:String,
            default:'video'
        },
        video:{
            type:HeaderMetaSchema
        }
    }
)


const ImageHeaderSchema = new Schema(
    {
        type:{
            type:String,
            default:'image'
        },
        image:{
            type:HeaderMetaSchema
        }
    }
)

const TextHeaderSchema = new Schema(
    {
        type:{
            type:String,
            default:'text'
        },
        text:{
            type:HeaderMetaSchema
        }
    }
)




module.exports = mongoose.model("Flow", FlowSchema);