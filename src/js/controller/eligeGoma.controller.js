import eligeGomaView from "../vistas/eligeGoma.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("eligeGoma-container")
	divElement.innerHTML = eligeGomaView();

	document.body.style.backgroundColor="#FFF"
	document.querySelector(".navbar").style.backgroundImage=""
	document.querySelector(".navbar").style.backgroundRepeat=""
	document.querySelector(".navbar").style.backgroundPosition=""
	document.querySelector(".navbar").style.backgroundSize=""

	divElement.style.backgroundImage=""
	divElement.style.backgroundRepeat=""
	divElement.style.backgroundPosition=""
	divElement.style.backgroundSize=""

	nextPresentation.href = "#/manten-movimientos";
	prevPresentation.href = "#/ejercita-extremidades";

	return divElement;
}