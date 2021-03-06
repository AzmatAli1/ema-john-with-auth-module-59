import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Header from './components/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';

import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path ='/home' element={<Home></Home>}></Route>
        <Route path ='/shop' element={<Shop></Shop>}></Route>
        <Route path ='/orders' element ={<Orders></Orders>}></Route>
        <Route path ='/inventory' element ={<Inventory></Inventory>}></Route>
        <Route path ='/about' element ={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      
      {/* <Shop></Shop> */}

    </div>
  );
}

export default App;
