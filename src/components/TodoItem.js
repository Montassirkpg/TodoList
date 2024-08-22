import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => completeTodo(index)}>Compléter</button>
      <button onClick={() => removeTodo(index)}>Supprimer</button>
    </div>
  );
}

export default TodoItem;
