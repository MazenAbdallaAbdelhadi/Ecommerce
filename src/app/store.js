import { configureStore } from '@reduxjs/toolkit';
import cartItemsSlice from './cartItemsSlice';
import userSlice from './userSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
    cartItems:cartItemsSlice,
  },
});
