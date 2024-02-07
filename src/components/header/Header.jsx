import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from 'react-icons/hi'

export default function Header({ filters, filter, onFilterChange }) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
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
