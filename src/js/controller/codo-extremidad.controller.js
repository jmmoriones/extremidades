import codoExtremidades from "../vistas/codo-extremidad.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("codoExtremidades-container")
	divElement.innerHTML = codoExtremidades();

	document.body.style.backgroundColor="#FFF"

	nextPresentation.href= "#/antebrazo-extremidad"
	prevPresentation.href = "#/hombro-extremidad"

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