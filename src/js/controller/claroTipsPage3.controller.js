import ClaroTipsPage3 from "../vistas/claroTipsPage3.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("claroTips-container")
	divElement.innerHTML = ClaroTipsPage3();

	document.body.style.backgroundColor="#FFF"

	divElement.style.backgroundImage="none"
	divElement.style.backgroundRepeat="inherit"
	divElement.style.backgroundSize="inherit"
	divElement.style.backgroundPosition="inherit"


	nextPresentation.href= "#/claro-tips-page4"
	prevPresentation.href = "#/claro-tips-page2"
  
	return divElement;
}