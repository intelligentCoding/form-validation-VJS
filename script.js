//bring everything from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show errors in the input
function showError(input, message){ 
	//get form-control element
	const formControl  = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}
//show if user has entered valid data
function showSuccess(input){
	const formControl  = input.parentElement;
	formControl.className = 'form-control success';
}
//check email validation
function validEmail(email){
	const regix = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//use test method to check if it is valid
    return regix.test(String(email).toLowerCase());
}
//add event listnet
form.addEventListener('submit', function (e){
	//stop the form from submitting
	e.preventDefault();

	if(username.value === ''){
		showError(username, "Username is required");
	} else {
		showSuccess(username);
	}
	//for email
	if(email.value === ''){
		showError(email, "Email is required");
	} else if (!validEmail(email)) 
	{
		showError(email, "Invalid Email");
	}else {
		showSuccess(email);
	}
	//for password
	if(password.value === ''){
		showError(password, "password is required");
	} else {
		showSuccess(password);
	}
	//password 2
	if(password2.value === ''){
		showError(password2, "You must confirm your password");
	} else {
		showSuccess(password2);
	}
})