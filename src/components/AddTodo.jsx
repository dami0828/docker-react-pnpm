import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="오늘 할일을 등록해주세요"
        value={text}
        onChange={handleChange}
      />
      <button>등록</button>
    </form>
  );
}
