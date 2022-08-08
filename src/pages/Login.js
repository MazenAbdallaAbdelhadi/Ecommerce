import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { login } from '../app/userSlice'
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [error,setError] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(){
      if(username === 'mazen' && password === '123456'){
        dispatch(login())
        navigate('/')
      }else{
        setError(true)
      }
    }
  return (
    <div className='min-h-screen flex flex-col p-4 items-center'>
      {error && <Alert severity='error' onClose={() => {setError(!error)}}>Wrong Username or Password !!!!</Alert>}
        <div className='shadow-xl rounded p-4 flex flex-col justify-center gap-4 w-1/3 m-auto'>
            <h1 className='text-3xl'>Login</h1>
            <input  className='px-2 py-4 border' placeholder='username....' onChange={(e)=>setUsername(e.target.value)}/>
            <input  className='px-2 py-4 border' placeholder='password....' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className='bg-green-500 text-white px-2 py-4'>Login</button>
        </div>
    </div>
  )
}
