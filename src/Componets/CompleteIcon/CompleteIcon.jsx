import { TbCheckbox } from "react-icons/tb";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const CompleteIcon = ({ done, onClick }) => {
  const iconSelected = done ? (
    <TbCheckbox className="box-icon" />
  ) : (
    <MdOutlineCheckBoxOutlineBlank className="box-icon" />
  );
  return (
    <span
      className={done ? "span-icon-done" : "span-icon-uncompleted"}
      onClick={onClick}
    >
      {iconSelected}
    </span>
  );
};

export { CompleteIcon };
