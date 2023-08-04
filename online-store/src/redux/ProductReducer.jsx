import { createSlice } from '@reduxjs/toolkit'
import { productList } from '../ProductData'


const productSlice= createSlice({
    name: "products",
    initialState: productList,
    reducers: {
        addProducts: (state, action) =>{
            state.push(action.payload);
        },
        updateProducts: (state, action)=>{
            const {id, name, price, description} = action.payload;
            const productUpdate = state.find(pro => pro.id == id);
            if(productUpdate){
                productUpdate.name= name;
                productUpdate.price= price;
                productUpdate.description= description;
            }
        }

    }
})

export const {addProducts, updateProducts} = productSlice.actions;
export default productSlice.reducer;