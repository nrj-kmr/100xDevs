
import React from "react";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
     const navigate = useNavigate();
     return (
          <>
               <div className="flex justify-between m-2">
                    <h1>Coursify</h1>
                    <div className="space-x-2">
                         <button onClick={() => navigate('/signup')}>Signup</button>
                         <button onClick={() => navigate('/login')}>Login</button>
                    </div>
               </div>
          </>
     )
}

export default Navbar;