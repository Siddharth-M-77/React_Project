import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, handleDragEnd }) => {
  const handleDrop = (e) => {
    const task = JSON.parse(e.dataTransfer.getData("task"));
    handleDragEnd(task, task.source, title);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex flex-col w-1/3 p-4 bg-gray-200 rounded-md"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="text-xl font-bold mb-4">{title.toUpperCase()}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} source={title} />
      ))}
    </div>
  );
};

export default Column;
