import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  description?: string;
  dueDate: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">
          <b>Due Date:</b> {this.props.dueDate}
        </p>
        <p className="text-sm text-slate-500">
          <b>Description:</b> {this.props.description || "No description provided"}
        </p>
      </div>
    );
  }
}

export default Task;
