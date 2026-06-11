const groceries = [
    {
        name: "Milk",
        priceId: "milkPrice",
        quantityId: "milkQuantity",
        checkboxId: "milkChecked"
    },
    {
        name: "Yogurt",
        priceId: "yogurtPrice",
        quantityId: "yogurtQuantity",
        checkboxId: "yogurtChecked"
    },
    {
        name: "Butter",
        priceId: "ButterPrice",
        quantityId: "butterQuantity",
        checkboxId: "butterChecked"
    },
    {
        name: "Ghee",
        priceId: "GheePrice",
        quantityId: "gheeQuantity",
        checkboxId: "gheeChecked"
    },
    {
        name: "Chicken",
        priceId: "chickenPrice",
        quantityId: "chickenQuantity",
        checkboxId: "chickenChecked"
    },
    {
        name: "Egg",
        priceId: "eggPrice",
        quantityId: "eggQuantity",
        checkboxId: "eggChecked"
    },
    {
        name: "Salmon",
        priceId: "salmonPrice",
        quantityId: "salmonQuantity",
        checkboxId: "salmonChecked"
    },
    {
        name: "Banana",
        priceId: "bananaPrice",
        quantityId: "bananaQuantity",
        checkboxId: "bananaChecked"
    },
    {
        name: "Strawberry",
        priceId: "strawberryPrice",
        quantityId: "strawberryQuantity",
        checkboxId: "strawberryChecked"
    },
    {
        name: "Blueberry",
        priceId: "blueberryPrice",
        quantityId: "blueberryQuantity",
        checkboxId: "blueberryChecked"
    },
    {
        name: "Apple",
        priceId: "applePrice",
        quantityId: "appleQuantity",
        checkboxId: "appleChecked"
    },
    {
        name: "Grape",
        priceId: "grapePrice",
        quantityId: "grapeQuantity",
        checkboxId: "grapeChecked"
    },
    {
        name: "Onion",
        priceId: "onionPrice",
        quantityId: "onionQuantity",
        checkboxId: "onionChecked"
    },
    {
        name: "Tomato",
        priceId: "tomatoPrice",
        quantityId: "tomatoQuantity",
        checkboxId: "tomatoChecked"
    },
    {
        name: "Potato",
        priceId: "potatoPrice",
        quantityId: "potatoQuantity",
        checkboxId: "potatoChecked"
    },
    {
        name: "Coriander",
        priceId: "corainderPrice",
        quantityId: "corianderQuantity",
        checkboxId: "corianderChecked"
    },
    {
        name: "Mint",
        priceId: "mintPrice",
        quantityId: "mintQuantity",
        checkboxId: "mintChecked"
    },
    {
        name: "Ginger",
        priceId: "gingerPrice",
        quantityId: "gingerQuantity",
        checkboxId: "gingerChecked"
    },
    {
        name: "Garlic",
        priceId: "garlicPrice",
        quantityId: "garlicQuantity",
        checkboxId: "garlicChecked"
    },
    {
        name: "Spinach",
        priceId: "spinachPrice",
        quantityId: "spinachQuantity",
        checkboxId: "spinachChecked"
    }
];

const calculateButton = document.getElementById("calculateTotal");
const totalOutput = document.getElementById("total");
const resetButton = document.getElementById("reset");


calculateButton.onclick = function()
{
    let total = 0;
    for (const item of groceries)
    {
        const checkItem = document.getElementById(item.checkboxId).checked;
        if (checkItem)
        {
            const price = Number(document.getElementById(item.priceId).textContent);
            const quantity = Number(document.getElementById(item.quantityId).value);
            total += quantity * price;
        }
    }
    totalOutput.textContent = `Your Total Bill is: £${total.toFixed(2)}`;


};

resetButton.onclick = function()
{
    for(const item of groceries)
    {
        document.getElementById(item.checkboxId).checked = false;
        document.getElementById(item.quantityId).value = "1";
    }
    totalOutput.textContent = "";
}
