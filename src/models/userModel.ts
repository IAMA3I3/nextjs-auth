import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    userType: {
        type: String,
        enum: ['user', 'admin', 'superAdmin'],
        default: 'user'
    },
    verificationToken: String,
    verificationTokenExpiry: Date,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User