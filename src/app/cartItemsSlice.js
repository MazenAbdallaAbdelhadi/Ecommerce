import { createSlice} from "@reduxjs/toolkit";

export const cartItemsSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addItem: (state , action)=>{
            let flag = true;
            for(let i = 0; i < state.length; i++){
                if(state[i].product.id === action.payload.product.id){
                    let qty = state[i].quantity;
                    qty++;
                    state[i] = {product:action.payload.product, quantity:qty}
                    flag = false
                }
            }

            if(flag){
                state.push({
                    product:action.payload.product,
                    quantity:1
                })                
            }
        },

        removeItem:(state , action)=>{
            for(let i = 0; i < state.length; i++){
                if(state[i].product.id === action.payload){
                    return state.filter(item=> item.product.id !== action.payload);
                }
            }
        },

        increaseQuantity:(state , action)=>{
            for(let i = 0; i < state.length; i++){
                if(state[i].product.id === action.payload){
                    state[i].quantity++
                }
            }
        },

        decreaseQuantity:(state , action)=>{
            for(let i = 0; i < state.length; i++){
                if(state[i].product.id === action.payload){
                    if(state[i].quantity > 1){
                        state[i].quantity--
                    }
                }
            }
        },

    }
})

export const {addItem , removeItem , decreaseQuantity , increaseQuantity } = cartItemsSlice.actions;

export default cartItemsSlice.reducer