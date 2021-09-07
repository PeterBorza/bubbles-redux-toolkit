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
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />
                <button onClick={() => dispatch(incrementByAmount(value))}>
                    incrementByAmount
                </button>
            </div>
        </div>
    );
};

export default Counter;
