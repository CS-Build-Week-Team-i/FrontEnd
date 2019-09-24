import {
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAILURE
} from '../actions/loginActions';

const initialState = {
  loggingIn: false,
  error: null,
  isLoggedIn: false,
  isLoggedOut: false
  //   signupMsg: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null,
        isLoggedIn: false,
        isLoggedOut: false,
        signupMsg: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        isLoggedOut: false,
        error: null,
        signupMsg: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        isLoggedOut: true,
        error: action.payload,
        signupMsg: null
      };
    default:
      return state;
  }
};
