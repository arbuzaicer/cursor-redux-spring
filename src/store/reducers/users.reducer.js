import {
  CREATE_USER_TYPE,
  DELETE_USER_TYPE,
  SET_USERS_ACTION,
  SET_USERS_DATA_LOADING,
} from "../actions/users.actions";

const initialState = {
  users: null,
  isLoading: false,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS": {
      return state;
    }

    case CREATE_USER_TYPE: {
      return {
        ...state,
        users: state?.users?.length
          ? [...state.users, action.payload]
          : [action.payload],
      };
    }

    case DELETE_USER_TYPE: {
      const filteredUsers = state?.users?.filter(
        (el) => el.id !== action.payload
      );

      return { ...state, users: filteredUsers };
    }

    case SET_USERS_ACTION: {
      return { ...state, users: action.payload };
    }

    case SET_USERS_DATA_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default: {
      return initialState;
    }
  }
};

export default UsersReducer;
