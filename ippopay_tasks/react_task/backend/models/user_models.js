const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: [true, "Email already exists"],
    },
    mobile_no: {
        type: String,
        required: [true, "Please enter Mobile Number"],
        unique: [true, "Mobile Number already exists"],
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Password must be of minimum 6 characters"],
        // select: false,
    },
    status: {
        type: String,
        default: "A"
    },
    bio: {
        type: String,
        // default: "Hi👋 Welcome To My Profile"
    }
})

const users = mongoose.model("users",userSchema);

module.exports = users;