import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator: React.FC = () => {
	const [input, setInput] = useState("");

	const handleInput = (value: string) => {
		setInput((currentInput) => currentInput + value);
	};

	const calculateResult = () => {
		try {
			setInput(String(evaluate(input)));
		} catch (error) {
			setInput("Error");
		}
	};

	const clearInput = () => setInput("");

	return (
		<div>
			<div>{input || "0"}</div>
			<div>
				{[
					"1",
					"2",
					"3",
					"+",
					"4",
					"5",
					"6",
					"-",
					"7",
					"8",
					"9",
					"*",
					"0",
					".",
					"/",
					"=",
					"C",
				].map((key) => (
					<button
						key={key}
						onClick={() => {
							if (key === "=") calculateResult();
							else if (key === "C") clearInput();
							else handleInput(key);
						}}>
						{key}
					</button>
				))}
			</div>
		</div>
	);
};

export default Calculator;
