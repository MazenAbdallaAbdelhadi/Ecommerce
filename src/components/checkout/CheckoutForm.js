import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { CircularProgress, ThemeProvider } from '@mui/material'
import theme from '../../theme/theme-config'

export const CheckoutForm = () => {

    const user = useSelector(state=>state.user);

    return (
    <div className='w-2/4 flex flex-col gap-4'>
        {!user.user.id ? <div className='w-full min-h-screen flex items-center justify-center'><ThemeProvider theme={theme}><CircularProgress color='primary'/></ThemeProvider></div> :
        <>
            <div className='flex gap-4 justify-between'>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    className='w-full'
                    defaultValue={user.user.name.firstname}
                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    className='w-full'
                    defaultValue={user.user.name.lastname}
                />
            </div>
            <TextField
                    required
                    id="outlined-required"
                    label="Adress"
                    className='w-full'
                    defaultValue={user.user.address.number + " " + user.user.address.street}
                />
            <TextField
                    required
                    id="outlined-required"
                    label="Postcode/Zip"
                    className='w-full'
                    defaultValue={user.user.address.zipcode}
                    
                />
            <TextField
                    required
                    id="outlined-required"
                    label="Town / City"
                    className='w-full'
                    defaultValue={user.user.address.city}
                    
                />
            <div className='flex gap-4 justify-between'>
                <TextField
                    required
                    id="outlined-required"
                    label="Email Adress"
                    className='w-full'
                    defaultValue={user.user.email}
                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Phone"
                    className='w-full'
                    defaultValue={user.user.phone}
                />
            </div>
        </>}
    </div>
  )
}
