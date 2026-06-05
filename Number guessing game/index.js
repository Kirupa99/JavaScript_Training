let min_value = 1;
let max_value = 10;

let guess_number = document.getElementById("number");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");
const turns = document.getElementById("turns");
const reset = document.getElementById("retryBtn");

let turnsNumber = 5;
const randomNumber = Math.floor(Math.random() * max_value) + min_value;

function resetGame()
{
    turnsNumber = 5;
    let randomNumber = Math.floor(Math.random() * max_value) + min_value;
    turns.textContent = `Number of turns available: ${turnsNumber}`
    result.textContent = ``;
    guessBtn.disabled = false;
}
guessBtn.onclick = guessGame;


function guessGame()
{
    let number = Number(guess_number.value)
    if (number == randomNumber)
    {
        result.textContent = `Congratulations you have guessed the number correctly!!!`
    }
    else 
    {
        turnsNumber--;
        turns.textContent = `Number of turns available: ${turnsNumber}`

        if (number<randomNumber)
        {
            result.textContent = `Your guess is lower than the actual number` 
        }
        else
        {
        result.textContent = `Your guess is greater than the actual number`    
        }
    }

    if (turnsNumber == 0)
    {
        guessBtn.disabled = true;
        result.textContent = `Sorry all turns are done, The number was ${randomNumber}`
    }

}

reset.onclick = resetGame;

