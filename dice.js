
const diceImage = document.getElementById('diceImage');
const rollButton = document.getElementById('rollButton');
const rollButton2 = document.getElementById('rollButton2');
const P1scoreE = document.getElementById("P1score");
const P2scoreE = document.getElementById("P2score");
const resetbtn = document.getElementById("reset")
const Pstatus = document.getElementById("currentplayer")
// resetbtn.disabled = true;

// Define an array to hold the paths of dice images
const diceImages = [
    './diceImg/Dice01.png',
    './diceImg/Dice02.png',
    './diceImg/Dice03.png',
    './diceImg/Dice04.png',
    './diceImg/Dice05.png',
    './diceImg/Dice06.png'

];

let score1 = 0
let score2 = 0
// Function to roll the dice and update the image

rollButton2.disabled = true;
rollButton2.style.background = "grey"
function rollDice(player) {

    if (player === 1) {
        Pstatus.innerText = "Player-2 to Play"
        rollButton2.disabled = true;
        rollButton.style.background = "grey"
        rollButton2.style.background =""
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceImage.src = diceImages[randomNumber - 1];
        score1 += randomNumber
        P1scoreE.innerText = score1

        if (score1 >= 30) {
            Pstatus.innerText = "Player-1 Winner"
            rollButton2.disabled = true;
            rollButton.disabled = true;
            rollButton2.style.background = "grey"
        } else {
            rollButton2.disabled = false;
            rollButton.disabled = true;
        }
    }
    if (player === 2) {
        Pstatus.innerText = "Player-1 to Play"
        rollButton.disabled = true;
        rollButton2.style.background = "grey"
        rollButton.style.background = ""
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceImage.src = diceImages[randomNumber - 1];
        score2 += randomNumber
        P2scoreE.innerText = score2

        if (score2 >= 30) {
            Pstatus.innerText = "Player-2 Winner"
            rollButton2.disabled = true;
            rollButton.disabled = true;
            rollButton.style.background = "grey"
        } else {
            rollButton.disabled = false;
            rollButton2.disabled = true;

        }
    }
}


    // Add a click event listener to the roll button
    let x = 0
    rollButton.addEventListener('click', () => { x = 1; rollDice(x) })
    rollButton2.addEventListener('click', () => { x = 2; rollDice(x) })

    // Add a click event listener to the reset button

    resetbtn.addEventListener('click', ()=>{
        rollButton2.disabled = false;
        rollButton.disabled = false;
        rollButton2.style.background =""
        rollButton.style.background =""
        Pstatus.innerText ="Player-1 to Play"
        score1 = 0;
        score2 = 0;
        P1scoreE.innerText = 0;
        P2scoreE.innerText = 0; 
    })





