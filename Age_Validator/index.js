
const output = document.getElementById("agevalidator");
const agevalidate = document.getElementById("validateAge");


agevalidate.onclick = function()
{ 
    let age = Number(document.getElementById("age").value);
if (isNaN(age) || age<=0 || age>100)
{
    output.textContent = "invalid age, retry again"
}
else if (age>=18)
{
output.textContent = "You are eligible to enter this site!"
}
else
{
    output.textContent = "Sorry you are must be 18+ to enter this site"
}
};