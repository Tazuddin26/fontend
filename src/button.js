import { useState } from "react";
import b from "./click2";
const img = "w-[60%] h-[10%] rounded mt-10 mb-28 p-1 ml-20 text-xl"
const img2 = "w-[60%] h-[10%] rounded mt-10 mb-28 p-1 ml-20 text-xl"
function ImageButton() {
    const [image, setImage] = useState()
    const m = b.map((l, i) => <button className={img2}
        onClick={() => setImage(image)} >{l}</button>)
    return (
        <div>
            <div className="w-full h-screen flex ">
                <div className="w-2/12 h-full flex flex-col ">
                    <img src="company.jpeg" className="w-[70%] " />
                    <img src="employee.jpg" className="w-[70%] " />
                    <img src="divicemanage.png" className="w-[70%] " />
                    {m}
                </div>
                <div className="w-1/12 h-3/6 flex mt-60 ml-6">
                    <img src="arrow.png" className="w-[80%] h-[40%]" />
                </div>
                <div className="w-2/12 h-full flex flex-col ">
                    <button className={img}
                        onClick={() => setImage(image + 1)} >
                        <img src="schedule.jpg" className="w-[70%] " />
                        <p className="text-left">Schedule</p>
                    </button>
                    <button className={img}
                        onClick={() => setImage(image + 1)} >
                        <img src="shift.png" className="w-[70%] " />
                        <p className="text-left">Shift</p>
                    </button>
                    <button className={img}
                        onClick={() => setImage(image + 1)} >
                        <img src="timetable.png" className="w-[70%] " />
                        <p className="text-left">Time Table</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ImageButton;