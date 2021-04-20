import React, { useState } from "react";
import Pagination from "../pagination/Pagination";
import TableContent from "./TableContent";

const data = [
    {
        id:23434,
        date:'22/01/2021',
        name:'Первый',
        count:20,
        distance:100,
    },
    {
        id:23235,
        date:'02/05/2021',
        name:'Второй',
        count:5,
        distance:54
    },
    {
        id:65898,
        date:"09/02/2021",
        name:'Третий',
        count:32,
        distance:1300
    },
    {
        id:45434,
        date:'14/12/2020',
        name:'Четвертый',
        count:17,
        distance:230
    },
    {
        id:35298,
        date:'10/03/2021',
        name:'Пятый',
        count:23,
        distance:150
    },
    {
        id:45785,
        date:'04/04/2021',
        name:'Шестой',
        count:54,
        distance:500
    },
    {
        id:12987,
        date:'13/11/2020',
        name:'Седьмой',
        count:30,
        distance:80
    },
    {
        id:45434,
        date:'14/12/2020',
        name:'Восьмой',
        count:17,
        distance:230
    },
    {
        id:84752,
        date:'21/02/2021',
        name:'Девятый',
        count:20,
        distance:210
    },
    {
        id:36985,
        date:'25/03/2021',
        name:'Десятый',
        count:62,
        distance:900
    },
]

const TableContainer = ()=>{
    const [activePage,setActivePage] = useState(1) //номер активной страницы
  
    const allItemsCount = data.length; //общее кол-во элементов
    const onPageItemsCount = 3; //кол-во элементов на странице
    const pagesCount = Math.ceil(allItemsCount/onPageItemsCount) //общее кол-во страниц
    const start = activePage - 1

    const dataElements = data.filter((item,index)=>{
        if(index < onPageItemsCount*activePage && index>=onPageItemsCount*start) return item
        return null
      }) //список выводимых элементов
  
    const changePageHandler = (page)=>{
      setActivePage(page);
    }
    return (
        <div className="container">
            <TableContent title="Таблица данных Welbex" data={dataElements} changePageHandler={changePageHandler}/>
            <Pagination pagesCount={pagesCount} changePageHandler={changePageHandler} activePage={activePage}/>
        </div>
    )
}

export default TableContainer;