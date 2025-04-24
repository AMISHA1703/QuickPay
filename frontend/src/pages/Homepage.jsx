import React from "react";
import { useNavigate } from "react-router-dom";
import { SiPaypal } from "react-icons/si";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <SiPaypal className="text-4xl text-gray-400 shadow-md" />
          <span className="text-sm font-semibold text-gray-700 ">pay..</span>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-xl transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/signIn")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-4 rounded-xl transition"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Body */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-10">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The safer, faster way to pay online
          </h1>
          <p className="text-gray-600 mb-6">
            Join for secure, fast, and easy transfer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/signup")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded-xl transition"
            >
              Read Our Blog
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-md">
          <img
            src="https://img.freepik.com/free-photo/3d-hand-making-cashless-payment-from-smartphone_107791-16609.jpg?t=st=1745337090~exp=1745340690~hmac=cf9252da70cd643d06d59c71ef31e3ac5f08ca86ee4a195ee9709d630643830c&w=740"
            alt="Secure Payment"
            className="w-full rounded-4xl"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-gray-500 text-sm py-4 shadow-inner">
        &copy; {new Date().getFullYear()} Clone. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
