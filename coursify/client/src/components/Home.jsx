import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
     const navigate = useNavigate();
     return (
          <div className="flex flex-col items-center mt-72">
               <h1 className="text-5xl font-serif text-gray-300">Welcome to the Coursify</h1>
               <p className="text-green-400 font-mono">one stop solution for teachers to reach their students</p>
               <Button onClick={() => navigate('/signin')} className="mt-5">Get Started!</Button>
          </div>
     )
}

export default Home;