const username = document.getElementById("username");
const generatePassword = document.getElementById("generatePassword");
const signupButton = document.getElementById("signup");
const password = document.getElementById("password");
const result = document.getElementById("result");

const max_length = 12;
const min_length = 6;

generatePassword.onclick = function(event)
{
    event.preventDefault();
    const generatedPassword = createPassword();
    password.value = generatedPassword;
    // console.log(generatedPassword);
}

function createPassword()
{
    let createdpassword="";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$^&*/;.";
    const numberChars = "0123456789";
    const characterSet ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$^&*'/;;.,";

    
        const charRandom1 =  Math.floor(Math.random() * lowerChars.length);
        const charRandom2 =  Math.floor(Math.random() * upperChars.length);
        const charRandom3 =  Math.floor(Math.random() * symbolChars.length);
        const charRandom4 =  Math.floor(Math.random() * numberChars.length);

    createdpassword += lowerChars[charRandom1];
    createdpassword += upperChars[charRandom2];
    createdpassword += symbolChars[charRandom3];
    createdpassword += numberChars[charRandom4];

    for (let i=0;i<8;i++)
    {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        createdpassword += characterSet[randomIndex];
    }
    return createdpassword;

}
function validatePassword(password)
{
    let lowercaseCount =0;
    let uppercaseCount = 0;
    let symbolCount =0;
    let numberCount =0;
    let content ="";
    for (let i=0;i<password.length;i++)
    {
        if(password[i] ==" ")
        {
            return  `Password cannot have space inbetween`;
        }

        else if (password[i] >='a' && password[i] <='z')
        {
            lowercaseCount++;
        }
        else if (password[i] >='A' && password[i] <='Z')
        {
            uppercaseCount++;
        }
        else if (password[i] >='0' && password[i] <='9')
        {
            numberCount++;
        }
        else
        {
            symbolCount++;
        }
    }

        if (lowercaseCount >=1 && uppercaseCount >=1 && numberCount >=1 && symbolCount >=1)
        {
            content = "Password Validation successful";
        }
        else
        {
            content = "Invalid password format, The password should contain atleast 1 number/1 symbol/1 lowercase/1 Uppercase";
        }
    
    return content 
}

signupButton.onclick = function()
{
    const password = document.getElementById("password").value;
    if (password.length < min_length)
    {
        result.textContent = `Your password cannot be too small needs to be (6-12 characters)`;
    }
    else if(password.length > max_length)
    {
        result.textContent = `Your password cannot be too large needs to be (6-12 characters)`;
    }
    else
    {
        content = validatePassword(password);
        result.textContent = content;
    }



}