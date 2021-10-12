let clickBtn = document.getElementById("clickBtn");
let simpleModal = document.getElementById("simpleModal");
let modalContent = document.querySelector("modal-content");
let closeIcon = document.getElementById("CloseIcon");

clickBtn.addEventListener("click", () => {
	simpleModal.style.display = "block";
});

closeIcon.addEventListener("click", () => {
	simpleModal.style.display = "none";
});

window.addEventListener("click", e => {
	if (e.target == simpleModal) {
		simpleModal.style.display = "none";
	}
});
