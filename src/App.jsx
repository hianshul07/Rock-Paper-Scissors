import React, { useState } from "react";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const RockPaperScissors = () => {
	const [playerChoice, setPlayerChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [result, setResult] = useState(null);

	const handleChoice = (choice) => {
		const computerChoices = [ROCK, PAPER, SCISSORS];
		const randomChoice =
			computerChoices[Math.floor(Math.random() * computerChoices.length)];
		setPlayerChoice(choice);
		setComputerChoice(randomChoice);
		setResult(getResult(choice, randomChoice));
	};

	const getResult = (player, computer) => {
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
			<h1>Rock Paper Scissors</h1>
			<p>Choose your weapon:</p>
			<button onClick={() => handleChoice(ROCK)}>Rock</button>
			<button onClick={() => handleChoice(PAPER)}>Paper</button>
			<button onClick={() => handleChoice(SCISSORS)}>Scissors</button>
			{playerChoice && computerChoice && result && (
				<div>
					<p>You chose {playerChoice}</p>
					<p>The computer chose {computerChoice}</p>
					<p>{result}</p>
				</div>
			)}
		</div>
	);
};

export default RockPaperScissors;

