import React, { useState } from 'react';
import '../assets/calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleBackspace = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleEquals = () => {
        try {
            const evalResult = eval(input);
            setResult(evalResult);
        } catch {
            setResult('Error');
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '+'
    ];

    return (
        <div className="calculator-container">
            <h2 className="calculator-title">Calculator</h2>
            <div className="calculator-input">
                {input || '0'}
            </div>
            <div className="calculator-result">
                {result !== '' ? result : ''}
            </div>
            <div className="calculator-grid">
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        className="calculator-button"
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
                <button
                    className="calculator-button calculator-button-clear"
                    onClick={handleClear}
                >
                    C
                </button>
                <button
                    className="calculator-button calculator-button-backspace"
                    onClick={handleBackspace}
                >
                    ⌫
                </button>
                <button
                    className="calculator-button calculator-button-equals"
                    onClick={handleEquals}
                >
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
