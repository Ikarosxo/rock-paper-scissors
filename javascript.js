function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let number = getRandomInt(3);
    var choice;
    switch (number){
        case 0:
            return choice = "Rock";
            break;
        case 1:
            return choice = "Paper";
            break;
        case 2:
            return choice = "Scissors";
            break;
        default:
            console.log("I believe you've might've broken this somehow");
    }
}
console.log(getComputerChoice());