import EnCasaPage6 from "../vistas/enCasaPage6.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("enCasa-container")
	divElement.innerHTML = EnCasaPage6();

	document.body.style.backgroundColor="#FFF"
	document.querySelector(".navbar").classList.remove("triangule")
	nextPresentation.href= "#/uso-celular-page1"
	prevPresentation.href = "#/en-casa-page5"

	return divElement;
}