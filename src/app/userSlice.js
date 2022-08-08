import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('user/login',async()=>{
                        const userData = await axios.get('https://fakestoreapi.com/users/1')
                        return userData.data
                    })

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{},
        loading:false,
        error:false
    },
    reducers:{
        logout : (state)=>{
            state = {loading:false , error:false , user:{}};
        }
    },
    extraReducers:{
        [login.pending]:(state)=>{
            state.loading = true
        },
        [login.fulfilled]:(state , action)=>{
            state.user = action.payload
            state.loading = false
        },
        [login.rejected]:(state)=>{
            state.loading = false
            state.error = true
        },
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer;