const choices = ["rock", "paper", "scissors"];

function play(event) {
    const userChoice = event.target.id;
    console.log("User choice: " + userChoice);
    
    const randomNumber = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomNumber];
    console.log("Computer choice is: " + computerChoice);  
    
    let card = document.getElementById("result");
    
    let winner = null;
    if (userChoice == computerChoice) {
        winner = "nobody!";
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        winner = "you!"
    } else if (userChoice == "paper" && computerChoice == "rock") {
        winner = "you!"
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        winner = "you!"
    } else {
        winner = "the house!"
    }
    
    
    card.innerHTML = 
        "You selected " + userChoice + ", the computer selected " + computerChoice + "<br />" + "The winner is " + winner;
};
