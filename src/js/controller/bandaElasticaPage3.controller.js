import BandaElasticaPage3View from "../vistas/bandaElasticaPage3.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("bandaElastica-container")
	divElement.innerHTML = BandaElasticaPage3View();
	const graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage3-1"),
		graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage3-2")

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/banda-elastica-page4"
	prevPresentation.href = "#/banda-elastica-page2"
	const allImage = divElement.querySelectorAll(".gpb")
	for(let i = 0; i < allImage.length; i++){
    allImage[i].style.display="none"
    allImage[0].style.display="block"
	}
	divElement.querySelector("#bandaElasticaPage3").addEventListener("mouseenter", (e) => {
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
	divElement.querySelector("#bandaElasticaPage3").addEventListener("mouseleave", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    allImage[i].style.display="none"
	    allImage[0].style.display="block"
		}
	}, false)

	return divElement;
}