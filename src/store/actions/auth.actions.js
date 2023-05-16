export const LOG_IN_ACTION_TYPE = "LOG_IN_ACTION_TYPE";
export const LOG_OUT_ACTION_TYPE = "LOG_OUT_ACTION_TYPE";

export const setLogInAction = () => {
  return {
    type: LOG_IN_ACTION_TYPE,
  };
};

export const setLogOutAction = () => {
  return {
    type: LOG_OUT_ACTION_TYPE,
  };
};
