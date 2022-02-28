import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
// import './App.css';

const todos = [
  { text: "cortarme el pelo0", completed: false },
  { text: "cortarme el pelo1", completed: false },
  { text: "cortarme el pelo2", completed: false },
  { text: "cortarme el pelo3", completed: false },
  { text: "cortarme el pelo4", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter  />
      <TodoSearch  />
      <TodoList>
      {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
