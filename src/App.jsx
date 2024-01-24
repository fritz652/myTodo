import "./App.css";
import { TodoNav } from "./Componets/TodoNav/TodoNav";
import { TodoCounter } from "./Componets/TodoCounter/TodoCounter";
import { TodoSearch } from "./Componets/TodoSearch/TodoSearch";
import { TodoList } from "./Componets/TodoList/TodoList";
import { TodoItem } from "./Componets/TodoItem/TodoItem";
import { CreateTodoButton } from "./Componets/CreateTodoButton/CreateTodoButton";

const defaultTodos = [
  { text: "Correr 10 vueltas", completed: true },
  { text: "Ducharse", completed: false },
  { text: "Limpiar cuarto", completed: false },
  { text: "Desayuno sano", completed: false },
  { text: "Almorzar sano", completed: false },
];

function App() {
  return (
    <div className="cardContent">
      <TodoNav />
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
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
