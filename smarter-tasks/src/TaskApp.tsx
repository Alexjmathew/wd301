import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {
}
interface TaskAppState {
  tasks: TaskItem[];
}
class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task: TaskItem) => {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };

  render() {
    return (
      <div className="container py-10 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-lg mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          WD301
        </h1>
        <div className="mr-8 border-2 border-slate-800 rounded-lg px-4 py-4 w-full">
          <div className="border border-slate-200 rounded-lg p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
