import React, { useState } from "react";
import Input from "../input/Input";
import "./FilterContainer.css";
import filter from "../../assets/img/filter.png";
import cancel from "../../assets/img/cancel.png";
import search from "../../assets/img/search.png";
import Dropdown from "../dropdown/Dropdown";
import Button from "../buttons/Button";

const FilterContainer = ({selectColumn, selectСondition, selectedCol, selectedСond, getValueFilter, valueFilter, filtrate}) => {
  

  const [showElems, setShowElems] = useState(false);

  const [showColumns, setShowColumns] = useState(false);
  const [showСondition, setShowСondition] = useState(false);

  const listColomns = ["Название", "Количество", "Расстояние"];
  const listСondition = ["Равно", "Содержит", "Больше", "Меньше"];

  /*показывать выпадающий список колонки и условия*/
  const handleClick = () => {
    setShowElems(!showElems);
    setShowColumns(false);
    setShowСondition(false);
  };

  /*выбранные колонки и условие*/
  const handleSelectedColomn = (value) => {
    selectedCol(value);
  };

  const handleSelectedСondition = (value) => {
    selectedСond(value);
  };

  /*раскрывающийся список*/
  const handleToShowColumns = () => {
    setShowColumns(!showColumns);
  };

  const handleToShowСondition = () => {
    setShowСondition(!showСondition);
  };

  /*Сброс фильтра */
  const handleClickReset=()=>{
    setShowElems(false);
    selectedCol("");
    selectedСond("");
    getValueFilter("");
    filtrate(false);
  }

  const handleChange=(e)=>{
    getValueFilter(e.target.value)
  }

  const handleClickFilter=()=>{
    filtrate(true);
  }

  return (
    <div className="filter-container">
      <div className="filter-container__item">
        <span>Фильтр</span>
        <Input id="inputFilter" className="filter-input" onChange={handleChange} value={valueFilter}/>
        <Button  widthInStyle="w42" handleClick={handleClickFilter}><img src={search} alt="search" width="20" heigth="20"/></Button>
      </div>
      <div className="filter-container__item flex-center">
        {selectColumn && (
          <div className="filter-container__item_selected"><span>{selectColumn}</span></div>
        )}
        {selectСondition && (
          <div className="filter-container__item_selected">
            <span>{selectСondition}</span>
          </div>
        )} 
        {selectColumn || selectСondition || valueFilter ? <div className="filter-container__item_clear"><Button  widthInStyle="w42" handleClick={handleClickReset}><img src={cancel} alt="close" width="10" heigth="10"/></Button></div> : null}
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
    </div>
  );
};

export default FilterContainer;
