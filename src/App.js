import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from "./components/ManageInventory/ManageInventory";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/order-review" element={<OrderReview></OrderReview>}></Route>
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
