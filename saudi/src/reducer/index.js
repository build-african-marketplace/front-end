import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions';

const initialState = {
    items: [],
    fetchingItems: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                fetchingItems: true
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                fetchingItems: false,
                ITEMS: action.payload
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                fetchingItems: false,
                error: action.payload
            }
        default:
            return state;
    }
}