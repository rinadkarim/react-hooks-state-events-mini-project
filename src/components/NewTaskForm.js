import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [tasks, setTasks] = useState(TASKS);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ id: Date.now(), text, category });
    setText("");
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskDetails">Details</label>
      <input
        id="taskDetails"
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <label htmlFor="taskCategory">Category</label>
      <select
        id="taskCategory"
        value={category}
        onChange={handleCategoryChange}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button 
      type="submit" >Add task</button>
    
    </form>
    
  );
}

export default NewTaskForm;






