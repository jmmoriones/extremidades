import activaExtremidadSPage9 from "../vistas/activaExtremidadSPage9.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("activaExtremidadS-container")
	divElement.innerHTML = activaExtremidadSPage9();

	document.body.style.backgroundColor="#FFF"	

	nextPresentation.href= "#/activa-extremidad-page10"
	prevPresentation.href = "#/activa-extremidad-page8"

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