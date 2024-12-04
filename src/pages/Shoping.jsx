import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOrderContext } from "../Components/OrderContext";
import axios from "axios";
import NavBar from "../Components/NavBar";

const Shoping = () => {
  const [boardsData, setBoardsData] = useState([]);
  const { addOrder, showAlert, alertById } = useOrderContext();
  const [searchInput, setSearchInput] = useState ("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/boards/boards");
      setBoardsData(response.data.dataBase);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const InputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handelsearchBoard = async (searchInput) =>{
    try { 
      if (!searchInput) {
        getData(); 
        return;
      } else {
        const response = await axios.post(`http://localhost:3000/api/boards/searchBoard`, { inputValue: searchInput } );        
      setBoardsData(response.data.dataBase);
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }


  useEffect(() => {
    handelsearchBoard(searchInput);
  }, [searchInput]);


  return (
    <div className="shoping-container">
       <NavBar />
      <div className='search-container'>
        <button className="search-button" >
          <i className="fas fa-search"></i>
        </button>
        <input className="search-input" type='text' placeholder='search' value={searchInput} onChange={InputChange}/>
      </div>
      <div className="shoping">
        {boardsData.map((item) => (
          <div key={item.id} className="board-params">
            <Link to={`/Board/${item.id}`}>
              <img src={item.image} alt={item.brand} />
            </Link>
            <h1>{item.brand}</h1>
            <p>{item.model}</p>
            <p>{item.type}</p>
            <p>{item.price}$</p>
            <button onClick={() => addOrder(item)}>Add Product</button>
            {showAlert && alertById === item.id && (
              <div className="order-alert">Order Added</div>
            )}
          </div>
        ))}
      </div>
    </div>

  );
};

export default Shoping;