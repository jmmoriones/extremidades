import EnCasaPage5 from "../vistas/enCasaPage5.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enCasa-container")
	divElement.innerHTML = EnCasaPage5();

	document.body.style.backgroundColor="#FFF"
	nextPresentation.href= "#/en-casa-page6"
	prevPresentation.href = "#/en-casa-page4"

	return divElement;
}