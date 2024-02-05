import React, { useState } from "react";
import AddTodo from "../add-todo/AddTodo";
import Todo from "../todo/Todo";

const temp = [
  { id: 13, text: "사우나가기", status: "active" },
  { id: 14, text: "운동하기", status: "active" },
];

export default function TodoList() {
  const [todos, setTodos] = useState(temp);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
