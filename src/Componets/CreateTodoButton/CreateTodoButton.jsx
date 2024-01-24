import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("diste click");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
