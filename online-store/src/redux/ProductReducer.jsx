import { createSlice } from '@reduxjs/toolkit'
import { productList } from '../ProductData'


const productSlice= createSlice({
    name: "products",
    initialState: productList,
    reducers: {
        addProducts: (state, action) =>{
            state.push(action.payload);
        }

    }
})

export const {addProducts} = productSlice.actions;
export default productSlice.reducer;