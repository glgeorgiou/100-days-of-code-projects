function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        document.myForm.btnSubmit.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.myForm.text.focus();
        email.style.backgroundColor = "red";
        return false;
    }
}


const email = document.getElementById("email-input")
const form = document.getElementById("myForm")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    
    ValidateEmail(email);
   // console.log("email: ", email.value)
})