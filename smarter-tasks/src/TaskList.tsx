// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
  // handleRemovedTask : (id:number) => void
}


// const TaskList = (props:Props) =>{
//   const list = props.tasks.map((task,idx)=>(
//     <Task
//     key={idx}
//     item={task}
//     removeTask={()=>props.handleRemovedTask(idx)}
//     />
//   ))
//   return <>{list}</>;
// }

const TaskList = (props: Props) => {
  const handleDeleteTask = (index: number) => {
    props.onDelete(index);
  };

  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li key={idx}>
          <Task
            item={task}
            removeTask={() => handleDeleteTask(idx)}
          />
        </li>
      ))}
    </ul>
  );
};


export default TaskList;
