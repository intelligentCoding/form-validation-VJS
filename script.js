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
function checkEmail(input){
	const regix = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//use test method to check if it is valid
    if(regix.test(input.value.trim())){
		showSuccess(input)
	}else {
		showError(input, 'Email is not valid');
	}
}

function getFieldName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//required files check
function checkRequired(inputArr){
	//Go through all the inputs value in the array
	inputArr.forEach(function (input){
		if(input.value.trim() === ''){
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// check length
function checkLength(input, min, max){
	if(input.value.length < min){
		showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
	} else if (input.value.length > max){
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}
//check password match
function checkpasswordsMatch(input1, input2){
	if(input1.value != input2.value){
		showError(input2, "Password do not match");
	}
}

//add event listnet
form.addEventListener('submit', function (e){
	//stop the form from submitting
	e.preventDefault();
	//send an array to inputs to the function
	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkpasswordsMatch(password, password2);
})