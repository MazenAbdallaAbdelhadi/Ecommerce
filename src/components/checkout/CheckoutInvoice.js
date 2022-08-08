import React from 'react'
import { useSelector } from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const CheckoutInvoice = () => {
    const cart = useSelector(state=>state.cartItems)
    let subtotal = 0;
    let shipping = 0;

    for(let i = 0; i < cart.length; i++){
        subtotal += cart[i].quantity * cart[i].product.price
        subtotal = Math.round((subtotal + Number.EPSILON) * 100) / 100;
    }

  return (
    <div className='w-2/5 border border-black'>
        <strong className='capitalize w-11/12 m-auto py-4 text-lg block'>Your Order</strong>
        <table className='w-11/12 m-auto'>
            <tbody>
                <tr className='border-b'>
                    <td className='pb-4 px-1'>Prodact</td>
                    <td className='pb-4 px-1'>Total</td>
                </tr>
                {cart.map(item=>{return(
                    <tr>
                        <td className='w-4/5 border p-1'>{item.product.title+ " X " + item.quantity}</td>
                        <td className='w-1/5 border p-1'>${item.product.price *  item.quantity}</td>
                    </tr>
                )})}
                <tr>
                    <td className='p-1'>subtotal</td>
                    <td className='p-1'>${subtotal}</td>
                </tr>
                <tr>
                    <td className='p-1'>shipping</td>
                    <td className='p-1'>{shipping || "free shipping"}</td>
                </tr>
                <tr className='border-t'>
                    <td className='px-1 py-6 font-bold text-xl'>Total</td>
                    <td className='px-1 py-6 font-bold text-xl'>${subtotal+shipping}</td>
                </tr>
            </tbody>
        </table>
        {/* payment options */}
        <div className='w-11/12 m-auto my-4'>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Payment Method</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Direct Bank Transfer" />
                    <FormControlLabel value="male" control={<Radio />} label="Cheque Payment" />
                    <FormControlLabel value="other" control={<Radio />} label="PayPal" />
                </RadioGroup>
            </FormControl>
        </div>
    </div>
  )
}
