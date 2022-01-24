import UsoCelularPage1 from "../vistas/usoCelularPage1.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("usoCelular-container")
	divElement.innerHTML = UsoCelularPage1();

	document.body.style.backgroundColor="#FFF"
	document.querySelector(".navbar").classList.add("triangule")
	divElement.classList.add("trianguleHoja")

	document.body.classList.remove("hojaBottom")


	nextPresentation.href= "#/uso-celular-page2"
	prevPresentation.href = "#/en-casa-page6"
  
	return divElement;
}