import React, { useEffect, useState } from "react";
import { renderData } from "./renderdata";
import "./style.css"


  function PaginationComponent() {
    const [data, setData] = useState([]);
    const[searchValue,setSearchValue]=useState()
  const [filterData, setFilterData] = useState([])
  
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);
  
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
    const handleClick = (event) => {
      setcurrentPage(Number(event.target.id));
    };
  
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pages.push(i);
    }
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            style={{border:"1px" }}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
  
    const handleNextbtn = () => {
      setcurrentPage(currentPage + 1);  
  
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };
  
    const handlePrevbtn = () => {
      setcurrentPage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> </li>;
    }
  
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}>  </li>;
    }
    const handleChange=(e)=>{
      setSearchValue(e.target.value);
      if(e.target.value == ''){
        setFilterData(data)
      }
    }
    const handleClickSearch=(e)=>{
      setSearchValue(e.target.value)
      if (searchValue !== "") {
        const result = filterUser();
        console.log(result)
        setFilterData(result);
      }
     
  
    }

    const filterUser = ()=>{
      const result= data.filter((item)=>{
        const title = item.title.toLowerCase().includes(searchValue.toLowerCase())
        return title
      })
      return result
    }
    return (
      <>
        <h1>Post</h1> <br />
        <input type="search" onChange={handleChange}  />
        <button onClick={handleClickSearch}>search</button>
        {renderData(filterData)}
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevbtn}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
           {renderPageNumbers}
          {pageIncrementBtn}
  
          <li>
            <button
              onClick={handleNextbtn}
            >
              Next
            </button>
          </li>
        </ul>
      
      </>
    );
  }
  
  export default PaginationComponent;