/* Here goes your JS code */
document.addEventListener('DOMContentLoaded', (e) => {
	const popup = document.querySelector('.popup');
	const showPopupBtn = document.querySelector('#show-popup-form');
	const closeBtn = document.querySelector('.popup__close-btn');

	showPopupBtn.addEventListener('click', () => {
		popup.classList.add('popup--show');
	});

	closeBtn.addEventListener('click', () => {
		popup.classList.remove('popup--show');
	});
});