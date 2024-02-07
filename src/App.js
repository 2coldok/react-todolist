import './App.css';
import TodoList from './components/todo-list/TodoList';
import Header from './components/header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
