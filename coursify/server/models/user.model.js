import mongoose from "mongoose";

const userSchema = mongoose.Schema({
     name: { type: String },
     email: { type: String, required: true, unique: true, trim: true, lowercase: true },
     password: { type: String, required: true }
}, { timestamps: true })

const Users = mongoose.model('Users', userSchema);

export default Users;