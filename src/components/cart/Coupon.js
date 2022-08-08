import React from 'react'

export const Coupon = ({title , desc}) => {
  return (
    <div className='w-2/4'>
    <strong className='block mb-2 text-lg'>{title} </strong>
    <span className='text-gray-400 block mb-2'>{desc}</span>
    <input className='border px-4 py-2 w-3/4' type='text' placeholder='Enter your coupon here'/> 
    <button className='px-6 py-2 w-1/4 text-white border-green-500 border bg-green-500'>Apply</button>
  </div>
  )
}
