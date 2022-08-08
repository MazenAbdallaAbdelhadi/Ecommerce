import { CheckoutForm } from "../components/checkout/CheckoutForm"
import { CheckoutInvoice } from "../components/checkout/CheckoutInvoice"

export const CheckOut = () => {

  return (
    <div className="w-11/12 mx-auto my-4">
      <strong className="text-lg capitalize my-4 block">Billing Detailes</strong>
      <div className="flex justify-between">
        <CheckoutForm/>
        <CheckoutInvoice/>
      </div>
      <div className='overflow-hidden'>
              <button className=' my-4 bg-green-500 px-4 py-2 text-white capitalize w-fit block float-right'>Place Order</button>
      </div>
    </div>
  )
}
