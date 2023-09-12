import React from "react";
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div>
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        
        onChange={handleChange}
      />
      <div>
        <button
          
          onClick={() => toggleComplete(todo)}
        >
        
        </button>
        <button
          
          onClick={() => handleEdit(todo, newTitle)}
        >
          
        </button>
        <button  onClick={() => handleDelete(todo.id)}>
         
        </button>
      </div>
    </div>
  );
}