// import React from "react";
import "./TaskCard.css";

interface TaskItem {
    title: string;
    dueDate: string;
    description: string;
}

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-sm border border-slate-200">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">
        Due Date: {props.dueDate || 'No due date'}
      </p>
      <p className="text-sm text-slate-500">
        Description: {props.description || 'No description'}
      </p>
    </div>
  );
};

export default Task