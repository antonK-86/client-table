import React, { useState } from "react";
import FilterContainer from "../filtration/FilterContainer";
import Pagination from "../pagination/Pagination";
import TableContent from "./TableContent";

const filteredTable = (arr, value, column, condition) => {
  const nameCol = {
    Название: "name",
    Количество: "count",
    Расстояние: "distance",
  };

  let filteredData = [];

  if (condition === "Равно") {
    arr.forEach((i) => {
      for (let k in i) {
        if (nameCol[column] === k) {
          filteredData = arr.filter(
            (item) =>
              item[k].toString().toLowerCase() ===
              value.toString().toLowerCase()
          );
        }
      }
    });
    return filteredData;
  }

  if (condition === "Содержит" && column === "Название") {
    arr.forEach((i) => {
      for (let k in i) {
        if (
          nameCol[column] === k &&
          i[k].toLowerCase().indexOf(value.toLowerCase()) !== -1
        ) {
          filteredData.push(i);
        }
      }
    });
    return filteredData;
  }

  if (
    condition === "Больше" &&
    (column === "Количество" || column === "Расстояние")
  ) {
    arr.forEach((i) => {
      for (let k in i) {
        if (nameCol[column] === k) {
          filteredData = arr.filter((item) => item[k] > value);
        }
      }
    });
    return filteredData;
  }

  if (
    condition === "Меньше" &&
    (column === "Количество" || column === "Расстояние")
  ) {
    arr.forEach((i) => {
      for (let k in i) {
        if (nameCol[column] === k) {
          filteredData = arr.filter((item) => item[k] < value);
        }
      }
    });
    return filteredData;
  }
  return arr;
};

const TableContainer = ({ data }) => {
  const [activePage, setActivePage] = useState(1); //номер активной страницы

  /* для фильтрации получаем колонки условия и текст*/
  const [selectColumn, setSelectColumn] = useState("");
  const [selectСondition, setSelectСondition] = useState("");
  const [valueFilter, setValueFilter] = useState("");
  const [isFiltration, setIsFiltration] = useState(false);

  let dataTable = [];
  if (!isFiltration) {
    dataTable = data;
  } else
    dataTable = filteredTable(data, valueFilter, selectColumn, selectСondition);

  const allItemsCount = dataTable.length; //общее кол-во элементов
  const onPageItemsCount = 3; //кол-во элементов на странице
  const pagesCount = Math.ceil(allItemsCount / onPageItemsCount); //общее кол-во страниц
  const start = activePage - 1;

  const dataElements = dataTable.filter((item, index) => {
    if (
      index < onPageItemsCount * activePage &&
      index >= onPageItemsCount * start
    )
      return item;
    return null;
  }); //список выводимых элементов

  /*выбранные колонки и условие*/
  const handleSelectedColomn = (value) => {
    setSelectColumn(value);
  };

  const handleSelectedСondition = (value) => {
    setSelectСondition(value);
  };

  const setTextFiltration = (value) => {
    setValueFilter(value);
  };

  const filtrate = (value) => {
    if (valueFilter) setIsFiltration(value);
  };

  const changePageHandler = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container">
      <TableContent
        title="Таблица данных Welbex"
        data={dataElements}
        changePageHandler={changePageHandler}
      />
      <FilterContainer
        selectColumn={selectColumn}
        selectСondition={selectСondition}
        selectedCol={handleSelectedColomn}
        selectedСond={handleSelectedСondition}
        getValueFilter={setTextFiltration}
        valueFilter={valueFilter}
        filtrate={filtrate}
      />
      <Pagination
        pagesCount={pagesCount}
        changePageHandler={changePageHandler}
        activePage={activePage}
      />
    </div>
  );
};

export default TableContainer;
