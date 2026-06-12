function rollDice()
{
    const numOfDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []
    const images = [];

    for (let i=0;i< numOfDice;i++)
    {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        values.push(randomNumber)
        images.push(`<img src="dice_images/${randomNumber}.png" alt="Dice ${randomNumber}">`)

    }
    diceResult.textContent = `Your dice results are: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');

}