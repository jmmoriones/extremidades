import Entrabajo from "../vistas/enTrabajo.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = Entrabajo();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page2"
	prevPresentation.href = "#/cuida-brazos"

	return divElement;
}