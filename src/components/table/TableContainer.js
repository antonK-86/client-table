import React from "react";
import useSortableData from "../hook/useSortableData";
import Table from "./Table";

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
    }
]

const TableContainer = ()=>{
    const { sortedItems, requestSort } = useSortableData(data);
    return (
        <div>
            <Table title="Таблица данных Welbex" sortedItems={sortedItems} requestSort={requestSort}/>
        </div>
    )
}

export default TableContainer;