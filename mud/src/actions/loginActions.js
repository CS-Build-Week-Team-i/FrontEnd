import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://lambda-mud-test.herokuapp.com/api/login/', creds)
    .then(res => {
      localStorage.setItem('token', res.data.key);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.key });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data.non_field_errors
      });
    });
};
