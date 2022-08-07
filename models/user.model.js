const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const FlowSchema = new Schema(
    {
        flow:{
            type:String,
            default:'onboarding',
            required:true,
        },
        node:{
            type:String,
            default:'start'  
            
        },
        lastUpdated:{
            type:Date
        },
        num:{
          type:Number,
          default:0
        }
    }
)

const UserSchema = new Schema(
  {
    name: {
      type: String,
      default:null,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
    },
    phone: {
        type: String,
        required: true,
        min: 10,
        max:11
      },
    type: {
      type: String,
      default: "",
    },

    isLandlord: {
        type: Boolean,
        default: false,
      },

    isTenant: {
        type: Boolean,
        default: false,
    },
    grade:{
      type:String,
      default: null
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    isOnboarded: {
      type: Boolean,
      default: false,
    },
    isOnboarding: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    session:{
        type: FlowSchema,
    },
    city: {
      type: String,
      max: 50,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
