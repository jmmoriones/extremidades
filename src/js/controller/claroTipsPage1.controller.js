import ClaroTipsPage1 from "../vistas/claroTipsPage1.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("claroTips-container")
	divElement.innerHTML = ClaroTipsPage1();

	document.body.style.backgroundColor="#FFF"

	nextPresentation.href= "#/claro-tips-page2"
	prevPresentation.href = "#/uso-celular-page3"
  
	return divElement;
}