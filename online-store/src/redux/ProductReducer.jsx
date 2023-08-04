import { createSlice } from '@reduxjs/toolkit'
import { productList } from '../ProductData'


const productSlice = createSlice({
    name: "products",
    initialState: productList,
    reducers: {
        addProducts: (state, action) => {
            state.push(action.payload);
        },
        updateProducts: (state, action) => {
            const { id, name, price, description } = action.payload;
            const productUpdate = state.find(pro => pro.id == id);
            if (productUpdate) {
                productUpdate.name = name;
                productUpdate.price = price;
                productUpdate.description = description;
            }
        },
        deleteProducts: (state, action) => {
            const { id } = action.payload;
            const productDelete = state.find(pro => pro.id == id);
            if (productDelete) {
                return state.filter(p => p.id !== id);
            }
        }

    }
})

export const { addProducts, updateProducts, deleteProducts } = productSlice.actions;
export default productSlice.reducer;