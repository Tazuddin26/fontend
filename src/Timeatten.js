import { useState } from "react";
import data from "./data";
function Timeatt() {
    const [e_id, setE_id] = useState();
    const [e_name, setE_name] = useState();
    const [date, setDate] = useState();
    const [intime, setIntime] = useState();
    const [outtime, setOuttime] = useState();
    const [worktime, setWorktime] = useState();
    const [users, setUsers] = useState();
    const Submit = () => {
        const user = {
            Employee_ID: e_id,
            Employee_Name: e_name,
            Date: date,
            In_Time: intime,
            Out_Time: outtime,
            Work_Time: worktime,
        };
        fetch('http://localhost:3001/create-employee', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => window.alert("Data is Sent"));
    };
       
   
    return (
        <div className="w-full h-screen flex">
            <div className="w-2/12 h-full"></div>
            <div className="w-8/12 h-full bg-blue-500 mt-4 my-4 ">
                <p className="text-4xl font-extralight">Time Attendance System</p>
                <div className="w-full h-1/6 mt-4 ml-12">
                    <div className="w -full h-5/6 flex ">
                        <p className="w-2/12 h-4/6 bg-pink-600  mb-12">Employee_ID </p>
                        <input
                            type="text"
                            value={e_id}
                            className="h-[10%] w-[60%] border p-6  border-blue-300 rounded-md ml-12"
                            onChange={e => setE_id(e.target.value)} />
                    </div>
                    <div className="w -full h-5/6 flex ">
                        <p className="w-2/12 h-4/6 bg-pink-600 border rounded-md mb-12 "> Employee_Name</p>
                        <input
                            type="text"
                            value={e_name}
                            className="h-[10%] w-[60%] border p-6  border-blue-300 rounded-md ml-12"
                            onChange={e => setE_name(e.target.value)} />
                    </div>
                    <div className="w -full h-5/6 flex ">
                        <p className="w-2/12 h-4/6 bg-pink-600 border rounded-md mb-12"> Date</p>
                        <input
                            type="text"
                            value={date}
                            className="h-[10%] w-[60%] border p-6  border-blue-300 rounded-md ml-12"
                            onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="w -full h-5/6 flex ">
                        <p className="w-2/12 h-4/6 bg-pink-600 border rounded-md mb-12">In_Time</p>
                        <input
                            type="text"
                            value={intime}
                            className="h-[10%] w-[60%] border p-2  border-blue-300 rounded-md ml-12"
                            onChange={e => setIntime(e.target.value)} />
                    </div>
                    <div className="w -full h-5/6 flex ">
                        <p className="w-2/12 h-4/6 bg-pink-600 border rounded-md mb-12">Out_Time </p>
                        <input
                            type="text"
                            value={outtime}
                            className="h-[10%] w-[60%] border p-6  border-blue-300 rounded-md ml-12"
                            onChange={e => setOuttime(e.target.value)} />
                    </div>
                    <div className="w -full h-5/6 flex">
                        <p className="w-2/12 h-4/6 bg-pink-600 border rounded-md mb-12">Work_Time</p>
                        <input
                            type="text"
                            value={worktime}
                            className="h-[10%] w-[60%] border p-6  border-blue-300 rounded-md ml-12"
                            onChange={e => setWorktime(e.target.value)} />
                    </div>
                    <button
                        className="w-3/12 h-3/6 border rounded-full bg-yellow-400 mb-12"
                        type="button"
                        onClick={Submit}> Submit
                    </button>
                    <p>{JSON.stringify(users)}</p>
                </div> 
            </div>
        </div>
    )
};
export default Timeatt;