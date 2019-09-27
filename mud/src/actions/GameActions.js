import axios from 'axios';

export const INIT_START = 'INIT_START';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILURE = 'INIT_FAILURE';

export const ROOMS_START = 'ROOMS_START';
export const ROOMS_SUCCESS = 'ROOMS_SUCCESS';
export const ROOMS_FAILURE = 'ROOMS_FAILURE';

export const MOVE_START = 'MOVE_START';
export const MOVE_SUCCESS = 'MOVE_SUCCESS';
export const MOVE_FAILURE = 'MOVE_FAILURE';

export const SAY_START = 'SAY_START';
export const SAY_SUCCESS = 'SAY_SUCCESS';
export const SAY_FAILURE = 'SAY_FAILURE';

export const init = () => dispatch => {
  dispatch({ type: INIT_START });
  return axios
    .get('https://cs-build.herokuapp.com/api/adv/init')
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data);
      dispatch({ type: INIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: INIT_FAILURE,
        payload: err.response.data
      });
    });
};

export const rooms = () => dispatch => {
  dispatch({ type: ROOMS_START });
  return axios
    .get('https://cs-build.herokuapp.com/api/adv/rooms')
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data);
      dispatch({ type: ROOMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: ROOMS_FAILURE,
        payload: err.response.data
      });
    });
};

export const move = direction => dispatch => {
  dispatch({ type: MOVE_START });
  return axios
    .post('https://cs-build.herokuapp.com/api/adv/move', {'direction': direction })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data);
      dispatch({ type: MOVE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: MOVE_FAILURE,
        payload: err.response.data
      });
    });
};

export const say = message => dispatch => {
  dispatch({ type: SAY_START });
  return axios
    .post('https://cs-build.herokuapp.com/api/adv/say', {"message": message })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data);
      dispatch({ type: SAY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SAY_FAILURE,
        payload: err.response.data
      });
    });
};