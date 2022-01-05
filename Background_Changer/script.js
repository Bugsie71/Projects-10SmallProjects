const btn = document.querySelector('#changer');

btn.addEventListener('click', () => {
	document.body.style.backgroundColor = randomRGB();
})

function randomRGB() {
	let rgb = `rgb(${randomNum256()}, ${randomNum256()}, ${randomNum256()})`
	return rgb
}

function randomNum256() {
	let num = Math.random() * 256
	return num
}