import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/actions';

const initialState = {
    items: [],
    item: {},
    fetchingItems: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        //get all items
        case GET_ITEMS:
            return {
                ...state,
                fetchingItems: true
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                fetchingItems: false,
                items: action.payload
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                fetchingItems: false,
                error: action.payload
            }
        default:
            return state
    }
}