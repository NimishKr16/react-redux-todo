import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className='text-center p-8'>
      <input
      className='w-60 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black-200 rounded-md px-3 py-2 transition duration-300 ease focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className='p-4 rounded-md bg-gray-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none ml-2'
       onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default AddTodo;