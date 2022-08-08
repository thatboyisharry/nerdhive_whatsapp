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
        title:{type:String},
        description:{type:String}
    }
)


const SectionSchema = new Schema(
    {
        title:{tyepe:String},
        rows:[RowSchema]
    }
)

const ButtonSchema = new Schema(
    {
       type:{type:String,default:'reply'},
        reply:{
          id:{type:String},
          title:{type:String}
        }
    }
)


const InteractiveListDocumentSchema = new Schema (
  {
    
    type:{
      type:String,
      default:'list'
    },
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
    
    type:{
      type:String,
      default:'list'
    },
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
    
    type:{
      type:String,
      default:'list'
    },
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
    
    type:{
      type:String,
      default:'list'
    },
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

const InteractiveButtonDocumentSchema = new Schema (
  {
    type:{
      type:String,
      default:'button'
    },
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
      buttons:[ButtonSchema]
      
    }
  }

)

const InteractiveButtonImageSchema = new Schema (
  {
    
    type:{
      type:String,
      default:'button'
    },
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
      buttons:[ButtonSchema],
      
    }
  }

)

const InteractiveButtonVideoSchema = new Schema (
  {
    
    type:{
      type:String,
      default:'button'
    },
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
      buttons:[ButtonSchema],
      
    }
  }

)

const InteractiveButtonTextSchema = new Schema (
  {
    
    type:{
      type:String,
      default:'button'
    },
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
      buttons:[ButtonSchema],
    }
  }

)



module.exports = mongoose.model("InteractiveListDocument", InteractiveListDocumentSchema);
module.exports = mongoose.model("InteractiveList", InteractiveListSchema);