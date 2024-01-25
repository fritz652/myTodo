import "./App.css";
import { TodoNav } from "./Componets/TodoNav/TodoNav";
import { TodoCounter } from "./Componets/TodoCounter/TodoCounter";
import { TodoSearch } from "./Componets/TodoSearch/TodoSearch";
import { TodoList } from "./Componets/TodoList/TodoList";
import { TodoItem } from "./Componets/TodoItem/TodoItem";
import { CreateTodoButton } from "./Componets/CreateTodoButton/CreateTodoButton";
import { useState } from "react";

const defaultTodos = [
  { text: "Correr 10 vueltas", completed: true },
  { text: "Ducharse", completed: false },
  { text: "Limpiar cuarto", completed: false },
  { text: "Desayuno sano", completed: false },
  { text: "Almorzar sano", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = useState("");

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <div className="cardContent">
      <TodoNav />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
