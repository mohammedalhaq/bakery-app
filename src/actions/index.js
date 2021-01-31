export const fetchMenu = () => dispatch => {
    fetch("https://gist.githubusercontent.com/mohammedalhaq/80fc63af2fdea8fb860e2f58934accff/raw/ac034d7ca0b6e642e85cd6db30bcdb57137104fd/gistfile1.txt")
        .then(response => response.json())
        .then(data => dispatch({
            type: "FETCH_MENU",
            payload: data.selection
        }));
}

export const addToCart = item => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const removeFromCart = item => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}

export const addOne = (item, num) => {
    return {
        type: 'ADD_ONE',
        payload: item
    }
}

export const removeOne = (item, num) => {
    return {
        type: 'REMOVE_ONE',
        payload: item
    }
}