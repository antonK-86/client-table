import React from "react";

const Table = (props)=>{
    return (
      <table>
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th>Дата</th>
            <th  onClick={() => props.requestSort("name")}>Название</th>
            <th  onClick={() => props.requestSort("count")}>Количество</th>
            <th  onClick={() => props.requestSort("distance")}>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {props.sortedItems.map((item) => (
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