import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = ({dashboarduname}) => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
        console.log(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="font-semi-bold mt-6 text-2xl m-1">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {filter === "" ? (
          <p className="p-2">No search</p>
        ) : users.filter((user) => user.firstname.includes(filter)).length >
          0 ? (
          users
            .filter((user) => user.firstname.includes(filter))
            .map((user) => <User key={user.id} user={user}  dashboarduname={dashboarduname}/>)
        ) : (
          <p className="p-2">No user found</p>
        )}
      </div>
    </>
  );
};

function User({ user ,dashboarduname}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12  bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl ">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstname , { state: { dashboarduname } });
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
