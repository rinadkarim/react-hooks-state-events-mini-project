import React from "react";
import Comments from "./Comments";

function Task({ task, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <p>
        {task.text} - {task.category}
      </p>
      <button onClick={handleDeleteClick}>Delete</button>
      <Comments taskId={task.id} />
    </div>
  );
}

export default Task;
