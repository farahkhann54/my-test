import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Slice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-80 mx-auto text-center">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Redux Counter</h2>
      <div className="text-5xl font-bold mb-6">{count}</div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 rounded-md bg-red-500 text-white font-semibold text-lg hover:bg-red-600 transition"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;