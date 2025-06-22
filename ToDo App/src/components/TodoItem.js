import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
