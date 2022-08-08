import React from 'react';
import { Route , Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import { CheckOut } from './pages/CheckOut';
import {Category} from './pages/Category';
import { Product } from './pages/Product';
import { Login } from './pages/Login';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route exact path='/categories/:category' element ={<Category/>}/>
        <Route exact path='/product/:id' element ={<Product/>}/>
        <Route exact path='/cart' element ={<Cart/>}/>
        <Route exact path='/checkout' element ={<CheckOut/>}/>
        <Route exact path='/login' element ={<Login/>}/>
        <Route exact path='/*' element ={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
