import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { ItemBox } from '../components/product/ItemBox'
import { CircularProgress, ThemeProvider } from '@mui/material'
import theme from '../theme/theme-config'
import axios from "axios";


export const Category = () => {
  const param = useParams()
  const [products , setProducts] = useState({loading:false , product:[]});
  const navigate = useNavigate();

  useEffect(()=>{
    let category = ''

    if(param.category === 'men'){
      category = "men's clothing"
    }else if(param.category === 'women'){
      category = "women's clothing"
    }else if(param.category === 'electronics'){
      category = "electronics"
    }else if(param.category === 'jewelery'){
      category = "jewelery"
    }else{
      navigate('/not-found')
    }

    (async (category)=>{

      setProducts({...products , loading:true})

      const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
  
      setProducts({loading:false , product :res.data}) ;
    })(category)

  } , [param , navigate])


  return (
    <div className='min-h-screen w-4/5 m-auto flex gap-4 flex-wrap my-8'>
      {products.loading ? <div className='w-full min-h-screen flex items-center justify-center'><ThemeProvider theme={theme}><CircularProgress color='primary'/></ThemeProvider></div> : 
      products.product.map((product)=>{return <ItemBox key={product.id} product={product}/>})}
    </div>
  )
}
