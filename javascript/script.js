/*
Creation date: 6-6-2017
Purpose:  validating the HTML page registration_form.html
File Path: D:/Git Directory/demoWeb/javascript/script.js
Created By : Anushree.
*/
alert('Hello Student, register yourself here.');
var formData = document.createElement("FORM");
var usersArray = [];
var studentsNumber = 0;
var s, flag = 0;
var sl=0, temp;     //sl is serial no and temp is required to copy serial no value while update function is in use so that sl still holds the value of last row
/**
* Functionality: activate submit button on click of i agree
* @params: null
* @return: null
*/
function activateSubmit()
{
	document.form.submit.disabled = document.getElementById("iAgree").checked ? false : true;
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
	updateStudentTable() ;
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
* @params: String text //description
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
	if(studentsNumber != 0)
	{
		for(var loopIterator = 0;loopIterator < studentsNumber;loopIterator++)
		{
			if(usersArray[loopIterator].username === document.getElementById("userName").value)
				return alert("This Username is already taken.");
		}
	}
	var userObj = {}
	var formCollection = document.getElementById("form").elements;
	var totalFields = formCollection.length;
	$.each(formCollection, function(index, item){
		userObj[formCollection[index].name] = formCollection[index].value;
	});	
	usersArray.push(userObj);						// OR userArray[studentsNumber] = userObj;

	if(flag == 1) 									//if update function has been called then flag will be set to 1, see update function
	{   
        temp = s;                                   //s value copied to temp as s stores the serial no/index of the row it is editing
        var row = studentTable.deleteRow(temp);     //Delete the particular row
        row = studentTable.insertRow(temp);         //Insert new row in the same location
        var cell0 = row.insertCell(0);              //Insert new cell at cell no. 0
        cell0.id = temp;                            //Sets ID same as serial no. as our serial is used internally as index of the table
        var cell1 = row.insertCell(1);
        cell1.id = temp + "username";               //ID is set as "indexname" format ex: "4username" so each cell has unique id based on its row and cell content
        var cell2 = row.insertCell(2);
        cell2.id = temp + "fName";
        var cell3 = row.insertCell(3);
        cell3.id = temp + "lName";
		var cell4 = row.insertCell(4);
        cell4.id = temp + "dob";
        var cell5 = row.insertCell(5);
        cell5.innerHTML = '<input type="button" name="update" id="updateButton" value="Update" onclick = "update(' + sl + ')">';  //Dynamically creates the update button and assigns the onclick as update(index), sl is the index
        var cell6 = row.insertCell(6);
        cell6.innerHTML = '<input type="button" name="delete" id="deleteButton" value="Delete" onclick = "delete(' + sl + ')">';
		cell0.innerHTML = temp;                                                                  //Assigns previous serial no
        cell1.innerHTML = document.getElementById("username").value;                            //Assigns username
        cell2.innerHTML = document.getElementById("fName").value;
        cell3.innerHTML = document.getElementById("lName").value;
		cell4.innerHTML = document.getElementById("dob").value;
        flag = 0;                                          //As update operation ends it sets flag to zero so that a new table row could be added
    }
	else												//if at all it is not an update operation then by default the global variable flag is set to zero in update function
	{               
        sl++;                       			//normal table update action...increases the index
        var row= studentTable.insertRow(sl);	//new row
		var cell0 = row.insertCell(0);       	//new column
		cell0.id = sl;                      	//set cell ID same as serial/index
		var cell1 = row.insertCell(1);
		cell1.id = sl + "name";             	//unique cell id as of row.no and content described above
		var cell2 = row.insertCell(2);
		cell2.id = sl + "roll";
		var cell3 = row.insertCell(3);
		cell3.id = sl+ "class";
		var cell4 = row.insertCell(4);
		var cell5 = row.insertCell(5);
		var cell6 = row.insertCell(6);
		cell0.innerHTML = sl;
		cell1.innerHTML = usersArray[studentsNumber].username;
		cell2.innerHTML = usersArray[studentsNumber].fName;
		cell3.innerHTML = usersArray[studentsNumber].lName;
		cell4.innerHTML = usersArray[studentsNumber].dob;
		cell5.innerHTML = '<input type="button" name="update" id="updateButton" value="Update" onclick="updateEntry(' + sl + ')">';		//dynamic allocation of button
		cell6.innerHTML = '<input type="button" name="delete" id="deleteButton" value="Delete" onclick="deleteEntry(' + sl + ')">';
		studentsNumber++;
	}
	
	/*
	if(studentsNumber != 0)
	{
		for(var loopIterator = 0;loopIterator < studentsNumber;loopIterator++)
		{
			if(usersArray[loopIterator].username === document.getElementById("userName").value)
				return alert("This Username is already taken.");
		}
	}
	
	var userObj = {}
	var formCollection = document.getElementById("form").elements;
	var totalFields = formCollection.length;
	$.each(formCollection, function(index, item){
		userObj[formCollection[index].name] = formCollection[index].value;
	});
	
	usersArray.push(userObj);// OR userArray[studentsNumber] = userObj;
		
	var row = studentTable.insertRow(1);                      
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	cell1.innerHTML = usersArray[studentsNumber].username;
	cell2.innerHTML = usersArray[studentsNumber].fName + " " + usersArray[studentsNumber].mName;
	cell3.innerHTML = usersArray[studentsNumber].lName;
	cell4.innerHTML = usersArray[studentsNumber].dob;
	cell5.innerHTML = '<input type="button" name="update" id="updateButton" value="Update" onclick="updateEntry(' + sl + ')">';		//dynamic allocation of button
	cell6.innerHTML = '<input type="button" name="delete" id="deleteButton" value="Delete" onclick="deleteEntry(' + sl + ')">';
	studentsNumber++;
	*/
}
/**
* Functionality: to update 's'th form fields on click of update button
* @params: Number s 
* @return: null
*/
function updateEntry(s)   
{   
	flag =  1;            // Sets flag = 1 so that it can ensure that control has entered into update and hence that particular line in the table would be edited
    window.s = s;       // Sets s as a global variable so that it could be used as the table row pointer--> 
    document.form.username.value = usersArray[s].username; 
    document.form.fName.value =  usersArray[s].fName;
    document.form.lName.value = usersArray[s].lName;   // s + lName gives the s value concatenated with the lName to make the id of the particular cell
	document.form.dob.value = usersArray[s].dob;
	studentsNumber++;
}
/**
* Functionality: to delete the 's'th row in table on click of delete button
* @params: Number s 
* @return: null
*/
function deleteEntry(s)   
{
	var rowCount = studentTable.rows.length;
	
	studentTable.deleteRow(s);
	studentsNumber--;	
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