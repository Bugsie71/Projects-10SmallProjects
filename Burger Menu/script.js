const menuBtn = document.querySelector('.menu-btn');
const navMainContent = document.querySelector('.main-nav-content');

menuBtn.addEventListener('click', () => {
	navMainContent.classList.toggle('active');
	menuBtn.classList.toggle('active');
});

document.querySelectorAll('.main-nav a').forEach(link => {
	link.addEventListener('click', () => {
		navMainContent.classList.remove("active");
		menuBtn.classList.remove("active");
	});
})