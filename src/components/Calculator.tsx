import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";

const Calculator: React.FC = () => {
	const [input, setInput] = useState<string>("");

	const handleInput = (value: string): void => {
		setInput((currentInput) => currentInput + value);
	};

	const calculateResult = (): void => {
		try {
			const result = evaluate(input);
			setInput(String(result));
		} catch (error) {
			setInput("Error");
			console.error(error);
		}
	};

	const clearInput = (): void => setInput("");

	const handleClick = (key: string): void => { // moved from return for better readability, switch case
		switch (key) {
			case "=":
				calculateResult();
				break;
			case "C":
				clearInput();
				break;
			default:
				handleInput(key);
		}
	};

	return (
		<Box
			sx={{
				maxWidth: 300,
				m: "auto",
				p: 2,
				border: "1px solid",
				borderColor: "divider",
			}}>
			<Input value={input || "0"} readOnly fullWidth sx={{ mb: 2 }} />
			<Box
				sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
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
					<Button
						key={key}
						onClick={() => handleClick(key)}
						variant="outlined"
						color="neutral">
						{key}
					</Button>
				))}
			</Box>
		</Box>
	);
};

export default Calculator;
