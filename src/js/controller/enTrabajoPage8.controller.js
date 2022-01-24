import EntrabajoPage8 from "../vistas/enTrabajoPage8.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage8();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-casa-page1"
	prevPresentation.href = "#/en-trabajo-page7"

	return divElement;
}