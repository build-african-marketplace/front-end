import { axiosWithAuth } from '../utils/axiosWithAuth';
// import keyMirror from 'keyMirror';

export const LOGIN = 'LOGIN';

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN });

    return axiosWithAuth()
        .post(`/auth/login`, credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.user.id);
            // redirect to seller home page
            this.props.history.push("/seller-page");
        })
        .catch(err => console.log(err));
};

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const getItems = () => dispatch => {
    dispatch({ type: GET_ITEMS });

    axiosWithAuth()
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

export const GET_ITEMS_USERID = 'GET_ITEMS_USERID';
export const GET_ITEMS_USERID_SUCCESS = 'GET_ITEMS_USERID_SUCCESS';
export const GET_ITEMS_USERID_FAILURE = 'GET_ITEMS_USERID_FAILURE';

export const getItemsUserId = () => dispatch => {
    dispatch({ type: GET_ITEMS_USERID });

    axiosWithAuth()
        .get('/users/:id')
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_ITEMS_USERID_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_ITEMS_USERID_FAILURE, payload: err });
        })
}

// export const ModalActionTypes = keyMirror({
//     HIDE_MODAL: null,
//     SHOW_MODAL: null,
// })
