import "./TodoSearch.css";
import { useState } from "react";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <input
      placeholder="Correr 10 vueltas"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

export { TodoSearch };
