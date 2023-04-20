import React, { useState } from "react";
import image from "./assets/paper.jpg";
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
			return "Tie!";
		} else if (
			(player === ROCK && computer === SCISSORS) ||
			(player === PAPER && computer === ROCK) ||
			(player === SCISSORS && computer === PAPER)
		) {
			return "You win!";
		} else {
			return "You lose!";
		}
	};

	return (
		<div>
			<nav color="dark" dark className="navbar">
				<p>Rock Paper Scissors</p>
			</nav>
			<main>
				<h1>Choose your option:</h1>
				<button className="button" onClick={() => handleChoice(ROCK)}>
					Rock
				</button>{" "}
				{/* <button className="button" onClick={notify}>
					NatuNatu
				</button>{" "} */}
				<button className="button" onClick={() => handleChoice(PAPER)}>
					Paper
				</button>{" "}
				<button className="button" onClick={() => handleChoice(SCISSORS)}>
					Scissor
				</button>
				{playerChoice && computerChoice && result && (
					<div>
						{/* <p className="">Your choice {playerChoice}</p> */}
						<p className="">Your choice {playerChoice}</p>
						<p>Computer's choice {computerChoice}</p>
						<p>{result}</p>
					</div>
				)}
				<img src={image} alt="" height={"100px"} />
			</main>
		</div>
	);
};

export default RockPaperScissors;

