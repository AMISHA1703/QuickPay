import React from "react"
import { useSearchParams } from 'react-router-dom';
import { SiPaypal } from "react-icons/si";

export const Appbar = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    return (
    <div className="shadow h-14 flex justify-between m-1 px-2">
        <div className="flex flex-col justify-center h-full  ml-4">
            <SiPaypal className="text-gray-400 text-4xl"/>
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-3 ">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {name[0].toUpperCase()}
                </div>
            </div>
        </div>
    </div>
    )
}