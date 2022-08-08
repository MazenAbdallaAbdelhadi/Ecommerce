import {useSelector} from 'react-redux'
import {BiCart} from 'react-icons/bi'
import {BsCartX} from 'react-icons/bs'
import { CartTable } from '../components/cart/CartTable';
import { Link } from 'react-router-dom';
import { Coupon } from '../components/cart/Coupon';
import { Shipping } from '../components/cart/Shipping';
import { TotalFees } from '../components/cart/TotalFees';


export const Cart = () => {
  const cart = useSelector(state=>state.cartItems)
  let total = 0;

  for(let i = 0; i < cart.length; i++){
    total += cart[i].quantity * cart[i].product.price
    total = Math.round((total + Number.EPSILON) * 100) / 100;
  }



  return (
    <div className='w-11/12 m-auto'>
          <p className='my-4 text-2xl flex gap-4 items-center'>Cart <span className='text-green-500 text-4xl'><BiCart/></span></p> 

          {cart.length ===0 ? 
          <div className='min-h-[50vh] text-center text-2xl flex flex-col items-center justify-center gap-4'>
            NO ITEMS YET <span className='text-5xl text-green-500'><BsCartX/></span> 
              <Link to='/' className=' my-4 bg-green-500 px-4 py-2 text-white'>Continue Shhopping</Link>
          </div> : 
          <div className='min-h-[50vh]'>
            <div> <CartTable cartItems={cart} /></div>
            <div className='border-b p-4 overflow-hidden'>
              <Link to='/' className='float-right bg-green-500 px-4 py-2 text-white'>Continue Shhopping</Link>
            </div>
            {/* coupons */}
            <div className='my-4 flex gap-20 justify-between'>
              <Coupon title='Use Coupon Code' desc='Enter Your Coupon Here' />
              <Coupon title='Use Gift Voucher' desc='Enter Your Gift Voucher Code Here' />
            </div>
            <div className='flex gap-20'>
              {/* shipping */}
              <Shipping />
              {/* total caculation */}
              <TotalFees subtotal={total} shipping={0} coupon= {0}/>
            </div>
            <div className='overflow-hidden'>
              <Link to='/checkout' className=' my-4 bg-green-500 px-4 py-2 text-white capitalize w-fit block float-right'>Proceed to checkout</Link>
            </div>
          </div>
          }
    </div>
  )
}
