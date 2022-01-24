import EntrabajoPage6 from "../vistas/enTrabajoPage6.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enTrabajo-container")
	divElement.innerHTML = EntrabajoPage6();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-trabajo-page7"
	prevPresentation.href = "#/en-trabajo-page5"

	return divElement;
}