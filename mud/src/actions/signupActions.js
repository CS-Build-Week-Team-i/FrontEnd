import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post('https://lambda-mud-test.herokuapp.com/api/registration/', creds)
    .then(res => {
      console.log(res);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.response.data.non_field_errors
      });
    });
};
