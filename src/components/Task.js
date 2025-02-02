import React, { useEffect } from "react";
import { CATEGORIES, TASKS } from "../data";
import Comments from "./Comments";

function Task({ text,  id, category, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(id);
  };
 

 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick}>Delete</button>
      <Comments taskId={id} />
    </div>
  );
}

export default Task;


