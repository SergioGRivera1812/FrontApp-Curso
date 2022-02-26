import React, { useState } from "react";
import SignInSingUp from "./page/SignInSingUp";
import { ToastContainer } from "react-toastify";
import { Toast } from "bootstrap";

export default function App() {
  const [user, setUser] = useState({ name: "Sergio" });

  return (
    <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>
      ) :
        <h1>No estas logeado</h1>}
      <ToastContainer
        position="top-right"
        autoclose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>

  );
}






