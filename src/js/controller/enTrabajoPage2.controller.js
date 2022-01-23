import EntrabajoPage2 from "../vistas/enTrabajoPage2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage2();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page3"
	prevPresentation.href = "#/en-trabajo"

	return divElement;
}