/*
Creation date: 6-6-2017
Purpose:  validating the HTML page registration_form.html
File Path: D:/Git Directory/demoWeb/registration_form.htm
Created By : Anushree.
*/
alert('Hello Student, register yourself here.');
/**
    * Functionality: validate the entire form before submitting it
    * @params: null
    * @return: true/false
    */
function validateForm()
{
	if(matchPassword())
	{
		confirm('Are you sure you want to submit it?');
		event.preventDefault();
		updateStudentTable();
		return true;
	}
	return false;
}
/**
    * Functionality: match entered password and retyped password
    * @params: null
    * @return: true/false
    */
function matchPassword()
{  
	var pass1 = document.form.password_1.value;
	var pass2 = document.form.password_2.value;  
	if(pass1 == pass2)
		return true;    
	alert("Password must be same!");
	document.form.password_2.value = null;
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
	var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(emailId.value.match(emailPattern))
		return true;
	alert("It is not a valid Email Id type!");
	emailId.value = null;
	return false;
}
/**
    * Functionality: update student table to update the details of the students who have registered successfully
    * @params: null
    * @return: null
    */
function updateStudentTable()
{
	var row= studentTable.insertRow(1);                      
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = document.getElementById("userName").value;
	cell2.innerHTML = document.getElementById("firstName").value;
	cell3.innerHTML = document.getElementById("lastName").value;
	cell4.innerHTML = document.getElementById("dob").value;
}