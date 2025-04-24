import React from "react";
import { Appbar } from "../components/Appbar";

import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export default function Dashboard(){
    return(
        <div className="m-1 p-3">
             <Appbar />
             <Balance />
             <Users/>
        </div>
       

    )

}