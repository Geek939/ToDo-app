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
      <input className=" bg-green-800 font-semibold rounded-md text-zinc-50 text-center"
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        
        onChange={handleChange}
      />
      
      <div className="flex justify-center items-center gap-5 mt-3 mb-3">
        <button className="h-6 w-6 bg-blue-800 rounded-md" onClick={() => toggleComplete(todo)}>
        <img h-2 w-2 src="src/icons/check.svg" alt="" />
        </button>
        <button className="h-6 w-6 bg-green-400 rounded-md" onClick={() => handleEdit(todo, newTitle)}>
          <img h-2 w-2  src="src/icons/edit.svg" alt="" />
        </button>
        <button  className=" w-6 h-6 bg-red-800 rounded-md" onClick={() => handleDelete(todo.id)}>
         <img src="./src/icons/trash.svg" alt="" />
        </button>
      </div>
    </div>
  );
}