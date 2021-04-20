import React from "react";
import useSortableData from "../hook/useSortableData";

const Table = (props)=>{
    const { sortedItems, requestSort } = useSortableData(props.data);
    return (
      <table>
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th>Дата</th>
            <th  onClick={() => requestSort("name")}>Название</th>
            <th  onClick={() => requestSort("count")}>Количество</th>
            <th  onClick={() => requestSort("distance")}>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.count}</td> 
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default Table;