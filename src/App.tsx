import "./App.css";
import { decrement, increment } from "./redux/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((s1) => s1.count);
  console.log(count);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div className="">
        <h2>Increment with redux</h2>
        <button onClick={() => handleIncrement(10)}>Increment</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
