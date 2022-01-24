import EntrabajoPage7 from "../vistas/enTrabajoPage7.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage7();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page8"
	prevPresentation.href = "#/en-trabajo-page6"

	return divElement;
}