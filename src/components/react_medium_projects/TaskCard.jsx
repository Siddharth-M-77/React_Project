import React from "react";

const TaskCard = ({ task, source }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("task", JSON.stringify({ ...task, source }));
  };

  return (
    <div
      className="p-4 mb-4 bg-white rounded-md shadow-md cursor-pointer"
      draggable
      onDragStart={handleDragStart}
    >
      {task.title}
    </div>
  );
};

export default TaskCard;
