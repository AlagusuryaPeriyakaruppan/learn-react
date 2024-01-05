import React, { useEffect, useReducer } from "react";
import axios from "axios";

/* When to prefer useReducer hook?
 *
 *  Multiple state update on fetching data
 *  Complex Logic
 *  Data type like - Object or Array
 */

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    }
    case "ERROR": {
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    }
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, post, error } = state;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post[0].title}
      {error ? error : null}
    </div>
  );
};

export default Reducer;
