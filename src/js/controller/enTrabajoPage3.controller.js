import EntrabajoPage3 from "../vistas/enTrabajoPage3.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage3();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page4"
	prevPresentation.href = "#/en-trabajo-page2"

	return divElement;
}