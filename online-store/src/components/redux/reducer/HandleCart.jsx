const cart = [];

const HandleCart = (state = cart, action) => {
    const product = action.payload;
    console.log(action.payload);
    switch (action.type) {
        case "ADD_ITEM":
            const exist = state.find((p) => p.id === product.id);
            if (exist) {
                return state.map((p) => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case 'DELETE_ITEM':
            const exists = state.find((p) => p.id === product.id);
            if (exists.qty === 1) {
                return state.filter((p) => p.id !== exists.id);
            } else {
                return state.map((p) =>
                    p.id === product.id ? { ...p, qty: p.qty - 1 } : p);
            }
            break;

        default:
            return state;

    }

}

export default HandleCart;