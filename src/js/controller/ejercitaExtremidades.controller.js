import ejercitaExtremidadesView from "../vistas/ejercitaExtremidades.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("ejercitaExtremidades-container")
	divElement.innerHTML = ejercitaExtremidadesView();

	document.body.style.backgroundColor="#FFF"
	document.querySelector(".navbar").style.backgroundImage=""
	document.querySelector(".navbar").style.backgroundRepeat=""
	document.querySelector(".navbar").style.backgroundPosition=""
	document.querySelector(".navbar").style.backgroundSize=""

	divElement.style.backgroundImage=""
	divElement.style.backgroundRepeat=""
	divElement.style.backgroundPosition=""
	divElement.style.backgroundSize=""

	nextPresentation.href = "#/elige-goma";
	prevPresentation.href = "#/relaja-extremidades-page10";

	return divElement;
}