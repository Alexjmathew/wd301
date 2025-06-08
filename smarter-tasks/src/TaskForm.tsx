import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}

const TaskForm = (props: TaskFormProps) => {
    const [formState, setFormState] = React.useState<TaskFormState>({
        title: "",
        description: "",
        dueDate: "",
    });

    const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(`Submitted the form with`);
        if (formState.title.length === 0 || formState.dueDate.length === 0) {
          return;
        }
        props.addTask(formState);
        setFormState({ title: "", description: "", dueDate: "" });
    };


    const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        setFormState({ ...formState, title: event.target.value });
    };
      const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        setFormState({ ...formState, description: event.target.value });
    };
      const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        setFormState({ ...formState, dueDate: event.target.value });
    };

    return <>
        <form onSubmit={addTask}>
            <input type="text" id="todoTitle" className="w-full p-2 border border-black rounded mb-2" value={formState.title} onChange={titleChanged} placeholder="Title"/>
            <input type="text" id="todoDescription" className="w-full p-2 border border-black rounded mb-2" value={formState.description} onChange={descriptionChanged} placeholder="Description"/>
            {/* <label htmlFor="todoDueDate" className="flex text-gray-700 mb-2 block">
                DueDate 
            </label> */}
            <input type="date" id="todoDueDate" className="w-full p-2 border border-black rounded mb-4" value={formState.dueDate} onChange={dueDateChanged} placeholder="Due Date"/>
            <button type="submit" id="addTaskButton" className="w-full bg-blue-500 text-white py-2 px-4 mb-3 rounded hover:bg-blue-700">Add item</button>
        </form>
    </>
};


export default TaskForm;