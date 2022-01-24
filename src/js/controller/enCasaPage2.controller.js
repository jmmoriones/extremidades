import EnCasaPage2 from "../vistas/enCasaPage2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enCasa-container")
	divElement.innerHTML = EnCasaPage2();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-casa-page3"
	prevPresentation.href = "#/en-casa-page1"


	const allImage = divElement.querySelectorAll(".ecp")
	for(let i = 0; i < allImage.length; i++){
    allImage[i].style.display="none"
    allImage[0].style.display="block"
	}
	divElement.querySelector("#enCasaPage2").addEventListener("mouseenter", (e) => {
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
	divElement.querySelector("#enCasaPage2").addEventListener("mouseleave", (e) => {
		for(let i = 0; i < allImage.length; i++){
	    allImage[i].style.display="none"
	    allImage[0].style.display="block"
		}
	}, false)


	return divElement;
}