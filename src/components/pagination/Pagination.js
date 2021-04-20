import React from "react";
import "./Pagination.css"

const Pagination=({pagesCount, changePageHandler, activePage})=>{

    const pagesList=[]
    for (let i=1;i<=pagesCount;i++) {
        pagesList.push(i)
    }

    return (
        <div className="paganation">
            <div className="pagination__container">
                {
                   pagesList.map(i=><div key={i} className={`pagination__container_item ${activePage === i ? "activePage" : ""}`}  onClick={()=>changePageHandler(i)}>{i}</div>)
                }
            </div>
        </div>
    )
}

export default Pagination;