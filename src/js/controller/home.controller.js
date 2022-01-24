import home from "../vistas/home.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("container-space")
	divElement.innerHTML = home();
	document.body.style.backgroundColor="#cddefc46"
	nextPresentation.href= "#/que-activate"
	prevPresentation.href= "#/"
	document.querySelector(".navbar").style.display="flex"
	document.querySelector(".navbar").style.backgroundImage="none"
	document.querySelector(".navbar").style.backgroundRepeat="inherit"
	document.querySelector(".navbar").style.backgroundPosition="inherit"
	document.querySelector(".navbar").style.backgroundSize="inherit"
	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if(event.keyCode == 39){
	  	window.location.href= "#/que-activate"
	  }
	},false);
	
	return divElement;
}


/*nextPresentation.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("Next Presentation")
})
prevPresentation.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("Prev Presentation")
})*/