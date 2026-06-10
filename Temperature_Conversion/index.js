
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const convert = document.getElementById("convert");
const finalTemp = document.getElementById("result");

function CelsiustoFahrenheit(temp)
{
    return temp * 1.8 + 32;
    }

    function FahrenheittoCelsius(temp)
{
    return  (temp - 32) * 5/9;
    
    }

convert.onclick = function()
{
    let temp = Number(document.getElementById("temperature").value);
    if (toFahrenheit.checked)
    {
        let final = CelsiustoFahrenheit(temp);
        finalTemp.textContent = `Celsius: ${temp} Fahrenheit: ${final.toFixed(1)}`
    }
    else if (toCelsius.cheked)
    {
       let final = FahrenheittoCelsius(temp)
        finalTemp.textContent = `Fahrenheit: ${temp} Celsius: ${final.toFixed(1)} `
    }
    else
    {
        finalTemp.textContent = "Enter the Temperature and select type"
        
    }
    
}



