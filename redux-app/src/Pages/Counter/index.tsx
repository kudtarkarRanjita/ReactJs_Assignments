import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./Actions";

function Counter() {
  const { count } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h2>{count}</h2>
      <button onClick={() => dispatch(Increment(1))}>+ </button>
      <button onClick={() => dispatch(Decrement(1))}>- </button>
    </div>
  );
}

export default Counter;
