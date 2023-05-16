import {
  LOCAL_STORAGE_AUTH_KEY,
  LOCAL_STORAGE_TOKENS_DATA,
} from "../../utils/constants";
import {
  LOG_IN_ACTION_TYPE,
  LOG_OUT_ACTION_TYPE,
} from "../actions/auth.actions";

const initialState = {
  isAuth: false,
  token: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_ACTION_TYPE: {
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, true);
      localStorage.setItem(
        LOCAL_STORAGE_TOKENS_DATA,
        JSON.stringify({
          "X-RapidAPI-Key":
            "e331d0c1cdmsh1d058accd2c9840p14956fjsnb36e2a3c5430",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        })
      );

      return { ...state, isAuth: true };
    }

    case LOG_OUT_ACTION_TYPE: {
      localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
      localStorage.removeItem(LOCAL_STORAGE_TOKENS_DATA);

      return { ...state, isAuth: false };
    }

    default: {
      return initialState;
    }
  }
};

export const getIsAuthSelector = (state) => state.authReducer.isAuth;

export default AuthReducer;
