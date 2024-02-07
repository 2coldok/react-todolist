import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((element, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === element && styles.sex}`}
              onClick={() => onFilterChange(element)}
            >
              {element}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
