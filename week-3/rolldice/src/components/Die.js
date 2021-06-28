import React from "react";
import "./Die.css";

const Die = (props,{face}) => {
    return <li className={`die fas fa-dice-dice${face}`}>{props.output}</li>;
};

export default Die;