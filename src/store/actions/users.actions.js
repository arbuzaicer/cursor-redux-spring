export const CREATE_USER_TYPE = "CREATE_USER_TYPE";
export const DELETE_USER_TYPE = "DELETE_USER_TYPE";
export const GET_USERS_ACTION = "GET_USERS_ACTION";
export const SET_USERS_ACTION = "SET_USERS_ACTION";
export const SET_USERS_DATA_LOADING = "SET_USERS_DATA_LOADING";

export const createUserAction = (user) => {
  return {
    type: CREATE_USER_TYPE,
    payload: user,
  };
};

export const deleteUserAction = (userId) => {
  return {
    type: DELETE_USER_TYPE,
    payload: userId,
  };
};

export const setUsersAction = (users) => {
  return {
    type: SET_USERS_ACTION,
    payload: users,
  };
};

export const setUsersDataLoadingAction = (loading) => {
  return {
    type: SET_USERS_DATA_LOADING,
    payload: loading,
  };
};

// thunk

export const getUsersThunk = () => {
  return async (dispatch) => {
    dispatch(setUsersDataLoadingAction(true));

    const request = await fetch("https://jsonplaceholder.typicode.com/users");

    const response = await request.json();

    setTimeout(() => {
      dispatch(setUsersAction(response));
      dispatch(setUsersDataLoadingAction(false));
    }, 2000);
  };
};
