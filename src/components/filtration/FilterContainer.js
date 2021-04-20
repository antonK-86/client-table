import React, { useState } from "react";
import Input from "../input/Input";
import "./FilterContainer.css"
import Button from 'react-bootstrap/Button'
import filter from "../../assets/img/filter.png"

const FilterContainer =()=>{
    return (
        <div className="filter-container">
            <div className="filter-container__item">
                <span>Фильтр</span>
                <Input id="inputFilter" className="filter-input"/>
            </div>
            <div className="filter-container__item">
                <div className="filter-container__item_btn"><Button variant="light" size='sm'><img src={filter} alt="filter"/></Button></div>
            </div>
        </div>
    )
}

export default FilterContainer;