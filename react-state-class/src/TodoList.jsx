import { useState } from "react"; 

function TodoList() { 
  let [todos, setTodos] = useState(["sample Task"]); 
  let [newTodo, setNewTodo] = useState(""); 

  let addNewTask = () => {
    setTodos([...todos, newTodo]); 
    setNewTodo("");
   };

   let updateTodoValue = (event) => {
    setNewTodo(event.target.value); 
   }; 
     
  return (
    <div>
      <input placeholder="Add a new task" value={newTodo} onChange={updateTodoValue}></input> 
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button> 

      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  )
}



export default TodoList; 
