import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((element, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(element)}>{element}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
