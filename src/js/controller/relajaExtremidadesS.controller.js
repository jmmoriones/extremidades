import relajaExtremidadesS from "../vistas/relajaExtremidadesS.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("relajaExtremidadesS-container")
	divElement.innerHTML = relajaExtremidadesS();

	document.body.style.backgroundColor="#FFF"

	document.querySelector(".navbar").style.backgroundImage="url(img/svg/triangule-mobile.svg)"
	document.querySelector(".navbar").style.backgroundRepeat="no-repeat"
	document.querySelector(".navbar").style.backgroundPosition="center center"
	document.querySelector(".navbar").style.backgroundSize="contain"

	divElement.style.backgroundImage="url(img/svg/hojaTransparentMiddle.svg)"
	divElement.style.backgroundRepeat="no-repeat"
	divElement.style.backgroundPosition="bottom left"
	divElement.style.backgroundSize="12.5%"

	nextPresentation.href = "#/relaja-extremidades-page2";
	prevPresentation.href = "#/activa-extremidad-page10";

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