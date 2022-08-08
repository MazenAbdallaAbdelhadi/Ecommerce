import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { CircularProgress, ThemeProvider , Rating} from '@mui/material'
import theme from '../theme/theme-config'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../app/cartItemsSlice'
import { SwiperContainer } from '../components/product/SwiperContainer';
import Alert from '@mui/material/Alert';


export const Product = () => {
  const param = useParams()
  const [product , setProduct] = useState({})
  const [similarProducts , setSimilarProducts] = useState([])

  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)

  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()

  useEffect(()=>{

    (async (id)=>{
      try{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)  
        setProduct(res.data)
        const productsRes = await axios.get(`https://fakestoreapi.com/products/category/${res.data.category}`)  
        let data = productsRes.data.filter(e=> {return e.id!== Number(param.id)})
        setSimilarProducts(data)
        setLoading(false)

      }catch(err){

        console.log(err)
        setError(true)
        setLoading(false)
      }

    })(param.id)

  } , [param.id])


  function handleClick(){
    if(user.user.hasOwnProperty('id')){
      dispatch(addItem({product:product}))
    }else{
      setError(true)
    }
  }

  return (
    <div>
      {error &&<div className='fixed top-10 left-0 w-full z-50'> <Alert className='w-2/3 m-auto shadow' severity='warning' onClose={() => {setError(false)}}>You should login to add to cart </Alert> </div>}
      {loading ? <div className='w-full min-h-screen flex items-center justify-center'><ThemeProvider theme={theme}><CircularProgress color='primary'/></ThemeProvider></div> :
      <div>
        <div className='flex gap-4 p-4 w-11/12 m-auto'>
          <div className='w-1/3'>
            <img className='w-full h-[400px] border' src={product.image} alt="product"/>
          </div>
          <div className='w-8/12 flex flex-col justify-between h-[400px]'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl'>{product.title}</h1>
              <div className='flex gap-4 items-center'>
                <p className='text-green-500 text-2xl'>${product.price}</p>
                <Rating readOnly defaultValue={product.rating.rate} value={product.rating.rate || 0} />
              </div>
            </div>
            <p>{product.description}</p>
            <button onClick={handleClick} className='bg-green-500 text-white p-2  flex gap-2 items-center w-fit self-end'><FaShoppingCart/> Add To Cart</button>
          </div>
        </div>
        <div className='w-11/12 mx-auto my-10'>
          <h2 className='text-2xl mb-4'>Similar products that you may like :</h2>
          <SwiperContainer itemsArray = {similarProducts}/>
        </div>
      </div>
      }
      </div>
  )
}
