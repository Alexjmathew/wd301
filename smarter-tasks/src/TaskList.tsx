// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

const TaskList = (props: Props) => {
  const handleDelete = (index: number) => {
    props.onDelete(index);
  };

  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li key={idx}>
          <Task
            title={task.title}
            dueDate={task.dueDate}
            description={task.description}
          />
          <button
            className="deleteTaskButton w-1/2 bg-red-500 text-white px-4 rounded-sm mb-1 hover:bg-red-700"
            onClick={() => handleDelete(idx)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
