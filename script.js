/*
Creation date: 6-6-2017
Purpose:  validating the HTML page registration_form.html
Created By : Anushree.
*/
alert('Hello Student, register yourself here.');
/**
    * Functionality: match entered password and retyped password
    * @params: null
    * @return: true/false
    */
function match_password()
{  
	var pass1 = document.form.password_1.value;
	var pass2 = document.form.password_2.value;  
	if(pass1 == pass2)
		return true;    
	alert("Password must be same!");  
	return false;  	  
}
/**
    * Functionality: check for name fields if entered text is contains only alphabets
    * @params: text
    * @return: true/false
    */
function isAlpha(text)  
{  
   var lettersPattern = /^[a-z]+$/i;
   if(text.value.match(lettersPattern))
      return true;
    alert("Alphabets only!");
	text.value = null;
    return false;
}
/**
    * Functionality: validate 10 digit mobile number
    * @params: number
    * @return: true/false
    */
function isMobileNumber(number)
{
	var numberPattern = /^\d{10}$/;
	if(number.value.match(numberPattern) && number.value > 0)
		return true;
	alert("Please enter 10 digit mobile number!");
	number.value = null;
	return false;
}
/**
    * Functionality: validate username field which should be alphanumeric only
    * @params: text
    * @return: true/false
    */
function isAlphaNumeric(username)
{
	var alphaNumericPattern = /^[a-z0-9]+$/i;
	if(username.value.match(alphaNumericPattern))
		return true;
	alert("Only alphabet characters (A-Z or a-z) and numbers (0-9) are allowed!");
	username.value = null;
	return false;
}
/**
    * Functionality: validate email id type entered by the user
    * @params: emailId
    * @return: true/false
    */
function isEmail(emailId)
{
	var emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
	if(emailId.value.match(emailPattern))
		return true;
	alert("It is not a valid Email Id type!");
	emailId.value = null;
	return false;
}