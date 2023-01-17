const modalBtns = document.querySelectorAll('[data-modal-open], [data-modal-close]');

modalBtns.forEach(btn => {
	btn.addEventListener('click', event => {
		toggleModal(event);
	});
});

function toggleModal(event) {
	var dataValue = event.target.getAttribute('data-btn');
    console.log(event.target.getAttribute('class'));
    console.log(dataValue);

	var modal = document.querySelector("[data-modal=" + dataValue + "]");
	modal.classList.toggle("is-hidden");
}