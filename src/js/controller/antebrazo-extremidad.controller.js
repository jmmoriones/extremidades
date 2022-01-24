import antebrazoExtremidades from "../vistas/antebrazo-extremidad.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("antebrazoExtremidades-container")
	divElement.innerHTML = antebrazoExtremidades();

	document.body.style.backgroundColor="#FFF"

	nextPresentation.href= "#/munieca-extremidad"
	prevPresentation.href = "#/codo-extremidad"

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