/* Here goes your JS code */
const formValidate = form => {
	const email = form.elements['email'];
	const password = form.elements['password'];
	const rules = form.elements['rules-checkbox'];

	if(!/^.+@.+\..+$/.test(email.value)) {
		email.setCustomValidity("Invalid email address");
	} else {
		email.setCustomValidity('');
	}

	if(password.value.length < 8) {
		password.setCustomValidity('Password must contain at least 8 characters');
	} else {
		password.setCustomValidity('');
	}

	if(!rules.checked) {
		rules.setCustomValidity("Please check this box if you want to proceed");
	} else {
		rules.setCustomValidity("");
	}
	
	form.reportValidity();
}

document.addEventListener('DOMContentLoaded', (e) => {
	const popup = document.querySelector('.popup');
	const showPopupBtn = document.querySelector('#show-popup-form');
	const closeBtn = document.querySelector('.popup__close-btn');
	const form = document.querySelector('#login-form');
	const thanks = document.querySelector('#thank-you');

	showPopupBtn.addEventListener('click', () => {
		popup.classList.add('popup--show');
	});

	closeBtn.addEventListener('click', () => {
		popup.classList.remove('popup--show');
	});

	form.addEventListener('submit', e => {
		e.preventDefault();
		formValidate(form);
		if(form.checkValidity()) {
			setTimeout(() => {
				showPopupBtn.classList.add('hide');
				popup.classList.remove('popup--show');
				thanks.classList.remove('hide');
			}, 3000);
		}
	});
});