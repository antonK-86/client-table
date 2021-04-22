import React from "react";
import Button from "../buttons/Button";
import "./Dropdown.css";

const Dropdown = ({ text, list, handleSelected, show, handleToShow }) => {
  return (
    <div className="dropdown">
      <Button handleClick={handleToShow}>{text}</Button>
      <div className="dropdown__list">
        {show
          ? list.map((i) => (
              <Button
                key={i}
                handleClick={() => {
                  handleToShow();
                  return handleSelected(i);
                }}
              >
                {i}
              </Button>
            ))
          : null}
      </div>
    </div>
  );
};

export default Dropdown;
