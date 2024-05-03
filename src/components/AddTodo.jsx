import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Todos.module.css";

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    onAddTodo({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        placeholder="오늘 할일을 등록해주세요"
        value={text}
        onChange={handleChange}
        className={styles.todoTextInput}
      />
      <button className={styles.todoCreateButton}>등록</button>
    </form>
  );
}
