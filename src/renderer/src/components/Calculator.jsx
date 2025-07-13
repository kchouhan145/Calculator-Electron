import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                const result = evaluate(input).toString();
                setInput(result);
            } catch (error) {
                setInput("Error");
            }
        } else if (value === "C") {
            setInput("");
        } else if (value === "←") {
            setInput(input.slice(0, -1));
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        "C", "←", "/", "*",
        "7", "8", "9", "-",
        "4", "5", "6", "+",
        "1", "2", "3", "=",
        "0", "."
    ];

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                {input || "0"}
            </div>
            <div className="calculator-buttons">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(btn)}
                        className={`calculator-btn ${
                            btn === "="
                                ? "btn-equals"
                                : btn === "C"
                                ? "btn-clear"
                                : ""
                        }`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <style>{`
                .calculator-container {
                    max-width: 320px;
                    margin: 40px auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .calculator-display {
                    margin-bottom: 16px;
                    padding: 12px;
                    font-size: 2rem;
                    background: #f3f3f3;
                    border-radius: 8px;
                    text-align: right;
                    min-height: 48px;
                    word-break: break-all;
                }
                .calculator-buttons {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                }
                .calculator-btn {
                    padding: 18px 0;
                    font-size: 1.2rem;
                    border: none;
                    border-radius: 8px;
                    background: #e0e0e0;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .calculator-btn:hover {
                    background: #d1d1d1;
                }
                .btn-equals {
                    background: #4caf50;
                    color: #fff;
                }
                .btn-clear {
                    background: #f44336;
                    color: #fff;
                }
            `}</style>
        </div>
    );
};

export default Calculator;
