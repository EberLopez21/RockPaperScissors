let weapons=['rock','paper','scissors'];
let userChoice= prompt("Enter your weapon");

if (weapons.includes(userChoice)) {
    let computerChoice= weapons[Math.floor(Math.random() * 3 + 1)];
    let you= userChoice;
}
if (computerChoice===you) {
    alert(`Tie, they chose ${(computerChoice)} too`);
} else {
    if (
        (you === 'scissors' && computerChoice === 'paper') ||
        (you === 'scissors' && computerChoice === 'rock') ||
        (you === 'rock' && computerChoice === 'scissors')
      ) {      
        alert(`YOU WIN!, they chose ${(computerChoice)}!`);
      } else {
        alert(`YOU LOSE :(, they chose ${(computerChoice)}!`);
      }
    }
  



