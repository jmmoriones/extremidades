import EnCasaPage3 from "../vistas/enCasaPage3.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enCasa-container")
	divElement.innerHTML = EnCasaPage3();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-casa-page4"
	prevPresentation.href = "#/en-casa-page2"

	return divElement;
}