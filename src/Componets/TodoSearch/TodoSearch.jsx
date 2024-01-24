import "./TodoSearch.css";
const TodoSearch = () => {
  return (
    <input
      placeholder="Correr 10 vueltas"
      className="TodoSearch"
      onChange={(event) => {
        console.log("Escribiste en el todo search");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
};

export { TodoSearch };
