import { useState } from "react";
import ImageButton from "./button";
import a from "./click";
const img1 = "w-[15%] h-[10%] rounded mt-3 mb-10 p-1 ml-4 text-xl"
function Timemanage() {
    const [mbar, setMbar] = useState();
    const z =a.map((x )=> <button className={img1}
    onClick={() => setMbar(mbar)} > {x}</button>)
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full h-[10%] bg-green-500 border-rounded flex mt-1">
               {z}
            </div>
            <div className="w-full h-screen flex "><ImageButton/></div>
        </div>
    );
}
export default Timemanage;