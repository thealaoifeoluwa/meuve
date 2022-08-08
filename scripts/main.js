const canButtons = document.querySelectorAll(".can-selector")

canButtons.forEach(canButton => {
	canButton.addEventListener("click", () => {
		const currentCan = document.querySelector(".can.scale-100")

		currentCan.classList.add("absolute")
		currentCan.classList.replace("duration-1000", "duration-0")
		currentCan.classList.replace("scale-100", "scale-0")

		const selectedCanValue = canButton.getAttribute("can")
		const selectedCan = document.querySelector(`#can-${selectedCanValue}`)

		selectedCan.classList.remove("absolute")
		selectedCan.classList.add("scale-100")
		selectedCan.classList.replace("duration-0", "duration-1000")
	})
})
