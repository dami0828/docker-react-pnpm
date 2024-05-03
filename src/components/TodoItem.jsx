import React from "react";

export default function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
