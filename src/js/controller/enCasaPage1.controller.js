import EnCasaPage1 from "../vistas/enCasaPage1.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enCasa-container")
	divElement.innerHTML = EnCasaPage1();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-casa-page2"
	prevPresentation.href = "#/en-trabajo-page8"

	return divElement;
}