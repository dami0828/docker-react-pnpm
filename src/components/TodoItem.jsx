import React from "react";
import styles from "./Todos.module.css";

export default function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <p>{todo.text}</p>
      <button className={styles.todoDeleteButton} onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
