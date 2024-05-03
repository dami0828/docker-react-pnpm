import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const getTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(getTodos ? JSON.parse(getTodos) : []);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo.id !== deleteTodo.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
}
