import axios from 'axios';

export const PLAYER_MOVE_START = 'PLAYER_MOVE_START';
export const PLAYER_MOVE_SUCCESS = 'PLAYER_MOVE_SUCCESS';
export const PLAYER_MOVE_FAILURE = 'PLAYER_MOVE_FAILURE';

export const playerMove = dir => dispatch => {
    dispatch({ type: PLAYER_MOVE_START });
    return axios.post('https://lambda-mud-test.herokuapp.com/api/adv/move', dir)
    .then(res => {
        dispatch({ type: PLAYER_MOVE_SUCCESS, payload: res.data })
        console.log(res)
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: PLAYER_MOVE_FAILURE, payload: err })
    });
}