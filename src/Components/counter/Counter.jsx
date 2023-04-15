import React, {useState} from "react";
import './Counter.css';
import CounterButton from "./CounterButton";

export default function Counter() {
    const [count, setCount] = useState(0)

    function increaseTotal(by) {
        setCount(count + by)
    }

    function decreaseTotal(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">
                {count}
            </span>
            <CounterButton by={1} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
            <CounterButton by={2} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
            <CounterButton by={5} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
            <button className="resetButton"
                    onClick={resetCounter}
            >
                reset
            </button>
        </>
    )
}


