import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
    unique:true,
  },
  isVerified: {
    type: Boolean,
    default:false,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
})

const User = mongoose.model('user',userSchema)

export default User