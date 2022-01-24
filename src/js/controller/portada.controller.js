import portada from "../vistas/portada.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("portada-container")
	divElement.innerHTML = portada();

	document.body.style.backgroundColor="#FFF"
	document.querySelector(".navbar").style.display="none"
	

	nextPresentation.href = "#/portada";
	prevPresentation.href = "#/";

	return divElement;
}