import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1  className='text-center text-4xl font-bold py-16'>📝 Redux To-Do App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;