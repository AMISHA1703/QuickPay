import React, { useEffect, useState } from "react";
import axios from "axios";

export const Balance = () => {
  const [balance, setBalance] = useState(10000);

  useEffect(() => {
    const fetchBalance = async () => {
      // try {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization:`Bearer ${token}`,
          }
        },
      );

      console.log( response.data);
      console.log("Balance:", response.data.balance);
      setBalance(response.data.balance);
      // } catch (error) {
      //   console.error("Error fetching balance:", error, "hfhfjj");
      // }
    };

    fetchBalance();
  }, []);
  return (
    <div className="flex  mt-3  p-2 ">
      <div className="font-semibold text-lg ">Your balance:</div>
      <div className=" ml-1 text-lg">Rs {balance}</div>
    </div>
  );
};
