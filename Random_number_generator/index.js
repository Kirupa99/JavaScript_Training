const roll_button = document.getElementById("diceButton");
const roll_label = document.getElementById("diceroll");
const min = 1;
const max = 6;
let randomNum;

roll_button.onclick = function()
{
    randomNum = Math.floor(Math.random() * max) + min;
    roll_label.textContent = randomNum;


}


