import UsoCelularPage2 from "../vistas/usoCelularPage2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("usoCelular-container")
	divElement.innerHTML = UsoCelularPage2();

	document.body.style.backgroundColor="#FFF"

	document.body.classList.add("hojaBottom")

	document.querySelector(".navbar").classList.remove("triangule")
	divElement.classList.remove("trianguleHoja")

	nextPresentation.href= "#/uso-celular-page3"
	prevPresentation.href = "#/uso-celular-page1"


	const allImage = divElement.querySelectorAll(".ucp")
	for(let i = 0; i < allImage.length; i++){
    allImage[i].style.display="none"
    allImage[0].style.display="block"
	}
	divElement.querySelector("#usoCelularPage2").addEventListener("mouseenter", (e) => {
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
	divElement.querySelector("#usoCelularPage2").addEventListener("mouseleave", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    allImage[i].style.display="none"
	    allImage[0].style.display="block"
		}
	}, false)


	return divElement;
}