import { Router } from "express";
import Courses from "../models/course.model.js";
import { authenticateJWT } from "../middlewares/auth.js";

const courseRouter = Router();

courseRouter.post('/createCourse', authenticateJWT, async (req, res) => {
     const { title, description, price } = req.body;
     try {
          const course = new Courses({ title, description, price })
          await course.save();
          res.status(200).json({ message: "Course added Successfully!" })
     } catch (err) {
          res.json({ err: err.message || 'error while creating course' })
     }
})

courseRouter.get('/allCourses', authenticateJWT, async (req, res) => {
     const courses = await Courses.find({});
     res.json({ courses })
})

courseRouter.put('/editCourse/:courseId', authenticateJWT, async (req, res) => {
     const course = await Courses.findByIdAndUpdate(req.params.courseId, req.body, { new: true })
     if (course) {
          res.json({ message: "Course updated successfully!" })
     } else {
          res.status(404).json({ message: "Course not found!" })
     }
});

export default courseRouter;