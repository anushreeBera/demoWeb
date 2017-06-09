/*
Creation date: 6-6-2017
Purpose:  validating the HTML page registration_form.html
File Path: D:/Git Directory/demoWeb/javascript/script.js
Created By : Anushree.
*/
alert('Hello Student, register yourself here.');
/**
* Functionality: activate submit button on click of i agree
* @params: null
* @return: null
*/
function activateSubmit()
{
	if(document.getElementById("iAgree").checked == true)
		document.form.submit.disabled = false;
	else if(document.getElementById("iAgree").checked == false)
		document.form.submit.disabled = true;
}
/**
* Functionality: validate the entire form before submitting it
* @params: null
* @return: Boolean
*/
function validateForm()
{
	if(document.form.fName.value == "")
	{
		alert("Enter your First Name!");
		document.form.fName.focus();
		return false;
	}
	if(document.form.lName.value == "")
	{
		alert("Enter your Last Name!");
		document.form.lName.focus();
		return false;
	}
	if(document.form.fathersFirstName.value == "")
	{
		alert("Enter your Father's First Name!");
		document.form.fathersFirstName.focus();
		return false;
	}
	if(document.form.fathersLastName.value == "")
	{
		alert("Enter your Father's Last Name!");
		document.form.fathersLastName.focus();
		return false;
	}
	if(document.form.dob.value == "")
	{
		alert("Enter your Date of Birth!");
		document.form.dob.focus();
		return false;
	}
	if(document.form.email.value == "")
	{
		alert("Enter your Email ID!");
		document.form.email.focus();
		return false;
	}
	if(document.form.mobileNo.value == "")
	{
		alert("Enter your Mobile Number!");
		document.form.mobileNo.focus();
		return false;
	}
	var address = document.form.permAddress;
	if(trimfield(address.value) == "")
	{
		alert( "Enter your Permanent Address!");
		document.form.permAddress.focus();
		return false;
	}
	address = document.form.commAddress;
	if(trimfield(address.value) == "")
	{
		alert("Enter your Communication Address!");
		document.form.commAddress.focus();
		return false;
	}
	if(document.form.username.value == "")
	{
		alert("Enter your username in aplphanumerics{[a-z],[A-Z],[0-9]} only!");
		document.form.username.focus();
		return false;
	}
	if(document.form.password1.value == "")
	{
		alert("Enter a password for your account!");
		document.form.password1.focus();
		return false;
	}
	if(document.form.password2.value == "")
	{
		alert("Confirm your password here!");
		document.form.password2.focus();
		return false;
	}
	if(document.form.iAgree.checked == false)
	{
		alert("You need to agree with the terms and conditions!");
		document.form.iAgree.focus();
		return false;	
	}
	confirm('Are you sure you want to submit it?');
	updateStudentTable();
}
/**
* Functionality: match entered password and retyped password
* @params: null
* @return: Boolean
*/
function matchPassword()
{  
	var pass1 = document.form.password1.value;
	var pass2 = document.form.password2.value;  
	if(pass1 == pass2)
		return true;    
	alert("Password must be same!");
	document.form.password1.value = null;
	document.form.password2.value = null;
	return false;  	  
}
/**
* Functionality: check for name fields if entered text is contains only alphabets
* @params: String text
* @return: Boolean
*/
function isAlpha(text)  
{  
   var lettersPattern = /^[a-z]+$/i;
   if(text.value.match(lettersPattern))
      return true;
    alert("Alphabets only!");
	text.value = null;
	document.form.text.focus();
    return false;
}
/**
* Functionality: validate 10 digit mobile number
* @params: Number number
* @return: Boolean
*/
function isMobileNumber(number)
{
	var numberPattern = /^\d{10}$/;
	if(number.value.match(numberPattern) && number.value > 0)
		return true;
	alert("Please enter 10 digit mobile number!");
	number.value = null;
	number.focus();
	return false;
}
/**
* Functionality: validate username field which should be alphanumeric only
* @params: String text
* @return: Boolean
*/
function isAlphaNumeric(username)
{
	var alphaNumericPattern = /^[a-z0-9]+$/i;
	if(username.value.match(alphaNumericPattern))
		return true;
	alert("Only alphabet characters (A-Z or a-z) and numbers (0-9) are allowed!");
	username.value = null;
	document.form.username.focus();
	return false;
}
/**
* Functionality: validate email id type entered by the user
* @params: String email
* @return: Boolean
*/

function isEmail(email)
{
	//var em = String(document.getElementById("email"));
	//alert(typeof email);
	var emailPattern = /^[a-z0-9]+$/i;	//dummy regex
	if(email.value.match(emailPattern))
		return true;	
	alert("Enter valid email ID");
	email.value = null;
	email.focus();
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
/**
* Functionality: to trim the textarea before checking for empty
* @params: String string
* @return: String
*/
function trimfield(string) 
{ 
    return string.replace(/^\s+|\s+$/g,''); 
}