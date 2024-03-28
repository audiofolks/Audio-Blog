import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requiured: true,
        unique: true,
    },
    email: {
        type: String,
        requiured: true,
        unique: true,
    },
    password: {
        type: String,
        requiured: true,
    },
}, {timestamps: true}

);

const user = mongoose.models('User', userSchema);

export default User;