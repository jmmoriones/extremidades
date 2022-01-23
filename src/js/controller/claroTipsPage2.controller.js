import ClaroTipsPage2 from "../vistas/claroTipsPage2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("claroTips-container")
	divElement.innerHTML = ClaroTipsPage2();

	document.body.style.backgroundColor="#FFF"

	nextPresentation.href= "#/claro-tips-page3"
	prevPresentation.href = "#/claro-tips-page1"

	divElement.style.backgroundImage="none"
	divElement.style.backgroundRepeat="inherit"
	divElement.style.backgroundSize="inherit"
	divElement.style.backgroundPosition="inherit"
  
	return divElement;
}