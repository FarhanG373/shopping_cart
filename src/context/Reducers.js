export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, Cart: [...state.Cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, Cart: state.Cart.filter(c => c.id !== action.payload.id) };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                Cart: state.Cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)
            }
        default:
            break;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case "SHORT_BY_PRICE":
            return {
                ...state,
                sort: action.payload
            }
            break;
        case "FILTER_BY_STOCK":
            return {
                ...state,
                byStock: !state.byStock
            }
            break;
        case "FILTER_BY_DELIVARY":
            return {
                ...state,
                byFastDelivary: !state.byFastDelivary
            }
            break;
        case "FILTER_BY_RATING":
            return {
                ...state,
                byRatings: action.payload
            }
            break;
        case "FILTER_BY_SEARCH":
            return {
                ...state,
                searchQuery: action.payload
            }
            break;
        case "CLEAR_FILTERS":
            return {
                byStock: false,
                byFastDelivary: false,
                byRatings: 0,
                searchQuery: '',
            }
            break;
        default:
            return state;
            break;
    }
}