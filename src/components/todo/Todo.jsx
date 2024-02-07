import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (event) => {
    const status = event.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status: status});
  }
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" id="checkbox" onChange={handleChange} checked={status === 'completed'}/>
      <label className={styles.text} htmlFor="checkbox">{text}</label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashCan />
        </button>
      </span>
    </li>
  );
}
