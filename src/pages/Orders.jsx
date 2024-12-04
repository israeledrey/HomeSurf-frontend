import React from 'react'
import { useOrderContext } from '../Components/OrderContext'
import { Navigate, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';



const Orders = () => {
  const { orders, plus, minus, removeOrder } = useOrderContext();
  const Navigate = useNavigate();

  const payment = () => {
    Navigate("/Payment")
  }

  return (
    <div className='orders-container'>
      <NavBar />
      <h1>Your orders</h1>
      <div className='orders-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={order.image} alt={order.model} />
            <div className='order-data'>
            <h2>{order.brand}</h2>
            <p>amount: {order.amount}</p>
            <p>{order.price}$</p>
            </div>
            <div className='button-container'>
              <button className='plus-button'  onClick={() => plus(order.id)}> + </button>
              <button className='plus-button'  onClick={() => minus(order.id)}> - </button>
              <button className='delete-button' onClick={()=>removeOrder(order.id)}> Delete </button>
            </div>
          </div>
          
        ))}
        {
          orders.length != 0  && <button className='payment-button' onClick={payment}>Payment</button>
        }
      </div>
    </div>
  )
}

export default Orders