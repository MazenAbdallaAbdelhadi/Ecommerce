import React from 'react'
import { CartRow } from './CartRow'

export const CartTable = ({cartItems}) => {
  return (
    <table className='w-full my-10 border-separate'>
        <tbody>
            <tr>
                <th className='border'>#img</th>
                <th className='border'>#name</th>
                <th className='border'>#Quantity</th>
                <th className='border'>#price</th>
                <th className='border'>#total</th>
                <th className='border'>#remove</th>
            </tr>
            {cartItems.map(item =>{
                return <CartRow key={item.product.id} item={item}/>
            })}
        </tbody>
    </table>
  )
}
