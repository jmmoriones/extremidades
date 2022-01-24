import activaExtremidadSPage10 from "../vistas/activaExtremidadSPage10.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("activaExtremidadS-container")
	divElement.innerHTML = activaExtremidadSPage10();

	document.body.style.backgroundColor="#FFF"	

	document.querySelector(".navbar").style.backgroundImage=""
	document.querySelector(".navbar").style.backgroundRepeat=""
	document.querySelector(".navbar").style.backgroundPosition=""
	document.querySelector(".navbar").style.backgroundSize=""

	nextPresentation.href= "#/relaja-extremidades"
	prevPresentation.href = "#/activa-extremidad-page9"

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