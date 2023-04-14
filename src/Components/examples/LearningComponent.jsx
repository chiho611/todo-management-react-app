import FirstComponent, {FirstComponentV2} from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import React from "react";
import LearningJavaScript from "./LearningJavaScript";


export default function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent/>
            <FirstComponentV2/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent/>
            <LearningJavaScript/>
        </div>
    );
}