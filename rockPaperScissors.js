const getUserChoice = (userInput) => {
  userInput = userInter.toLowerCase();
  if(userInput === "rock" ||userInput ==="scissors" || userInput === "paper") {
    return userInput;
  } else {
    console.log("Error, please type: rock, paper pr scissors.");
  }
  }

const getComputerChoice = ()=>{
  console.log(Math.random())
};

console.log(getComputerChoice())