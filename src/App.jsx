import React, { useState } from "react";
// import image from "./assets/paper.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const RockPaperScissors = () => {
	const [playerChoice, setPlayerChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [result, setResult] = useState("");

	const handleChoice = (choice) => {
		const computerChoices = [ROCK, PAPER, SCISSORS];
		const randomChoice =
			computerChoices[Math.floor(Math.random() * computerChoices.length)];
		setPlayerChoice(choice);
		setComputerChoice(randomChoice);
		setResult(checkIsWinner(choice, randomChoice));
	};

	const checkIsWinner = (player, computer) => {
		if (player === computer) {
			return toast("Tie", { type: "info" });
		} else if (
			(player === ROCK && computer === SCISSORS) ||
			(player === PAPER && computer === ROCK) ||
			(player === SCISSORS && computer === PAPER)
		) {
			return toast("You win", { type: "success" });
		} else {
			return toast("You lose", { type: "error" });
		}
	};

	return (
		// parent container
		<div>
			
			{/* navbar */}
			<nav color="dark" dark className="navbar">
				<p>Rock Paper Scissors</p>
			</nav>

			{/* main section */}
			<main>
				<h1>Choose your option:</h1>
				<button
					className="button rock"
					onClick={() => handleChoice(ROCK)}
				></button>{" "}
				<button
					className="button paper"
					onClick={() => handleChoice(PAPER)}
				></button>{" "}
				<button
					className="button scissors"
					onClick={() => handleChoice(SCISSORS)}
				></button>
				{playerChoice && computerChoice && result && (
					<div>
						<p className="paragraph">Your choice {playerChoice}</p>
						<p className="paragraph">Computer's choice {computerChoice}</p>
						<ToastContainer position="bottom-left" />
					</div>
				)}
			</main>
		</div>
	);
};

export default RockPaperScissors;

