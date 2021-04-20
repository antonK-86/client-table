import { useMemo, useState } from "react";

const useSortableData = (items, config = null)=>{
    const [sortConfig, setSortConfig] = useState(config);// хук для сортировки
    
    const sortedItems = useMemo(()=>{
        const sortedCol = [...items] //копия с данными
        
        // определяем правила сортировки
        if (sortConfig !== null) {
          sortedCol.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === "descending" ? -1 : 1;
            }
            return 0;
          });
        }
        return sortedCol;
      },[items,sortConfig])
    
    //ф-ия добавляет в state данные key и direction (имя поля и направления сортировки) 
    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    }

    return {sortedItems, requestSort}
}

export default useSortableData;