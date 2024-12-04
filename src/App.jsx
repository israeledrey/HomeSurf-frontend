import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Shoping from "./pages/Shoping";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Board from "./Components/Board";
import { OrderProvider } from "./Components/OrderContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Payment from "./pages/Payment";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <OrderProvider>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/Shoping" element={<Shoping />} />
            <Route path="/Board/:id" element={<Board />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Courses" element={<Courses />} />
          </Routes>
        </OrderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
