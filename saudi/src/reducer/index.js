import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, GET_ITEMS_USERID, GET_ITEMS_USERID_SUCCESS, GET_ITEMS_USERID_FAILURE } from '../actions';

const initialState = {
    items: [],
    fetchingItems: false,
    loggedIn: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
            return {
                ...state,
                credentials: action.payload
            }
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
        case GET_ITEMS_USERID:
            return {
                ...state,
                fetchingItems: true
            }
        case GET_ITEMS_USERID_SUCCESS:
            return {
                ...state,
                fetchingItems: false,
                items: action.payload
            }
        case GET_ITEMS_USERID_FAILURE:
            return {
                ...state,
                fetchingItems: false,
                error: action.payload
            }
        default:
            return state;
    }
}