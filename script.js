const form = document.getElementById('form');
const username = document.getElementById('username');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const age = document.getElementById('age');
const contact = document.getElementById('contact');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const genderValue = gender.value.trim();
	const emailValue = email.value.trim();
	const ageValue = age.value.trim();
	const contactValue = contact.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(genderValue === '') {
		setErrorFor(gender, 'Gender cannot be blank');
	} else {
		setSuccessFor(gender);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(ageValue === '') {
		setErrorFor(age, 'Age cannot be blank');
	} else {
		setSuccessFor(age);
	}
	

	if(contactValue === '') {
		setErrorFor(contact, 'Contact cannot be blank');
	} else {
		setSuccessFor(contact);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}