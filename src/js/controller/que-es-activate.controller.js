import queEsActivate from "../vistas/que-es-activate.view.js"
export default () => {
	//document.querySelectorAll(".queEsActivate-content_description-text")[2].textContent
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")

	divElement.classList.add("queEsActivate-container")
	divElement.innerHTML = queEsActivate();
	const audioQueEsActivate = divElement.querySelector("#audioQueEsActivate"),
		audioSlide3 = divElement.querySelector("#audio1Slide3")
	document.body.style.backgroundColor="#FFF"
	nextPresentation.href = "javascript:void(0)";
	prevPresentation.href = "javascript:void(0)";
	audioSlide3.play()
	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
	  if(event.keyCode == 37){
	  	prevPresentation.click()
	  }
	  if(event.keyCode == 39){
	  	nextPresentation.click()
	  }
	},false);
	audioSlide3.addEventListener("ended", (e) => {
		console.log(e);
		nextPresentation.href = "#/conoce-extremidades"
		prevPresentation.href = "#/"
		window.addEventListener("keydown", function (event) {
			// 37 = Atras, 39 = Adelante
		  if(event.keyCode == 37){
		  	prevPresentation.click()
		  }
		  if(event.keyCode == 39){
		  	nextPresentation.click()
		  }
		},false);
		console.log("Termino el Audio")
	})
	
	audioQueEsActivate.addEventListener("click", (e) => {
		//textFadeOut
		e.preventDefault()
		if(audioSlide3.paused == true){
			audioSlide3.play()
			divElement.querySelector("#audioQueEsActivate img").style.animationName="smallToNormalIn"
			divElement.querySelector("#audioQueEsActivate img").style.animationDuration=".1s"
			divElement.querySelector("#audioQueEsActivate img").src="img/svg/soundButton2.svg"
		}else if(audioSlide3.paused == false){
			audioSlide3.pause()
			divElement.querySelector("#audioQueEsActivate img").style.animationName="smallToNormalOut"
			divElement.querySelector("#audioQueEsActivate img").style.animationDuration=".1s"
			divElement.querySelector("#audioQueEsActivate img").src="img/svg/soundButton.svg"
		}
	})

	return divElement;
}