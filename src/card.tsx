import React from "react"
interface Props{
    id: number;
    image: string;
    name: string;
    types: string[];
}
export const card: React.FC <Props> = (props) => {
    return <div className="w-2xs p-8"> 
    <center className="bg-green-500 text-black px-4 py-2 rounded-md shadow-md cursor-pointer">{props.name}-{props.id}</center>
    <img src = {props.image}/>
    <center className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-yellow-600 transition-colors ">{props.types}</center>
    </div>
}