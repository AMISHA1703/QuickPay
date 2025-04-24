import React, { useState } from "react";
import axios from "axios";

import { BottomWarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="example@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                try {
                  const response = await axios.post(
                    `${import.meta.env.VITE_APP_URL}/user/SignIn`,
                    {
                      username: username,
                      password: password,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  console.log(response.data);
                  console.log(username, password);
                  localStorage.setItem("token", response.data.token);
                  console.log(response.data);
                  navigate("/dashboard?name=" + username);
                } catch (error) {
                  console.log(error);
                }
              }}
              label={"Sign in"}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
