import React,{useState} from "react";
import SignInSingUp from "./page/SignInSingUp";


export default function App() {
  const[user,setUser] = useState({name:"Sergio"});
  
  return <div>
  {user ? (
  <div>
    <SignInSingUp />
    </div>
  ) : 
  <h1>No estas logeado</h1> }
  </div>;
}

 




