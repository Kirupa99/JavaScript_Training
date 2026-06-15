const username = document.getElementById("username");
const generatePassword = document.getElementById("generatePassword");
const signupButton = document.getElementById("signup");
const result = document.getElementById("result");
const max_length = 12;
const min_length = 6;


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