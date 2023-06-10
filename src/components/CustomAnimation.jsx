import React from "react";
import "../app/globals.css";

const AnimationCustom = ({
 elementType = `div`,
 name,
 duration,
 timingFunction,
 delay,
 iterationCount,
 direction,
 fillMode,
 playState,
 children,
 className,
}) => {
 const style = {
    "--animation-name": name,
    "--animation-duration": duration,
    "--animation-timing-function": timingFunction,
    "--animation-delay": delay,
    "--animation-iteration-count": iterationCount,
    "--animation-direction": direction,
    "--animation-fill-mode": fillMode,
    "--animation-play-state": playState,
 };

 return React.createElement(
    elementType,
    { className: `animation className`, style },
    children
 );
};

export default AnimationCustom;