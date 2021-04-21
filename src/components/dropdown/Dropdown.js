import React, {useState } from "react";
import Button from "../buttons/Button";
import "./Dropdown.css";

const Dropdown = ({ text, list, handleSelected }) => {
  const [showElems, setShowElems] = useState(false);

  const handleClick = () => {
    setShowElems(!showElems);
  };

 return (
    <div className="dropdown">
      <Button handleClick={handleClick}>{text}</Button>  
      <div className="dropdown__list">{showElems
        ? list.map((i) => <Button handleClick={()=>handleSelected(i)}>{i}</Button> )
        : null}</div>
    </div>
  );
};

export default Dropdown;
