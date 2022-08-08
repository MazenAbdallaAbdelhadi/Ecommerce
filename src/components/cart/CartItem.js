import React from 'react'
import {BiX, BiPlus,BiMinus} from 'react-icons/bi'
import { useDispatch} from 'react-redux'
import { removeItem , increaseQuantity , decreaseQuantity} from '../../app/cartItemsSlice'

export const CartItem = ({item}) => {
    const dispatch = useDispatch()

    function handleRemove(id){
        dispatch(removeItem(id))
    }

    function handleIncrease(id){
        dispatch(increaseQuantity(id))
    }

    function handleDecrease(id){
        dispatch(decreaseQuantity(id))
    }

  return (
    <div className = 'flex gap-4 px-4 py-2 mb-4 bg-green-200 justify-between'>
                <img src={item.product.image} alt="product" className='w-10 h-10 rounded-full' />
                <div>
                  <span className='block text-ellipsis overflow-hidden whitespace-nowrap w-[130px] h-[25px]'>{item.product.title}</span>
                  <div className='flex gap-4'>
                    <button onClick={()=> handleDecrease(item.product.id)} className='text-xl '><BiMinus/></button> <span className='text-xl p-1'>{item.quantity}</span> <button onClick={()=> handleIncrease(item.product.id)} className='text-xl '><BiPlus/></button>
                  </div>
                </div>
                <button onClick={()=>handleRemove(item.product.id)}><BiX/></button>
    </div>
  )
}
