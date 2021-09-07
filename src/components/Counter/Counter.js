import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
} from "../../redux/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [value, setValue] = useState(2);

    return (
        <div className="counter-wrapper">
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input
                type="text"
                value={value}
                onChange={e => setValue(Number(e.target.value))}
            />
            <button onClick={() => dispatch(incrementByAmount(value))}>
                incrementByAmount
            </button>
        </div>
    );
};

export default Counter;
