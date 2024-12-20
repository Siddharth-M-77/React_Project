import React, { useState } from "react";
import Column from "./components/react_medium_projects/Column";

const App = () => {
  const [tasks, setTasks] = useState({
    todo: [{ id: 1, title: "Learn React" }],
    inProgress: [{ id: 2, title: "Build a Project" }],
    done: [{ id: 3, title: "Apply for Jobs" }],
  });

  const handleDragEnd = (task, source, destination) => {
    if (!destination) return;

    const sourceTasks = [...tasks[source]];
    const destTasks = [...tasks[destination]];

    const [removedTask] = sourceTasks.splice(
      sourceTasks.findIndex((t) => t.id === task.id),
      1
    );
    destTasks.push(removedTask);

    setTasks({ ...tasks, [source]: sourceTasks, [destination]: destTasks });
  };

  return (
    <div className="flex gap-4 p-4">
      {Object.keys(tasks).map((status) => (
        <Column
          key={status}
          title={status}
          tasks={tasks[status]}
          handleDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};

export default App;
