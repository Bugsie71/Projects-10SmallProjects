const randomBtn = document.querySelector(".random_button");


randomBtn.addEventListener('click', (e) => {
	var minimum = document.querySelector("#min_num_input").valueAsNumber;
	var maximum = document.querySelector("#max_num_input").valueAsNumber;

	if (minimum > maximum) {
		alert('Your minimum is larger than your maxium. Please try again!')
	} else {
		alert(`Your random number is ${randomNumber(minimum, maximum)}`)
	}
})

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
};