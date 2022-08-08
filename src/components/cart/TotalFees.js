import React from 'react'

export const TotalFees = ({subtotal , coupon , shipping}) => {
    const total = subtotal + shipping - coupon ;
  return (
    <div className='w-2/4 my-4'>
    <strong className='block mb-2 text-lg'>Shopping cart calcuation</strong>
    <div className='border border-black '>
      <table className='w-full'>
        <tbody>
          <tr>
            <td className='p-4'>subtotal</td>
            <td className='p-4'>+${subtotal}</td>
          </tr>
          <tr>
            <td className='p-4'>shipping</td>
            <td className='p-4'>{shipping ? ("+$"+shipping) : "Free shipping"}</td>
          </tr>
          <tr>
            <td className='p-4'>coupon</td>
            <td className='p-4'>{coupon ? ("-$"+coupon) : "No coupon"}</td>
          </tr>
          <tr className='border-t border-t-black py-4'>
            <td className='p-4'>total</td>
            <td className='p-4'>${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
