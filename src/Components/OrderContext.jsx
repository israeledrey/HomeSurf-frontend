import React, { createContext, useState, useContext } from 'react';

// יצירת ה-Context
export const OrderContext = createContext();

// Context ספק ה
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertById, setAlertById] = useState(null);
 

 
  const addOrder = (item) => {
    const findBoard = orders.find(order => order.id === item.id);
    if(!findBoard){ 
      setOrders((orders) => [...orders,{...item, amount: 1, unitPrice: item.price}]);
    } else{

      setOrders((orders) => orders.map(order => order.id === item.id ? {...order, amount: order.amount+1}: order))
      setOrders((orders) => orders.map(order => order.id ===item.id ? {...order, price: +(item.price) + +(order.price)}: order))
    }

    setAlertById(item.id)
    setShowAlert(true);  
    setTimeout(() => {
      setShowAlert(false); 
      setAlertById(null)
    }, 800);
   
  
  };

  const removeOrder = (id) => {
    setOrders((orders) => orders.filter((order) => id !== order.id));
  }
 
  const plus = (id) => {
    setOrders(orders.map(order=>id === order.id ? {...order, amount: order.amount + 1, price: +(order.price) + +(order.unitPrice)} : order))
  }

  const minus = (id) => {
    setOrders(orders.map(order=>id === order.id && order.amount > 1 ? {...order, amount: order.amount - 1, price: +(order.price) - +(order.unitPrice)} : order))
  }


  return (
    <OrderContext.Provider value={{ orders, showAlert, alertById, addOrder, removeOrder, plus, minus }}>
      {children}
    </OrderContext.Provider>
  );
};

// Hook לקבלת Context
export const useOrderContext = () => {
  const ordersList = useContext(OrderContext);
  return ordersList
};
