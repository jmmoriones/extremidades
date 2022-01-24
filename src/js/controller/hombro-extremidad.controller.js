import hombroExtremidades from "../vistas/hombro-extremidad.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("hombroExtremidades-container")
	divElement.innerHTML = hombroExtremidades();

	document.body.style.backgroundColor="#FFF"

	nextPresentation.href= "#/codo-extremidad"
	prevPresentation.href = "#/conoce-extremidades"
	
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