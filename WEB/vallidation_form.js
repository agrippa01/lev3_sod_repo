function validation()
{

	if(document.Myform.Name.value=="")
	{
		alert("please enter your Name!!");
		document.Myform.Name.focus();
		return false;

	}
	if(document.Myform.Email.value==""){
		alert("please enter your Email!!");
		document.Myform.Email.focus();
		return false;
		
	}
	if(document.Myform.Zip.value==""||isNaN(document.Myform.Zip.value)
		||document.Myform.Zip.length!=5)
	{
		alert("please provide zip in format of five digit")
		document.Myform.Zip.focus();
		return false;
	}
	if (document.Myform.country.value=="-1") 
	{
		alert("please provide your country!!") 
		document.Myform.country.focus();
		return false;
	}
	return (true);
}