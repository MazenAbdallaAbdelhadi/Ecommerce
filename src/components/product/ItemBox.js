import { Rating } from '@mui/material'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../app/cartItemsSlice'
import Alert from '@mui/material/Alert';



export const ItemBox = ({product}) => {

  const [error,setError] = useState(false);
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()

  function handleClick(){
    if(user.user.hasOwnProperty('id')){
      dispatch(addItem({product:product}))
    }else{
      setError(true)
    }
  }


  return (
    <div className='relative border w-[210px] h-[310px]'>
        {error &&<div className='fixed top-10 left-0 w-full z-50'> <Alert className='w-2/3 m-auto shadow' severity='warning' onClose={() => {setError(false)}}>You should login to add to cart </Alert> </div>}
        {/* item image */}
        <img src={product.image} alt = {product.title} className='w-[210px] h-[220px]'/>

        <div className='pl-2'>
            {/* item title */}
            <Link to={`/product/${product.id}`} title={product.title} className='block text-ellipsis overflow-hidden whitespace-nowrap w-[200px] h-[25px]'>{product.title}</Link>
            <div className='flex justify-between items-center mt-2'>
              {/* item price */}
              <p className='text-green-500'>${product.price}</p>
              {/* add to chart */}
              <button onClick={handleClick} className='bg-green-500 text-white p-1   text-xl'><FaShoppingCart/></button>
            </div>
            {/* rating */}
            <Rating readOnly defaultValue={product.rating.rate} value={product.rating.rate || 0}/>
        </div>
        
    </div>
  )
}
