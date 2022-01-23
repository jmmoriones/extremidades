import EntrabajoPage5 from "../vistas/enTrabajoPage5.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage5();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page6"
	prevPresentation.href = "#/en-trabajo-page4"

	return divElement;
}