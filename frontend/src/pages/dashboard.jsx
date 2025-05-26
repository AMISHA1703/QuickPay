import React from "react";
import { useSearchParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";

import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export default function Dashboard(){
    const [searchParams] = useSearchParams();
      const name = searchParams.get("name");
    return(
        <div className="m-1 p-3">
             <Appbar />
             <Balance />
             <Users dashboarduname={name}/>
        </div>
       

    )

}