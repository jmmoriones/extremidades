import BandaElasticaPage5Parte2View from "../vistas/bandaElasticaPage5Parte2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("bandaElastica-container")
	divElement.innerHTML = BandaElasticaPage5Parte2View();
	const graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage5-3"),
		graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage5-4"),
		bandasElasticasLists = divElement.querySelector("#bandasElasticasLists")

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/banda-elastica-page6"
	prevPresentation.href = "#/banda-elastica-page5"
	const allImage = divElement.querySelectorAll(".gpb")
	for(let i = 0; i < allImage.length; i++){
    allImage[i].style.display="none"
    allImage[0].style.display="block"
	}
	divElement.querySelector("#bandaElasticaPage5").addEventListener("mouseenter", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[0].style.display="block"
	    }, 1000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[1].style.display="block"
	    }, 2000)
		}
	}, false)
	divElement.querySelector("#bandaElasticaPage5").addEventListener("mouseleave", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    allImage[i].style.display="none"
	    allImage[0].style.display="block"
		}
	}, false)

	return divElement;
}