import React from "react";
import * as PropTypes from "prop-types";

export default function CounterButton({by, increaseTotal, decreaseTotal}) {

    // const [count, setCount] = useState(0)

    // function increaseCounter() {
    //     setCount(count + by)
    //     increaseTotal(by)
    // }
    //
    // function decreaseCounter() {
    //     setCount(count - by)
    //     decreaseTotal(by)
    // }

    return (
        <div className="counter">
            {/*<span className="count">{count}</span>*/}
            <div>
                <button className="counterButton"
                        onClick={() => increaseTotal(by)}
                    // style={{fontSize:"30px"}}
                >
                    +{by}
                </button>
                <button className="counterButton"
                        onClick={() => decreaseTotal(by)}
                    // style={{fontSize:"30px"}}
                >
                    -{by}
                </button>
            </div>

        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 3
}