import cuidarExtremidades from "../vistas/cuidar-extremidades.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("cuidarExtremidades-container")
	divElement.innerHTML = cuidarExtremidades();

	document.body.style.backgroundColor="#cddefc46"

	nextPresentation.href= "#/activa-extremidad"
	prevPresentation.href = "#/munieca-extremidad"

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