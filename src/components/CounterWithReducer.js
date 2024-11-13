import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({
      type: "INCREMENT",
      payload: (state.count + 1),
    });
  };

  const decrement = () => {
    dispatch({
      type: "INCREMENT",
      payload: (state.count - 1),
    });
  };

  return (
    <div>
      <h3>Count : {state.count}</h3>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterWithReducer;
