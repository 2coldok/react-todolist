import './App.css';
import TodoList from './components/todo-list/TodoList';
import Header from './components/header/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
