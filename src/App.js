import './App.css';
import React from "react";
import Counter from "./Components/counter/Counter";


function App() {
    return (
        <div className="App">
            {/*<PlayingWithProps props1="value1" props2="value2"/>*/}
            <Counter />
        </div>
    );
}

// function PlayingWithProps(props) {
//     console.log(props)
//     console.log(props.props1)
//     console.log(props.props2)
//
// }

// function PlayingWithProps({props1,props2} ) {
//     console.log(props1)
//     console.log(props2)
// }


export default App;
