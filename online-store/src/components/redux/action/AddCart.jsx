// add cart 
export const addCart = (product) => {
    return {
        type: 'ADD_CART',
        payload: product,
    }
}

// delete cart 
export const delCart = (product) => {
    return {
        type: 'DELETE_CART',
        payload: product,

    }
}