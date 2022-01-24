import conoceExtremidades from "../vistas/conoce-extremidades.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("conoceExtremidades-container")
	divElement.innerHTML = conoceExtremidades();

	document.body.style.backgroundColor="#FFF"

	nextPresentation.href= "#/hombro-extremidad"
	prevPresentation.href = "#/que-activate"

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
	  if(event.keyCode == 37){
	  	prevPresentation.click()
	  }
	  if(event.keyCode == 39){
	  	nextPresentation.click()
	  }
	},false);

	return divElement;
}