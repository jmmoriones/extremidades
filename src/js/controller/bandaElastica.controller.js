import BandaElasticaView from "../vistas/bandaElastica.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("bandaElastica-container")
	divElement.innerHTML = BandaElasticaView();
	const graphicBandaElastica1 = divElement.querySelector("#graphicBandaElastica1"),
		graphicBandaElastica2 = divElement.querySelector("#graphicBandaElastica2")

	document.body.style.backgroundColor="#FFF"	

	nextPresentation.href= "#/banda-elastica-page2"
	prevPresentation.href = "#/manten-movimientos"

	divElement.querySelector("#bandaElastica").addEventListener("mouseout", () => {
		graphicBandaElastica2.style.display="block"
		graphicBandaElastica1.style.display="none"
	}, false)
	divElement.querySelector("#bandaElastica").addEventListener("mouseover", (e) => {
		graphicBandaElastica1.style.display="block"
		graphicBandaElastica2.style.display="none"
	}, false)

	return divElement;
}