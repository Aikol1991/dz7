import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addToCart: (state,action) => {
            const {id,name,price} = action.payload;
            state.count = state.count +1;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex >= 0 ){
                state.items[itemIndex].quantity += 1   
         } else{
            state.items.push({
                name,
                id,
                price,
                quantity: 1
            })
         }
        }
    }

})
export const {addToCart} = CartSlice.actions
export default CartSlice.reducer;