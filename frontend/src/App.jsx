import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../components/signup";
import SignIn from "../components/signIn";
// import Dashboard from "../components/dashboard";
// import SendMoney from "../components/sendMoney";

export default function App(){
      return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          {/* <Route path="/send" element={<SendMoney/>}/> */}
          {/* <Route path="/dashborad" element={<Dashboard/>}/> */}
        </Routes>
        </BrowserRouter>
        </>
      )
}