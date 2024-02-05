import React, { useState } from "react";
import AddTodo from "../add-todo/AddTodo";

const temp = [
  { id: 13, text: "사우나가기", status: "active" },
  { id: 14, text: "운동하기", status: "active" },
];

export default function TodoList() {
  const [todos, setTodos] = useState(temp);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/> 
    </section>
  );
}
