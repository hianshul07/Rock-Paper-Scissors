import React, { useState } from "react";
import { Navbar, NavItem, NavbarBrand, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
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

	const notify = () => toast("khikhi", { type: "danger" });
	return (
		<div>
			<Navbar color="dark" dark className="font-10">
				<NavbarBrand>Rock Paper Scissors</NavbarBrand>
			</Navbar>
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
						<p className="h-16">Your choice {playerChoice}</p>
						<p>Computer's choice {computerChoice}</p>
						<p>{result}</p>
					</div>
				)}
				<ToastContainer />
			</main>
		</div>
	);
};

export default RockPaperScissors;

