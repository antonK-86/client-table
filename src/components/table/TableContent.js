import React from "react";
import Table from 'react-bootstrap/Table'
import useSortableData from "../hook/useSortableData";

const TableContent = (props)=>{
    const { sortedItems, requestSort } = useSortableData(props.data);
    return (
      <Table striped bordered hover size="sm">
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th>Дата</th>
            <th className="pointer" onClick={() => requestSort("name")}>Название</th>
            <th className="pointer" onClick={() => requestSort("count")}>Количество</th>
            <th className="pointer" onClick={() => requestSort("distance")}>Расстояние</th>
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
      </Table>
    )
}

export default TableContent;