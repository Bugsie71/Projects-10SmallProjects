let heart;

function createHeart() {
	const heart = document.createElement('div')
	heart.className = 'heart'
	heart.innerHTML = "💙";
	document.body.append(heart)

	heart.style.left = `${Math.random() * 100}vw`
	heart.style.animationDuration = `${Math.random() * 2 + 3}s`

	setTimeout((e) => {
		heart.remove()
	}, 5000)
}

setInterval(createHeart, 300)