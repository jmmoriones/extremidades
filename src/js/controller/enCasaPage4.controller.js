import EnCasaPage4 from "../vistas/enCasaPage4.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enCasa-container")
	divElement.innerHTML = EnCasaPage4();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-casa-page5"
	prevPresentation.href = "#/en-casa-page3"

	return divElement;
}