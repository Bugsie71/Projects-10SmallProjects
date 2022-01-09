const addBtn = document.querySelector(".add-btn");
const insert = document.querySelector('.insert-notification');

addBtn.addEventListener('click', (e) => {
	newNotificaiton();
});



function newNotificaiton() {
	const notification = document.createElement('div');
	notification.className = 'notification';
	notification.innerHTML = `
	<header>Notification</header>
	<p>This is a notification</p>
	<button class="x-btn">x</button>
	`;
	insert.append(notification);
	const xBtn = document.querySelector(".x-btn");
	notification.addEventListener("click", (e) => {
		if (e.target.className === 'x-btn') {
			selectedNotification = e.target.parentNode
			selectedNotification.remove();
		}
	});
	setTimeout(event => {
		notification.remove();
	}, 5000)
}