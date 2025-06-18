import React from "react";
import Header from "../../other/Header";
import TaskListNumer from "../../other/TaskListNumer";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-6 h-screen bg-[#1C1C1C]">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumer data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
