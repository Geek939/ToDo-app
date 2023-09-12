import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {collection,query,onSnapshot,doc,updateDoc,deleteDoc,} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <section className="  w-screen h-screen flex flex-col text-center justify-center bg-black">
      <div>
        <h1 className=" text-4xl text-amber-500 font-bold font-serif">Task List</h1>
      </div>
    
   

      <div className="">
        <AddTodo />
      </div>
      <div className=" ">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
   
     
    </section>
  );
}
export default App;