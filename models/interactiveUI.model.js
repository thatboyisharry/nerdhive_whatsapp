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

const RowSchema = new Schema(
    {
        id:{type:String},
        tittle:{type:String},
        description:{type:String}
    }
)


const SectionSchema = new Schema(
    {
        title:{tyepe:String},
        rows:[RowSchema]
    }
)



const InteractiveListDocumentSchema = new Schema (
  {
    header:{
      type:DocumentHeaderSchema
    },
    body:{
      text:{type:String}
    },
    footer:{
      text:{type:String}
    },
    action:{
      button:{type:String},
      sections:[SectionSchema]
    }
  }

)

const InteractiveListImageSchema = new Schema (
  {
    header:{
      type:ImageHeaderSchema
    },
    body:{
      text:{type:String}
    },
    footer:{
      text:{type:String}
    },
    action:{
      button:{type:String},
      sections:[SectionSchema]
    }
  }

)

const InteractiveListVideoSchema = new Schema (
  {
    header:{
      type:VideoHeaderSchema
    },
    body:{
      text:{type:String}
    },
    footer:{
      text:{type:String}
    },
    action:{
      button:{type:String},
      sections:[SectionSchema]
    }
  }

)

const InteractiveListTextSchema = new Schema (
  {
    header:{
      type:TextHeaderSchema
    },
    body:{
      text:{type:String}
    },
    footer:{
      text:{type:String}
    },
    action:{
      button:{type:String},
      sections:[SectionSchema]
    }
  }

)


module.exports = mongoose.model("Flow", FlowSchema);