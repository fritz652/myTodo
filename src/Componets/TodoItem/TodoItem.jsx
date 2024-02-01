import { CompleteIcon } from "../CompleteIcon/CompleteIcon";
import { DeleteIcon } from "../DeleteIcon/DeleteIcon";
import "./TodoItem.css";
const TodoItem = ({ text, done, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <CompleteIcon done={done} onClick={onComplete} />
      {/*     <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
        V
      </span> */}
      {/* <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p> */}
      <p className={done ? "todoItem-p--completed" : ""}>{text}</p>
      <DeleteIcon onClick={onDelete} />
      {/*       <span className="Icon Icon-delete" onClick={props.onDelete}>
        x
      </span> */}
    </li>
  );
};

export { TodoItem };
