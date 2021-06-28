import React, { useState } from "react"
import Die from "./Die";
import "./RollDice.css";

const RollDice = ({ sides }) => {
    const [state, setState] = useState({
        die1: 0,
        die2: 0,
        rolling: false,
        totalScore: 4
    });

    const { die1, die2, rolling, totalScore } = state;

    const roll = () => {
       // const newDie1 = sides[Math.floor(Math.random() * 6)];
        //const newDie2 = sides[Math.floor(Math.random() * 6)];

        const newDie1 = Math.floor(Math.random() * 6);
        const newDie2 = Math.floor(Math.random() * 6);
        const score1 = Object.values(newDie1); //[3]
        const score2 = Object.values(newDie2); //[4]
        setState({
            die1: newDie1, // ["one"]
            die2: newDie2, // ["two"]
            rolling: true,
            totalScore: newDie1 + newDie2,
        });
        setTimeout(() => {
            setState((prevState) => ({ ...prevState, rolling: false }));
        }, 1000);
    };
    return (
        <>
            <div className="roll-dice">
                <ul className="rolldice-container">
                    <Die face= {String(die1)} rolling={rolling} output = {die1} />
                    <Die face= {String(die2)} rolling={rolling} output = {die2} />
                </ul>
                <button className="button" onClick={roll} disabled={rolling}>
                    {rolling ? "Rolling..." : "Roll Dice"}
                </button>
                
                <h2>Total Score: {totalScore}</h2>
            </div>

        </>
    );
};
RollDice.defualtProps = {
    sides: [
        { one: 1 },
        { two: 2 },
        { three: 3 },
        { four: 4 },
        { five: 5 },
        { six: 6 },

    ],
};

export default RollDice;