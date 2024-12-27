import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

function TodoItem({ todo, onDelete, onEdit, onComplete }) {
    const dispatch = useDispatch();
  return (
    <div className="flex w-80 ml-[39vw] pt-8 items-center justify-between p-2 border-b border-gray-200">
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <div className="flex gap-2">
        <button onClick={() => dispatch(toggleTodo(todo.id))} className="text-green-500 hover:text-green-700">
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500 hover:text-red-700">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;