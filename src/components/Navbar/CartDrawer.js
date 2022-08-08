import React, { useState } from 'react'
import {BiCart , BiX} from 'react-icons/bi'
import Badge from '@mui/material/Badge';
import { Drawer } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme/theme-config';
import { useSelector } from 'react-redux';
import { CartItem } from '../cart/CartItem';
import { Link } from 'react-router-dom';


export const CartDrawer = () => {
  const cart = useSelector(state=>state.cartItems)
  const [anchor , setAnchor] = useState(false)
  let quantity = 0;

  let total = 0;

  for(let i = 0; i < cart.length; i++){
    total += cart[i].quantity * cart[i].product.price
    total = Math.round((total + Number.EPSILON) * 100) / 100;
  }

  for(let i =0; i< cart.length; i++){
    quantity += cart[i].quantity
  }

  const toggleDrawer = () => {
    setAnchor(!anchor);
  };
  
  return (
    <div>
        <div onClick={toggleDrawer} className='hover:text-green-500 text-2xl cursor-pointer'>
        <ThemeProvider theme={theme} >
          <Badge badgeContent={quantity} color="primary">
              <BiCart/>
          </Badge>
        </ThemeProvider>
        </div>
        <Drawer open = {anchor} anchor='right' onClose={toggleDrawer}> 
          <div className='w-[270px] h-screen flex flex-col justify-between'>
            <div className='flex justify-between items-center p-4'>
              <p className='text-2xl flex gap-4 items-center'>Cart <span className='text-green-500 text-4xl'><BiCart/></span></p> 
              <button className='text-2xl' onClick={toggleDrawer}><BiX/></button>
            </div>
            {/* cart items */}
            <div className='h-[75vh] overflow-y-scroll overflow-x-hidden'>
              {cart.length > 0 ? cart.map((item , index)=>{return <CartItem key={index} item={item}/>}) :
              <div className='p-4 text-green-500 capitalize text-center'> there is no items in the cart yet </div>}
            </div>
            {/* total */}
            <div className='justify-self-end'>
              <span className='text-green-700 capitalize text-center block p-4 bg-green-200'>total : {total}$</span>
              <Link className='text-green-700 block text-center p-4 hover:bg-green-500 hover:text-white' onClick={toggleDrawer} to='/cart'>Go to Cart</Link>
            </div>
          </div>
        </Drawer>
    </div>
  )
}
