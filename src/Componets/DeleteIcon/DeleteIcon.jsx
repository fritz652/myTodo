import { TiDeleteOutline } from "react-icons/ti";

const DeleteIcon = ({ onClick }) => {
  return (
    <span className="span-icon-close">
      <TiDeleteOutline className="deleteIcon" />
    </span>
  );
};

export { DeleteIcon };
