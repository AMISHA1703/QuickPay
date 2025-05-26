import React, { useState } from "react";
import { useNavigate, useSearchParams,useLocation } from "react-router-dom";
import axios from "axios";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate=useNavigate();
   const location = useLocation();
  const { dashboarduname } = location.state || {};

  const handleTransfer = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/account/transfer`,
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(localStorage.getItem("token"));

    //   alert("Transfer successful!");
      setAmount(0); // Reset amount
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000); // hides after 1 sec


    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      alert(
        "Transfer failed: " + (error.response?.data?.message || error.message)
      );
    } finally {
        setTimeout(() =>setLoading(false), 1000); // hides after 3 sec

      
    }
  };
   function returnBack(){
      navigate("/dashboard?name=" + dashboarduname);
  }

  return (
    <div className="flex justify-center items-center flex-col justify-items-normal h-screen  bg-gray-100">
      {isSuccess && (
        <div className="  rounded-full  mt-8 p-5 flex justify-center">
          <div className="flex items-center space-x-2 text-green-600 font-medium">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="animation-ping text-2xl">Transfer Successful</span>
          </div>
        </div>
      )}

      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg border-none">
          <div className="flex flex-col space-y-1.5 p-2">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#91e141] flex items-center justify-center">
                <span className="text-2xl text-white">
                  {name[0]?.toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2 mt-4">
                <label
                  className="text-sm font-medium p-2 leading-none"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  onChange={(e) => setAmount(Number(e.target.value))}
                  type="number"
                  value={amount}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <button
                onClick={handleTransfer}
                disabled={loading}
                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-[#3E7B27] cursor-pointer hover:bg-[#1F7D53] text-white"
              >
                {loading ? "Processing..." : "Initiate Transfer"}
              </button>
            </div>
          </div>
        </div>
        <button className="bg-white text-xl text-blue-950 m-2 p-4 shadow-lg" onClick={returnBack}>Go back</button>
      </div>
    </div>
  );
};

export default SendMoney;
