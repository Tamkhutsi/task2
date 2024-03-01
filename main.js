function playGame() {
    const playerMove = prompt(
      "Enter your move: rock, paper, or scissors"
    ).toLowerCase();
  
    const computerMove = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];
  
    let result = "";
  
    if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      result = "You win!";
    } else if (playerMove === computerMove) {
      result = "It's a tie!";
    } else {
      result = "You lose!";
    }
  
    console.log("Your move: " + playerMove);
    console.log("Computer's move: " + computerMove);
    alert(
      "You chose: " +
        playerMove +
        ".\n" +
        "Computer chose : " +
        computerMove +
        ".\n" +
        result
    );
  
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      playGame(); // Play again
    }
  }
  
  playGame(); // Start the game
  