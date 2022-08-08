import React from 'react'
import { useDispatch} from 'react-redux'
import { removeItem , increaseQuantity , decreaseQuantity} from '../../app/cartItemsSlice'
import {BiX, BiPlus,BiMinus} from 'react-icons/bi'



export const CartRow = ({item}) => {
    let total = item.product.price * item.quantity
    total = Math.round((total + Number.EPSILON) * 100) / 100;

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
    <tr className='border p-4'>
        <td className='border'> <div className='flex justify-center'> <img className='w-16 h-20' src={item.product.image} alt='product'/></div> </td>
        <td className='border p-2'> {item.product.title}</td>
        <td className='border p-2'>
            <div className='flex justify-between items-center'>
                <button onClick={()=> handleDecrease(item.product.id)} className='text-xl '><BiMinus/></button> 
                <span className='text-xl'>{item.quantity}</span>
                <button onClick={()=> handleIncrease(item.product.id)} className='text-xl '><BiPlus/></button>
            </div>
        </td>
        <td className='border text-center'>{item.product.price}</td>
        <td className='border text-center'>{total}</td>
        <td className='border text-center'><button onClick={()=>handleRemove(item.product.id)}><BiX/></button></td>
    </tr>
  )
}
