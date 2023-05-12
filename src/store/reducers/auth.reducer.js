import { SET_AUTH_ACTION_TYPE } from "../actions/auth.actions";

const initialState = {
  isAuth: false,
  token: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ACTION_TYPE: {
      return { ...state, isAuth: !state.isAuth };
    }

    default: {
      return initialState;
    }
  }
};

export default AuthReducer;
