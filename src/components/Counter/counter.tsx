import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, incrementAsync } from "state/counter/counterSlice";
import { AppDispatch, RootState } from "state/store";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(20))}>incrementByAmount</button>
            <button onClick={() => dispatch(incrementAsync(10))}>incrementAsync</button>
        </div>
    );
};
export default Counter;
