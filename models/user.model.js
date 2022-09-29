const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const sessionSchema = new Schema(
  {
    flow:{type:String},
    node:{type:String},
    num:{type:String},
    lastUpdated:{type:Date},
    chat:{
      active:{type:Boolean,default:false},
      participant:{type:String}
    },
    data:{}
  }
)

const UserSchema = new Schema(
  {
    id:{
      type:String,
      required:true,
    },
    username: {
      type: String,
      default:null,
      min: 3,
      max: 20,
      unique: true,
    },
    userCode:{
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

    isParent: {
        type: Boolean,
        default: false,
      },

    isLearner: {
        type: Boolean,
        default: false,
    },
    
    isTutor: {
      type: Boolean,
      default: false,
    },
    
    isCoach: {
      type: Boolean,
      default: false,
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
    session:{
        type: sessionSchema,
    }  
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
