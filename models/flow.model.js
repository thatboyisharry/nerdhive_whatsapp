const mongoose = require("mongoose");
const {
    InteractiveListDocumentSchema,
    InteractiveListImageSchema,
    InteractiveListVideoSchema,
    InteractiveListTextSchema,
    InteractiveButtonDocumentSchema,
    InteractiveButtonImageSchema,
    InteractiveButtonVideoSchema,
    InteractiveButtonTextSchema,
    InteractiveProductSchema,
    InteractiveProductListSchema,
    ImageSchema,
    VideoSchema,
    TextSchema,
    AudioSchema,
    DocumentSchema,
    StickerSchema
} =require('./UI.model');



const Schema = mongoose.Schema;
const TransitionSchema = new Schema(

    {
        id:{
            type:String
        },
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
        id:{
            type:String
        },
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

const UISchema = new Schema(
    {
        id:{
            type:String
        },
        name:{
            type:String,
            required:true
          
        },
        
        value:{
            type:InteractiveListDocumentSchema|
                InteractiveListImageSchema|
                InteractiveListVideoSchema|
                InteractiveListTextSchema|
                InteractiveButtonDocumentSchema|
                InteractiveButtonImageSchema|
                InteractiveButtonVideoSchema|
                InteractiveButtonTextSchema|
                InteractiveProductSchema|
                InteractiveProductListSchema|
                ImageSchema|
                VideoSchema|
                TextSchema|
                AudioSchema|
                DocumentSchema|
                StickerSchema
        }
    }
)


const NodeSchema = new Schema(
  
  
    {
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true,
        },
        flow:{
            type:String,
            required:true,
        },
        actions:[ActionSchema],
        uis:[UISchema],
        catch:'',
        sticky:{
          type:Boolean,
          default:false
        },
        transitions:{
            type:[TransitionSchema]
        },
      
    }
  
)

const FlowSchema = new Schema(
    {
        id:{type:String},
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