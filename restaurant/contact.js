

// javascript file for the contact form validations
function clearErrors() {   
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateForm() {
	console.log('in validate forms');
	clearErrors();
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone_number = document.forms["contactForm"]["phone_number"].value;
	var info = document.forms["contactForm"]["more_info"].value;
	var visited = document.forms["contactForm"]["visited_or_no"];
	var day = document.forms["contactForm"]["day"];
	var count = 0;

	if (name == "") {
		alert("Name must be entered");
		document.forms["contactForm"]["name"]
			.parentElement.className = "form-group has-error";
		document.forms["contactForm"]["name"].focus();
		return false;
	}
	if (email == "") {
		alert("Please enter an email address");
		document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["email"].focus();
		return false;
	}
	if (phone_number == "") {
		alert("Please enter a phone number");
		document.forms["contactForm"]["phone_number"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["phone_number"].focus();
		return false;
	}
	if (info == "") {
		alert("Please Provide some additional information");
		document.forms["contactForm"]["more_info"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["more_info"].focus();
		return false;
	}
	if (visited[0].checked == false && visited[1].checked == false) {
		alert("Please let us know if you have visited this restaurant")
		document.getElementById("radio_visit").parentElement.className = "form-group has-error";
		document.getElementById("radio_visit").focus();
		return false;
	}
	for (var i = 0; i < day.length; i++) {
		if (day[i].checked == false) {
			count++;
			console.log(count);
		}
		if (count == 5) {
			alert("Please let us know the best day to contact you")
			document.getElementById("check_days").parentElement.className = "form-group has-error";
			document.getElementById("check_days").focus();
			return false;
		};
	}
	// if (day[0].checked == false && day[1].checked == false && day[2].checked == false && day[3].checked == false && day[4].checked == false) {
	// 	alert("Please let us know the best day to contact you")
	// 	document.forms["contactForm"]["day"].parentElement.className = "form-group has-error";
	// 	document.forms["contactForm"]["day"].focus();
	// 	return false;
	// }
	document.getElementById("result").style.display = "block";
	return false;
}