import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Write Todo Here!"
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
