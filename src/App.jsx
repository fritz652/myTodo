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
  const totalTodos = todos.filter((todo) => todo).length;

  const [searchValue, setSearchValue] = useState("");
  console.log("Los usuarios buscan todo de " + searchValue);

  return (
    <div className="cardContent">
      <TodoNav />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
