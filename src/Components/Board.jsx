import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { OrderContext } from "../Components/OrderContext";
import axios from "axios";
import NavBar from "./NavBar";

const Board = () => {
  const { id } = useParams();
  const { addOrder, showAlert, alertById } = useContext(OrderContext);
  const [boardData, setBoardData] = useState(null);

  const getBoardData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/boards/boards/${id}`);
      setBoardData(response.data.board);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  useEffect(() => {
    getBoardData();
  }, [id]);

  if (!boardData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="board-params">
        <img src={boardData.image} alt={boardData.brand} />
        <h1>{boardData.brand}</h1>
        <p>{boardData.model}</p>
        <p>{boardData.type}</p>
        <p>{boardData.price}$</p>
        <button onClick={() => addOrder(boardData)}>Add Product</button>
        {showAlert && alertById === boardData.id && (
          <div className="order-alert">Order Added</div>
        )}
      </div>
    </div>
  );
};

export default Board;