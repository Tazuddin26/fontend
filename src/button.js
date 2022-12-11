import { getByTitle } from "@testing-library/react";
import { useState } from "react";
import b from "./click2";
import imageP from "./image";
import imageQ from "./image2";
const img = "w-[60%] h-[10%] rounded mt-10 mb-28 p-1 ml-20 text-xl"
const img2 = "w-[60%] h-[10%] rounded mt-10 mb-28 p-1 ml-20 text-xl"
function ImageButton() {
    const [image, setImage] = useState();

    return (
        <div>
            <div className="w-full h-screen flex ">
                <div className="w-2/12 h-full flex flex-col ">
                    {imageP.map(({ title, imge }) => (
                        <button className={img}
                            onClick={() => setImage(image + 1)} >
                            <img src={imge} alt={title} className="w-[70%] "></img>
                            <span className="mr-8 ">{title}</span>
                        </button>
                    ))}
                </div>
                <div className="w-1/12 h-3/6 flex mt-60 ml-6">
                    <img src="arrow.png" className="w-[80%] h-[40%]" />
                </div>
                <div className="w-2/12 h-full flex flex-col ">
                    {imageQ.map(({ title, imga }) => (
                        <button className={img}
                            onClick={() => setImage(image + 1)} >
                            <img src={imga} alt={title} className="w-[70%] "></img>
                            <span className="mr-8 ">{title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ImageButton;