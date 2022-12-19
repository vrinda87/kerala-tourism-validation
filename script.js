function validate()
{
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var passwd = document.getElementById("passwd");
    var passwdError = document.getElementById("passwdError");
    var phno = document.getElementById("phno");
    // var phnoError = document.getElementById("phnoError");

    let emailRegex=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phnoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    //strong- minimum 8 characters, 1 special character, 1 upper, 1 lower, 1 number
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    //medium- minimum 5 characters, 1 special character, 1 upper, 1 lower, 1 number
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
      
// *email validation start
    if(!emailRegex.test(email.value))
    {
        emailError.innerHTML="Invalid";
        emailError.style.color="#FF0000";
        return false;
    }
// *email validation end

// *phone num validation start
    if(!phnoRegex.test(phno.value))
    {
        alert("Please enter a valid Phone Number");
        // phnoError.innerHTML='Enter a valid Phone Number';
        // phnoError.style.color="#FF0000";
        return false;       
    }
// *phone num validation end
    
// *password validation start    
    if(strongPassword.test(passwd.value)) 
    {
        passwd.style.color = "green";
        passwdError.style.color = "green";
        passwdError.textContent = "Strong";
        alert("Registration successful");
        return true;
    } 
    else if(mediumPassword.test(passwd.value)) 
    {
        passwd.style.color = "orange";
        passwdError.style.color = "orange";
        passwdError.textContent = "Medium";
        return false;
    } 
    else {
        passwd.style.color = "red";
        passwdError.style.color = "red";
        passwdError.textContent = "Poor";
        return false;
    }
   // *password validation end 
}