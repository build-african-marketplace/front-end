import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const getItems = () => dispatch => {
    dispatch({ type: GET_ITEMS });
    
    axiosWithAuth
        .get('/items')
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_ITEMS_FAILURE, payload: err });
        })
}