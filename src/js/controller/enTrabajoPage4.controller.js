import EntrabajoPage4 from "../vistas/enTrabajoPage4.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage4();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page5"
	prevPresentation.href = "#/en-trabajo-page3"

	return divElement;
}