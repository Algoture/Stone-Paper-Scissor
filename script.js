let userScore = document.getElementById("human-score");
let compScore = document.getElementById("comp-score");
const choices = document.querySelectorAll(".choice");
let box = document.querySelector(".msg");
let win = new Audio("win.wav");
let lose = new Audio("lose.wav");
let draw = new Audio("draw.wav");
let humanScore = 0;
let computerScore = 0;
let msg = document.getElementById("finalMsg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let choiceInd = Math.floor(Math.random() * 3);
    return options[choiceInd];
}
const winner = (userWin) => {
    if (userWin) {
        msg.innerText = "Congrats ! You Won ";
        box.style.backgroundColor = "green";
        humanScore++;
        userScore.innerText=humanScore;
        msg.style.color="white";
        win.play();
        lose.pause();

    } else {
        msg.innerText = "You Lost !";
        box.style.backgroundColor = "red";
        computerScore++;
        compScore.innerText=computerScore;
        lose.play();
        win.pause();
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        box.style.backgroundColor = "blue";
        msg.innerText = "The Game Was Draw";
        msg.style.color="white";
        draw.play();
        win.pause();
        lose.pause();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        winner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
})