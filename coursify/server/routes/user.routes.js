import { Router } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authenticateJWT } from '../middlewares/auth.js';
import Users from '../models/user.model.js';

import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
     const { name, email, password } = req.body;
     if (!name || !email || !password) {
          return res.status(400).json({ message: "All Fields are required!" })
     }
     try {
          const existingUser = await Users.findOne({ email })
          if (existingUser) {
               return res.status(403).json({ message: "User already exists!" })
          }
          // const hasedPassword = await bcrypt.hash(password, 10)
          const newUser = new Users({ name, email, password })
          const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
          await newUser.save()
          res.status(201).json({ message: "Signup Successful!", newUser, token });
     } catch (err) {
          return res.json({ message: "signup error", err: err.message || 'signup error' })
     }
})

userRouter.post('/login', async (req, res) => {
     const { email, password } = req.body;
     const user = await Users.findOne({ email, password });
     if (user) {
          const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.status(200).json({ message: 'logged in successfully!', token })
     } else {
          res.status(403).json({ message: "Invalid credentials" })
     }
})

userRouter.get('/purchasedCourses', authenticateJWT, async (req, res) => {
     const user = await Users.findOne({ email: req.user.email }).populate('purchasedCourses');
     if (user) {
          res.json({ purchasedCourses: user.purchasedCourses || [] })
     } else {
          res.status(403).json({ message: 'User not found!' })
     }
})

export default userRouter;