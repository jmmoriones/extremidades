import UsoCelularPage4 from "../vistas/usoCelularPage4.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("usoCelular-container")
	divElement.innerHTML = UsoCelularPage4();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/uso-celular-page5"
	prevPresentation.href = "#/uso-celular-page3"

	return divElement;
}