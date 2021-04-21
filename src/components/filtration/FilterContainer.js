import React, { useState } from "react";
import Input from "../input/Input";
import "./FilterContainer.css";
import filter from "../../assets/img/filter.png";
import Dropdown from "../dropdown/Dropdown";
import Button from "../buttons/Button";

const FilterContainer = () => {
  const [showElems, setShowElems] = useState(false);

  const [selectColumn, setSelectColumn] = useState("");
  const [selectСondition, setSelectСondition] = useState("");
  
  const listColomns = ["Название", "Количество", "Расстояние"];
  const listСondition = ["Равно", "Содержит", "Больше", "Меньше"];

  const handleClick = () => {
    setShowElems(!showElems);
  };

  const handleSelectedColomn = (value) => {
    setSelectColumn(value);
  };

  const handleSelectedСondition = (value) => {
    setSelectСondition(value);
  };

  return (
    <div className="filter-container">
      <div className="filter-container__item">
        <span>Фильтр</span>
        <Input id="inputFilter" className="filter-input" />
      </div>
      <div className="filter-container__item dropdown-block">
        <Button widthInStyle="w42" handleClick={handleClick}>
          <img src={filter} alt="filter" />
        </Button>
        {showElems ? <div className="filter-container__dropdown-container">
          <Dropdown text="Выбор колонки" list={listColomns} handleSelected={handleSelectedColomn}/>
          <Dropdown text="Условие" list={listСondition} handleSelected={handleSelectedСondition}/>
        </div> : null}

      </div>
    </div>
  );
};

export default FilterContainer;
