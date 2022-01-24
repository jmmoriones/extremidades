import BandaElasticaPage6 from "../vistas/bandaElasticaPage6.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("bandaElastica-container")
	divElement.innerHTML = BandaElasticaPage6();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/cuida-brazos"
	prevPresentation.href = "#/banda-elastica-page5-2"

	return divElement;
}