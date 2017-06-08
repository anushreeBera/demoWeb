/*
Creation date: 6-6-2017
Purpose:  validating the HTML page registration_form.html
File Path: D:/Git Directory/demoWeb/script.js
Created By : Anushree.
*/
alert('Hello Student, register yourself here.');
/**
* Functionality: validate the entire form before submitting it
* @params: js event
* @return: Boolean
*/
function validateForm(event)
{
	if(document.form.f_name.value == "")
	{
		alert("Enter your First Name!");
		document.form.f_name.focus();
		return false;
	}
	if(document.form.l_name.value == "")
	{
		alert("Enter your Last Name!");
		document.form.l_name.focus();
		return false;
	}
	if(document.form.fathers_first_name.value == "")
	{
		alert("Enter your Father's First Name!");
		document.form.fathers_first_name.focus();
		return false;
	}
	if(document.form.fathers_last_name.value == "")
	{
		alert("Enter your Father's Last Name!");
		document.form.fathers_last_name.focus();
		return false;
	}
	if(document.form.dob.value == "")
	{
		alert("Enter your Date of Birth!");
		document.form.dob.focus();
		return false;
	}
	if(!isEmail(document.form.email.value))
		return false;
	if(isMobileNumber(document.form.mobile_no.value))
		return false;
	if(document.form.perm_address.value == "")
	{
		alert( "Enter your Permanent Address!");
		document.form.perm_address.focus();
		return false;
	}
	if(document.form.comm_address.value == "")
	{
		alert("Enter your Communication Address!");
		document.form.comm_address.focus();
		return false;
	}
	
	if(!matchPassword())
		return false;	
	confirm('Are you sure you want to submit it?');
	event.preventDefault();
	updateStudentTable();
}
/**
* Functionality: match entered password and retyped password
* @params: null
* @return: Boolean
*/
function matchPassword()
{  
	var pass1 = document.form.password_1.value;
	var pass2 = document.form.password_2.value;  
	if(pass1 == pass2)
		return true;    
	alert("Password must be same!");
	document.form.password_1.value = null;
	document.form.password_2.value = null;
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
	document.form.number.focus();
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
* @params: String emailId
* @return: Boolean
*/
function isEmail(emailId)
{
	var atpos = emailId.indexOf("@");
	var dotpos = emailId.lastIndexOf(".");
	if(emailId == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
	{
		alert("Enter valid email ID");
		emailId.value = null;
		document.form.emailId.focus();
		return false;
	}
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
* Functionality: to activate submit button on checking i agree
* @params: Checkbox checkbox, Submit submit
* @return: null
*/
function isChecked(checkbox, submit)
{
    document.getElementById(submit).disabled = !checkbox.checked;
}