import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-gray-200 flex pl-2 border-blue-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
        <Button
            value="Home"
            styling="bg-blue-500 px-3 py-2 rounded text-white"
            onClick={()=>navigate("/")}
          />
          <Button
            value="Price Configuration"
            styling="bg-blue-500 p-2 rounded text-white"
            onClick={()=>navigate("/PRICE_GET")}

          />
          <Button
            value="Running DU Status"
            styling="bg-blue-500 p-2 rounded text-white"
            onClick={()=>navigate("/DU_STATUS")}

          />
         
        </div>
      
<div>
<img src="/images/czarlogo.svg" alt="" className="h-20 w-auto mr-10"/>
</div>        
      </div>
    </nav>
  );
}
