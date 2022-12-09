import { Link } from "react-router-dom";
function Links() {
    const cStyle = 'border p-2 m-2 text-3xl hover:text-blue-600 text-white';
    return (
        <div className = "w-full h-screen flex justify-center mt-12">
            <div className = "w-[5%] h-full"></div>
            <div className = "flex flex-col justify-center w-[50%] h-[90%] hover:bg-blue-400 border bg-red-300">
                <Link to = "/cisco" className={cStyle}>CISCO</Link>
                <Link to = "/google" className={cStyle}>GOOGLE</Link>
                <Link to = "/timeatt" className={cStyle}>Time_Attendance</Link>
                <Link to = "/timemanage" className={cStyle}>Time Managemant</Link>
            </div>
        </div>
    );
}
export default Links;;