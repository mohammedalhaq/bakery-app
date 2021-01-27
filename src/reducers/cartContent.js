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
            cart.push(action.payload);
            return {
                ...state,
                cart: cart
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: cart.filter(item => item.id !== action.payload.id)
            };
        case "UPDATE_ITEM":
            return state.cart;
        default:
            return state;
    }
}

export default cartContent;