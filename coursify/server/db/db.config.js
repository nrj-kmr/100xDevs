import mongoose from "mongoose"

const DB_NAME = "coursify"

const connectDB = async () => {
     try {
          console.log('connecting to DB!')
          const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
          console.log(`\n> Connected to database ✅ \n> DB HOST: ${connectionInstance.connection.host}:${connectionInstance.connection.port}\n> DB Name: ${connectionInstance.connection.name}\n`);
     } catch (err) {
          console.log(`error connecting DB ${err}`)
          process.exit(1)
     }
}

export default connectDB;