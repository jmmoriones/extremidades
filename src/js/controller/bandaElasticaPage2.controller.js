import BandaElasticaPage2View from "../vistas/bandaElasticaPage2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("bandaElastica-container")
	divElement.innerHTML = BandaElasticaPage2View();
	const graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage2-1"),
		graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage2-2"),
		graphicBandaElastica3 = divElement.querySelector("#graphicBandaElasticaPage2-3"),
		graphicBandaElastica4 = divElement.querySelector("#graphicBandaElasticaPage2-4")

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/banda-elastica-page3"
	prevPresentation.href = "#/banda-elastica"
	const allImage = divElement.querySelectorAll(".gpb")
	for(let i = 0; i < allImage.length; i++){
    allImage[i].style.display="none"
    allImage[0].style.display="block"
	}
	divElement.querySelector("#bandaElasticaPage2").addEventListener("mouseenter", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[0].style.display="block"
	    }, 1000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[1].style.display="block"
	    }, 2000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[2].style.display="block"
	    }, 3000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[3].style.display="block"
	    }, 4000)
		}
	}, false)
	divElement.querySelector("#bandaElasticaPage2").addEventListener("mouseleave", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    allImage[i].style.display="none"
	    allImage[0].style.display="block"
		}
	}, false)

	return divElement;
}