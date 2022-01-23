import activaExtremidadSPage2 from "../vistas/activaExtremidadSPage2.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("activaExtremidadS-container")
	divElement.innerHTML = activaExtremidadSPage2();
	const antesDePracticar = divElement.querySelector("#antesDePracticar .antesDePracticar-img")
	document.body.style.backgroundColor="#FFF"	

	nextPresentation.href= "#/activa-extremidad-page3"
	prevPresentation.href = "#/activa-extremidad"

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
	  if(event.keyCode == 37){
	  	prevPresentation.click()
	  }
	  if(event.keyCode == 39){
	  	nextPresentation.click()
	  }
	},false);

	divElement.querySelector("#antesDePracticar").addEventListener("mouseout", () => {
		antesDePracticar.style.width=""
		antesDePracticar.src="./img/svg/menAntesDePracticar.svg"
	}, false)
	divElement.querySelector("#antesDePracticar").addEventListener("mouseover", (e) => {
		antesDePracticar.style.width="32.05%"
		antesDePracticar.src="./img/svg/menAntesDePracticar2.svg"
	}, false)


	return divElement;
}