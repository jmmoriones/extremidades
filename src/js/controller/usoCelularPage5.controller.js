import UsoCelularPage5 from "../vistas/usoCelularPage5.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("usoCelular-container")
	divElement.innerHTML = UsoCelularPage5();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/claro-tips-page1"
	prevPresentation.href = "#/uso-celular-page4"

	return divElement;
}