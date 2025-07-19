import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch({ type: "inc" })}> +</button>

      <p>{value}</p>
      <button onClick={() => dispatch({ type: "dec" })}> -</button>
    </div>
  );
}

export default Counter;
