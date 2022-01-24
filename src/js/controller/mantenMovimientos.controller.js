import mantenMovimientosView from "../vistas/mantenMovimientos.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("mantenMovimientos-container")
	divElement.innerHTML = mantenMovimientosView();

	document.body.style.backgroundColor="#FFF"

	document.querySelector(".navbar").style.backgroundImage=""
	document.querySelector(".navbar").style.backgroundRepeat=""
	document.querySelector(".navbar").style.backgroundPosition=""
	document.querySelector(".navbar").style.backgroundSize=""

	divElement.style.backgroundImage=""
	divElement.style.backgroundRepeat=""
	divElement.style.backgroundPosition=""
	divElement.style.backgroundSize=""

	nextPresentation.href = "#/banda-elastica";
	prevPresentation.href = "#/elige-goma";

	return divElement;
}