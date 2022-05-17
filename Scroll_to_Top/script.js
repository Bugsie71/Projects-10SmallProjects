const button = document.querySelector("#top_page_btn")

window.addEventListener("scroll", (e) => {
	if (window.pageYOffset > 100) {
		button.classList.add("active");
	} else {
		button.classList.remove("active");
	}
})