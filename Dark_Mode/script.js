const toggle = document.querySelector('.btn-container');

toggle.addEventListener('click', () => {
	if (document.body.className === 'night-mode') {
		document.body.className = '';
		toggle.style.backgroundColor = "black";
	} else {
		document.body.className = 'night-mode';
		toggle.style.backgroundColor = 'white';
	}
})