import {
  INCREASE_COUNT_TYPE,
  DECREASE_COUNT_TYPE,
} from "../actions/counter.actions";

const initialState = {
  currentCount: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT_TYPE: {
      console.log("inside reducer", { action });
      return { ...state, currentCount: state.currentCount + 1 };
    }

    case DECREASE_COUNT_TYPE: {
      if (state.currentCount === 0) {
        alert("you can't descrease more thatn 0");

        return {
          currentCount: 0,
        };
      }
      return { ...state, currentCount: state.currentCount - 1 };
    }
    default: {
      return initialState;
    }
  }
};

export default CounterReducer;
