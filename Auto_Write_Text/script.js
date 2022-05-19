const text = "Lorem ipsum dolor sit amet!"
const textHere = document.querySelector(".text_here");

let i = 0;

function autoWriteText() {
	textHere.innerHTML += text[i];
	i++;
	if (i > text.length) {
		i = 0
		textHere.innerHTML = ''
	}
}

setInterval(autoWriteText, 100)