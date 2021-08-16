// author: Arshad shah
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm()
{
    // Retrieving the values of form elements
    var name = document.contact.name.value;
    var gender = document.contact.gender.value;
    var email = document.contact.email.value;
    var number = document.contact.number.value;
    var enquiry = document.contact.bio.value;

    // Defining error variables with a default value
    var nameErr = genderErr = emailErr = numberErr = enquiryErr = true;

    // Validate name
    if(name == "")
    {
        printError("nameErr", "Please enter your name");
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;

        if(regex.test(name) === false)
        {
            printError("nameErr", "Please enter a valid name");
        }
        else
        {
            printError("nameErr", "");
            nameErr = false;
        }//if else for name range validation
    }//if else for name validation

    // Validate email address
    if(email == "")
    {
        printError("emailErr", "Please enter your email address");
    }
    else
    {
        // Regular expression for basic email validation
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }//end of if else for email format validation
    }//if else to validate email

    // Validate mobile number
    if(number == "")
    {
        printError("numberErr", "Please enter your mobile number");
    }
    else
    {
        var regex = /^[0-9]\d{9}$/;
        if(regex.test(number) === false)
        {
            printError("numberErr", "Please enter a valid 10 digit mobile number (0899123456)");
        }
        else
        {
            printError("numberErr", "");
            mobileErr = false;
        }//if else for phone number value validation3
    }//if else for phone number validation

    // Validate enquiry
    if(enquiry == "")
    {
        printError("enquiryErr", "Please complete your enquiry");
    }
    else
    {
        printError("enquiryErr", "");
        countryErr = false;
    }//end if else

    // Validate gender
    if(gender == "")
    {
        printError("genderErr", "Please select your gender");
    }
    else
    {
        printError("genderErr", "");
        genderErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || genderErr || emailErr || numberErr || enquiryErr) == true)
    {
       return false;
    }
    else
    {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Gender:" + gender + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + number + "\n" +
                          "Your enquiry: " + enquiry + "\n" ;
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
        
    }
};

//auto expand textarea
function adjust_textarea(h)
{
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
