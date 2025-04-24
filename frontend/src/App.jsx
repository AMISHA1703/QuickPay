import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dashboard";
import SendMoney from "./pages/sendMoney";
import Homepage from "./pages/Homepage";
import BlogPage from "./pages/Blog";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
