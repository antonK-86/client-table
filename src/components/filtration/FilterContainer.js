import React, { useState } from "react";
import Input from "../input/Input";
import "./FilterContainer.css";
import filter from "../../assets/img/filter.png";
import Dropdown from "../dropdown/Dropdown";
import Button from "../buttons/Button";

const FilterContainer = () => {
  const [showElems, setShowElems] = useState(false);

  const [showColumns, setShowColumns] = useState(false);
  const [showСondition, setShowСondition] = useState(false);

  const [selectColumn, setSelectColumn] = useState("");
  const [selectСondition, setSelectСondition] = useState("");

  const listColomns = ["Название", "Количество", "Расстояние"];
  const listСondition = ["Равно", "Содержит", "Больше", "Меньше"];

  /*показывать выпадающий список колонки и условия*/
  const handleClick = () => {
    setShowElems(!showElems);
  };

  const handleSelectedColomn = (value) => {
    setSelectColumn(value);
  };

  const handleSelectedСondition = (value) => {
    setSelectСondition(value);
  };

  const handleToShowColumns = () => {
    setShowColumns(!showColumns);
  };

  const handleToShowСondition = () => {
    setShowСondition(!showСondition);
  };

  console.log(selectColumn);
  console.log(selectСondition);

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
        {showElems ? (
          <div className="filter-container__dropdown-container">
            <Dropdown
              text="Выбор колонки"
              list={listColomns}
              handleSelected={handleSelectedColomn}
              handleToShow={handleToShowColumns}
              show={showColumns}
            />
            <Dropdown
              text="Условие"
              list={listСondition}
              handleSelected={handleSelectedСondition}
              handleToShow={handleToShowСondition}
              show={showСondition}
            />
          </div>
        ) : null}
      </div>
      <div className="filter-container__item">
        {selectColumn && (
          <div className="filter-container__item_selected">{selectColumn}</div>
        )}
        {selectСondition && (
          <div className="filter-container__item_selected">
            {selectСondition}
          </div>
        )}
        {selectColumn || selectСondition ? <div>ghjj</div> : null}
      </div>
    </div>
  );
};

export default FilterContainer;
