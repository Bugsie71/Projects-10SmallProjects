const alert = document.querySelector('.alert-container');
const alertBtn = document.querySelector('#alert-btn-container');
const okBtn = document.querySelector('#ok-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const xBtn = document.querySelector('#x-btn');


alertBtn.addEventListener('click', () => {
	alert.style.display = 'flex';
	alertBtn.style.display = 'none';
	document.body.style.backgroundColor = 'rgba(0, 0, 0, .1)';
});

okBtn.addEventListener('click', () => {
	alert.style.display = '';
	alertBtn.style.display = '';
	document.body.style.backgroundColor = '';
});

cancelBtn.addEventListener('click', () => {
	alert.style.display = '';
	alertBtn.style.display = '';
	document.body.style.backgroundColor = '';
});

xBtn.addEventListener('click', () => {
	alert.style.display = '';
	alertBtn.style.display = '';
	document.body.style.backgroundColor = '';
});