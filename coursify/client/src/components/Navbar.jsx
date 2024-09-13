
import React from "react";
import { useNavigate } from 'react-router-dom'
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
     const navigate = useNavigate();
     return (
          <div className="flex justify-between p-4">
               <h1 className="text-3xl font-semibold cursor-pointer" onClick={() => navigate('/')}>Coursify</h1>
               <div className="flex align-center space-x-4">
                    <ModeToggle />
                    <Button onClick={() => navigate('/signin')}>Signin</Button>
               </div>
          </div>
     )
}

export default Navbar;