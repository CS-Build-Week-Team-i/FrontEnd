import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions/signupActions';

const initialState = {
  signingUp: false,
  signupMsg: '',
  signedUp: false,
  error: ''
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        signingUp: true,
        signupMsg: '',
        signedUp: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signupMsg: 'Account successfully created!',
        signedUp: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        signingUp: false,
        signedUp: false
      };
    default:
      return state;
  }
};
