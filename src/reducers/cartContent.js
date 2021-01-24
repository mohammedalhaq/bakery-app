/*
https://webmobtuts.com/frontend-development/building-shopping-cart-with-reactjs-and-redux-part-1/
https://webmobtuts.com/frontend-development/building-shopping-cart-with-reactjs-and-redux-part-2/
https://www.pluralsight.com/guides/add-large-amounts-of-data-in-the-app-state-in-redux
*/
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
            cart.pop(action.payload);
            return {
                ...state,
                cart: cart
            };       
        case "UPDATE_ITEM":
            return state.cart;
        default:
            return state;
    }
}

export default cartContent;