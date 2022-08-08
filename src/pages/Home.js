import React, { useEffect, useState } from 'react'
import { ItemBox } from '../components/product/ItemBox'
import { CircularProgress, ThemeProvider } from '@mui/material'
import theme from '../theme/theme-config'
import axios from 'axios'



export const Home = () => {
  const [products , setProducts] = useState({loading:false , product:[]});
  
  useEffect(()=>{
    (async ()=>{

      setProducts({...products , loading:true})

      const res = await axios.get(`https://fakestoreapi.com/products`)
  
      setProducts({loading:false , product :res.data}) ;
    })()
  } , [])

  return (
    <div className='min-h-screen w-4/5 m-auto flex gap-4 flex-wrap justify-between my-8'>
    {products.loading ? <div className='w-full min-h-screen flex items-center justify-center'><ThemeProvider theme={theme}><CircularProgress color='primary'/></ThemeProvider></div> : 
    products.product.map((product)=>{return <ItemBox key={product.id} product={product}/>})}
  </div>
  )
}
