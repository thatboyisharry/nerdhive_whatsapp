const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const PropertySchema = new Schema(
    {
        ownerID:{
            type:String,
            required:true,
        },
        type:{
            type:String,
        },
        province:{
            type:String
        },
        city:{
            type:String
        },
        town:{
            type:String
        },
        streetAddress:{
            type:String
        },
        numOfBedrooms:{
            type:String
        },
        numOfAvailableRooms:{
            type:String
        },
        hasOwnBathroom:{
            type:Boolean,
            default:false
        },
        hasShower:{
            type:Boolean,
            default:false
        },
        hasParking:{
            type:Boolean,
            default:false
        },
        depositRequired:{
            type:Boolean,
            default:false
        },
        depositAmount:{
            type:String,
        },
        rentAmount:{
            type:String,
        },
        additionalInfo:{
            type:String,
        },
        images:{
          type:[String]
        }
    }
)


module.exports = mongoose.model("Property", PropertySchema);