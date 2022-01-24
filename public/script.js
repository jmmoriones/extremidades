(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSView = require("../vistas/activaExtremidadS.view.js");

var _activaExtremidadSView2 = _interopRequireDefault(_activaExtremidadSView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSView2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page2";
	prevPresentation.href = "#/cuidar-extremidades";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadS.view.js":67}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage10View = require("../vistas/activaExtremidadSPage10.view.js");

var _activaExtremidadSPage10View2 = _interopRequireDefault(_activaExtremidadSPage10View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage10View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades";
	prevPresentation.href = "#/activa-extremidad-page9";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage10.view.js":68}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage2View = require("../vistas/activaExtremidadSPage2.view.js");

var _activaExtremidadSPage2View2 = _interopRequireDefault(_activaExtremidadSPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage2View2.default)();
	var antesDePracticar = divElement.querySelector("#antesDePracticar .antesDePracticar-img");
	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page3";
	prevPresentation.href = "#/activa-extremidad";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	divElement.querySelector("#antesDePracticar").addEventListener("mouseout", function () {
		// antesDePracticar.style.width = "";
		antesDePracticar.classList.remove("antes-practicar-img2");
		antesDePracticar.classList.add("antes-practicar-img");
		antesDePracticar.src = "./img/svg/menAntesDePracticar.svg";
	}, false);
	divElement.querySelector("#antesDePracticar").addEventListener("mouseover", function (e) {
		// antesDePracticar.style.width = "32.05%";
		antesDePracticar.classList.remove("antes-practicar-img");
		antesDePracticar.classList.add("antes-practicar-img2");
		antesDePracticar.src = "./img/svg/menAntesDePracticar2.svg";
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage2.view.js":69}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage3View = require("../vistas/activaExtremidadSPage3.view.js");

var _activaExtremidadSPage3View2 = _interopRequireDefault(_activaExtremidadSPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage3View2.default)();

	var wMueve = divElement.querySelector("#women-mueve-extremidades");

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page4";
	prevPresentation.href = "#/activa-extremidad-page2";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	divElement.querySelector("#women-mueve-extremidades").addEventListener("mouseout", function () {
		wMueve.classList.remove("women-mueve-img2");
		wMueve.classList.add("women-mueve-img");
		wMueve.src = "./img/svg/womenMueveExtremidades.svg";
	}, false);
	divElement.querySelector("#women-mueve-extremidades").addEventListener("mouseover", function (e) {
		wMueve.classList.remove("women-mueve-img");
		wMueve.classList.add("women-mueve-img2");
		wMueve.src = "./img/svg/womenMueveExtremidades2.svg";
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage3.view.js":70}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage4View = require("../vistas/activaExtremidadSPage4.view.js");

var _activaExtremidadSPage4View2 = _interopRequireDefault(_activaExtremidadSPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage4View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page5";
	prevPresentation.href = "#/activa-extremidad-page3";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage4.view.js":71}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage5View = require("../vistas/activaExtremidadSPage5.view.js");

var _activaExtremidadSPage5View2 = _interopRequireDefault(_activaExtremidadSPage5View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage5View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page6";
	prevPresentation.href = "#/activa-extremidad-page4";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage5.view.js":72}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage6View = require("../vistas/activaExtremidadSPage6.view.js");

var _activaExtremidadSPage6View2 = _interopRequireDefault(_activaExtremidadSPage6View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage6View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page7";
	prevPresentation.href = "#/activa-extremidad-page5";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage6.view.js":73}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage7View = require("../vistas/activaExtremidadSPage7.view.js");

var _activaExtremidadSPage7View2 = _interopRequireDefault(_activaExtremidadSPage7View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage7View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page8";
	prevPresentation.href = "#/activa-extremidad-page6";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage7.view.js":74}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage8View = require("../vistas/activaExtremidadSPage8.view.js");

var _activaExtremidadSPage8View2 = _interopRequireDefault(_activaExtremidadSPage8View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage8View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page9";
	prevPresentation.href = "#/activa-extremidad-page7";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage8.view.js":75}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _activaExtremidadSPage9View = require("../vistas/activaExtremidadSPage9.view.js");

var _activaExtremidadSPage9View2 = _interopRequireDefault(_activaExtremidadSPage9View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("activaExtremidadS-container");
	divElement.innerHTML = (0, _activaExtremidadSPage9View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/activa-extremidad-page10";
	prevPresentation.href = "#/activa-extremidad-page8";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/activaExtremidadSPage9.view.js":76}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _antebrazoExtremidadView = require("../vistas/antebrazo-extremidad.view.js");

var _antebrazoExtremidadView2 = _interopRequireDefault(_antebrazoExtremidadView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("antebrazoExtremidades-container");
	divElement.innerHTML = (0, _antebrazoExtremidadView2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/munieca-extremidad";
	prevPresentation.href = "#/codo-extremidad";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/antebrazo-extremidad.view.js":77}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaView = require("../vistas/bandaElastica.view.js");

var _bandaElasticaView2 = _interopRequireDefault(_bandaElasticaView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaView2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElastica1"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElastica2");

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/banda-elastica-page2";
	prevPresentation.href = "#/manten-movimientos";

	divElement.querySelector("#bandaElastica").addEventListener("mouseout", function () {
		graphicBandaElastica2.style.display = "block";
		graphicBandaElastica1.style.display = "none";
	}, false);
	divElement.querySelector("#bandaElastica").addEventListener("mouseover", function (e) {
		graphicBandaElastica1.style.display = "block";
		graphicBandaElastica2.style.display = "none";
	}, false);

	return divElement;
};

},{"../vistas/bandaElastica.view.js":78}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage2View = require("../vistas/bandaElasticaPage2.view.js");

var _bandaElasticaPage2View2 = _interopRequireDefault(_bandaElasticaPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage2View2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage2-1"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage2-2"),
	    graphicBandaElastica3 = divElement.querySelector("#graphicBandaElasticaPage2-3"),
	    graphicBandaElastica4 = divElement.querySelector("#graphicBandaElasticaPage2-4");

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/banda-elastica-page3";
	prevPresentation.href = "#/banda-elastica";
	var allImage = divElement.querySelectorAll(".gpb");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#bandaElasticaPage2").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[2].style.display = "block";
			}, 3000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[3].style.display = "block";
			}, 4000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#bandaElasticaPage2").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/bandaElasticaPage2.view.js":79}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage3View = require("../vistas/bandaElasticaPage3.view.js");

var _bandaElasticaPage3View2 = _interopRequireDefault(_bandaElasticaPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage3View2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage3-1"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage3-2");

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/banda-elastica-page4";
	prevPresentation.href = "#/banda-elastica-page2";
	var allImage = divElement.querySelectorAll(".gpb");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#bandaElasticaPage3").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#bandaElasticaPage3").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/bandaElasticaPage3.view.js":80}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage4View = require("../vistas/bandaElasticaPage4.view.js");

var _bandaElasticaPage4View2 = _interopRequireDefault(_bandaElasticaPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage4View2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage4-1"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage4-2"),
	    bandasElasticasLists = divElement.querySelector("#bandasElasticasLists");

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/banda-elastica-page4-2";
	prevPresentation.href = "#/banda-elastica-page3";
	var allImage = divElement.querySelectorAll(".gpb");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#bandaElasticaPage4").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#bandaElasticaPage4").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/bandaElasticaPage4.view.js":81}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage4Parte2View = require("../vistas/bandaElasticaPage4Parte2.view.js");

var _bandaElasticaPage4Parte2View2 = _interopRequireDefault(_bandaElasticaPage4Parte2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage4Parte2View2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage4-1"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage4-2"),
	    bandasElasticasLists = divElement.querySelector("#bandasElasticasLists");

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/banda-elastica-page5";
	prevPresentation.href = "#/banda-elastica-page4";
	var allImage = divElement.querySelectorAll(".gpb");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#bandaElasticaPage4").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#bandaElasticaPage4").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/bandaElasticaPage4Parte2.view.js":82}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage5View = require("../vistas/bandaElasticaPage5.view.js");

var _bandaElasticaPage5View2 = _interopRequireDefault(_bandaElasticaPage5View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage5View2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage5-1"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage5-2"),
	    bandasElasticasLists = divElement.querySelector("#bandasElasticasLists");

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/banda-elastica-page5-2";
	prevPresentation.href = "#/banda-elastica-page4-2";
	var allImage = divElement.querySelectorAll(".gpb");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#bandaElasticaPage5").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#bandaElasticaPage5").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/bandaElasticaPage5.view.js":83}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage5Parte2View = require("../vistas/bandaElasticaPage5Parte2.view.js");

var _bandaElasticaPage5Parte2View2 = _interopRequireDefault(_bandaElasticaPage5Parte2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage5Parte2View2.default)();
	var graphicBandaElastica1 = divElement.querySelector("#graphicBandaElasticaPage5-3"),
	    graphicBandaElastica2 = divElement.querySelector("#graphicBandaElasticaPage5-4"),
	    bandasElasticasLists = divElement.querySelector("#bandasElasticasLists");

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/banda-elastica-page6";
	prevPresentation.href = "#/banda-elastica-page5";
	var allImage = divElement.querySelectorAll(".gpb");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#bandaElasticaPage5").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#bandaElasticaPage5").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/bandaElasticaPage5Parte2.view.js":84}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bandaElasticaPage6View = require("../vistas/bandaElasticaPage6.view.js");

var _bandaElasticaPage6View2 = _interopRequireDefault(_bandaElasticaPage6View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("bandaElastica-container");
	divElement.innerHTML = (0, _bandaElasticaPage6View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/cuida-brazos";
	prevPresentation.href = "#/banda-elastica-page5-2";

	return divElement;
};

},{"../vistas/bandaElasticaPage6.view.js":85}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _claroTipsPage1View = require("../vistas/claroTipsPage1.view.js");

var _claroTipsPage1View2 = _interopRequireDefault(_claroTipsPage1View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("claroTips-container");
	divElement.innerHTML = (0, _claroTipsPage1View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/claro-tips-page2";
	prevPresentation.href = "#/uso-celular-page3";

	return divElement;
};

},{"../vistas/claroTipsPage1.view.js":86}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _claroTipsPage2View = require("../vistas/claroTipsPage2.view.js");

var _claroTipsPage2View2 = _interopRequireDefault(_claroTipsPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("claroTips-container");
	divElement.innerHTML = (0, _claroTipsPage2View2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/claro-tips-page3";
	prevPresentation.href = "#/claro-tips-page1";

	divElement.style.backgroundImage = "none";
	divElement.style.backgroundRepeat = "inherit";
	divElement.style.backgroundSize = "inherit";
	divElement.style.backgroundPosition = "inherit";

	return divElement;
};

},{"../vistas/claroTipsPage2.view.js":87}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _claroTipsPage3View = require("../vistas/claroTipsPage3.view.js");

var _claroTipsPage3View2 = _interopRequireDefault(_claroTipsPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("claroTips-container");
	divElement.innerHTML = (0, _claroTipsPage3View2.default)();

	document.body.style.backgroundColor = "#FFF";

	divElement.style.backgroundImage = "none";
	divElement.style.backgroundRepeat = "inherit";
	divElement.style.backgroundSize = "inherit";
	divElement.style.backgroundPosition = "inherit";

	nextPresentation.href = "#/claro-tips-page4";
	prevPresentation.href = "#/claro-tips-page2";

	return divElement;
};

},{"../vistas/claroTipsPage3.view.js":88}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _claroTipsPage4View = require("../vistas/claroTipsPage4.view.js");

var _claroTipsPage4View2 = _interopRequireDefault(_claroTipsPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("claroTips-container");
	divElement.innerHTML = (0, _claroTipsPage4View2.default)();

	document.body.style.backgroundColor = "#FFF";

	divElement.style.backgroundImage = "none";
	divElement.style.backgroundRepeat = "inherit";
	divElement.style.backgroundSize = "inherit";
	divElement.style.backgroundPosition = "inherit";

	nextPresentation.href = "#/claro-tips-page4";
	prevPresentation.href = "#/claro-tips-page3";

	return divElement;
};

},{"../vistas/claroTipsPage4.view.js":89}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _codoExtremidadView = require("../vistas/codo-extremidad.view.js");

var _codoExtremidadView2 = _interopRequireDefault(_codoExtremidadView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("codoExtremidades-container");
	divElement.innerHTML = (0, _codoExtremidadView2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/antebrazo-extremidad";
	prevPresentation.href = "#/hombro-extremidad";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/codo-extremidad.view.js":90}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _conoceExtremidadesView = require("../vistas/conoce-extremidades.view.js");

var _conoceExtremidadesView2 = _interopRequireDefault(_conoceExtremidadesView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("conoceExtremidades-container");
	divElement.innerHTML = (0, _conoceExtremidadesView2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/hombro-extremidad";
	prevPresentation.href = "#/que-activate";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/conoce-extremidades.view.js":91}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cuidaBrazosView = require("../vistas/cuidaBrazos.view.js");

var _cuidaBrazosView2 = _interopRequireDefault(_cuidaBrazosView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("cuidaBrazos-container");
	divElement.innerHTML = (0, _cuidaBrazosView2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo";
	prevPresentation.href = "#/banda-elastica-page6";

	return divElement;
};

},{"../vistas/cuidaBrazos.view.js":92}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cuidarExtremidadesView = require("../vistas/cuidar-extremidades.view.js");

var _cuidarExtremidadesView2 = _interopRequireDefault(_cuidarExtremidadesView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("cuidarExtremidades-container");
	divElement.innerHTML = (0, _cuidarExtremidadesView2.default)();

	document.body.style.backgroundColor = "#cddefc46";

	nextPresentation.href = "#/activa-extremidad";
	prevPresentation.href = "#/munieca-extremidad";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/cuidar-extremidades.view.js":93}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ejercitaExtremidadesView = require("../vistas/ejercitaExtremidades.view.js");

var _ejercitaExtremidadesView2 = _interopRequireDefault(_ejercitaExtremidadesView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("ejercitaExtremidades-container");
	divElement.innerHTML = (0, _ejercitaExtremidadesView2.default)();

	document.body.style.backgroundColor = "#FFF";
	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/elige-goma";
	prevPresentation.href = "#/relaja-extremidades-page10";

	return divElement;
};

},{"../vistas/ejercitaExtremidades.view.js":94}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _eligeGomaView = require("../vistas/eligeGoma.view.js");

var _eligeGomaView2 = _interopRequireDefault(_eligeGomaView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("eligeGoma-container");
	divElement.innerHTML = (0, _eligeGomaView2.default)();

	document.body.style.backgroundColor = "#FFF";
	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/manten-movimientos";
	prevPresentation.href = "#/ejercita-extremidades";

	return divElement;
};

},{"../vistas/eligeGoma.view.js":95}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enCasaPage1View = require("../vistas/enCasaPage1.view.js");

var _enCasaPage1View2 = _interopRequireDefault(_enCasaPage1View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enCasa-container");
	divElement.innerHTML = (0, _enCasaPage1View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-casa-page2";
	prevPresentation.href = "#/en-trabajo-page8";

	return divElement;
};

},{"../vistas/enCasaPage1.view.js":96}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enCasaPage2View = require("../vistas/enCasaPage2.view.js");

var _enCasaPage2View2 = _interopRequireDefault(_enCasaPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enCasa-container");
	divElement.innerHTML = (0, _enCasaPage2View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-casa-page3";
	prevPresentation.href = "#/en-casa-page1";

	var allImage = divElement.querySelectorAll(".ecp");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#enCasaPage2").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#enCasaPage2").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/enCasaPage2.view.js":97}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enCasaPage3View = require("../vistas/enCasaPage3.view.js");

var _enCasaPage3View2 = _interopRequireDefault(_enCasaPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enCasa-container");
	divElement.innerHTML = (0, _enCasaPage3View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-casa-page4";
	prevPresentation.href = "#/en-casa-page2";

	return divElement;
};

},{"../vistas/enCasaPage3.view.js":98}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enCasaPage4View = require("../vistas/enCasaPage4.view.js");

var _enCasaPage4View2 = _interopRequireDefault(_enCasaPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enCasa-container");
	divElement.innerHTML = (0, _enCasaPage4View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-casa-page5";
	prevPresentation.href = "#/en-casa-page3";

	return divElement;
};

},{"../vistas/enCasaPage4.view.js":99}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enCasaPage5View = require("../vistas/enCasaPage5.view.js");

var _enCasaPage5View2 = _interopRequireDefault(_enCasaPage5View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enCasa-container");
	divElement.innerHTML = (0, _enCasaPage5View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-casa-page6";
	prevPresentation.href = "#/en-casa-page4";

	return divElement;
};

},{"../vistas/enCasaPage5.view.js":100}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enCasaPage6View = require("../vistas/enCasaPage6.view.js");

var _enCasaPage6View2 = _interopRequireDefault(_enCasaPage6View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enCasa-container");
	divElement.innerHTML = (0, _enCasaPage6View2.default)();

	document.body.style.backgroundColor = "#FFF";
	document.querySelector(".navbar").classList.remove("triangule");
	nextPresentation.href = "#/uso-celular-page1";
	prevPresentation.href = "#/en-casa-page5";

	return divElement;
};

},{"../vistas/enCasaPage6.view.js":101}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoView = require("../vistas/enTrabajo.view.js");

var _enTrabajoView2 = _interopRequireDefault(_enTrabajoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoView2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page2";
	prevPresentation.href = "#/cuida-brazos";

	return divElement;
};

},{"../vistas/enTrabajo.view.js":102}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage2View = require("../vistas/enTrabajoPage2.view.js");

var _enTrabajoPage2View2 = _interopRequireDefault(_enTrabajoPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage2View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page3";
	prevPresentation.href = "#/en-trabajo";

	return divElement;
};

},{"../vistas/enTrabajoPage2.view.js":103}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage3View = require("../vistas/enTrabajoPage3.view.js");

var _enTrabajoPage3View2 = _interopRequireDefault(_enTrabajoPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage3View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page4";
	prevPresentation.href = "#/en-trabajo-page2";

	return divElement;
};

},{"../vistas/enTrabajoPage3.view.js":104}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage4View = require("../vistas/enTrabajoPage4.view.js");

var _enTrabajoPage4View2 = _interopRequireDefault(_enTrabajoPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage4View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page5";
	prevPresentation.href = "#/en-trabajo-page3";

	return divElement;
};

},{"../vistas/enTrabajoPage4.view.js":105}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage5View = require("../vistas/enTrabajoPage5.view.js");

var _enTrabajoPage5View2 = _interopRequireDefault(_enTrabajoPage5View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage5View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page6";
	prevPresentation.href = "#/en-trabajo-page4";

	return divElement;
};

},{"../vistas/enTrabajoPage5.view.js":106}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage6View = require("../vistas/enTrabajoPage6.view.js");

var _enTrabajoPage6View2 = _interopRequireDefault(_enTrabajoPage6View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage6View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page7";
	prevPresentation.href = "#/en-trabajo-page5";

	return divElement;
};

},{"../vistas/enTrabajoPage6.view.js":107}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage7View = require("../vistas/enTrabajoPage7.view.js");

var _enTrabajoPage7View2 = _interopRequireDefault(_enTrabajoPage7View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage7View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-trabajo-page8";
	prevPresentation.href = "#/en-trabajo-page6";

	return divElement;
};

},{"../vistas/enTrabajoPage7.view.js":108}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _enTrabajoPage8View = require("../vistas/enTrabajoPage8.view.js");

var _enTrabajoPage8View2 = _interopRequireDefault(_enTrabajoPage8View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("enTrabajo-container");
	divElement.innerHTML = (0, _enTrabajoPage8View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/en-casa-page1";
	prevPresentation.href = "#/en-trabajo-page7";

	return divElement;
};

},{"../vistas/enTrabajoPage8.view.js":109}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hombroExtremidadView = require("../vistas/hombro-extremidad.view.js");

var _hombroExtremidadView2 = _interopRequireDefault(_hombroExtremidadView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("hombroExtremidades-container");
	divElement.innerHTML = (0, _hombroExtremidadView2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/codo-extremidad";
	prevPresentation.href = "#/conoce-extremidades";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/hombro-extremidad.view.js":111}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _homeView = require("../vistas/home.view.js");

var _homeView2 = _interopRequireDefault(_homeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("container-space");
	divElement.innerHTML = (0, _homeView2.default)();
	document.body.style.backgroundColor = "#cddefc46";
	nextPresentation.href = "#/que-activate";
	prevPresentation.href = "#/";
	document.querySelector(".navbar").style.display = "flex";
	document.querySelector(".navbar").style.backgroundImage = "none";
	document.querySelector(".navbar").style.backgroundRepeat = "inherit";
	document.querySelector(".navbar").style.backgroundPosition = "inherit";
	document.querySelector(".navbar").style.backgroundSize = "inherit";
	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 39) {
			window.location.href = "#/que-activate";
		}
	}, false);

	return divElement;
};

/*nextPresentation.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("Next Presentation")
})
prevPresentation.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("Prev Presentation")
})*/

},{"../vistas/home.view.js":112}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pages = undefined;

var _portadaController = require("./portada.controller.js");

var _portadaController2 = _interopRequireDefault(_portadaController);

var _queEsActivateController = require("./que-es-activate.controller.js");

var _queEsActivateController2 = _interopRequireDefault(_queEsActivateController);

var _conoceExtremidadesController = require("./conoce-extremidades.controller.js");

var _conoceExtremidadesController2 = _interopRequireDefault(_conoceExtremidadesController);

var _hombroExtremidadController = require("./hombro-extremidad.controller.js");

var _hombroExtremidadController2 = _interopRequireDefault(_hombroExtremidadController);

var _codoExtremidadController = require("./codo-extremidad.controller.js");

var _codoExtremidadController2 = _interopRequireDefault(_codoExtremidadController);

var _antebrazoExtremidadController = require("./antebrazo-extremidad.controller.js");

var _antebrazoExtremidadController2 = _interopRequireDefault(_antebrazoExtremidadController);

var _muniecaExtremidadController = require("./munieca-extremidad.controller.js");

var _muniecaExtremidadController2 = _interopRequireDefault(_muniecaExtremidadController);

var _cuidarExtremidadesController = require("./cuidar-extremidades.controller.js");

var _cuidarExtremidadesController2 = _interopRequireDefault(_cuidarExtremidadesController);

var _activaExtremidadSController = require("./activaExtremidadS.controller.js");

var _activaExtremidadSController2 = _interopRequireDefault(_activaExtremidadSController);

var _activaExtremidadSPage2Controller = require("./activaExtremidadSPage2.controller.js");

var _activaExtremidadSPage2Controller2 = _interopRequireDefault(_activaExtremidadSPage2Controller);

var _activaExtremidadSPage3Controller = require("./activaExtremidadSPage3.controller.js");

var _activaExtremidadSPage3Controller2 = _interopRequireDefault(_activaExtremidadSPage3Controller);

var _activaExtremidadSPage4Controller = require("./activaExtremidadSPage4.controller.js");

var _activaExtremidadSPage4Controller2 = _interopRequireDefault(_activaExtremidadSPage4Controller);

var _activaExtremidadSPage5Controller = require("./activaExtremidadSPage5.controller.js");

var _activaExtremidadSPage5Controller2 = _interopRequireDefault(_activaExtremidadSPage5Controller);

var _activaExtremidadSPage6Controller = require("./activaExtremidadSPage6.controller.js");

var _activaExtremidadSPage6Controller2 = _interopRequireDefault(_activaExtremidadSPage6Controller);

var _activaExtremidadSPage7Controller = require("./activaExtremidadSPage7.controller.js");

var _activaExtremidadSPage7Controller2 = _interopRequireDefault(_activaExtremidadSPage7Controller);

var _activaExtremidadSPage8Controller = require("./activaExtremidadSPage8.controller.js");

var _activaExtremidadSPage8Controller2 = _interopRequireDefault(_activaExtremidadSPage8Controller);

var _activaExtremidadSPage9Controller = require("./activaExtremidadSPage9.controller.js");

var _activaExtremidadSPage9Controller2 = _interopRequireDefault(_activaExtremidadSPage9Controller);

var _activaExtremidadSPage10Controller = require("./activaExtremidadSPage10.controller.js");

var _activaExtremidadSPage10Controller2 = _interopRequireDefault(_activaExtremidadSPage10Controller);

var _relajaExtremidadesSController = require("./relajaExtremidadesS.controller.js");

var _relajaExtremidadesSController2 = _interopRequireDefault(_relajaExtremidadesSController);

var _relajaExtremidadesSPage2Controller = require("./relajaExtremidadesSPage2.controller.js");

var _relajaExtremidadesSPage2Controller2 = _interopRequireDefault(_relajaExtremidadesSPage2Controller);

var _relajaExtremidadesSPage3Controller = require("./relajaExtremidadesSPage3.controller.js");

var _relajaExtremidadesSPage3Controller2 = _interopRequireDefault(_relajaExtremidadesSPage3Controller);

var _relajaExtremidadesSPage4Controller = require("./relajaExtremidadesSPage4.controller.js");

var _relajaExtremidadesSPage4Controller2 = _interopRequireDefault(_relajaExtremidadesSPage4Controller);

var _relajaExtremidadesSPage5Controller = require("./relajaExtremidadesSPage5.controller.js");

var _relajaExtremidadesSPage5Controller2 = _interopRequireDefault(_relajaExtremidadesSPage5Controller);

var _relajaExtremidadesSPage6Controller = require("./relajaExtremidadesSPage6.controller.js");

var _relajaExtremidadesSPage6Controller2 = _interopRequireDefault(_relajaExtremidadesSPage6Controller);

var _relajaExtremidadesSPage7Controller = require("./relajaExtremidadesSPage7.controller.js");

var _relajaExtremidadesSPage7Controller2 = _interopRequireDefault(_relajaExtremidadesSPage7Controller);

var _relajaExtremidadesSPage8Controller = require("./relajaExtremidadesSPage8.controller.js");

var _relajaExtremidadesSPage8Controller2 = _interopRequireDefault(_relajaExtremidadesSPage8Controller);

var _relajaExtremidadesSPage9Controller = require("./relajaExtremidadesSPage9.controller.js");

var _relajaExtremidadesSPage9Controller2 = _interopRequireDefault(_relajaExtremidadesSPage9Controller);

var _relajaExtremidadesSPage10Controller = require("./relajaExtremidadesSPage10.controller.js");

var _relajaExtremidadesSPage10Controller2 = _interopRequireDefault(_relajaExtremidadesSPage10Controller);

var _ejercitaExtremidadesController = require("./ejercitaExtremidades.controller.js");

var _ejercitaExtremidadesController2 = _interopRequireDefault(_ejercitaExtremidadesController);

var _eligeGomaController = require("./eligeGoma.controller.js");

var _eligeGomaController2 = _interopRequireDefault(_eligeGomaController);

var _mantenMovimientosController = require("./mantenMovimientos.controller.js");

var _mantenMovimientosController2 = _interopRequireDefault(_mantenMovimientosController);

var _bandaElasticaController = require("./bandaElastica.controller.js");

var _bandaElasticaController2 = _interopRequireDefault(_bandaElasticaController);

var _bandaElasticaPage2Controller = require("./bandaElasticaPage2.controller.js");

var _bandaElasticaPage2Controller2 = _interopRequireDefault(_bandaElasticaPage2Controller);

var _bandaElasticaPage3Controller = require("./bandaElasticaPage3.controller.js");

var _bandaElasticaPage3Controller2 = _interopRequireDefault(_bandaElasticaPage3Controller);

var _bandaElasticaPage4Controller = require("./bandaElasticaPage4.controller.js");

var _bandaElasticaPage4Controller2 = _interopRequireDefault(_bandaElasticaPage4Controller);

var _bandaElasticaPage4Parte2Controller = require("./bandaElasticaPage4Parte2.controller.js");

var _bandaElasticaPage4Parte2Controller2 = _interopRequireDefault(_bandaElasticaPage4Parte2Controller);

var _bandaElasticaPage5Controller = require("./bandaElasticaPage5.controller.js");

var _bandaElasticaPage5Controller2 = _interopRequireDefault(_bandaElasticaPage5Controller);

var _bandaElasticaPage5Parte2Controller = require("./bandaElasticaPage5Parte2.controller.js");

var _bandaElasticaPage5Parte2Controller2 = _interopRequireDefault(_bandaElasticaPage5Parte2Controller);

var _bandaElasticaPage6Controller = require("./bandaElasticaPage6.controller.js");

var _bandaElasticaPage6Controller2 = _interopRequireDefault(_bandaElasticaPage6Controller);

var _cuidaBrazosController = require("./cuidaBrazos.controller.js");

var _cuidaBrazosController2 = _interopRequireDefault(_cuidaBrazosController);

var _enTrabajoController = require("./enTrabajo.controller.js");

var _enTrabajoController2 = _interopRequireDefault(_enTrabajoController);

var _enTrabajoPage2Controller = require("./enTrabajoPage2.controller.js");

var _enTrabajoPage2Controller2 = _interopRequireDefault(_enTrabajoPage2Controller);

var _enTrabajoPage3Controller = require("./enTrabajoPage3.controller.js");

var _enTrabajoPage3Controller2 = _interopRequireDefault(_enTrabajoPage3Controller);

var _enTrabajoPage4Controller = require("./enTrabajoPage4.controller.js");

var _enTrabajoPage4Controller2 = _interopRequireDefault(_enTrabajoPage4Controller);

var _enTrabajoPage5Controller = require("./enTrabajoPage5.controller.js");

var _enTrabajoPage5Controller2 = _interopRequireDefault(_enTrabajoPage5Controller);

var _enTrabajoPage6Controller = require("./enTrabajoPage6.controller.js");

var _enTrabajoPage6Controller2 = _interopRequireDefault(_enTrabajoPage6Controller);

var _enTrabajoPage7Controller = require("./enTrabajoPage7.controller.js");

var _enTrabajoPage7Controller2 = _interopRequireDefault(_enTrabajoPage7Controller);

var _enTrabajoPage8Controller = require("./enTrabajoPage8.controller.js");

var _enTrabajoPage8Controller2 = _interopRequireDefault(_enTrabajoPage8Controller);

var _enCasaPage1Controller = require("./enCasaPage1.controller.js");

var _enCasaPage1Controller2 = _interopRequireDefault(_enCasaPage1Controller);

var _enCasaPage2Controller = require("./enCasaPage2.controller.js");

var _enCasaPage2Controller2 = _interopRequireDefault(_enCasaPage2Controller);

var _enCasaPage3Controller = require("./enCasaPage3.controller.js");

var _enCasaPage3Controller2 = _interopRequireDefault(_enCasaPage3Controller);

var _enCasaPage4Controller = require("./enCasaPage4.controller.js");

var _enCasaPage4Controller2 = _interopRequireDefault(_enCasaPage4Controller);

var _enCasaPage5Controller = require("./enCasaPage5.controller.js");

var _enCasaPage5Controller2 = _interopRequireDefault(_enCasaPage5Controller);

var _enCasaPage6Controller = require("./enCasaPage6.controller.js");

var _enCasaPage6Controller2 = _interopRequireDefault(_enCasaPage6Controller);

var _usoCelularPage1Controller = require("./usoCelularPage1.controller.js");

var _usoCelularPage1Controller2 = _interopRequireDefault(_usoCelularPage1Controller);

var _usoCelularPage2Controller = require("./usoCelularPage2.controller.js");

var _usoCelularPage2Controller2 = _interopRequireDefault(_usoCelularPage2Controller);

var _usoCelularPage3Controller = require("./usoCelularPage3.controller.js");

var _usoCelularPage3Controller2 = _interopRequireDefault(_usoCelularPage3Controller);

var _usoCelularPage4Controller = require("./usoCelularPage4.controller.js");

var _usoCelularPage4Controller2 = _interopRequireDefault(_usoCelularPage4Controller);

var _usoCelularPage5Controller = require("./usoCelularPage5.controller.js");

var _usoCelularPage5Controller2 = _interopRequireDefault(_usoCelularPage5Controller);

var _claroTipsPage1Controller = require("./claroTipsPage1.controller.js");

var _claroTipsPage1Controller2 = _interopRequireDefault(_claroTipsPage1Controller);

var _claroTipsPage2Controller = require("./claroTipsPage2.controller.js");

var _claroTipsPage2Controller2 = _interopRequireDefault(_claroTipsPage2Controller);

var _claroTipsPage3Controller = require("./claroTipsPage3.controller.js");

var _claroTipsPage3Controller2 = _interopRequireDefault(_claroTipsPage3Controller);

var _claroTipsPage4Controller = require("./claroTipsPage4.controller.js");

var _claroTipsPage4Controller2 = _interopRequireDefault(_claroTipsPage4Controller);

var _homeController = require("./home.controller.js");

var _homeController2 = _interopRequireDefault(_homeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pages = {
	Portada: _portadaController2.default,
	QueEsActivate: _queEsActivateController2.default,
	ConoceExtremidades: _conoceExtremidadesController2.default,
	HombroExtremidad: _hombroExtremidadController2.default,
	CodoExtremidad: _codoExtremidadController2.default,
	AntebrazoExtremidad: _antebrazoExtremidadController2.default,
	MuniecaExtremidad: _muniecaExtremidadController2.default,
	CuidarExtremidades: _cuidarExtremidadesController2.default,
	ActivaExtremidadS: _activaExtremidadSController2.default,
	ActivaExtremidadSPage2: _activaExtremidadSPage2Controller2.default,
	ActivaExtremidadSPage3: _activaExtremidadSPage3Controller2.default,
	ActivaExtremidadSPage4: _activaExtremidadSPage4Controller2.default,
	ActivaExtremidadSPage5: _activaExtremidadSPage5Controller2.default,
	ActivaExtremidadSPage6: _activaExtremidadSPage6Controller2.default,
	ActivaExtremidadSPage7: _activaExtremidadSPage7Controller2.default,
	ActivaExtremidadSPage8: _activaExtremidadSPage8Controller2.default,
	ActivaExtremidadSPage9: _activaExtremidadSPage9Controller2.default,
	ActivaExtremidadSPage10: _activaExtremidadSPage10Controller2.default,
	RelajaExtremidadesS: _relajaExtremidadesSController2.default,
	RelajaExtremidadesSPage2: _relajaExtremidadesSPage2Controller2.default,
	RelajaExtremidadesSPage3: _relajaExtremidadesSPage3Controller2.default,
	RelajaExtremidadesSPage4: _relajaExtremidadesSPage4Controller2.default,
	RelajaExtremidadesSPage5: _relajaExtremidadesSPage5Controller2.default,
	RelajaExtremidadesSPage6: _relajaExtremidadesSPage6Controller2.default,
	RelajaExtremidadesSPage7: _relajaExtremidadesSPage7Controller2.default,
	RelajaExtremidadesSPage8: _relajaExtremidadesSPage8Controller2.default,
	RelajaExtremidadesSPage9: _relajaExtremidadesSPage9Controller2.default,
	RelajaExtremidadesSPage10: _relajaExtremidadesSPage10Controller2.default,
	EjercitaExtremidades: _ejercitaExtremidadesController2.default,
	EligeGoma: _eligeGomaController2.default,
	MantenMovimientos: _mantenMovimientosController2.default,
	BandaElastica: _bandaElasticaController2.default,
	BandaElasticaPage2: _bandaElasticaPage2Controller2.default,
	BandaElasticaPage3: _bandaElasticaPage3Controller2.default,
	BandaElasticaPage4: _bandaElasticaPage4Controller2.default,
	BandaElasticaPage4Parte2: _bandaElasticaPage4Parte2Controller2.default,
	BandaElasticaPage5: _bandaElasticaPage5Controller2.default,
	BandaElasticaPage5Parte2: _bandaElasticaPage5Parte2Controller2.default,
	BandaElasticaPage6: _bandaElasticaPage6Controller2.default,
	CuidaBrazos: _cuidaBrazosController2.default,
	EnTrabajo: _enTrabajoController2.default,
	EnTrabajoPage2: _enTrabajoPage2Controller2.default,
	EnTrabajoPage3: _enTrabajoPage3Controller2.default,
	EnTrabajoPage4: _enTrabajoPage4Controller2.default,
	EnTrabajoPage5: _enTrabajoPage5Controller2.default,
	EnTrabajoPage6: _enTrabajoPage6Controller2.default,
	EnTrabajoPage7: _enTrabajoPage7Controller2.default,
	EnTrabajoPage8: _enTrabajoPage8Controller2.default,
	EnCasaPage1: _enCasaPage1Controller2.default,
	EnCasaPage2: _enCasaPage2Controller2.default,
	EnCasaPage3: _enCasaPage3Controller2.default,
	EnCasaPage4: _enCasaPage4Controller2.default,
	EnCasaPage5: _enCasaPage5Controller2.default,
	EnCasaPage6: _enCasaPage6Controller2.default,
	UsoCelularPage1: _usoCelularPage1Controller2.default,
	UsoCelularPage2: _usoCelularPage2Controller2.default,
	UsoCelularPage3: _usoCelularPage3Controller2.default,
	UsoCelularPage4: _usoCelularPage4Controller2.default,
	UsoCelularPage5: _usoCelularPage5Controller2.default,
	ClaroTipsPage1: _claroTipsPage1Controller2.default,
	ClaroTipsPage2: _claroTipsPage2Controller2.default,
	ClaroTipsPage3: _claroTipsPage3Controller2.default,
	ClaroTipsPage4: _claroTipsPage4Controller2.default,
	Home: _homeController2.default
};

exports.pages = pages;

},{"./activaExtremidadS.controller.js":1,"./activaExtremidadSPage10.controller.js":2,"./activaExtremidadSPage2.controller.js":3,"./activaExtremidadSPage3.controller.js":4,"./activaExtremidadSPage4.controller.js":5,"./activaExtremidadSPage5.controller.js":6,"./activaExtremidadSPage6.controller.js":7,"./activaExtremidadSPage7.controller.js":8,"./activaExtremidadSPage8.controller.js":9,"./activaExtremidadSPage9.controller.js":10,"./antebrazo-extremidad.controller.js":11,"./bandaElastica.controller.js":12,"./bandaElasticaPage2.controller.js":13,"./bandaElasticaPage3.controller.js":14,"./bandaElasticaPage4.controller.js":15,"./bandaElasticaPage4Parte2.controller.js":16,"./bandaElasticaPage5.controller.js":17,"./bandaElasticaPage5Parte2.controller.js":18,"./bandaElasticaPage6.controller.js":19,"./claroTipsPage1.controller.js":20,"./claroTipsPage2.controller.js":21,"./claroTipsPage3.controller.js":22,"./claroTipsPage4.controller.js":23,"./codo-extremidad.controller.js":24,"./conoce-extremidades.controller.js":25,"./cuidaBrazos.controller.js":26,"./cuidar-extremidades.controller.js":27,"./ejercitaExtremidades.controller.js":28,"./eligeGoma.controller.js":29,"./enCasaPage1.controller.js":30,"./enCasaPage2.controller.js":31,"./enCasaPage3.controller.js":32,"./enCasaPage4.controller.js":33,"./enCasaPage5.controller.js":34,"./enCasaPage6.controller.js":35,"./enTrabajo.controller.js":36,"./enTrabajoPage2.controller.js":37,"./enTrabajoPage3.controller.js":38,"./enTrabajoPage4.controller.js":39,"./enTrabajoPage5.controller.js":40,"./enTrabajoPage6.controller.js":41,"./enTrabajoPage7.controller.js":42,"./enTrabajoPage8.controller.js":43,"./hombro-extremidad.controller.js":44,"./home.controller.js":45,"./mantenMovimientos.controller.js":47,"./munieca-extremidad.controller.js":48,"./portada.controller.js":49,"./que-es-activate.controller.js":50,"./relajaExtremidadesS.controller.js":51,"./relajaExtremidadesSPage10.controller.js":52,"./relajaExtremidadesSPage2.controller.js":53,"./relajaExtremidadesSPage3.controller.js":54,"./relajaExtremidadesSPage4.controller.js":55,"./relajaExtremidadesSPage5.controller.js":56,"./relajaExtremidadesSPage6.controller.js":57,"./relajaExtremidadesSPage7.controller.js":58,"./relajaExtremidadesSPage8.controller.js":59,"./relajaExtremidadesSPage9.controller.js":60,"./usoCelularPage1.controller.js":61,"./usoCelularPage2.controller.js":62,"./usoCelularPage3.controller.js":63,"./usoCelularPage4.controller.js":64,"./usoCelularPage5.controller.js":65}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mantenMovimientosView = require("../vistas/mantenMovimientos.view.js");

var _mantenMovimientosView2 = _interopRequireDefault(_mantenMovimientosView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("mantenMovimientos-container");
	divElement.innerHTML = (0, _mantenMovimientosView2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/banda-elastica";
	prevPresentation.href = "#/elige-goma";

	return divElement;
};

},{"../vistas/mantenMovimientos.view.js":113}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _muniecaExtremidadView = require("../vistas/munieca-extremidad.view.js");

var _muniecaExtremidadView2 = _interopRequireDefault(_muniecaExtremidadView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("muniecaExtremidad-container");
	divElement.innerHTML = (0, _muniecaExtremidadView2.default)();

	document.body.style.backgroundColor = "#FFF";

	nextPresentation.href = "#/cuidar-extremidades";
	prevPresentation.href = "#/antebrazo-extremidad";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/munieca-extremidad.view.js":114}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _portadaView = require("../vistas/portada.view.js");

var _portadaView2 = _interopRequireDefault(_portadaView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("portada-container");
	divElement.innerHTML = (0, _portadaView2.default)();

	document.body.style.backgroundColor = "#FFF";
	document.querySelector(".navbar").style.display = "none";

	nextPresentation.href = "#/portada";
	prevPresentation.href = "#/";

	return divElement;
};

},{"../vistas/portada.view.js":115}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _queEsActivateView = require("../vistas/que-es-activate.view.js");

var _queEsActivateView2 = _interopRequireDefault(_queEsActivateView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	//document.querySelectorAll(".queEsActivate-content_description-text")[2].textContent
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");

	divElement.classList.add("queEsActivate-container");
	divElement.innerHTML = (0, _queEsActivateView2.default)();
	var audioQueEsActivate = divElement.querySelector("#audioQueEsActivate"),
	    audioSlide3 = divElement.querySelector("#audio1Slide3");
	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "javascript:void(0)";
	prevPresentation.href = "javascript:void(0)";
	audioSlide3.play();
	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);
	audioSlide3.addEventListener("ended", function (e) {
		console.log(e);
		nextPresentation.href = "#/conoce-extremidades";
		prevPresentation.href = "#/";
		window.addEventListener("keydown", function (event) {
			// 37 = Atras, 39 = Adelante
			if (event.keyCode == 37) {
				prevPresentation.click();
			}
			if (event.keyCode == 39) {
				nextPresentation.click();
			}
		}, false);
		console.log("Termino el Audio");
	});

	audioQueEsActivate.addEventListener("click", function (e) {
		//textFadeOut
		e.preventDefault();
		if (audioSlide3.paused == true) {
			audioSlide3.play();
			divElement.querySelector("#audioQueEsActivate img").style.animationName = "smallToNormalIn";
			divElement.querySelector("#audioQueEsActivate img").style.animationDuration = ".1s";
			divElement.querySelector("#audioQueEsActivate img").src = "img/svg/soundButton2.svg";
		} else if (audioSlide3.paused == false) {
			audioSlide3.pause();
			divElement.querySelector("#audioQueEsActivate img").style.animationName = "smallToNormalOut";
			divElement.querySelector("#audioQueEsActivate img").style.animationDuration = ".1s";
			divElement.querySelector("#audioQueEsActivate img").src = "img/svg/soundButton.svg";
		}
	});

	return divElement;
};

},{"../vistas/que-es-activate.view.js":116}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSView = require("../vistas/relajaExtremidadesS.view.js");

var _relajaExtremidadesSView2 = _interopRequireDefault(_relajaExtremidadesSView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSView2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "url(img/svg/triangule-mobile.svg)";
	document.querySelector(".navbar").style.backgroundRepeat = "no-repeat";
	document.querySelector(".navbar").style.backgroundPosition = "center center";
	document.querySelector(".navbar").style.backgroundSize = "contain";

	divElement.style.backgroundImage = "url(img/svg/hojaTransparentMiddle.svg)";
	divElement.style.backgroundRepeat = "no-repeat";
	divElement.style.backgroundPosition = "bottom left";
	divElement.style.backgroundSize = "12.5%";

	nextPresentation.href = "#/relaja-extremidades-page2";
	prevPresentation.href = "#/activa-extremidad-page10";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesS.view.js":117}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage10View = require("../vistas/relajaExtremidadesSPage10.view.js");

var _relajaExtremidadesSPage10View2 = _interopRequireDefault(_relajaExtremidadesSPage10View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage10View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/ejercita-extremidades";
	prevPresentation.href = "#/relaja-extremidades-page9";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage10.view.js":118}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage2View = require("../vistas/relajaExtremidadesSPage2.view.js");

var _relajaExtremidadesSPage2View2 = _interopRequireDefault(_relajaExtremidadesSPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage2View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page3";
	prevPresentation.href = "#/relaja-extremidades";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage2.view.js":119}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage3View = require("../vistas/relajaExtremidadesSPage3.view.js");

var _relajaExtremidadesSPage3View2 = _interopRequireDefault(_relajaExtremidadesSPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage3View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page4";
	prevPresentation.href = "#/relaja-extremidades-page2";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage3.view.js":120}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage4View = require("../vistas/relajaExtremidadesSPage4.view.js");

var _relajaExtremidadesSPage4View2 = _interopRequireDefault(_relajaExtremidadesSPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage4View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page5";
	prevPresentation.href = "#/relaja-extremidades-page3";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage4.view.js":121}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage5View = require("../vistas/relajaExtremidadesSPage5.view.js");

var _relajaExtremidadesSPage5View2 = _interopRequireDefault(_relajaExtremidadesSPage5View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage5View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page6";
	prevPresentation.href = "#/relaja-extremidades-page4";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage5.view.js":122}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage6View = require("../vistas/relajaExtremidadesSPage6.view.js");

var _relajaExtremidadesSPage6View2 = _interopRequireDefault(_relajaExtremidadesSPage6View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage6View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page7";
	prevPresentation.href = "#/relaja-extremidades-page5";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage6.view.js":123}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage7View = require("../vistas/relajaExtremidadesSPage7.view.js");

var _relajaExtremidadesSPage7View2 = _interopRequireDefault(_relajaExtremidadesSPage7View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage7View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page8";
	prevPresentation.href = "#/relaja-extremidades-page6";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage7.view.js":124}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage8View = require("../vistas/relajaExtremidadesSPage8.view.js");

var _relajaExtremidadesSPage8View2 = _interopRequireDefault(_relajaExtremidadesSPage8View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage8View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page9";
	prevPresentation.href = "#/relaja-extremidades-page7";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage8.view.js":125}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _relajaExtremidadesSPage9View = require("../vistas/relajaExtremidadesSPage9.view.js");

var _relajaExtremidadesSPage9View2 = _interopRequireDefault(_relajaExtremidadesSPage9View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("relajaExtremidadesS-container");
	divElement.innerHTML = (0, _relajaExtremidadesSPage9View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.querySelector(".navbar").style.backgroundImage = "";
	document.querySelector(".navbar").style.backgroundRepeat = "";
	document.querySelector(".navbar").style.backgroundPosition = "";
	document.querySelector(".navbar").style.backgroundSize = "";

	divElement.style.backgroundImage = "";
	divElement.style.backgroundRepeat = "";
	divElement.style.backgroundPosition = "";
	divElement.style.backgroundSize = "";

	nextPresentation.href = "#/relaja-extremidades-page10";
	prevPresentation.href = "#/relaja-extremidades-page8";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
		if (event.keyCode == 37) {
			prevPresentation.click();
		}
		if (event.keyCode == 39) {
			nextPresentation.click();
		}
	}, false);

	return divElement;
};

},{"../vistas/relajaExtremidadesSPage9.view.js":126}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _usoCelularPage1View = require("../vistas/usoCelularPage1.view.js");

var _usoCelularPage1View2 = _interopRequireDefault(_usoCelularPage1View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("usoCelular-container");
	divElement.innerHTML = (0, _usoCelularPage1View2.default)();

	document.body.style.backgroundColor = "#FFF";
	document.querySelector(".navbar").classList.add("triangule");
	divElement.classList.add("trianguleHoja");

	document.body.classList.remove("hojaBottom");

	nextPresentation.href = "#/uso-celular-page2";
	prevPresentation.href = "#/en-casa-page6";

	return divElement;
};

},{"../vistas/usoCelularPage1.view.js":127}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _usoCelularPage2View = require("../vistas/usoCelularPage2.view.js");

var _usoCelularPage2View2 = _interopRequireDefault(_usoCelularPage2View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("usoCelular-container");
	divElement.innerHTML = (0, _usoCelularPage2View2.default)();

	document.body.style.backgroundColor = "#FFF";

	document.body.classList.add("hojaBottom");

	document.querySelector(".navbar").classList.remove("triangule");
	divElement.classList.remove("trianguleHoja");

	nextPresentation.href = "#/uso-celular-page3";
	prevPresentation.href = "#/uso-celular-page1";

	var allImage = divElement.querySelectorAll(".ucp");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#usoCelularPage2").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
			}, 2000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#usoCelularPage2").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
		}
	}, false);

	return divElement;
};

},{"../vistas/usoCelularPage2.view.js":128}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _usoCelularPage3View = require("../vistas/usoCelularPage3.view.js");

var _usoCelularPage3View2 = _interopRequireDefault(_usoCelularPage3View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("usoCelular-container");
	divElement.innerHTML = (0, _usoCelularPage3View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/claro-tips-page1";
	prevPresentation.href = "#/uso-celular-page2";

	var allImage = divElement.querySelectorAll(".ucp3");
	for (var i = 0; i < allImage.length; i++) {
		allImage[i].style.display = "none";
		allImage[0].style.display = "block";
	}
	divElement.querySelector("#usoCelularPage3").addEventListener("mouseenter", function (e) {
		var _loop = function _loop(_i) {
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[0].style.display = "block";
			}, 1000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "block";
				divElement.querySelector(".usoCelular-content_description-message").innerHTML = "REPETICIÓN 2";
			}, 2000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "none";
				allImage[2].style.display = "block";
				allImage[3].style.display = "none";
				allImage[4].style.display = "none";
				divElement.querySelector(".usoCelular-content_description-message").innerHTML = "REPETICIÓN 3";
			}, 5000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "none";
				allImage[2].style.display = "none";
				allImage[3].style.display = "block";
				allImage[4].style.display = "none";
				divElement.querySelector(".usoCelular-content_description-message").innerHTML = "REPETICIÓN 4";
			}, 8000);
			setTimeout(function () {
				allImage[_i].style.display = "none";
				allImage[1].style.display = "none";
				allImage[2].style.display = "none";
				allImage[3].style.display = "none";
				allImage[4].style.display = "block";
				divElement.querySelector(".usoCelular-content_description-message").innerHTML = "REPETICIÓN 5";
			}, 11000);
		};

		for (var _i = 0; _i < allImage.length; _i++) {
			_loop(_i);
		}
	}, false);
	divElement.querySelector("#usoCelularPage3").addEventListener("mouseleave", function (e) {
		for (var _i2 = 0; _i2 < allImage.length; _i2++) {
			allImage[_i2].style.display = "none";
			allImage[0].style.display = "block";
			divElement.querySelector(".usoCelular-content_description-message").innerHTML = "REPETICIÓN 1";
		}
	}, false);

	return divElement;
};

},{"../vistas/usoCelularPage3.view.js":129}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _usoCelularPage4View = require("../vistas/usoCelularPage4.view.js");

var _usoCelularPage4View2 = _interopRequireDefault(_usoCelularPage4View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("usoCelular-container");
	divElement.innerHTML = (0, _usoCelularPage4View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/uso-celular-page5";
	prevPresentation.href = "#/uso-celular-page3";

	return divElement;
};

},{"../vistas/usoCelularPage4.view.js":130}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _usoCelularPage5View = require("../vistas/usoCelularPage5.view.js");

var _usoCelularPage5View2 = _interopRequireDefault(_usoCelularPage5View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var divElement = document.createElement('div'),
	    nextPresentation = document.querySelector("#nextPresentation"),
	    prevPresentation = document.querySelector("#prevPresentation");
	divElement.classList.add("usoCelular-container");
	divElement.innerHTML = (0, _usoCelularPage5View2.default)();

	document.body.style.backgroundColor = "#FFF";
	nextPresentation.href = "#/claro-tips-page1";
	prevPresentation.href = "#/uso-celular-page4";

	return divElement;
};

},{"../vistas/usoCelularPage5.view.js":131}],66:[function(require,module,exports){
"use strict";

var _errorView = require("./vistas/error.view.js");

var _errorView2 = _interopRequireDefault(_errorView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (d, w, c) {
	//import {pages} from "./controller/index.js"
	var actPopup = d.querySelector("#actPopup"),
	    popupHowToFunction = d.querySelector("#popupHowToFunction"),
	    linkHowToFunction = d.querySelector("#linkHowToFunction"),
	    rootDashboard = d.getElementById("rootDashboard"),
	    _require = require("./controller/index.js"),
	    pages = _require.pages;

	actPopup.addEventListener("click", function (e) {
		e.preventDefault();
		popupHowToFunction.classList.toggle("addAnimation");
	});
	linkHowToFunction.addEventListener("click", function (e) {
		e.preventDefault();
		popupHowToFunction.classList.toggle("addAnimation");
	});
	var routes = function routes(route) {
		rootDashboard.innerHTML = "";
		switch (route) {
			case "#/":
				{
					return rootDashboard.appendChild(pages.Portada());
				}
			case "#/portada":
				{
					return rootDashboard.appendChild(pages.Home());
				}
			case "#/que-activate":
				{
					return rootDashboard.appendChild(pages.QueEsActivate());
				}
			case "#/conoce-extremidades":
				{
					return rootDashboard.appendChild(pages.ConoceExtremidades());
				}
			case "#/hombro-extremidad":
				{
					return rootDashboard.appendChild(pages.HombroExtremidad());
				}
			case "#/codo-extremidad":
				{
					return rootDashboard.appendChild(pages.CodoExtremidad());
				}
			case "#/antebrazo-extremidad":
				{
					return rootDashboard.appendChild(pages.AntebrazoExtremidad());
				}
			case "#/munieca-extremidad":
				{
					return rootDashboard.appendChild(pages.MuniecaExtremidad());
				}
			case "#/cuidar-extremidades":
				{
					return rootDashboard.appendChild(pages.CuidarExtremidades());
				}
			case "#/activa-extremidad":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadS());
				}
			case "#/activa-extremidad-page2":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage2());
				}
			case "#/activa-extremidad-page3":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage3());
				}
			case "#/activa-extremidad-page4":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage4());
				}
			case "#/activa-extremidad-page5":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage5());
				}
			case "#/activa-extremidad-page6":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage6());
				}
			case "#/activa-extremidad-page7":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage7());
				}
			case "#/activa-extremidad-page8":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage8());
				}
			case "#/activa-extremidad-page9":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage9());
				}
			case "#/activa-extremidad-page10":
				{
					return rootDashboard.appendChild(pages.ActivaExtremidadSPage10());
				}
			case "#/relaja-extremidades":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesS());
				}
			case "#/relaja-extremidades-page2":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage2());
				}
			case "#/relaja-extremidades-page3":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage3());
				}
			case "#/relaja-extremidades-page4":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage4());
				}
			case "#/relaja-extremidades-page5":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage5());
				}
			case "#/relaja-extremidades-page6":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage6());
				}
			case "#/relaja-extremidades-page7":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage7());
				}
			case "#/relaja-extremidades-page8":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage8());
				}
			case "#/relaja-extremidades-page9":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage9());
				}
			case "#/relaja-extremidades-page10":
				{
					return rootDashboard.appendChild(pages.RelajaExtremidadesSPage10());
				}
			case "#/ejercita-extremidades":
				{
					return rootDashboard.appendChild(pages.EjercitaExtremidades());
				}
			case "#/elige-goma":
				{
					return rootDashboard.appendChild(pages.EligeGoma());
				}
			case "#/manten-movimientos":
				{
					return rootDashboard.appendChild(pages.MantenMovimientos());
				}
			case "#/banda-elastica":
				{
					return rootDashboard.appendChild(pages.BandaElastica());
				}
			case "#/banda-elastica-page2":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage2());
				}
			case "#/banda-elastica-page3":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage3());
				}
			case "#/banda-elastica-page4":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage4());
				}
			case "#/banda-elastica-page4-2":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage4Parte2());
				}
			case "#/banda-elastica-page5":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage5());
				}
			case "#/banda-elastica-page5-2":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage5Parte2());
				}
			case "#/banda-elastica-page6":
				{
					return rootDashboard.appendChild(pages.BandaElasticaPage6());
				}
			case "#/cuida-brazos":
				{
					return rootDashboard.appendChild(pages.CuidaBrazos());
				}
			case "#/en-trabajo":
				{
					return rootDashboard.appendChild(pages.EnTrabajo());
				}
			case "#/en-trabajo-page2":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage2());
				}
			case "#/en-trabajo-page3":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage3());
				}
			case "#/en-trabajo-page4":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage4());
				}
			case "#/en-trabajo-page5":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage5());
				}
			case "#/en-trabajo-page6":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage6());
				}
			case "#/en-trabajo-page7":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage7());
				}
			case "#/en-trabajo-page8":
				{
					return rootDashboard.appendChild(pages.EnTrabajoPage8());
				}
			case "#/en-casa-page1":
				{
					return rootDashboard.appendChild(pages.EnCasaPage1());
				}
			case "#/en-casa-page2":
				{
					return rootDashboard.appendChild(pages.EnCasaPage2());
				}
			case "#/en-casa-page3":
				{
					return rootDashboard.appendChild(pages.EnCasaPage3());
				}
			case "#/en-casa-page4":
				{
					return rootDashboard.appendChild(pages.EnCasaPage4());
				}
			case "#/en-casa-page5":
				{
					return rootDashboard.appendChild(pages.EnCasaPage5());
				}
			case "#/en-casa-page6":
				{
					return rootDashboard.appendChild(pages.EnCasaPage6());
				}

			case "#/uso-celular-page1":
				{
					return rootDashboard.appendChild(pages.UsoCelularPage1());
				}
			case "#/uso-celular-page2":
				{
					return rootDashboard.appendChild(pages.UsoCelularPage2());
				}
			case "#/uso-celular-page3":
				{
					return rootDashboard.appendChild(pages.UsoCelularPage3());
				}
			case "#/claro-tips-page1":
				{
					return rootDashboard.appendChild(pages.ClaroTipsPage1());
				}
			case "#/claro-tips-page2":
				{
					return rootDashboard.appendChild(pages.ClaroTipsPage2());
				}
			case "#/claro-tips-page3":
				{
					return rootDashboard.appendChild(pages.ClaroTipsPage3());
				}
			case "#/claro-tips-page4":
				{
					return rootDashboard.appendChild(pages.ClaroTipsPage4());
				}
			default:
				{
					return rootDashboard.innerHTML = (0, _errorView2.default)();
				}
		}
	};
	var init = function init() {
		window.location.hash = "#/";
		rootDashboard.appendChild(pages.Portada());
		w.addEventListener("hashchange", function () {
			routes(w.location.hash);
		});
	};
	w.addEventListener("load", init);
})(document, window, console.log); //queEsActivate = require("./vistas/que-es-activate.html")

},{"./controller/index.js":46,"./vistas/error.view.js":110}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" class=\"animate__animated animate__fadeIn animate__delay-1s\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenExtremidadesSuperiores.svg\" class=\"animate__animated animate__backInLeft animate__delay-1s womenExtremidades\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title animate__animated animate__backInRight animate__delay-2s\">ACTIVA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle animate__animated animate__backInRight animate__delay-3s\">Te presentamos una serie de ejercicios que te ayudaran a:</p>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Relajar tus brazos</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Disminuir la tensi\xF3n muscular</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Reducir el riesgo de padecer lesiones</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

//class="activaExtremidadS-content_description-ul_li activaExtremidadS-content_description-ul_li--text"
exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenBrazoExtendidoDerecho.svg\" class=\"animate__animated animate__backInLeft animate__delay-1s\"/>\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-ul_li activaExtremidadS-content_description-ul_li--text animate__animated animate__backInRight animate__delay-3s\">Lleva tus brazos al frente, abre y cierra tus manos.</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div id=\"antesDePracticar\" class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"antesDePracticar-img animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/menAntesDePracticar.svg\"/>\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title animate__animated animate__backInRight animate__delay-2s\">ANTES DE PRACTICARLOS</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle animate__animated animate__backInRight animate__delay-3s\">Debes tener en cuentalo siguiente:</p>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">S\xED la realizaci\xF3n de un ejercicio provoca dolor, debes interrumpirlo y sustituirlo por otro.</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Si cuentas con restricciones o recomendaciones m\xE9dicas, consulta con tu m\xE9dico previamente.</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">La ejecuci\xF3n de los ejercicios se llevar\xE1 a cabo de forma suave, progresiva y controlada.</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva un orden en la ejecuci\xF3n de los ejercicios realizando estos de forma consciente y controlada intentando respirar regularmente. </li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-square animate__animated animate__bounceIn animate__delay-5s\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-square_text\">Si presentas dolor s\xFAbito e intenso, consulta a tu m\xE9dico antes de realizar estos ejercicios.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img id=\"women-mueve-extremidades\" src=\"img/svg/womenMueveExtremidades.svg\" class=\"animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-ul_li activaExtremidadS-content_description-ul_li--text animate__animated animate__backInRight animate__delay-3s\">Recuerda iniciar con ejercicios de movilidad articular</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle animate__animated animate__backInRight animate__delay-3s\">\xA1No olvides <b>controlar tu respiraci\xF3n!</b></p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-square activaExtremidadS-content_description-square--bgAll animate__animated animate__bounceIn animate__delay-4s\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-square_text activaExtremidadS-content_description-square_text--bgAll\">Realiza de <b>5 a 10 repeticiones</b><br/> de cada uno.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/menMueveExtremidades.svg\" class=\"mueve-extremidades animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle activaExtremidadS-content_description-subTitle--medium animate__animated animate__backInRight animate__delay-3s\">Contin\xFAa la sesi\xF3n con ejercicios de estiramiento muscular</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice animate__animated animate__bounceIn animate__delay-4s\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 1</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text\">Con espalda y cabeza rectas, entrelaza las manos y lleva los brazos por encima de la cabeza </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/menMueveExtremidadesCodo.svg\" class=\"mueve-extremidades-codo animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5 animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title animate__animated animate__backInRight animate__delay-3s\">Ejercicio 2</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text animate__animated animate__backInRight animate__delay-3s\">Con los codos rectos, lleva los brazos hacia fuera y arriba. Vuelva a la posici\xF3n de partida</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenBrazosAtras.svg\" class=\"brazos-atras animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5 animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title animate__animated animate__backInRight animate__delay-3s\">Ejercicio 3</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text animate__animated animate__backInRight animate__delay-3s\">Igualmente, con los codos rectos, lleva los brazos hacia atr\xE1s. Vuelve a la posici\xF3n de partida</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/menCodosArriba.svg\" class=\"codos-arriba animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5 animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title animate__animated animate__backInRight animate__delay-3s\">Ejercicio 4</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text animate__animated animate__backInRight animate__delay-3s\">Lleva las manos a los hombros, gire los hombros hacia adelante y luego hacia atr\xE1s</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/menBrazoEspalda.svg\" class=\"animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5 animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice animate__animated animate__fadeInDown animate__delay-3s\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 5</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Ubica el brazo derecho al lado y dobla el codo</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva la mano del mismo lado hacia arriba y luego hacia abajo</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Repite el movimiento con el otro brazo</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenBrazoExtendido.svg\" class=\"animate__animated animate__backInLeft animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5 animate__animated animate__backInRight animate__delay-2s\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice animate__animated animate__fadeInDown animate__delay-3s\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 6</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Ubica el brazo al frente con la palma de la mano hacia arriba</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva la mano hacia el hombro del mismo lado doblando solo el codo</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Regresa a la posici\xF3n inicial y repite el movi-miento con el otro brazo</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"antebrazoExtremidadSuperior-content container-content_slide\">\n\t\t\t<div class=\"antebrazoExtremidadSuperior-content_graphic antebrazoExtremidadSuperior-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHuman-antebrazo.png\" class=\"extremidadSuperior-content_graphic-antebrazo animate__animated animate__fadeIn animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"antebrazoExtremidadSuperior-content_description\">\n\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-title animate__animated animate__backInUp animate__delay-2s\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-subTitle animate__animated animate__fadeIn animate__delay-3s\">Antebrazo</p>\n\t\t\t\t<ul class=\"antebrazoExtremidadSuperior-content_description-list\">\n\t\t\t\t\t<li class=\"antebrazoExtremidadSuperior-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">Sirve de nexo entre el brazo y el cuerpo.</li>\n\t\t\t\t\t<li class=\"antebrazoExtremidadSuperior-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">Est\xE1 formado por la uni\xF3n de los extremos de tres</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-text animate__animated animate__backInRight animate__delay-4s\">huesos: la clav\xEDcula, la esc\xE1pula (om\xF3plato) y el h\xFAmero, adem\xE1s de m\xFAsculos, ligamentos y tendones.</p>\n\t\t\t\t<div class=\"antebrazoExtremidadSuperior-content_description-square animate__animated animate__bounceIn animate__delay-5s\">\n\t\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-square_text\">Podemos realizar movimientos girando la palma de la mano hacia arriba (supinaci\xF3n) y girando la palma de la mano hacia abajo (pronaci\xF3n).</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElastica\" class=\"bandaElastica-content_graphic animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElastica2\" class=\"graphic-presentation\" src=\"img/svg/bandaElastica2.svg\" />\n\t\t\t\t<img id=\"graphicBandaElastica1\" class=\"graphic-presentation-2\" src=\"img/svg/bandaElastica1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 1</p>\n\t\t\t\t\t<ul class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva el brazo por atr\xE1s de la espalda a la altura de la cintura</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Con la mano contraria toma el extremo de la banda el\xE1stica por detr\xE1s de la cabeza y extiende el brazo hacia arriba sosteniendo durante 3 segundos.</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Cambia la posici\xF3n de tus brazos y realiza el ejercicio con la otra extremidad</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage2\" class=\"bandaElastica-content_graphic animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-1\" class=\"graphic-presentationBanda1 gpb\" src=\"img/svg/bandaElasticaPage2-1.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-2\" class=\"graphic-presentationBanda2 gpb\" src=\"img/svg/bandaElasticaPage2-2.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-3\" class=\"graphic-presentationBanda3 gpb\" src=\"img/svg/bandaElasticaPage2-3.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-4\" class=\"graphic-presentationBanda4 gpb\" src=\"img/svg/bandaElasticaPage2-4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 2</p>\n\t\t\t\t\t<ul class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">De pie, con los pies separados al ancho de los hombros</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Los pies pisando la mitad del theraband y las manos tomando los extremos de la banda el\xE1stica</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva los brazos hacia arriba y a los lados hasta la altura de los hombros, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Puedes alternar el derecho e izquierdo o realizar el movimiento al tiempo con ambos brazos.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage3\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage3-1\" class=\"graphic-presentationBandaPage3-1 gpb\" src=\"img/svg/bandaElasticaPage3-2.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage3-2\" class=\"graphic-presentationBandaPage3-2 gpb\" src=\"img/svg/bandaElasticaPage3-1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 3</p>\n\t\t\t\t\t<ul class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Con los brazos extendidos hacia el frente agarra los extremos de la banda el\xE1stica</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Abre los brazos y sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage4\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-1\" class=\"graphic-presentationBandaPage4-1 gpb\" src=\"img/svg/bandaElasticaPage4-1.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-2\" class=\"graphic-presentationBandaPage4-2 gpb\" src=\"img/svg/bandaElasticaPage4-2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 4</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Puedes combinar el anterior ejercicio, con los codos flexionados a la altura del pecho sosteniendo fuertemente la banda el\xE1stica.</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Abre el brazo derecho mientras el izquierdo hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Vuelve a la posici\xF3n inicial y repite el ejercicio con el brazo contrario</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage4\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-3\" class=\"graphic-presentationBandaPage4-3 gpb\" src=\"img/svg/bandaElasticaPage4-3.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-4\" class=\"graphic-presentationBandaPage4-4 gpb\" src=\"img/svg/bandaElasticaPage4-4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 4</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Puedes combinar el anterior ejercicio, con los codos flexionados a la altura del pecho sosteniendo fuertemente la banda el\xE1stica. </li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Abre el brazo izquierdo mientras el derecho hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage5\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-1\" class=\"graphic-presentationBandaPage5-1 gpb\" src=\"img/svg/bandaElasticaPage5-1.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-2\" class=\"graphic-presentationBandaPage5-2 gpb\" src=\"img/svg/bandaElasticaPage5-2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 5</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Apoya el codo y antebrazo sobre una superficie suave, dejando la mu\xF1eca libre</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Con la palma de la mano hacia abajo toma la mitad de la banda fuertemente</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva la mano hacia arriba (sin despegar el ante-brazo) mientras la mano contraria hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Cambia la posici\xF3n de tus brazos y realiza el ejercicio con la otra mano</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage5\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-3\" class=\"graphic-presentationBandaPage5-3 gpb\" src=\"img/svg/bandaElasticaPage5-3.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-4\" class=\"graphic-presentationBandaPage5-4 gpb\" src=\"img/svg/bandaElasticaPage5-4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 5</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Apoya el codo y antebrazo sobre una superficie suave, dejando la mu\xF1eca libre</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Con la palma de la mano hacia abajo toma la mitad de la banda fuertemente </li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva la mano hacia arriba (sin despegar el ante-brazo) mientras la mano contraria hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage5\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage6\" class=\"graphic-presentationBandaPage6 gpb\" src=\"img/svg/bandaElasticaPage6.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title animate__animated animate__backInRight animate__delay-2s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 6</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Combina el ejercicio haciendo agarre de la banda con la palma de la mano hacia arriba</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"bandaElastica-content_description-message animate__animated animate__bounceIn animate__delay-5s\">\xA1Suma minutos a tu bienestar!</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"claroTips-content container-content_slide\">\n\t\t\t<div class=\"claroTips-content_graphic\">\n\t\t\t\t<img src=\"img/svg/claroTipsPage1.svg\" class=\"claroTips-content_graphic-img\" />\n\t\t\t</div>\n\t\t\t<div class=\"claroTips-content_description\">\n\t\t\t\t<p class=\"claroTips-content_description-title\">CLARO TIPS</p>\n\t\t\t\t<div class=\"claroTips-content_description-cntSubtitle\">\n\t\t\t\t\t<p class=\"claroTips-content_description-cntSubtitle_subtitle\">Uso del celular</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"claroTips-content_description-ul\">\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Controla el tiempo de conexi\xF3n</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"claroTips-content container-content_slide\">\n\t\t\t<div class=\"claroTips-content_graphic claroTips-content_graphicPage2\">\n\t\t\t\t<img src=\"img/svg/claroTipsPage2.svg\" class=\"claroTips-content_graphic-img\" />\n\t\t\t</div>\n\t\t\t<div class=\"claroTips-content_description\">\n\t\t\t\t<p class=\"claroTips-content_description-title\">CLARO TIPS</p>\n\t\t\t\t<div class=\"claroTips-content_description-cntSubtitle claroTips-content_description-cntSubtitlePage2\">\n\t\t\t\t\t<p class=\"claroTips-content_description-cntSubtitle_subtitle\">Uso del celular</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"claroTips-content_description-ul\">\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Controla el tiempo de conexi\xF3n</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Mant\xE9n la pantalla a la altura de tus ojos</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Cruza el brazo contrario del que manejas el celular por la cintura y apoya el brazo con el que sostienes el m\xF3vil por encima de este</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"claroTips-content container-content_slide\">\n\t\t\t<div class=\"claroTips-content_graphic claroTips-content_graphicPage3\">\n\t\t\t\t<div class=\"claroTips-content_graphic-mark\">\n\t\t\t\t\t<img src=\"img/svg/claroTipsPage3-Munien.svg\" class=\"claroTips-content_graphic-img\" />\n\t\t\t\t\t<img src=\"img/svg/check.svg\" class=\"claroTips-content_graphic-CheckP3\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"claroTips-content_description\">\n\t\t\t\t<p class=\"claroTips-content_description-title\">CLARO TIPS</p>\n\t\t\t\t<div class=\"claroTips-content_description-cntSubtitle claroTips-content_description-cntSubtitlePage2\">\n\t\t\t\t\t<p class=\"claroTips-content_description-cntSubtitle_subtitle\">Uso del celular</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"claroTips-content_description-ul\">\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Controla el tiempo de conexi\xF3n</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Mant\xE9n la pantalla a la altura de tus ojos</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Cruza el brazo contrario del que manejas el celular por la cintura y apoya el brazo con el que sostienes el m\xF3vil por encima de este</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Preferiblemente con\xE9ctalo a tu computador (WhatsappWeb), ap\xF3yate con notas de voz o audios disminuyendo los movimientos frecuentes en manos</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"claroTips-content container-content_slide\">\n\t\t\t<div class=\"claroTips-content_graphic claroTips-content_graphicPage3\">\n\t\t\t\t<div class=\"claroTips-content_graphic-markPage4\">\n\t\t\t\t\t<img src=\"img/svg/claroTipsPage4-Munien.svg\" class=\"claroTips-content_graphic-img\" />\n\t\t\t\t\t<img src=\"img/svg/not-check.svg\" class=\"claroTips-content_graphic-notCheck\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"claroTips-content_description\">\n\t\t\t\t<p class=\"claroTips-content_description-title\">CLARO TIPS</p>\n\t\t\t\t<div class=\"claroTips-content_description-cntSubtitle claroTips-content_description-cntSubtitlePage2\">\n\t\t\t\t\t<p class=\"claroTips-content_description-cntSubtitle_subtitle\">Uso del celular</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"claroTips-content_description-ul\">\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Controla el tiempo de conexi\xF3n</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Mant\xE9n la pantalla a la altura de tus ojos</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Cruza el brazo contrario del que manejas el celular por la cintura y apoya el brazo con el que sostienes el m\xF3vil por encima de este</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Preferiblemente con\xE9ctalo a tu computador (WhatsappWeb), ap\xF3yate con notas de voz o audios disminuyendo los movimientos frecuentes en manos</li>\n\t\t\t\t\t<li class=\"claroTips-content_description-ul_li\">Evita chatear mientras caminas</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"codExtremidadSuperior-content container-content_slide\">\n\t\t\t<div class=\"codExtremidadSuperior-content_graphic codExtremidadSuperior-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHumans-bones.png\" class=\"extremidadSuperior-content_graphic-codo animate__animated animate__fadeIn animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"codExtremidadSuperior-content_description\">\n\t\t\t\t<p class=\"codExtremidadSuperior-content_description-title animate__animated animate__backInUp animate__delay-2s\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"codExtremidadSuperior-content_description-subTitle animate__animated animate__fadeIn animate__delay-3s\">Codo</p>\n\t\t\t\t<ul class=\"codExtremidadSuperior-content_description-list\">\n\t\t\t\t\t<li class=\"codExtremidadSuperior-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">Une el brazo con el antebrazo</li>\n\t\t\t\t\t<li class=\"codExtremidadSuperior-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">Su funci\xF3n es acercar y alejar la mano del tronco y por eso es imprescindible en muchas tareas importantes de las actividades diarias.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"codExtremidadSuperior-content_description-text animate__animated animate__backInRight animate__delay-4s\">huesos: la clav\xEDcula, la esc\xE1pula (om\xF3plato) y el h\xFAmero, adem\xE1s de m\xFAsculos, ligamentos y tendones.</p>\n\t\t\t\t<div class=\"codExtremidadSuperior-content_description-square animate__animated animate__bounceIn animate__delay-5s\">\n\t\t\t\t\t<p class=\"codExtremidadSuperior-content_description-square_text\">Podemos realizar movimientos entre doblar (flexi\xF3n) y estirar (extensi\xF3n)</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"conoceExtremidades-content container-content_slide\">\n\t\t\t<div class=\"conoceExtremidades-content_graphic\">\n\t\t\t\t<img src=\"img/svg/bodyHuman.svg\" class=\"animate__animated animate__fadeIn animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"conoceExtremidades-content_description\">\n\t\t\t\t<p class=\"conoceExtremidades-content_description-title animate__animated animate__backInUp animate__delay-2s\">CONOCE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"conoceExtremidades-content_description-text animate__animated animate__backInRight animate__delay-3s\">La extremidad superior o miembro superior, son cada una de las extremidades que se unen a la parte superior del tronco, mediante los m\xFAsculos, tendones, nervios y articulaciones.</p>\n\t\t\t\t<p class=\"conoceExtremidades-content_description-text animate__animated animate__backInRight animate__delay-3s\">En cada extremidad, encontramos 32 huesos y 45 m\xFAsculos que se unen entre s\xED para ayudar a su movilidad. Est\xE1 compuesta por 4 segmentos de forma general.</p>\n\t\t\t</div>\n\t\t\t<!--<img src=\"img/svg/bodyHumanCircle.svg\" class=\"conoceExtremidades-content_bodyHumanCircle\" />-->\n\t\t</div>\n\t";
};

},{}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"cuidaBrazos-content container-content_slide\">\n\t\t\t<div id=\"cuidaBrazosPage5\" class=\"cuidaBrazos-content_graphic cuidaBrazos-content_graphicPage3\">\n\t\t\t\t<img id=\"graphiccuidaBrazosPage6\" class=\"graphic-cuidaBrazos animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/cuidaBrazos.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"cuidaBrazos-content_description\">\n\t\t\t\t<p class=\"cuidaBrazos-content_description-title animate__animated animate__backInRight animate__delay-2s\">CUIDA TUS BRAZOS</p>\n\t\t\t\t<p class=\"cuidaBrazos-content_description-text animate__animated animate__fadeInDown animate__delay-3s\">Ten en cuenta los siguientes consejos para mantener la salud en tus extremidades superiores</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"cuidarExtremidades-content container-content_slide\">\n\t\t\t<div class=\"cuidarExtremidades-content_description cuidarExtremidades-content_description--width\">\n\t\t\t\t<p class=\"cuidarExtremidades-content_description-title cuidarExtremidades-content_description-title--blue animate__animated animate__backInLeft animate__delay-1s\">\xBFY POR QU\xC9 ES TAN IMPORTANTE CUIDAR TUS EXTREMIDADES SUPERIORES?</p>\n\t\t\t\t<p class=\"cuidarExtremidades-content_description-text cuidarExtremidades-content_description-text--align animate__animated animate__backInLeft animate__delay-2s\">Las extremidades superiores son segmentos corporales importantes en nuestro cuerpo, constantemente requerimos de ellas para todas nuestras actividades de la vida diaria, siendo necesario su cuidado al desarrollar cualquier tarea u oficio. Los principales factores que inciden en la aparici\xF3n de posibles molestias, pueden ser:</p>\n\t\t\t\t<ul class=\"cuidarExtremidades-content_description-list\">\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item animate__animated animate__backInLeft animate__delay-3s\">Uso de fuerza.</li>\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item animate__animated animate__backInLeft animate__delay-3s\">Posturas forzadas y movimientos repetitivos por tiempos prolongados y sin pausas</li>\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item animate__animated animate__backInLeft animate__delay-3s\">Factores individuales (edad, estilos de vida, g\xE9nero, condiciones hereditarias, entre otras).</li>\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item animate__animated animate__backInLeft animate__delay-3s\">Actividades extra laborales (pasatiempos como videojuegos, actividades manuales como pintar, tejer, bordar y algunos deportes).</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"cuidarExtremidades-content_graphic cuidarExtremidades-content_graphic--width\">\n\t\t\t\t<img src=\"img/svg/cuidar-extremidades.svg\" class=\"animate__animated animate__bounceIn animate__delay-4s\" />\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"ejercitaExtremidades-content container-content_slide\">\n\t\t\t<div class=\"ejercitaExtremidades-content_description\">\n\t\t\t\t<p class=\"ejercitaExtremidades-content_description-title animate__animated animate__backInLeft animate__delay-1s\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<p class=\"ejercitaExtremidades-content_description-text animate__animated animate__backInLeft animate__delay-2s\">Para los siguientes ejercicios podr\xE1s utilizar elementos como: bandas el\xE1sticas o theraband (bandas de tela o goma), theratubing (tubo de goma), mini bandas (bandas cerradas), bandas con asas de pl\xE1stico, entre otras; herramientas sencillas de utilizar y de bajo costo en su mayor\xEDa.</p>\n\t\t\t\t<p class=\"ejercitaExtremidades-content_description-message animate__animated animate__bounceIn animate__delay-2s\">Antes de utilizar cualquiera de esos elementos,<br />ten en cuenta lo siguiente</p>\n\t\t\t</div>\n\t\t\t<div class=\"ejercitaExtremidades-content_graphic\">\n\t\t\t\t<img src=\"./img/svg/mujerBandaElastica.svg\" class=\"animate__animated animate__backInRight animate__delay-1s\" />\n\t\t\t</div>\n\t\t</div>";
};

},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"eligeGoma-content container-content_slide\">\n\t\t\t<div class=\"eligeGoma-content_description\">\n\t\t\t\t<p class=\"eligeGoma-content_description-title animate__animated animate__backInLeft animate__delay-1s\">ELIGE CORRECTAMENTE LA DUREZA DE LA GOMA</p>\n\t\t\t\t<p class=\"eligeGoma-content_description-text animate__animated animate__backInLeft animate__delay-2s\">Te recomendamos elegir el color de la banda de acuerdo a tu habilidad y tono muscular, buscando siempre un punto medio entre r\xEDgida y blanda, por ejemplo: amarilla, verde, roja o azul.</p>\n\t\t\t\t<p class=\"eligeGoma-content_description-text animate__animated animate__backInLeft animate__delay-2s\">Una banda demasiado r\xEDgida ofrecer\xE1 mucha resistencia y forzar\xE1s los m\xFAsculos, por el contrario, una banda muy blanda puede ofrecer un trabajo insignificante.</p>\n\t\t\t\t<p class=\"eligeGoma-content_description-text animate__animated animate__backInLeft animate__delay-2s\">Aqu\xED te dejamos una gu\xEDa de resistencia por colores para tener en cuenta a la hora de elegir tu banda.</p>\n\n\t\t\t\t<p class=\"eligeGoma-content_description-message animate__animated animate__bounceIn animate__delay-3s\">Algunos colores podr\xEDan variar de acuerdo al fabricante.</p>\n\t\t\t</div>\n\t\t\t<div class=\"eligeGoma-content_graphic\">\n\t\t\t\t<table class=\"animate__animated animate__backInRight animate__delay-4s\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>COLOR</th>\n\t\t\t\t\t\t\t<th>RESISTENCIA</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Marfil</td>\n\t\t\t\t\t\t\t<td>Extra suave</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Amarillo</td>\n\t\t\t\t\t\t\t<td>Suave</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Rojo</td>\n\t\t\t\t\t\t\t<td>Medium</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Verde</td>\n\t\t\t\t\t\t\t<td>Fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Azul</td>\n\t\t\t\t\t\t\t<td>Extra fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Negra</td>\n\t\t\t\t\t\t\t<td>Especial fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Plata</td>\n\t\t\t\t\t\t\t<td>Super fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Oro</td>\n\t\t\t\t\t\t\t<td>Ultra fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>";
};

},{}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic\">\n\t\t\t\t<img class=\"graphic-enCasaPage1 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enCasaPage1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Evita mantener las manos dobladas</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Si presentas molestias en una de tus extremidades supe-riores, trata de cambiar la posici\xF3n en la que duermes. Evita dormir sobre el segmento afectado</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div id=\"enCasaPage2\" class=\"enCasa-content_graphic enCasa-content_graphicPage2 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img class=\"graphic-enCasaPage2 ecp\" src=\"img/svg/enCasaPage2-1.svg\" />\n\t\t\t\t<img class=\"graphic-enCasaPage2 ecp\" src=\"img/svg/enCasaPage2-2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description enCasa-content_descriptionPage2\">\n\t\t\t\t<p class=\"enCasa-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Al practicar deporte</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Al practicar alg\xFAn deporte o realizar actividad f\xEDsica, recuerda siempre incluir ejercicios de calentamiento y estiramiento muscular, previniendo lesiones musculo esquel\xE9ticas.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Durante la pr\xE1ctica de deportes o actividades de ocio que impliquen el uso frecuente de extremidades superiores, evita realizar movimientos forzados o sobre esfuerzos que puedan generar lesiones.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div id=\"enCasaPage3\" class=\"enCasa-content_graphic enCasa-content_graphicPage3 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img class=\"graphic-enCasaPage3 ecp\" src=\"img/svg/enCasaPage3.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description enCasa-content_descriptionPage2\">\n\t\t\t\t<p class=\"enCasa-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Al limpiar</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">En lo posible para las tareas del hogar, utilice herramientas como escurridor de trapero, plancha liviana, picadora, entre otras.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Durante la limpieza de superficies evita desviar la mano de lado a lado realizando preferiblemente movimientos en bloque con tu extremidad superior. Alterna el pa\xF1o de limpieza de una mano a la otra</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic enCasa-content_graphicPage4 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img class=\"graphic-enCasaPage4\" src=\"img/svg/enCasaPage4-1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Al organizar la cama</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Coloca la cobija sobre la superficie</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Estira poco a poco cada una de las puntas de la cobija para tenderla</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img class=\"graphic-enCasaPage5\" src=\"img/svg/enCasaPage5-1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Al cargar</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Evita levantar objetos pesados.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Si debes transportar manualmente varios paquetes distrib\xFAyelos sobre tus dos manos.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img class=\"graphic-enCasaPage6\" src=\"img/svg/enCasaPage6.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Al cargar</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Evita levantar objetos pesados.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Si debes transportar manualmente varios paquetes distrib\xFAyelos sobre tus dos manos.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Si posees bolso o malet\xEDn, debes colgarlo cruzado y/o de los dos tirantes, para distribuir el peso sobre los dos hombros.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage1\">\n\t\t\t\t<img id=\"graphicenTrabajoPage1\" class=\"graphic-enTrabajo animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage1.png\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Ubica los elementos de trabajo de mayor uso dentro de zona m\xEDnima, evitando los movimientos forzados en tronco y extremidad superior al realizar agarres</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage2\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage2\">\n\t\t\t\t<img id=\"graphicenTrabajoPage2\" class=\"graphic-enTrabajoPage2 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Recuerda ajustar la altura del asiento alineando los codos con la superficie de trabajo (codos doblados en \xE1ngulo recto 90\xB0).</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage3\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicenTrabajoPage3\" class=\"graphic-enTrabajoPage3 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage3.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">El mouse debe estar a tu alcance sobre la misma superficie donde se encuentra ubicado el teclado. Aseg\xFArate de mantenerlos siempre juntos, logrando un apoyo medio de antebrazo \u2013 mu\xF1eca durante su utilizaci\xF3n.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage4\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage4\">\n\t\t\t\t<img id=\"graphicenTrabajoPage4\" class=\"graphic-enTrabajoPage4 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">El mouse debe estar a tu alcance sobre la misma superficie donde se encuentra ubicado el teclado. Aseg\xFArate de mantenerlos siempre juntos, logrando un apoyo medio de antebrazo \u2013 mu\xF1eca durante su utilizaci\xF3n.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage5\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage5\" class=\"graphic-enTrabajoPage5 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage5.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Durante la digitaci\xF3n y manipulaci\xF3n del mouse, recuerde realizar movimientos en bloque.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"enTrabajo-content_description-message animate__animated animate__bounceIn animate__delay-4s\">Evita las desviaciones en mu\xF1ecas</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],107:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage6\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage5\" class=\"graphic-enTrabajoPage5 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage6.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Durante la digitaci\xF3n y manipulaci\xF3n del mouse,recuerde realizar movimientos en bloque.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"enTrabajo-content_description-message animate__animated animate__bounceIn animate__delay-4s\">Evita las desviaciones en mu\xF1ecas</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage7\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage5\" class=\"graphic-enTrabajoPage7 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage7.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Al hacer agarre de cajas u otros objetos, recuerda mantener la espalda recta, sujetando firmemente la carga con ambas manos.</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"enTrabajo-content_description-square animate__animated animate__bounceIn animate__delay-4s\">\n\t\t\t\t\t<p class=\"enTrabajo-content_description-square_text\">Utiliza idealmente casa con asas<br />o agarraderas</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],109:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage8\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage8\" class=\"graphic-enTrabajoPage8 animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/enTrabajoPage8.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title animate__animated animate__backInRight animate__delay-2s\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li animate__animated animate__backInRight animate__delay-3s\">Al hacer agarre de cajas u otros objetos, recuerda mantener la espalda recta, sujetando firmemente la carga con ambas manos.</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"enTrabajo-content_description-square animate__animated animate__bounceIn animate__delay-4s\">\n\t\t\t\t\t<p class=\"enTrabajo-content_description-square_text\">Utiliza idealmente casa con asas<br />o agarraderas</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul animate__animated animate__backInRight animate__delay-5s\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Al transportar manualmente cajas u otros elementos, mantenlos siempre al cuerpo.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],110:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<h1>Error de P\xE1gina</h1>\n\t";
};

},{}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"extremidadSuperior-content container-content_slide\">\n\t\t\t<div class=\"extremidadSuperior-content_graphic extremidadSuperior-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHuman-extremidades.png\" class=\"extremidadSuperior-content_graphic-hombro animate__animated animate__fadeIn animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"extremidadSuperior-content_description\">\n\t\t\t\t<p class=\"extremidadSuperior-content_description-title animate__animated animate__backInUp animate__delay-2s\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"extremidadSuperior-content_description-subTitle animate__animated animate__fadeIn animate__delay-3s\">Hombro</p>\n\t\t\t\t<ul class=\"extremidadSuperior-content_description-list\">\n\t\t\t\t\t<li class=\"extremidadSuperior-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">Sirve de nexo entre el brazo y el cuerpo.</li>\n\t\t\t\t\t<li class=\"extremidadSuperior-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">Est\xE1 formado por la uni\xF3n de los extremos de tres</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"extremidadSuperior-content_description-text animate__animated animate__backInRight animate__delay-4s\">huesos: la clav\xEDcula, la esc\xE1pula (om\xF3plato) y el h\xFAmero, adem\xE1s de m\xFAsculos, ligamentos y tendones.</p>\n\t\t\t\t<div class=\"extremidadSuperior-content_description-square animate__animated animate__bounceIn animate__delay-5s\">\n\t\t\t\t\t<p class=\"extremidadSuperior-content_description-square_text\">Es el hombro la articulaci\xF3n con mayor amplitud de movimientos de todo el cuerpo, podemos realizar movimientos en todas las direcciones inclusive rotaci\xF3n</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return "\n\t\t<div class=\"contenedor\">\n    <div class=\"principal__grid\">\n        <div class=\"principal__grid__child animate__animated animate__backInLeft animate__delay-1s\">\n            <!--<a class=\"opcion__menu\" href=\"#/cuidar-extremidades\">\n                <p class=\"opcion__menu__text\">Enlace a trabajar</p>\n            </a>-->\n            <a class=\"opcion__menu\" href=\"#/que-activate\">\n                <span class=\"opcion__menu__imagen-contenedor\">\n                    <img class=\"opcion__menu__imagen\" src=\"img/culturismo.png\" alt=\"\" />\n                </span>\n                <p class=\"opcion__menu__text\">&iquest;Que es act&iacute;vate?</p>\n            </a><a class=\"opcion__menu\" href=\"#/conoce-extremidades\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/cerebro.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Conoce tus extremidades superiores</p>\n            </a><a class=\"opcion__menu\" href=\"#/activa-extremidad\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/bandas.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Activa tus extremidades superiores</p>\n            </a><a class=\"opcion__menu\" href=\"#/relaja-extremidades\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/musculo.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Cuida tus extremidades superiores</p>\n            </a><a class=\"opcion__menu\" href=\"#/claro-tips-page1\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/bombilla.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Claro tips</p>\n            </a></div>\n        <div class=\"principal__grid__child\"><svg class=\"principal__figura\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 751.56 773.4\">\n                <defs>\n                    <style>\n                        .cls-1 {\n                            fill: #cddefc;\n                        }\n\n                        .cls-1,\n                        .cls-3 {\n                            opacity: 0.4;\n                        }\n\n                        .cls-2 {\n                            fill: #e6954e;\n                        }\n\n                        .cls-3 {\n                            fill: none;\n                            stroke: #cddefc;\n                            stroke-miterlimit: 10;\n                            stroke-width: 7px;\n                        }\n\n                        .cls-4 {\n                            fill: #263238;\n                        }\n\n                        .cls-5 {\n                            fill: #455a64;\n                        }\n\n                        .cls-6 {\n                            fill: #ff725e;\n                        }\n\n                        .cls-7 {\n                            opacity: 0.2;\n                        }\n\n                        .cls-8 {\n                            fill: #fbc0a4;\n                        }\n\n                        .cls-9 {\n                            fill: #d94528;\n                        }\n\n                        .cls-10 {\n                            fill: #f8e8d8;\n                        }\n\n                        .cls-11 {\n                            fill: #403433;\n                        }\n\n                        .cls-12 {\n                            fill: #f9b092;\n                        }\n\n                        .cls-13 {\n                            fill: #fff;\n                        }\n\n                        .cls-14 {\n                            fill: #f69d7d;\n                        }\n\n                        .cls-15 {\n                            fill: #f97a53;\n                        }\n\n                        .cls-16 {\n                            fill: #e0e0e0;\n                        }\n\n                        .cls-17 {\n                            fill: #f5f5f5;\n                        }\n\n                        .cls-18 {\n                            fill: #ebebeb;\n                        }\n                    </style>\n                </defs>\n                <g id=\"Capa_2\" data-name=\"Capa 2\">\n                    <g id=\"Version_1\" data-name=\"Version 1\">\n                        <path class=\"cls-1\" d=\"M708.24,504.86C683.65,599.11,631.7,677.6,565.69,731q-6.95,5.63-14.05,10.83H176.51c-4.25-3.47-8.45-7.08-12.49-10.83C67,642.77,23.13,490.27,63.13,336.75,117.43,128.26,305.88-3.11,484,43.28S762.53,296.36,708.24,504.86Z\"></path>\n                        <path class=\"cls-2\" d=\"M405,182.39a13.21,13.21,0,1,1,13.21-13.21A13.22,13.22,0,0,1,405,182.39Zm0-24a10.8,10.8,0,1,0,10.8,10.79A10.8,10.8,0,0,0,405,158.39Z\"></path>\n                        <path class=\"cls-2\" d=\"M373.9,182.39a13.21,13.21,0,1,1,13.21-13.21A13.22,13.22,0,0,1,373.9,182.39Zm0-24a10.8,10.8,0,1,0,10.79,10.79A10.8,10.8,0,0,0,373.9,158.39Z\"></path>\n                        <path class=\"cls-2\" d=\"M386.17,168.39l-1.79-1.63c1.66-1.82,3.45-2.7,5.31-2.59a6.92,6.92,0,0,1,4.75,2.69l-1.94,1.43,1-.71-1,.72a3.72,3.72,0,0,0-6.33.09Z\"></path>\n                        <path class=\"cls-3\" d=\"M731.87,494.66c-27,98.31-84,180.17-156.51,235.89q-7.64,5.88-15.42,11.3H148c-4.66-3.62-9.26-7.38-13.71-11.3-106.54-92-154.69-251.1-110.77-411.23C83.17,101.85,290.08-35.17,485.7,13.22S791.49,277.19,731.87,494.66Z\"></path>\n                        <path class=\"cls-4\" d=\"M58.61,522.24a3.46,3.46,0,0,1,.2.46c.13.35.31.8.53,1.38l2,5.29C63,534,65.51,540.6,68.8,548.72c6.62,16.22,16.28,38.49,29.9,61.53a137.3,137.3,0,0,1,8.53,17.61,79.07,79.07,0,0,1,4.54,17.66,124,124,0,0,1-.09,30.8c-1,8.72-2.35,15.7-3.24,20.52q-.7,3.55-1.1,5.54c-.13.6-.23,1.07-.3,1.44a2,2,0,0,1-.14.48,3.14,3.14,0,0,1,.06-.5c.06-.37.13-.84.23-1.45.23-1.32.55-3.18,1-5.56.8-4.84,2-11.83,3-20.53a125.39,125.39,0,0,0-.07-30.64,79.21,79.21,0,0,0-4.54-17.49A138.5,138.5,0,0,0,98,610.62C84.4,587.56,74.79,565.2,68.3,548.92c-3.23-8.15-5.66-14.82-7.28-19.45-.82-2.31-1.42-4.12-1.83-5.34l-.45-1.4A2.45,2.45,0,0,1,58.61,522.24Z\"></path>\n                        <path class=\"cls-4\" d=\"M71,599.3a3.9,3.9,0,0,1,.54.68L73,602l5.16,7.47c4.32,6.32,10.42,15,16.52,25,3,5,5.71,9.92,8,14.47s4,8.78,5.38,12.37,2.35,6.54,2.92,8.6l.68,2.38a3.89,3.89,0,0,1,.19.84,3.53,3.53,0,0,1-.34-.8l-.81-2.33c-.66-2-1.74-4.94-3.14-8.49s-3.24-7.73-5.52-12.25-4.95-9.39-8-14.39c-6.08-10-12.11-18.68-16.32-25.08-2.12-3.2-3.82-5.79-5-7.61l-1.3-2.1A3.53,3.53,0,0,1,71,599.3Z\"></path>\n                        <path class=\"cls-5\" d=\"M45.72,618.33c4.63-10,16.55-16.46,27.5-15.57-2.44,1-3.94,3.51-4.55,6.07s-.5,5.22-.71,7.84c-1,12.57-9.07,23.3-16.84,33.23-5.46,7-10.95,14-17.48,20C34.42,652,35.55,633.06,45.72,618.33Z\"></path>\n                        <path class=\"cls-5\" d=\"M73.22,602.9c-7-5.35-15.92-7.57-24.69-7.66s-17.44,1.8-25.94,4c-5.11,1.29-10.29,2.73-14.66,5.67s-7.84,7.7-7.93,13c7.21-7.93,18.83-9.46,29.12-12.44,7-2,13.7-4.93,20.81-6.41s17,.28,23.29,3.91\"></path>\n                        <path class=\"cls-5\" d=\"M72,601.48c3-3.19,1.36-10.67-1.29-14.2s-6.87-5.51-11-7a77.16,77.16,0,0,0-17-3.94,17.22,17.22,0,0,0,5.36,9.42A51.25,51.25,0,0,0,57,592.21l15,9.27\"></path>\n                        <path class=\"cls-5\" d=\"M100.61,597.19c8.71,3.81,15.45,10.94,22,17.88a97,97,0,0,1-27.38-11.34c-3.37-2.05-6.72-4.35-10.57-5.21s-8.18.86-11.39,3.52C78.67,594,91.91,593.38,100.61,597.19Z\"></path>\n                        <path class=\"cls-5\" d=\"M219.67,593.57c10.83,13.78,14.43,32.17,13.22,49.65a119,119,0,0,0-38.41-59.63c-7-5.87-16.08-10.51-24.82-10.51C187.65,571.47,208.51,579.36,219.67,593.57Z\"></path>\n                        <path class=\"cls-5\" d=\"M194.54,565.91c6,.44,11.56,3.5,16.55,6.92,7.64,5.25,14.8,11.86,18.14,20.51a63.54,63.54,0,0,0-55.69-22C180.12,568.09,187.22,565.37,194.54,565.91Z\"></path>\n                        <path class=\"cls-5\" d=\"M177.63,545.22c3.49,2.43,6.17,6.41,6,10.66a13.15,13.15,0,0,1-3.47,7.86,52.6,52.6,0,0,1-7.32,7c-2.21-9.82-4.88-20.08-7.09-29.9C169.91,541.68,174.13,542.79,177.63,545.22Z\"></path>\n                        <path class=\"cls-5\" d=\"M157.18,544.28c4.73,3,8.94,7.09,11.24,12.21s3.25,11.58.35,16.38A420,420,0,0,0,142,537.09C147.21,539.16,152.46,541.25,157.18,544.28Z\"></path>\n                        <path class=\"cls-5\" d=\"M139.84,561.14A33.66,33.66,0,0,1,168.5,573.7a28,28,0,0,0-15.39-2.91,368.6,368.6,0,0,0-39.56,7.34A33.65,33.65,0,0,1,139.84,561.14Z\"></path>\n                        <path class=\"cls-5\" d=\"M58.74,522.24c-.32-3.14,3.07-6.26,6-7.36s6.25-.74,9.33-.06c17.86,4,32.62,19.37,35.81,37.39A230.48,230.48,0,0,0,84.5,541.47l1.47.41a29.66,29.66,0,0,1-20-14.63,15.58,15.58,0,0,0-2.68-4.11c-1.2-1.13-3.09-1.73-4.51-.9\"></path>\n                        <path class=\"cls-5\" d=\"M58.72,522.21A38.5,38.5,0,0,0,30.6,515.9,33.64,33.64,0,0,0,7.23,532.37a29.87,29.87,0,0,0-.15,28.32c4.55-9.45,9.42-19.28,17.88-25.47,2-1.45,4.23-2.77,5.34-5,1.3-2.53.77-5.67,1.87-8.29,1.37-3.23,5.12-4.17,8.63-4.35s13.65,3,17.92,4.59\"></path>\n                        <path class=\"cls-5\" d=\"M58.94,522.06C50.53,519.56,41,523.68,35.3,530s-8.63,14.76-9.62,23.21-.19,17,.66,25.47a105.77,105.77,0,0,0,14.49-32.11c1.35-5.16,2.33-10.49,4.76-15.24s8.07-8.47,13.35-9.24\"></path>\n                        <path class=\"cls-5\" d=\"M59.22,522.24c-6.72-3.11-10.51-10.13-11.37-17.49A22.2,22.2,0,0,1,56,485.11,23.8,23.8,0,0,1,62.26,510c-1.42,4-4,8.1-3,12.27\"></path>\n                        <path class=\"cls-4\" d=\"M112.39,658.54a5.41,5.41,0,0,1,.28-1.06c.23-.68.52-1.7,1-3,.9-2.58,2.38-6.26,4.43-10.69a271.31,271.31,0,0,1,42.53-63.14,68.93,68.93,0,0,1,8.51-7.86,20.11,20.11,0,0,1,2.67-1.68,5,5,0,0,1,1-.4,6.51,6.51,0,0,1-1,.54,24.07,24.07,0,0,0-2.56,1.78,75.17,75.17,0,0,0-8.29,8,294.75,294.75,0,0,0-42.44,63c-2.11,4.39-3.65,8-4.64,10.56-.53,1.26-.86,2.27-1.13,2.93A6.7,6.7,0,0,1,112.39,658.54Z\"></path>\n                        <polygon class=\"cls-6\" points=\"88.59 740.75 134.51 740.75 141.83 682.14 80.2 682.14 88.59 740.75\"></polygon>\n                        <path class=\"cls-5\" d=\"M104.7,654.13c-4.86-11.18-2.81-24.73-9-35.24-4.73-8-13.48-12.82-22.17-16.21-2,6.06-1.06,12.82,1.5,18.67s6.61,10.91,10.9,15.64c5.92,6.55,12.33,11.09,18.76,17.14\"></path>\n                        <rect class=\"cls-6\" x=\"77.37\" y=\"682.14\" width=\"68.68\" height=\"11.96\" transform=\"translate(223.42 1376.24) rotate(180)\"></rect>\n                        <path class=\"cls-4\" d=\"M79.66,694.49c0-.22,14.86-.39,33.19-.39s33.2.17,33.2.39-14.86.38-33.2.38S79.66,694.7,79.66,694.49Z\"></path>\n                        <path class=\"cls-5\" d=\"M55.58,522.71a75.67,75.67,0,0,1,8-12,25.45,25.45,0,0,1,11.73-8.08c6.19-1.81,12.84-.37,19,1.47a151.72,151.72,0,0,1,21.12,8,41.81,41.81,0,0,1-28.07.5c-4.73-1.61-9.32-1.4-14.27-.84-6,.69-13.6,6.27-17.51,10.92\"></path>\n                        <path class=\"cls-5\" d=\"M167.25,572.87c10.2.56,19.12,8.41,22.68,18s2.34,20.43-1.51,29.89-10.14,17.71-16.81,25.44c-3.35-11.51-6.72-23.08-8.19-35S163.07,584.11,167.25,572.87Z\"></path>\n                        <g class=\"cls-7\">\n                            <path d=\"M219.67,593.57c10.83,13.78,14.43,32.17,13.22,49.65a119,119,0,0,0-38.41-59.616.08-10.51-24.82-10.51C187.65,571.47,208.51,579.36,219.67,593.57Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M194.54,565.91c6,.44,11.56,3.5,16.55,6.92,7.64,5.25,14.8,11.86,18.14,20.51a4,0,0,0-55.69-22C180.12,568.09,187.22,565.37,194.54,565.91Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M177.63,545.22c3.49,2.43,6.17,6.41,6,10.66a13.15,13.15,0,0,1-3.47,7.86,52.61-7.32,7c-2.21-9.82-4.88-20.08-7.09-29.9C169.91,541.68,174.13,542.79,177.63,545.22Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M157.18,544.28c4.73,3,8.94,7.09,11.24,12.21s3.25,11.58.35,16.38A420,420,0,0.09C147.21,539.16,152.46,541.25,157.18,544.28Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M139.84,561.14A33.66,33.66,0,0,1,168.5,573.7a28,28,0,0,0-15.39-2.91,368.6,3-39.56,7.34A33.65,33.65,0,0,1,139.84,561.14Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M167.25,572.87c10.2.56,19.12,8.41,22.68,18s2.34,20.43-1.51,29.89-10.14,17.7.44c-3.35-11.51-6.72-23.08-8.19-35S163.07,584.11,167.25,572.87Z\"></path>\n                        </g>\n                        <path class=\"cls-4\" d=\"M623.17,604.8s-.06.09-.13.28l-.33.86-1.22,3.29c-1.06,2.86-2.62,7-4.67,12a289.31,289.31,0,0,1-18.6,38.28,85.37,85.37,0,0,0-5.31,11,49.53,49.53,0,0,0-2.82,11,77.11,77.11,0,0,0,.06,19.16c.63,5.43,1.45,9.77,2,12.77l.68,3.44c.08.38.15.67.19.9a1.31,1.31,0,0,0,.09.3s0-.11,0-.31-.08-.53-.14-.9c-.14-.82-.34-2-.6-3.47-.5-3-1.27-7.35-1.86-12.77a77.74,77.74,0,0,1,0-19.06,49.1,49.1,0,0,1,2.83-10.88,84.36,84.36,0,0,1,5.29-10.89,276,276,0,0,0,18.49-38.39c2-5.08,3.53-9.23,4.53-12.11.52-1.43.89-2.56,1.14-3.32l.28-.87A2.54,2.54,0,0,0,623.17,604.8Z\"></path>\n                        <path class=\"cls-5\" d=\"M523,649.18c-6.73,8.57-9,20-8.22,30.89a74.05,74.05,0,0,1,23.9-37.1c4.39-3.66,10-6.55,15.44-6.55C542.87,635.43,529.9,640.34,523,649.18Z\"></path>\n                        <path class=\"cls-5\" d=\"M538.59,632c-3.76.28-7.19,2.18-10.3,4.31-4.75,3.27-9.21,7.38-11.28,12.76a39.51,39.51,0,0,1,34.65-13.67C547.56,633.32,543.15,631.63,538.59,632Z\"></path>\n                        <path class=\"cls-5\" d=\"M549.11,619.09a8,8,0,0,0-3.72,6.64,8.17,8.17,0,0,0,2.15,4.88A32.34,32.34,0,0,0,552.1,635c1.37-6.11,3-12.49,4.41-18.6A19.74,19.74,0,0,0,549.11,619.09Z\"></path>\n                        <path class=\"cls-5\" d=\"M561.83,618.51a18.16,18.16,0,0,0-7,7.6c-1.42,3.18-2,7.2-.22,10.19A258.4,258.4,0,0,1,571.28,614,53.72,53.72,0,0,0,561.83,618.51Z\"></path>\n                        <path class=\"cls-5\" d=\"M572.63,629a21,21,0,0,0-17.84,7.81,17.39,17.39,0,0,1,9.58-1.81A228.19,228.19,0,0,1,589,639.57,20.92,20.92,0,0,0,572.63,629Z\"></path>\n                        <path class=\"cls-5\" d=\"M623.08,604.8c.2-2-1.91-3.9-3.75-4.58a10.25,10.25,0,0,0-5.81,0,29.73,29.73,0,0,0-22.28,23.26,144.21,144.21,0,0,1,15.81-6.68l-.91.26a18.48,18.48,0,0,0,12.47-9.11,9.58,9.58,0,0,1,1.67-2.56,2.45,2.45,0,0,1,2.8-.55\"></path>\n                        <path class=\"cls-5\" d=\"M623.1,604.78a23.94,23.94,0,0,1,17.49-3.93,20.9,20.9,0,0,1,14.54,10.25,18.56,18.56,0,0,1,.09,17.62c-2.83-5.88-5.85-12-11.12-15.85-1.23-.9-2.63-1.72-3.32-3.08-.81-1.58-.48-3.53-1.17-5.16-.85-2-3.18-2.6-5.36-2.71s-8.5,1.89-11.15,2.86\"></path>\n                        <path class=\"cls-5\" d=\"M623,604.68c5.23-1.55,11.15,1,14.71,4.93s5.37,9.18,6,14.44.12,10.57-.41,15.84a65.81,65.81,0,0,1-9-20c-.84-3.22-1.46-6.53-3-9.49a11.75,11.75,0,0,0-8.3-5.75\"></path>\n                        <path class=\"cls-5\" d=\"M622.79,604.8c4.18-1.94,6.53-6.31,7.07-10.88a13.82,13.82,0,0,0-5.07-12.23,14.83,14.83,0,0,0-3.9,15.47c.89,2.52,2.5,5,1.9,7.64\"></path>\n                        <path class=\"cls-4\" d=\"M589.71,689.6a5.38,5.38,0,0,0-.18-.66c-.14-.42-.32-1.06-.62-1.86-.57-1.6-1.48-3.89-2.76-6.65a168.49,168.49,0,0,0-26.46-39.28,41.08,41.08,0,0,0-5.3-4.89,12.12,12.12,0,0,0-1.66-1,4.54,4.54,0,0,0-.63-.25,3.37,3.37,0,0,0,.59.34,14.29,14.29,0,0,1,1.59,1.11,46.08,46.08,0,0,1,5.16,5,183.46,183.46,0,0,1,26.4,39.2c1.32,2.73,2.28,5,2.89,6.57.33.78.54,1.41.71,1.82A2.93,2.93,0,0,0,589.71,689.6Z\"></path>\n                        <polygon class=\"cls-6\" points=\"604.51 740.75 575.94 740.75 571.38 704.28 609.73 704.28 604.51 740.75\"></polygon>\n                        <rect class=\"cls-6\" x=\"568.76\" y=\"704.28\" width=\"42.73\" height=\"7.44\"></rect>\n                        <path class=\"cls-4\" d=\"M610.07,712c0-.13-9.25-.23-20.66-.23s-20.65.1-20.65.23,9.24.24,20.65.24S610.07,712.1,610.07,712Z\"></path>\n                        <path class=\"cls-5\" d=\"M625.05,605.09a46.4,46.4,0,0,0-5-7.47,15.73,15.73,0,0,0-7.3-5c-3.85-1.13-8-.23-11.83.91a94.74,94.74,0,0,0-13.14,5,25.94,25.94,0,0,0,17.47.31,19.7,19.7,0,0,1,8.88-.52c3.75.43,8.46,3.91,10.89,6.8\"></path>\n                        <path class=\"cls-5\" d=\"M555.57,636.3c-6.34.35-11.9,5.23-14.11,11.18s-1.46,12.72.94,18.6,6.31,11,10.46,15.83c2.08-7.17,4.18-14.36,5.09-21.77S558.17,643.29,555.57,636.3Z\"></path>\n                        <g class=\"cls-7\">\n                            <path d=\"M523,649.18c-6.73,8.57-9,20-8.22,30.89a74.05,74.05,0,0,1,23.9-37.1c4.39-3.615.44-6.55C542.87,635.43,529.9,640.34,523,649.18Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M538.59,632c-3.76.28-7.19,2.18-10.3,4.31-4.75,3.27-9.21,7.38-11.28,12.76a390,0,1,34.65-13.67C547.56,633.32,543.15,631.63,538.59,632Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M549.11,619.09a8,8,0,0,0-3.72,6.64,8.17,8.17,0,0,0,2.15,4.88A32.34,32.34,0,635c1.37-6.11,3-12.49,4.41-18.6A19.74,19.74,0,0,0,549.11,619.09Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M561.83,618.51a18.16,18.16,0,0,0-7,7.6c-1.42,3.18-2,7.2-.22,10.19A258.4,25871.28,614,53.72,53.72,0,0,0,561.83,618.51Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M572.63,629a21,21,0,0,0-17.84,7.81,17.39,17.39,0,0,1,9.58-1.81A228.19,228.19,639.57,20.92,20.92,0,0,0,572.63,629Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M555.57,636.3c-6.34.35-11.9,5.23-14.11,11.18s-1.46,12.72.94,18.6,6.31,11,102.08-7.17,4.18-14.36,5.09-21.77S558.17,643.29,555.57,636.3Z\"></path>\n                        </g>\n                        <path class=\"cls-8\" d=\"M371.26,514.63c-1,9.83-2.11,20.09-2.11,20.09s-3.8,11.61-7.63,18.92c10.84,4.12,22.19,4.38,32.38,9.89.52-2.43,4.53-23.93,14.82-32.9.64-.55,1.14-2.2,1.82-4.46C397.48,522.21,384.26,518.78,371.26,514.63Z\"></path>\n                        <circle class=\"cls-8\" cx=\"377.15\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-8\" d=\"M431.26,523.64c-7.29-.44-15.57-2.53-23.24-2.54-.73,12.88-1.44,26.1-2.12,39.33,11.75.34,34.08,0,34.08,0a256.72,256.72,0,0,0,8.28-35.79Q439.76,524.16,431.26,523.64Z\"></path>\n                        <circle class=\"cls-8\" cx=\"422.94\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-2\" d=\"M462.21,379.46c20.81,57.52-9.7,149.7-9.7,149.7s-45.32,21-86.92,3.39l-15.42-69.34s-11.83-56.6,22.69-81.73S462.21,379.46,462.21,379.46Z\"></path>\n                        <path class=\"cls-8\" d=\"M434.76,721c-1.39-2.65-4.56-4.14-8.81-17.93-3.54-11.46,9.83-72.09,14.9-104.61h0c2.7-14.75.08-32.13-.87-38.05-12.37.58-21.7.4-34.08,0-.24,4.87-1.14,19.38-1.37,24.19-.15,3.26-.25,6.46-.33,9.65h0s-2.45,33.76,1.73,62.81c6.16,42.84.11,54.12-.11,54.88,0,0,2,10.69,6.63,11.67,12.87,2.67,20.39,18.71,28.42,17.09s9.5-3.76,9.5-3.76S437.85,726.91,434.76,721Z\"></path>\n                        <circle class=\"cls-8\" cx=\"422.94\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-9\" d=\"M446.45,739.2c3.9-.41-6.57-11.49-5.85-11s24.26,19.07,25.87,23.29c.6,1.55-.6,4.4-5.33,4.72s-20.27-4.36-24.73-6-19.87-21.39-23.17-22.9-3.81,18.78-4.55,19l-2.59-1.78s-4.55-20.94-.3-32.61c0,0,3.46.64,11.48,8.63C425.82,729.11,441,739.77,446.45,739.2Z\"></path>\n                        <path class=\"cls-8\" d=\"M505.21,409.4c1.13,2.29-.54,12.93-.88,19.57s1.91,13,3.94,12.89-.12-12.45,4.31-11.81,6.84,6.47,9,12.11,5.91,20.41,8.57,18.41c2.89-2.18-5.19-22.75-2.95-23.68,1.56-.65,10.56,19.91,14.12,18.94,3.76-1-10.72-20.55-9.08-23.28s13.13,17.68,16,15.31-12.9-20.9-12.15-23.1,12.16,12.19,13.62,9.49c1.55-2.85-10.55-14.88-16.78-21s-16-14.39-17.79-15.85Z\"></path>\n                        <path class=\"cls-8\" d=\"M505.21,409.4a7.81,7.81,0,1,0-.08-11A7.81,7.81,0,0,0,505.21,409.4Z\"></path>\n                        <path class=\"cls-10\" d=\"M469.88,352.62a16.24,16.24,0,0,1-16.34-21,16.24,16.24,0,1,1,16.34,21Z\"></path>\n                        <path class=\"cls-10\" d=\"M500.94,411.88c-8.92-8.79-44.09-64.64-45.6-66.79l-1.55-3.15,27.94-16,1.11,1.83a207.44,207.44,0,0,1,11.82,24c1.67,3.89,26.21,45.14,26.21,45.14L502.28,413.3Z\"></path>\n                        <path class=\"cls-10\" d=\"M453,274.78a18.78,18.78,0,0,1-30.57-3.7,18.78,18.78,0,1,1,30.57,3.7Z\"></path>\n                        <path class=\"cls-10\" d=\"M455.69,346.62l-1.58-2.41c-1.17-2.19-28.61-54.13-33.43-78l-.41-2,36.45-8.31.55,1.94c7.59,26.75,23.18,66.05,25.57,71.29l.83,1.81Z\"></path>\n                        <path class=\"cls-10\" d=\"M480.56,347.4a16.24,16.24,0,1,1,1.63-19.48,16.27,16.27,0,0,1-1.63,19.48Z\"></path>\n                        <path class=\"cls-8\" d=\"M320.35,447.19c-.76,2.43,2.59,12.68,4,19.17s.19,13.15-1.84,13.35-1.86-12.3-6.13-11-5.72,7.48-7,13.4-2.58,21.09-5.53,19.53c-3.2-1.68,1.5-23.28-.85-23.85-1.64-.39-7.26,21.34-10.93,20.95-3.88-.41,7.31-22,5.26-24.43S287.17,493.89,283.94,492s9.41-22.69,8.32-24.74-10.07,14-11.94,11.54,8.05-16.38,13.24-23.37,13.5-16.75,15-18.47Z\"></path>\n                        <path class=\"cls-8\" d=\"M320.35,447.19a7.82,7.82,0,1,1-1.69-10.93A7.83,7.83,0,0,1,320.35,447.19Z\"></path>\n                        <path class=\"cls-10\" d=\"M338.27,374.91a16.24,16.24,0,1,0-17.9-5.08A16.24,16.24,0,0,0,338.27,374.91Z\"></path>\n                        <path class=\"cls-10\" d=\"M324.84,444.92c5-11.5,23.49-79.88,24.09-82.44l.25-3.5-31.88-4.32-.34,2.11c-.07.4-1.61,9.92-2,26.66-.09,4.24-14.23,55.1-14.23,55.1l23.37,8.2Z\"></path>\n                        <path class=\"cls-10\" d=\"M351.77,293.55a18.86,18.86,0,0,1-6.44,1.26,18.78,18.78,0,0,1-19.13-18.42,18.78,18.78,0,1,1,25.57,17.16Z\"></path>\n                        <path class=\"cls-10\" d=\"M317,362.73l-.31-2.87c0-2.48,3.56-65.17,10.11-88.67l.56-2,36.25,9.13-.39,2c-5.37,27.28-13.81,73.33-14.05,79.08l-.09,2Z\"></path>\n                        <path class=\"cls-10\" d=\"M338.84,374.7a16.24,16.24,0,1,1,6.6-4.75A16.25,16.25,0,0,1,338.84,374.7Z\"></path>\n                        <path class=\"cls-9\" d=\"M340.64,714.67s3.37,7.24.24,14.4-6.85,16.14-7.24,22.5-6,18.13-16.12,21-15.89-2.68-14.9-10.86S313,742.45,313,742.45Z\"></path>\n                        <path class=\"cls-8\" d=\"M339.12,640.43c-5.18,32.63-7,67-23.08,96.81-1.41,2.61-2.94,5.24-3.48,8.15s.11,6.27,2.43,8.12,6.06,1.71,8.75.17,4.6-4.13,6.2-6.79c8.7-14.48,10.13-32,15-48.22,6.93-23.18,19.75-43.51,28.88-65.72S388.28,586.6,394,563.28c-10.6-3.7-21.35-8-32.45-9.64,0,0-9.35,18.07-10.24,20.12a120.48,120.48,0,0,0-6.91,20.85c-3.45,14.94-2.85,30.68-5.25,45.82\"></path>\n                        <circle class=\"cls-8\" cx=\"377.15\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-11\" d=\"M334.4,127.55c11.07-13.82,32-27.32,60.18-24.41,17.77,1.83,47.75,14.23,44.79,41s-10.93,23.05,1.48,37.82,42.31,62.17.91,90.93-92,13.91-120.66-18S320,145.53,334.4,127.55Z\"></path>\n                        <path class=\"cls-10\" d=\"M445.23,303.77c10.25-10.54,9.65-20.19,5.67-27.77.15-.14.32-.26.47-.4a18.72,18.72,0,0,0-7.55-31.72v0s-1.28-.76-25-6.65c-14.09-3.75-29.33-12.06-55.62,4.6-6,5.44-18.66,9.29-28.82,19A18.73,18.73,0,0,0,338,294.17a18.52,18.52,0,0,0,6.45,1.16,18.16,18.16,0,0,0,2.77-.22c5.33,14.46,17.69,52.95,17.69,52.95l-7.63,38.77c55.55,29,110-4.75,110-4.75Z\"></path>\n                        <path class=\"cls-8\" d=\"M402.84,244c-4.26,2.46-7.61,3.75-12.39,3.87-7.11.19-9.71-4-12.08-4.6l-23.06-53.25L397,208.85l.1,1.77Z\"></path>\n                        <path class=\"cls-12\" d=\"M391.38,227.47a41.94,41.94,0,0,1-12.81-3.74,87.48,87.48,0,0,1-11.37-6.22l-11.89-27.46L397,208.85l.1,1.77,3,17.65C397.22,228,394.3,227.81,391.38,227.47Z\"></path>\n                        <path class=\"cls-8\" d=\"M341.2,161.71s-15.31-3.29-13.32,13.91,14.45,17.54,18.13,18.29c0,0,6.85,30.63,44.64,27.69S422.24,189.41,422,170s1.89-53.09-22.84-55.58C374.17,111.93,339,113.57,341.2,161.71Z\"></path>\n                        <path class=\"cls-11 ojo\" d=\"M382,170a5.08,5.08,0,1,1-5.3-4.84A5.08,5.08,0,0,1,382,170Z\"></path>\n                        <path class=\"cls-11 ojo\" d=\"M407.91,170a5.08,5.08,0,1,1-5.3-4.84A5.08,5.08,0,0,1,407.91,170Z\"></path>\n                        <path class=\"cls-11\" d=\"M384.07,158.11c.2-.27-.55-1.28-2.26-2.25a13.19,13.19,0,0,0-14.59,1.39,7.87,7.87,0,0,0-1.56,1.73c-.29.47-.36.79-.24.92s.45,0,.92-.19l1.88-.94a18.74,18.74,0,0,1,6.3-1.86,18.4,18.4,0,0,1,6.59.63C382.79,158,383.86,158.42,384.07,158.11Z\"></path>\n                        <path class=\"cls-11\" d=\"M398.67,157.47c.27.26,1.24-.36,2.81-1.12a17.33,17.33,0,0,1,12.88-1.24l2,.57c.51.13.84.16.94,0s0-.44-.41-.85a7.87,7.87,0,0,0-1.86-1.4,13.19,13.19,0,0,0-14.59,1.4C399,156.12,398.43,157.24,398.67,157.47Z\"></path>\n                        <path class=\"cls-12\" d=\"M330.86,169.38c-1.32,4.55.55,9.35,2.38,13.72a7.44,7.44,0,0,0,2.31,3.46c1.16.8,3.06.68,3.67-.59s-.28-2.61-1-3.79-1.07-3,.08-3.69c.53-.34,1.23-.31,1.79-.61,1.22-.64,1.21-2.38.9-3.73a21.23,21.23,0,0,0-2-5.32c-.91-1.64-2.34-3.32-4.21-3.29S331.4,167.5,330.86,169.38Z\"></path>\n                        <path class=\"cls-13\" d=\"M372.52,229.8s18.59,16.06,22.89,15.36,4.73-16.89,4.73-16.89,10.67,2.91,12.54,5,4.65,22.3,4.65,22.3c-3.28,3.43-18.1-8.8-20.43-7s-11.81,16.53-14,16.29c0,0-18-23.18-17.38-27C365.79,236.29,372.52,229.8,372.52,229.8Z\"></path>\n                        <path class=\"cls-11\" d=\"M341.2,161.71c20.34-4.57,25.61-13.56,27.52-29.28,0,0,13.3,37.55,63.34,28-.33-.27-2.8-50-34.52-49.11-32.81.94-50.82,6-56.34,26.34C337,153.13,341.2,161.71,341.2,161.71Z\"></path>\n                        <path class=\"cls-11\" d=\"M341.2,161.71c.11,5.26,6,24.13,6,24.13s-1.14-25.56,2.27-31S341.2,161.71,341.2,161.71Z\"></path>\n                        <path class=\"cls-12\" d=\"M376.94,190.07a10.14,10.14,0,1,1-10.59-9.66A10.15,10.15,0,0,1,376.94,190.07Z\"></path>\n                        <path class=\"cls-12\" d=\"M422.18,188a9.84,9.84,0,1,1-10.27-9.38A9.83,9.83,0,0,1,422.18,188Z\"></path>\n                        <path class=\"cls-14\" d=\"M396.61,184.05c.65.67-.36,2.58-2.7,3s-4-1-3.62-1.81,1.64-1.26,3-1.55S396,183.34,396.61,184.05Z\"></path>\n                        <path class=\"cls-15\" d=\"M399.4,193.59c.22.37-.64,1.45-2.61,2.33a14.09,14.09,0,0,1-15.47-3.4c-1.42-1.63-1.75-3-1.39-3.22.79-.55,4,2.88,9.34,4C394.56,194.52,398.92,192.75,399.4,193.59Z\"></path>\n                        <rect class=\"cls-16\" x=\"729.63\" y=\"9.47\" width=\"9.33\" height=\"200.61\"></rect>\n                        <rect class=\"cls-17\" x=\"594.29\" y=\"11.02\" width=\"133.93\" height=\"199.34\" rx=\"0.13\"></rect>\n                        <path class=\"cls-18\" d=\"M729.63,211.91H592.87a.13.13,0,0,1-.14-.13V9.61a.14.14,0,0,1,.14-.14H729.63a.14.14,0,0,1,.14.14V211.78A.13.13,0,0,1,729.63,211.91ZM596,208.81H726.53a.13.13,0,0,0,.13-.14v-196a.13.13,0,0,0-.13-.14H596a.13.13,0,0,0-.13.14v196A.13.13,0,0,0,596,208.81Z\"></path>\n                        <rect class=\"cls-13\" x=\"607.77\" y=\"23.32\" width=\"107.19\" height=\"174.61\" rx=\"0.13\"></rect>\n                        <rect class=\"cls-18\" x=\"631.16\" y=\"72.82\" width=\"60.19\" height=\"70.55\" rx=\"0.06\"></rect>\n                        <path class=\"cls-16\" d=\"M686.58,134.73c.08.23-2.89,1.53-8.55.87a20.91,20.91,0,0,1-9.6-3.84A19.43,19.43,0,0,1,661,120a16.88,16.88,0,0,1,5.7-16,15.17,15.17,0,0,1,4.33-2.53,11.58,11.58,0,0,1,5.42-.63,9.53,9.53,0,0,1,5.41,2.37,7,7,0,0,1,2.13,6.3,10.28,10.28,0,0,1-3,5.42,20.13,20.13,0,0,1-4.53,3.34,25.08,25.08,0,0,1-10.82,3.09,21.55,21.55,0,0,1-11.53-2.63,20.91,20.91,0,0,1-8.48-8.79,17.93,17.93,0,0,1-1.52-12.32,18.33,18.33,0,0,1,6.49-10.14A15.88,15.88,0,0,1,656,84.7a13.5,13.5,0,0,1,6.13-.19,10,10,0,0,1,5.56,3.14,9.23,9.23,0,0,1,2.18,5.94,11.33,11.33,0,0,1-1.45,5.66,15.14,15.14,0,0,1-3.43,4.12,23,23,0,0,1-8.53,4.53,21.84,21.84,0,0,1-9,.7,18.4,18.4,0,0,1-7.81-3,16.9,16.9,0,0,1-7.45-11.81A14.22,14.22,0,0,1,635,83.67a12.06,12.06,0,0,1,5.11-4.08c1.4-.53,2.21-.52,2.24-.38s-.64.5-1.78,1.26a13.43,13.43,0,0,0-4,4.27A12.65,12.65,0,0,0,635,93.39a14.17,14.17,0,0,0,6.63,9.28A16.34,16.34,0,0,0,655.31,104a19.36,19.36,0,0,0,6.84-3.87c2-1.77,3.31-4,3.2-6.42a4.61,4.61,0,0,0-4.12-4.55,9,9,0,0,0-3.94.19,11.3,11.3,0,0,0-3.71,1.94,13.55,13.55,0,0,0-4.68,7.46,13,13,0,0,0,1.15,9,16.21,16.21,0,0,0,6.47,6.73,16.79,16.79,0,0,0,8.91,2.07,20.36,20.36,0,0,0,8.77-2.39,15.51,15.51,0,0,0,3.49-2.47,5.92,5.92,0,0,0,1.78-2.89,2.55,2.55,0,0,0-.72-2.33,5.22,5.22,0,0,0-2.9-1.27,7.23,7.23,0,0,0-3.41.29,10.71,10.71,0,0,0-3.18,1.74,13.19,13.19,0,0,0-4.84,12.27,16.86,16.86,0,0,0,5.73,10.16,20.35,20.35,0,0,0,8.24,4.12C683.48,134.89,686.54,134.3,686.58,134.73Z\"></path>\n                    </g>\n                </g>\n            </svg></div>\n    </div>\n    <!--<div class=\"contenedor__navegacion\">\n        <a class=\"boton__navegacion\" href=\"./vistas/vista-1.html\">\n            <span class=\"boton__navegacion__figura-contenedor\">\n                <svg class=\"boton__navegacion__figura\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 26.44 26.27\" fill=\"#fff\">\n                    <g id=\"Capa_2\" data-name=\"Capa 2\">\n                        <g id=\"Pop_up\" data-name=\"Pop up\">\n                            <g id=\"Logo_y_botones\" data-name=\"Logo y botones\">\n                                <path fill=\"#fff\" d=\"M1.56,26.27A1.58,1.58,0,0,1,0,24.65v-23A1.58,1.58,0,0,1,1.56,0,1.69,1.69,0,0,1,2.4.23L19.79,11.75a1.57,1.57,0,0,1,0,2.77L2.4,26a1.69,1.69,0,0,1-.84.23Z\"></path>\n                                <path fill=\"#fff\" d=\"M23.24,25.71a3.2,3.2,0,0,1-3.2-3.2V3.76a3.2,3.2,0,0,1,6.4,0V22.51A3.2,3.2,0,0,1,23.24,25.71Z\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </span>\n        </a>\n        <a class=\"boton__navegacion\" href=\"./vistas/vista-1.html\">\n            <span class=\"boton__navegacion__figura-contenedor\">\n                <svg class=\"boton__navegacion__figura\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 26.44 26.27\">\n                    <g id=\"Capa_2\" data-name=\"Capa 2\">\n                        <g id=\"Pop_up\" data-name=\"Pop up\">\n                            <g id=\"Logo_y_botones\" data-name=\"Logo y botones\">\n                                <path fill=\"#fff\" d=\"M1.56,26.27A1.58,1.58,0,0,1,0,24.65v-23A1.58,1.58,0,0,1,1.56,0,1.69,1.69,0,0,1,2.4.23L19.79,11.75a1.57,1.57,0,0,1,0,2.77L2.4,26a1.69,1.69,0,0,1-.84.23Z\"></path>\n                                <path fill=\"#fff\" d=\"M23.24,25.71a3.2,3.2,0,0,1-3.2-3.2V3.76a3.2,3.2,0,0,1,6.4,0V22.51A3.2,3.2,0,0,1,23.24,25.71Z\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </span>\n        </a>\n    </div>-->\n\t</div>\n\t";
};

},{}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"mantenMovimientos-content container-content_slide\">\n\t\t\t<div class=\"mantenMovimientos-content_description\">\n\t\t\t\t<p class=\"mantenMovimientos-content_description-title animate__animated animate__backInLeft animate__delay-1s\">MANT\xC9N UNA BUENA POSTURA EN ESPALDA Y CONTROLA LA VELOCIDAD DE LOS MOVIMIENTOS</p>\n\t\t\t\t<p class=\"mantenMovimientos-content_description-text animate__animated animate__backInLeft animate__delay-2s\">Al realizar estos ejercicios con resistencia, recuerda que la espalda debe estar siempre recta, evitando flexiones o curvaturas que favorezcan la realizaci\xF3n del ejercicio. Ten en cuenta que los movimientos no deben ser bruscos. Mientras regresas a la posici\xF3n inicial del ejercicio, realiza un peque\xF1o frenado para no permitir que la banda le gane a nuestra fuerza. Te invitamos a practicar los siguientes ejercicios</p>\n\t\t\t</div>\n\t\t\t<div class=\"mantenMovimientos-content_graphic\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInRight animate__delay-3s\" src=\"img/svg/bandaElasticaManten.svg\" />\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"muniecaExtremidad-content container-content_slide\">\n\t\t\t<div class=\"muniecaExtremidad-content_graphic muniecaExtremidad-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHumanMuniecaMano.png\" class=\"extremidadSuperior-content_graphic-munieca animate__animated animate__fadeIn animate__delay-1s\" />\n\t\t\t</div>\n\t\t\t<div class=\"muniecaExtremidad-content_description\">\n\t\t\t\t<p class=\"muniecaExtremidad-content_description-title animate__animated animate__backInUp animate__delay-2s\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"muniecaExtremidad-content_description-subTitle animate__animated animate__fadeIn animate__delay-3s\">Mu\xF1eca y Mano</p>\n\t\t\t\t<ul class=\"muniecaExtremidad-content_description-list\">\n\t\t\t\t\t<li class=\"muniecaExtremidad-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">La mu\xF1eca nos permite la uni\xF3n entre el antebrazo y la mano.</li>\n\t\t\t\t\t<li class=\"muniecaExtremidad-content_description-list_item animate__animated animate__backInRight animate__delay-4s\">La mano es el segmento entre la mu\xF1eca y los dedos,</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"muniecaExtremidad-content_description-text animate__animated animate__backInRight animate__delay-4s\">encontr\xE1ndose varios huesos que se unen entre s\xED, permiti\xE9ndonos realizar diferentes movimientos que nos facilitan la manipulaci\xF3n de los objetos y/o elementos.</p>\n\t\t\t\t<div class=\"muniecaExtremidad-content_description-square animate__animated animate__bounceIn animate__delay-5s\">\n\t\t\t\t\t<p class=\"muniecaExtremidad-content_description-square_text\">Como movimientos a nivel de mu\xF1eca tenemos abajo o flexi\xF3n, arriba o extensi\xF3n, a la derecha o izquierda y a nivel de los dedos abajo o arriba, separar y unir los dedos.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--<img src=\"img/svg/bodyHumanCircle.svg\" class=\"conoceExtremidades-content_bodyHumanCircle\" />-->\n\t\t</div>\n\t";
};

},{}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<header class=\"portada-header\">\n\t\t\t<div class=\"portada-header_cnt container-content_slide\">\n\t\t\t\t<div class=\"portada-header_logoLeft\">\n\t\t\t\t\t<img src=\"./img/logo.png\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"portada-header_logoRight\">\n\t\t\t\t\t<img src=\"./img/gestion-talento.png\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<section class=\"portada-content container-content_slide\">\n\t\t\t<div class=\"portada-content_div1\">\n\t\t\t\t<div class=\"portada-content_div1-left\">\n\t\t\t\t\t<p class=\"portada-content_div1-left_textLarge animate__animated animate__backInLeft animate__delay-2s\">ACT\xCD</p>\n\t\t\t\t\t<p class=\"portada-content_div1-left_textSmall animate__animated animate__backInLeft animate__delay-2s\">EXTREMIDADES</p>\n\t\t\t\t</div>\n\t\t\t\t<img src=\"./img/svg/portadaMujer.svg\" class=\"portada-content_imgCenter animate__animated animate__fadeInDown animate__delay-1s\" />\n\t\t\t\t<div class=\"portada-content_div2-left\">\n\t\t\t\t\t<p class=\"portada-content_div2-left_textLarge animate__animated animate__backInRight animate__delay-3s\">VATE</p>\n\t\t\t\t\t<p class=\"portada-content_div2-left_textSmall animate__animated animate__backInRight animate__delay-3s\">INFERIORES</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"portada-content_div2\">\n\t\t\t\t<p class=\"portada-content_div2-text animate__animated animate__backInUp animate__delay-4s\">EQUIPO DE SEGURIDAD, SALUD EN EL TRABAJO<br/>Y AMBIENTE</p>\n\t\t\t</div>\n\t\t</section>\n\t";
};

},{}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"queEsActivate-content container-content_slide\">\n\t\t\t<div class=\"queEsActivate-content_description\">\n\t\t\t\t<p class=\"queEsActivate-content_description-title\">\xBFQUE ES ACT\xCDVATE?</p>\n\t\t\t\t<p class=\"animate__animated animate__slideInLeft animate__delay-2s queEsActivate-content_description-text\">Act\xEDvate es una herramienta que ha sido dise\xF1ada para brindarte una serie de ejercicios f\xEDsicos que podr\xE1s realizar como parte de tu gimnasia laboral ya sea en la sede de trabajo o en la casa.</p>\n\t\t\t\t<p class=\"animate__animated animate__slideInLeft animate__delay-3s queEsActivate-content_description-text\">Las pausas activas dentro de la jornada laboral son importantes para tu salud f\xEDsica y mental. Te recordamos que, como parte del autocuidado debes asegurar la inclusi\xF3n de ejercicios que te permitan activar tu respiraci\xF3n, circulaci\xF3n, mejorar tu movilidad articular, realizar estiramientos musculares y propiciar cambios de posici\xF3n.</p>\n\t\t\t\t<p class=\"animate__animated animate__slideInLeft animate__delay-4s queEsActivate-content_description-text\">La pr\xE1ctica diaria de esta actividad, te ayudar\xE1 a disminuir la fatiga f\xEDsica, prevenir la aparici\xF3n de enfermedades osteomusculares y potencializar el funcionamiento cerebral incrementando tu productividad laboral.</p>\n\t\t\t</div>\n\t\t\t<div class=\"queEsActivate-content_graphic\">\n\t\t\t\t<img src=\"img/svg/human-excercise.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"queEsActivate-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<audio id=\"audio1Slide3\" class=\"audio1Slide3\" controls>\n\t\t\t\t<source src=\"./audio/audio1Slide3.mp3\" type=\"audio/mp3\" />\n\t\t\t</audio>\n\t\t</div>\n\t";
};

},{}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesS.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-textSmall animate__animated animate__backInRight animate__delay-3s\">Contin\xFAa la sesi\xF3n con ejercicios de estiramiento muscular</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],118:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle8\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage10.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 9</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Une las palmas de las manos con dedos extendidos</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Sin despegar las palmas desciende las manos hasta que sientas el estiramiento.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__backInRight animate__delay-3s\">Ejercicio 1</p>\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_text animate__animated animate__backInRight animate__delay-3s\">Con espalda y cabeza rectas, entrelaza las manos y lleva los brazos por encima de la cabeza</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle2\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage3.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 2</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Cruza el brazo derecho frente al pecho</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Empuja con la mano izquierda por encima de la articulaci\xF3n del codo que estas cruzando</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Mant\xE9n el estiramiento</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],121:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle3\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage4.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 3</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Puedes combinar el anterior ejercicio llevando la mano hacia la espalda</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice_square relajaExtremidadesS-content_description-excersice_square--bgAll animate__animated animate__bounceIn animate__delay-5s\">\n\t\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_square-text--bgAll\">Es importante que al realizar estos ejercicios no presiones directamente la articulaci\xF3n del codo, estira de una zona adyacente a la articulaci\xF3n y no directamente en ella.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],122:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle4\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage5.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 4</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Entrelaza las manos al frente.</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Estira los codos y lleva los hombros hacia delante arqueando la espalda y bajando la cabeza</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],123:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle5\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage6.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 5</p>\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_text animate__animated animate__backInRight animate__delay-4s\">Intenta tomarte de las manos por detr\xE1s de tu espalda.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],124:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle6\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage7.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 6</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva el brazo hacia el frente con la palma de la mano hacia arriba</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Con la mano contraria ejerce un poco de presi\xF3n sobre todos los dedos, hasta que sientas algo de tensi\xF3n</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Mant\xE9n la posici\xF3n y luego realiza el ejercicio con la otra mano</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_message animate__animated animate__bounceIn animate__delay-5s\"><b>Recuerda</b> tambi\xE9n involucrar el dedo pulgar</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],125:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle7\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage8.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 7</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Lleva tu brazo al frente</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Empu\xF1a y baja tu mano hasta que sientas un poco de tensi\xF3n</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Sost\xE9n el estiramiento y luego realiza el mismo ejercicio con la otra mano</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],126:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle8\">\n\t\t\t\t<img class=\"graphic-presentation animate__animated animate__backInLeft animate__delay-1s\" src=\"img/svg/relajaExtremidadesSPage9.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio animate__animated animate__fadeIn animate__delay-1s\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title animate__animated animate__backInRight animate__delay-2s\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 8</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\"\">Empu\xF1a tus manos</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\"\">Abre y separa los dedos sosteniendo el estiramiento</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"usoCelular-content container-content_slide\">\n\t\t\t<div class=\"usoCelular-content_graphic animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img src=\"img/svg/usoCelularPage1.svg\" class=\"usoCelular-content_graphic-img\" />\n\t\t\t</div>\n\t\t\t<div class=\"usoCelular-content_description\">\n\t\t\t\t<p class=\"usoCelular-content_description-title animate__animated animate__backInRight animate__delay-2s\">AL HACER USO DEL CELULAR</p>\n\t\t\t\t<div class=\"usoCelular-content_description-square animate__animated animate__bounceIn animate__delay-3s\">\n\t\t\t\t\t<p class=\"usoCelular-content_description-square_text\">Los siguientes ejercicios te ayudar\xE1n a<br/>disminuir la fatiga muscular por el uso<br/>del celular</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],128:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"usoCelular-content container-content_slide\">\n\t\t\t<div id=\"usoCelularPage2\" class=\"usoCelular-content_graphic usoCelular-content_graphicPage2 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img src=\"img/svg/usoCelularPage2-1.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage2 ucp\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage2-2.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage2 ucp\" />\n\t\t\t</div>\n\t\t\t<div class=\"usoCelular-content_description\">\n\t\t\t\t<p class=\"usoCelular-content_description-title animate__animated animate__backInRight animate__delay-2s\">AL HACER USO DEL CELULAR</p>\n\t\t\t\t<div class=\"usoCelular-content_description-excersice\">\n\t\t\t\t\t<p class=\"usoCelular-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 1</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"usoCelular-content_description-ul\">\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Con los brazos al frente</li>\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Abrace el pulgar con los dedos</li>\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Suavemente lleve la mu\xF1eca hacia abajo, sost\xE9n durante 10 \u2013 15 segundos</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],129:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"usoCelular-content container-content_slide\">\n\t\t\t<div id=\"usoCelularPage3\" class=\"usoCelular-content_graphic usoCelular-content_graphicPage2 animate__animated animate__backInLeft animate__delay-1s\">\n\t\t\t\t<img src=\"img/svg/usoCelularPage3-1.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage3 ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage3-2.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage3 ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage4.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-img22 ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage5-1.svg\" class=\"usoCelular-content_graphic-img ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage5-2.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-img28 ucp3\" />\n\t\t\t</div>\n\t\t\t<div class=\"usoCelular-content_description\">\n\t\t\t\t<p class=\"usoCelular-content_description-title animate__animated animate__backInRight animate__delay-2s\">AL HACER USO DEL CELULAR</p>\n\t\t\t\t<div class=\"usoCelular-content_description-excersice\">\n\t\t\t\t\t<p class=\"usoCelular-content_description-excersice_title animate__animated animate__fadeInDown animate__delay-3s\">Ejercicio 2</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"usoCelular-content_description-ul\">\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li animate__animated animate__backInRight animate__delay-4s\">Mant\xE9n las siguientes posiciones de tus manos durante 5 segundos, repite de 5 \u2013 10 veces de forma graduada y descansa.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"usoCelular-content_description-message animate__animated animate__bounceIn animate__delay-5s\">REPETICI\xD3N 1</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],130:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "";
};

},{}],131:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "";
};

},{}]},{},[66])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29udHJvbGxlci9hY3RpdmFFeHRyZW1pZGFkUy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvYWN0aXZhRXh0cmVtaWRhZFNQYWdlMTAuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTMuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTUuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTYuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTcuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTguY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTkuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FudGVicmF6by1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhUGFnZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2JhbmRhRWxhc3RpY2FQYWdlMy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvYmFuZGFFbGFzdGljYVBhZ2U0LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2JhbmRhRWxhc3RpY2FQYWdlNS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvYmFuZGFFbGFzdGljYVBhZ2U1UGFydGUyLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhUGFnZTYuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2NsYXJvVGlwc1BhZ2UxLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9jbGFyb1RpcHNQYWdlMi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvY2xhcm9UaXBzUGFnZTMuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2NsYXJvVGlwc1BhZ2U0LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9jb2RvLWV4dHJlbWlkYWQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2Nvbm9jZS1leHRyZW1pZGFkZXMuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2N1aWRhQnJhem9zLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9jdWlkYXItZXh0cmVtaWRhZGVzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lamVyY2l0YUV4dHJlbWlkYWRlcy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZWxpZ2VHb21hLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lbkNhc2FQYWdlMS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5DYXNhUGFnZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuQ2FzYVBhZ2UzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lbkNhc2FQYWdlNC5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5DYXNhUGFnZTUuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuQ2FzYVBhZ2U2LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lblRyYWJham8uY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuVHJhYmFqb1BhZ2UyLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lblRyYWJham9QYWdlMy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5UcmFiYWpvUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuVHJhYmFqb1BhZ2U1LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lblRyYWJham9QYWdlNi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5UcmFiYWpvUGFnZTcuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuVHJhYmFqb1BhZ2U4LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9ob21icm8tZXh0cmVtaWRhZC5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvaG9tZS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvaW5kZXguanMiLCJzcmMvanMvY29udHJvbGxlci9tYW50ZW5Nb3ZpbWllbnRvcy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvbXVuaWVjYS1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9wb3J0YWRhLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9xdWUtZXMtYWN0aXZhdGUuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1MuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOC5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci91c29DZWx1bGFyUGFnZTEuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3Vzb0NlbHVsYXJQYWdlMi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvdXNvQ2VsdWxhclBhZ2UzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci91c29DZWx1bGFyUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3Vzb0NlbHVsYXJQYWdlNS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkUy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UxMC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UyLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U1LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTYudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U4LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTkudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYW50ZWJyYXpvLWV4dHJlbWlkYWQudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYmFuZGFFbGFzdGljYS52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYmFuZGFFbGFzdGljYVBhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYmFuZGFFbGFzdGljYVBhZ2U1LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMi52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTYudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTQudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY29kby1leHRyZW1pZGFkLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2Nvbm9jZS1leHRyZW1pZGFkZXMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY3VpZGFCcmF6b3Mudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY3VpZGFyLWV4dHJlbWlkYWRlcy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9lamVyY2l0YUV4dHJlbWlkYWRlcy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9lbGlnZUdvbWEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTQudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTUudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTYudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5UcmFiYWpvLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2UyLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U0LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U1LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U2LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U3LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U4LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2Vycm9yLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2hvbWJyby1leHRyZW1pZGFkLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2hvbWUudmlldy5qcyIsInNyYy9qcy92aXN0YXMvbWFudGVuTW92aW1pZW50b3Mudmlldy5qcyIsInNyYy9qcy92aXN0YXMvbXVuaWVjYS1leHRyZW1pZGFkLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3BvcnRhZGEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcXVlLWVzLWFjdGl2YXRlLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1Mudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTUudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTgudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3Vzb0NlbHVsYXJQYWdlMS52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvdXNvQ2VsdWxhclBhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3Vzb0NlbHVsYXJQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTUudmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxh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Ozs7OztrQkNwQmMsWUFBTTtBQUNwQjtBQThRQSxDOzs7Ozs7Ozs7a0JDL1FjLFlBQU07QUFDcEI7QUFXQSxDOzs7Ozs7Ozs7a0JDWmMsWUFBTTtBQUNwQjtBQW9CQSxDOzs7Ozs7Ozs7a0JDckJjLFlBQU07QUFDcEI7QUE0QkEsQzs7Ozs7Ozs7O2tCQzdCYyxZQUFNO0FBQ3BCO0FBbUJBLEM7Ozs7Ozs7OztrQkNwQmMsWUFBTTtBQUNwQjtBQVdBLEM7Ozs7Ozs7OztrQkNaYyxZQUFNO0FBQ3BCO0FBb0JBLEM7Ozs7Ozs7OztrQkNyQmMsWUFBTTtBQUNwQjtBQWlCQSxDOzs7Ozs7Ozs7a0JDbEJjLFlBQU07QUFDcEI7QUFxQkEsQzs7Ozs7Ozs7O2tCQ3RCYyxZQUFNO0FBQ3BCO0FBc0JBLEM7Ozs7Ozs7OztrQkN2QmMsWUFBTTtBQUNwQjtBQW9CQSxDOzs7Ozs7Ozs7a0JDckJjLFlBQU07QUFDcEI7QUFpQkEsQzs7Ozs7Ozs7O2tCQ2xCYyxZQUFNO0FBQ3BCO0FBc0JBLEM7Ozs7Ozs7OztrQkN2QmMsWUFBTTtBQUNwQjtBQXFCQSxDOzs7Ozs7Ozs7a0JDdEJjLFlBQU07QUFDcEI7QUFvQkEsQzs7Ozs7Ozs7O2tCQ3JCYyxZQUFNO0FBQ3BCO0FBYUEsQzs7Ozs7Ozs7O2tCQ2RjLFlBQU07QUFDcEI7QUFtQkEsQzs7Ozs7Ozs7O2tCQ3BCYyxZQUFNO0FBQ3BCO0FBcUJBLEM7Ozs7Ozs7OztrQkN0QmMsWUFBTTtBQUNwQjtBQUNBLEM7Ozs7Ozs7OztrQkNGYyxZQUFNO0FBQ3BCO0FBQ0EsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkUyBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTJcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9jdWlkYXItZXh0cmVtaWRhZGVzXCJcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2UxMCBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTEwLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTEwKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlc1wiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U5XCJcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2UyIGZyb20gXCIuLi92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlMi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBhY3RpdmFFeHRyZW1pZGFkU1BhZ2UyKCk7XHJcblx0Y29uc3QgYW50ZXNEZVByYWN0aWNhciA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnRlc0RlUHJhY3RpY2FyIC5hbnRlc0RlUHJhY3RpY2FyLWltZ1wiKVxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTNcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZFwiXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHJcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FudGVzRGVQcmFjdGljYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuXHRcdGFudGVzRGVQcmFjdGljYXIuc3R5bGUud2lkdGg9XCJcIlxyXG5cdFx0YW50ZXNEZVByYWN0aWNhci5zcmM9XCIuL2ltZy9zdmcvbWVuQW50ZXNEZVByYWN0aWNhci5zdmdcIlxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnRlc0RlUHJhY3RpY2FyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcclxuXHRcdGFudGVzRGVQcmFjdGljYXIuc3R5bGUud2lkdGg9XCIzMi4wNSVcIlxyXG5cdFx0YW50ZXNEZVByYWN0aWNhci5zcmM9XCIuL2ltZy9zdmcvbWVuQW50ZXNEZVByYWN0aWNhcjIuc3ZnXCJcclxuXHR9LCBmYWxzZSlcclxuXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTMgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UzLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTMoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlNFwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UyXCJcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U0IGZyb20gXCIuLi92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNC52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U0KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTVcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlM1wiXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgYWN0aXZhRXh0cmVtaWRhZFNQYWdlNSBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTUudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZhRXh0cmVtaWRhZFNQYWdlNSgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U2XCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTRcIlxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcclxuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0fSxmYWxzZSk7XHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTYgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U2LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTYoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlN1wiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U1XCJcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U3IGZyb20gXCIuLi92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U3KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZThcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlNlwiXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgYWN0aXZhRXh0cmVtaWRhZFNQYWdlOCBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTgudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZhRXh0cmVtaWRhZFNQYWdlOCgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U5XCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTdcIlxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcclxuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0fSxmYWxzZSk7XHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTkgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U5LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTkoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlMTBcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlOFwiXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgYW50ZWJyYXpvRXh0cmVtaWRhZGVzIGZyb20gXCIuLi92aXN0YXMvYW50ZWJyYXpvLWV4dHJlbWlkYWQudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFudGVicmF6b0V4dHJlbWlkYWRlcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFudGVicmF6b0V4dHJlbWlkYWRlcygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9tdW5pZWNhLWV4dHJlbWlkYWRcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9jb2RvLWV4dHJlbWlkYWRcIlxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcclxuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0fSxmYWxzZSk7XHJcblx0XHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYW5kYUVsYXN0aWNhLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQmFuZGFFbGFzdGljYVZpZXcoKTtcclxuXHRjb25zdCBncmFwaGljQmFuZGFFbGFzdGljYTEgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2ExXCIpLFxyXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2EyID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhMlwiKVxyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2UyXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvbWFudGVuLW1vdmltaWVudG9zXCJcclxuXHJcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2ExLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHR9LCBmYWxzZSlcclxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XHJcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTEuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0fSwgZmFsc2UpXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlMlZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTIudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhbmRhRWxhc3RpY2EtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBCYW5kYUVsYXN0aWNhUGFnZTJWaWV3KCk7XHJcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTItMVwiKSxcclxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UyLTJcIiksXHJcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTMgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMi0zXCIpLFxyXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2E0ID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTItNFwiKVxyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2UzXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYmFuZGEtZWxhc3RpY2FcIlxyXG5cdGNvbnN0IGFsbEltYWdlID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdwYlwiKVxyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcbiAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdH1cclxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2UyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgfSwgMTAwMClcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzFdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0ICAgIH0sIDIwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsyXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAzMDAwKVxyXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbM10uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgfSwgNDAwMClcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2UyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG5cdCAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0XHR9XHJcblx0fSwgZmFsc2UpXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlM1ZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTMudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhbmRhRWxhc3RpY2EtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBCYW5kYUVsYXN0aWNhUGFnZTNWaWV3KCk7XHJcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTMtMVwiKSxcclxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UzLTJcIilcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNFwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2UyXCJcclxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncGJcIilcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHR9XHJcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FQYWdlM1wiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0ICAgIH0sIDEwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAyMDAwKVxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U0VmlldyBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNC52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmFuZGFFbGFzdGljYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNFZpZXcoKTtcclxuXHRjb25zdCBncmFwaGljQmFuZGFFbGFzdGljYTEgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC0xXCIpLFxyXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2EyID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtMlwiKSxcclxuXHRcdGJhbmRhc0VsYXN0aWNhc0xpc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhc0VsYXN0aWNhc0xpc3RzXCIpXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTQtMlwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2UzXCJcclxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncGJcIilcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHR9XHJcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FQYWdlNFwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0ICAgIH0sIDEwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAyMDAwKVxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTRcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U0UGFydGUyVmlldyBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmFuZGFFbGFzdGljYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMlZpZXcoKTtcclxuXHRjb25zdCBncmFwaGljQmFuZGFFbGFzdGljYTEgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC0xXCIpLFxyXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2EyID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtMlwiKSxcclxuXHRcdGJhbmRhc0VsYXN0aWNhc0xpc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhc0VsYXN0aWNhc0xpc3RzXCIpXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTVcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNFwiXHJcblx0Y29uc3QgYWxsSW1hZ2UgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3BiXCIpXHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0fVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTRcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAxMDAwKVxyXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgfSwgMjAwMClcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2U0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG5cdCAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0XHR9XHJcblx0fSwgZmFsc2UpXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNVZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTUudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhbmRhRWxhc3RpY2EtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBCYW5kYUVsYXN0aWNhUGFnZTVWaWV3KCk7XHJcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTUtMVwiKSxcclxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U1LTJcIiksXHJcblx0XHRiYW5kYXNFbGFzdGljYXNMaXN0cyA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYXNFbGFzdGljYXNMaXN0c1wiKVxyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U1LTJcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNC0yXCJcclxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncGJcIilcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHR9XHJcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FQYWdlNVwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0ICAgIH0sIDEwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAyMDAwKVxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTVcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U1UGFydGUyVmlldyBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmFuZGFFbGFzdGljYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMlZpZXcoKTtcclxuXHRjb25zdCBncmFwaGljQmFuZGFFbGFzdGljYTEgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNS0zXCIpLFxyXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2EyID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTUtNFwiKSxcclxuXHRcdGJhbmRhc0VsYXN0aWNhc0xpc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhc0VsYXN0aWNhc0xpc3RzXCIpXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTZcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNVwiXHJcblx0Y29uc3QgYWxsSW1hZ2UgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3BiXCIpXHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0fVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTVcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAxMDAwKVxyXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgfSwgMjAwMClcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2U1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG5cdCAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0XHR9XHJcblx0fSwgZmFsc2UpXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNiBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmFuZGFFbGFzdGljYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNigpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2N1aWRhLWJyYXpvc1wiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U1LTJcIlxyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBDbGFyb1RpcHNQYWdlMSBmcm9tIFwiLi4vdmlzdGFzL2NsYXJvVGlwc1BhZ2UxLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbGFyb1RpcHMtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBDbGFyb1RpcHNQYWdlMSgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9jbGFyby10aXBzLXBhZ2UyXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvdXNvLWNlbHVsYXItcGFnZTNcIlxyXG4gIFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IENsYXJvVGlwc1BhZ2UyIGZyb20gXCIuLi92aXN0YXMvY2xhcm9UaXBzUGFnZTIudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsYXJvVGlwcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IENsYXJvVGlwc1BhZ2UyKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2NsYXJvLXRpcHMtcGFnZTNcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9jbGFyby10aXBzLXBhZ2UxXCJcclxuXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJub25lXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJpbmhlcml0XCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiaW5oZXJpdFwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJpbmhlcml0XCJcclxuICBcclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBDbGFyb1RpcHNQYWdlMyBmcm9tIFwiLi4vdmlzdGFzL2NsYXJvVGlwc1BhZ2UzLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbGFyb1RpcHMtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBDbGFyb1RpcHNQYWdlMygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIm5vbmVcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cImluaGVyaXRcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJpbmhlcml0XCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cImluaGVyaXRcIlxyXG5cclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvY2xhcm8tdGlwcy1wYWdlNFwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2NsYXJvLXRpcHMtcGFnZTJcIlxyXG4gIFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IENsYXJvVGlwc1BhZ2U0IGZyb20gXCIuLi92aXN0YXMvY2xhcm9UaXBzUGFnZTQudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsYXJvVGlwcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IENsYXJvVGlwc1BhZ2U0KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwibm9uZVwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiaW5oZXJpdFwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cImluaGVyaXRcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiaW5oZXJpdFwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2NsYXJvLXRpcHMtcGFnZTRcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9jbGFyby10aXBzLXBhZ2UzXCJcclxuICBcclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBjb2RvRXh0cmVtaWRhZGVzIGZyb20gXCIuLi92aXN0YXMvY29kby1leHRyZW1pZGFkLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb2RvRXh0cmVtaWRhZGVzLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gY29kb0V4dHJlbWlkYWRlcygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9hbnRlYnJhem8tZXh0cmVtaWRhZFwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2hvbWJyby1leHRyZW1pZGFkXCJcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGNvbm9jZUV4dHJlbWlkYWRlcyBmcm9tIFwiLi4vdmlzdGFzL2Nvbm9jZS1leHRyZW1pZGFkZXMudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbm9jZUV4dHJlbWlkYWRlcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGNvbm9jZUV4dHJlbWlkYWRlcygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9ob21icm8tZXh0cmVtaWRhZFwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3F1ZS1hY3RpdmF0ZVwiXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgQ3VpZGFCcmF6b3MgZnJvbSBcIi4uL3Zpc3Rhcy9jdWlkYUJyYXpvcy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY3VpZGFCcmF6b3MtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBDdWlkYUJyYXpvcygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLXRyYWJham9cIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNlwiXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGN1aWRhckV4dHJlbWlkYWRlcyBmcm9tIFwiLi4vdmlzdGFzL2N1aWRhci1leHRyZW1pZGFkZXMudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImN1aWRhckV4dHJlbWlkYWRlcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGN1aWRhckV4dHJlbWlkYWRlcygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNjZGRlZmM0NlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvbXVuaWVjYS1leHRyZW1pZGFkXCJcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGVqZXJjaXRhRXh0cmVtaWRhZGVzVmlldyBmcm9tIFwiLi4vdmlzdGFzL2VqZXJjaXRhRXh0cmVtaWRhZGVzLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlamVyY2l0YUV4dHJlbWlkYWRlcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGVqZXJjaXRhRXh0cmVtaWRhZGVzVmlldygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VsaWdlLWdvbWFcIjtcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlMTBcIjtcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgZWxpZ2VHb21hVmlldyBmcm9tIFwiLi4vdmlzdGFzL2VsaWdlR29tYS52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWxpZ2VHb21hLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gZWxpZ2VHb21hVmlldygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL21hbnRlbi1tb3ZpbWllbnRvc1wiO1xyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lamVyY2l0YS1leHRyZW1pZGFkZXNcIjtcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW5DYXNhUGFnZTEgZnJvbSBcIi4uL3Zpc3Rhcy9lbkNhc2FQYWdlMS52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5DYXNhLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW5DYXNhUGFnZTEoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi1jYXNhLXBhZ2UyXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tdHJhYmFqby1wYWdlOFwiXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEVuQ2FzYVBhZ2UyIGZyb20gXCIuLi92aXN0YXMvZW5DYXNhUGFnZTIudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuQ2FzYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVuQ2FzYVBhZ2UyKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tY2FzYS1wYWdlM1wiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLWNhc2EtcGFnZTFcIlxyXG5cclxuXHJcblx0Y29uc3QgYWxsSW1hZ2UgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWNwXCIpXHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0fVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbkNhc2FQYWdlMlwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0ICAgIH0sIDEwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAyMDAwKVxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbkNhc2FQYWdlMlwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuXHQgICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW5DYXNhUGFnZTMgZnJvbSBcIi4uL3Zpc3Rhcy9lbkNhc2FQYWdlMy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5DYXNhLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW5DYXNhUGFnZTMoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi1jYXNhLXBhZ2U0XCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tY2FzYS1wYWdlMlwiXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEVuQ2FzYVBhZ2U0IGZyb20gXCIuLi92aXN0YXMvZW5DYXNhUGFnZTQudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuQ2FzYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVuQ2FzYVBhZ2U0KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tY2FzYS1wYWdlNVwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLWNhc2EtcGFnZTNcIlxyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBFbkNhc2FQYWdlNSBmcm9tIFwiLi4vdmlzdGFzL2VuQ2FzYVBhZ2U1LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbkNhc2EtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbkNhc2FQYWdlNSgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLWNhc2EtcGFnZTZcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi1jYXNhLXBhZ2U0XCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW5DYXNhUGFnZTYgZnJvbSBcIi4uL3Zpc3Rhcy9lbkNhc2FQYWdlNi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5DYXNhLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW5DYXNhUGFnZTYoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidHJpYW5ndWxlXCIpXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvdXNvLWNlbHVsYXItcGFnZTFcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi1jYXNhLXBhZ2U1XCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW50cmFiYWpvIGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlblRyYWJham8tY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbnRyYWJham8oKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvLXBhZ2UyXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvY3VpZGEtYnJhem9zXCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW50cmFiYWpvUGFnZTIgZnJvbSBcIi4uL3Zpc3Rhcy9lblRyYWJham9QYWdlMi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5UcmFiYWpvLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW50cmFiYWpvUGFnZTIoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvLXBhZ2UzXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tdHJhYmFqb1wiXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEVudHJhYmFqb1BhZ2UzIGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvUGFnZTMudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuVHJhYmFqby1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVudHJhYmFqb1BhZ2UzKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tdHJhYmFqby1wYWdlNFwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLXRyYWJham8tcGFnZTJcIlxyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBFbnRyYWJham9QYWdlNCBmcm9tIFwiLi4vdmlzdGFzL2VuVHJhYmFqb1BhZ2U0LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlblRyYWJham8tY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbnRyYWJham9QYWdlNCgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLXRyYWJham8tcGFnZTVcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi10cmFiYWpvLXBhZ2UzXCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW50cmFiYWpvUGFnZTUgZnJvbSBcIi4uL3Zpc3Rhcy9lblRyYWJham9QYWdlNS52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5UcmFiYWpvLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW50cmFiYWpvUGFnZTUoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvLXBhZ2U2XCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tdHJhYmFqby1wYWdlNFwiXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IEVudHJhYmFqb1BhZ2U2IGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvUGFnZTYudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuVHJhYmFqby1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVudHJhYmFqb1BhZ2U2KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tdHJhYmFqby1wYWdlN1wiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLXRyYWJham8tcGFnZTVcIlxyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBFbnRyYWJham9QYWdlNyBmcm9tIFwiLi4vdmlzdGFzL2VuVHJhYmFqb1BhZ2U3LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlblRyYWJham8tY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbnRyYWJham9QYWdlNygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLXRyYWJham8tcGFnZThcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi10cmFiYWpvLXBhZ2U2XCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgRW50cmFiYWpvUGFnZTggZnJvbSBcIi4uL3Zpc3Rhcy9lblRyYWJham9QYWdlOC52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5UcmFiYWpvLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW50cmFiYWpvUGFnZTgoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi1jYXNhLXBhZ2UxXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tdHJhYmFqby1wYWdlN1wiXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGhvbWJyb0V4dHJlbWlkYWRlcyBmcm9tIFwiLi4vdmlzdGFzL2hvbWJyby1leHRyZW1pZGFkLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJob21icm9FeHRyZW1pZGFkZXMtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBob21icm9FeHRyZW1pZGFkZXMoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvY29kby1leHRyZW1pZGFkXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvY29ub2NlLWV4dHJlbWlkYWRlc1wiXHJcblx0XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4uL3Zpc3Rhcy9ob21lLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItc3BhY2VcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGhvbWUoKTtcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNjZGRlZmM0NlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvcXVlLWFjdGl2YXRlXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9cIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJub25lXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiaW5oZXJpdFwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiaW5oZXJpdFwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJpbmhlcml0XCJcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXHJcblx0XHRpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHQgIFx0d2luZG93LmxvY2F0aW9uLmhyZWY9IFwiIy9xdWUtYWN0aXZhdGVcIlxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59XHJcblxyXG5cclxuLypuZXh0UHJlc2VudGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKVxyXG5cdGNvbnNvbGUubG9nKFwiTmV4dCBQcmVzZW50YXRpb25cIilcclxufSlcclxucHJldlByZXNlbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRjb25zb2xlLmxvZyhcIlByZXYgUHJlc2VudGF0aW9uXCIpXHJcbn0pKi8iLCJpbXBvcnQgUG9ydGFkYSBmcm9tIFwiLi9wb3J0YWRhLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IFF1ZUVzQWN0aXZhdGUgZnJvbSBcIi4vcXVlLWVzLWFjdGl2YXRlLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IENvbm9jZUV4dHJlbWlkYWRlcyBmcm9tIFwiLi9jb25vY2UtZXh0cmVtaWRhZGVzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEhvbWJyb0V4dHJlbWlkYWQgZnJvbSBcIi4vaG9tYnJvLWV4dHJlbWlkYWQuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQ29kb0V4dHJlbWlkYWQgZnJvbSBcIi4vY29kby1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEFudGVicmF6b0V4dHJlbWlkYWQgZnJvbSBcIi4vYW50ZWJyYXpvLWV4dHJlbWlkYWQuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgTXVuaWVjYUV4dHJlbWlkYWQgZnJvbSBcIi4vbXVuaWVjYS1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEN1aWRhckV4dHJlbWlkYWRlcyBmcm9tIFwiLi9jdWlkYXItZXh0cmVtaWRhZGVzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTIGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTIgZnJvbSBcIi4vYWN0aXZhRXh0cmVtaWRhZFNQYWdlMi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkU1BhZ2UzIGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTMuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQWN0aXZhRXh0cmVtaWRhZFNQYWdlNCBmcm9tIFwiLi9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U0LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTUgZnJvbSBcIi4vYWN0aXZhRXh0cmVtaWRhZFNQYWdlNS5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkU1BhZ2U2IGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTYuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQWN0aXZhRXh0cmVtaWRhZFNQYWdlNyBmcm9tIFwiLi9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U3LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTggZnJvbSBcIi4vYWN0aXZhRXh0cmVtaWRhZFNQYWdlOC5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkU1BhZ2U5IGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTkuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQWN0aXZhRXh0cmVtaWRhZFNQYWdlMTAgZnJvbSBcIi4vYWN0aXZhRXh0cmVtaWRhZFNQYWdlMTAuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgUmVsYWphRXh0cmVtaWRhZGVzUyBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMiBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzIGZyb20gXCIuL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMy5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQgZnJvbSBcIi4vcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U0LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNSBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTUuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2IGZyb20gXCIuL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcgZnJvbSBcIi4vcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U3LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOCBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTguY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5IGZyb20gXCIuL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOS5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTEwIGZyb20gXCIuL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgRWplcmNpdGFFeHRyZW1pZGFkZXMgZnJvbSBcIi4vZWplcmNpdGFFeHRyZW1pZGFkZXMuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgRWxpZ2VHb21hIGZyb20gXCIuL2VsaWdlR29tYS5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBNYW50ZW5Nb3ZpbWllbnRvcyBmcm9tIFwiLi9tYW50ZW5Nb3ZpbWllbnRvcy5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBCYW5kYUVsYXN0aWNhIGZyb20gXCIuL2JhbmRhRWxhc3RpY2EuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2UyIGZyb20gXCIuL2JhbmRhRWxhc3RpY2FQYWdlMi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBCYW5kYUVsYXN0aWNhUGFnZTMgZnJvbSBcIi4vYmFuZGFFbGFzdGljYVBhZ2UzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNCBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTQuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U0UGFydGUyIGZyb20gXCIuL2JhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBCYW5kYUVsYXN0aWNhUGFnZTUgZnJvbSBcIi4vYmFuZGFFbGFzdGljYVBhZ2U1LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMiBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTVQYXJ0ZTIuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U2IGZyb20gXCIuL2JhbmRhRWxhc3RpY2FQYWdlNi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBDdWlkYUJyYXpvcyBmcm9tIFwiLi9jdWlkYUJyYXpvcy5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBFblRyYWJham8gZnJvbSBcIi4vZW5UcmFiYWpvLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2UyIGZyb20gXCIuL2VuVHJhYmFqb1BhZ2UyLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2UzIGZyb20gXCIuL2VuVHJhYmFqb1BhZ2UzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2U0IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U0LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2U1IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U1LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2U2IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U2LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2U3IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U3LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuVHJhYmFqb1BhZ2U4IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U4LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuQ2FzYVBhZ2UxIGZyb20gXCIuL2VuQ2FzYVBhZ2UxLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuQ2FzYVBhZ2UyIGZyb20gXCIuL2VuQ2FzYVBhZ2UyLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuQ2FzYVBhZ2UzIGZyb20gXCIuL2VuQ2FzYVBhZ2UzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuQ2FzYVBhZ2U0IGZyb20gXCIuL2VuQ2FzYVBhZ2U0LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuQ2FzYVBhZ2U1IGZyb20gXCIuL2VuQ2FzYVBhZ2U1LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVuQ2FzYVBhZ2U2IGZyb20gXCIuL2VuQ2FzYVBhZ2U2LmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IFVzb0NlbHVsYXJQYWdlMSBmcm9tIFwiLi91c29DZWx1bGFyUGFnZTEuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2UyIGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlMi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBVc29DZWx1bGFyUGFnZTMgZnJvbSBcIi4vdXNvQ2VsdWxhclBhZ2UzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IFVzb0NlbHVsYXJQYWdlNCBmcm9tIFwiLi91c29DZWx1bGFyUGFnZTQuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2U1IGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlNS5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBDbGFyb1RpcHNQYWdlMSBmcm9tIFwiLi9jbGFyb1RpcHNQYWdlMS5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBDbGFyb1RpcHNQYWdlMiBmcm9tIFwiLi9jbGFyb1RpcHNQYWdlMi5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBDbGFyb1RpcHNQYWdlMyBmcm9tIFwiLi9jbGFyb1RpcHNQYWdlMy5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBDbGFyb1RpcHNQYWdlNCBmcm9tIFwiLi9jbGFyb1RpcHNQYWdlNC5jb250cm9sbGVyLmpzXCI7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lLmNvbnRyb2xsZXIuanNcIjtcclxuY29uc3QgcGFnZXMgPSB7XHJcblx0UG9ydGFkYTogUG9ydGFkYSxcclxuXHRRdWVFc0FjdGl2YXRlOiBRdWVFc0FjdGl2YXRlLFxyXG5cdENvbm9jZUV4dHJlbWlkYWRlczogQ29ub2NlRXh0cmVtaWRhZGVzLFxyXG5cdEhvbWJyb0V4dHJlbWlkYWQ6IEhvbWJyb0V4dHJlbWlkYWQsXHJcblx0Q29kb0V4dHJlbWlkYWQ6IENvZG9FeHRyZW1pZGFkLFxyXG5cdEFudGVicmF6b0V4dHJlbWlkYWQ6IEFudGVicmF6b0V4dHJlbWlkYWQsXHJcblx0TXVuaWVjYUV4dHJlbWlkYWQ6IE11bmllY2FFeHRyZW1pZGFkLFxyXG5cdEN1aWRhckV4dHJlbWlkYWRlczogQ3VpZGFyRXh0cmVtaWRhZGVzLFxyXG5cdEFjdGl2YUV4dHJlbWlkYWRTOiBBY3RpdmFFeHRyZW1pZGFkUyxcclxuXHRBY3RpdmFFeHRyZW1pZGFkU1BhZ2UyOiBBY3RpdmFFeHRyZW1pZGFkU1BhZ2UyLFxyXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTM6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTMsXHJcblx0QWN0aXZhRXh0cmVtaWRhZFNQYWdlNDogQWN0aXZhRXh0cmVtaWRhZFNQYWdlNCxcclxuXHRBY3RpdmFFeHRyZW1pZGFkU1BhZ2U1OiBBY3RpdmFFeHRyZW1pZGFkU1BhZ2U1LFxyXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTY6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTYsXHJcblx0QWN0aXZhRXh0cmVtaWRhZFNQYWdlNzogQWN0aXZhRXh0cmVtaWRhZFNQYWdlNyxcclxuXHRBY3RpdmFFeHRyZW1pZGFkU1BhZ2U4OiBBY3RpdmFFeHRyZW1pZGFkU1BhZ2U4LFxyXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTk6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTksXHJcblx0QWN0aXZhRXh0cmVtaWRhZFNQYWdlMTA6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTEwLFxyXG5cdFJlbGFqYUV4dHJlbWlkYWRlc1M6IFJlbGFqYUV4dHJlbWlkYWRlc1MsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UyOiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzOiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTMsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U0OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTUsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTYsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U3OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTgsXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTksXHJcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMDogUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMCxcclxuXHRFamVyY2l0YUV4dHJlbWlkYWRlczogRWplcmNpdGFFeHRyZW1pZGFkZXMsXHJcblx0RWxpZ2VHb21hOiBFbGlnZUdvbWEsXHJcblx0TWFudGVuTW92aW1pZW50b3M6IE1hbnRlbk1vdmltaWVudG9zLFxyXG5cdEJhbmRhRWxhc3RpY2E6IEJhbmRhRWxhc3RpY2EsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2UyOiBCYW5kYUVsYXN0aWNhUGFnZTIsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2UzOiBCYW5kYUVsYXN0aWNhUGFnZTMsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2U0OiBCYW5kYUVsYXN0aWNhUGFnZTQsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2U0UGFydGUyOiBCYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2U1OiBCYW5kYUVsYXN0aWNhUGFnZTUsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2U1UGFydGUyOiBCYW5kYUVsYXN0aWNhUGFnZTVQYXJ0ZTIsXHJcblx0QmFuZGFFbGFzdGljYVBhZ2U2OiBCYW5kYUVsYXN0aWNhUGFnZTYsXHJcblx0Q3VpZGFCcmF6b3M6IEN1aWRhQnJhem9zLFxyXG5cdEVuVHJhYmFqbzogRW5UcmFiYWpvLFxyXG5cdEVuVHJhYmFqb1BhZ2UyOiBFblRyYWJham9QYWdlMixcclxuXHRFblRyYWJham9QYWdlMzogRW5UcmFiYWpvUGFnZTMsXHJcblx0RW5UcmFiYWpvUGFnZTQ6IEVuVHJhYmFqb1BhZ2U0LFxyXG5cdEVuVHJhYmFqb1BhZ2U1OiBFblRyYWJham9QYWdlNSxcclxuXHRFblRyYWJham9QYWdlNjogRW5UcmFiYWpvUGFnZTYsXHJcblx0RW5UcmFiYWpvUGFnZTc6IEVuVHJhYmFqb1BhZ2U3LFxyXG5cdEVuVHJhYmFqb1BhZ2U4OiBFblRyYWJham9QYWdlOCxcclxuXHRFbkNhc2FQYWdlMTogRW5DYXNhUGFnZTEsXHJcblx0RW5DYXNhUGFnZTI6IEVuQ2FzYVBhZ2UyLFxyXG5cdEVuQ2FzYVBhZ2UzOiBFbkNhc2FQYWdlMyxcclxuXHRFbkNhc2FQYWdlNDogRW5DYXNhUGFnZTQsXHJcblx0RW5DYXNhUGFnZTU6IEVuQ2FzYVBhZ2U1LFxyXG5cdEVuQ2FzYVBhZ2U2OiBFbkNhc2FQYWdlNixcclxuXHRVc29DZWx1bGFyUGFnZTE6IFVzb0NlbHVsYXJQYWdlMSxcclxuXHRVc29DZWx1bGFyUGFnZTI6IFVzb0NlbHVsYXJQYWdlMixcclxuXHRVc29DZWx1bGFyUGFnZTM6IFVzb0NlbHVsYXJQYWdlMyxcclxuXHRVc29DZWx1bGFyUGFnZTQ6IFVzb0NlbHVsYXJQYWdlNCxcclxuXHRVc29DZWx1bGFyUGFnZTU6IFVzb0NlbHVsYXJQYWdlNSxcclxuXHRDbGFyb1RpcHNQYWdlMTogQ2xhcm9UaXBzUGFnZTEsXHJcblx0Q2xhcm9UaXBzUGFnZTI6IENsYXJvVGlwc1BhZ2UyLFxyXG5cdENsYXJvVGlwc1BhZ2UzOiBDbGFyb1RpcHNQYWdlMyxcclxuXHRDbGFyb1RpcHNQYWdlNDogQ2xhcm9UaXBzUGFnZTQsXHJcblx0SG9tZTogSG9tZVxyXG59XHJcblxyXG5leHBvcnQgeyBwYWdlcyB9IiwiaW1wb3J0IG1hbnRlbk1vdmltaWVudG9zVmlldyBmcm9tIFwiLi4vdmlzdGFzL21hbnRlbk1vdmltaWVudG9zLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYW50ZW5Nb3ZpbWllbnRvcy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IG1hbnRlbk1vdmltaWVudG9zVmlldygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYVwiO1xyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbGlnZS1nb21hXCI7XHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IG11bmllY2FFeHRyZW1pZGFkIGZyb20gXCIuLi92aXN0YXMvbXVuaWVjYS1leHRyZW1pZGFkLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtdW5pZWNhRXh0cmVtaWRhZC1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IG11bmllY2FFeHRyZW1pZGFkKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2N1aWRhci1leHRyZW1pZGFkZXNcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hbnRlYnJhem8tZXh0cmVtaWRhZFwiXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHRcclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBwb3J0YWRhIGZyb20gXCIuLi92aXN0YXMvcG9ydGFkYS52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9ydGFkYS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHBvcnRhZGEoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0XHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9wb3J0YWRhXCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL1wiO1xyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBxdWVFc0FjdGl2YXRlIGZyb20gXCIuLi92aXN0YXMvcXVlLWVzLWFjdGl2YXRlLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Ly9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZUVzQWN0aXZhdGUtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0XCIpWzJdLnRleHRDb250ZW50XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicXVlRXNBY3RpdmF0ZS1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHF1ZUVzQWN0aXZhdGUoKTtcclxuXHRjb25zdCBhdWRpb1F1ZUVzQWN0aXZhdGUgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlXCIpLFxyXG5cdFx0YXVkaW9TbGlkZTMgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW8xU2xpZGUzXCIpXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcImphdmFzY3JpcHQ6dm9pZCgwKVwiO1xyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiamF2YXNjcmlwdDp2b2lkKDApXCI7XHJcblx0YXVkaW9TbGlkZTMucGxheSgpXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdGF1ZGlvU2xpZGUzLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCAoZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvY29ub2NlLWV4dHJlbWlkYWRlc1wiXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvXCJcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdFx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcclxuXHRcdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHRcdCAgfVxyXG5cdFx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHRcdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHRcdCAgfVxyXG5cdFx0fSxmYWxzZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlRlcm1pbm8gZWwgQXVkaW9cIilcclxuXHR9KVxyXG5cdFxyXG5cdGF1ZGlvUXVlRXNBY3RpdmF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdC8vdGV4dEZhZGVPdXRcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0aWYoYXVkaW9TbGlkZTMucGF1c2VkID09IHRydWUpe1xyXG5cdFx0XHRhdWRpb1NsaWRlMy5wbGF5KClcclxuXHRcdFx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1ZGlvUXVlRXNBY3RpdmF0ZSBpbWdcIikuc3R5bGUuYW5pbWF0aW9uTmFtZT1cInNtYWxsVG9Ob3JtYWxJblwiXHJcblx0XHRcdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdWRpb1F1ZUVzQWN0aXZhdGUgaW1nXCIpLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uPVwiLjFzXCJcclxuXHRcdFx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1ZGlvUXVlRXNBY3RpdmF0ZSBpbWdcIikuc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCJcclxuXHRcdH1lbHNlIGlmKGF1ZGlvU2xpZGUzLnBhdXNlZCA9PSBmYWxzZSl7XHJcblx0XHRcdGF1ZGlvU2xpZGUzLnBhdXNlKClcclxuXHRcdFx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1ZGlvUXVlRXNBY3RpdmF0ZSBpbWdcIikuc3R5bGUuYW5pbWF0aW9uTmFtZT1cInNtYWxsVG9Ob3JtYWxPdXRcIlxyXG5cdFx0XHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlIGltZ1wiKS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1cIi4xc1wiXHJcblx0XHRcdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdWRpb1F1ZUVzQWN0aXZhdGUgaW1nXCIpLnNyYz1cImltZy9zdmcvc291bmRCdXR0b24uc3ZnXCJcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCByZWxhamFFeHRyZW1pZGFkZXNTIGZyb20gXCIuLi92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzUy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1MoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwidXJsKGltZy9zdmcvdHJpYW5ndWxlLW1vYmlsZS5zdmcpXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwibm8tcmVwZWF0XCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJjZW50ZXIgY2VudGVyXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cImNvbnRhaW5cIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybChpbWcvc3ZnL2hvamFUcmFuc3BhcmVudE1pZGRsZS5zdmcpXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiYm90dG9tIGxlZnRcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemU9XCIxMi41JVwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2UyXCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UxMFwiO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcclxuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0fSxmYWxzZSk7XHJcblx0XHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMCBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTEwKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VqZXJjaXRhLWV4dHJlbWlkYWRlc1wiO1xyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U5XCI7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xyXG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xyXG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcclxuXHQgIH1cclxuXHR9LGZhbHNlKTtcclxuXHRcclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIgZnJvbSBcIi4uL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcclxuXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlM1wiO1xyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzXCI7XHJcblx0XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMyBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U0XCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTJcIjtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNCBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNC52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNCgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U1XCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTNcIjtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNSBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNS52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNSgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U2XCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTRcIjtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNiBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNi52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNigpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U3XCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTVcIjtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNyBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U4XCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTZcIjtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOCBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOC52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOCgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxyXG5cclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXHJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblx0XHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTlcIjtcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlN1wiO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcclxuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcclxuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXHJcblx0ICB9XHJcblx0fSxmYWxzZSk7XHJcblx0XHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5IGZyb20gXCIuLi92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXHJcblxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxyXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcclxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTEwXCI7XHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZThcIjtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XHJcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XHJcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxyXG5cdCAgfVxyXG5cdH0sZmFsc2UpO1xyXG5cdFxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IFVzb0NlbHVsYXJQYWdlMSBmcm9tIFwiLi4vdmlzdGFzL3Vzb0NlbHVsYXJQYWdlMS52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidXNvQ2VsdWxhci1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IFVzb0NlbHVsYXJQYWdlMSgpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJ0cmlhbmd1bGVcIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmlhbmd1bGVIb2phXCIpXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhvamFCb3R0b21cIilcclxuXHJcblxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL3Vzby1jZWx1bGFyLXBhZ2UyXCJcclxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tY2FzYS1wYWdlNlwiXHJcbiAgXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgVXNvQ2VsdWxhclBhZ2UyIGZyb20gXCIuLi92aXN0YXMvdXNvQ2VsdWxhclBhZ2UyLnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ1c29DZWx1bGFyLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gVXNvQ2VsdWxhclBhZ2UyKCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhvamFCb3R0b21cIilcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInRyaWFuZ3VsZVwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyaWFuZ3VsZUhvamFcIilcclxuXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvdXNvLWNlbHVsYXItcGFnZTNcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy91c28tY2VsdWxhci1wYWdlMVwiXHJcblxyXG5cclxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51Y3BcIilcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHR9XHJcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Vzb0NlbHVsYXJQYWdlMlwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0ICAgIH0sIDEwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAyMDAwKVxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c29DZWx1bGFyUGFnZTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHRcdH1cclxuXHR9LCBmYWxzZSlcclxuXHJcblxyXG5cdHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IFVzb0NlbHVsYXJQYWdlMyBmcm9tIFwiLi4vdmlzdGFzL3Vzb0NlbHVsYXJQYWdlMy52aWV3LmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXHJcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXHJcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidXNvQ2VsdWxhci1jb250YWluZXJcIilcclxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IFVzb0NlbHVsYXJQYWdlMygpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxyXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2NsYXJvLXRpcHMtcGFnZTFcIlxyXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy91c28tY2VsdWxhci1wYWdlMlwiXHJcblxyXG5cclxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51Y3AzXCIpXHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcblx0fVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c29DZWx1bGFyUGFnZTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cdCAgICB9LCAxMDAwKVxyXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgICBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2VcIikuaW5uZXJIVE1MPVwiUkVQRVRJQ0nDk04gMlwiXHJcblx0ICAgIH0sIDIwMDApXHJcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbMl0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgICBhbGxJbWFnZVszXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbNF0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi51c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZVwiKS5pbm5lckhUTUw9XCJSRVBFVElDScOTTiAzXCJcclxuXHQgICAgfSwgNTAwMClcclxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzFdLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVsyXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbM10uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgICBhbGxJbWFnZVs0XS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlXCIpLmlubmVySFRNTD1cIlJFUEVUSUNJw5NOIDRcIlxyXG5cdCAgICB9LCA4MDAwKVxyXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdCAgICAgIGFsbEltYWdlWzJdLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgICBhbGxJbWFnZVszXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcblx0ICAgICAgYWxsSW1hZ2VbNF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgICBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2VcIikuaW5uZXJIVE1MPVwiUkVQRVRJQ0nDk04gNVwiXHJcblx0ICAgIH0sIDExMDAwKVxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c29DZWx1bGFyUGFnZTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XHJcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuXHQgICAgZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlXCIpLmlubmVySFRNTD1cIlJFUEVUSUNJw5NOIDFcIlxyXG5cdFx0fVxyXG5cdH0sIGZhbHNlKVxyXG5cclxuXHRyZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBVc29DZWx1bGFyUGFnZTQgZnJvbSBcIi4uL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTQudmlldy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxyXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxyXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInVzb0NlbHVsYXItY29udGFpbmVyXCIpXHJcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBVc29DZWx1bGFyUGFnZTQoKTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcclxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy91c28tY2VsdWxhci1wYWdlNVwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3Vzby1jZWx1bGFyLXBhZ2UzXCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgVXNvQ2VsdWxhclBhZ2U1IGZyb20gXCIuLi92aXN0YXMvdXNvQ2VsdWxhclBhZ2U1LnZpZXcuanNcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcclxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcclxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ1c29DZWx1bGFyLWNvbnRhaW5lclwiKVxyXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gVXNvQ2VsdWxhclBhZ2U1KCk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvY2xhcm8tdGlwcy1wYWdlMVwiXHJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3Vzby1jZWx1bGFyLXBhZ2U0XCJcclxuXHJcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCIvL3F1ZUVzQWN0aXZhdGUgPSByZXF1aXJlKFwiLi92aXN0YXMvcXVlLWVzLWFjdGl2YXRlLmh0bWxcIilcclxuaW1wb3J0IHF1ZUVzQWN0aXZhdGUgZnJvbSBcIi4vdmlzdGFzL2Vycm9yLnZpZXcuanNcIlxyXG4oKGQsIHcsIGMpID0+IHtcclxuXHQvL2ltcG9ydCB7cGFnZXN9IGZyb20gXCIuL2NvbnRyb2xsZXIvaW5kZXguanNcIlxyXG5cdGNvbnN0IGFjdFBvcHVwID0gZC5xdWVyeVNlbGVjdG9yKFwiI2FjdFBvcHVwXCIpLFxyXG5cdFx0cG9wdXBIb3dUb0Z1bmN0aW9uID0gZC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwSG93VG9GdW5jdGlvblwiKSxcclxuXHRcdGxpbmtIb3dUb0Z1bmN0aW9uID0gZC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtIb3dUb0Z1bmN0aW9uXCIpLFxyXG5cdFx0cm9vdERhc2hib2FyZCA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJyb290RGFzaGJvYXJkXCIpLFxyXG5cdFx0e3BhZ2VzfSA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXIvaW5kZXguanNcIilcclxuXHRhY3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0cG9wdXBIb3dUb0Z1bmN0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJhZGRBbmltYXRpb25cIilcclxuXHR9KVxyXG5cdGxpbmtIb3dUb0Z1bmN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRwb3B1cEhvd1RvRnVuY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImFkZEFuaW1hdGlvblwiKVxyXG5cdH0pXHJcblx0Y29uc3Qgcm91dGVzID0gKHJvdXRlKSA9PiB7XHJcblx0XHRyb290RGFzaGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRzd2l0Y2gocm91dGUpe1xyXG5cdFx0XHRjYXNlIFwiIy9cIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlBvcnRhZGEoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvcG9ydGFkYVwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuSG9tZSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9xdWUtYWN0aXZhdGVcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlF1ZUVzQWN0aXZhdGUoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvY29ub2NlLWV4dHJlbWlkYWRlc1wiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQ29ub2NlRXh0cmVtaWRhZGVzKCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL2hvbWJyby1leHRyZW1pZGFkXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Ib21icm9FeHRyZW1pZGFkKCkgKVxyXG5cdFx0XHR9XHRcclxuXHRcdFx0Y2FzZSBcIiMvY29kby1leHRyZW1pZGFkXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Db2RvRXh0cmVtaWRhZCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9hbnRlYnJhem8tZXh0cmVtaWRhZFwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQW50ZWJyYXpvRXh0cmVtaWRhZCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9tdW5pZWNhLWV4dHJlbWlkYWRcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLk11bmllY2FFeHRyZW1pZGFkKCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL2N1aWRhci1leHRyZW1pZGFkZXNcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkN1aWRhckV4dHJlbWlkYWRlcygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9hY3RpdmEtZXh0cmVtaWRhZFwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFMoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTJcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTIoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTNcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTMoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTRcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTQoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTVcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTUoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTZcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTYoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTdcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTcoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZThcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTgoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTlcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTkoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTEwXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5BY3RpdmFFeHRyZW1pZGFkU1BhZ2UxMCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5SZWxhamFFeHRyZW1pZGFkZXNTKCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTJcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMigpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2UzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5SZWxhamFFeHRyZW1pZGFkZXNTUGFnZTMoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlNFwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U0KCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTVcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U2XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5SZWxhamFFeHRyZW1pZGFkZXNTUGFnZTYoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlN1wiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U3KCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZThcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U5XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5SZWxhamFFeHRyZW1pZGFkZXNTUGFnZTkoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlMTBcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvZWplcmNpdGEtZXh0cmVtaWRhZGVzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FamVyY2l0YUV4dHJlbWlkYWRlcygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbGlnZS1nb21hXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbGlnZUdvbWEoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvbWFudGVuLW1vdmltaWVudG9zXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5NYW50ZW5Nb3ZpbWllbnRvcygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9iYW5kYS1lbGFzdGljYVwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQmFuZGFFbGFzdGljYSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlMlwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQmFuZGFFbGFzdGljYVBhZ2UyKCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2UzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5CYW5kYUVsYXN0aWNhUGFnZTMoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTRcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkJhbmRhRWxhc3RpY2FQYWdlNCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNC0yXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5CYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTVcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkJhbmRhRWxhc3RpY2FQYWdlNSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNS0yXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5CYW5kYUVsYXN0aWNhUGFnZTVQYXJ0ZTIoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTZcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkJhbmRhRWxhc3RpY2FQYWdlNigpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9jdWlkYS1icmF6b3NcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkN1aWRhQnJhem9zKCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL2VuLXRyYWJham9cIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqbygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2UyXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlMigpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2UzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlMygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2U0XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlNCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2U1XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlNSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2U2XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlNigpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2U3XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlNygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvLXBhZ2U4XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FblRyYWJham9QYWdlOCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi1jYXNhLXBhZ2UxXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbkNhc2FQYWdlMSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi1jYXNhLXBhZ2UyXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbkNhc2FQYWdlMigpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi1jYXNhLXBhZ2UzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbkNhc2FQYWdlMygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi1jYXNhLXBhZ2U0XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbkNhc2FQYWdlNCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi1jYXNhLXBhZ2U1XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbkNhc2FQYWdlNSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9lbi1jYXNhLXBhZ2U2XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5FbkNhc2FQYWdlNigpIClcclxuXHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0XHRjYXNlIFwiIy91c28tY2VsdWxhci1wYWdlMVwiOntcclxuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuVXNvQ2VsdWxhclBhZ2UxKCkgKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCIjL3Vzby1jZWx1bGFyLXBhZ2UyXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Vc29DZWx1bGFyUGFnZTIoKSApXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcIiMvdXNvLWNlbHVsYXItcGFnZTNcIjp7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlVzb0NlbHVsYXJQYWdlMygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9jbGFyby10aXBzLXBhZ2UxXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5DbGFyb1RpcHNQYWdlMSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9jbGFyby10aXBzLXBhZ2UyXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5DbGFyb1RpcHNQYWdlMigpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9jbGFyby10aXBzLXBhZ2UzXCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5DbGFyb1RpcHNQYWdlMygpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwiIy9jbGFyby10aXBzLXBhZ2U0XCI6e1xyXG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5DbGFyb1RpcHNQYWdlNCgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuaW5uZXJIVE1MID0gcXVlRXNBY3RpdmF0ZSgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjL1wiXHJcblx0XHRyb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Qb3J0YWRhKCkgKVxyXG5cdFx0dy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdHJvdXRlcyh3LmxvY2F0aW9uLmhhc2gpXHJcblx0XHR9KVxyXG5cdH1cclxuXHR3LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpXHJcbn0pKGRvY3VtZW50LCB3aW5kb3csIGNvbnNvbGUubG9nKSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpY1wiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy93b21lbkV4dHJlbWlkYWRlc1N1cGVyaW9yZXMuc3ZnXCIgY2xhc3M9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzIHdvbWVuRXh0cmVtaWRhZGVzXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+QUNUSVZBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3ViVGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5UZSBwcmVzZW50YW1vcyB1bmEgc2VyaWUgZGUgZWplcmNpY2lvcyBxdWUgdGUgYXl1ZGFyYW4gYTo8L3A+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlJlbGFqYXIgdHVzIGJyYXpvczwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+RGlzbWludWlyIGxhIHRlbnNpw7NuIG11c2N1bGFyPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5SZWR1Y2lyIGVsIHJpZXNnbyBkZSBwYWRlY2VyIGxlc2lvbmVzPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsIi8vY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGktLXRleHRcIlxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy93b21lbkJyYXpvRXh0ZW5kaWRvRGVyZWNoby5zdmdcIiBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIi8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPk1VRVZFIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saS0tdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkxsZXZhIHR1cyBicmF6b3MgYWwgZnJlbnRlLCBhYnJlIHkgY2llcnJhIHR1cyBtYW5vcy48L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiYW50ZXNEZVByYWN0aWNhclwiIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljIGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy0tcGFnZTJcIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJhbnRlc0RlUHJhY3RpY2FyLWltZyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9tZW5BbnRlc0RlUHJhY3RpY2FyLnN2Z1wiLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+QU5URVMgREUgUFJBQ1RJQ0FSTE9TPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zdWJUaXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkRlYmVzIHRlbmVyIGVuIGN1ZW50YWxvIHNpZ3VpZW50ZTo8L3A+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlPDrSBsYSByZWFsaXphY2nDs24gZGUgdW4gZWplcmNpY2lvIHByb3ZvY2EgZG9sb3IsIGRlYmVzIGludGVycnVtcGlybG8geSBzdXN0aXR1aXJsbyBwb3Igb3Ryby48L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlNpIGN1ZW50YXMgY29uIHJlc3RyaWNjaW9uZXMgbyByZWNvbWVuZGFjaW9uZXMgbcOpZGljYXMsIGNvbnN1bHRhIGNvbiB0dSBtw6lkaWNvIHByZXZpYW1lbnRlLjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TGEgZWplY3VjacOzbiBkZSBsb3MgZWplcmNpY2lvcyBzZSBsbGV2YXLDoSBhIGNhYm8gZGUgZm9ybWEgc3VhdmUsIHByb2dyZXNpdmEgeSBjb250cm9sYWRhLjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TGxldmEgdW4gb3JkZW4gZW4gbGEgZWplY3VjacOzbiBkZSBsb3MgZWplcmNpY2lvcyByZWFsaXphbmRvIGVzdG9zIGRlIGZvcm1hIGNvbnNjaWVudGUgeSBjb250cm9sYWRhIGludGVudGFuZG8gcmVzcGlyYXIgcmVndWxhcm1lbnRlLiA8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTVzXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5TaSBwcmVzZW50YXMgZG9sb3Igc8O6Yml0byBlIGludGVuc28sIGNvbnN1bHRhIGEgdHUgbcOpZGljbyBhbnRlcyBkZSByZWFsaXphciBlc3RvcyBlamVyY2ljaW9zLjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy93b21lbk11ZXZlRXh0cmVtaWRhZGVzLnN2Z1wiIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPk1VRVZFIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saS0tdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPlJlY3VlcmRhIGluaWNpYXIgY29uIGVqZXJjaWNpb3MgZGUgbW92aWxpZGFkIGFydGljdWxhcjwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3ViVGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj7CoU5vIG9sdmlkZXMgPGI+Y29udHJvbGFyIHR1IHJlc3BpcmFjacOzbiE8L2I+PC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZS0tYmdBbGwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNHNcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmVfdGV4dCBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0LS1iZ0FsbFwiPlJlYWxpemEgZGUgPGI+NSBhIDEwIHJlcGV0aWNpb25lczwvYj48YnIvPiBkZSBjYWRhIHVuby48L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljIGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy0tcGFnZTJcIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9tZW5NdWV2ZUV4dHJlbWlkYWRlcy5zdmdcIiBjbGFzcz1cIm11ZXZlLWV4dHJlbWlkYWRlcyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+TVVFVkUgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zdWJUaXRsZSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXN1YlRpdGxlLS1tZWRpdW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5Db250aW7DumEgbGEgc2VzacOzbiBjb24gZWplcmNpY2lvcyBkZSBlc3RpcmFtaWVudG8gbXVzY3VsYXI8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTRzXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlXCI+RWplcmNpY2lvIDE8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHRcIj5Db24gZXNwYWxkYSB5IGNhYmV6YSByZWN0YXMsIGVudHJlbGF6YSBsYXMgbWFub3MgeSBsbGV2YSBsb3MgYnJhem9zIHBvciBlbmNpbWEgZGUgbGEgY2FiZXphIDwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljLS1wYWdlMlwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpbyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL21lbk11ZXZlRXh0cmVtaWRhZGVzQ29kby5zdmdcIiBjbGFzcz1cIm11ZXZlLWV4dHJlbWlkYWRlcy1jb2RvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDI8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5Db24gbG9zIGNvZG9zIHJlY3RvcywgbGxldmEgbG9zIGJyYXpvcyBoYWNpYSBmdWVyYSB5IGFycmliYS4gVnVlbHZhIGEgbGEgcG9zaWNpw7NuIGRlIHBhcnRpZGE8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljIGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy0tcGFnZTJcIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy93b21lbkJyYXpvc0F0cmFzLnN2Z1wiIGNsYXNzPVwiYnJhem9zLWF0cmFzIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDM8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5JZ3VhbG1lbnRlLCBjb24gbG9zIGNvZG9zIHJlY3RvcywgbGxldmEgbG9zIGJyYXpvcyBoYWNpYSBhdHLDoXMuIFZ1ZWx2ZSBhIGxhIHBvc2ljacOzbiBkZSBwYXJ0aWRhPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYyBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtLXBhZ2UyXCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljLWF1ZGlvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvbWVuQ29kb3NBcnJpYmEuc3ZnXCIgY2xhc3M9XCJjb2Rvcy1hcnJpYmEgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlLS1ib3R0b21QNSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPk1VRVZFIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5FamVyY2ljaW8gNDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkxsZXZhIGxhcyBtYW5vcyBhIGxvcyBob21icm9zLCBnaXJlIGxvcyBob21icm9zIGhhY2lhIGFkZWxhbnRlIHkgbHVlZ28gaGFjaWEgYXRyw6FzPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpY1wiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpbyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL21lbkJyYXpvRXNwYWxkYS5zdmdcIiBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktM3NcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gNTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+VWJpY2EgZWwgYnJhem8gZGVyZWNobyBhbCBsYWRvIHkgZG9ibGEgZWwgY29kbzwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TGxldmEgbGEgbWFubyBkZWwgbWlzbW8gbGFkbyBoYWNpYSBhcnJpYmEgeSBsdWVnbyBoYWNpYSBhYmFqbzwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+UmVwaXRlIGVsIG1vdmltaWVudG8gY29uIGVsIG90cm8gYnJhem88L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljXCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljLWF1ZGlvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvd29tZW5CcmF6b0V4dGVuZGlkby5zdmdcIiBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktM3NcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gNjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+VWJpY2EgZWwgYnJhem8gYWwgZnJlbnRlIGNvbiBsYSBwYWxtYSBkZSBsYSBtYW5vIGhhY2lhIGFycmliYTwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TGxldmEgbGEgbWFubyBoYWNpYSBlbCBob21icm8gZGVsIG1pc21vIGxhZG8gZG9ibGFuZG8gc29sbyBlbCBjb2RvPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5SZWdyZXNhIGEgbGEgcG9zaWNpw7NuIGluaWNpYWwgeSByZXBpdGUgZWwgbW92aS1taWVudG8gY29uIGVsIG90cm8gYnJhem88L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2dyYXBoaWMgYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy0td2lkdGhcIj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9ib2R5SHVtYW4tYW50ZWJyYXpvLnBuZ1wiIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy1hbnRlYnJhem8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luVXAgYW5pbWF0ZV9fZGVsYXktMnNcIj5FWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXN1YlRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0zc1wiPkFudGVicmF6bzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0XCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5TaXJ2ZSBkZSBuZXhvIGVudHJlIGVsIGJyYXpvIHkgZWwgY3VlcnBvLjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Fc3TDoSBmb3JtYWRvIHBvciBsYSB1bmnDs24gZGUgbG9zIGV4dHJlbW9zIGRlIHRyZXM8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+aHVlc29zOiBsYSBjbGF2w61jdWxhLCBsYSBlc2PDoXB1bGEgKG9tw7NwbGF0bykgeSBlbCBow7ptZXJvLCBhZGVtw6FzIGRlIG3DunNjdWxvcywgbGlnYW1lbnRvcyB5IHRlbmRvbmVzLjwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTVzXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0XCI+UG9kZW1vcyByZWFsaXphciBtb3ZpbWllbnRvcyBnaXJhbmRvIGxhIHBhbG1hIGRlIGxhIG1hbm8gaGFjaWEgYXJyaWJhIChzdXBpbmFjacOzbikgeSBnaXJhbmRvIGxhIHBhbG1hIGRlIGxhIG1hbm8gaGFjaWEgYWJham8gKHByb25hY2nDs24pLjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImJhbmRhRWxhc3RpY2FcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2EyXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYTIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2ExXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbi0yXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhMS5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RUpFUkNJVEEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTIENPTiBCQU5EQSBFTMOBU1RJQ0FTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyAxPC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkxsZXZhIGVsIGJyYXpvIHBvciBhdHLDoXMgZGUgbGEgZXNwYWxkYSBhIGxhIGFsdHVyYSBkZSBsYSBjaW50dXJhPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+Q29uIGxhIG1hbm8gY29udHJhcmlhIHRvbWEgZWwgZXh0cmVtbyBkZSBsYSBiYW5kYSBlbMOhc3RpY2EgcG9yIGRldHLDoXMgZGUgbGEgY2FiZXphIHkgZXh0aWVuZGUgZWwgYnJhem8gaGFjaWEgYXJyaWJhIHNvc3RlbmllbmRvIGR1cmFudGUgMyBzZWd1bmRvcy48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5WdWVsdmUgYSBsYSBwb3NpY2nDs24gaW5pY2lhbCB5IHJlcGl0ZSBlbCBlamVyY2ljaW88L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5DYW1iaWEgbGEgcG9zaWNpw7NuIGRlIHR1cyBicmF6b3MgeSByZWFsaXphIGVsIGVqZXJjaWNpbyBjb24gbGEgb3RyYSBleHRyZW1pZGFkPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhUGFnZTJcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMi0xXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhMSBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlMi0xLnN2Z1wiIC8+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTItMlwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYTIgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTItMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UyLTNcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGEzIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2UyLTMuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMi00XCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhNCBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlMi00LnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDI8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+RGUgcGllLCBjb24gbG9zIHBpZXMgc2VwYXJhZG9zIGFsIGFuY2hvIGRlIGxvcyBob21icm9zPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TG9zIHBpZXMgcGlzYW5kbyBsYSBtaXRhZCBkZWwgdGhlcmFiYW5kIHkgbGFzIG1hbm9zIHRvbWFuZG8gbG9zIGV4dHJlbW9zIGRlIGxhIGJhbmRhIGVsw6FzdGljYTwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkxsZXZhIGxvcyBicmF6b3MgaGFjaWEgYXJyaWJhIHkgYSBsb3MgbGFkb3MgaGFzdGEgbGEgYWx0dXJhIGRlIGxvcyBob21icm9zLCBzb3N0w6luIGR1cmFudGUgMyBzZWd1bmRvczwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlZ1ZWx2ZSBhIGxhIHBvc2ljacOzbiBpbmljaWFsIHkgcmVwaXRlIGVsIGVqZXJjaWNpbzwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlB1ZWRlcyBhbHRlcm5hciBlbCBkZXJlY2hvIGUgaXpxdWllcmRvIG8gcmVhbGl6YXIgZWwgbW92aW1pZW50byBhbCB0aWVtcG8gY29uIGFtYm9zIGJyYXpvcy48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImJhbmRhRWxhc3RpY2FQYWdlM1wiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWMgYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWNQYWdlMyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTMtMVwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2UzLTEgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTMtMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UzLTJcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlMy0yIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2UzLTEuc3ZnXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPkVKRVJDSVRBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUyBDT04gQkFOREEgRUzDgVNUSUNBUzwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktM3NcIj5FamVyY2ljaW8gMzwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Db24gbG9zIGJyYXpvcyBleHRlbmRpZG9zIGhhY2lhIGVsIGZyZW50ZSBhZ2FycmEgbG9zIGV4dHJlbW9zIGRlIGxhIGJhbmRhIGVsw6FzdGljYTwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkFicmUgbG9zIGJyYXpvcyB5IHNvc3TDqW4gZHVyYW50ZSAzIHNlZ3VuZG9zPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+VnVlbHZlIGEgbGEgcG9zaWNpw7NuIGluaWNpYWwgeSByZXBpdGUgZWwgZWplcmNpY2lvPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhUGFnZTRcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljIGJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljUGFnZTMgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U0LTFcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlNC0xIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2U0LTEuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC0yXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhUGFnZTQtMiBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNC0yLnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDQ8L3A+XHJcblx0XHRcdFx0XHQ8dWwgaWQ9XCJiYW5kYXNFbGFzdGljYXNMaXN0c1wiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlB1ZWRlcyBjb21iaW5hciBlbCBhbnRlcmlvciBlamVyY2ljaW8sIGNvbiBsb3MgY29kb3MgZmxleGlvbmFkb3MgYSBsYSBhbHR1cmEgZGVsIHBlY2hvIHNvc3RlbmllbmRvIGZ1ZXJ0ZW1lbnRlIGxhIGJhbmRhIGVsw6FzdGljYS48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5BYnJlIGVsIGJyYXpvIGRlcmVjaG8gbWllbnRyYXMgZWwgaXpxdWllcmRvIGhhY2UgcmVzaXN0ZW5jaWEsIHNvc3TDqW4gZHVyYW50ZSAzIHNlZ3VuZG9zPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+VnVlbHZlIGEgbGEgcG9zaWNpw7NuIGluaWNpYWwgeSByZXBpdGUgZWwgZWplcmNpY2lvIGNvbiBlbCBicmF6byBjb250cmFyaW88L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImJhbmRhRWxhc3RpY2FQYWdlNFwiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWMgYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWNQYWdlMyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtM1wiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2U0LTMgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTQtMy5zdmdcIiAvPlxyXG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U0LTRcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlNC00IGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2U0LTQuc3ZnXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPkVKRVJDSVRBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUyBDT04gQkFOREEgRUzDgVNUSUNBUzwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktM3NcIj5FamVyY2ljaW8gNDwvcD5cclxuXHRcdFx0XHRcdDx1bCBpZD1cImJhbmRhc0VsYXN0aWNhc0xpc3RzXCIgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+UHVlZGVzIGNvbWJpbmFyIGVsIGFudGVyaW9yIGVqZXJjaWNpbywgY29uIGxvcyBjb2RvcyBmbGV4aW9uYWRvcyBhIGxhIGFsdHVyYSBkZWwgcGVjaG8gc29zdGVuaWVuZG8gZnVlcnRlbWVudGUgbGEgYmFuZGEgZWzDoXN0aWNhLiA8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5BYnJlIGVsIGJyYXpvIGl6cXVpZXJkbyBtaWVudHJhcyBlbCBkZXJlY2hvIGhhY2UgcmVzaXN0ZW5jaWEsIHNvc3TDqW4gZHVyYW50ZSAzIHNlZ3VuZG9zPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhUGFnZTVcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljIGJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljUGFnZTMgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U1LTFcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlNS0xIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2U1LTEuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNS0yXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhUGFnZTUtMiBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNS0yLnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDU8L3A+XHJcblx0XHRcdFx0XHQ8dWwgaWQ9XCJiYW5kYXNFbGFzdGljYXNMaXN0c1wiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkFwb3lhIGVsIGNvZG8geSBhbnRlYnJhem8gc29icmUgdW5hIHN1cGVyZmljaWUgc3VhdmUsIGRlamFuZG8gbGEgbXXDsWVjYSBsaWJyZTwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkNvbiBsYSBwYWxtYSBkZSBsYSBtYW5vIGhhY2lhIGFiYWpvIHRvbWEgbGEgbWl0YWQgZGUgbGEgYmFuZGEgZnVlcnRlbWVudGU8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5MbGV2YSBsYSBtYW5vIGhhY2lhIGFycmliYSAoc2luIGRlc3BlZ2FyIGVsIGFudGUtYnJhem8pIG1pZW50cmFzIGxhIG1hbm8gY29udHJhcmlhIGhhY2UgcmVzaXN0ZW5jaWEsIHNvc3TDqW4gZHVyYW50ZSAzIHNlZ3VuZG9zPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+VnVlbHZlIGEgbGEgcG9zaWNpw7NuIGluaWNpYWwgeSByZXBpdGUgZWwgZWplcmNpY2lvPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+Q2FtYmlhIGxhIHBvc2ljacOzbiBkZSB0dXMgYnJhem9zIHkgcmVhbGl6YSBlbCBlamVyY2ljaW8gY29uIGxhIG90cmEgbWFubzwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiYmFuZGFFbGFzdGljYVBhZ2U1XCIgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpYyBiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpY1BhZ2UzIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNS0zXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhUGFnZTUtMyBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNS0zLnN2Z1wiIC8+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTUtNFwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2U1LTQgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTUtNC5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RUpFUkNJVEEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTIENPTiBCQU5EQSBFTMOBU1RJQ0FTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyA1PC9wPlxyXG5cdFx0XHRcdFx0PHVsIGlkPVwiYmFuZGFzRWxhc3RpY2FzTGlzdHNcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5BcG95YSBlbCBjb2RvIHkgYW50ZWJyYXpvIHNvYnJlIHVuYSBzdXBlcmZpY2llIHN1YXZlLCBkZWphbmRvIGxhIG11w7FlY2EgbGlicmU8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Db24gbGEgcGFsbWEgZGUgbGEgbWFubyBoYWNpYSBhYmFqbyB0b21hIGxhIG1pdGFkIGRlIGxhIGJhbmRhIGZ1ZXJ0ZW1lbnRlIDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkxsZXZhIGxhIG1hbm8gaGFjaWEgYXJyaWJhIChzaW4gZGVzcGVnYXIgZWwgYW50ZS1icmF6bykgbWllbnRyYXMgbGEgbWFubyBjb250cmFyaWEgaGFjZSByZXNpc3RlbmNpYSwgc29zdMOpbiBkdXJhbnRlIDMgc2VndW5kb3M8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5WdWVsdmUgYSBsYSBwb3NpY2nDs24gaW5pY2lhbCB5IHJlcGl0ZSBlbCBlamVyY2ljaW88L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImJhbmRhRWxhc3RpY2FQYWdlNVwiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWMgYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWNQYWdlMyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTZcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlNiBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNi5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RUpFUkNJVEEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTIENPTiBCQU5EQSBFTMOBU1RJQ0FTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyA2PC9wPlxyXG5cdFx0XHRcdFx0PHVsIGlkPVwiYmFuZGFzRWxhc3RpY2FzTGlzdHNcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Db21iaW5hIGVsIGVqZXJjaWNpbyBoYWNpZW5kbyBhZ2FycmUgZGUgbGEgYmFuZGEgY29uIGxhIHBhbG1hIGRlIGxhIG1hbm8gaGFjaWEgYXJyaWJhPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJbiBhbmltYXRlX19kZWxheS01c1wiPsKhU3VtYSBtaW51dG9zIGEgdHUgYmllbmVzdGFyITwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpY1wiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9jbGFyb1RpcHNQYWdlMS5zdmdcIiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWMtaW1nXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DTEFSTyBUSVBTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZV9zdWJ0aXRsZVwiPlVzbyBkZWwgY2VsdWxhcjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Db250cm9sYSBlbCB0aWVtcG8gZGUgY29uZXhpw7NuPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljIGNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWNQYWdlMlwiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9jbGFyb1RpcHNQYWdlMi5zdmdcIiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWMtaW1nXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DTEFSTyBUSVBTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZSBjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZVBhZ2UyXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLWNudFN1YnRpdGxlX3N1YnRpdGxlXCI+VXNvIGRlbCBjZWx1bGFyPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNvbnRyb2xhIGVsIHRpZW1wbyBkZSBjb25leGnDs248L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5NYW50w6luIGxhIHBhbnRhbGxhIGEgbGEgYWx0dXJhIGRlIHR1cyBvam9zPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q3J1emEgZWwgYnJhem8gY29udHJhcmlvIGRlbCBxdWUgbWFuZWphcyBlbCBjZWx1bGFyIHBvciBsYSBjaW50dXJhIHkgYXBveWEgZWwgYnJhem8gY29uIGVsIHF1ZSBzb3N0aWVuZXMgZWwgbcOzdmlsIHBvciBlbmNpbWEgZGUgZXN0ZTwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYyBjbGFyb1RpcHMtY29udGVudF9ncmFwaGljUGFnZTNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1tYXJrXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvY2xhcm9UaXBzUGFnZTMtTXVuaWVuLnN2Z1wiIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1pbWdcIiAvPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL2NoZWNrLnN2Z1wiIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1DaGVja1AzXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DTEFSTyBUSVBTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZSBjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZVBhZ2UyXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLWNudFN1YnRpdGxlX3N1YnRpdGxlXCI+VXNvIGRlbCBjZWx1bGFyPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNvbnRyb2xhIGVsIHRpZW1wbyBkZSBjb25leGnDs248L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5NYW50w6luIGxhIHBhbnRhbGxhIGEgbGEgYWx0dXJhIGRlIHR1cyBvam9zPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q3J1emEgZWwgYnJhem8gY29udHJhcmlvIGRlbCBxdWUgbWFuZWphcyBlbCBjZWx1bGFyIHBvciBsYSBjaW50dXJhIHkgYXBveWEgZWwgYnJhem8gY29uIGVsIHF1ZSBzb3N0aWVuZXMgZWwgbcOzdmlsIHBvciBlbmNpbWEgZGUgZXN0ZTwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlByZWZlcmlibGVtZW50ZSBjb27DqWN0YWxvIGEgdHUgY29tcHV0YWRvciAoV2hhdHNhcHBXZWIpLCBhcMOzeWF0ZSBjb24gbm90YXMgZGUgdm96IG8gYXVkaW9zIGRpc21pbnV5ZW5kbyBsb3MgbW92aW1pZW50b3MgZnJlY3VlbnRlcyBlbiBtYW5vczwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYyBjbGFyb1RpcHMtY29udGVudF9ncmFwaGljUGFnZTNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1tYXJrUGFnZTRcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9jbGFyb1RpcHNQYWdlNC1NdW5pZW4uc3ZnXCIgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljLWltZ1wiIC8+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvbm90LWNoZWNrLnN2Z1wiIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1ub3RDaGVja1wiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+Q0xBUk8gVElQUzwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGUgY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGVQYWdlMlwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZV9zdWJ0aXRsZVwiPlVzbyBkZWwgY2VsdWxhcjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Db250cm9sYSBlbCB0aWVtcG8gZGUgY29uZXhpw7NuPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+TWFudMOpbiBsYSBwYW50YWxsYSBhIGxhIGFsdHVyYSBkZSB0dXMgb2pvczwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNydXphIGVsIGJyYXpvIGNvbnRyYXJpbyBkZWwgcXVlIG1hbmVqYXMgZWwgY2VsdWxhciBwb3IgbGEgY2ludHVyYSB5IGFwb3lhIGVsIGJyYXpvIGNvbiBlbCBxdWUgc29zdGllbmVzIGVsIG3Ds3ZpbCBwb3IgZW5jaW1hIGRlIGVzdGU8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5QcmVmZXJpYmxlbWVudGUgY29uw6ljdGFsbyBhIHR1IGNvbXB1dGFkb3IgKFdoYXRzYXBwV2ViKSwgYXDDs3lhdGUgY29uIG5vdGFzIGRlIHZveiBvIGF1ZGlvcyBkaXNtaW51eWVuZG8gbG9zIG1vdmltaWVudG9zIGZyZWN1ZW50ZXMgZW4gbWFub3M8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Fdml0YSBjaGF0ZWFyIG1pZW50cmFzIGNhbWluYXM8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2dyYXBoaWMgY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy0td2lkdGhcIj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9ib2R5SHVtYW5zLWJvbmVzLnBuZ1wiIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy1jb2RvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblVwIGFuaW1hdGVfX2RlbGF5LTJzXCI+RVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJjb2RFeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1zdWJUaXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktM3NcIj5Db2RvPC9wPlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RcIj5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RfaXRlbSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlVuZSBlbCBicmF6byBjb24gZWwgYW50ZWJyYXpvPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RfaXRlbSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlN1IGZ1bmNpw7NuIGVzIGFjZXJjYXIgeSBhbGVqYXIgbGEgbWFubyBkZWwgdHJvbmNvIHkgcG9yIGVzbyBlcyBpbXByZXNjaW5kaWJsZSBlbiBtdWNoYXMgdGFyZWFzIGltcG9ydGFudGVzIGRlIGxhcyBhY3RpdmlkYWRlcyBkaWFyaWFzLjwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5odWVzb3M6IGxhIGNsYXbDrWN1bGEsIGxhIGVzY8OhcHVsYSAob23Ds3BsYXRvKSB5IGVsIGjDum1lcm8sIGFkZW3DoXMgZGUgbcO6c2N1bG9zLCBsaWdhbWVudG9zIHkgdGVuZG9uZXMuPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2RFeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNXNcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5Qb2RlbW9zIHJlYWxpemFyIG1vdmltaWVudG9zIGVudHJlIGRvYmxhciAoZmxleGnDs24pIHkgZXN0aXJhciAoZXh0ZW5zacOzbik8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbm9jZUV4dHJlbWlkYWRlcy1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvYm9keUh1bWFuLnN2Z1wiIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb25vY2VFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luVXAgYW5pbWF0ZV9fZGVsYXktMnNcIj5DT05PQ0UgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkxhIGV4dHJlbWlkYWQgc3VwZXJpb3IgbyBtaWVtYnJvIHN1cGVyaW9yLCBzb24gY2FkYSB1bmEgZGUgbGFzIGV4dHJlbWlkYWRlcyBxdWUgc2UgdW5lbiBhIGxhIHBhcnRlIHN1cGVyaW9yIGRlbCB0cm9uY28sIG1lZGlhbnRlIGxvcyBtw7pzY3Vsb3MsIHRlbmRvbmVzLCBuZXJ2aW9zIHkgYXJ0aWN1bGFjaW9uZXMuPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkVuIGNhZGEgZXh0cmVtaWRhZCwgZW5jb250cmFtb3MgMzIgaHVlc29zIHkgNDUgbcO6c2N1bG9zIHF1ZSBzZSB1bmVuIGVudHJlIHPDrSBwYXJhIGF5dWRhciBhIHN1IG1vdmlsaWRhZC4gRXN0w6EgY29tcHVlc3RhIHBvciA0IHNlZ21lbnRvcyBkZSBmb3JtYSBnZW5lcmFsLjwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS08aW1nIHNyYz1cImltZy9zdmcvYm9keUh1bWFuQ2lyY2xlLnN2Z1wiIGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnRfYm9keUh1bWFuQ2lyY2xlXCIgLz4tLT5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImN1aWRhQnJhem9zUGFnZTVcIiBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnRfZ3JhcGhpYyBjdWlkYUJyYXpvcy1jb250ZW50X2dyYXBoaWNQYWdlM1wiPlxyXG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljY3VpZGFCcmF6b3NQYWdlNlwiIGNsYXNzPVwiZ3JhcGhpYy1jdWlkYUJyYXpvcyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9jdWlkYUJyYXpvcy5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5DVUlEQSBUVVMgQlJBWk9TPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiY3VpZGFCcmF6b3MtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktM3NcIj5UZW4gZW4gY3VlbnRhIGxvcyBzaWd1aWVudGVzIGNvbnNlam9zIHBhcmEgbWFudGVuZXIgbGEgc2FsdWQgZW4gdHVzIGV4dHJlbWlkYWRlcyBzdXBlcmlvcmVzPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbiBjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi0td2lkdGhcIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlLS1ibHVlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIj7Cv1kgUE9SIFFVw4kgRVMgVEFOIElNUE9SVEFOVEUgQ1VJREFSIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUz88L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHQtLWFsaWduIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMnNcIj5MYXMgZXh0cmVtaWRhZGVzIHN1cGVyaW9yZXMgc29uIHNlZ21lbnRvcyBjb3Jwb3JhbGVzIGltcG9ydGFudGVzIGVuIG51ZXN0cm8gY3VlcnBvLCBjb25zdGFudGVtZW50ZSByZXF1ZXJpbW9zIGRlIGVsbGFzIHBhcmEgdG9kYXMgbnVlc3RyYXMgYWN0aXZpZGFkZXMgZGUgbGEgdmlkYSBkaWFyaWEsIHNpZW5kbyBuZWNlc2FyaW8gc3UgY3VpZGFkbyBhbCBkZXNhcnJvbGxhciBjdWFscXVpZXIgdGFyZWEgdSBvZmljaW8uIExvcyBwcmluY2lwYWxlcyBmYWN0b3JlcyBxdWUgaW5jaWRlbiBlbiBsYSBhcGFyaWNpw7NuIGRlIHBvc2libGVzIG1vbGVzdGlhcywgcHVlZGVuIHNlcjo8L3A+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwiY3VpZGFyRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY3VpZGFyRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdF9pdGVtIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktM3NcIj5Vc28gZGUgZnVlcnphLjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0zc1wiPlBvc3R1cmFzIGZvcnphZGFzIHkgbW92aW1pZW50b3MgcmVwZXRpdGl2b3MgcG9yIHRpZW1wb3MgcHJvbG9uZ2Fkb3MgeSBzaW4gcGF1c2FzPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RfaXRlbSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTNzXCI+RmFjdG9yZXMgaW5kaXZpZHVhbGVzIChlZGFkLCBlc3RpbG9zIGRlIHZpZGEsIGfDqW5lcm8sIGNvbmRpY2lvbmVzIGhlcmVkaXRhcmlhcywgZW50cmUgb3RyYXMpLjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0zc1wiPkFjdGl2aWRhZGVzIGV4dHJhIGxhYm9yYWxlcyAocGFzYXRpZW1wb3MgY29tbyB2aWRlb2p1ZWdvcywgYWN0aXZpZGFkZXMgbWFudWFsZXMgY29tbyBwaW50YXIsIHRlamVyLCBib3JkYXIgeSBhbGd1bm9zIGRlcG9ydGVzKS48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3VpZGFyRXh0cmVtaWRhZGVzLWNvbnRlbnRfZ3JhcGhpYyBjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9ncmFwaGljLS13aWR0aFwiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9jdWlkYXItZXh0cmVtaWRhZGVzLnN2Z1wiIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNHNcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiPkVKRVJDSVRBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUyBDT04gQkFOREEgRUzDgVNUSUNBUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTJzXCI+UGFyYSBsb3Mgc2lndWllbnRlcyBlamVyY2ljaW9zIHBvZHLDoXMgdXRpbGl6YXIgZWxlbWVudG9zIGNvbW86IGJhbmRhcyBlbMOhc3RpY2FzIG8gdGhlcmFiYW5kIChiYW5kYXMgZGUgdGVsYSBvIGdvbWEpLCB0aGVyYXR1YmluZyAodHVibyBkZSBnb21hKSwgbWluaSBiYW5kYXMgKGJhbmRhcyBjZXJyYWRhcyksIGJhbmRhcyBjb24gYXNhcyBkZSBwbMOhc3RpY28sIGVudHJlIG90cmFzOyBoZXJyYW1pZW50YXMgc2VuY2lsbGFzIGRlIHV0aWxpemFyIHkgZGUgYmFqbyBjb3N0byBlbiBzdSBtYXlvcsOtYS48L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlamVyY2l0YUV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2UgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktMnNcIj5BbnRlcyBkZSB1dGlsaXphciBjdWFscXVpZXJhIGRlIGVzb3MgZWxlbWVudG9zLDxiciAvPnRlbiBlbiBjdWVudGEgbG8gc2lndWllbnRlPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnRfZ3JhcGhpY1wiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiLi9pbWcvc3ZnL211amVyQmFuZGFFbGFzdGljYS5zdmdcIiBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTFzXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJlbGlnZUdvbWEtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZWxpZ2VHb21hLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVsaWdlR29tYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIj5FTElHRSBDT1JSRUNUQU1FTlRFIExBIERVUkVaQSBERSBMQSBHT01BPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZWxpZ2VHb21hLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTJzXCI+VGUgcmVjb21lbmRhbW9zIGVsZWdpciBlbCBjb2xvciBkZSBsYSBiYW5kYSBkZSBhY3VlcmRvIGEgdHUgaGFiaWxpZGFkIHkgdG9ubyBtdXNjdWxhciwgYnVzY2FuZG8gc2llbXByZSB1biBwdW50byBtZWRpbyBlbnRyZSByw61naWRhIHkgYmxhbmRhLCBwb3IgZWplbXBsbzogYW1hcmlsbGEsIHZlcmRlLCByb2phIG8gYXp1bC48L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlbGlnZUdvbWEtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMnNcIj5VbmEgYmFuZGEgZGVtYXNpYWRvIHLDrWdpZGEgb2ZyZWNlcsOhIG11Y2hhIHJlc2lzdGVuY2lhIHkgZm9yemFyw6FzIGxvcyBtw7pzY3Vsb3MsIHBvciBlbCBjb250cmFyaW8sIHVuYSBiYW5kYSBtdXkgYmxhbmRhIHB1ZWRlIG9mcmVjZXIgdW4gdHJhYmFqbyBpbnNpZ25pZmljYW50ZS48L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlbGlnZUdvbWEtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMnNcIj5BcXXDrSB0ZSBkZWphbW9zIHVuYSBndcOtYSBkZSByZXNpc3RlbmNpYSBwb3IgY29sb3JlcyBwYXJhIHRlbmVyIGVuIGN1ZW50YSBhIGxhIGhvcmEgZGUgZWxlZ2lyIHR1IGJhbmRhLjwvcD5cclxuXHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlbGlnZUdvbWEtY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTNzXCI+QWxndW5vcyBjb2xvcmVzIHBvZHLDrWFuIHZhcmlhciBkZSBhY3VlcmRvIGFsIGZhYnJpY2FudGUuPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVsaWdlR29tYS1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlxyXG5cdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRoPkNPTE9SPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+UkVTSVNURU5DSUE8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5NYXJmaWw8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5FeHRyYSBzdWF2ZTwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+QW1hcmlsbG88L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5TdWF2ZTwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+Um9qbzwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPk1lZGl1bTwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+VmVyZGU8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5GdWVydGU8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPkF6dWw8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5FeHRyYSBmdWVydGU8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPk5lZ3JhPC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+RXNwZWNpYWwgZnVlcnRlPC90ZD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5QbGF0YTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlN1cGVyIGZ1ZXJ0ZTwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+T3JvPC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+VWx0cmEgZnVlcnRlPC90ZD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZ3JhcGhpY1wiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2UxIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL2VuQ2FzYVBhZ2UxLnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gQ0FTQTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkV2aXRhIG1hbnRlbmVyIGxhcyBtYW5vcyBkb2JsYWRhczwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTNzXCI+U2kgcHJlc2VudGFzIG1vbGVzdGlhcyBlbiB1bmEgZGUgdHVzIGV4dHJlbWlkYWRlcyBzdXBlLXJpb3JlcywgdHJhdGEgZGUgY2FtYmlhciBsYSBwb3NpY2nDs24gZW4gbGEgcXVlIGR1ZXJtZXMuIEV2aXRhIGRvcm1pciBzb2JyZSBlbCBzZWdtZW50byBhZmVjdGFkbzwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJlbkNhc2FQYWdlMlwiIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZ3JhcGhpYyBlbkNhc2EtY29udGVudF9ncmFwaGljUGFnZTIgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2UyIGVjcFwiIHNyYz1cImltZy9zdmcvZW5DYXNhUGFnZTItMS5zdmdcIiAvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2UyIGVjcFwiIHNyYz1cImltZy9zdmcvZW5DYXNhUGFnZTItMi5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uIGVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uUGFnZTJcIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gQ0FTQTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+QWwgcHJhY3RpY2FyIGRlcG9ydGU8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkFsIHByYWN0aWNhciBhbGfDum4gZGVwb3J0ZSBvIHJlYWxpemFyIGFjdGl2aWRhZCBmw61zaWNhLCByZWN1ZXJkYSBzaWVtcHJlIGluY2x1aXIgZWplcmNpY2lvcyBkZSBjYWxlbnRhbWllbnRvIHkgZXN0aXJhbWllbnRvIG11c2N1bGFyLCBwcmV2aW5pZW5kbyBsZXNpb25lcyBtdXNjdWxvIGVzcXVlbMOpdGljYXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5EdXJhbnRlIGxhIHByw6FjdGljYSBkZSBkZXBvcnRlcyBvIGFjdGl2aWRhZGVzIGRlIG9jaW8gcXVlIGltcGxpcXVlbiBlbCB1c28gZnJlY3VlbnRlIGRlIGV4dHJlbWlkYWRlcyBzdXBlcmlvcmVzLCBldml0YSByZWFsaXphciBtb3ZpbWllbnRvcyBmb3J6YWRvcyBvIHNvYnJlIGVzZnVlcnpvcyBxdWUgcHVlZGFuIGdlbmVyYXIgbGVzaW9uZXMuPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImVuQ2FzYVBhZ2UzXCIgY2xhc3M9XCJlbkNhc2EtY29udGVudF9ncmFwaGljIGVuQ2FzYS1jb250ZW50X2dyYXBoaWNQYWdlMyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtZW5DYXNhUGFnZTMgZWNwXCIgc3JjPVwiaW1nL3N2Zy9lbkNhc2FQYWdlMy5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uIGVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uUGFnZTJcIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gQ0FTQTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+QWwgbGltcGlhcjwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+RW4gbG8gcG9zaWJsZSBwYXJhIGxhcyB0YXJlYXMgZGVsIGhvZ2FyLCB1dGlsaWNlIGhlcnJhbWllbnRhcyBjb21vIGVzY3Vycmlkb3IgZGUgdHJhcGVybywgcGxhbmNoYSBsaXZpYW5hLCBwaWNhZG9yYSwgZW50cmUgb3RyYXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5EdXJhbnRlIGxhIGxpbXBpZXphIGRlIHN1cGVyZmljaWVzIGV2aXRhIGRlc3ZpYXIgbGEgbWFubyBkZSBsYWRvIGEgbGFkbyByZWFsaXphbmRvIHByZWZlcmlibGVtZW50ZSBtb3ZpbWllbnRvcyBlbiBibG9xdWUgY29uIHR1IGV4dHJlbWlkYWQgc3VwZXJpb3IuIEFsdGVybmEgZWwgcGHDsW8gZGUgbGltcGllemEgZGUgdW5hIG1hbm8gYSBsYSBvdHJhPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2dyYXBoaWMgZW5DYXNhLWNvbnRlbnRfZ3JhcGhpY1BhZ2U0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1lbkNhc2FQYWdlNFwiIHNyYz1cImltZy9zdmcvZW5DYXNhUGFnZTQtMS5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPkVOIENBU0E8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkFsIG9yZ2FuaXphciBsYSBjYW1hPC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Db2xvY2EgbGEgY29iaWphIHNvYnJlIGxhIHN1cGVyZmljaWU8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkVzdGlyYSBwb2NvIGEgcG9jbyBjYWRhIHVuYSBkZSBsYXMgcHVudGFzIGRlIGxhIGNvYmlqYSBwYXJhIHRlbmRlcmxhPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2dyYXBoaWMgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2U1XCIgc3JjPVwiaW1nL3N2Zy9lbkNhc2FQYWdlNS0xLnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gQ0FTQTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+QWwgY2FyZ2FyPC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Fdml0YSBsZXZhbnRhciBvYmpldG9zIHBlc2Fkb3MuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5TaSBkZWJlcyB0cmFuc3BvcnRhciBtYW51YWxtZW50ZSB2YXJpb3MgcGFxdWV0ZXMgZGlzdHJpYsO6eWVsb3Mgc29icmUgdHVzIGRvcyBtYW5vcy48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZ3JhcGhpYyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtZW5DYXNhUGFnZTZcIiBzcmM9XCJpbWcvc3ZnL2VuQ2FzYVBhZ2U2LnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gQ0FTQTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+QWwgY2FyZ2FyPC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Fdml0YSBsZXZhbnRhciBvYmpldG9zIHBlc2Fkb3MuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5TaSBkZWJlcyB0cmFuc3BvcnRhciBtYW51YWxtZW50ZSB2YXJpb3MgcGFxdWV0ZXMgZGlzdHJpYsO6eWVsb3Mgc29icmUgdHVzIGRvcyBtYW5vcy48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlNpIHBvc2VlcyBib2xzbyBvIG1hbGV0w61uLCBkZWJlcyBjb2xnYXJsbyBjcnV6YWRvIHkvbyBkZSBsb3MgZG9zIHRpcmFudGVzLCBwYXJhIGRpc3RyaWJ1aXIgZWwgcGVzbyBzb2JyZSBsb3MgZG9zIGhvbWJyb3MuPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cImVuVHJhYmFqb1BhZ2VcIiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2dyYXBoaWMgZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpY1BhZ2UxXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlMVwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiIHNyYz1cImltZy9zdmcvZW5UcmFiYWpvUGFnZTEucG5nXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5FTiBFTCBUUkFCQUpPPC9wPlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPlViaWNhIGxvcyBlbGVtZW50b3MgZGUgdHJhYmFqbyBkZSBtYXlvciB1c28gZGVudHJvIGRlIHpvbmEgbcOtbmltYSwgZXZpdGFuZG8gbG9zIG1vdmltaWVudG9zIGZvcnphZG9zIGVuIHRyb25jbyB5IGV4dHJlbWlkYWQgc3VwZXJpb3IgYWwgcmVhbGl6YXIgYWdhcnJlczwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiZW5UcmFiYWpvUGFnZTJcIiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2dyYXBoaWMgZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpY1BhZ2UyXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlMlwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlMiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlMi5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPkVOIEVMIFRSQUJBSk88L3A+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTNzXCI+UmVjdWVyZGEgYWp1c3RhciBsYSBhbHR1cmEgZGVsIGFzaWVudG8gYWxpbmVhbmRvIGxvcyBjb2RvcyBjb24gbGEgc3VwZXJmaWNpZSBkZSB0cmFiYWpvIChjb2RvcyBkb2JsYWRvcyBlbiDDoW5ndWxvIHJlY3RvIDkwwrApLjwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiZW5UcmFiYWpvUGFnZTNcIiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2dyYXBoaWMgZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpY1BhZ2UzXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlM1wiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlMyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlMy5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPkVOIEVMIFRSQUJBSk88L3A+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTNzXCI+RWwgbW91c2UgZGViZSBlc3RhciBhIHR1IGFsY2FuY2Ugc29icmUgbGEgbWlzbWEgc3VwZXJmaWNpZSBkb25kZSBzZSBlbmN1ZW50cmEgdWJpY2FkbyBlbCB0ZWNsYWRvLiBBc2Vnw7pyYXRlIGRlIG1hbnRlbmVybG9zIHNpZW1wcmUganVudG9zLCBsb2dyYW5kbyB1biBhcG95byBtZWRpbyBkZSBhbnRlYnJhem8g4oCTIG11w7FlY2EgZHVyYW50ZSBzdSB1dGlsaXphY2nDs24uPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJlblRyYWJham9QYWdlNFwiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham8tY29udGVudF9ncmFwaGljUGFnZTRcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY2VuVHJhYmFqb1BhZ2U0XCIgY2xhc3M9XCJncmFwaGljLWVuVHJhYmFqb1BhZ2U0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL2VuVHJhYmFqb1BhZ2U0LnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gRUwgVFJBQkFKTzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5FbCBtb3VzZSBkZWJlIGVzdGFyIGEgdHUgYWxjYW5jZSBzb2JyZSBsYSBtaXNtYSBzdXBlcmZpY2llIGRvbmRlIHNlIGVuY3VlbnRyYSB1YmljYWRvIGVsIHRlY2xhZG8uIEFzZWfDunJhdGUgZGUgbWFudGVuZXJsb3Mgc2llbXByZSBqdW50b3MsIGxvZ3JhbmRvIHVuIGFwb3lvIG1lZGlvIGRlIGFudGVicmF6byDigJMgbXXDsWVjYSBkdXJhbnRlIHN1IHV0aWxpemFjacOzbi48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgZW5UcmFiYWpvUGFnZTUtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiZW5UcmFiYWpvUGFnZTVcIiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2dyYXBoaWMgZW5UcmFiYWpvUGFnZTUtY29udGVudF9ncmFwaGljXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlNVwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlNSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlNS5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gRUwgVFJBQkFKTzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5EdXJhbnRlIGxhIGRpZ2l0YWNpw7NuIHkgbWFuaXB1bGFjacOzbiBkZWwgbW91c2UsIHJlY3VlcmRlIHJlYWxpemFyIG1vdmltaWVudG9zIGVuIGJsb3F1ZS48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTRzXCI+RXZpdGEgbGFzIGRlc3ZpYWNpb25lcyBlbiBtdcOxZWNhczwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudCBlblRyYWJham9QYWdlNS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJlblRyYWJham9QYWdlNlwiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham9QYWdlNS1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY2VuVHJhYmFqb1BhZ2U1XCIgY2xhc3M9XCJncmFwaGljLWVuVHJhYmFqb1BhZ2U1IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL2VuVHJhYmFqb1BhZ2U2LnN2Z1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24gZW5UcmFiYWpvUGFnZTUtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5FTiBFTCBUUkFCQUpPPC9wPlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkR1cmFudGUgbGEgZGlnaXRhY2nDs24geSBtYW5pcHVsYWNpw7NuIGRlbCBtb3VzZSxyZWN1ZXJkZSByZWFsaXphciBtb3ZpbWllbnRvcyBlbiBibG9xdWUuPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJbiBhbmltYXRlX19kZWxheS00c1wiPkV2aXRhIGxhcyBkZXN2aWFjaW9uZXMgZW4gbXXDsWVjYXM8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgZW5UcmFiYWpvUGFnZTUtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiZW5UcmFiYWpvUGFnZTdcIiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2dyYXBoaWMgZW5UcmFiYWpvUGFnZTUtY29udGVudF9ncmFwaGljXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlNVwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlNyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlNy5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gRUwgVFJBQkFKTzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5BbCBoYWNlciBhZ2FycmUgZGUgY2FqYXMgdSBvdHJvcyBvYmpldG9zLCByZWN1ZXJkYSBtYW50ZW5lciBsYSBlc3BhbGRhIHJlY3RhLCBzdWpldGFuZG8gZmlybWVtZW50ZSBsYSBjYXJnYSBjb24gYW1iYXMgbWFub3MuPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNHNcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5VdGlsaXphIGlkZWFsbWVudGUgY2FzYSBjb24gYXNhczxiciAvPm8gYWdhcnJhZGVyYXM8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgZW5UcmFiYWpvUGFnZTUtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiZW5UcmFiYWpvUGFnZThcIiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2dyYXBoaWMgZW5UcmFiYWpvUGFnZTUtY29udGVudF9ncmFwaGljXCI+XHJcblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlOFwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlOCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlOC5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+RU4gRUwgVFJBQkFKTzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5BbCBoYWNlciBhZ2FycmUgZGUgY2FqYXMgdSBvdHJvcyBvYmpldG9zLCByZWN1ZXJkYSBtYW50ZW5lciBsYSBlc3BhbGRhIHJlY3RhLCBzdWpldGFuZG8gZmlybWVtZW50ZSBsYSBjYXJnYSBjb24gYW1iYXMgbWFub3MuPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNHNcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5VdGlsaXphIGlkZWFsbWVudGUgY2FzYSBjb24gYXNhczxiciAvPm8gYWdhcnJhZGVyYXM8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNXNcIj5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+QWwgdHJhbnNwb3J0YXIgbWFudWFsbWVudGUgY2FqYXMgdSBvdHJvcyBlbGVtZW50b3MsIG1hbnRlbmxvcyBzaWVtcHJlIGFsIGN1ZXJwby48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8aDE+RXJyb3IgZGUgUMOhZ2luYTwvaDE+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2dyYXBoaWMgZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy0td2lkdGhcIj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9ib2R5SHVtYW4tZXh0cmVtaWRhZGVzLnBuZ1wiIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy1ob21icm8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luVXAgYW5pbWF0ZV9fZGVsYXktMnNcIj5FWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXN1YlRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0zc1wiPkhvbWJybzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0XCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5TaXJ2ZSBkZSBuZXhvIGVudHJlIGVsIGJyYXpvIHkgZWwgY3VlcnBvLjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Fc3TDoSBmb3JtYWRvIHBvciBsYSB1bmnDs24gZGUgbG9zIGV4dHJlbW9zIGRlIHRyZXM8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+aHVlc29zOiBsYSBjbGF2w61jdWxhLCBsYSBlc2PDoXB1bGEgKG9tw7NwbGF0bykgeSBlbCBow7ptZXJvLCBhZGVtw6FzIGRlIG3DunNjdWxvcywgbGlnYW1lbnRvcyB5IHRlbmRvbmVzLjwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTVzXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0XCI+RXMgZWwgaG9tYnJvIGxhIGFydGljdWxhY2nDs24gY29uIG1heW9yIGFtcGxpdHVkIGRlIG1vdmltaWVudG9zIGRlIHRvZG8gZWwgY3VlcnBvLCBwb2RlbW9zIHJlYWxpemFyIG1vdmltaWVudG9zIGVuIHRvZGFzIGxhcyBkaXJlY2Npb25lcyBpbmNsdXNpdmUgcm90YWNpw7NuPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRlbmVkb3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmluY2lwYWxfX2dyaWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbmNpcGFsX19ncmlkX19jaGlsZCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcbiAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cIm9wY2lvbl9fbWVudVwiIGhyZWY9XCIjL2N1aWRhci1leHRyZW1pZGFkZXNcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3BjaW9uX19tZW51X190ZXh0XCI+RW5sYWNlIGEgdHJhYmFqYXI8L3A+XHJcbiAgICAgICAgICAgIDwvYT4tLT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJvcGNpb25fX21lbnVcIiBocmVmPVwiIy9xdWUtYWN0aXZhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW4tY29udGVuZWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJvcGNpb25fX21lbnVfX2ltYWdlblwiIHNyYz1cImltZy9jdWx0dXJpc21vLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9wY2lvbl9fbWVudV9fdGV4dFwiPiZpcXVlc3Q7UXVlIGVzIGFjdCZpYWN1dGU7dmF0ZT88L3A+XHJcbiAgICAgICAgICAgIDwvYT48YSBjbGFzcz1cIm9wY2lvbl9fbWVudVwiIGhyZWY9XCIjL2Nvbm9jZS1leHRyZW1pZGFkZXNcIj48c3BhbiBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuLWNvbnRlbmVkb3JcIj48aW1nIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW5cIiBzcmM9XCJpbWcvY2VyZWJyby5wbmdcIiBhbHQ9XCJcIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3BjaW9uX19tZW51X190ZXh0XCI+Q29ub2NlIHR1cyBleHRyZW1pZGFkZXMgc3VwZXJpb3JlczwvcD5cclxuICAgICAgICAgICAgPC9hPjxhIGNsYXNzPVwib3BjaW9uX19tZW51XCIgaHJlZj1cIiMvYWN0aXZhLWV4dHJlbWlkYWRcIj48c3BhbiBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuLWNvbnRlbmVkb3JcIj48aW1nIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW5cIiBzcmM9XCJpbWcvYmFuZGFzLnBuZ1wiIGFsdD1cIlwiIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcGNpb25fX21lbnVfX3RleHRcIj5BY3RpdmEgdHVzIGV4dHJlbWlkYWRlcyBzdXBlcmlvcmVzPC9wPlxyXG4gICAgICAgICAgICA8L2E+PGEgY2xhc3M9XCJvcGNpb25fX21lbnVcIiBocmVmPVwiIy9yZWxhamEtZXh0cmVtaWRhZGVzXCI+PHNwYW4gY2xhc3M9XCJvcGNpb25fX21lbnVfX2ltYWdlbi1jb250ZW5lZG9yXCI+PGltZyBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuXCIgc3JjPVwiaW1nL211c2N1bG8ucG5nXCIgYWx0PVwiXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9wY2lvbl9fbWVudV9fdGV4dFwiPkN1aWRhIHR1cyBleHRyZW1pZGFkZXMgc3VwZXJpb3JlczwvcD5cclxuICAgICAgICAgICAgPC9hPjxhIGNsYXNzPVwib3BjaW9uX19tZW51XCIgaHJlZj1cIiMvY2xhcm8tdGlwcy1wYWdlMVwiPjxzcGFuIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW4tY29udGVuZWRvclwiPjxpbWcgY2xhc3M9XCJvcGNpb25fX21lbnVfX2ltYWdlblwiIHNyYz1cImltZy9ib21iaWxsYS5wbmdcIiBhbHQ9XCJcIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3BjaW9uX19tZW51X190ZXh0XCI+Q2xhcm8gdGlwczwvcD5cclxuICAgICAgICAgICAgPC9hPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmluY2lwYWxfX2dyaWRfX2NoaWxkXCI+PHN2ZyBjbGFzcz1cInByaW5jaXBhbF9fZmlndXJhXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgNzUxLjU2IDc3My40XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjY2RkZWZjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZTY5NTRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogI2NkZGVmYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzI2MzIzODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy01IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM0NTVhNjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtNiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmY3MjVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZiYzBhNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy05IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNkOTQ1Mjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2Y4ZThkODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy0xMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNDAzNDMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTEyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmOWIwOTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy0xNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZjY5ZDdkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTE1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmOTdhNTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2UwZTBlMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy0xNyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTE4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNlYmViZWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJDYXBhXzJcIiBkYXRhLW5hbWU9XCJDYXBhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZlcnNpb25fMVwiIGRhdGEtbmFtZT1cIlZlcnNpb24gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk03MDguMjQsNTA0Ljg2QzY4My42NSw1OTkuMTEsNjMxLjcsNjc3LjYsNTY1LjY5LDczMXEtNi45NSw1LjYzLTE0LjA1LDEwLjgzSDE3Ni41MWMtNC4yNS0zLjQ3LTguNDUtNy4wOC0xMi40OS0xMC44M0M2Nyw2NDIuNzcsMjMuMTMsNDkwLjI3LDYzLjEzLDMzNi43NSwxMTcuNDMsMTI4LjI2LDMwNS44OC0zLjExLDQ4NCw0My4yOFM3NjIuNTMsMjk2LjM2LDcwOC4yNCw1MDQuODZaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0yXCIgZD1cIk00MDUsMTgyLjM5YTEzLjIxLDEzLjIxLDAsMSwxLDEzLjIxLTEzLjIxQTEzLjIyLDEzLjIyLDAsMCwxLDQwNSwxODIuMzlabTAtMjRhMTAuOCwxMC44LDAsMSwwLDEwLjgsMTAuNzlBMTAuOCwxMC44LDAsMCwwLDQwNSwxNTguMzlaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0yXCIgZD1cIk0zNzMuOSwxODIuMzlhMTMuMjEsMTMuMjEsMCwxLDEsMTMuMjEtMTMuMjFBMTMuMjIsMTMuMjIsMCwwLDEsMzczLjksMTgyLjM5Wm0wLTI0YTEwLjgsMTAuOCwwLDEsMCwxMC43OSwxMC43OUExMC44LDEwLjgsMCwwLDAsMzczLjksMTU4LjM5WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMlwiIGQ9XCJNMzg2LjE3LDE2OC4zOWwtMS43OS0xLjYzYzEuNjYtMS44MiwzLjQ1LTIuNyw1LjMxLTIuNTlhNi45Miw2LjkyLDAsMCwxLDQuNzUsMi42OWwtMS45NCwxLjQzLDEtLjcxLTEsLjcyYTMuNzIsMy43MiwwLDAsMC02LjMzLjA5WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtM1wiIGQ9XCJNNzMxLjg3LDQ5NC42NmMtMjcsOTguMzEtODQsMTgwLjE3LTE1Ni41MSwyMzUuODlxLTcuNjQsNS44OC0xNS40MiwxMS4zSDE0OGMtNC42Ni0zLjYyLTkuMjYtNy4zOC0xMy43MS0xMS4zLTEwNi41NC05Mi0xNTQuNjktMjUxLjEtMTEwLjc3LTQxMS4yM0M4My4xNywxMDEuODUsMjkwLjA4LTM1LjE3LDQ4NS43LDEzLjIyUzc5MS40OSwyNzcuMTksNzMxLjg3LDQ5NC42NlpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTRcIiBkPVwiTTU4LjYxLDUyMi4yNGEzLjQ2LDMuNDYsMCwwLDEsLjIuNDZjLjEzLjM1LjMxLjguNTMsMS4zOGwyLDUuMjlDNjMsNTM0LDY1LjUxLDU0MC42LDY4LjgsNTQ4LjcyYzYuNjIsMTYuMjIsMTYuMjgsMzguNDksMjkuOSw2MS41M2ExMzcuMywxMzcuMywwLDAsMSw4LjUzLDE3LjYxLDc5LjA3LDc5LjA3LDAsMCwxLDQuNTQsMTcuNjYsMTI0LDEyNCwwLDAsMS0uMDksMzAuOGMtMSw4LjcyLTIuMzUsMTUuNy0zLjI0LDIwLjUycS0uNywzLjU1LTEuMSw1LjU0Yy0uMTMuNi0uMjMsMS4wNy0uMywxLjQ0YTIsMiwwLDAsMS0uMTQuNDgsMy4xNCwzLjE0LDAsMCwxLC4wNi0uNWMuMDYtLjM3LjEzLS44NC4yMy0xLjQ1LjIzLTEuMzIuNTUtMy4xOCwxLTUuNTYuOC00Ljg0LDItMTEuODMsMy0yMC41M2ExMjUuMzksMTI1LjM5LDAsMCwwLS4wNy0zMC42NCw3OS4yMSw3OS4yMSwwLDAsMC00LjU0LTE3LjQ5QTEzOC41LDEzOC41LDAsMCwwLDk4LDYxMC42MkM4NC40LDU4Ny41Niw3NC43OSw1NjUuMiw2OC4zLDU0OC45MmMtMy4yMy04LjE1LTUuNjYtMTQuODItNy4yOC0xOS40NS0uODItMi4zMS0xLjQyLTQuMTItMS44My01LjM0bC0uNDUtMS40QTIuNDUsMi40NSwwLDAsMSw1OC42MSw1MjIuMjRaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy00XCIgZD1cIk03MSw1OTkuM2EzLjksMy45LDAsMCwxLC41NC42OEw3Myw2MDJsNS4xNiw3LjQ3YzQuMzIsNi4zMiwxMC40MiwxNSwxNi41MiwyNSwzLDUsNS43MSw5LjkyLDgsMTQuNDdzNCw4Ljc4LDUuMzgsMTIuMzcsMi4zNSw2LjU0LDIuOTIsOC42bC42OCwyLjM4YTMuODksMy44OSwwLDAsMSwuMTkuODQsMy41MywzLjUzLDAsMCwxLS4zNC0uOGwtLjgxLTIuMzNjLS42Ni0yLTEuNzQtNC45NC0zLjE0LTguNDlzLTMuMjQtNy43My01LjUyLTEyLjI1LTQuOTUtOS4zOS04LTE0LjM5Yy02LjA4LTEwLTEyLjExLTE4LjY4LTE2LjMyLTI1LjA4LTIuMTItMy4yLTMuODItNS43OS01LTcuNjFsLTEuMy0yLjFBMy41MywzLjUzLDAsMCwxLDcxLDU5OS4zWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNDUuNzIsNjE4LjMzYzQuNjMtMTAsMTYuNTUtMTYuNDYsMjcuNS0xNS41Ny0yLjQ0LDEtMy45NCwzLjUxLTQuNTUsNi4wN3MtLjUsNS4yMi0uNzEsNy44NGMtMSwxMi41Ny05LjA3LDIzLjMtMTYuODQsMzMuMjMtNS40Niw3LTEwLjk1LDE0LTE3LjQ4LDIwQzM0LjQyLDY1MiwzNS41NSw2MzMuMDYsNDUuNzIsNjE4LjMzWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNzMuMjIsNjAyLjljLTctNS4zNS0xNS45Mi03LjU3LTI0LjY5LTcuNjZzLTE3LjQ0LDEuOC0yNS45NCw0Yy01LjExLDEuMjktMTAuMjksMi43My0xNC42Niw1LjY3cy03Ljg0LDcuNy03LjkzLDEzYzcuMjEtNy45MywxOC44My05LjQ2LDI5LjEyLTEyLjQ0LDctMiwxMy43LTQuOTMsMjAuODEtNi40MXMxNywuMjgsMjMuMjksMy45MVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNzIsNjAxLjQ4YzMtMy4xOSwxLjM2LTEwLjY3LTEuMjktMTQuMnMtNi44Ny01LjUxLTExLTdhNzcuMTYsNzcuMTYsMCwwLDAtMTctMy45NCwxNy4yMiwxNy4yMiwwLDAsMCw1LjM2LDkuNDJBNTEuMjUsNTEuMjUsMCwwLDAsNTcsNTkyLjIxbDE1LDkuMjdcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTEwMC42MSw1OTcuMTljOC43MSwzLjgxLDE1LjQ1LDEwLjk0LDIyLDE3Ljg4YTk3LDk3LDAsMCwxLTI3LjM4LTExLjM0Yy0zLjM3LTIuMDUtNi43Mi00LjM1LTEwLjU3LTUuMjFzLTguMTguODYtMTEuMzksMy41MkM3OC42Nyw1OTQsOTEuOTEsNTkzLjM4LDEwMC42MSw1OTcuMTlaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk0yMTkuNjcsNTkzLjU3YzEwLjgzLDEzLjc4LDE0LjQzLDMyLjE3LDEzLjIyLDQ5LjY1YTExOSwxMTksMCwwLDAtMzguNDEtNTkuNjNjLTctNS44Ny0xNi4wOC0xMC41MS0yNC44Mi0xMC41MUMxODcuNjUsNTcxLjQ3LDIwOC41MSw1NzkuMzYsMjE5LjY3LDU5My41N1pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTE5NC41NCw1NjUuOTFjNiwuNDQsMTEuNTYsMy41LDE2LjU1LDYuOTIsNy42NCw1LjI1LDE0LjgsMTEuODYsMTguMTQsMjAuNTFhNjMuNTQsNjMuNTQsMCwwLDAtNTUuNjktMjJDMTgwLjEyLDU2OC4wOSwxODcuMjIsNTY1LjM3LDE5NC41NCw1NjUuOTFaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk0xNzcuNjMsNTQ1LjIyYzMuNDksMi40Myw2LjE3LDYuNDEsNiwxMC42NmExMy4xNSwxMy4xNSwwLDAsMS0zLjQ3LDcuODYsNTIuNiw1Mi42LDAsMCwxLTcuMzIsN2MtMi4yMS05LjgyLTQuODgtMjAuMDgtNy4wOS0yOS45QzE2OS45MSw1NDEuNjgsMTc0LjEzLDU0Mi43OSwxNzcuNjMsNTQ1LjIyWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNMTU3LjE4LDU0NC4yOGM0LjczLDMsOC45NCw3LjA5LDExLjI0LDEyLjIxczMuMjUsMTEuNTguMzUsMTYuMzhBNDIwLDQyMCwwLDAsMCwxNDIsNTM3LjA5QzE0Ny4yMSw1MzkuMTYsMTUyLjQ2LDU0MS4yNSwxNTcuMTgsNTQ0LjI4WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNMTM5Ljg0LDU2MS4xNEEzMy42NiwzMy42NiwwLDAsMSwxNjguNSw1NzMuN2EyOCwyOCwwLDAsMC0xNS4zOS0yLjkxLDM2OC42LDM2OC42LDAsMCwwLTM5LjU2LDcuMzRBMzMuNjUsMzMuNjUsMCwwLDEsMTM5Ljg0LDU2MS4xNFpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTU4Ljc0LDUyMi4yNGMtLjMyLTMuMTQsMy4wNy02LjI2LDYtNy4zNnM2LjI1LS43NCw5LjMzLS4wNmMxNy44Niw0LDMyLjYyLDE5LjM3LDM1LjgxLDM3LjM5QTIzMC40OCwyMzAuNDgsMCwwLDAsODQuNSw1NDEuNDdsMS40Ny40MWEyOS42NiwyOS42NiwwLDAsMS0yMC0xNC42MywxNS41OCwxNS41OCwwLDAsMC0yLjY4LTQuMTFjLTEuMi0xLjEzLTMuMDktMS43My00LjUxLS45XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01OC43Miw1MjIuMjFBMzguNSwzOC41LDAsMCwwLDMwLjYsNTE1LjksMzMuNjQsMzMuNjQsMCwwLDAsNy4yMyw1MzIuMzdhMjkuODcsMjkuODcsMCwwLDAtLjE1LDI4LjMyYzQuNTUtOS40NSw5LjQyLTE5LjI4LDE3Ljg4LTI1LjQ3LDItMS40NSw0LjIzLTIuNzcsNS4zNC01LDEuMy0yLjUzLjc3LTUuNjcsMS44Ny04LjI5LDEuMzctMy4yMyw1LjEyLTQuMTcsOC42My00LjM1czEzLjY1LDMsMTcuOTIsNC41OVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTguOTQsNTIyLjA2QzUwLjUzLDUxOS41Niw0MSw1MjMuNjgsMzUuMyw1MzBzLTguNjMsMTQuNzYtOS42MiwyMy4yMS0uMTksMTcsLjY2LDI1LjQ3YTEwNS43NywxMDUuNzcsMCwwLDAsMTQuNDktMzIuMTFjMS4zNS01LjE2LDIuMzMtMTAuNDksNC43Ni0xNS4yNHM4LjA3LTguNDcsMTMuMzUtOS4yNFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTkuMjIsNTIyLjI0Yy02LjcyLTMuMTEtMTAuNTEtMTAuMTMtMTEuMzctMTcuNDlBMjIuMiwyMi4yLDAsMCwxLDU2LDQ4NS4xMSwyMy44LDIzLjgsMCwwLDEsNjIuMjYsNTEwYy0xLjQyLDQtNCw4LjEtMywxMi4yN1wiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNFwiIGQ9XCJNMTEyLjM5LDY1OC41NGE1LjQxLDUuNDEsMCwwLDEsLjI4LTEuMDZjLjIzLS42OC41Mi0xLjcsMS0zLC45LTIuNTgsMi4zOC02LjI2LDQuNDMtMTAuNjlhMjcxLjMxLDI3MS4zMSwwLDAsMSw0Mi41My02My4xNCw2OC45Myw2OC45MywwLDAsMSw4LjUxLTcuODYsMjAuMTEsMjAuMTEsMCwwLDEsMi42Ny0xLjY4LDUsNSwwLDAsMSwxLS40LDYuNTEsNi41MSwwLDAsMS0xLC41NCwyNC4wNywyNC4wNywwLDAsMC0yLjU2LDEuNzgsNzUuMTcsNzUuMTcsMCwwLDAtOC4yOSw4LDI5NC43NSwyOTQuNzUsMCwwLDAtNDIuNDQsNjNjLTIuMTEsNC4zOS0zLjY1LDgtNC42NCwxMC41Ni0uNTMsMS4yNi0uODYsMi4yNy0xLjEzLDIuOTNBNi43LDYuNywwLDAsMSwxMTIuMzksNjU4LjU0WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9XCJjbHMtNlwiIHBvaW50cz1cIjg4LjU5IDc0MC43NSAxMzQuNTEgNzQwLjc1IDE0MS44MyA2ODIuMTQgODAuMiA2ODIuMTQgODguNTkgNzQwLjc1XCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk0xMDQuNyw2NTQuMTNjLTQuODYtMTEuMTgtMi44MS0yNC43My05LTM1LjI0LTQuNzMtOC0xMy40OC0xMi44Mi0yMi4xNy0xNi4yMS0yLDYuMDYtMS4wNiwxMi44MiwxLjUsMTguNjdzNi42MSwxMC45MSwxMC45LDE1LjY0YzUuOTIsNi41NSwxMi4zMywxMS4wOSwxOC43NiwxNy4xNFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJjbHMtNlwiIHg9XCI3Ny4zN1wiIHk9XCI2ODIuMTRcIiB3aWR0aD1cIjY4LjY4XCIgaGVpZ2h0PVwiMTEuOTZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjIzLjQyIDEzNzYuMjQpIHJvdGF0ZSgxODApXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy00XCIgZD1cIk03OS42Niw2OTQuNDljMC0uMjIsMTQuODYtLjM5LDMzLjE5LS4zOXMzMy4yLjE3LDMzLjIuMzktMTQuODYuMzgtMzMuMi4zOFM3OS42Niw2OTQuNyw3OS42Niw2OTQuNDlaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01NS41OCw1MjIuNzFhNzUuNjcsNzUuNjcsMCwwLDEsOC0xMiwyNS40NSwyNS40NSwwLDAsMSwxMS43My04LjA4YzYuMTktMS44MSwxMi44NC0uMzcsMTksMS40N2ExNTEuNzIsMTUxLjcyLDAsMCwxLDIxLjEyLDgsNDEuODEsNDEuODEsMCwwLDEtMjguMDcuNWMtNC43My0xLjYxLTkuMzItMS40LTE0LjI3LS44NC02LC42OS0xMy42LDYuMjctMTcuNTEsMTAuOTJcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTE2Ny4yNSw1NzIuODdjMTAuMi41NiwxOS4xMiw4LjQxLDIyLjY4LDE4czIuMzQsMjAuNDMtMS41MSwyOS44OS0xMC4xNCwxNy43MS0xNi44MSwyNS40NGMtMy4zNS0xMS41MS02LjcyLTIzLjA4LTguMTktMzVTMTYzLjA3LDU4NC4xMSwxNjcuMjUsNTcyLjg3WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMTkuNjcsNTkzLjU3YzEwLjgzLDEzLjc4LDE0LjQzLDMyLjE3LDEzLjIyLDQ5LjY1YTExOSwxMTksMCwwLDAtMzguNDEtNTkuNjE2LjA4LTEwLjUxLTI0LjgyLTEwLjUxQzE4Ny42NSw1NzEuNDcsMjA4LjUxLDU3OS4zNiwyMTkuNjcsNTkzLjU3WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5NC41NCw1NjUuOTFjNiwuNDQsMTEuNTYsMy41LDE2LjU1LDYuOTIsNy42NCw1LjI1LDE0LjgsMTEuODYsMTguMTQsMjAuNTFhNCwwLDAsMC01NS42OS0yMkMxODAuMTIsNTY4LjA5LDE4Ny4yMiw1NjUuMzcsMTk0LjU0LDU2NS45MVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzcuNjMsNTQ1LjIyYzMuNDksMi40Myw2LjE3LDYuNDEsNiwxMC42NmExMy4xNSwxMy4xNSwwLDAsMS0zLjQ3LDcuODYsNTIuNjEtNy4zMiw3Yy0yLjIxLTkuODItNC44OC0yMC4wOC03LjA5LTI5LjlDMTY5LjkxLDU0MS42OCwxNzQuMTMsNTQyLjc5LDE3Ny42Myw1NDUuMjJaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU3LjE4LDU0NC4yOGM0LjczLDMsOC45NCw3LjA5LDExLjI0LDEyLjIxczMuMjUsMTEuNTguMzUsMTYuMzhBNDIwLDQyMCwwLDAuMDlDMTQ3LjIxLDUzOS4xNiwxNTIuNDYsNTQxLjI1LDE1Ny4xOCw1NDQuMjhaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTM5Ljg0LDU2MS4xNEEzMy42NiwzMy42NiwwLDAsMSwxNjguNSw1NzMuN2EyOCwyOCwwLDAsMC0xNS4zOS0yLjkxLDM2OC42LDMtMzkuNTYsNy4zNEEzMy42NSwzMy42NSwwLDAsMSwxMzkuODQsNTYxLjE0WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2Ny4yNSw1NzIuODdjMTAuMi41NiwxOS4xMiw4LjQxLDIyLjY4LDE4czIuMzQsMjAuNDMtMS41MSwyOS44OS0xMC4xNCwxNy43LjQ0Yy0zLjM1LTExLjUxLTYuNzItMjMuMDgtOC4xOS0zNVMxNjMuMDcsNTg0LjExLDE2Ny4yNSw1NzIuODdaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTRcIiBkPVwiTTYyMy4xNyw2MDQuOHMtLjA2LjA5LS4xMy4yOGwtLjMzLjg2LTEuMjIsMy4yOWMtMS4wNiwyLjg2LTIuNjIsNy00LjY3LDEyYTI4OS4zMSwyODkuMzEsMCwwLDEtMTguNiwzOC4yOCw4NS4zNyw4NS4zNywwLDAsMC01LjMxLDExLDQ5LjUzLDQ5LjUzLDAsMCwwLTIuODIsMTEsNzcuMTEsNzcuMTEsMCwwLDAsLjA2LDE5LjE2Yy42Myw1LjQzLDEuNDUsOS43NywyLDEyLjc3bC42OCwzLjQ0Yy4wOC4zOC4xNS42Ny4xOS45YTEuMzEsMS4zMSwwLDAsMCwuMDkuM3MwLS4xMSwwLS4zMS0uMDgtLjUzLS4xNC0uOWMtLjE0LS44Mi0uMzQtMi0uNi0zLjQ3LS41LTMtMS4yNy03LjM1LTEuODYtMTIuNzdhNzcuNzQsNzcuNzQsMCwwLDEsMC0xOS4wNiw0OS4xLDQ5LjEsMCwwLDEsMi44My0xMC44OCw4NC4zNiw4NC4zNiwwLDAsMSw1LjI5LTEwLjg5LDI3NiwyNzYsMCwwLDAsMTguNDktMzguMzljMi01LjA4LDMuNTMtOS4yMyw0LjUzLTEyLjExLjUyLTEuNDMuODktMi41NiwxLjE0LTMuMzJsLjI4LS44N0EyLjU0LDIuNTQsMCwwLDAsNjIzLjE3LDYwNC44WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTIzLDY0OS4xOGMtNi43Myw4LjU3LTksMjAtOC4yMiwzMC44OWE3NC4wNSw3NC4wNSwwLDAsMSwyMy45LTM3LjFjNC4zOS0zLjY2LDEwLTYuNTUsMTUuNDQtNi41NUM1NDIuODcsNjM1LjQzLDUyOS45LDY0MC4zNCw1MjMsNjQ5LjE4WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTM4LjU5LDYzMmMtMy43Ni4yOC03LjE5LDIuMTgtMTAuMyw0LjMxLTQuNzUsMy4yNy05LjIxLDcuMzgtMTEuMjgsMTIuNzZhMzkuNTEsMzkuNTEsMCwwLDEsMzQuNjUtMTMuNjdDNTQ3LjU2LDYzMy4zMiw1NDMuMTUsNjMxLjYzLDUzOC41OSw2MzJaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01NDkuMTEsNjE5LjA5YTgsOCwwLDAsMC0zLjcyLDYuNjQsOC4xNyw4LjE3LDAsMCwwLDIuMTUsNC44OEEzMi4zNCwzMi4zNCwwLDAsMCw1NTIuMSw2MzVjMS4zNy02LjExLDMtMTIuNDksNC40MS0xOC42QTE5Ljc0LDE5Ljc0LDAsMCwwLDU0OS4xMSw2MTkuMDlaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01NjEuODMsNjE4LjUxYTE4LjE2LDE4LjE2LDAsMCwwLTcsNy42Yy0xLjQyLDMuMTgtMiw3LjItLjIyLDEwLjE5QTI1OC40LDI1OC40LDAsMCwxLDU3MS4yOCw2MTQsNTMuNzIsNTMuNzIsMCwwLDAsNTYxLjgzLDYxOC41MVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTU3Mi42Myw2MjlhMjEsMjEsMCwwLDAtMTcuODQsNy44MSwxNy4zOSwxNy4zOSwwLDAsMSw5LjU4LTEuODFBMjI4LjE5LDIyOC4xOSwwLDAsMSw1ODksNjM5LjU3LDIwLjkyLDIwLjkyLDAsMCwwLDU3Mi42Myw2MjlaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk02MjMuMDgsNjA0LjhjLjItMi0xLjkxLTMuOS0zLjc1LTQuNThhMTAuMjUsMTAuMjUsMCwwLDAtNS44MSwwLDI5LjczLDI5LjczLDAsMCwwLTIyLjI4LDIzLjI2LDE0NC4yMSwxNDQuMjEsMCwwLDEsMTUuODEtNi42OGwtLjkxLjI2YTE4LjQ4LDE4LjQ4LDAsMCwwLDEyLjQ3LTkuMTEsOS41OCw5LjU4LDAsMCwxLDEuNjctMi41NiwyLjQ1LDIuNDUsMCwwLDEsMi44LS41NVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNjIzLjEsNjA0Ljc4YTIzLjk0LDIzLjk0LDAsMCwxLDE3LjQ5LTMuOTMsMjAuOSwyMC45LDAsMCwxLDE0LjU0LDEwLjI1LDE4LjU2LDE4LjU2LDAsMCwxLC4wOSwxNy42MmMtMi44My01Ljg4LTUuODUtMTItMTEuMTItMTUuODUtMS4yMy0uOS0yLjYzLTEuNzItMy4zMi0zLjA4LS44MS0xLjU4LS40OC0zLjUzLTEuMTctNS4xNi0uODUtMi0zLjE4LTIuNi01LjM2LTIuNzFzLTguNSwxLjg5LTExLjE1LDIuODZcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTYyMyw2MDQuNjhjNS4yMy0xLjU1LDExLjE1LDEsMTQuNzEsNC45M3M1LjM3LDkuMTgsNiwxNC40NC4xMiwxMC41Ny0uNDEsMTUuODRhNjUuODEsNjUuODEsMCwwLDEtOS0yMGMtLjg0LTMuMjItMS40Ni02LjUzLTMtOS40OWExMS43NSwxMS43NSwwLDAsMC04LjMtNS43NVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNjIyLjc5LDYwNC44YzQuMTgtMS45NCw2LjUzLTYuMzEsNy4wNy0xMC44OGExMy44MiwxMy44MiwwLDAsMC01LjA3LTEyLjIzLDE0LjgzLDE0LjgzLDAsMCwwLTMuOSwxNS40N2MuODksMi41MiwyLjUsNSwxLjksNy42NFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNFwiIGQ9XCJNNTg5LjcxLDY4OS42YTUuMzgsNS4zOCwwLDAsMC0uMTgtLjY2Yy0uMTQtLjQyLS4zMi0xLjA2LS42Mi0xLjg2LS41Ny0xLjYtMS40OC0zLjg5LTIuNzYtNi42NWExNjguNDksMTY4LjQ5LDAsMCwwLTI2LjQ2LTM5LjI4LDQxLjA4LDQxLjA4LDAsMCwwLTUuMy00Ljg5LDEyLjEyLDEyLjEyLDAsMCwwLTEuNjYtMSw0LjU0LDQuNTQsMCwwLDAtLjYzLS4yNSwzLjM3LDMuMzcsMCwwLDAsLjU5LjM0LDE0LjI5LDE0LjI5LDAsMCwxLDEuNTksMS4xMSw0Ni4wOCw0Ni4wOCwwLDAsMSw1LjE2LDUsMTgzLjQ2LDE4My40NiwwLDAsMSwyNi40LDM5LjJjMS4zMiwyLjczLDIuMjgsNSwyLjg5LDYuNTcuMzMuNzguNTQsMS40MS43MSwxLjgyQTIuOTMsMi45MywwLDAsMCw1ODkuNzEsNjg5LjZaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBjbGFzcz1cImNscy02XCIgcG9pbnRzPVwiNjA0LjUxIDc0MC43NSA1NzUuOTQgNzQwLjc1IDU3MS4zOCA3MDQuMjggNjA5LjczIDcwNC4yOCA2MDQuNTEgNzQwLjc1XCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcz1cImNscy02XCIgeD1cIjU2OC43NlwiIHk9XCI3MDQuMjhcIiB3aWR0aD1cIjQyLjczXCIgaGVpZ2h0PVwiNy40NFwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNFwiIGQ9XCJNNjEwLjA3LDcxMmMwLS4xMy05LjI1LS4yMy0yMC42Ni0uMjNzLTIwLjY1LjEtMjAuNjUuMjMsOS4yNC4yNCwyMC42NS4yNFM2MTAuMDcsNzEyLjEsNjEwLjA3LDcxMlpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTYyNS4wNSw2MDUuMDlhNDYuNCw0Ni40LDAsMCwwLTUtNy40NywxNS43MywxNS43MywwLDAsMC03LjMtNWMtMy44NS0xLjEzLTgtLjIzLTExLjgzLjkxYTk0Ljc0LDk0Ljc0LDAsMCwwLTEzLjE0LDUsMjUuOTQsMjUuOTQsMCwwLDAsMTcuNDcuMzEsMTkuNywxOS43LDAsMCwxLDguODgtLjUyYzMuNzUuNDMsOC40NiwzLjkxLDEwLjg5LDYuOFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTU1LjU3LDYzNi4zYy02LjM0LjM1LTExLjksNS4yMy0xNC4xMSwxMS4xOHMtMS40NiwxMi43Mi45NCwxOC42LDYuMzEsMTEsMTAuNDYsMTUuODNjMi4wOC03LjE3LDQuMTgtMTQuMzYsNS4wOS0yMS43N1M1NTguMTcsNjQzLjI5LDU1NS41Nyw2MzYuM1pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTIzLDY0OS4xOGMtNi43Myw4LjU3LTksMjAtOC4yMiwzMC44OWE3NC4wNSw3NC4wNSwwLDAsMSwyMy45LTM3LjFjNC4zOS0zLjYxNS40NC02LjU1QzU0Mi44Nyw2MzUuNDMsNTI5LjksNjQwLjM0LDUyMyw2NDkuMThaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTM4LjU5LDYzMmMtMy43Ni4yOC03LjE5LDIuMTgtMTAuMyw0LjMxLTQuNzUsMy4yNy05LjIxLDcuMzgtMTEuMjgsMTIuNzZhMzkwLDAsMSwzNC42NS0xMy42N0M1NDcuNTYsNjMzLjMyLDU0My4xNSw2MzEuNjMsNTM4LjU5LDYzMlpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NDkuMTEsNjE5LjA5YTgsOCwwLDAsMC0zLjcyLDYuNjQsOC4xNyw4LjE3LDAsMCwwLDIuMTUsNC44OEEzMi4zNCwzMi4zNCwwLDYzNWMxLjM3LTYuMTEsMy0xMi40OSw0LjQxLTE4LjZBMTkuNzQsMTkuNzQsMCwwLDAsNTQ5LjExLDYxOS4wOVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NjEuODMsNjE4LjUxYTE4LjE2LDE4LjE2LDAsMCwwLTcsNy42Yy0xLjQyLDMuMTgtMiw3LjItLjIyLDEwLjE5QTI1OC40LDI1ODcxLjI4LDYxNCw1My43Miw1My43MiwwLDAsMCw1NjEuODMsNjE4LjUxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU3Mi42Myw2MjlhMjEsMjEsMCwwLDAtMTcuODQsNy44MSwxNy4zOSwxNy4zOSwwLDAsMSw5LjU4LTEuODFBMjI4LjE5LDIyOC4xOSw2MzkuNTcsMjAuOTIsMjAuOTIsMCwwLDAsNTcyLjYzLDYyOVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NTUuNTcsNjM2LjNjLTYuMzQuMzUtMTEuOSw1LjIzLTE0LjExLDExLjE4cy0xLjQ2LDEyLjcyLjk0LDE4LjYsNi4zMSwxMSwxMDIuMDgtNy4xNyw0LjE4LTE0LjM2LDUuMDktMjEuNzdTNTU4LjE3LDY0My4yOSw1NTUuNTcsNjM2LjNaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLThcIiBkPVwiTTM3MS4yNiw1MTQuNjNjLTEsOS44My0yLjExLDIwLjA5LTIuMTEsMjAuMDlzLTMuOCwxMS42MS03LjYzLDE4LjkyYzEwLjg0LDQuMTIsMjIuMTksNC4zOCwzMi4zOCw5Ljg5LjUyLTIuNDMsNC41My0yMy45MywxNC44Mi0zMi45LjY0LS41NSwxLjE0LTIuMiwxLjgyLTQuNDZDMzk3LjQ4LDUyMi4yMSwzODQuMjYsNTE4Ljc4LDM3MS4yNiw1MTQuNjNaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiY2xzLThcIiBjeD1cIjM3Ny4xNVwiIGN5PVwiNTYwLjQzXCIgcj1cIjE3LjA0XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLThcIiBkPVwiTTQzMS4yNiw1MjMuNjRjLTcuMjktLjQ0LTE1LjU3LTIuNTMtMjMuMjQtMi41NC0uNzMsMTIuODgtMS40NCwyNi4xLTIuMTIsMzkuMzMsMTEuNzUuMzQsMzQuMDgsMCwzNC4wOCwwYTI1Ni43MiwyNTYuNzIsMCwwLDAsOC4yOC0zNS43OVE0MzkuNzYsNTI0LjE2LDQzMS4yNiw1MjMuNjRaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiY2xzLThcIiBjeD1cIjQyMi45NFwiIGN5PVwiNTYwLjQzXCIgcj1cIjE3LjA0XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTJcIiBkPVwiTTQ2Mi4yMSwzNzkuNDZjMjAuODEsNTcuNTItOS43LDE0OS43LTkuNywxNDkuN3MtNDUuMzIsMjEtODYuOTIsMy4zOWwtMTUuNDItNjkuMzRzLTExLjgzLTU2LjYsMjIuNjktODEuNzNTNDYyLjIxLDM3OS40Niw0NjIuMjEsMzc5LjQ2WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNNDM0Ljc2LDcyMWMtMS4zOS0yLjY1LTQuNTYtNC4xNC04LjgxLTE3LjkzLTMuNTQtMTEuNDYsOS44My03Mi4wOSwxNC45LTEwNC42MWgwYzIuNy0xNC43NS4wOC0zMi4xMy0uODctMzguMDUtMTIuMzcuNTgtMjEuNy40LTM0LjA4LDAtLjI0LDQuODctMS4xNCwxOS4zOC0xLjM3LDI0LjE5LS4xNSwzLjI2LS4yNSw2LjQ2LS4zMyw5LjY1aDBzLTIuNDUsMzMuNzYsMS43Myw2Mi44MWM2LjE2LDQyLjg0LjExLDU0LjEyLS4xMSw1NC44OCwwLDAsMiwxMC42OSw2LjYzLDExLjY3LDEyLjg3LDIuNjcsMjAuMzksMTguNzEsMjguNDIsMTcuMDlzOS41LTMuNzYsOS41LTMuNzZTNDM3Ljg1LDcyNi45MSw0MzQuNzYsNzIxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cImNscy04XCIgY3g9XCI0MjIuOTRcIiBjeT1cIjU2MC40M1wiIHI9XCIxNy4wNFwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy05XCIgZD1cIk00NDYuNDUsNzM5LjJjMy45LS40MS02LjU3LTExLjQ5LTUuODUtMTFzMjQuMjYsMTkuMDcsMjUuODcsMjMuMjljLjYsMS41NS0uNiw0LjQtNS4zMyw0Ljcycy0yMC4yNy00LjM2LTI0LjczLTYtMTkuODctMjEuMzktMjMuMTctMjIuOS0zLjgxLDE4Ljc4LTQuNTUsMTlsLTIuNTktMS43OHMtNC41NS0yMC45NC0uMy0zMi42MWMwLDAsMy40Ni42NCwxMS40OCw4LjYzQzQyNS44Miw3MjkuMTEsNDQxLDczOS43Nyw0NDYuNDUsNzM5LjJaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk01MDUuMjEsNDA5LjRjMS4xMywyLjI5LS41NCwxMi45My0uODgsMTkuNTdzMS45MSwxMywzLjk0LDEyLjg5LS4xMi0xMi40NSw0LjMxLTExLjgxLDYuODQsNi40Nyw5LDEyLjExLDUuOTEsMjAuNDEsOC41NywxOC40MWMyLjg5LTIuMTgtNS4xOS0yMi43NS0yLjk1LTIzLjY4LDEuNTYtLjY1LDEwLjU2LDE5LjkxLDE0LjEyLDE4Ljk0LDMuNzYtMS0xMC43Mi0yMC41NS05LjA4LTIzLjI4czEzLjEzLDE3LjY4LDE2LDE1LjMxLTEyLjktMjAuOS0xMi4xNS0yMy4xLDEyLjE2LDEyLjE5LDEzLjYyLDkuNDljMS41NS0yLjg1LTEwLjU1LTE0Ljg4LTE2Ljc4LTIxcy0xNi0xNC4zOS0xNy43OS0xNS44NVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLThcIiBkPVwiTTUwNS4yMSw0MDkuNGE3LjgxLDcuODEsMCwxLDAtLjA4LTExQTcuODEsNy44MSwwLDAsMCw1MDUuMjEsNDA5LjRaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMFwiIGQ9XCJNNDY5Ljg4LDM1Mi42MmExNi4yNCwxNi4yNCwwLDAsMS0xNi4zNC0yMSwxNi4yNCwxNi4yNCwwLDEsMSwxNi4zNCwyMVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk01MDAuOTQsNDExLjg4Yy04LjkyLTguNzktNDQuMDktNjQuNjQtNDUuNi02Ni43OWwtMS41NS0zLjE1LDI3Ljk0LTE2LDEuMTEsMS44M2EyMDcuNDQsMjA3LjQ0LDAsMCwxLDExLjgyLDI0YzEuNjcsMy44OSwyNi4yMSw0NS4xNCwyNi4yMSw0NS4xNEw1MDIuMjgsNDEzLjNaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMFwiIGQ9XCJNNDUzLDI3NC43OGExOC43OCwxOC43OCwwLDAsMS0zMC41Ny0zLjcsMTguNzgsMTguNzgsMCwxLDEsMzAuNTcsMy43WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTBcIiBkPVwiTTQ1NS42OSwzNDYuNjJsLTEuNTgtMi40MWMtMS4xNy0yLjE5LTI4LjYxLTU0LjEzLTMzLjQzLTc4bC0uNDEtMiwzNi40NS04LjMxLjU1LDEuOTRjNy41OSwyNi43NSwyMy4xOCw2Ni4wNSwyNS41Nyw3MS4yOWwuODMsMS44MVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk00ODAuNTYsMzQ3LjRhMTYuMjQsMTYuMjQsMCwxLDEsMS42My0xOS40OCwxNi4yNywxNi4yNywwLDAsMS0xLjYzLDE5LjQ4WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNMzIwLjM1LDQ0Ny4xOWMtLjc2LDIuNDMsMi41OSwxMi42OCw0LDE5LjE3cy4xOSwxMy4xNS0xLjg0LDEzLjM1LTEuODYtMTIuMy02LjEzLTExLTUuNzIsNy40OC03LDEzLjQtMi41OCwyMS4wOS01LjUzLDE5LjUzYy0zLjItMS42OCwxLjUtMjMuMjgtLjg1LTIzLjg1LTEuNjQtLjM5LTcuMjYsMjEuMzQtMTAuOTMsMjAuOTUtMy44OC0uNDEsNy4zMS0yMiw1LjI2LTI0LjQzUzI4Ny4xNyw0OTMuODksMjgzLjk0LDQ5MnM5LjQxLTIyLjY5LDguMzItMjQuNzQtMTAuMDcsMTQtMTEuOTQsMTEuNTQsOC4wNS0xNi4zOCwxMy4yNC0yMy4zNywxMy41LTE2Ljc1LDE1LTE4LjQ3WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNMzIwLjM1LDQ0Ny4xOWE3LjgyLDcuODIsMCwxLDEtMS42OS0xMC45M0E3LjgzLDcuODMsMCwwLDEsMzIwLjM1LDQ0Ny4xOVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zMzguMjcsMzc0LjkxYTE2LjI0LDE2LjI0LDAsMSwwLTE3LjktNS4wOEExNi4yNCwxNi4yNCwwLDAsMCwzMzguMjcsMzc0LjkxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTBcIiBkPVwiTTMyNC44NCw0NDQuOTJjNS0xMS41LDIzLjQ5LTc5Ljg4LDI0LjA5LTgyLjQ0bC4yNS0zLjUtMzEuODgtNC4zMi0uMzQsMi4xMWMtLjA3LjQtMS42MSw5LjkyLTIsMjYuNjYtLjA5LDQuMjQtMTQuMjMsNTUuMS0xNC4yMyw1NS4xbDIzLjM3LDguMlpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zNTEuNzcsMjkzLjU1YTE4Ljg2LDE4Ljg2LDAsMCwxLTYuNDQsMS4yNiwxOC43OCwxOC43OCwwLDAsMS0xOS4xMy0xOC40MiwxOC43OCwxOC43OCwwLDEsMSwyNS41NywxNy4xNlpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zMTcsMzYyLjczbC0uMzEtMi44N2MwLTIuNDgsMy41Ni02NS4xNywxMC4xMS04OC42N2wuNTYtMiwzNi4yNSw5LjEzLS4zOSwyYy01LjM3LDI3LjI4LTEzLjgxLDczLjMzLTE0LjA1LDc5LjA4bC0uMDksMlpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zMzguODQsMzc0LjdhMTYuMjQsMTYuMjQsMCwxLDEsNi42LTQuNzVBMTYuMjUsMTYuMjUsMCwwLDEsMzM4Ljg0LDM3NC43WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOVwiIGQ9XCJNMzQwLjY0LDcxNC42N3MzLjM3LDcuMjQuMjQsMTQuNC02Ljg1LDE2LjE0LTcuMjQsMjIuNS02LDE4LjEzLTE2LjEyLDIxLTE1Ljg5LTIuNjgtMTQuOS0xMC44NlMzMTMsNzQyLjQ1LDMxMyw3NDIuNDVaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk0zMzkuMTIsNjQwLjQzYy01LjE4LDMyLjYzLTcsNjctMjMuMDgsOTYuODEtMS40MSwyLjYxLTIuOTQsNS4yNC0zLjQ4LDguMTVzLjExLDYuMjcsMi40Myw4LjEyLDYuMDYsMS43MSw4Ljc1LjE3LDQuNi00LjEzLDYuMi02Ljc5YzguNy0xNC40OCwxMC4xMy0zMiwxNS00OC4yMiw2LjkzLTIzLjE4LDE5Ljc1LTQzLjUxLDI4Ljg4LTY1LjcyUzM4OC4yOCw1ODYuNiwzOTQsNTYzLjI4Yy0xMC42LTMuNy0yMS4zNS04LTMyLjQ1LTkuNjQsMCwwLTkuMzUsMTguMDctMTAuMjQsMjAuMTJhMTIwLjQ4LDEyMC40OCwwLDAsMC02LjkxLDIwLjg1Yy0zLjQ1LDE0Ljk0LTIuODUsMzAuNjgtNS4yNSw0NS44MlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cImNscy04XCIgY3g9XCIzNzcuMTVcIiBjeT1cIjU2MC40M1wiIHI9XCIxNy4wNFwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMVwiIGQ9XCJNMzM0LjQsMTI3LjU1YzExLjA3LTEzLjgyLDMyLTI3LjMyLDYwLjE4LTI0LjQxLDE3Ljc3LDEuODMsNDcuNzUsMTQuMjMsNDQuNzksNDFzLTEwLjkzLDIzLjA1LDEuNDgsMzcuODIsNDIuMzEsNjIuMTcuOTEsOTAuOTMtOTIsMTMuOTEtMTIwLjY2LTE4UzMyMCwxNDUuNTMsMzM0LjQsMTI3LjU1WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTBcIiBkPVwiTTQ0NS4yMywzMDMuNzdjMTAuMjUtMTAuNTQsOS42NS0yMC4xOSw1LjY3LTI3Ljc3LjE1LS4xNC4zMi0uMjYuNDctLjRhMTguNzIsMTguNzIsMCwwLDAtNy41NS0zMS43MnYwcy0xLjI4LS43Ni0yNS02LjY1Yy0xNC4wOS0zLjc1LTI5LjMzLTEyLjA2LTU1LjYyLDQuNi02LDUuNDQtMTguNjYsOS4yOS0yOC44MiwxOUExOC43MywxOC43MywwLDAsMCwzMzgsMjk0LjE3YTE4LjUyLDE4LjUyLDAsMCwwLDYuNDUsMS4xNiwxOC4xNiwxOC4xNiwwLDAsMCwyLjc3LS4yMmM1LjMzLDE0LjQ2LDE3LjY5LDUyLjk1LDE3LjY5LDUyLjk1bC03LjYzLDM4Ljc3YzU1LjU1LDI5LDExMC00Ljc1LDExMC00Ljc1WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNNDAyLjg0LDI0NGMtNC4yNiwyLjQ2LTcuNjEsMy43NS0xMi4zOSwzLjg3LTcuMTEuMTktOS43MS00LTEyLjA4LTQuNmwtMjMuMDYtNTMuMjVMMzk3LDIwOC44NWwuMSwxLjc3WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTJcIiBkPVwiTTM5MS4zOCwyMjcuNDdhNDEuOTQsNDEuOTQsMCwwLDEtMTIuODEtMy43NCw4Ny40OCw4Ny40OCwwLDAsMS0xMS4zNy02LjIybC0xMS44OS0yNy40NkwzOTcsMjA4Ljg1bC4xLDEuNzcsMywxNy42NUMzOTcuMjIsMjI4LDM5NC4zLDIyNy44MSwzOTEuMzgsMjI3LjQ3WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNMzQxLjIsMTYxLjcxcy0xNS4zMS0zLjI5LTEzLjMyLDEzLjkxLDE0LjQ1LDE3LjU0LDE4LjEzLDE4LjI5YzAsMCw2Ljg1LDMwLjYzLDQ0LjY0LDI3LjY5UzQyMi4yNCwxODkuNDEsNDIyLDE3MHMxLjg5LTUzLjA5LTIyLjg0LTU1LjU4QzM3NC4xNywxMTEuOTMsMzM5LDExMy41NywzNDEuMiwxNjEuNzFaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMSBvam9cIiBkPVwiTTM4MiwxNzBhNS4wOCw1LjA4LDAsMSwxLTUuMy00Ljg0QTUuMDgsNS4wOCwwLDAsMSwzODIsMTcwWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTEgb2pvXCIgZD1cIk00MDcuOTEsMTcwYTUuMDgsNS4wOCwwLDEsMS01LjMtNC44NEE1LjA4LDUuMDgsMCwwLDEsNDA3LjkxLDE3MFpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTExXCIgZD1cIk0zODQuMDcsMTU4LjExYy4yLS4yNy0uNTUtMS4yOC0yLjI2LTIuMjVhMTMuMTksMTMuMTksMCwwLDAtMTQuNTksMS4zOSw3Ljg3LDcuODcsMCwwLDAtMS41NiwxLjczYy0uMjkuNDctLjM2Ljc5LS4yNC45MnMuNDUsMCwuOTItLjE5bDEuODgtLjk0YTE4Ljc0LDE4Ljc0LDAsMCwxLDYuMy0xLjg2LDE4LjQsMTguNCwwLDAsMSw2LjU5LjYzQzM4Mi43OSwxNTgsMzgzLjg2LDE1OC40MiwzODQuMDcsMTU4LjExWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTFcIiBkPVwiTTM5OC42NywxNTcuNDdjLjI3LjI2LDEuMjQtLjM2LDIuODEtMS4xMmExNy4zMywxNy4zMywwLDAsMSwxMi44OC0xLjI0bDIsLjU3Yy41MS4xMy44NC4xNi45NCwwczAtLjQ0LS40MS0uODVhNy44Nyw3Ljg3LDAsMCwwLTEuODYtMS40LDEzLjE5LDEzLjE5LDAsMCwwLTE0LjU5LDEuNEMzOTksMTU2LjEyLDM5OC40MywxNTcuMjQsMzk4LjY3LDE1Ny40N1pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEyXCIgZD1cIk0zMzAuODYsMTY5LjM4Yy0xLjMyLDQuNTUuNTUsOS4zNSwyLjM4LDEzLjcyYTcuNDQsNy40NCwwLDAsMCwyLjMxLDMuNDZjMS4xNi44LDMuMDYuNjgsMy42Ny0uNTlzLS4yOC0yLjYxLTEtMy43OS0xLjA3LTMsLjA4LTMuNjljLjUzLS4zNCwxLjIzLS4zMSwxLjc5LS42MSwxLjIyLS42NCwxLjIxLTIuMzguOS0zLjczYTIxLjIzLDIxLjIzLDAsMCwwLTItNS4zMmMtLjkxLTEuNjQtMi4zNC0zLjMyLTQuMjEtMy4yOVMzMzEuNCwxNjcuNSwzMzAuODYsMTY5LjM4WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTNcIiBkPVwiTTM3Mi41MiwyMjkuOHMxOC41OSwxNi4wNiwyMi44OSwxNS4zNiw0LjczLTE2Ljg5LDQuNzMtMTYuODksMTAuNjcsMi45MSwxMi41NCw1LDQuNjUsMjIuMyw0LjY1LDIyLjNjLTMuMjgsMy40My0xOC4xLTguOC0yMC40My03cy0xMS44MSwxNi41My0xNCwxNi4yOWMwLDAtMTgtMjMuMTgtMTcuMzgtMjdDMzY1Ljc5LDIzNi4yOSwzNzIuNTIsMjI5LjgsMzcyLjUyLDIyOS44WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTFcIiBkPVwiTTM0MS4yLDE2MS43MWMyMC4zNC00LjU3LDI1LjYxLTEzLjU2LDI3LjUyLTI5LjI4LDAsMCwxMy4zLDM3LjU1LDYzLjM0LDI4LS4zMy0uMjctMi44LTUwLTM0LjUyLTQ5LjExLTMyLjgxLjk0LTUwLjgyLDYtNTYuMzQsMjYuMzRDMzM3LDE1My4xMywzNDEuMiwxNjEuNzEsMzQxLjIsMTYxLjcxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTFcIiBkPVwiTTM0MS4yLDE2MS43MWMuMTEsNS4yNiw2LDI0LjEzLDYsMjQuMTNzLTEuMTQtMjUuNTYsMi4yNy0zMVMzNDEuMiwxNjEuNzEsMzQxLjIsMTYxLjcxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTJcIiBkPVwiTTM3Ni45NCwxOTAuMDdhMTAuMTQsMTAuMTQsMCwxLDEtMTAuNTktOS42NkExMC4xNSwxMC4xNSwwLDAsMSwzNzYuOTQsMTkwLjA3WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTJcIiBkPVwiTTQyMi4xOCwxODhhOS44NCw5Ljg0LDAsMSwxLTEwLjI3LTkuMzhBOS44Myw5LjgzLDAsMCwxLDQyMi4xOCwxODhaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xNFwiIGQ9XCJNMzk2LjYxLDE4NC4wNWMuNjUuNjctLjM2LDIuNTgtMi43LDNzLTQtMS0zLjYyLTEuODEsMS42NC0xLjI2LDMtMS41NVMzOTYsMTgzLjM0LDM5Ni42MSwxODQuMDVaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xNVwiIGQ9XCJNMzk5LjQsMTkzLjU5Yy4yMi4zNy0uNjQsMS40NS0yLjYxLDIuMzNhMTQuMDksMTQuMDksMCwwLDEtMTUuNDctMy40Yy0xLjQyLTEuNjMtMS43NS0zLTEuMzktMy4yMi43OS0uNTUsNCwyLjg4LDkuMzQsNEMzOTQuNTYsMTk0LjUyLDM5OC45MiwxOTIuNzUsMzk5LjQsMTkzLjU5WlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJjbHMtMTZcIiB4PVwiNzI5LjYzXCIgeT1cIjkuNDdcIiB3aWR0aD1cIjkuMzNcIiBoZWlnaHQ9XCIyMDAuNjFcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwiY2xzLTE3XCIgeD1cIjU5NC4yOVwiIHk9XCIxMS4wMlwiIHdpZHRoPVwiMTMzLjkzXCIgaGVpZ2h0PVwiMTk5LjM0XCIgcng9XCIwLjEzXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xOFwiIGQ9XCJNNzI5LjYzLDIxMS45MUg1OTIuODdhLjEzLjEzLDAsMCwxLS4xNC0uMTNWOS42MWEuMTQuMTQsMCwwLDEsLjE0LS4xNEg3MjkuNjNhLjE0LjE0LDAsMCwxLC4xNC4xNFYyMTEuNzhBLjEzLjEzLDAsMCwxLDcyOS42MywyMTEuOTFaTTU5NiwyMDguODFINzI2LjUzYS4xMy4xMywwLDAsMCwuMTMtLjE0di0xOTZhLjEzLjEzLDAsMCwwLS4xMy0uMTRINTk2YS4xMy4xMywwLDAsMC0uMTMuMTR2MTk2QS4xMy4xMywwLDAsMCw1OTYsMjA4LjgxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJjbHMtMTNcIiB4PVwiNjA3Ljc3XCIgeT1cIjIzLjMyXCIgd2lkdGg9XCIxMDcuMTlcIiBoZWlnaHQ9XCIxNzQuNjFcIiByeD1cIjAuMTNcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwiY2xzLTE4XCIgeD1cIjYzMS4xNlwiIHk9XCI3Mi44MlwiIHdpZHRoPVwiNjAuMTlcIiBoZWlnaHQ9XCI3MC41NVwiIHJ4PVwiMC4wNlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTZcIiBkPVwiTTY4Ni41OCwxMzQuNzNjLjA4LjIzLTIuODksMS41My04LjU1Ljg3YTIwLjkxLDIwLjkxLDAsMCwxLTkuNi0zLjg0QTE5LjQzLDE5LjQzLDAsMCwxLDY2MSwxMjBhMTYuODgsMTYuODgsMCwwLDEsNS43LTE2LDE1LjE3LDE1LjE3LDAsMCwxLDQuMzMtMi41MywxMS41OCwxMS41OCwwLDAsMSw1LjQyLS42Myw5LjUzLDkuNTMsMCwwLDEsNS40MSwyLjM3LDcsNywwLDAsMSwyLjEzLDYuMywxMC4yOCwxMC4yOCwwLDAsMS0zLDUuNDIsMjAuMTMsMjAuMTMsMCwwLDEtNC41MywzLjM0LDI1LjA4LDI1LjA4LDAsMCwxLTEwLjgyLDMuMDksMjEuNTUsMjEuNTUsMCwwLDEtMTEuNTMtMi42MywyMC45MSwyMC45MSwwLDAsMS04LjQ4LTguNzksMTcuOTMsMTcuOTMsMCwwLDEtMS41Mi0xMi4zMiwxOC4zMywxOC4zMywwLDAsMSw2LjQ5LTEwLjE0QTE1Ljg4LDE1Ljg4LDAsMCwxLDY1Niw4NC43YTEzLjUsMTMuNSwwLDAsMSw2LjEzLS4xOSwxMCwxMCwwLDAsMSw1LjU2LDMuMTQsOS4yMyw5LjIzLDAsMCwxLDIuMTgsNS45NCwxMS4zMywxMS4zMywwLDAsMS0xLjQ1LDUuNjYsMTUuMTQsMTUuMTQsMCwwLDEtMy40Myw0LjEyLDIzLDIzLDAsMCwxLTguNTMsNC41MywyMS44NCwyMS44NCwwLDAsMS05LC43LDE4LjQsMTguNCwwLDAsMS03LjgxLTMsMTYuOSwxNi45LDAsMCwxLTcuNDUtMTEuODFBMTQuMjIsMTQuMjIsMCwwLDEsNjM1LDgzLjY3YTEyLjA2LDEyLjA2LDAsMCwxLDUuMTEtNC4wOGMxLjQtLjUzLDIuMjEtLjUyLDIuMjQtLjM4cy0uNjQuNS0xLjc4LDEuMjZhMTMuNDMsMTMuNDMsMCwwLDAtNCw0LjI3QTEyLjY1LDEyLjY1LDAsMCwwLDYzNSw5My4zOWExNC4xNywxNC4xNywwLDAsMCw2LjYzLDkuMjhBMTYuMzQsMTYuMzQsMCwwLDAsNjU1LjMxLDEwNGExOS4zNiwxOS4zNiwwLDAsMCw2Ljg0LTMuODdjMi0xLjc3LDMuMzEtNCwzLjItNi40MmE0LjYxLDQuNjEsMCwwLDAtNC4xMi00LjU1LDksOSwwLDAsMC0zLjk0LjE5LDExLjMsMTEuMywwLDAsMC0zLjcxLDEuOTQsMTMuNTUsMTMuNTUsMCwwLDAtNC42OCw3LjQ2LDEzLDEzLDAsMCwwLDEuMTUsOSwxNi4yMSwxNi4yMSwwLDAsMCw2LjQ3LDYuNzMsMTYuNzksMTYuNzksMCwwLDAsOC45MSwyLjA3LDIwLjM2LDIwLjM2LDAsMCwwLDguNzctMi4zOSwxNS41MSwxNS41MSwwLDAsMCwzLjQ5LTIuNDcsNS45Miw1LjkyLDAsMCwwLDEuNzgtMi44OSwyLjU1LDIuNTUsMCwwLDAtLjcyLTIuMzMsNS4yMiw1LjIyLDAsMCwwLTIuOS0xLjI3LDcuMjMsNy4yMywwLDAsMC0zLjQxLjI5LDEwLjcxLDEwLjcxLDAsMCwwLTMuMTgsMS43NCwxMy4xOSwxMy4xOSwwLDAsMC00Ljg0LDEyLjI3LDE2Ljg2LDE2Ljg2LDAsMCwwLDUuNzMsMTAuMTYsMjAuMzUsMjAuMzUsMCwwLDAsOC4yNCw0LjEyQzY4My40OCwxMzQuODksNjg2LjU0LDEzNC4zLDY4Ni41OCwxMzQuNzNaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS08ZGl2IGNsYXNzPVwiY29udGVuZWRvcl9fbmF2ZWdhY2lvblwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25cIiBocmVmPVwiLi92aXN0YXMvdmlzdGEtMS5odG1sXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25fX2ZpZ3VyYS1jb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25fX2ZpZ3VyYVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDI2LjQ0IDI2LjI3XCIgZmlsbD1cIiNmZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkNhcGFfMlwiIGRhdGEtbmFtZT1cIkNhcGEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlBvcF91cFwiIGRhdGEtbmFtZT1cIlBvcCB1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMb2dvX3lfYm90b25lc1wiIGRhdGEtbmFtZT1cIkxvZ28geSBib3RvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTEuNTYsMjYuMjdBMS41OCwxLjU4LDAsMCwxLDAsMjQuNjV2LTIzQTEuNTgsMS41OCwwLDAsMSwxLjU2LDAsMS42OSwxLjY5LDAsMCwxLDIuNC4yM0wxOS43OSwxMS43NWExLjU3LDEuNTcsMCwwLDEsMCwyLjc3TDIuNCwyNmExLjY5LDEuNjksMCwwLDEtLjg0LjIzWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMjMuMjQsMjUuNzFhMy4yLDMuMiwwLDAsMS0zLjItMy4yVjMuNzZhMy4yLDMuMiwwLDAsMSw2LjQsMFYyMi41MUEzLjIsMy4yLDAsMCwxLDIzLjI0LDI1LjcxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25cIiBocmVmPVwiLi92aXN0YXMvdmlzdGEtMS5odG1sXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25fX2ZpZ3VyYS1jb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25fX2ZpZ3VyYVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDI2LjQ0IDI2LjI3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJDYXBhXzJcIiBkYXRhLW5hbWU9XCJDYXBhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJQb3BfdXBcIiBkYXRhLW5hbWU9XCJQb3AgdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTG9nb195X2JvdG9uZXNcIiBkYXRhLW5hbWU9XCJMb2dvIHkgYm90b25lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0xLjU2LDI2LjI3QTEuNTgsMS41OCwwLDAsMSwwLDI0LjY1di0yM0ExLjU4LDEuNTgsMCwwLDEsMS41NiwwLDEuNjksMS42OSwwLDAsMSwyLjQuMjNMMTkuNzksMTEuNzVhMS41NywxLjU3LDAsMCwxLDAsMi43N0wyLjQsMjZhMS42OSwxLjY5LDAsMCwxLS44NC4yM1pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIzLjI0LDI1LjcxYTMuMiwzLjIsMCwwLDEtMy4yLTMuMlYzLjc2YTMuMiwzLjIsMCwwLDEsNi40LDBWMjIuNTFBMy4yLDMuMiwwLDAsMSwyMy4yNCwyNS43MVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvZGl2Pi0tPlxyXG5cdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cIm1hbnRlbk1vdmltaWVudG9zLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1hbnRlbk1vdmltaWVudG9zLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cIm1hbnRlbk1vdmltaWVudG9zLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiPk1BTlTDiU4gVU5BIEJVRU5BIFBPU1RVUkEgRU4gRVNQQUxEQSBZIENPTlRST0xBIExBIFZFTE9DSURBRCBERSBMT1MgTU9WSU1JRU5UT1M8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJtYW50ZW5Nb3ZpbWllbnRvcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0yc1wiPkFsIHJlYWxpemFyIGVzdG9zIGVqZXJjaWNpb3MgY29uIHJlc2lzdGVuY2lhLCByZWN1ZXJkYSBxdWUgbGEgZXNwYWxkYSBkZWJlIGVzdGFyIHNpZW1wcmUgcmVjdGEsIGV2aXRhbmRvIGZsZXhpb25lcyBvIGN1cnZhdHVyYXMgcXVlIGZhdm9yZXpjYW4gbGEgcmVhbGl6YWNpw7NuIGRlbCBlamVyY2ljaW8uIFRlbiBlbiBjdWVudGEgcXVlIGxvcyBtb3ZpbWllbnRvcyBubyBkZWJlbiBzZXIgYnJ1c2Nvcy4gTWllbnRyYXMgcmVncmVzYXMgYSBsYSBwb3NpY2nDs24gaW5pY2lhbCBkZWwgZWplcmNpY2lvLCByZWFsaXphIHVuIHBlcXVlw7FvIGZyZW5hZG8gcGFyYSBubyBwZXJtaXRpciBxdWUgbGEgYmFuZGEgbGUgZ2FuZSBhIG51ZXN0cmEgZnVlcnphLiBUZSBpbnZpdGFtb3MgYSBwcmFjdGljYXIgbG9zIHNpZ3VpZW50ZXMgZWplcmNpY2lvczwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtYW50ZW5Nb3ZpbWllbnRvcy1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb24gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FNYW50ZW4uc3ZnXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50X2dyYXBoaWMgbXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9ncmFwaGljLS13aWR0aFwiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL2JvZHlIdW1hbk11bmllY2FNYW5vLnBuZ1wiIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy1tdW5pZWNhIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5VcCBhbmltYXRlX19kZWxheS0yc1wiPkVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi1zdWJUaXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktM3NcIj5NdcOxZWNhIHkgTWFubzwvcD5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RcIj5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm11bmllY2FFeHRyZW1pZGFkLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdF9pdGVtIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TGEgbXXDsWVjYSBub3MgcGVybWl0ZSBsYSB1bmnDs24gZW50cmUgZWwgYW50ZWJyYXpvIHkgbGEgbWFuby48L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW0gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5MYSBtYW5vIGVzIGVsIHNlZ21lbnRvIGVudHJlIGxhIG11w7FlY2EgeSBsb3MgZGVkb3MsPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+ZW5jb250csOhbmRvc2UgdmFyaW9zIGh1ZXNvcyBxdWUgc2UgdW5lbiBlbnRyZSBzw60sIHBlcm1pdGnDqW5kb25vcyByZWFsaXphciBkaWZlcmVudGVzIG1vdmltaWVudG9zIHF1ZSBub3MgZmFjaWxpdGFuIGxhIG1hbmlwdWxhY2nDs24gZGUgbG9zIG9iamV0b3MgeS9vIGVsZW1lbnRvcy48L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm11bmllY2FFeHRyZW1pZGFkLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluIGFuaW1hdGVfX2RlbGF5LTVzXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cIm11bmllY2FFeHRyZW1pZGFkLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5Db21vIG1vdmltaWVudG9zIGEgbml2ZWwgZGUgbXXDsWVjYSB0ZW5lbW9zIGFiYWpvIG8gZmxleGnDs24sIGFycmliYSBvIGV4dGVuc2nDs24sIGEgbGEgZGVyZWNoYSBvIGl6cXVpZXJkYSB5IGEgbml2ZWwgZGUgbG9zIGRlZG9zIGFiYWpvIG8gYXJyaWJhLCBzZXBhcmFyIHkgdW5pciBsb3MgZGVkb3MuPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLTxpbWcgc3JjPVwiaW1nL3N2Zy9ib2R5SHVtYW5DaXJjbGUuc3ZnXCIgY2xhc3M9XCJjb25vY2VFeHRyZW1pZGFkZXMtY29udGVudF9ib2R5SHVtYW5DaXJjbGVcIiAvPi0tPlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8aGVhZGVyIGNsYXNzPVwicG9ydGFkYS1oZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcnRhZGEtaGVhZGVyX2NudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWhlYWRlcl9sb2dvTGVmdFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIuL2ltZy9sb2dvLnBuZ1wiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvcnRhZGEtaGVhZGVyX2xvZ29SaWdodFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIuL2ltZy9nZXN0aW9uLXRhbGVudG8ucG5nXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHRcdDxzZWN0aW9uIGNsYXNzPVwicG9ydGFkYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2MVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2MS1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYxLWxlZnRfdGV4dExhcmdlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMnNcIj5BQ1TDjTwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicG9ydGFkYS1jb250ZW50X2RpdjEtbGVmdF90ZXh0U21hbGwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0yc1wiPkVYVFJFTUlEQURFUzwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4vaW1nL3N2Zy9wb3J0YWRhTXVqZXIuc3ZnXCIgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfaW1nQ2VudGVyIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktMXNcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2Mi1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYyLWxlZnRfdGV4dExhcmdlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTNzXCI+VkFURTwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicG9ydGFkYS1jb250ZW50X2RpdjItbGVmdF90ZXh0U21hbGwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5JTkZFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYyXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2Mi10ZXh0IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblVwIGFuaW1hdGVfX2RlbGF5LTRzXCI+RVFVSVBPIERFIFNFR1VSSURBRCwgU0FMVUQgRU4gRUwgVFJBQkFKTzxici8+WSBBTUJJRU5URTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0YDtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cInF1ZUVzQWN0aXZhdGUtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJxdWVFc0FjdGl2YXRlLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj7Cv1FVRSBFUyBBQ1TDjVZBVEU/PC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fc2xpZGVJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMnMgcXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5BY3TDrXZhdGUgZXMgdW5hIGhlcnJhbWllbnRhIHF1ZSBoYSBzaWRvIGRpc2XDsWFkYSBwYXJhIGJyaW5kYXJ0ZSB1bmEgc2VyaWUgZGUgZWplcmNpY2lvcyBmw61zaWNvcyBxdWUgcG9kcsOhcyByZWFsaXphciBjb21vIHBhcnRlIGRlIHR1IGdpbW5hc2lhIGxhYm9yYWwgeWEgc2VhIGVuIGxhIHNlZGUgZGUgdHJhYmFqbyBvIGVuIGxhIGNhc2EuPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fc2xpZGVJbkxlZnQgYW5pbWF0ZV9fZGVsYXktM3MgcXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5MYXMgcGF1c2FzIGFjdGl2YXMgZGVudHJvIGRlIGxhIGpvcm5hZGEgbGFib3JhbCBzb24gaW1wb3J0YW50ZXMgcGFyYSB0dSBzYWx1ZCBmw61zaWNhIHkgbWVudGFsLiBUZSByZWNvcmRhbW9zIHF1ZSwgY29tbyBwYXJ0ZSBkZWwgYXV0b2N1aWRhZG8gZGViZXMgYXNlZ3VyYXIgbGEgaW5jbHVzacOzbiBkZSBlamVyY2ljaW9zIHF1ZSB0ZSBwZXJtaXRhbiBhY3RpdmFyIHR1IHJlc3BpcmFjacOzbiwgY2lyY3VsYWNpw7NuLCBtZWpvcmFyIHR1IG1vdmlsaWRhZCBhcnRpY3VsYXIsIHJlYWxpemFyIGVzdGlyYW1pZW50b3MgbXVzY3VsYXJlcyB5IHByb3BpY2lhciBjYW1iaW9zIGRlIHBvc2ljacOzbi48L3A+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19zbGlkZUluTGVmdCBhbmltYXRlX19kZWxheS00cyBxdWVFc0FjdGl2YXRlLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dFwiPkxhIHByw6FjdGljYSBkaWFyaWEgZGUgZXN0YSBhY3RpdmlkYWQsIHRlIGF5dWRhcsOhIGEgZGlzbWludWlyIGxhIGZhdGlnYSBmw61zaWNhLCBwcmV2ZW5pciBsYSBhcGFyaWNpw7NuIGRlIGVuZmVybWVkYWRlcyBvc3Rlb211c2N1bGFyZXMgeSBwb3RlbmNpYWxpemFyIGVsIGZ1bmNpb25hbWllbnRvIGNlcmVicmFsIGluY3JlbWVudGFuZG8gdHUgcHJvZHVjdGl2aWRhZCBsYWJvcmFsLjwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJxdWVFc0FjdGl2YXRlLWNvbnRlbnRfZ3JhcGhpY1wiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9odW1hbi1leGNlcmNpc2Uuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJxdWVFc0FjdGl2YXRlLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxhdWRpbyBpZD1cImF1ZGlvMVNsaWRlM1wiIGNsYXNzPVwiYXVkaW8xU2xpZGUzXCIgY29udHJvbHM+XHJcblx0XHRcdFx0PHNvdXJjZSBzcmM9XCIuL2F1ZGlvL2F1ZGlvMVNsaWRlMy5tcDNcIiB0eXBlPVwiYXVkaW8vbXAzXCIgLz5cclxuXHRcdFx0PC9hdWRpbz5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWNcIj5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb24gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiIHNyYz1cImltZy9zdmcvcmVsYWphRXh0cmVtaWRhZGVzUy5zdmdcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+UkVMQUpBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0U21hbGwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5Db250aW7DumEgbGEgc2VzacOzbiBjb24gZWplcmNpY2lvcyBkZSBlc3RpcmFtaWVudG8gbXVzY3VsYXI8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGU4XCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpbyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyA5PC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+VW5lIGxhcyBwYWxtYXMgZGUgbGFzIG1hbm9zIGNvbiBkZWRvcyBleHRlbmRpZG9zPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlNpbiBkZXNwZWdhciBsYXMgcGFsbWFzIGRlc2NpZW5kZSBsYXMgbWFub3MgaGFzdGEgcXVlIHNpZW50YXMgZWwgZXN0aXJhbWllbnRvLjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtLWNoYW5nZVN0eWxlXCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIuc3ZnXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyAxPC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktM3NcIj5Db24gZXNwYWxkYSB5IGNhYmV6YSByZWN0YXMsIGVudHJlbGF6YSBsYXMgbWFub3MgeSBsbGV2YSBsb3MgYnJhem9zIHBvciBlbmNpbWEgZGUgbGEgY2FiZXphPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtLWNoYW5nZVN0eWxlMlwiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTMuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpbyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyAyPC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+Q3J1emEgZWwgYnJhem8gZGVyZWNobyBmcmVudGUgYWwgcGVjaG88L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+RW1wdWphIGNvbiBsYSBtYW5vIGl6cXVpZXJkYSBwb3IgZW5jaW1hIGRlIGxhIGFydGljdWxhY2nDs24gZGVsIGNvZG8gcXVlIGVzdGFzIGNydXphbmRvPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPk1hbnTDqW4gZWwgZXN0aXJhbWllbnRvPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGUzXCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNC5zdmdcIiAvPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLWF1ZGlvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDM8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5QdWVkZXMgY29tYmluYXIgZWwgYW50ZXJpb3IgZWplcmNpY2lvIGxsZXZhbmRvIGxhIG1hbm8gaGFjaWEgbGEgZXNwYWxkYTwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2Vfc3F1YXJlIHJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2Vfc3F1YXJlLS1iZ0FsbCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJbiBhbmltYXRlX19kZWxheS01c1wiPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2Vfc3F1YXJlLXRleHQtLWJnQWxsXCI+RXMgaW1wb3J0YW50ZSBxdWUgYWwgcmVhbGl6YXIgZXN0b3MgZWplcmNpY2lvcyBubyBwcmVzaW9uZXMgZGlyZWN0YW1lbnRlIGxhIGFydGljdWxhY2nDs24gZGVsIGNvZG8sIGVzdGlyYSBkZSB1bmEgem9uYSBhZHlhY2VudGUgYSBsYSBhcnRpY3VsYWNpw7NuIHkgbm8gZGlyZWN0YW1lbnRlIGVuIGVsbGEuPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGU0XCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNS5zdmdcIiAvPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLWF1ZGlvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDQ8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5FbnRyZWxhemEgbGFzIG1hbm9zIGFsIGZyZW50ZS48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+RXN0aXJhIGxvcyBjb2RvcyB5IGxsZXZhIGxvcyBob21icm9zIGhhY2lhIGRlbGFudGUgYXJxdWVhbmRvIGxhIGVzcGFsZGEgeSBiYWphbmRvIGxhIGNhYmV6YTwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtLWNoYW5nZVN0eWxlNVwiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTYuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpbyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyA1PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5JbnRlbnRhIHRvbWFydGUgZGUgbGFzIG1hbm9zIHBvciBkZXRyw6FzIGRlIHR1IGVzcGFsZGEuPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtLWNoYW5nZVN0eWxlNlwiPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCIgc3JjPVwiaW1nL3N2Zy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpbyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZGVsYXktMXNcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93biBhbmltYXRlX19kZWxheS0zc1wiPkVqZXJjaWNpbyA2PC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+TGxldmEgZWwgYnJhem8gaGFjaWEgZWwgZnJlbnRlIGNvbiBsYSBwYWxtYSBkZSBsYSBtYW5vIGhhY2lhIGFycmliYTwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Db24gbGEgbWFubyBjb250cmFyaWEgZWplcmNlIHVuIHBvY28gZGUgcHJlc2nDs24gc29icmUgdG9kb3MgbG9zIGRlZG9zLCBoYXN0YSBxdWUgc2llbnRhcyBhbGdvIGRlIHRlbnNpw7NuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPk1hbnTDqW4gbGEgcG9zaWNpw7NuIHkgbHVlZ28gcmVhbGl6YSBlbCBlamVyY2ljaW8gY29uIGxhIG90cmEgbWFubzwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX21lc3NhZ2UgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNXNcIj48Yj5SZWN1ZXJkYTwvYj4gdGFtYmnDqW4gaW52b2x1Y3JhciBlbCBkZWRvIHB1bGdhcjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljIHJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLS1jaGFuZ2VTdHlsZTdcIj5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb24gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCBhbmltYXRlX19kZWxheS0xc1wiIHNyYz1cImltZy9zdmcvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4LnN2Z1wiIC8+XHJcblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtYXVkaW8gYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTJzXCI+UkVMQUpBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24gYW5pbWF0ZV9fZGVsYXktM3NcIj5FamVyY2ljaW8gNzwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPkxsZXZhIHR1IGJyYXpvIGFsIGZyZW50ZTwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5FbXB1w7FhIHkgYmFqYSB0dSBtYW5vIGhhc3RhIHF1ZSBzaWVudGFzIHVuIHBvY28gZGUgdGVuc2nDs248L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+U29zdMOpbiBlbCBlc3RpcmFtaWVudG8geSBsdWVnbyByZWFsaXphIGVsIG1pc21vIGVqZXJjaWNpbyBjb24gbGEgb3RyYSBtYW5vPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGU4XCI+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQgYW5pbWF0ZV9fZGVsYXktMXNcIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOS5zdmdcIiAvPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLWF1ZGlvIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlX19kZWxheS0xc1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS0yc1wiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDg8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIlwiPkVtcHXDsWEgdHVzIG1hbm9zPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiXCI+QWJyZSB5IHNlcGFyYSBsb3MgZGVkb3Mgc29zdGVuaWVuZG8gZWwgZXN0aXJhbWllbnRvPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMS5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5BTCBIQUNFUiBVU08gREVMIENFTFVMQVI8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktM3NcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0XCI+TG9zIHNpZ3VpZW50ZXMgZWplcmNpY2lvcyB0ZSBheXVkYXLDoW4gYTxici8+ZGlzbWludWlyIGxhIGZhdGlnYSBtdXNjdWxhciBwb3IgZWwgdXNvPGJyLz5kZWwgY2VsdWxhcjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cInVzb0NlbHVsYXJQYWdlMlwiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMgdXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWNQYWdlMiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMi0xLnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1BhZ2UyIHVjcFwiIC8+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMi0yLnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1BhZ2UyIHVjcFwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5BTCBIQUNFUiBVU08gREVMIENFTFVMQVI8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDE8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5Db24gbG9zIGJyYXpvcyBhbCBmcmVudGU8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0IGFuaW1hdGVfX2RlbGF5LTRzXCI+QWJyYWNlIGVsIHB1bGdhciBjb24gbG9zIGRlZG9zPC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCBhbmltYXRlX19kZWxheS00c1wiPlN1YXZlbWVudGUgbGxldmUgbGEgbXXDsWVjYSBoYWNpYSBhYmFqbywgc29zdMOpbiBkdXJhbnRlIDEwIOKAkyAxNSBzZWd1bmRvczwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cclxuXHRcdFx0PGRpdiBpZD1cInVzb0NlbHVsYXJQYWdlM1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMgdXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWNQYWdlMiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0IGFuaW1hdGVfX2RlbGF5LTFzXCI+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMy0xLnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1BhZ2UzIHVjcDNcIiAvPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy91c29DZWx1bGFyUGFnZTMtMi5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZyB1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYy1pbWdQYWdlMyB1Y3AzXCIgLz5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvdXNvQ2VsdWxhclBhZ2U0LnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZzIyIHVjcDNcIiAvPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy91c29DZWx1bGFyUGFnZTUtMS5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZyB1Y3AzXCIgLz5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvdXNvQ2VsdWxhclBhZ2U1LTIuc3ZnXCIgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYy1pbWcgdXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nMjggdWNwM1wiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj5BTCBIQUNFUiBVU08gREVMIENFTFVMQVI8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZSBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duIGFuaW1hdGVfX2RlbGF5LTNzXCI+RWplcmNpY2lvIDI8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQgYW5pbWF0ZV9fZGVsYXktNHNcIj5NYW50w6luIGxhcyBzaWd1aWVudGVzIHBvc2ljaW9uZXMgZGUgdHVzIG1hbm9zIGR1cmFudGUgNSBzZWd1bmRvcywgcmVwaXRlIGRlIDUg4oCTIDEwIHZlY2VzIGRlIGZvcm1hIGdyYWR1YWRhIHkgZGVzY2Fuc2EuPC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2UgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW4gYW5pbWF0ZV9fZGVsYXktNXNcIj5SRVBFVElDScOTTiAxPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYGBcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gYGBcclxufSJdfQ==

