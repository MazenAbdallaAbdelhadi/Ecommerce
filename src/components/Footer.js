import React from 'react'
import {FaTwitter , FaFacebookF,FaInstagram , FaBehance  , FaGlobeAfrica , FaPhone , FaRegEnvelope} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      {/* social */}
      <div className='w-11/12 m-auto py-4 flex justify-between'>
        <p>We're confident we've provided all the best for you. Stay connect with us</p>
        <ul className='flex gap-4 items-center'>
          <li><FaFacebookF/></li>
          <li><FaTwitter/></li>
          <li><FaInstagram/></li>
          <li><FaBehance/></li>
        </ul>
      </div>

      {/* footer links */}
      <div className='border'>
        <div className='w-11/12 m-auto flex justify-between'>
          <div>
            <strong className='uppercase text-lg my-4 block'>Information</strong>
            <ul className='mb-6'>
              <li>Delivery Information</li>
              <li>Discount</li>
              <li>Sitemap</li>
              <li>Privacy Policy</li>
              <li>My Account</li>
            </ul>
          </div>
          <div>
            <strong className='uppercase text-lg my-4 block'>My account</strong>
            <ul className='mb-6'>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Check out</li>
              <li>Track My Order</li>
            </ul>
          </div>
          <div>
            <strong className='uppercase text-lg my-4 block'>Help</strong>
            <ul className='mb-6'>
              <li>F.A.Q.</li>
              <li>Shipping</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <strong className='uppercase text-lg my-4 block'>Contact info</strong>
            <ul className='mb-6'>
              <li className='flex items-center gap-1'><FaGlobeAfrica/> 1234 Your Address, Country</li>
              <li className='flex items-center gap-1'><FaPhone/> +1 234 5678 9999</li>
              <li className='text-green-500 flex items-center gap-1'><FaRegEnvelope/> mail@do</li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* copy right */}
      <div className='bg-black text-gray-400  py-2'>
        <p className='w-11/12 m-auto'>
        Copy right 2022 RenoshopBee all right reserved
        </p>
      </div>
    </footer>
  )
}
