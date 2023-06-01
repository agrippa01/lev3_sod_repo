

function validate(){
	if(document.registration.name.value == ""){
		alert("Please Provide Your Name!!");
		document.registration.name.focus();
		return false;
	}

	if(document.registration.email.value == ""){
		alert("please provide your email!!");
		document.registration.email.focus();
		return false;
	}

	if(document.registration.Age.value==""||isNaN(document.registration.Age.value)||document.registration.Age.value.length!=2){
		alert("please provide Age in format of two digit")
	document.registration.Age.value.focus();
	return false;
	}

	if(document.registration.combination.value == "-1"){
		alert("please choose your combination!!");
		document.registration.country.focus();
		return false;
	}

	return(true);
}