export const INCREASE_COUNT_TYPE = "INCREASE_COUNT_TYPE";
export const DECREASE_COUNT_TYPE = "DECREASE_COUNT_TYPE";

export const setIncreaseAction = (someData) => {
  console.log("from action", someData);
  return {
    type: INCREASE_COUNT_TYPE,
    payload: someData,
  };
};

export const setDecreaseAction = () => {
  return {
    type: DECREASE_COUNT_TYPE,
  };
};
