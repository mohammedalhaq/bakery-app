const initialCart = {
    menu: [],
    cart: []
};


const cartContent = (state = initialCart, action) => {
    let cart = state.cart;

    switch (action.type) {
        case "FETCH_MENU":
            return {
                ...state,
                menu: action.payload
            }
        case "ADD_TO_CART":
            let tempCart = cart.filter(item => item.id === action.payload.id)
            if (tempCart.length === 0) {
                cart.unshift(action.payload);
                return {
                    ...state,
                    cart: cart
                }
            } else {
                return {
                    ...state,
                    cart: cart.map((item, key) => item.id === action.payload.id ? {
                        ...item, quantity: item.quantity + 1
                    } : item)
                };
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: cart.filter(item => item.id !== action.payload.id)
            };
        case "ADD_ONE":
            return {
                ...state,
                cart: cart.map((item, key) => item.id === action.payload.id ? {
                    ...item, quantity: item.quantity + 1
                } : item)
            };
        case "REMOVE_ONE":
            let tempItem = cart.filter(item => item.id === action.payload.id);
            if (tempItem[0].quantity - 1 <= 0) {
                return {
                    ...state,
                    cart: cart.filter(item => item.id !== action.payload.id)
                }
            } else {
                return {
                    ...state,
                    cart: cart.map((item, key) => item.id === action.payload.id ? {
                        ...item, quantity: item.quantity - 1
                    } : item)
                }
            }
        case "RESET_CART":
            return{
                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export default cartContent;