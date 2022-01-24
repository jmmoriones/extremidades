import UsoCelularPage3 from "../vistas/usoCelularPage3.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("usoCelular-container")
	divElement.innerHTML = UsoCelularPage3();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/claro-tips-page1"
	prevPresentation.href = "#/uso-celular-page2"


	const allImage = divElement.querySelectorAll(".ucp3")
	for(let i = 0; i < allImage.length; i++){
    allImage[i].style.display="none"
    allImage[0].style.display="block"
	}
	divElement.querySelector("#usoCelularPage3").addEventListener("mouseenter", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[0].style.display="block"
	    }, 1000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[1].style.display="block"
	      divElement.querySelector(".usoCelular-content_description-message").innerHTML="REPETICIÓN 2"
	    }, 2000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[1].style.display="none"
	      allImage[2].style.display="block"
	      allImage[3].style.display="none"
	      allImage[4].style.display="none"
	      divElement.querySelector(".usoCelular-content_description-message").innerHTML="REPETICIÓN 3"
	    }, 5000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[1].style.display="none"
	      allImage[2].style.display="none"
	      allImage[3].style.display="block"
	      allImage[4].style.display="none"
	      divElement.querySelector(".usoCelular-content_description-message").innerHTML="REPETICIÓN 4"
	    }, 8000)
	    setTimeout(() => {
				allImage[i].style.display="none"
	      allImage[1].style.display="none"
	      allImage[2].style.display="none"
	      allImage[3].style.display="none"
	      allImage[4].style.display="block"
	      divElement.querySelector(".usoCelular-content_description-message").innerHTML="REPETICIÓN 5"
	    }, 11000)
		}
	}, false)
	divElement.querySelector("#usoCelularPage3").addEventListener("mouseleave", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    allImage[i].style.display="none"
	    allImage[0].style.display="block"
	    divElement.querySelector(".usoCelular-content_description-message").innerHTML="REPETICIÓN 1"
		}
	}, false)

	return divElement;
}