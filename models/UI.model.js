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
        title:{type:String},
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

const ProductSchema = new Schema(
    {
        product_retailer_id:{type:String},
    }
)

const ProductSectionSchema = new Schema(
    {
        title:{type:String},
        product_items:[ProductSchema]
    }
)

const InteractiveListDocumentSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    }
    
  }

)

const InteractiveListImageSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    }
    
  }

)

const InteractiveListVideoSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    }
    
  }

)

const InteractiveListTextSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    
    }
  }

)

const InteractiveButtonDocumentSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    }
    
  }

)

const InteractiveButtonImageSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    }
    
  }

)

const InteractiveButtonVideoSchema = new Schema (
  {  
      value:{
        messaging_product:{type:String, default: "whatsapp"},
        recipient_type:"individual",
        to:{type:String}, 
        type:{type:String,default:'interactive'},
        interactive:{
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
      }
  }

)

const InteractiveButtonTextSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
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
    }
    
  }

)

const InteractiveProductSchema = new Schema (
  {
    value:{
        messaging_product:{type:String, default: "whatsapp"},
        recipient_type:"individual",
        to:{type:String}, 
        type:{type:String,default:'interactive'},
        interactive:{
          type:{
              type:String,
              default:'product'
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
              catalog_id:{type:String},
              product_retailer_id:{type:String}
            }
        }
    }
    
  }

)

const InteractiveProductListSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'interactive'},
      interactive:{
        type:{
        type:String,
        default:'product_list'
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
          catalog_id:{type:String},
          sections:[ProductSectionSchema]
        }
      }

    }
  }
)
const TextSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'text'},
      text:{
        body:{type:String}
      }
    }
    
  }

)

const DocumentSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'document'},
      document:{
        id:{type:String},
        caption:{type:String},
        filename:{type:String}
      }
    }
    
  }

)

const AudioSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'audio'},
      audio:{
        id:{type:String},
      }
    }
    
  }

)

const ImageSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'image'},
      image:{
        id:{type:String},
        caption:{type:String}
      }
    }
    
  }

)

const StickerSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'sticker'},
      sticker:{
        id:{type:String},
      }
    }
    
  }

)

const VideoSchema = new Schema (
  {
    value:{
      messaging_product:{type:String, default: "whatsapp"},
      recipient_type:"individual",
      to:{type:String}, 
      type:{type:String,default:'video'},
      video:{
        id:{type:String},
        caption:{type:String}
      }
    }
    
  }

)
module.exports = mongoose.model("InteractiveListDocument", InteractiveListDocumentSchema);
module.exports = mongoose.model("InteractiveListImage", InteractiveListImageSchema);
module.exports = mongoose.model("InteractiveListVideo", InteractiveListVideoSchema);
module.exports = mongoose.model("InteractiveListText", InteractiveListTextSchema);
module.exports = mongoose.model("InteractiveButtonDocument", InteractiveButtonDocumentSchema);
module.exports = mongoose.model("InteractiveButtonImage", InteractiveButtonImageSchema);
module.exports = mongoose.model("InteractiveButtonVideo", InteractiveButtonVideoSchema);
module.exports = mongoose.model("InteractiveButtonText", InteractiveButtonTextSchema);
module.exports = mongoose.model("InteractiveProduct", InteractiveProductSchema);
module.exports = mongoose.model("InteractiveProductList", InteractiveProductListSchema);
module.exports = mongoose.model("Image", ImageSchema);
module.exports = mongoose.model("Video", VideoSchema);
module.exports = mongoose.model("Text", TextSchema);
module.exports = mongoose.model("Audio", AudioSchema);
module.exports = mongoose.model("Document", DocumentSchema);
module.exports = mongoose.model("Sticker", StickerSchema);