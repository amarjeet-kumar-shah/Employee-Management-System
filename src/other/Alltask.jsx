import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5 ">
      <div className="py-2 px-4 mb-2 border-2 bg-red-400 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h4 className="text-lg font-medium w-1/5">New Task</h4>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="">
        {userData.map(function (elem, idx) {
          return (
            <div key={idx} className="py-2 px-4 mb-2 border-2 border-emerald-400 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCounts.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">{elem.taskCounts.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
