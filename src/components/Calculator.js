import React, { useState } from "react";
// import "./Calculator.css";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  // Handle number input
  const handleNumberClick = (num) => {
    if (display === "0" && num === "0") return; // Prevent multiple leading zeros
    setDisplay((prev) => (prev === "0" ? num : prev + num));
    setExpression((prev) => prev + num);
  };

  // Handle operator input
  const handleOperatorClick = (operator) => {
    if (/[\+\-\*\/]$/.test(expression)) {
      setExpression((prev) => prev.slice(0, -1) + operator); // Replace last operator
    } else {
      setExpression((prev) => prev + operator);
    }
    setDisplay(operator);
  };

  // Handle decimal input
  const handleDecimalClick = () => {
    if (!display.includes(".")) {
      setDisplay((prev) => prev + ".");
      setExpression((prev) => prev + ".");
    }
  };

  // Handle clear
  const handleClear = () => {
    setDisplay("0");
    setExpression("");
  };

  // Handle calculation
  const handleEquals = () => {
    try {
      const result = eval(expression).toFixed(4); // Safe only with controlled input
      setDisplay(result);
      setExpression(result);
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">{display}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>/</button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>*</button>
      <button id="seven" onClick={() => handleNumberClick("7")}>7</button>
      <button id="eight" onClick={() => handleNumberClick("8")}>8</button>
      <button id="nine" onClick={() => handleNumberClick("9")}>9</button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>-</button>
      <button id="four" onClick={() => handleNumberClick("4")}>4</button>
      <button id="five" onClick={() => handleNumberClick("5")}>5</button>
      <button id="six" onClick={() => handleNumberClick("6")}>6</button>
      <button id="add" onClick={() => handleOperatorClick("+")}>+</button>
      <button id="one" onClick={() => handleNumberClick("1")}>1</button>
      <button id="two" onClick={() => handleNumberClick("2")}>2</button>
      <button id="three" onClick={() => handleNumberClick("3")}>3</button>
      <button id="equals" onClick={handleEquals}>=</button>
      <button id="zero" onClick={() => handleNumberClick("0")}>0</button>
      <button id="decimal" onClick={handleDecimalClick}>.</button>
    </div>
  );
}
