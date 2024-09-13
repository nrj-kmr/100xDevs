import mongoose from "mongoose";

const courseScheme = mongoose.Schema({
     title: { type: String, required: true, trim: true },
     description: { type: String },
     price: { type: Number }
}, { timestamps: true })

const Courses = mongoose.model("Courses", courseScheme)

export default Courses;