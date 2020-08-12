const ROCK = 0
const PAPER = 1
const SCISSORS = 2

const OPTIONS = [
  [ROCK, SCISSORS],
  [PAPER, ROCK],
  [SCISSORS, PAPER],
]

let user = ROCK
let computer = PAPER

const optionUserSelected = OPTIONS.find(([option]) => user == option)
const optionComputerSelected = OPTIONS.find(([option]) => computer == option)

const a = optionUserSelected[0] === optionComputerSelected[1]
const b = optionUserSelected[1] === optionComputerSelected[0]

if (a === false && b === true) {
  console.log('User wins :)')
} else if(a === true && b === false) {
  console.log('User loses :(')
} else {
  console.log('Sorry it\'s a draw')
}