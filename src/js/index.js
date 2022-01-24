//queEsActivate = require("./vistas/que-es-activate.html")
import queEsActivate from "./vistas/error.view.js"
((d, w, c) => {
	//import {pages} from "./controller/index.js"
	const actPopup = d.querySelector("#actPopup"),
		popupHowToFunction = d.querySelector("#popupHowToFunction"),
		linkHowToFunction = d.querySelector("#linkHowToFunction"),
		rootDashboard = d.getElementById("rootDashboard"),
		{pages} = require("./controller/index.js")
	actPopup.addEventListener("click", (e) => {
		e.preventDefault()
		popupHowToFunction.classList.toggle("addAnimation")
	})
	linkHowToFunction.addEventListener("click", (e) => {
		e.preventDefault()
		popupHowToFunction.classList.toggle("addAnimation")
	})
	const routes = (route) => {
		rootDashboard.innerHTML = "";
		switch(route){
			case "#/":{
				return rootDashboard.appendChild( pages.Portada() )
			}
			case "#/portada":{
				return rootDashboard.appendChild( pages.Home() )
			}
			case "#/que-activate":{
				return rootDashboard.appendChild( pages.QueEsActivate() )
			}
			case "#/conoce-extremidades":{
				return rootDashboard.appendChild( pages.ConoceExtremidades() )
			}
			case "#/hombro-extremidad":{
				return rootDashboard.appendChild( pages.HombroExtremidad() )
			}	
			case "#/codo-extremidad":{
				return rootDashboard.appendChild( pages.CodoExtremidad() )
			}
			case "#/antebrazo-extremidad":{
				return rootDashboard.appendChild( pages.AntebrazoExtremidad() )
			}
			case "#/munieca-extremidad":{
				return rootDashboard.appendChild( pages.MuniecaExtremidad() )
			}
			case "#/cuidar-extremidades":{
				return rootDashboard.appendChild( pages.CuidarExtremidades() )
			}
			case "#/activa-extremidad":{
				return rootDashboard.appendChild( pages.ActivaExtremidadS() )
			}
			case "#/activa-extremidad-page2":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage2() )
			}
			case "#/activa-extremidad-page3":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage3() )
			}
			case "#/activa-extremidad-page4":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage4() )
			}
			case "#/activa-extremidad-page5":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage5() )
			}
			case "#/activa-extremidad-page6":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage6() )
			}
			case "#/activa-extremidad-page7":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage7() )
			}
			case "#/activa-extremidad-page8":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage8() )
			}
			case "#/activa-extremidad-page9":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage9() )
			}
			case "#/activa-extremidad-page10":{
				return rootDashboard.appendChild( pages.ActivaExtremidadSPage10() )
			}
			case "#/relaja-extremidades":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesS() )
			}
			case "#/relaja-extremidades-page2":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage2() )
			}
			case "#/relaja-extremidades-page3":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage3() )
			}
			case "#/relaja-extremidades-page4":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage4() )
			}
			case "#/relaja-extremidades-page5":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage5() )
			}
			case "#/relaja-extremidades-page6":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage6() )
			}
			case "#/relaja-extremidades-page7":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage7() )
			}
			case "#/relaja-extremidades-page8":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage8() )
			}
			case "#/relaja-extremidades-page9":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage9() )
			}
			case "#/relaja-extremidades-page10":{
				return rootDashboard.appendChild( pages.RelajaExtremidadesSPage10() )
			}
			case "#/ejercita-extremidades":{
				return rootDashboard.appendChild( pages.EjercitaExtremidades() )
			}
			case "#/elige-goma":{
				return rootDashboard.appendChild( pages.EligeGoma() )
			}
			case "#/manten-movimientos":{
				return rootDashboard.appendChild( pages.MantenMovimientos() )
			}
			case "#/banda-elastica":{
				return rootDashboard.appendChild( pages.BandaElastica() )
			}
			case "#/banda-elastica-page2":{
				return rootDashboard.appendChild( pages.BandaElasticaPage2() )
			}
			case "#/banda-elastica-page3":{
				return rootDashboard.appendChild( pages.BandaElasticaPage3() )
			}
			case "#/banda-elastica-page4":{
				return rootDashboard.appendChild( pages.BandaElasticaPage4() )
			}
			case "#/banda-elastica-page4-2":{
				return rootDashboard.appendChild( pages.BandaElasticaPage4Parte2() )
			}
			case "#/banda-elastica-page5":{
				return rootDashboard.appendChild( pages.BandaElasticaPage5() )
			}
			case "#/banda-elastica-page5-2":{
				return rootDashboard.appendChild( pages.BandaElasticaPage5Parte2() )
			}
			case "#/banda-elastica-page6":{
				return rootDashboard.appendChild( pages.BandaElasticaPage6() )
			}
			case "#/cuida-brazos":{
				return rootDashboard.appendChild( pages.CuidaBrazos() )
			}
			case "#/en-trabajo":{
				return rootDashboard.appendChild( pages.EnTrabajo() )
			}
			case "#/en-trabajo-page2":{
				return rootDashboard.appendChild( pages.EnTrabajoPage2() )
			}
			case "#/en-trabajo-page3":{
				return rootDashboard.appendChild( pages.EnTrabajoPage3() )
			}
			case "#/en-trabajo-page4":{
				return rootDashboard.appendChild( pages.EnTrabajoPage4() )
			}
			case "#/en-trabajo-page5":{
				return rootDashboard.appendChild( pages.EnTrabajoPage5() )
			}
			case "#/en-trabajo-page6":{
				return rootDashboard.appendChild( pages.EnTrabajoPage6() )
			}
			case "#/en-trabajo-page7":{
				return rootDashboard.appendChild( pages.EnTrabajoPage7() )
			}
			case "#/en-trabajo-page8":{
				return rootDashboard.appendChild( pages.EnTrabajoPage8() )
			}
			case "#/en-casa-page1":{
				return rootDashboard.appendChild( pages.EnCasaPage1() )
			}
			case "#/en-casa-page2":{
				return rootDashboard.appendChild( pages.EnCasaPage2() )
			}
			case "#/en-casa-page3":{
				return rootDashboard.appendChild( pages.EnCasaPage3() )
			}
			case "#/en-casa-page4":{
				return rootDashboard.appendChild( pages.EnCasaPage4() )
			}
			case "#/en-casa-page5":{
				return rootDashboard.appendChild( pages.EnCasaPage5() )
			}
			case "#/en-casa-page6":{
				return rootDashboard.appendChild( pages.EnCasaPage6() )
			}



			case "#/uso-celular-page1":{
				return rootDashboard.appendChild( pages.UsoCelularPage1() )
			}
			case "#/uso-celular-page2":{
				return rootDashboard.appendChild( pages.UsoCelularPage2() )
			}
			case "#/uso-celular-page3":{
				return rootDashboard.appendChild( pages.UsoCelularPage3() )
			}
			case "#/claro-tips-page1":{
				return rootDashboard.appendChild( pages.ClaroTipsPage1() )
			}
			case "#/claro-tips-page2":{
				return rootDashboard.appendChild( pages.ClaroTipsPage2() )
			}
			case "#/claro-tips-page3":{
				return rootDashboard.appendChild( pages.ClaroTipsPage3() )
			}
			case "#/claro-tips-page4":{
				return rootDashboard.appendChild( pages.ClaroTipsPage4() )
			}
			default: {
				return rootDashboard.innerHTML = queEsActivate()
			}
		}
	}
	const init = () => {
		window.location.hash = "#/"
		rootDashboard.appendChild( pages.Portada() )
		w.addEventListener("hashchange", () => {
			routes(w.location.hash)
		})
	}
	w.addEventListener("load", init)
})(document, window, console.log)