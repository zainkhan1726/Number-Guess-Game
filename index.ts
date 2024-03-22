#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt({
  name: "userNumber",
  type: "number",
  message: "Guess a number between 1-6.",
});

if (answer.userNumber === randomNumber) {
  console.log(chalk.blue("Congragulations! You guessed the right number."));
} else {
  console.log(chalk.blue("Better luck next time.Try again."));
}
