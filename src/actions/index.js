export const fetchMenu = () => dispatch => {
    fetch("https://gist.githubusercontent.com/mohammedalhaq/80fc63af2fdea8fb860e2f58934accff/raw/6baae5e3f5e20c332d7d0c020353b544529c6e50/gistfile1.txt")
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

export const resetCart = () => {
    return {
        type: 'RESET_CART'
    }
}