import CuidaBrazos from "../vistas/cuidaBrazos.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("cuidaBrazos-container")
	divElement.innerHTML = CuidaBrazos();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo"
	prevPresentation.href = "#/banda-elastica-page6"

	return divElement;
}