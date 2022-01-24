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
		antesDePracticar.style.width = "";
		antesDePracticar.src = "./img/svg/menAntesDePracticar.svg";
	}, false);
	divElement.querySelector("#antesDePracticar").addEventListener("mouseover", function (e) {
		antesDePracticar.style.width = "32.05%";
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
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"womenExtremidades\" src=\"img/svg/womenExtremidadesSuperiores.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title\">ACTIVA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle\">Te presentamos una serie de ejercicios que te ayudaran a:</p>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Relajar tus brazos</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Disminuir la tensi\xF3n muscular</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Reducir el riesgo de padecer lesiones</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

//class="activaExtremidadS-content_description-ul_li activaExtremidadS-content_description-ul_li--text"
exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenBrazoExtendidoDerecho.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-ul_li activaExtremidadS-content_description-ul_li--text\">Lleva tus brazos al frente, abre y cierra tus manos.</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div id=\"antesDePracticar\" class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"antesDePracticar-img\" src=\"img/svg/menAntesDePracticar.svg\"/>\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title\">ANTES DE PRACTICARLOS</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle\">Debes tener en cuentalo siguiente:</p>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">S\xED la realizaci\xF3n de un ejercicio provoca dolor, debes interrumpirlo y sustituirlo por otro.</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Si cuentas con restricciones o recomendaciones m\xE9dicas, consulta con tu m\xE9dico previamente.</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">La ejecuci\xF3n de los ejercicios se llevar\xE1 a cabo de forma suave, progresiva y controlada.</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Lleva un orden en la ejecuci\xF3n de los ejercicios realizando estos de forma consciente y controlada intentando respirar regularmente. </li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-square\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-square_text\">Si presentas dolor s\xFAbito e intenso, consulta a tu m\xE9dico antes de realizar estos ejercicios.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenMueveExtremidades.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-ul_li activaExtremidadS-content_description-ul_li--text\">Recuerda iniciar con ejercicios de movilidad articular</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle\">\xA1No olvides <b>controlar tu respiraci\xF3n!</b></p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-square activaExtremidadS-content_description-square--bgAll\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-square_text activaExtremidadS-content_description-square_text--bgAll\">Realiza de <b>5 a 10 repeticiones</b><br/> de cada uno.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"mueve-extremidades\" src=\"img/svg/menMueveExtremidades.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"activaExtremidadS-content_description-subTitle activaExtremidadS-content_description-subTitle--medium\">Contin\xFAa la sesi\xF3n con ejercicios de estiramiento muscular</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 1</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text\">Con espalda y cabeza rectas, entrelaza las manos y lleva los brazos por encima de la cabeza </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"mueve-extremidades-codo\" src=\"img/svg/menMueveExtremidadesCodo.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 2</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text\">Con los codos rectos, lleva los brazos hacia fuera y arriba. Vuelva a la posici\xF3n de partida</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"brazos-atras\" src=\"img/svg/womenBrazosAtras.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 3</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text\">Igualmente, con los codos rectos, lleva los brazos hacia atr\xE1s. Vuelve a la posici\xF3n de partida</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic activaExtremidadS-content_graphic--page2\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"codos-arriba\" src=\"img/svg/menCodosArriba.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 4</p>\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_text\">Lleva las manos a los hombros, gire los hombros hacia adelante y luego hacia atr\xE1s</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/menBrazoEspalda.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 5</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Ubica el brazo derecho al lado y dobla el codo</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Lleva la mano del mismo lado hacia arriba y luego hacia abajo</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Repite el movimiento con el otro brazo</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"activaExtremidadS-content container-content_slide\">\n\t\t\t<div class=\"activaExtremidadS-content_graphic\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"activaExtremidadS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img src=\"img/svg/womenBrazoExtendido.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"activaExtremidadS-content_description\">\n\t\t\t\t<p class=\"activaExtremidadS-content_description-title activaExtremidadS-content_description-title--bottomP5\">MUEVE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"activaExtremidadS-content_description-excersice\">\n\t\t\t\t\t<p class=\"activaExtremidadS-content_description-excersice_title\">Ejercicio 6</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Ubica el brazo al frente con la palma de la mano hacia arriba</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Lleva la mano hacia el hombro del mismo lado doblando solo el codo</li>\n\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Regresa a la posici\xF3n inicial y repite el movi-miento con el otro brazo</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"antebrazoExtremidadSuperior-content container-content_slide\">\n\t\t\t<div class=\"antebrazoExtremidadSuperior-content_graphic antebrazoExtremidadSuperior-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHuman-antebrazo.png\" class=\"extremidadSuperior-content_graphic-antebrazo\" />\n\t\t\t</div>\n\t\t\t<div class=\"antebrazoExtremidadSuperior-content_description\">\n\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-title\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-subTitle\">Antebrazo</p>\n\t\t\t\t<ul class=\"antebrazoExtremidadSuperior-content_description-list\">\n\t\t\t\t\t<li class=\"antebrazoExtremidadSuperior-content_description-list_item\">Sirve de nexo entre el brazo y el cuerpo.</li>\n\t\t\t\t\t<li class=\"antebrazoExtremidadSuperior-content_description-list_item\">Est\xE1 formado por la uni\xF3n de los extremos de tres</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-text\">huesos: la clav\xEDcula, la esc\xE1pula (om\xF3plato) y el h\xFAmero, adem\xE1s de m\xFAsculos, ligamentos y tendones.</p>\n\t\t\t\t<div class=\"antebrazoExtremidadSuperior-content_description-square\">\n\t\t\t\t\t<p class=\"antebrazoExtremidadSuperior-content_description-square_text\">Podemos realizar movimientos girando la palma de la mano hacia arriba (supinaci\xF3n) y girando la palma de la mano hacia abajo (pronaci\xF3n).</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElastica\" class=\"bandaElastica-content_graphic\">\n\t\t\t\t<img id=\"graphicBandaElastica2\" class=\"graphic-presentation\" src=\"img/svg/bandaElastica2.svg\" />\n\t\t\t\t<img id=\"graphicBandaElastica1\" class=\"graphic-presentation-2\" src=\"img/svg/bandaElastica1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 1</p>\n\t\t\t\t\t<ul class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Lleva el brazo por atr\xE1s de la espalda a la altura de la cintura</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Con la mano contraria toma el extremo de la banda el\xE1stica por detr\xE1s de la cabeza y extiende el brazo hacia arriba sosteniendo durante 3 segundos.</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Cambia la posici\xF3n de tus brazos y realiza el ejercicio con la otra extremidad</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage2\" class=\"bandaElastica-content_graphic\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-1\" class=\"graphic-presentationBanda1 gpb\" src=\"img/svg/bandaElasticaPage2-1.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-2\" class=\"graphic-presentationBanda2 gpb\" src=\"img/svg/bandaElasticaPage2-2.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-3\" class=\"graphic-presentationBanda3 gpb\" src=\"img/svg/bandaElasticaPage2-3.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage2-4\" class=\"graphic-presentationBanda4 gpb\" src=\"img/svg/bandaElasticaPage2-4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 2</p>\n\t\t\t\t\t<ul class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">De pie, con los pies separados al ancho de los hombros</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Los pies pisando la mitad del theraband y las manos tomando los extremos de la banda el\xE1stica</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Lleva los brazos hacia arriba y a los lados hasta la altura de los hombros, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Puedes alternar el derecho e izquierdo o realizar el movimiento al tiempo con ambos brazos.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage3\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage3-1\" class=\"graphic-presentationBandaPage3-1 gpb\" src=\"img/svg/bandaElasticaPage3-2.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage3-2\" class=\"graphic-presentationBandaPage3-2 gpb\" src=\"img/svg/bandaElasticaPage3-1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 3</p>\n\t\t\t\t\t<ul class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Con los brazos extendidos hacia el frente agarra los extremos de la banda el\xE1stica</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Abre los brazos y sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage4\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-1\" class=\"graphic-presentationBandaPage4-1 gpb\" src=\"img/svg/bandaElasticaPage4-1.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-2\" class=\"graphic-presentationBandaPage4-2 gpb\" src=\"img/svg/bandaElasticaPage4-2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 4</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Puedes combinar el anterior ejercicio, con los codos flexionados a la altura del pecho sosteniendo fuertemente la banda el\xE1stica.</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Abre el brazo derecho mientras el izquierdo hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Vuelve a la posici\xF3n inicial y repite el ejercicio con el brazo contrario</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage4\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-3\" class=\"graphic-presentationBandaPage4-3 gpb\" src=\"img/svg/bandaElasticaPage4-3.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage4-4\" class=\"graphic-presentationBandaPage4-4 gpb\" src=\"img/svg/bandaElasticaPage4-4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 4</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Puedes combinar el anterior ejercicio, con los codos flexionados a la altura del pecho sosteniendo fuertemente la banda el\xE1stica. </li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Abre el brazo izquierdo mientras el derecho hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage5\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-1\" class=\"graphic-presentationBandaPage5-1 gpb\" src=\"img/svg/bandaElasticaPage5-1.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-2\" class=\"graphic-presentationBandaPage5-2 gpb\" src=\"img/svg/bandaElasticaPage5-2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 5</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Apoya el codo y antebrazo sobre una superficie suave, dejando la mu\xF1eca libre</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Con la palma de la mano hacia abajo toma la mitad de la banda fuertemente</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Lleva la mano hacia arriba (sin despegar el ante-brazo) mientras la mano contraria hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Cambia la posici\xF3n de tus brazos y realiza el ejercicio con la otra mano</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage5\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-3\" class=\"graphic-presentationBandaPage5-3 gpb\" src=\"img/svg/bandaElasticaPage5-3.svg\" />\n\t\t\t\t<img id=\"graphicBandaElasticaPage5-4\" class=\"graphic-presentationBandaPage5-4 gpb\" src=\"img/svg/bandaElasticaPage5-4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 5</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Apoya el codo y antebrazo sobre una superficie suave, dejando la mu\xF1eca libre</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Con la palma de la mano hacia abajo toma la mitad de la banda fuertemente </li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Lleva la mano hacia arriba (sin despegar el ante-brazo) mientras la mano contraria hace resistencia, sost\xE9n durante 3 segundos</li>\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Vuelve a la posici\xF3n inicial y repite el ejercicio</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"bandaElastica-content container-content_slide\">\n\t\t\t<div id=\"bandaElasticaPage5\" class=\"bandaElastica-content_graphic bandaElastica-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicBandaElasticaPage6\" class=\"graphic-presentationBandaPage6 gpb\" src=\"img/svg/bandaElasticaPage6.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"bandaElastica-content_description\">\n\t\t\t\t<p class=\"bandaElastica-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<div class=\"bandaElastica-content_description-excersice\">\n\t\t\t\t\t<p class=\"bandaElastica-content_description-excersice_title\">Ejercicio 6</p>\n\t\t\t\t\t<ul id=\"bandasElasticasLists\" class=\"bandaElastica-content_description-ul\">\n\t\t\t\t\t\t<li class=\"bandaElastica-content_description-ul_li\">Combina el ejercicio haciendo agarre de la banda con la palma de la mano hacia arriba</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"bandaElastica-content_description-message\">\xA1Suma minutos a tu bienestar!</p>\n\t\t\t</div>\n\t\t</div>\n\t";
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
	return "\n\t\t<div class=\"codExtremidadSuperior-content container-content_slide\">\n\t\t\t<div class=\"codExtremidadSuperior-content_graphic codExtremidadSuperior-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHumans-bones.png\" class=\"extremidadSuperior-content_graphic-codo\" />\n\t\t\t</div>\n\t\t\t<div class=\"codExtremidadSuperior-content_description\">\n\t\t\t\t<p class=\"codExtremidadSuperior-content_description-title\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"codExtremidadSuperior-content_description-subTitle\">Codo</p>\n\t\t\t\t<ul class=\"codExtremidadSuperior-content_description-list\">\n\t\t\t\t\t<li class=\"codExtremidadSuperior-content_description-list_item\">Une el brazo con el antebrazo</li>\n\t\t\t\t\t<li class=\"codExtremidadSuperior-content_description-list_item\">Su funci\xF3n es acercar y alejar la mano del tronco y por eso es imprescindible en muchas tareas importantes de las actividades diarias.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"codExtremidadSuperior-content_description-text\">huesos: la clav\xEDcula, la esc\xE1pula (om\xF3plato) y el h\xFAmero, adem\xE1s de m\xFAsculos, ligamentos y tendones.</p>\n\t\t\t\t<div class=\"codExtremidadSuperior-content_description-square\">\n\t\t\t\t\t<p class=\"codExtremidadSuperior-content_description-square_text\">Podemos realizar movimientos entre doblar (flexi\xF3n) y estirar (extensi\xF3n)</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"conoceExtremidades-content container-content_slide\">\n\t\t\t<div class=\"conoceExtremidades-content_graphic\">\n\t\t\t\t<img src=\"img/svg/bodyHuman.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"conoceExtremidades-content_description\">\n\t\t\t\t<p class=\"conoceExtremidades-content_description-title\">CONOCE TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"conoceExtremidades-content_description-text\">La extremidad superior o miembro superior, son cada una de las extremidades que se unen a la parte superior del tronco, mediante los m\xFAsculos, tendones, nervios y articulaciones.</p>\n\t\t\t\t<p class=\"conoceExtremidades-content_description-text\">En cada extremidad, encontramos 32 huesos y 45 m\xFAsculos que se unen entre s\xED para ayudar a su movilidad. Est\xE1 compuesta por 4 segmentos de forma general.</p>\n\t\t\t</div>\n\t\t\t<!--<img src=\"img/svg/bodyHumanCircle.svg\" class=\"conoceExtremidades-content_bodyHumanCircle\" />-->\n\t\t</div>\n\t";
};

},{}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"cuidaBrazos-content container-content_slide\">\n\t\t\t<div id=\"cuidaBrazosPage5\" class=\"cuidaBrazos-content_graphic cuidaBrazos-content_graphicPage3\">\n\t\t\t\t<img id=\"graphiccuidaBrazosPage6\" class=\"graphic-cuidaBrazos\" src=\"img/svg/cuidaBrazos.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"cuidaBrazos-content_description\">\n\t\t\t\t<p class=\"cuidaBrazos-content_description-title\">CUIDA TUS BRAZOS</p>\n\t\t\t\t<p class=\"cuidaBrazos-content_description-text\">Ten en cuenta los siguientes consejos para mantener la salud en tus extremidades superiores</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"cuidarExtremidades-content container-content_slide\">\n\t\t\t<div class=\"cuidarExtremidades-content_description cuidarExtremidades-content_description--width\">\n\t\t\t\t<p class=\"cuidarExtremidades-content_description-title cuidarExtremidades-content_description-title--blue\">\xBFY POR QU\xC9 ES TAN IMPORTANTE CUIDAR TUS EXTREMIDADES SUPERIORES?</p>\n\t\t\t\t<p class=\"cuidarExtremidades-content_description-text cuidarExtremidades-content_description-text--align\">Las extremidades superiores son segmentos corporales importantes en nuestro cuerpo, constantemente requerimos de ellas para todas nuestras actividades de la vida diaria, siendo necesario su cuidado al desarrollar cualquier tarea u oficio. Los principales factores que inciden en la aparici\xF3n de posibles molestias, pueden ser:</p>\n\t\t\t\t<ul class=\"cuidarExtremidades-content_description-list\">\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item\">Uso de fuerza.</li>\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item\">Posturas forzadas y movimientos repetitivos por tiempos prolongados y sin pausas</li>\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item\">Factores individuales (edad, estilos de vida, g\xE9nero, condiciones hereditarias, entre otras).</li>\n\t\t\t\t\t<li class=\"cuidarExtremidades-content_description-list_item\">Actividades extra laborales (pasatiempos como videojuegos, actividades manuales como pintar, tejer, bordar y algunos deportes).</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"cuidarExtremidades-content_graphic cuidarExtremidades-content_graphic--width\">\n\t\t\t\t<img src=\"img/svg/cuidar-extremidades.svg\" />\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"ejercitaExtremidades-content container-content_slide\">\n\t\t\t<div class=\"ejercitaExtremidades-content_description\">\n\t\t\t\t<p class=\"ejercitaExtremidades-content_description-title\">EJERCITA TUS EXTREMIDADES SUPERIORES CON BANDA EL\xC1STICAS</p>\n\t\t\t\t<p class=\"ejercitaExtremidades-content_description-text\">Para los siguientes ejercicios podr\xE1s utilizar elementos como: bandas el\xE1sticas o theraband (bandas de tela o goma), theratubing (tubo de goma), mini bandas (bandas cerradas), bandas con asas de pl\xE1stico, entre otras; herramientas sencillas de utilizar y de bajo costo en su mayor\xEDa.</p>\n\t\t\t\t<p class=\"ejercitaExtremidades-content_description-message\">Antes de utilizar cualquiera de esos elementos,<br />ten en cuenta lo siguiente</p>\n\t\t\t</div>\n\t\t\t<div class=\"ejercitaExtremidades-content_graphic\">\n\t\t\t\t<img src=\"./img/svg/mujerBandaElastica.svg\" />\n\t\t\t</div>\n\t\t</div>";
};

},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"eligeGoma-content container-content_slide\">\n\t\t\t<div class=\"eligeGoma-content_description\">\n\t\t\t\t<p class=\"eligeGoma-content_description-title\">ELIGE CORRECTAMENTE LA DUREZA DE LA GOMA</p>\n\t\t\t\t<p class=\"eligeGoma-content_description-text\">Te recomendamos elegir el color de la banda de acuerdo a tu habilidad y tono muscular, buscando siempre un punto medio entre r\xEDgida y blanda, por ejemplo: amarilla, verde, roja o azul.</p>\n\t\t\t\t<p class=\"eligeGoma-content_description-text\">Una banda demasiado r\xEDgida ofrecer\xE1 mucha resistencia y forzar\xE1s los m\xFAsculos, por el contrario, una banda muy blanda puede ofrecer un trabajo insignificante.</p>\n\t\t\t\t<p class=\"eligeGoma-content_description-text\">Aqu\xED te dejamos una gu\xEDa de resistencia por colores para tener en cuenta a la hora de elegir tu banda.</p>\n\n\t\t\t\t<p class=\"eligeGoma-content_description-message\">Algunos colores podr\xEDan variar de acuerdo al fabricante.</p>\n\t\t\t</div>\n\t\t\t<div class=\"eligeGoma-content_graphic\">\n\t\t\t\t<table>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>COLOR</th>\n\t\t\t\t\t\t\t<th>RESISTENCIA</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Marfil</td>\n\t\t\t\t\t\t\t<td>Extra suave</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Amarillo</td>\n\t\t\t\t\t\t\t<td>Suave</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Rojo</td>\n\t\t\t\t\t\t\t<td>Medium</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Verde</td>\n\t\t\t\t\t\t\t<td>Fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Azul</td>\n\t\t\t\t\t\t\t<td>Extra fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Negra</td>\n\t\t\t\t\t\t\t<td>Especial fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Plata</td>\n\t\t\t\t\t\t\t<td>Super fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Oro</td>\n\t\t\t\t\t\t\t<td>Ultra fuerte</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>";
};

},{}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic\">\n\t\t\t\t<img class=\"graphic-enCasaPage1\" src=\"img/svg/enCasaPage1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Evita mantener las manos dobladas</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Si presentas molestias en una de tus extremidades supe-riores, trata de cambiar la posici\xF3n en la que duermes. Evita dormir sobre el segmento afectado</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div id=\"enCasaPage2\" class=\"enCasa-content_graphic enCasa-content_graphicPage2\">\n\t\t\t\t<img class=\"graphic-enCasaPage2 ecp\" src=\"img/svg/enCasaPage2-1.svg\" />\n\t\t\t\t<img class=\"graphic-enCasaPage2 ecp\" src=\"img/svg/enCasaPage2-2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description enCasa-content_descriptionPage2\">\n\t\t\t\t<p class=\"enCasa-content_description-title\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title\">Al practicar deporte</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Al practicar alg\xFAn deporte o realizar actividad f\xEDsica, recuerda siempre incluir ejercicios de calentamiento y estiramiento muscular, previniendo lesiones musculo esquel\xE9ticas.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Durante la pr\xE1ctica de deportes o actividades de ocio que impliquen el uso frecuente de extremidades superiores, evita realizar movimientos forzados o sobre esfuerzos que puedan generar lesiones.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div id=\"enCasaPage3\" class=\"enCasa-content_graphic enCasa-content_graphicPage3\">\n\t\t\t\t<img class=\"graphic-enCasaPage3 ecp\" src=\"img/svg/enCasaPage3.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description enCasa-content_descriptionPage2\">\n\t\t\t\t<p class=\"enCasa-content_description-title\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title\">Al limpiar</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">En lo posible para las tareas del hogar, utilice herramientas como escurridor de trapero, plancha liviana, picadora, entre otras.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Durante la limpieza de superficies evita desviar la mano de lado a lado realizando preferiblemente movimientos en bloque con tu extremidad superior. Alterna el pa\xF1o de limpieza de una mano a la otra</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic enCasa-content_graphicPage4\">\n\t\t\t\t<img class=\"graphic-enCasaPage4\" src=\"img/svg/enCasaPage4-1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title\">Al organizar la cama</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Coloca la cobija sobre la superficie</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Estira poco a poco cada una de las puntas de la cobija para tenderla</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic\">\n\t\t\t\t<img class=\"graphic-enCasaPage5\" src=\"img/svg/enCasaPage5-1.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title\">Al cargar</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Evita levantar objetos pesados.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Si debes transportar manualmente varios paquetes distrib\xFAyelos sobre tus dos manos.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enCasa-content container-content_slide\">\n\t\t\t<div class=\"enCasa-content_graphic\">\n\t\t\t\t<img class=\"graphic-enCasaPage6\" src=\"img/svg/enCasaPage6.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enCasa-content_description\">\n\t\t\t\t<p class=\"enCasa-content_description-title\">EN CASA</p>\n\t\t\t\t<div class=\"enCasa-content_description-excersice\">\n\t\t\t\t\t<p class=\"enCasa-content_description-excersice_title\">Al cargar</p>\n\t\t\t\t\t<ul class=\"enCasa-content_description-ul\">\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Evita levantar objetos pesados.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Si debes transportar manualmente varios paquetes distrib\xFAyelos sobre tus dos manos.</li>\n\t\t\t\t\t\t<li class=\"enCasa-content_description-ul_li\">Si posees bolso o malet\xEDn, debes colgarlo cruzado y/o de los dos tirantes, para distribuir el peso sobre los dos hombros.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage1\">\n\t\t\t\t<img id=\"graphicenTrabajoPage1\" class=\"graphic-enTrabajo\" src=\"img/svg/enTrabajoPage1.png\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Ubica los elementos de trabajo de mayor uso dentro de zona m\xEDnima, evitando los movimientos forzados en tronco y extremidad superior al realizar agarres</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage2\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage2\">\n\t\t\t\t<img id=\"graphicenTrabajoPage2\" class=\"graphic-enTrabajoPage2\" src=\"img/svg/enTrabajoPage2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Recuerda ajustar la altura del asiento alineando los codos con la superficie de trabajo (codos doblados en \xE1ngulo recto 90\xB0).</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage3\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage3\">\n\t\t\t\t<img id=\"graphicenTrabajoPage3\" class=\"graphic-enTrabajoPage3\" src=\"img/svg/enTrabajoPage3.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">El mouse debe estar a tu alcance sobre la misma superficie donde se encuentra ubicado el teclado. Aseg\xFArate de mantenerlos siempre juntos, logrando un apoyo medio de antebrazo \u2013 mu\xF1eca durante su utilizaci\xF3n.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage4\" class=\"enTrabajo-content_graphic enTrabajo-content_graphicPage4\">\n\t\t\t\t<img id=\"graphicenTrabajoPage4\" class=\"graphic-enTrabajoPage4\" src=\"img/svg/enTrabajoPage4.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">El mouse debe estar a tu alcance sobre la misma superficie donde se encuentra ubicado el teclado. Aseg\xFArate de mantenerlos siempre juntos, logrando un apoyo medio de antebrazo \u2013 mu\xF1eca durante su utilizaci\xF3n.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage5\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage5\" class=\"graphic-enTrabajoPage5\" src=\"img/svg/enTrabajoPage5.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Durante la digitaci\xF3n y manipulaci\xF3n del mouse, recuerde realizar movimientos en bloque.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"enTrabajo-content_description-message\">Evita las desviaciones en mu\xF1ecas</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],107:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage6\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage5\" class=\"graphic-enTrabajoPage5\" src=\"img/svg/enTrabajoPage6.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Durante la digitaci\xF3n y manipulaci\xF3n del mouse,recuerde realizar movimientos en bloque.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"enTrabajo-content_description-message\">Evita las desviaciones en mu\xF1ecas</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage7\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage5\" class=\"graphic-enTrabajoPage7\" src=\"img/svg/enTrabajoPage7.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description enTrabajoPage7\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Al hacer agarre de cajas u otros objetos, recuerda mantener la espalda recta, sujetando firmemente la carga con ambas manos.</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"enTrabajo-content_description-square\">\n\t\t\t\t\t<p class=\"enTrabajo-content_description-square_text\">Utiliza idealmente casa con asas<br />o agarraderas</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],109:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"enTrabajo-content enTrabajoPage5-content container-content_slide\">\n\t\t\t<div id=\"enTrabajoPage8\" class=\"enTrabajo-content_graphic enTrabajoPage5-content_graphic\">\n\t\t\t\t<img id=\"graphicenTrabajoPage8\" class=\"graphic-enTrabajoPage8\" src=\"img/svg/enTrabajoPage8.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"enTrabajo-content_description enTrabajoPage5-content_description\">\n\t\t\t\t<p class=\"enTrabajo-content_description-title\">EN EL TRABAJO</p>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Al hacer agarre de cajas u otros objetos, recuerda mantener la espalda recta, sujetando firmemente la carga con ambas manos.</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"enTrabajo-content_description-square\">\n\t\t\t\t\t<p class=\"enTrabajo-content_description-square_text\">Utiliza idealmente casa con asas<br />o agarraderas</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"enTrabajo-content_description-ul\">\n\t\t\t\t\t<li class=\"enTrabajo-content_description-ul_li\">Al transportar manualmente cajas u otros elementos, mantenlos siempre al cuerpo.</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
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
	return "\n\t\t<div class=\"extremidadSuperior-content container-content_slide\">\n\t\t\t<div class=\"extremidadSuperior-content_graphic extremidadSuperior-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHuman-extremidades.png\" class=\"extremidadSuperior-content_graphic-hombro\" />\n\t\t\t</div>\n\t\t\t<div class=\"extremidadSuperior-content_description\">\n\t\t\t\t<p class=\"extremidadSuperior-content_description-title\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"extremidadSuperior-content_description-subTitle\">Hombro</p>\n\t\t\t\t<ul class=\"extremidadSuperior-content_description-list\">\n\t\t\t\t\t<li class=\"extremidadSuperior-content_description-list_item\">Sirve de nexo entre el brazo y el cuerpo.</li>\n\t\t\t\t\t<li class=\"extremidadSuperior-content_description-list_item\">Est\xE1 formado por la uni\xF3n de los extremos de tres</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"extremidadSuperior-content_description-text\">huesos: la clav\xEDcula, la esc\xE1pula (om\xF3plato) y el h\xFAmero, adem\xE1s de m\xFAsculos, ligamentos y tendones.</p>\n\t\t\t\t<div class=\"extremidadSuperior-content_description-square\">\n\t\t\t\t\t<p class=\"extremidadSuperior-content_description-square_text\">Es el hombro la articulaci\xF3n con mayor amplitud de movimientos de todo el cuerpo, podemos realizar movimientos en todas las direcciones inclusive rotaci\xF3n</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return "\n\t\t<div class=\"contenedor\">\n    <div class=\"principal__grid\">\n        <div class=\"principal__grid__child\">\n            <!--<a class=\"opcion__menu\" href=\"#/cuidar-extremidades\">\n                <p class=\"opcion__menu__text\">Enlace a trabajar</p>\n            </a>-->\n            <a class=\"opcion__menu\" href=\"#/que-activate\">\n                <span class=\"opcion__menu__imagen-contenedor\">\n                    <img class=\"opcion__menu__imagen\" src=\"img/culturismo.png\" alt=\"\" />\n                </span>\n                <p class=\"opcion__menu__text\">&iquest;Que es act&iacute;vate?</p>\n            </a><a class=\"opcion__menu\" href=\"#/conoce-extremidades\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/cerebro.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Conoce tus extremidades superiores</p>\n            </a><a class=\"opcion__menu\" href=\"#/activa-extremidad\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/bandas.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Activa tus extremidades superiores</p>\n            </a><a class=\"opcion__menu\" href=\"#/relaja-extremidades\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/musculo.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Cuida tus extremidades superiores</p>\n            </a><a class=\"opcion__menu\" href=\"#/claro-tips-page1\"><span class=\"opcion__menu__imagen-contenedor\"><img class=\"opcion__menu__imagen\" src=\"img/bombilla.png\" alt=\"\" /></span>\n                <p class=\"opcion__menu__text\">Claro tips</p>\n            </a></div>\n        <div class=\"principal__grid__child\"><svg class=\"principal__figura\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 751.56 773.4\">\n                <defs>\n                    <style>\n                        .cls-1 {\n                            fill: #cddefc;\n                        }\n\n                        .cls-1,\n                        .cls-3 {\n                            opacity: 0.4;\n                        }\n\n                        .cls-2 {\n                            fill: #e6954e;\n                        }\n\n                        .cls-3 {\n                            fill: none;\n                            stroke: #cddefc;\n                            stroke-miterlimit: 10;\n                            stroke-width: 7px;\n                        }\n\n                        .cls-4 {\n                            fill: #263238;\n                        }\n\n                        .cls-5 {\n                            fill: #455a64;\n                        }\n\n                        .cls-6 {\n                            fill: #ff725e;\n                        }\n\n                        .cls-7 {\n                            opacity: 0.2;\n                        }\n\n                        .cls-8 {\n                            fill: #fbc0a4;\n                        }\n\n                        .cls-9 {\n                            fill: #d94528;\n                        }\n\n                        .cls-10 {\n                            fill: #f8e8d8;\n                        }\n\n                        .cls-11 {\n                            fill: #403433;\n                        }\n\n                        .cls-12 {\n                            fill: #f9b092;\n                        }\n\n                        .cls-13 {\n                            fill: #fff;\n                        }\n\n                        .cls-14 {\n                            fill: #f69d7d;\n                        }\n\n                        .cls-15 {\n                            fill: #f97a53;\n                        }\n\n                        .cls-16 {\n                            fill: #e0e0e0;\n                        }\n\n                        .cls-17 {\n                            fill: #f5f5f5;\n                        }\n\n                        .cls-18 {\n                            fill: #ebebeb;\n                        }\n                    </style>\n                </defs>\n                <g id=\"Capa_2\" data-name=\"Capa 2\">\n                    <g id=\"Version_1\" data-name=\"Version 1\">\n                        <path class=\"cls-1\" d=\"M708.24,504.86C683.65,599.11,631.7,677.6,565.69,731q-6.95,5.63-14.05,10.83H176.51c-4.25-3.47-8.45-7.08-12.49-10.83C67,642.77,23.13,490.27,63.13,336.75,117.43,128.26,305.88-3.11,484,43.28S762.53,296.36,708.24,504.86Z\"></path>\n                        <path class=\"cls-2\" d=\"M405,182.39a13.21,13.21,0,1,1,13.21-13.21A13.22,13.22,0,0,1,405,182.39Zm0-24a10.8,10.8,0,1,0,10.8,10.79A10.8,10.8,0,0,0,405,158.39Z\"></path>\n                        <path class=\"cls-2\" d=\"M373.9,182.39a13.21,13.21,0,1,1,13.21-13.21A13.22,13.22,0,0,1,373.9,182.39Zm0-24a10.8,10.8,0,1,0,10.79,10.79A10.8,10.8,0,0,0,373.9,158.39Z\"></path>\n                        <path class=\"cls-2\" d=\"M386.17,168.39l-1.79-1.63c1.66-1.82,3.45-2.7,5.31-2.59a6.92,6.92,0,0,1,4.75,2.69l-1.94,1.43,1-.71-1,.72a3.72,3.72,0,0,0-6.33.09Z\"></path>\n                        <path class=\"cls-3\" d=\"M731.87,494.66c-27,98.31-84,180.17-156.51,235.89q-7.64,5.88-15.42,11.3H148c-4.66-3.62-9.26-7.38-13.71-11.3-106.54-92-154.69-251.1-110.77-411.23C83.17,101.85,290.08-35.17,485.7,13.22S791.49,277.19,731.87,494.66Z\"></path>\n                        <path class=\"cls-4\" d=\"M58.61,522.24a3.46,3.46,0,0,1,.2.46c.13.35.31.8.53,1.38l2,5.29C63,534,65.51,540.6,68.8,548.72c6.62,16.22,16.28,38.49,29.9,61.53a137.3,137.3,0,0,1,8.53,17.61,79.07,79.07,0,0,1,4.54,17.66,124,124,0,0,1-.09,30.8c-1,8.72-2.35,15.7-3.24,20.52q-.7,3.55-1.1,5.54c-.13.6-.23,1.07-.3,1.44a2,2,0,0,1-.14.48,3.14,3.14,0,0,1,.06-.5c.06-.37.13-.84.23-1.45.23-1.32.55-3.18,1-5.56.8-4.84,2-11.83,3-20.53a125.39,125.39,0,0,0-.07-30.64,79.21,79.21,0,0,0-4.54-17.49A138.5,138.5,0,0,0,98,610.62C84.4,587.56,74.79,565.2,68.3,548.92c-3.23-8.15-5.66-14.82-7.28-19.45-.82-2.31-1.42-4.12-1.83-5.34l-.45-1.4A2.45,2.45,0,0,1,58.61,522.24Z\"></path>\n                        <path class=\"cls-4\" d=\"M71,599.3a3.9,3.9,0,0,1,.54.68L73,602l5.16,7.47c4.32,6.32,10.42,15,16.52,25,3,5,5.71,9.92,8,14.47s4,8.78,5.38,12.37,2.35,6.54,2.92,8.6l.68,2.38a3.89,3.89,0,0,1,.19.84,3.53,3.53,0,0,1-.34-.8l-.81-2.33c-.66-2-1.74-4.94-3.14-8.49s-3.24-7.73-5.52-12.25-4.95-9.39-8-14.39c-6.08-10-12.11-18.68-16.32-25.08-2.12-3.2-3.82-5.79-5-7.61l-1.3-2.1A3.53,3.53,0,0,1,71,599.3Z\"></path>\n                        <path class=\"cls-5\" d=\"M45.72,618.33c4.63-10,16.55-16.46,27.5-15.57-2.44,1-3.94,3.51-4.55,6.07s-.5,5.22-.71,7.84c-1,12.57-9.07,23.3-16.84,33.23-5.46,7-10.95,14-17.48,20C34.42,652,35.55,633.06,45.72,618.33Z\"></path>\n                        <path class=\"cls-5\" d=\"M73.22,602.9c-7-5.35-15.92-7.57-24.69-7.66s-17.44,1.8-25.94,4c-5.11,1.29-10.29,2.73-14.66,5.67s-7.84,7.7-7.93,13c7.21-7.93,18.83-9.46,29.12-12.44,7-2,13.7-4.93,20.81-6.41s17,.28,23.29,3.91\"></path>\n                        <path class=\"cls-5\" d=\"M72,601.48c3-3.19,1.36-10.67-1.29-14.2s-6.87-5.51-11-7a77.16,77.16,0,0,0-17-3.94,17.22,17.22,0,0,0,5.36,9.42A51.25,51.25,0,0,0,57,592.21l15,9.27\"></path>\n                        <path class=\"cls-5\" d=\"M100.61,597.19c8.71,3.81,15.45,10.94,22,17.88a97,97,0,0,1-27.38-11.34c-3.37-2.05-6.72-4.35-10.57-5.21s-8.18.86-11.39,3.52C78.67,594,91.91,593.38,100.61,597.19Z\"></path>\n                        <path class=\"cls-5\" d=\"M219.67,593.57c10.83,13.78,14.43,32.17,13.22,49.65a119,119,0,0,0-38.41-59.63c-7-5.87-16.08-10.51-24.82-10.51C187.65,571.47,208.51,579.36,219.67,593.57Z\"></path>\n                        <path class=\"cls-5\" d=\"M194.54,565.91c6,.44,11.56,3.5,16.55,6.92,7.64,5.25,14.8,11.86,18.14,20.51a63.54,63.54,0,0,0-55.69-22C180.12,568.09,187.22,565.37,194.54,565.91Z\"></path>\n                        <path class=\"cls-5\" d=\"M177.63,545.22c3.49,2.43,6.17,6.41,6,10.66a13.15,13.15,0,0,1-3.47,7.86,52.6,52.6,0,0,1-7.32,7c-2.21-9.82-4.88-20.08-7.09-29.9C169.91,541.68,174.13,542.79,177.63,545.22Z\"></path>\n                        <path class=\"cls-5\" d=\"M157.18,544.28c4.73,3,8.94,7.09,11.24,12.21s3.25,11.58.35,16.38A420,420,0,0,0,142,537.09C147.21,539.16,152.46,541.25,157.18,544.28Z\"></path>\n                        <path class=\"cls-5\" d=\"M139.84,561.14A33.66,33.66,0,0,1,168.5,573.7a28,28,0,0,0-15.39-2.91,368.6,368.6,0,0,0-39.56,7.34A33.65,33.65,0,0,1,139.84,561.14Z\"></path>\n                        <path class=\"cls-5\" d=\"M58.74,522.24c-.32-3.14,3.07-6.26,6-7.36s6.25-.74,9.33-.06c17.86,4,32.62,19.37,35.81,37.39A230.48,230.48,0,0,0,84.5,541.47l1.47.41a29.66,29.66,0,0,1-20-14.63,15.58,15.58,0,0,0-2.68-4.11c-1.2-1.13-3.09-1.73-4.51-.9\"></path>\n                        <path class=\"cls-5\" d=\"M58.72,522.21A38.5,38.5,0,0,0,30.6,515.9,33.64,33.64,0,0,0,7.23,532.37a29.87,29.87,0,0,0-.15,28.32c4.55-9.45,9.42-19.28,17.88-25.47,2-1.45,4.23-2.77,5.34-5,1.3-2.53.77-5.67,1.87-8.29,1.37-3.23,5.12-4.17,8.63-4.35s13.65,3,17.92,4.59\"></path>\n                        <path class=\"cls-5\" d=\"M58.94,522.06C50.53,519.56,41,523.68,35.3,530s-8.63,14.76-9.62,23.21-.19,17,.66,25.47a105.77,105.77,0,0,0,14.49-32.11c1.35-5.16,2.33-10.49,4.76-15.24s8.07-8.47,13.35-9.24\"></path>\n                        <path class=\"cls-5\" d=\"M59.22,522.24c-6.72-3.11-10.51-10.13-11.37-17.49A22.2,22.2,0,0,1,56,485.11,23.8,23.8,0,0,1,62.26,510c-1.42,4-4,8.1-3,12.27\"></path>\n                        <path class=\"cls-4\" d=\"M112.39,658.54a5.41,5.41,0,0,1,.28-1.06c.23-.68.52-1.7,1-3,.9-2.58,2.38-6.26,4.43-10.69a271.31,271.31,0,0,1,42.53-63.14,68.93,68.93,0,0,1,8.51-7.86,20.11,20.11,0,0,1,2.67-1.68,5,5,0,0,1,1-.4,6.51,6.51,0,0,1-1,.54,24.07,24.07,0,0,0-2.56,1.78,75.17,75.17,0,0,0-8.29,8,294.75,294.75,0,0,0-42.44,63c-2.11,4.39-3.65,8-4.64,10.56-.53,1.26-.86,2.27-1.13,2.93A6.7,6.7,0,0,1,112.39,658.54Z\"></path>\n                        <polygon class=\"cls-6\" points=\"88.59 740.75 134.51 740.75 141.83 682.14 80.2 682.14 88.59 740.75\"></polygon>\n                        <path class=\"cls-5\" d=\"M104.7,654.13c-4.86-11.18-2.81-24.73-9-35.24-4.73-8-13.48-12.82-22.17-16.21-2,6.06-1.06,12.82,1.5,18.67s6.61,10.91,10.9,15.64c5.92,6.55,12.33,11.09,18.76,17.14\"></path>\n                        <rect class=\"cls-6\" x=\"77.37\" y=\"682.14\" width=\"68.68\" height=\"11.96\" transform=\"translate(223.42 1376.24) rotate(180)\"></rect>\n                        <path class=\"cls-4\" d=\"M79.66,694.49c0-.22,14.86-.39,33.19-.39s33.2.17,33.2.39-14.86.38-33.2.38S79.66,694.7,79.66,694.49Z\"></path>\n                        <path class=\"cls-5\" d=\"M55.58,522.71a75.67,75.67,0,0,1,8-12,25.45,25.45,0,0,1,11.73-8.08c6.19-1.81,12.84-.37,19,1.47a151.72,151.72,0,0,1,21.12,8,41.81,41.81,0,0,1-28.07.5c-4.73-1.61-9.32-1.4-14.27-.84-6,.69-13.6,6.27-17.51,10.92\"></path>\n                        <path class=\"cls-5\" d=\"M167.25,572.87c10.2.56,19.12,8.41,22.68,18s2.34,20.43-1.51,29.89-10.14,17.71-16.81,25.44c-3.35-11.51-6.72-23.08-8.19-35S163.07,584.11,167.25,572.87Z\"></path>\n                        <g class=\"cls-7\">\n                            <path d=\"M219.67,593.57c10.83,13.78,14.43,32.17,13.22,49.65a119,119,0,0,0-38.41-59.616.08-10.51-24.82-10.51C187.65,571.47,208.51,579.36,219.67,593.57Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M194.54,565.91c6,.44,11.56,3.5,16.55,6.92,7.64,5.25,14.8,11.86,18.14,20.51a4,0,0,0-55.69-22C180.12,568.09,187.22,565.37,194.54,565.91Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M177.63,545.22c3.49,2.43,6.17,6.41,6,10.66a13.15,13.15,0,0,1-3.47,7.86,52.61-7.32,7c-2.21-9.82-4.88-20.08-7.09-29.9C169.91,541.68,174.13,542.79,177.63,545.22Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M157.18,544.28c4.73,3,8.94,7.09,11.24,12.21s3.25,11.58.35,16.38A420,420,0,0.09C147.21,539.16,152.46,541.25,157.18,544.28Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M139.84,561.14A33.66,33.66,0,0,1,168.5,573.7a28,28,0,0,0-15.39-2.91,368.6,3-39.56,7.34A33.65,33.65,0,0,1,139.84,561.14Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M167.25,572.87c10.2.56,19.12,8.41,22.68,18s2.34,20.43-1.51,29.89-10.14,17.7.44c-3.35-11.51-6.72-23.08-8.19-35S163.07,584.11,167.25,572.87Z\"></path>\n                        </g>\n                        <path class=\"cls-4\" d=\"M623.17,604.8s-.06.09-.13.28l-.33.86-1.22,3.29c-1.06,2.86-2.62,7-4.67,12a289.31,289.31,0,0,1-18.6,38.28,85.37,85.37,0,0,0-5.31,11,49.53,49.53,0,0,0-2.82,11,77.11,77.11,0,0,0,.06,19.16c.63,5.43,1.45,9.77,2,12.77l.68,3.44c.08.38.15.67.19.9a1.31,1.31,0,0,0,.09.3s0-.11,0-.31-.08-.53-.14-.9c-.14-.82-.34-2-.6-3.47-.5-3-1.27-7.35-1.86-12.77a77.74,77.74,0,0,1,0-19.06,49.1,49.1,0,0,1,2.83-10.88,84.36,84.36,0,0,1,5.29-10.89,276,276,0,0,0,18.49-38.39c2-5.08,3.53-9.23,4.53-12.11.52-1.43.89-2.56,1.14-3.32l.28-.87A2.54,2.54,0,0,0,623.17,604.8Z\"></path>\n                        <path class=\"cls-5\" d=\"M523,649.18c-6.73,8.57-9,20-8.22,30.89a74.05,74.05,0,0,1,23.9-37.1c4.39-3.66,10-6.55,15.44-6.55C542.87,635.43,529.9,640.34,523,649.18Z\"></path>\n                        <path class=\"cls-5\" d=\"M538.59,632c-3.76.28-7.19,2.18-10.3,4.31-4.75,3.27-9.21,7.38-11.28,12.76a39.51,39.51,0,0,1,34.65-13.67C547.56,633.32,543.15,631.63,538.59,632Z\"></path>\n                        <path class=\"cls-5\" d=\"M549.11,619.09a8,8,0,0,0-3.72,6.64,8.17,8.17,0,0,0,2.15,4.88A32.34,32.34,0,0,0,552.1,635c1.37-6.11,3-12.49,4.41-18.6A19.74,19.74,0,0,0,549.11,619.09Z\"></path>\n                        <path class=\"cls-5\" d=\"M561.83,618.51a18.16,18.16,0,0,0-7,7.6c-1.42,3.18-2,7.2-.22,10.19A258.4,258.4,0,0,1,571.28,614,53.72,53.72,0,0,0,561.83,618.51Z\"></path>\n                        <path class=\"cls-5\" d=\"M572.63,629a21,21,0,0,0-17.84,7.81,17.39,17.39,0,0,1,9.58-1.81A228.19,228.19,0,0,1,589,639.57,20.92,20.92,0,0,0,572.63,629Z\"></path>\n                        <path class=\"cls-5\" d=\"M623.08,604.8c.2-2-1.91-3.9-3.75-4.58a10.25,10.25,0,0,0-5.81,0,29.73,29.73,0,0,0-22.28,23.26,144.21,144.21,0,0,1,15.81-6.68l-.91.26a18.48,18.48,0,0,0,12.47-9.11,9.58,9.58,0,0,1,1.67-2.56,2.45,2.45,0,0,1,2.8-.55\"></path>\n                        <path class=\"cls-5\" d=\"M623.1,604.78a23.94,23.94,0,0,1,17.49-3.93,20.9,20.9,0,0,1,14.54,10.25,18.56,18.56,0,0,1,.09,17.62c-2.83-5.88-5.85-12-11.12-15.85-1.23-.9-2.63-1.72-3.32-3.08-.81-1.58-.48-3.53-1.17-5.16-.85-2-3.18-2.6-5.36-2.71s-8.5,1.89-11.15,2.86\"></path>\n                        <path class=\"cls-5\" d=\"M623,604.68c5.23-1.55,11.15,1,14.71,4.93s5.37,9.18,6,14.44.12,10.57-.41,15.84a65.81,65.81,0,0,1-9-20c-.84-3.22-1.46-6.53-3-9.49a11.75,11.75,0,0,0-8.3-5.75\"></path>\n                        <path class=\"cls-5\" d=\"M622.79,604.8c4.18-1.94,6.53-6.31,7.07-10.88a13.82,13.82,0,0,0-5.07-12.23,14.83,14.83,0,0,0-3.9,15.47c.89,2.52,2.5,5,1.9,7.64\"></path>\n                        <path class=\"cls-4\" d=\"M589.71,689.6a5.38,5.38,0,0,0-.18-.66c-.14-.42-.32-1.06-.62-1.86-.57-1.6-1.48-3.89-2.76-6.65a168.49,168.49,0,0,0-26.46-39.28,41.08,41.08,0,0,0-5.3-4.89,12.12,12.12,0,0,0-1.66-1,4.54,4.54,0,0,0-.63-.25,3.37,3.37,0,0,0,.59.34,14.29,14.29,0,0,1,1.59,1.11,46.08,46.08,0,0,1,5.16,5,183.46,183.46,0,0,1,26.4,39.2c1.32,2.73,2.28,5,2.89,6.57.33.78.54,1.41.71,1.82A2.93,2.93,0,0,0,589.71,689.6Z\"></path>\n                        <polygon class=\"cls-6\" points=\"604.51 740.75 575.94 740.75 571.38 704.28 609.73 704.28 604.51 740.75\"></polygon>\n                        <rect class=\"cls-6\" x=\"568.76\" y=\"704.28\" width=\"42.73\" height=\"7.44\"></rect>\n                        <path class=\"cls-4\" d=\"M610.07,712c0-.13-9.25-.23-20.66-.23s-20.65.1-20.65.23,9.24.24,20.65.24S610.07,712.1,610.07,712Z\"></path>\n                        <path class=\"cls-5\" d=\"M625.05,605.09a46.4,46.4,0,0,0-5-7.47,15.73,15.73,0,0,0-7.3-5c-3.85-1.13-8-.23-11.83.91a94.74,94.74,0,0,0-13.14,5,25.94,25.94,0,0,0,17.47.31,19.7,19.7,0,0,1,8.88-.52c3.75.43,8.46,3.91,10.89,6.8\"></path>\n                        <path class=\"cls-5\" d=\"M555.57,636.3c-6.34.35-11.9,5.23-14.11,11.18s-1.46,12.72.94,18.6,6.31,11,10.46,15.83c2.08-7.17,4.18-14.36,5.09-21.77S558.17,643.29,555.57,636.3Z\"></path>\n                        <g class=\"cls-7\">\n                            <path d=\"M523,649.18c-6.73,8.57-9,20-8.22,30.89a74.05,74.05,0,0,1,23.9-37.1c4.39-3.615.44-6.55C542.87,635.43,529.9,640.34,523,649.18Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M538.59,632c-3.76.28-7.19,2.18-10.3,4.31-4.75,3.27-9.21,7.38-11.28,12.76a390,0,1,34.65-13.67C547.56,633.32,543.15,631.63,538.59,632Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M549.11,619.09a8,8,0,0,0-3.72,6.64,8.17,8.17,0,0,0,2.15,4.88A32.34,32.34,0,635c1.37-6.11,3-12.49,4.41-18.6A19.74,19.74,0,0,0,549.11,619.09Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M561.83,618.51a18.16,18.16,0,0,0-7,7.6c-1.42,3.18-2,7.2-.22,10.19A258.4,25871.28,614,53.72,53.72,0,0,0,561.83,618.51Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M572.63,629a21,21,0,0,0-17.84,7.81,17.39,17.39,0,0,1,9.58-1.81A228.19,228.19,639.57,20.92,20.92,0,0,0,572.63,629Z\"></path>\n                        </g>\n                        <g class=\"cls-7\">\n                            <path d=\"M555.57,636.3c-6.34.35-11.9,5.23-14.11,11.18s-1.46,12.72.94,18.6,6.31,11,102.08-7.17,4.18-14.36,5.09-21.77S558.17,643.29,555.57,636.3Z\"></path>\n                        </g>\n                        <path class=\"cls-8\" d=\"M371.26,514.63c-1,9.83-2.11,20.09-2.11,20.09s-3.8,11.61-7.63,18.92c10.84,4.12,22.19,4.38,32.38,9.89.52-2.43,4.53-23.93,14.82-32.9.64-.55,1.14-2.2,1.82-4.46C397.48,522.21,384.26,518.78,371.26,514.63Z\"></path>\n                        <circle class=\"cls-8\" cx=\"377.15\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-8\" d=\"M431.26,523.64c-7.29-.44-15.57-2.53-23.24-2.54-.73,12.88-1.44,26.1-2.12,39.33,11.75.34,34.08,0,34.08,0a256.72,256.72,0,0,0,8.28-35.79Q439.76,524.16,431.26,523.64Z\"></path>\n                        <circle class=\"cls-8\" cx=\"422.94\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-2\" d=\"M462.21,379.46c20.81,57.52-9.7,149.7-9.7,149.7s-45.32,21-86.92,3.39l-15.42-69.34s-11.83-56.6,22.69-81.73S462.21,379.46,462.21,379.46Z\"></path>\n                        <path class=\"cls-8\" d=\"M434.76,721c-1.39-2.65-4.56-4.14-8.81-17.93-3.54-11.46,9.83-72.09,14.9-104.61h0c2.7-14.75.08-32.13-.87-38.05-12.37.58-21.7.4-34.08,0-.24,4.87-1.14,19.38-1.37,24.19-.15,3.26-.25,6.46-.33,9.65h0s-2.45,33.76,1.73,62.81c6.16,42.84.11,54.12-.11,54.88,0,0,2,10.69,6.63,11.67,12.87,2.67,20.39,18.71,28.42,17.09s9.5-3.76,9.5-3.76S437.85,726.91,434.76,721Z\"></path>\n                        <circle class=\"cls-8\" cx=\"422.94\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-9\" d=\"M446.45,739.2c3.9-.41-6.57-11.49-5.85-11s24.26,19.07,25.87,23.29c.6,1.55-.6,4.4-5.33,4.72s-20.27-4.36-24.73-6-19.87-21.39-23.17-22.9-3.81,18.78-4.55,19l-2.59-1.78s-4.55-20.94-.3-32.61c0,0,3.46.64,11.48,8.63C425.82,729.11,441,739.77,446.45,739.2Z\"></path>\n                        <path class=\"cls-8\" d=\"M505.21,409.4c1.13,2.29-.54,12.93-.88,19.57s1.91,13,3.94,12.89-.12-12.45,4.31-11.81,6.84,6.47,9,12.11,5.91,20.41,8.57,18.41c2.89-2.18-5.19-22.75-2.95-23.68,1.56-.65,10.56,19.91,14.12,18.94,3.76-1-10.72-20.55-9.08-23.28s13.13,17.68,16,15.31-12.9-20.9-12.15-23.1,12.16,12.19,13.62,9.49c1.55-2.85-10.55-14.88-16.78-21s-16-14.39-17.79-15.85Z\"></path>\n                        <path class=\"cls-8\" d=\"M505.21,409.4a7.81,7.81,0,1,0-.08-11A7.81,7.81,0,0,0,505.21,409.4Z\"></path>\n                        <path class=\"cls-10\" d=\"M469.88,352.62a16.24,16.24,0,0,1-16.34-21,16.24,16.24,0,1,1,16.34,21Z\"></path>\n                        <path class=\"cls-10\" d=\"M500.94,411.88c-8.92-8.79-44.09-64.64-45.6-66.79l-1.55-3.15,27.94-16,1.11,1.83a207.44,207.44,0,0,1,11.82,24c1.67,3.89,26.21,45.14,26.21,45.14L502.28,413.3Z\"></path>\n                        <path class=\"cls-10\" d=\"M453,274.78a18.78,18.78,0,0,1-30.57-3.7,18.78,18.78,0,1,1,30.57,3.7Z\"></path>\n                        <path class=\"cls-10\" d=\"M455.69,346.62l-1.58-2.41c-1.17-2.19-28.61-54.13-33.43-78l-.41-2,36.45-8.31.55,1.94c7.59,26.75,23.18,66.05,25.57,71.29l.83,1.81Z\"></path>\n                        <path class=\"cls-10\" d=\"M480.56,347.4a16.24,16.24,0,1,1,1.63-19.48,16.27,16.27,0,0,1-1.63,19.48Z\"></path>\n                        <path class=\"cls-8\" d=\"M320.35,447.19c-.76,2.43,2.59,12.68,4,19.17s.19,13.15-1.84,13.35-1.86-12.3-6.13-11-5.72,7.48-7,13.4-2.58,21.09-5.53,19.53c-3.2-1.68,1.5-23.28-.85-23.85-1.64-.39-7.26,21.34-10.93,20.95-3.88-.41,7.31-22,5.26-24.43S287.17,493.89,283.94,492s9.41-22.69,8.32-24.74-10.07,14-11.94,11.54,8.05-16.38,13.24-23.37,13.5-16.75,15-18.47Z\"></path>\n                        <path class=\"cls-8\" d=\"M320.35,447.19a7.82,7.82,0,1,1-1.69-10.93A7.83,7.83,0,0,1,320.35,447.19Z\"></path>\n                        <path class=\"cls-10\" d=\"M338.27,374.91a16.24,16.24,0,1,0-17.9-5.08A16.24,16.24,0,0,0,338.27,374.91Z\"></path>\n                        <path class=\"cls-10\" d=\"M324.84,444.92c5-11.5,23.49-79.88,24.09-82.44l.25-3.5-31.88-4.32-.34,2.11c-.07.4-1.61,9.92-2,26.66-.09,4.24-14.23,55.1-14.23,55.1l23.37,8.2Z\"></path>\n                        <path class=\"cls-10\" d=\"M351.77,293.55a18.86,18.86,0,0,1-6.44,1.26,18.78,18.78,0,0,1-19.13-18.42,18.78,18.78,0,1,1,25.57,17.16Z\"></path>\n                        <path class=\"cls-10\" d=\"M317,362.73l-.31-2.87c0-2.48,3.56-65.17,10.11-88.67l.56-2,36.25,9.13-.39,2c-5.37,27.28-13.81,73.33-14.05,79.08l-.09,2Z\"></path>\n                        <path class=\"cls-10\" d=\"M338.84,374.7a16.24,16.24,0,1,1,6.6-4.75A16.25,16.25,0,0,1,338.84,374.7Z\"></path>\n                        <path class=\"cls-9\" d=\"M340.64,714.67s3.37,7.24.24,14.4-6.85,16.14-7.24,22.5-6,18.13-16.12,21-15.89-2.68-14.9-10.86S313,742.45,313,742.45Z\"></path>\n                        <path class=\"cls-8\" d=\"M339.12,640.43c-5.18,32.63-7,67-23.08,96.81-1.41,2.61-2.94,5.24-3.48,8.15s.11,6.27,2.43,8.12,6.06,1.71,8.75.17,4.6-4.13,6.2-6.79c8.7-14.48,10.13-32,15-48.22,6.93-23.18,19.75-43.51,28.88-65.72S388.28,586.6,394,563.28c-10.6-3.7-21.35-8-32.45-9.64,0,0-9.35,18.07-10.24,20.12a120.48,120.48,0,0,0-6.91,20.85c-3.45,14.94-2.85,30.68-5.25,45.82\"></path>\n                        <circle class=\"cls-8\" cx=\"377.15\" cy=\"560.43\" r=\"17.04\"></circle>\n                        <path class=\"cls-11\" d=\"M334.4,127.55c11.07-13.82,32-27.32,60.18-24.41,17.77,1.83,47.75,14.23,44.79,41s-10.93,23.05,1.48,37.82,42.31,62.17.91,90.93-92,13.91-120.66-18S320,145.53,334.4,127.55Z\"></path>\n                        <path class=\"cls-10\" d=\"M445.23,303.77c10.25-10.54,9.65-20.19,5.67-27.77.15-.14.32-.26.47-.4a18.72,18.72,0,0,0-7.55-31.72v0s-1.28-.76-25-6.65c-14.09-3.75-29.33-12.06-55.62,4.6-6,5.44-18.66,9.29-28.82,19A18.73,18.73,0,0,0,338,294.17a18.52,18.52,0,0,0,6.45,1.16,18.16,18.16,0,0,0,2.77-.22c5.33,14.46,17.69,52.95,17.69,52.95l-7.63,38.77c55.55,29,110-4.75,110-4.75Z\"></path>\n                        <path class=\"cls-8\" d=\"M402.84,244c-4.26,2.46-7.61,3.75-12.39,3.87-7.11.19-9.71-4-12.08-4.6l-23.06-53.25L397,208.85l.1,1.77Z\"></path>\n                        <path class=\"cls-12\" d=\"M391.38,227.47a41.94,41.94,0,0,1-12.81-3.74,87.48,87.48,0,0,1-11.37-6.22l-11.89-27.46L397,208.85l.1,1.77,3,17.65C397.22,228,394.3,227.81,391.38,227.47Z\"></path>\n                        <path class=\"cls-8\" d=\"M341.2,161.71s-15.31-3.29-13.32,13.91,14.45,17.54,18.13,18.29c0,0,6.85,30.63,44.64,27.69S422.24,189.41,422,170s1.89-53.09-22.84-55.58C374.17,111.93,339,113.57,341.2,161.71Z\"></path>\n                        <path class=\"cls-11 ojo\" d=\"M382,170a5.08,5.08,0,1,1-5.3-4.84A5.08,5.08,0,0,1,382,170Z\"></path>\n                        <path class=\"cls-11 ojo\" d=\"M407.91,170a5.08,5.08,0,1,1-5.3-4.84A5.08,5.08,0,0,1,407.91,170Z\"></path>\n                        <path class=\"cls-11\" d=\"M384.07,158.11c.2-.27-.55-1.28-2.26-2.25a13.19,13.19,0,0,0-14.59,1.39,7.87,7.87,0,0,0-1.56,1.73c-.29.47-.36.79-.24.92s.45,0,.92-.19l1.88-.94a18.74,18.74,0,0,1,6.3-1.86,18.4,18.4,0,0,1,6.59.63C382.79,158,383.86,158.42,384.07,158.11Z\"></path>\n                        <path class=\"cls-11\" d=\"M398.67,157.47c.27.26,1.24-.36,2.81-1.12a17.33,17.33,0,0,1,12.88-1.24l2,.57c.51.13.84.16.94,0s0-.44-.41-.85a7.87,7.87,0,0,0-1.86-1.4,13.19,13.19,0,0,0-14.59,1.4C399,156.12,398.43,157.24,398.67,157.47Z\"></path>\n                        <path class=\"cls-12\" d=\"M330.86,169.38c-1.32,4.55.55,9.35,2.38,13.72a7.44,7.44,0,0,0,2.31,3.46c1.16.8,3.06.68,3.67-.59s-.28-2.61-1-3.79-1.07-3,.08-3.69c.53-.34,1.23-.31,1.79-.61,1.22-.64,1.21-2.38.9-3.73a21.23,21.23,0,0,0-2-5.32c-.91-1.64-2.34-3.32-4.21-3.29S331.4,167.5,330.86,169.38Z\"></path>\n                        <path class=\"cls-13\" d=\"M372.52,229.8s18.59,16.06,22.89,15.36,4.73-16.89,4.73-16.89,10.67,2.91,12.54,5,4.65,22.3,4.65,22.3c-3.28,3.43-18.1-8.8-20.43-7s-11.81,16.53-14,16.29c0,0-18-23.18-17.38-27C365.79,236.29,372.52,229.8,372.52,229.8Z\"></path>\n                        <path class=\"cls-11\" d=\"M341.2,161.71c20.34-4.57,25.61-13.56,27.52-29.28,0,0,13.3,37.55,63.34,28-.33-.27-2.8-50-34.52-49.11-32.81.94-50.82,6-56.34,26.34C337,153.13,341.2,161.71,341.2,161.71Z\"></path>\n                        <path class=\"cls-11\" d=\"M341.2,161.71c.11,5.26,6,24.13,6,24.13s-1.14-25.56,2.27-31S341.2,161.71,341.2,161.71Z\"></path>\n                        <path class=\"cls-12\" d=\"M376.94,190.07a10.14,10.14,0,1,1-10.59-9.66A10.15,10.15,0,0,1,376.94,190.07Z\"></path>\n                        <path class=\"cls-12\" d=\"M422.18,188a9.84,9.84,0,1,1-10.27-9.38A9.83,9.83,0,0,1,422.18,188Z\"></path>\n                        <path class=\"cls-14\" d=\"M396.61,184.05c.65.67-.36,2.58-2.7,3s-4-1-3.62-1.81,1.64-1.26,3-1.55S396,183.34,396.61,184.05Z\"></path>\n                        <path class=\"cls-15\" d=\"M399.4,193.59c.22.37-.64,1.45-2.61,2.33a14.09,14.09,0,0,1-15.47-3.4c-1.42-1.63-1.75-3-1.39-3.22.79-.55,4,2.88,9.34,4C394.56,194.52,398.92,192.75,399.4,193.59Z\"></path>\n                        <rect class=\"cls-16\" x=\"729.63\" y=\"9.47\" width=\"9.33\" height=\"200.61\"></rect>\n                        <rect class=\"cls-17\" x=\"594.29\" y=\"11.02\" width=\"133.93\" height=\"199.34\" rx=\"0.13\"></rect>\n                        <path class=\"cls-18\" d=\"M729.63,211.91H592.87a.13.13,0,0,1-.14-.13V9.61a.14.14,0,0,1,.14-.14H729.63a.14.14,0,0,1,.14.14V211.78A.13.13,0,0,1,729.63,211.91ZM596,208.81H726.53a.13.13,0,0,0,.13-.14v-196a.13.13,0,0,0-.13-.14H596a.13.13,0,0,0-.13.14v196A.13.13,0,0,0,596,208.81Z\"></path>\n                        <rect class=\"cls-13\" x=\"607.77\" y=\"23.32\" width=\"107.19\" height=\"174.61\" rx=\"0.13\"></rect>\n                        <rect class=\"cls-18\" x=\"631.16\" y=\"72.82\" width=\"60.19\" height=\"70.55\" rx=\"0.06\"></rect>\n                        <path class=\"cls-16\" d=\"M686.58,134.73c.08.23-2.89,1.53-8.55.87a20.91,20.91,0,0,1-9.6-3.84A19.43,19.43,0,0,1,661,120a16.88,16.88,0,0,1,5.7-16,15.17,15.17,0,0,1,4.33-2.53,11.58,11.58,0,0,1,5.42-.63,9.53,9.53,0,0,1,5.41,2.37,7,7,0,0,1,2.13,6.3,10.28,10.28,0,0,1-3,5.42,20.13,20.13,0,0,1-4.53,3.34,25.08,25.08,0,0,1-10.82,3.09,21.55,21.55,0,0,1-11.53-2.63,20.91,20.91,0,0,1-8.48-8.79,17.93,17.93,0,0,1-1.52-12.32,18.33,18.33,0,0,1,6.49-10.14A15.88,15.88,0,0,1,656,84.7a13.5,13.5,0,0,1,6.13-.19,10,10,0,0,1,5.56,3.14,9.23,9.23,0,0,1,2.18,5.94,11.33,11.33,0,0,1-1.45,5.66,15.14,15.14,0,0,1-3.43,4.12,23,23,0,0,1-8.53,4.53,21.84,21.84,0,0,1-9,.7,18.4,18.4,0,0,1-7.81-3,16.9,16.9,0,0,1-7.45-11.81A14.22,14.22,0,0,1,635,83.67a12.06,12.06,0,0,1,5.11-4.08c1.4-.53,2.21-.52,2.24-.38s-.64.5-1.78,1.26a13.43,13.43,0,0,0-4,4.27A12.65,12.65,0,0,0,635,93.39a14.17,14.17,0,0,0,6.63,9.28A16.34,16.34,0,0,0,655.31,104a19.36,19.36,0,0,0,6.84-3.87c2-1.77,3.31-4,3.2-6.42a4.61,4.61,0,0,0-4.12-4.55,9,9,0,0,0-3.94.19,11.3,11.3,0,0,0-3.71,1.94,13.55,13.55,0,0,0-4.68,7.46,13,13,0,0,0,1.15,9,16.21,16.21,0,0,0,6.47,6.73,16.79,16.79,0,0,0,8.91,2.07,20.36,20.36,0,0,0,8.77-2.39,15.51,15.51,0,0,0,3.49-2.47,5.92,5.92,0,0,0,1.78-2.89,2.55,2.55,0,0,0-.72-2.33,5.22,5.22,0,0,0-2.9-1.27,7.23,7.23,0,0,0-3.41.29,10.71,10.71,0,0,0-3.18,1.74,13.19,13.19,0,0,0-4.84,12.27,16.86,16.86,0,0,0,5.73,10.16,20.35,20.35,0,0,0,8.24,4.12C683.48,134.89,686.54,134.3,686.58,134.73Z\"></path>\n                    </g>\n                </g>\n            </svg></div>\n    </div>\n    <!--<div class=\"contenedor__navegacion\">\n        <a class=\"boton__navegacion\" href=\"./vistas/vista-1.html\">\n            <span class=\"boton__navegacion__figura-contenedor\">\n                <svg class=\"boton__navegacion__figura\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 26.44 26.27\" fill=\"#fff\">\n                    <g id=\"Capa_2\" data-name=\"Capa 2\">\n                        <g id=\"Pop_up\" data-name=\"Pop up\">\n                            <g id=\"Logo_y_botones\" data-name=\"Logo y botones\">\n                                <path fill=\"#fff\" d=\"M1.56,26.27A1.58,1.58,0,0,1,0,24.65v-23A1.58,1.58,0,0,1,1.56,0,1.69,1.69,0,0,1,2.4.23L19.79,11.75a1.57,1.57,0,0,1,0,2.77L2.4,26a1.69,1.69,0,0,1-.84.23Z\"></path>\n                                <path fill=\"#fff\" d=\"M23.24,25.71a3.2,3.2,0,0,1-3.2-3.2V3.76a3.2,3.2,0,0,1,6.4,0V22.51A3.2,3.2,0,0,1,23.24,25.71Z\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </span>\n        </a>\n        <a class=\"boton__navegacion\" href=\"./vistas/vista-1.html\">\n            <span class=\"boton__navegacion__figura-contenedor\">\n                <svg class=\"boton__navegacion__figura\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 26.44 26.27\">\n                    <g id=\"Capa_2\" data-name=\"Capa 2\">\n                        <g id=\"Pop_up\" data-name=\"Pop up\">\n                            <g id=\"Logo_y_botones\" data-name=\"Logo y botones\">\n                                <path fill=\"#fff\" d=\"M1.56,26.27A1.58,1.58,0,0,1,0,24.65v-23A1.58,1.58,0,0,1,1.56,0,1.69,1.69,0,0,1,2.4.23L19.79,11.75a1.57,1.57,0,0,1,0,2.77L2.4,26a1.69,1.69,0,0,1-.84.23Z\"></path>\n                                <path fill=\"#fff\" d=\"M23.24,25.71a3.2,3.2,0,0,1-3.2-3.2V3.76a3.2,3.2,0,0,1,6.4,0V22.51A3.2,3.2,0,0,1,23.24,25.71Z\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </span>\n        </a>\n    </div>-->\n\t</div>\n\t";
};

},{}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"mantenMovimientos-content container-content_slide\">\n\t\t\t<div class=\"mantenMovimientos-content_description\">\n\t\t\t\t<p class=\"mantenMovimientos-content_description-title\">MANT\xC9N UNA BUENA POSTURA EN ESPALDA Y CONTROLA LA VELOCIDAD DE LOS MOVIMIENTOS</p>\n\t\t\t\t<p class=\"mantenMovimientos-content_description-text\">Al realizar estos ejercicios con resistencia, recuerda que la espalda debe estar siempre recta, evitando flexiones o curvaturas que favorezcan la realizaci\xF3n del ejercicio. Ten en cuenta que los movimientos no deben ser bruscos. Mientras regresas a la posici\xF3n inicial del ejercicio, realiza un peque\xF1o frenado para no permitir que la banda le gane a nuestra fuerza. Te invitamos a practicar los siguientes ejercicios</p>\n\t\t\t</div>\n\t\t\t<div class=\"mantenMovimientos-content_graphic\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/bandaElasticaManten.svg\" />\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"muniecaExtremidad-content container-content_slide\">\n\t\t\t<div class=\"muniecaExtremidad-content_graphic muniecaExtremidad-content_graphic--width\">\n\t\t\t\t<img src=\"img/bodyHumanMuniecaMano.png\" class=\"extremidadSuperior-content_graphic-munieca\" />\n\t\t\t</div>\n\t\t\t<div class=\"muniecaExtremidad-content_description\">\n\t\t\t\t<p class=\"muniecaExtremidad-content_description-title\">EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"muniecaExtremidad-content_description-subTitle\">Mu\xF1eca y Mano</p>\n\t\t\t\t<ul class=\"muniecaExtremidad-content_description-list\">\n\t\t\t\t\t<li class=\"muniecaExtremidad-content_description-list_item\">La mu\xF1eca nos permite la uni\xF3n entre el antebrazo y la mano.</li>\n\t\t\t\t\t<li class=\"muniecaExtremidad-content_description-list_item\">La mano es el segmento entre la mu\xF1eca y los dedos,</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"muniecaExtremidad-content_description-text\">encontr\xE1ndose varios huesos que se unen entre s\xED, permiti\xE9ndonos realizar diferentes movimientos que nos facilitan la manipulaci\xF3n de los objetos y/o elementos.</p>\n\t\t\t\t<div class=\"muniecaExtremidad-content_description-square\">\n\t\t\t\t\t<p class=\"muniecaExtremidad-content_description-square_text\">Como movimientos a nivel de mu\xF1eca tenemos abajo o flexi\xF3n, arriba o extensi\xF3n, a la derecha o izquierda y a nivel de los dedos abajo o arriba, separar y unir los dedos.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--<img src=\"img/svg/bodyHumanCircle.svg\" class=\"conoceExtremidades-content_bodyHumanCircle\" />-->\n\t\t</div>\n\t";
};

},{}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<header class=\"portada-header\">\n\t\t\t<div class=\"portada-header_cnt container-content_slide\">\n\t\t\t\t<div class=\"portada-header_logoLeft\">\n\t\t\t\t\t<img src=\"./img/logo.png\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"portada-header_logoRight\">\n\t\t\t\t\t<img src=\"./img/gestion-talento.png\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<section class=\"portada-content container-content_slide\">\n\t\t\t<div class=\"portada-content_div1\">\n\t\t\t\t<div class=\"portada-content_div1-left\">\n\t\t\t\t\t<p class=\"portada-content_div1-left_textLarge\">ACT\xCD</p>\n\t\t\t\t\t<p class=\"portada-content_div1-left_textSmall\">EXTREMIDADES</p>\n\t\t\t\t</div>\n\t\t\t\t<img src=\"./img/svg/portadaMujer.svg\" class=\"portada-content_imgCenter\" />\n\t\t\t\t<div class=\"portada-content_div2-left\">\n\t\t\t\t\t<p class=\"portada-content_div2-left_textLarge\">VATE</p>\n\t\t\t\t\t<p class=\"portada-content_div2-left_textSmall\">INFERIORES</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"portada-content_div2\">\n\t\t\t\t<p class=\"portada-content_div2-text\">EQUIPO DE SEGURIDAD, SALUD EN EL TRABAJO<br/>Y AMBIENTE</p>\n\t\t\t</div>\n\t\t</section>\n\t";
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
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesS.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-textSmall\">Contin\xFAa la sesi\xF3n con ejercicios de estiramiento muscular</p>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],118:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle8\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage10.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 9</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Une las palmas de las manos con dedos extendidos</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Sin despegar las palmas desciende las manos hasta que sientas el estiramiento.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle\">\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage2.svg\" />\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 1</p>\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_text\">Con espalda y cabeza rectas, entrelaza las manos y lleva los brazos por encima de la cabeza</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle2\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage3.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 2</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Cruza el brazo derecho frente al pecho</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Empuja con la mano izquierda por encima de la articulaci\xF3n del codo que estas cruzando</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Mant\xE9n el estiramiento</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],121:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle3\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage4.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 3</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Puedes combinar el anterior ejercicio llevando la mano hacia la espalda</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice_square relajaExtremidadesS-content_description-excersice_square--bgAll\">\n\t\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_square-text--bgAll\">Es importante que al realizar estos ejercicios no presiones directamente la articulaci\xF3n del codo, estira de una zona adyacente a la articulaci\xF3n y no directamente en ella.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],122:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle4\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage5.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 4</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Entrelaza las manos al frente.</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Estira los codos y lleva los hombros hacia delante arqueando la espalda y bajando la cabeza</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],123:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle5\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage6.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 5</p>\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_text\">Intenta tomarte de las manos por detr\xE1s de tu espalda.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],124:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle6\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage7.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 6</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Lleva el brazo hacia el frente con la palma de la mano hacia arriba</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Con la mano contraria ejerce un poco de presi\xF3n sobre todos los dedos, hasta que sientas algo de tensi\xF3n</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Mant\xE9n la posici\xF3n y luego realiza el ejercicio con la otra mano</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_message\"><b>Recuerda</b> tambi\xE9n involucrar el dedo pulgar</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],125:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle7\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage8.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 7</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Lleva tu brazo al frente</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Empu\xF1a y baja tu mano hasta que sientas un poco de tensi\xF3n</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Sost\xE9n el estiramiento y luego realiza el mismo ejercicio con la otra mano</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],126:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"relajaExtremidadesS-content container-content_slide\">\n\t\t\t<div class=\"relajaExtremidadesS-content_graphic relajaExtremidadesS-content_graphic--changeStyle8\">\n\t\t\t\t<img class=\"graphic-presentation\" src=\"img/svg/relajaExtremidadesSPage9.svg\" />\n\t\t\t\t<a href=\"#\" id=\"audioQueEsActivate\" class=\"relajaExtremidadesS-content_graphic-audio\">\n\t\t\t\t\t<img src=\"img/svg/soundButton2.svg\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"relajaExtremidadesS-content_description\">\n\t\t\t\t<p class=\"relajaExtremidadesS-content_description-title\">RELAJA TUS EXTREMIDADES SUPERIORES</p>\n\t\t\t\t<div class=\"relajaExtremidadesS-content_description-excersice\">\n\t\t\t\t\t<p class=\"relajaExtremidadesS-content_description-excersice_title\">Ejercicio 8</p>\n\t\t\t\t\t<ul class=\"activaExtremidadS-content_description-ul\">\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Empu\xF1a tus manos</li>\n\t\t\t\t\t\t<li class=\"activaExtremidadS-content_description-ul_li\">Abre y separa los dedos sosteniendo el estiramiento</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"usoCelular-content container-content_slide\">\n\t\t\t<div class=\"usoCelular-content_graphic\">\n\t\t\t\t<img src=\"img/svg/usoCelularPage1.svg\" class=\"usoCelular-content_graphic-img\" />\n\t\t\t</div>\n\t\t\t<div class=\"usoCelular-content_description\">\n\t\t\t\t<p class=\"usoCelular-content_description-title\">AL HACER USO DEL CELULAR</p>\n\t\t\t\t<div class=\"usoCelular-content_description-square\">\n\t\t\t\t\t<p class=\"usoCelular-content_description-square_text\">Los siguientes ejercicios te ayudar\xE1n a<br/>disminuir la fatiga muscular por el uso<br/>del celular</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],128:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"usoCelular-content container-content_slide\">\n\t\t\t<div id=\"usoCelularPage2\" class=\"usoCelular-content_graphic usoCelular-content_graphicPage2\">\n\t\t\t\t<img src=\"img/svg/usoCelularPage2-1.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage2 ucp\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage2-2.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage2 ucp\" />\n\t\t\t</div>\n\t\t\t<div class=\"usoCelular-content_description\">\n\t\t\t\t<p class=\"usoCelular-content_description-title\">AL HACER USO DEL CELULAR</p>\n\t\t\t\t<div class=\"usoCelular-content_description-excersice\">\n\t\t\t\t\t<p class=\"usoCelular-content_description-excersice_title\">Ejercicio 1</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"usoCelular-content_description-ul\">\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li\">Con los brazos al frente</li>\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li\">Abrace el pulgar con los dedos</li>\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li\">Suavemente lleve la mu\xF1eca hacia abajo, sost\xE9n durante 10 \u2013 15 segundos</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t";
};

},{}],129:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return "\n\t\t<div class=\"usoCelular-content container-content_slide\">\n\t\t\t<div id=\"usoCelularPage3\" class=\"usoCelular-content_graphic usoCelular-content_graphicPage2\">\n\t\t\t\t<img src=\"img/svg/usoCelularPage3-1.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage3 ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage3-2.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-imgPage3 ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage4.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-img22 ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage5-1.svg\" class=\"usoCelular-content_graphic-img ucp3\" />\n\t\t\t\t<img src=\"img/svg/usoCelularPage5-2.svg\" class=\"usoCelular-content_graphic-img usoCelular-content_graphic-img28 ucp3\" />\n\t\t\t</div>\n\t\t\t<div class=\"usoCelular-content_description\">\n\t\t\t\t<p class=\"usoCelular-content_description-title\">AL HACER USO DEL CELULAR</p>\n\t\t\t\t<div class=\"usoCelular-content_description-excersice\">\n\t\t\t\t\t<p class=\"usoCelular-content_description-excersice_title\">Ejercicio 2</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"usoCelular-content_description-ul\">\n\t\t\t\t\t<li class=\"usoCelular-content_description-ul_li\">Mant\xE9n las siguientes posiciones de tus manos durante 5 segundos, repite de 5 \u2013 10 veces de forma graduada y descansa.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"usoCelular-content_description-message\">REPETICI\xD3N 1</p>\n\t\t\t</div>\n\t\t</div>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29udHJvbGxlci9hY3RpdmFFeHRyZW1pZGFkUy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvYWN0aXZhRXh0cmVtaWRhZFNQYWdlMTAuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTMuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTUuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTYuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTcuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTguY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTkuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2FudGVicmF6by1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhUGFnZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2JhbmRhRWxhc3RpY2FQYWdlMy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvYmFuZGFFbGFzdGljYVBhZ2U0LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2JhbmRhRWxhc3RpY2FQYWdlNS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvYmFuZGFFbGFzdGljYVBhZ2U1UGFydGUyLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9iYW5kYUVsYXN0aWNhUGFnZTYuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2NsYXJvVGlwc1BhZ2UxLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9jbGFyb1RpcHNQYWdlMi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvY2xhcm9UaXBzUGFnZTMuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2NsYXJvVGlwc1BhZ2U0LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9jb2RvLWV4dHJlbWlkYWQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2Nvbm9jZS1leHRyZW1pZGFkZXMuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2N1aWRhQnJhem9zLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9jdWlkYXItZXh0cmVtaWRhZGVzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lamVyY2l0YUV4dHJlbWlkYWRlcy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZWxpZ2VHb21hLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lbkNhc2FQYWdlMS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5DYXNhUGFnZTIuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuQ2FzYVBhZ2UzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lbkNhc2FQYWdlNC5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5DYXNhUGFnZTUuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuQ2FzYVBhZ2U2LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lblRyYWJham8uY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuVHJhYmFqb1BhZ2UyLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lblRyYWJham9QYWdlMy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5UcmFiYWpvUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuVHJhYmFqb1BhZ2U1LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9lblRyYWJham9QYWdlNi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvZW5UcmFiYWpvUGFnZTcuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL2VuVHJhYmFqb1BhZ2U4LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9ob21icm8tZXh0cmVtaWRhZC5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvaG9tZS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvaW5kZXguanMiLCJzcmMvanMvY29udHJvbGxlci9tYW50ZW5Nb3ZpbWllbnRvcy5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvbXVuaWVjYS1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9wb3J0YWRhLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9xdWUtZXMtYWN0aXZhdGUuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1MuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOC5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci91c29DZWx1bGFyUGFnZTEuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3Vzb0NlbHVsYXJQYWdlMi5jb250cm9sbGVyLmpzIiwic3JjL2pzL2NvbnRyb2xsZXIvdXNvQ2VsdWxhclBhZ2UzLmNvbnRyb2xsZXIuanMiLCJzcmMvanMvY29udHJvbGxlci91c29DZWx1bGFyUGFnZTQuY29udHJvbGxlci5qcyIsInNyYy9qcy9jb250cm9sbGVyL3Vzb0NlbHVsYXJQYWdlNS5jb250cm9sbGVyLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkUy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UxMC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UyLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U1LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTYudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U4LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTkudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYW50ZWJyYXpvLWV4dHJlbWlkYWQudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYmFuZGFFbGFzdGljYS52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYmFuZGFFbGFzdGljYVBhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvYmFuZGFFbGFzdGljYVBhZ2U1LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMi52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTYudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY2xhcm9UaXBzUGFnZTQudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY29kby1leHRyZW1pZGFkLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2Nvbm9jZS1leHRyZW1pZGFkZXMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY3VpZGFCcmF6b3Mudmlldy5qcyIsInNyYy9qcy92aXN0YXMvY3VpZGFyLWV4dHJlbWlkYWRlcy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9lamVyY2l0YUV4dHJlbWlkYWRlcy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9lbGlnZUdvbWEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTMudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTQudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTUudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5DYXNhUGFnZTYudmlldy5qcyIsInNyYy9qcy92aXN0YXMvZW5UcmFiYWpvLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2UyLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U0LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U1LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U2LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U3LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2VuVHJhYmFqb1BhZ2U4LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2Vycm9yLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2hvbWJyby1leHRyZW1pZGFkLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL2hvbWUudmlldy5qcyIsInNyYy9qcy92aXN0YXMvbWFudGVuTW92aW1pZW50b3Mudmlldy5qcyIsInNyYy9qcy92aXN0YXMvbXVuaWVjYS1leHRyZW1pZGFkLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3BvcnRhZGEudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcXVlLWVzLWFjdGl2YXRlLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1Mudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTUudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNy52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTgudmlldy5qcyIsInNyYy9qcy92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3Vzb0NlbHVsYXJQYWdlMS52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTIudmlldy5qcyIsInNyYy9qcy92aXN0YXMvdXNvQ2VsdWxhclBhZ2UzLnZpZXcuanMiLCJzcmMvanMvdmlzdGFzL3Vzb0NlbHVsYXJQYWdlNC52aWV3LmpzIiwic3JjL2pzL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTUudmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsNkJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHNDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLGtCQUFpQixJQUFqQixHQUF1QiwyQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsdUJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ3hCRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLDZCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1Qiw0Q0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZUFBeEMsR0FBd0QsRUFBeEQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZ0JBQXhDLEdBQXlELEVBQXpEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGtCQUF4QyxHQUEyRCxFQUEzRDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxjQUF4QyxHQUF1RCxFQUF2RDs7QUFFQSxrQkFBaUIsSUFBakIsR0FBdUIsdUJBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLDJCQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUM3QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw2QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsMkNBQXZCO0FBQ0EsS0FBTSxtQkFBbUIsV0FBVyxhQUFYLENBQXlCLHlDQUF6QixDQUF6QjtBQUNBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLDJCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixxQkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsWUFBVyxhQUFYLENBQXlCLG1CQUF6QixFQUE4QyxnQkFBOUMsQ0FBK0QsVUFBL0QsRUFBMkUsWUFBTTtBQUNoRixtQkFBaUIsS0FBakIsQ0FBdUIsS0FBdkIsR0FBNkIsRUFBN0I7QUFDQSxtQkFBaUIsR0FBakIsR0FBcUIsbUNBQXJCO0FBQ0EsRUFIRCxFQUdHLEtBSEg7QUFJQSxZQUFXLGFBQVgsQ0FBeUIsbUJBQXpCLEVBQThDLGdCQUE5QyxDQUErRCxXQUEvRCxFQUE0RSxVQUFDLENBQUQsRUFBTztBQUNsRixtQkFBaUIsS0FBakIsQ0FBdUIsS0FBdkIsR0FBNkIsUUFBN0I7QUFDQSxtQkFBaUIsR0FBakIsR0FBcUIsb0NBQXJCO0FBQ0EsRUFIRCxFQUdHLEtBSEg7O0FBTUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbENEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsNkJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDJDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLGtCQUFpQixJQUFqQixHQUF1QiwyQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsMkJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ3hCRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLDZCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QiwyQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBdUIsMkJBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLDJCQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUN4QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw2QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsMkNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLDJCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QiwyQkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsNkJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDJDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLGtCQUFpQixJQUFqQixHQUF1QiwyQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsMkJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ3hCRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLDZCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QiwyQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBdUIsMkJBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLDJCQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUN4QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw2QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsMkNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLDJCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QiwyQkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsNkJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDJDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLGtCQUFpQixJQUFqQixHQUF1Qiw0QkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsMkJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ3hCRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGlDQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1Qix3Q0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBdUIsc0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLG1CQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUN4QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qix5QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsa0NBQXZCO0FBQ0EsS0FBTSx3QkFBd0IsV0FBVyxhQUFYLENBQXlCLHdCQUF6QixDQUE5QjtBQUFBLEtBQ0Msd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qix3QkFBekIsQ0FEekI7O0FBR0EsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBdUIsd0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLHNCQUF4Qjs7QUFFQSxZQUFXLGFBQVgsQ0FBeUIsZ0JBQXpCLEVBQTJDLGdCQUEzQyxDQUE0RCxVQUE1RCxFQUF3RSxZQUFNO0FBQzdFLHdCQUFzQixLQUF0QixDQUE0QixPQUE1QixHQUFvQyxPQUFwQztBQUNBLHdCQUFzQixLQUF0QixDQUE0QixPQUE1QixHQUFvQyxNQUFwQztBQUNBLEVBSEQsRUFHRyxLQUhIO0FBSUEsWUFBVyxhQUFYLENBQXlCLGdCQUF6QixFQUEyQyxnQkFBM0MsQ0FBNEQsV0FBNUQsRUFBeUUsVUFBQyxDQUFELEVBQU87QUFDL0Usd0JBQXNCLEtBQXRCLENBQTRCLE9BQTVCLEdBQW9DLE9BQXBDO0FBQ0Esd0JBQXNCLEtBQXRCLENBQTRCLE9BQTVCLEdBQW9DLE1BQXBDO0FBQ0EsRUFIRCxFQUdHLEtBSEg7O0FBS0EsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDekJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIseUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHVDQUF2QjtBQUNBLEtBQU0sd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qiw4QkFBekIsQ0FBOUI7QUFBQSxLQUNDLHdCQUF3QixXQUFXLGFBQVgsQ0FBeUIsOEJBQXpCLENBRHpCO0FBQUEsS0FFQyx3QkFBd0IsV0FBVyxhQUFYLENBQXlCLDhCQUF6QixDQUZ6QjtBQUFBLEtBR0Msd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qiw4QkFBekIsQ0FIekI7O0FBS0EsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1Qix3QkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0Isa0JBQXhCO0FBQ0EsS0FBTSxXQUFXLFdBQVcsZ0JBQVgsQ0FBNEIsTUFBNUIsQ0FBakI7QUFDQSxNQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxTQUFTLE1BQTVCLEVBQW9DLEdBQXBDLEVBQXdDO0FBQ3JDLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDQSxXQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0Y7QUFDRCxZQUFXLGFBQVgsQ0FBeUIscUJBQXpCLEVBQWdELGdCQUFoRCxDQUFpRSxZQUFqRSxFQUErRSxVQUFDLENBQUQsRUFBTztBQUFBLDZCQUM3RSxFQUQ2RTtBQUVsRixjQUFXLFlBQU07QUFDbEIsYUFBUyxFQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNHLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRCxJQUhELEVBR0csSUFISDtBQUlBLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFJQSxjQUFXLFlBQU07QUFDbEIsYUFBUyxFQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNHLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRCxJQUhELEVBR0csSUFISDtBQWRrRjs7QUFDckYsT0FBSSxJQUFJLEtBQUksQ0FBWixFQUFlLEtBQUksU0FBUyxNQUE1QixFQUFvQyxJQUFwQyxFQUF3QztBQUFBLFNBQWhDLEVBQWdDO0FBaUJ2QztBQUNELEVBbkJELEVBbUJHLEtBbkJIO0FBb0JBLFlBQVcsYUFBWCxDQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBQWlFLFlBQWpFLEVBQStFLFVBQUMsQ0FBRCxFQUFPO0FBQ3JGLE9BQUksSUFBSSxNQUFJLENBQVosRUFBZSxNQUFJLFNBQVMsTUFBNUIsRUFBb0MsS0FBcEMsRUFBd0M7QUFDckMsWUFBUyxHQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFlBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELEVBTEQsRUFLRyxLQUxIOztBQU9BLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2hERDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHlCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1Qix1Q0FBdkI7QUFDQSxLQUFNLHdCQUF3QixXQUFXLGFBQVgsQ0FBeUIsOEJBQXpCLENBQTlCO0FBQUEsS0FDQyx3QkFBd0IsV0FBVyxhQUFYLENBQXlCLDhCQUF6QixDQUR6Qjs7QUFHQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLHdCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix3QkFBeEI7QUFDQSxLQUFNLFdBQVcsV0FBVyxnQkFBWCxDQUE0QixNQUE1QixDQUFqQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFNBQVMsTUFBNUIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDckMsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELFlBQVcsYUFBWCxDQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBQWlFLFlBQWpFLEVBQStFLFVBQUMsQ0FBRCxFQUFPO0FBQUEsNkJBQzdFLEVBRDZFO0FBRWxGLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFOa0Y7O0FBQ3JGLE9BQUksSUFBSSxLQUFJLENBQVosRUFBZSxLQUFJLFNBQVMsTUFBNUIsRUFBb0MsSUFBcEMsRUFBd0M7QUFBQSxTQUFoQyxFQUFnQztBQVN2QztBQUNELEVBWEQsRUFXRyxLQVhIO0FBWUEsWUFBVyxhQUFYLENBQXlCLHFCQUF6QixFQUFnRCxnQkFBaEQsQ0FBaUUsWUFBakUsRUFBK0UsVUFBQyxDQUFELEVBQU87QUFDckYsT0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksU0FBUyxNQUE1QixFQUFvQyxLQUFwQyxFQUF3QztBQUNyQyxZQUFTLEdBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsWUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsRUFMRCxFQUtHLEtBTEg7O0FBT0EsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDdENEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIseUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHVDQUF2QjtBQUNBLEtBQU0sd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qiw4QkFBekIsQ0FBOUI7QUFBQSxLQUNDLHdCQUF3QixXQUFXLGFBQVgsQ0FBeUIsOEJBQXpCLENBRHpCO0FBQUEsS0FFQyx1QkFBdUIsV0FBVyxhQUFYLENBQXlCLHVCQUF6QixDQUZ4Qjs7QUFJQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLDBCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix3QkFBeEI7QUFDQSxLQUFNLFdBQVcsV0FBVyxnQkFBWCxDQUE0QixNQUE1QixDQUFqQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFNBQVMsTUFBNUIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDckMsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELFlBQVcsYUFBWCxDQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBQWlFLFlBQWpFLEVBQStFLFVBQUMsQ0FBRCxFQUFPO0FBQUEsNkJBQzdFLEVBRDZFO0FBRWxGLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFOa0Y7O0FBQ3JGLE9BQUksSUFBSSxLQUFJLENBQVosRUFBZSxLQUFJLFNBQVMsTUFBNUIsRUFBb0MsSUFBcEMsRUFBd0M7QUFBQSxTQUFoQyxFQUFnQztBQVN2QztBQUNELEVBWEQsRUFXRyxLQVhIO0FBWUEsWUFBVyxhQUFYLENBQXlCLHFCQUF6QixFQUFnRCxnQkFBaEQsQ0FBaUUsWUFBakUsRUFBK0UsVUFBQyxDQUFELEVBQU87QUFDckYsT0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksU0FBUyxNQUE1QixFQUFvQyxLQUFwQyxFQUF3QztBQUNyQyxZQUFTLEdBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsWUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsRUFMRCxFQUtHLEtBTEg7O0FBT0EsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDdkNEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIseUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDZDQUF2QjtBQUNBLEtBQU0sd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qiw4QkFBekIsQ0FBOUI7QUFBQSxLQUNDLHdCQUF3QixXQUFXLGFBQVgsQ0FBeUIsOEJBQXpCLENBRHpCO0FBQUEsS0FFQyx1QkFBdUIsV0FBVyxhQUFYLENBQXlCLHVCQUF6QixDQUZ4Qjs7QUFJQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLHdCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix3QkFBeEI7QUFDQSxLQUFNLFdBQVcsV0FBVyxnQkFBWCxDQUE0QixNQUE1QixDQUFqQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFNBQVMsTUFBNUIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDckMsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELFlBQVcsYUFBWCxDQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBQWlFLFlBQWpFLEVBQStFLFVBQUMsQ0FBRCxFQUFPO0FBQUEsNkJBQzdFLEVBRDZFO0FBRWxGLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFOa0Y7O0FBQ3JGLE9BQUksSUFBSSxLQUFJLENBQVosRUFBZSxLQUFJLFNBQVMsTUFBNUIsRUFBb0MsSUFBcEMsRUFBd0M7QUFBQSxTQUFoQyxFQUFnQztBQVN2QztBQUNELEVBWEQsRUFXRyxLQVhIO0FBWUEsWUFBVyxhQUFYLENBQXlCLHFCQUF6QixFQUFnRCxnQkFBaEQsQ0FBaUUsWUFBakUsRUFBK0UsVUFBQyxDQUFELEVBQU87QUFDckYsT0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksU0FBUyxNQUE1QixFQUFvQyxLQUFwQyxFQUF3QztBQUNyQyxZQUFTLEdBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsWUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsRUFMRCxFQUtHLEtBTEg7O0FBT0EsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDdkNEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIseUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHVDQUF2QjtBQUNBLEtBQU0sd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qiw4QkFBekIsQ0FBOUI7QUFBQSxLQUNDLHdCQUF3QixXQUFXLGFBQVgsQ0FBeUIsOEJBQXpCLENBRHpCO0FBQUEsS0FFQyx1QkFBdUIsV0FBVyxhQUFYLENBQXlCLHVCQUF6QixDQUZ4Qjs7QUFJQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLDBCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QiwwQkFBeEI7QUFDQSxLQUFNLFdBQVcsV0FBVyxnQkFBWCxDQUE0QixNQUE1QixDQUFqQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFNBQVMsTUFBNUIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDckMsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELFlBQVcsYUFBWCxDQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBQWlFLFlBQWpFLEVBQStFLFVBQUMsQ0FBRCxFQUFPO0FBQUEsNkJBQzdFLEVBRDZFO0FBRWxGLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFOa0Y7O0FBQ3JGLE9BQUksSUFBSSxLQUFJLENBQVosRUFBZSxLQUFJLFNBQVMsTUFBNUIsRUFBb0MsSUFBcEMsRUFBd0M7QUFBQSxTQUFoQyxFQUFnQztBQVN2QztBQUNELEVBWEQsRUFXRyxLQVhIO0FBWUEsWUFBVyxhQUFYLENBQXlCLHFCQUF6QixFQUFnRCxnQkFBaEQsQ0FBaUUsWUFBakUsRUFBK0UsVUFBQyxDQUFELEVBQU87QUFDckYsT0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksU0FBUyxNQUE1QixFQUFvQyxLQUFwQyxFQUF3QztBQUNyQyxZQUFTLEdBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsWUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsRUFMRCxFQUtHLEtBTEg7O0FBT0EsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDdkNEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIseUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDZDQUF2QjtBQUNBLEtBQU0sd0JBQXdCLFdBQVcsYUFBWCxDQUF5Qiw4QkFBekIsQ0FBOUI7QUFBQSxLQUNDLHdCQUF3QixXQUFXLGFBQVgsQ0FBeUIsOEJBQXpCLENBRHpCO0FBQUEsS0FFQyx1QkFBdUIsV0FBVyxhQUFYLENBQXlCLHVCQUF6QixDQUZ4Qjs7QUFJQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLHdCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix3QkFBeEI7QUFDQSxLQUFNLFdBQVcsV0FBVyxnQkFBWCxDQUE0QixNQUE1QixDQUFqQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFNBQVMsTUFBNUIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDckMsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELFlBQVcsYUFBWCxDQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBQWlFLFlBQWpFLEVBQStFLFVBQUMsQ0FBRCxFQUFPO0FBQUEsNkJBQzdFLEVBRDZFO0FBRWxGLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFOa0Y7O0FBQ3JGLE9BQUksSUFBSSxLQUFJLENBQVosRUFBZSxLQUFJLFNBQVMsTUFBNUIsRUFBb0MsSUFBcEMsRUFBd0M7QUFBQSxTQUFoQyxFQUFnQztBQVN2QztBQUNELEVBWEQsRUFXRyxLQVhIO0FBWUEsWUFBVyxhQUFYLENBQXlCLHFCQUF6QixFQUFnRCxnQkFBaEQsQ0FBaUUsWUFBakUsRUFBK0UsVUFBQyxDQUFELEVBQU87QUFDckYsT0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksU0FBUyxNQUE1QixFQUFvQyxLQUFwQyxFQUF3QztBQUNyQyxZQUFTLEdBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsWUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsRUFMRCxFQUtHLEtBTEg7O0FBT0EsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDdkNEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIseUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHVDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLGdCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QiwwQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDYkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixxQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsbUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLG9CQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixxQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDZEQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixxQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsbUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLG9CQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixvQkFBeEI7O0FBRUEsWUFBVyxLQUFYLENBQWlCLGVBQWpCLEdBQWlDLE1BQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxTQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixjQUFqQixHQUFnQyxTQUFoQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsU0FBcEM7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbkJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIscUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLG1DQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLFlBQVcsS0FBWCxDQUFpQixlQUFqQixHQUFpQyxNQUFqQztBQUNBLFlBQVcsS0FBWCxDQUFpQixnQkFBakIsR0FBa0MsU0FBbEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsU0FBaEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsa0JBQWpCLEdBQW9DLFNBQXBDOztBQUdBLGtCQUFpQixJQUFqQixHQUF1QixvQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0Isb0JBQXhCOztBQUVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ3BCRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHFCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixtQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxZQUFXLEtBQVgsQ0FBaUIsZUFBakIsR0FBaUMsTUFBakM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsZ0JBQWpCLEdBQWtDLFNBQWxDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGNBQWpCLEdBQWdDLFNBQWhDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGtCQUFqQixHQUFvQyxTQUFwQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBdUIsb0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLG9CQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNuQkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw0QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsbUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLHdCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixxQkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsOEJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHVDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLGtCQUFpQixJQUFqQixHQUF1QixxQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsZ0JBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ3hCRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHVCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixnQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixjQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix3QkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDYkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw4QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsdUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsV0FBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLHFCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixzQkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsZ0NBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHlDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGVBQXhDLEdBQXdELEVBQXhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGdCQUF4QyxHQUF5RCxFQUF6RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsR0FBMkQsRUFBM0Q7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsY0FBeEMsR0FBdUQsRUFBdkQ7O0FBRUEsWUFBVyxLQUFYLENBQWlCLGVBQWpCLEdBQWlDLEVBQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxFQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsRUFBcEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsRUFBaEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXdCLGNBQXhCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLDhCQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUN2QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixxQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsOEJBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZUFBeEMsR0FBd0QsRUFBeEQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZ0JBQXhDLEdBQXlELEVBQXpEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGtCQUF4QyxHQUEyRCxFQUEzRDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxjQUF4QyxHQUF1RCxFQUF2RDs7QUFFQSxZQUFXLEtBQVgsQ0FBaUIsZUFBakIsR0FBaUMsRUFBakM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsZ0JBQWpCLEdBQWtDLEVBQWxDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGtCQUFqQixHQUFvQyxFQUFwQztBQUNBLFlBQVcsS0FBWCxDQUFpQixjQUFqQixHQUFnQyxFQUFoQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBd0Isc0JBQXhCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLHlCQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUN2QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixrQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsZ0NBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsaUJBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLG9CQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGtCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixnQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixpQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsaUJBQXhCOztBQUdBLEtBQU0sV0FBVyxXQUFXLGdCQUFYLENBQTRCLE1BQTVCLENBQWpCO0FBQ0EsTUFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksU0FBUyxNQUE1QixFQUFvQyxHQUFwQyxFQUF3QztBQUNyQyxXQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsWUFBVyxhQUFYLENBQXlCLGNBQXpCLEVBQXlDLGdCQUF6QyxDQUEwRCxZQUExRCxFQUF3RSxVQUFDLENBQUQsRUFBTztBQUFBLDZCQUN0RSxFQURzRTtBQUUzRSxjQUFXLFlBQU07QUFDbEIsYUFBUyxFQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNHLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRCxJQUhELEVBR0csSUFISDtBQUlBLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBTjJFOztBQUM5RSxPQUFJLElBQUksS0FBSSxDQUFaLEVBQWUsS0FBSSxTQUFTLE1BQTVCLEVBQW9DLElBQXBDLEVBQXdDO0FBQUEsU0FBaEMsRUFBZ0M7QUFTdkM7QUFDRCxFQVhELEVBV0csS0FYSDtBQVlBLFlBQVcsYUFBWCxDQUF5QixjQUF6QixFQUF5QyxnQkFBekMsQ0FBMEQsWUFBMUQsRUFBd0UsVUFBQyxDQUFELEVBQU87QUFDOUUsT0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksU0FBUyxNQUE1QixFQUFvQyxLQUFwQyxFQUF3QztBQUNyQyxZQUFTLEdBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsWUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsRUFMRCxFQUtHLEtBTEg7O0FBUUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDdkNEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsa0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLGdDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLGlCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixpQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDYkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixrQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsZ0NBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsaUJBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLGlCQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGtCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixnQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixpQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsaUJBQXhCOztBQUVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2JEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsa0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLGdDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQTRDLE1BQTVDLENBQW1ELFdBQW5EO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLHFCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixpQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDZEQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixxQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsOEJBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsb0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLGdCQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHFCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixtQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixvQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsY0FBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDYkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixxQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsbUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsb0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLG9CQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHFCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixtQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixvQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0Isb0JBQXhCOztBQUVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2JEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIscUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLG1DQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLG9CQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixvQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDYkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixxQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsbUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsb0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLG9CQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHFCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixtQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixvQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0Isb0JBQXhCOztBQUVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2JEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIscUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLG1DQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLGlCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixvQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDYkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw4QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIscUNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLG1CQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix1QkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsaUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHlCQUF2QjtBQUNBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsV0FBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsZ0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXVCLElBQXZCO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLE9BQXhDLEdBQWdELE1BQWhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGVBQXhDLEdBQXdELE1BQXhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGdCQUF4QyxHQUF5RCxTQUF6RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsR0FBMkQsU0FBM0Q7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsY0FBeEMsR0FBdUQsU0FBdkQ7QUFDQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNBLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3JCLFVBQU8sUUFBUCxDQUFnQixJQUFoQixHQUFzQixnQkFBdEI7QUFDQTtBQUNGLEVBTEQsRUFLRSxLQUxGOztBQU9BLFFBQU8sVUFBUDtBQUNBLEM7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFDQSxJQUFNLFFBQVE7QUFDYixVQUFTLDJCQURJO0FBRWIsZ0JBQWUsaUNBRkY7QUFHYixxQkFBb0Isc0NBSFA7QUFJYixtQkFBa0Isb0NBSkw7QUFLYixpQkFBZ0Isa0NBTEg7QUFNYixzQkFBcUIsdUNBTlI7QUFPYixvQkFBbUIscUNBUE47QUFRYixxQkFBb0Isc0NBUlA7QUFTYixvQkFBbUIscUNBVE47QUFVYix5QkFBd0IsMENBVlg7QUFXYix5QkFBd0IsMENBWFg7QUFZYix5QkFBd0IsMENBWlg7QUFhYix5QkFBd0IsMENBYlg7QUFjYix5QkFBd0IsMENBZFg7QUFlYix5QkFBd0IsMENBZlg7QUFnQmIseUJBQXdCLDBDQWhCWDtBQWlCYix5QkFBd0IsMENBakJYO0FBa0JiLDBCQUF5QiwyQ0FsQlo7QUFtQmIsc0JBQXFCLHVDQW5CUjtBQW9CYiwyQkFBMEIsNENBcEJiO0FBcUJiLDJCQUEwQiw0Q0FyQmI7QUFzQmIsMkJBQTBCLDRDQXRCYjtBQXVCYiwyQkFBMEIsNENBdkJiO0FBd0JiLDJCQUEwQiw0Q0F4QmI7QUF5QmIsMkJBQTBCLDRDQXpCYjtBQTBCYiwyQkFBMEIsNENBMUJiO0FBMkJiLDJCQUEwQiw0Q0EzQmI7QUE0QmIsNEJBQTJCLDZDQTVCZDtBQTZCYix1QkFBc0Isd0NBN0JUO0FBOEJiLFlBQVcsNkJBOUJFO0FBK0JiLG9CQUFtQixxQ0EvQk47QUFnQ2IsZ0JBQWUsaUNBaENGO0FBaUNiLHFCQUFvQixzQ0FqQ1A7QUFrQ2IscUJBQW9CLHNDQWxDUDtBQW1DYixxQkFBb0Isc0NBbkNQO0FBb0NiLDJCQUEwQiw0Q0FwQ2I7QUFxQ2IscUJBQW9CLHNDQXJDUDtBQXNDYiwyQkFBMEIsNENBdENiO0FBdUNiLHFCQUFvQixzQ0F2Q1A7QUF3Q2IsY0FBYSwrQkF4Q0E7QUF5Q2IsWUFBVyw2QkF6Q0U7QUEwQ2IsaUJBQWdCLGtDQTFDSDtBQTJDYixpQkFBZ0Isa0NBM0NIO0FBNENiLGlCQUFnQixrQ0E1Q0g7QUE2Q2IsaUJBQWdCLGtDQTdDSDtBQThDYixpQkFBZ0Isa0NBOUNIO0FBK0NiLGlCQUFnQixrQ0EvQ0g7QUFnRGIsaUJBQWdCLGtDQWhESDtBQWlEYixjQUFhLCtCQWpEQTtBQWtEYixjQUFhLCtCQWxEQTtBQW1EYixjQUFhLCtCQW5EQTtBQW9EYixjQUFhLCtCQXBEQTtBQXFEYixjQUFhLCtCQXJEQTtBQXNEYixjQUFhLCtCQXREQTtBQXVEYixrQkFBaUIsbUNBdkRKO0FBd0RiLGtCQUFpQixtQ0F4REo7QUF5RGIsa0JBQWlCLG1DQXpESjtBQTBEYixrQkFBaUIsbUNBMURKO0FBMkRiLGtCQUFpQixtQ0EzREo7QUE0RGIsaUJBQWdCLGtDQTVESDtBQTZEYixpQkFBZ0Isa0NBN0RIO0FBOERiLGlCQUFnQixrQ0E5REg7QUErRGIsaUJBQWdCLGtDQS9ESDtBQWdFYixPQUFNO0FBaEVPLENBQWQ7O1FBbUVTLEssR0FBQSxLOzs7Ozs7Ozs7QUNwSVQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw2QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsc0NBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGVBQXhDLEdBQXdELEVBQXhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGdCQUF4QyxHQUF5RCxFQUF6RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsR0FBMkQsRUFBM0Q7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsY0FBeEMsR0FBdUQsRUFBdkQ7O0FBRUEsWUFBVyxLQUFYLENBQWlCLGVBQWpCLEdBQWlDLEVBQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxFQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsRUFBcEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsRUFBaEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXdCLGtCQUF4QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixjQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUN4QkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qiw2QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsc0NBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXVCLHVCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qix3QkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsbUJBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDRCQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLE9BQXhDLEdBQWdELE1BQWhEOztBQUdBLGtCQUFpQixJQUFqQixHQUF3QixXQUF4QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixJQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNoQkQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCO0FBQ0EsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCOztBQUlBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qix5QkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsa0NBQXZCO0FBQ0EsS0FBTSxxQkFBcUIsV0FBVyxhQUFYLENBQXlCLHFCQUF6QixDQUEzQjtBQUFBLEtBQ0MsY0FBYyxXQUFXLGFBQVgsQ0FBeUIsZUFBekIsQ0FEZjtBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0Isb0JBQXhCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLG9CQUF4QjtBQUNBLGFBQVksSUFBWjtBQUNBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGO0FBU0EsYUFBWSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDLENBQUQsRUFBTztBQUM1QyxVQUFRLEdBQVIsQ0FBWSxDQUFaO0FBQ0EsbUJBQWlCLElBQWpCLEdBQXdCLHVCQUF4QjtBQUNBLG1CQUFpQixJQUFqQixHQUF3QixJQUF4QjtBQUNBLFNBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsT0FBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIscUJBQWlCLEtBQWpCO0FBQ0E7QUFDRCxPQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixxQkFBaUIsS0FBakI7QUFDQTtBQUNGLEdBUkQsRUFRRSxLQVJGO0FBU0EsVUFBUSxHQUFSLENBQVksa0JBQVo7QUFDQSxFQWREOztBQWdCQSxvQkFBbUIsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDLFVBQUMsQ0FBRCxFQUFPO0FBQ25EO0FBQ0EsSUFBRSxjQUFGO0FBQ0EsTUFBRyxZQUFZLE1BQVosSUFBc0IsSUFBekIsRUFBOEI7QUFDN0IsZUFBWSxJQUFaO0FBQ0EsY0FBVyxhQUFYLENBQXlCLHlCQUF6QixFQUFvRCxLQUFwRCxDQUEwRCxhQUExRCxHQUF3RSxpQkFBeEU7QUFDQSxjQUFXLGFBQVgsQ0FBeUIseUJBQXpCLEVBQW9ELEtBQXBELENBQTBELGlCQUExRCxHQUE0RSxLQUE1RTtBQUNBLGNBQVcsYUFBWCxDQUF5Qix5QkFBekIsRUFBb0QsR0FBcEQsR0FBd0QsMEJBQXhEO0FBQ0EsR0FMRCxNQUtNLElBQUcsWUFBWSxNQUFaLElBQXNCLEtBQXpCLEVBQStCO0FBQ3BDLGVBQVksS0FBWjtBQUNBLGNBQVcsYUFBWCxDQUF5Qix5QkFBekIsRUFBb0QsS0FBcEQsQ0FBMEQsYUFBMUQsR0FBd0Usa0JBQXhFO0FBQ0EsY0FBVyxhQUFYLENBQXlCLHlCQUF6QixFQUFvRCxLQUFwRCxDQUEwRCxpQkFBMUQsR0FBNEUsS0FBNUU7QUFDQSxjQUFXLGFBQVgsQ0FBeUIseUJBQXpCLEVBQW9ELEdBQXBELEdBQXdELHlCQUF4RDtBQUNBO0FBQ0QsRUFkRDs7QUFnQkEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDekREOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsK0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLHdDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxlQUF4QyxHQUF3RCxtQ0FBeEQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZ0JBQXhDLEdBQXlELFdBQXpEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGtCQUF4QyxHQUEyRCxlQUEzRDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxjQUF4QyxHQUF1RCxTQUF2RDs7QUFFQSxZQUFXLEtBQVgsQ0FBaUIsZUFBakIsR0FBaUMsd0NBQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxXQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsYUFBcEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsT0FBaEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXdCLDZCQUF4QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qiw0QkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbENEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsK0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDhDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxlQUF4QyxHQUF3RCxFQUF4RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxnQkFBeEMsR0FBeUQsRUFBekQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0Msa0JBQXhDLEdBQTJELEVBQTNEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGNBQXhDLEdBQXVELEVBQXZEOztBQUVBLFlBQVcsS0FBWCxDQUFpQixlQUFqQixHQUFpQyxFQUFqQztBQUNBLFlBQVcsS0FBWCxDQUFpQixnQkFBakIsR0FBa0MsRUFBbEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsa0JBQWpCLEdBQW9DLEVBQXBDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGNBQWpCLEdBQWdDLEVBQWhDOztBQUVBLGtCQUFpQixJQUFqQixHQUF3Qix5QkFBeEI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsNkJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2xDRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLCtCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1Qiw2Q0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZUFBeEMsR0FBd0QsRUFBeEQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZ0JBQXhDLEdBQXlELEVBQXpEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGtCQUF4QyxHQUEyRCxFQUEzRDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxjQUF4QyxHQUF1RCxFQUF2RDs7QUFFQSxZQUFXLEtBQVgsQ0FBaUIsZUFBakIsR0FBaUMsRUFBakM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsZ0JBQWpCLEdBQWtDLEVBQWxDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGtCQUFqQixHQUFvQyxFQUFwQztBQUNBLFlBQVcsS0FBWCxDQUFpQixjQUFqQixHQUFnQyxFQUFoQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBd0IsNkJBQXhCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLHVCQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNsQ0Q7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QiwrQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsNkNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGVBQXhDLEdBQXdELEVBQXhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGdCQUF4QyxHQUF5RCxFQUF6RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsR0FBMkQsRUFBM0Q7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsY0FBeEMsR0FBdUQsRUFBdkQ7O0FBRUEsWUFBVyxLQUFYLENBQWlCLGVBQWpCLEdBQWlDLEVBQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxFQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsRUFBcEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsRUFBaEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXdCLDZCQUF4QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qiw2QkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbENEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsK0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDZDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxlQUF4QyxHQUF3RCxFQUF4RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxnQkFBeEMsR0FBeUQsRUFBekQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0Msa0JBQXhDLEdBQTJELEVBQTNEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGNBQXhDLEdBQXVELEVBQXZEOztBQUVBLFlBQVcsS0FBWCxDQUFpQixlQUFqQixHQUFpQyxFQUFqQztBQUNBLFlBQVcsS0FBWCxDQUFpQixnQkFBakIsR0FBa0MsRUFBbEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsa0JBQWpCLEdBQW9DLEVBQXBDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGNBQWpCLEdBQWdDLEVBQWhDOztBQUVBLGtCQUFpQixJQUFqQixHQUF3Qiw2QkFBeEI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsNkJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2xDRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLCtCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1Qiw2Q0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZUFBeEMsR0FBd0QsRUFBeEQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZ0JBQXhDLEdBQXlELEVBQXpEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGtCQUF4QyxHQUEyRCxFQUEzRDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxjQUF4QyxHQUF1RCxFQUF2RDs7QUFFQSxZQUFXLEtBQVgsQ0FBaUIsZUFBakIsR0FBaUMsRUFBakM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsZ0JBQWpCLEdBQWtDLEVBQWxDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGtCQUFqQixHQUFvQyxFQUFwQztBQUNBLFlBQVcsS0FBWCxDQUFpQixjQUFqQixHQUFnQyxFQUFoQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBd0IsNkJBQXhCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLDZCQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNsQ0Q7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QiwrQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsNkNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGVBQXhDLEdBQXdELEVBQXhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGdCQUF4QyxHQUF5RCxFQUF6RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsR0FBMkQsRUFBM0Q7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsY0FBeEMsR0FBdUQsRUFBdkQ7O0FBRUEsWUFBVyxLQUFYLENBQWlCLGVBQWpCLEdBQWlDLEVBQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxFQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsRUFBcEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsRUFBaEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXdCLDZCQUF4QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qiw2QkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbENEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsK0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLDZDQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxlQUF4QyxHQUF3RCxFQUF4RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxnQkFBeEMsR0FBeUQsRUFBekQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0Msa0JBQXhDLEdBQTJELEVBQTNEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGNBQXhDLEdBQXVELEVBQXZEOztBQUVBLFlBQVcsS0FBWCxDQUFpQixlQUFqQixHQUFpQyxFQUFqQztBQUNBLFlBQVcsS0FBWCxDQUFpQixnQkFBakIsR0FBa0MsRUFBbEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsa0JBQWpCLEdBQW9DLEVBQXBDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGNBQWpCLEdBQWdDLEVBQWhDOztBQUVBLGtCQUFpQixJQUFqQixHQUF3Qiw2QkFBeEI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IsNkJBQXhCOztBQUVBLFFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVSxLQUFWLEVBQWlCO0FBQ25EO0FBQ0MsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRCxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNGLEVBUkQsRUFRRSxLQVJGOztBQVVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7Ozs7OztBQ2xDRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLCtCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1Qiw2Q0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQzs7QUFFQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZUFBeEMsR0FBd0QsRUFBeEQ7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsZ0JBQXhDLEdBQXlELEVBQXpEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGtCQUF4QyxHQUEyRCxFQUEzRDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxjQUF4QyxHQUF1RCxFQUF2RDs7QUFFQSxZQUFXLEtBQVgsQ0FBaUIsZUFBakIsR0FBaUMsRUFBakM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsZ0JBQWpCLEdBQWtDLEVBQWxDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGtCQUFqQixHQUFvQyxFQUFwQztBQUNBLFlBQVcsS0FBWCxDQUFpQixjQUFqQixHQUFnQyxFQUFoQzs7QUFFQSxrQkFBaUIsSUFBakIsR0FBd0IsNkJBQXhCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLDZCQUF4Qjs7QUFFQSxRQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVUsS0FBVixFQUFpQjtBQUNuRDtBQUNDLE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0QsTUFBRyxNQUFNLE9BQU4sSUFBaUIsRUFBcEIsRUFBdUI7QUFDdEIsb0JBQWlCLEtBQWpCO0FBQ0E7QUFDRixFQVJELEVBUUUsS0FSRjs7QUFVQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNsQ0Q7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QiwrQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsNkNBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7O0FBRUEsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGVBQXhDLEdBQXdELEVBQXhEO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLGdCQUF4QyxHQUF5RCxFQUF6RDtBQUNBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsR0FBMkQsRUFBM0Q7QUFDQSxVQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsY0FBeEMsR0FBdUQsRUFBdkQ7O0FBRUEsWUFBVyxLQUFYLENBQWlCLGVBQWpCLEdBQWlDLEVBQWpDO0FBQ0EsWUFBVyxLQUFYLENBQWlCLGdCQUFqQixHQUFrQyxFQUFsQztBQUNBLFlBQVcsS0FBWCxDQUFpQixrQkFBakIsR0FBb0MsRUFBcEM7QUFDQSxZQUFXLEtBQVgsQ0FBaUIsY0FBakIsR0FBZ0MsRUFBaEM7O0FBRUEsa0JBQWlCLElBQWpCLEdBQXdCLDhCQUF4QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3Qiw2QkFBeEI7O0FBRUEsUUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVLEtBQVYsRUFBaUI7QUFDbkQ7QUFDQyxNQUFHLE1BQU0sT0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUN0QixvQkFBaUIsS0FBakI7QUFDQTtBQUNELE1BQUcsTUFBTSxPQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ3RCLG9CQUFpQixLQUFqQjtBQUNBO0FBQ0YsRUFSRCxFQVFFLEtBUkY7O0FBVUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbENEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsc0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLG9DQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDO0FBQ0EsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQTRDLEdBQTVDLENBQWdELFdBQWhEO0FBQ0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGVBQXpCOztBQUVBLFVBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsWUFBL0I7O0FBR0Esa0JBQWlCLElBQWpCLEdBQXVCLHFCQUF2QjtBQUNBLGtCQUFpQixJQUFqQixHQUF3QixpQkFBeEI7O0FBRUEsUUFBTyxVQUFQO0FBQ0EsQzs7Ozs7Ozs7O0FDbkJEOzs7Ozs7a0JBQ2UsWUFBTTtBQUNwQixLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQUEsS0FDQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQURwQjtBQUFBLEtBRUMsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGcEI7QUFHQSxZQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsc0JBQXpCO0FBQ0EsWUFBVyxTQUFYLEdBQXVCLG9DQUF2Qjs7QUFFQSxVQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLGVBQXBCLEdBQW9DLE1BQXBDOztBQUVBLFVBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsWUFBNUI7O0FBRUEsVUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQTRDLE1BQTVDLENBQW1ELFdBQW5EO0FBQ0EsWUFBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLGVBQTVCOztBQUVBLGtCQUFpQixJQUFqQixHQUF1QixxQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IscUJBQXhCOztBQUdBLEtBQU0sV0FBVyxXQUFXLGdCQUFYLENBQTRCLE1BQTVCLENBQWpCO0FBQ0EsTUFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksU0FBUyxNQUE1QixFQUFvQyxHQUFwQyxFQUF3QztBQUNyQyxXQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNGO0FBQ0QsWUFBVyxhQUFYLENBQXlCLGtCQUF6QixFQUE2QyxnQkFBN0MsQ0FBOEQsWUFBOUQsRUFBNEUsVUFBQyxDQUFELEVBQU87QUFBQSw2QkFDMUUsRUFEMEU7QUFFL0UsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0QsSUFIRCxFQUdHLElBSEg7QUFJQSxjQUFXLFlBQU07QUFDbEIsYUFBUyxFQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNHLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRCxJQUhELEVBR0csSUFISDtBQU4rRTs7QUFDbEYsT0FBSSxJQUFJLEtBQUksQ0FBWixFQUFlLEtBQUksU0FBUyxNQUE1QixFQUFvQyxJQUFwQyxFQUF3QztBQUFBLFNBQWhDLEVBQWdDO0FBU3ZDO0FBQ0QsRUFYRCxFQVdHLEtBWEg7QUFZQSxZQUFXLGFBQVgsQ0FBeUIsa0JBQXpCLEVBQTZDLGdCQUE3QyxDQUE4RCxZQUE5RCxFQUE0RSxVQUFDLENBQUQsRUFBTztBQUNsRixPQUFJLElBQUksTUFBSSxDQUFaLEVBQWUsTUFBSSxTQUFTLE1BQTVCLEVBQW9DLEtBQXBDLEVBQXdDO0FBQ3JDLFlBQVMsR0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDQSxZQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0Y7QUFDRCxFQUxELEVBS0csS0FMSDs7QUFRQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUM3Q0Q7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixzQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsb0NBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIsb0JBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLHFCQUF4Qjs7QUFHQSxLQUFNLFdBQVcsV0FBVyxnQkFBWCxDQUE0QixPQUE1QixDQUFqQjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFNBQVMsTUFBNUIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDckMsV0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFdBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDRjtBQUNELFlBQVcsYUFBWCxDQUF5QixrQkFBekIsRUFBNkMsZ0JBQTdDLENBQThELFlBQTlELEVBQTRFLFVBQUMsQ0FBRCxFQUFPO0FBQUEsNkJBQzFFLEVBRDBFO0FBRS9FLGNBQVcsWUFBTTtBQUNsQixhQUFTLEVBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0csYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNELElBSEQsRUFHRyxJQUhIO0FBSUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0EsZUFBVyxhQUFYLENBQXlCLHlDQUF6QixFQUFvRSxTQUFwRSxHQUE4RSxjQUE5RTtBQUNELElBSkQsRUFJRyxJQUpIO0FBS0EsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixPQUExQjtBQUNBLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDQSxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsZUFBVyxhQUFYLENBQXlCLHlDQUF6QixFQUFvRSxTQUFwRSxHQUE4RSxjQUE5RTtBQUNELElBUEQsRUFPRyxJQVBIO0FBUUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDQSxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsZUFBVyxhQUFYLENBQXlCLHlDQUF6QixFQUFvRSxTQUFwRSxHQUE4RSxjQUE5RTtBQUNELElBUEQsRUFPRyxJQVBIO0FBUUEsY0FBVyxZQUFNO0FBQ2xCLGFBQVMsRUFBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDRyxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE1BQTFCO0FBQ0EsYUFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLGFBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsTUFBMUI7QUFDQSxhQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTBCLE9BQTFCO0FBQ0EsZUFBVyxhQUFYLENBQXlCLHlDQUF6QixFQUFvRSxTQUFwRSxHQUE4RSxjQUE5RTtBQUNELElBUEQsRUFPRyxLQVBIO0FBM0IrRTs7QUFDbEYsT0FBSSxJQUFJLEtBQUksQ0FBWixFQUFlLEtBQUksU0FBUyxNQUE1QixFQUFvQyxJQUFwQyxFQUF3QztBQUFBLFNBQWhDLEVBQWdDO0FBa0N2QztBQUNELEVBcENELEVBb0NHLEtBcENIO0FBcUNBLFlBQVcsYUFBWCxDQUF5QixrQkFBekIsRUFBNkMsZ0JBQTdDLENBQThELFlBQTlELEVBQTRFLFVBQUMsQ0FBRCxFQUFPO0FBQ2xGLE9BQUksSUFBSSxNQUFJLENBQVosRUFBZSxNQUFJLFNBQVMsTUFBNUIsRUFBb0MsS0FBcEMsRUFBd0M7QUFDckMsWUFBUyxHQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUEwQixNQUExQjtBQUNBLFlBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBMEIsT0FBMUI7QUFDQSxjQUFXLGFBQVgsQ0FBeUIseUNBQXpCLEVBQW9FLFNBQXBFLEdBQThFLGNBQTlFO0FBQ0Y7QUFDRCxFQU5ELEVBTUcsS0FOSDs7QUFRQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNoRUQ7Ozs7OztrQkFDZSxZQUFNO0FBQ3BCLEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFBQSxLQUNDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsS0FFQyxtQkFBbUIsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUZwQjtBQUdBLFlBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixzQkFBekI7QUFDQSxZQUFXLFNBQVgsR0FBdUIsb0NBQXZCOztBQUVBLFVBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsZUFBcEIsR0FBb0MsTUFBcEM7QUFDQSxrQkFBaUIsSUFBakIsR0FBdUIscUJBQXZCO0FBQ0Esa0JBQWlCLElBQWpCLEdBQXdCLHFCQUF4Qjs7QUFFQSxRQUFPLFVBQVA7QUFDQSxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O2tCQUNlLFlBQU07QUFDcEIsS0FBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUFBLEtBQ0MsbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FEcEI7QUFBQSxLQUVDLG1CQUFtQixTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBRnBCO0FBR0EsWUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLHNCQUF6QjtBQUNBLFlBQVcsU0FBWCxHQUF1QixvQ0FBdkI7O0FBRUEsVUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFvQyxNQUFwQztBQUNBLGtCQUFpQixJQUFqQixHQUF1QixvQkFBdkI7QUFDQSxrQkFBaUIsSUFBakIsR0FBd0IscUJBQXhCOztBQUVBLFFBQU8sVUFBUDtBQUNBLEM7Ozs7O0FDWkQ7Ozs7OztBQUNBLENBQUMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBYTtBQUNiO0FBQ00sZ0JBQVcsRUFBRSxhQUFGLENBQWdCLFdBQWhCLENBQVg7QUFBQSxLQUNMLGtCQURLLEdBQ2dCLEVBQUUsYUFBRixDQUFnQixxQkFBaEIsQ0FEaEI7QUFBQSxLQUVMLGlCQUZLLEdBRWUsRUFBRSxhQUFGLENBQWdCLG9CQUFoQixDQUZmO0FBQUEsS0FHTCxhQUhLLEdBR1csRUFBRSxjQUFGLENBQWlCLGVBQWpCLENBSFg7QUFBQSxnQkFJSyxRQUFRLHVCQUFSLENBSkw7QUFBQSxLQUlKLEtBSkksWUFJSixLQUpJOztBQUtOLFVBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQyxDQUFELEVBQU87QUFDekMsSUFBRSxjQUFGO0FBQ0EscUJBQW1CLFNBQW5CLENBQTZCLE1BQTdCLENBQW9DLGNBQXBDO0FBQ0EsRUFIRDtBQUlBLG1CQUFrQixnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsVUFBQyxDQUFELEVBQU87QUFDbEQsSUFBRSxjQUFGO0FBQ0EscUJBQW1CLFNBQW5CLENBQTZCLE1BQTdCLENBQW9DLGNBQXBDO0FBQ0EsRUFIRDtBQUlBLEtBQU0sU0FBUyxTQUFULE1BQVMsQ0FBQyxLQUFELEVBQVc7QUFDekIsZ0JBQWMsU0FBZCxHQUEwQixFQUExQjtBQUNBLFVBQU8sS0FBUDtBQUNDLFFBQUssSUFBTDtBQUFVO0FBQ1QsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxPQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssV0FBTDtBQUFpQjtBQUNoQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLElBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxnQkFBTDtBQUFzQjtBQUNyQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGFBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyx1QkFBTDtBQUE2QjtBQUM1QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGtCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUsscUJBQUw7QUFBMkI7QUFDMUIsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxnQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG1CQUFMO0FBQXlCO0FBQ3hCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLHdCQUFMO0FBQThCO0FBQzdCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sbUJBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxzQkFBTDtBQUE0QjtBQUMzQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGlCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssdUJBQUw7QUFBNkI7QUFDNUIsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxrQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLHFCQUFMO0FBQTJCO0FBQzFCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0saUJBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSywyQkFBTDtBQUFpQztBQUNoQyxZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLHNCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssMkJBQUw7QUFBaUM7QUFDaEMsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxzQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDJCQUFMO0FBQWlDO0FBQ2hDLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sc0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSywyQkFBTDtBQUFpQztBQUNoQyxZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLHNCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssMkJBQUw7QUFBaUM7QUFDaEMsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxzQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDJCQUFMO0FBQWlDO0FBQ2hDLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sc0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSywyQkFBTDtBQUFpQztBQUNoQyxZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLHNCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssMkJBQUw7QUFBaUM7QUFDaEMsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxzQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDRCQUFMO0FBQWtDO0FBQ2pDLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sdUJBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyx1QkFBTDtBQUE2QjtBQUM1QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLG1CQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssNkJBQUw7QUFBbUM7QUFDbEMsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSx3QkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDZCQUFMO0FBQW1DO0FBQ2xDLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sd0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyw2QkFBTDtBQUFtQztBQUNsQyxZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLHdCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssNkJBQUw7QUFBbUM7QUFDbEMsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSx3QkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDZCQUFMO0FBQW1DO0FBQ2xDLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sd0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyw2QkFBTDtBQUFtQztBQUNsQyxZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLHdCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssNkJBQUw7QUFBbUM7QUFDbEMsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSx3QkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDZCQUFMO0FBQW1DO0FBQ2xDLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sd0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyw4QkFBTDtBQUFvQztBQUNuQyxZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLHlCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUsseUJBQUw7QUFBK0I7QUFDOUIsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxvQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGNBQUw7QUFBb0I7QUFDbkIsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxTQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssc0JBQUw7QUFBNEI7QUFDM0IsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxpQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGtCQUFMO0FBQXdCO0FBQ3ZCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sYUFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLHdCQUFMO0FBQThCO0FBQzdCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sa0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyx3QkFBTDtBQUE4QjtBQUM3QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGtCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssd0JBQUw7QUFBOEI7QUFDN0IsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSxrQkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLDBCQUFMO0FBQWdDO0FBQy9CLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sd0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyx3QkFBTDtBQUE4QjtBQUM3QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGtCQUFOLEVBQTNCLENBQVA7QUFDQTtBQUNELFFBQUssMEJBQUw7QUFBZ0M7QUFDL0IsWUFBTyxjQUFjLFdBQWQsQ0FBMkIsTUFBTSx3QkFBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLHdCQUFMO0FBQThCO0FBQzdCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sa0JBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxnQkFBTDtBQUFzQjtBQUNyQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLFdBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxjQUFMO0FBQW9CO0FBQ25CLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sU0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLG9CQUFMO0FBQTBCO0FBQ3pCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sY0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGlCQUFMO0FBQXVCO0FBQ3RCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sV0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGlCQUFMO0FBQXVCO0FBQ3RCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sV0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGlCQUFMO0FBQXVCO0FBQ3RCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sV0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGlCQUFMO0FBQXVCO0FBQ3RCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sV0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGlCQUFMO0FBQXVCO0FBQ3RCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sV0FBTixFQUEzQixDQUFQO0FBQ0E7QUFDRCxRQUFLLGlCQUFMO0FBQXVCO0FBQ3RCLFlBQU8sY0FBYyxXQUFkLENBQTJCLE1BQU0sV0FBTixFQUEzQixDQUFQO0FBQ0E7O0FBSUQsUUFBSyxxQkFBTDtBQUEyQjtBQUMxQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGVBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxxQkFBTDtBQUEyQjtBQUMxQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGVBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxxQkFBTDtBQUEyQjtBQUMxQixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGVBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxvQkFBTDtBQUEwQjtBQUN6QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGNBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxvQkFBTDtBQUEwQjtBQUN6QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGNBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxvQkFBTDtBQUEwQjtBQUN6QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGNBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0QsUUFBSyxvQkFBTDtBQUEwQjtBQUN6QixZQUFPLGNBQWMsV0FBZCxDQUEyQixNQUFNLGNBQU4sRUFBM0IsQ0FBUDtBQUNBO0FBQ0Q7QUFBUztBQUNSLFlBQU8sY0FBYyxTQUFkLEdBQTBCLDBCQUFqQztBQUNBO0FBaE1GO0FBa01BLEVBcE1EO0FBcU1BLEtBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNsQixTQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsSUFBdkI7QUFDQSxnQkFBYyxXQUFkLENBQTJCLE1BQU0sT0FBTixFQUEzQjtBQUNBLElBQUUsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMsWUFBTTtBQUN0QyxVQUFPLEVBQUUsUUFBRixDQUFXLElBQWxCO0FBQ0EsR0FGRDtBQUdBLEVBTkQ7QUFPQSxHQUFFLGdCQUFGLENBQW1CLE1BQW5CLEVBQTJCLElBQTNCO0FBQ0EsQ0E1TkQsRUE0TkcsUUE1TkgsRUE0TmEsTUE1TmIsRUE0TnFCLFFBQVEsR0E1TjdCLEUsQ0FGQTs7Ozs7Ozs7O2tCQ0FlLFlBQU07QUFDcEI7QUFtQkEsQzs7Ozs7Ozs7O0FDcEJEO2tCQUNlLFlBQU07QUFDcEI7QUFjQSxDOzs7Ozs7Ozs7a0JDaEJjLFlBQU07QUFDcEI7QUF1QkEsQzs7Ozs7Ozs7O2tCQ3hCYyxZQUFNO0FBQ3BCO0FBa0JBLEM7Ozs7Ozs7OztrQkNuQmMsWUFBTTtBQUNwQjtBQWtCQSxDOzs7Ozs7Ozs7a0JDbkJjLFlBQU07QUFDcEI7QUFpQkEsQzs7Ozs7Ozs7O2tCQ2xCYyxZQUFNO0FBQ3BCO0FBaUJBLEM7Ozs7Ozs7OztrQkNsQmMsWUFBTTtBQUNwQjtBQWlCQSxDOzs7Ozs7Ozs7a0JDbEJjLFlBQU07QUFDcEI7QUFxQkEsQzs7Ozs7Ozs7O2tCQ3RCYyxZQUFNO0FBQ3BCO0FBcUJBLEM7Ozs7Ozs7OztrQkN0QmMsWUFBTTtBQUNwQjtBQW1CQSxDOzs7Ozs7Ozs7a0JDcEJjLFlBQU07QUFDcEI7QUFvQkEsQzs7Ozs7Ozs7O2tCQ3JCYyxZQUFNO0FBQ3BCO0FBdUJBLEM7Ozs7Ozs7OztrQkN4QmMsWUFBTTtBQUNwQjtBQW1CQSxDOzs7Ozs7Ozs7a0JDcEJjLFlBQU07QUFDcEI7QUFtQkEsQzs7Ozs7Ozs7O2tCQ3BCYyxZQUFNO0FBQ3BCO0FBa0JBLEM7Ozs7Ozs7OztrQkNuQmMsWUFBTTtBQUNwQjtBQXFCQSxDOzs7Ozs7Ozs7a0JDdEJjLFlBQU07QUFDcEI7QUFvQkEsQzs7Ozs7Ozs7O2tCQ3JCYyxZQUFNO0FBQ3BCO0FBaUJBLEM7Ozs7Ozs7OztrQkNsQmMsWUFBTTtBQUNwQjtBQWdCQSxDOzs7Ozs7Ozs7a0JDakJjLFlBQU07QUFDcEI7QUFrQkEsQzs7Ozs7Ozs7O2tCQ25CYyxZQUFNO0FBQ3BCO0FBc0JBLEM7Ozs7Ozs7OztrQkN2QmMsWUFBTTtBQUNwQjtBQXVCQSxDOzs7Ozs7Ozs7a0JDeEJjLFlBQU07QUFDcEI7QUFtQkEsQzs7Ozs7Ozs7O2tCQ3BCYyxZQUFNO0FBQ3BCO0FBYUEsQzs7Ozs7Ozs7O2tCQ2RjLFlBQU07QUFDcEI7QUFXQSxDOzs7Ozs7Ozs7a0JDWmMsWUFBTTtBQUNwQjtBQWlCQSxDOzs7Ozs7Ozs7a0JDbEJjLFlBQU07QUFDcEI7QUFXQSxDOzs7Ozs7Ozs7a0JDWmMsWUFBTTtBQUNwQjtBQXVEQSxDOzs7Ozs7Ozs7a0JDeERjLFlBQU07QUFDcEI7QUFnQkEsQzs7Ozs7Ozs7O2tCQ2pCYyxZQUFNO0FBQ3BCO0FBa0JBLEM7Ozs7Ozs7OztrQkNuQmMsWUFBTTtBQUNwQjtBQWlCQSxDOzs7Ozs7Ozs7a0JDbEJjLFlBQU07QUFDcEI7QUFpQkEsQzs7Ozs7Ozs7O2tCQ2xCYyxZQUFNO0FBQ3BCO0FBaUJBLEM7Ozs7Ozs7OztrQkNsQmMsWUFBTTtBQUNwQjtBQWtCQSxDOzs7Ozs7Ozs7a0JDbkJjLFlBQU07QUFDcEI7QUFhQSxDOzs7Ozs7Ozs7a0JDZGMsWUFBTTtBQUNwQjtBQWFBLEM7Ozs7Ozs7OztrQkNkYyxZQUFNO0FBQ3BCO0FBYUEsQzs7Ozs7Ozs7O2tCQ2RjLFlBQU07QUFDcEI7QUFhQSxDOzs7Ozs7Ozs7a0JDZGMsWUFBTTtBQUNwQjtBQWNBLEM7Ozs7Ozs7OztrQkNmYyxZQUFNO0FBQ3BCO0FBY0EsQzs7Ozs7Ozs7O2tCQ2ZjLFlBQU07QUFDcEI7QUFnQkEsQzs7Ozs7Ozs7O2tCQ2pCYyxZQUFNO0FBQ3BCO0FBbUJBLEM7Ozs7Ozs7OztrQkNwQmMsWUFBTTtBQUNwQjtBQUdBLEM7Ozs7Ozs7OztrQkNKYyxZQUFNO0FBQ3BCO0FBbUJBLEM7Ozs7Ozs7OztrQkNwQmMsWUFBTTtBQUNwQjtBQThRQSxDOzs7Ozs7Ozs7a0JDL1FjLFlBQU07QUFDcEI7QUFXQSxDOzs7Ozs7Ozs7a0JDWmMsWUFBTTtBQUNwQjtBQW9CQSxDOzs7Ozs7Ozs7a0JDckJjLFlBQU07QUFDcEI7QUE0QkEsQzs7Ozs7Ozs7O2tCQzdCYyxZQUFNO0FBQ3BCO0FBbUJBLEM7Ozs7Ozs7OztrQkNwQmMsWUFBTTtBQUNwQjtBQVdBLEM7Ozs7Ozs7OztrQkNaYyxZQUFNO0FBQ3BCO0FBb0JBLEM7Ozs7Ozs7OztrQkNyQmMsWUFBTTtBQUNwQjtBQWlCQSxDOzs7Ozs7Ozs7a0JDbEJjLFlBQU07QUFDcEI7QUFxQkEsQzs7Ozs7Ozs7O2tCQ3RCYyxZQUFNO0FBQ3BCO0FBc0JBLEM7Ozs7Ozs7OztrQkN2QmMsWUFBTTtBQUNwQjtBQW9CQSxDOzs7Ozs7Ozs7a0JDckJjLFlBQU07QUFDcEI7QUFpQkEsQzs7Ozs7Ozs7O2tCQ2xCYyxZQUFNO0FBQ3BCO0FBc0JBLEM7Ozs7Ozs7OztrQkN2QmMsWUFBTTtBQUNwQjtBQXFCQSxDOzs7Ozs7Ozs7a0JDdEJjLFlBQU07QUFDcEI7QUFvQkEsQzs7Ozs7Ozs7O2tCQ3JCYyxZQUFNO0FBQ3BCO0FBYUEsQzs7Ozs7Ozs7O2tCQ2RjLFlBQU07QUFDcEI7QUFtQkEsQzs7Ozs7Ozs7O2tCQ3BCYyxZQUFNO0FBQ3BCO0FBcUJBLEM7Ozs7Ozs7OztrQkN0QmMsWUFBTTtBQUNwQjtBQUNBLEM7Ozs7Ozs7OztrQkNGYyxZQUFNO0FBQ3BCO0FBQ0EsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkUyBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UyXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2N1aWRhci1leHRyZW1pZGFkZXNcIlxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2UxMCBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTEwLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTEwKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlc1wiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlOVwiXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTIgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UyLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTIoKTtcblx0Y29uc3QgYW50ZXNEZVByYWN0aWNhciA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnRlc0RlUHJhY3RpY2FyIC5hbnRlc0RlUHJhY3RpY2FyLWltZ1wiKVxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTNcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWRcIlxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnRlc0RlUHJhY3RpY2FyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG5cdFx0YW50ZXNEZVByYWN0aWNhci5zdHlsZS53aWR0aD1cIlwiXG5cdFx0YW50ZXNEZVByYWN0aWNhci5zcmM9XCIuL2ltZy9zdmcvbWVuQW50ZXNEZVByYWN0aWNhci5zdmdcIlxuXHR9LCBmYWxzZSlcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FudGVzRGVQcmFjdGljYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuXHRcdGFudGVzRGVQcmFjdGljYXIuc3R5bGUud2lkdGg9XCIzMi4wNSVcIlxuXHRcdGFudGVzRGVQcmFjdGljYXIuc3JjPVwiLi9pbWcvc3ZnL21lbkFudGVzRGVQcmFjdGljYXIyLnN2Z1wiXG5cdH0sIGZhbHNlKVxuXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTMgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UzLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTMoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTRcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTJcIlxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U0IGZyb20gXCIuLi92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNC52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U0KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U1XCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UzXCJcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgYWN0aXZhRXh0cmVtaWRhZFNQYWdlNSBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTUudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZhRXh0cmVtaWRhZFNQYWdlNSgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlNlwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlNFwiXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTYgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U2LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTYoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTdcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTVcIlxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U3IGZyb20gXCIuLi92aXN0YXMvYWN0aXZhRXh0cmVtaWRhZFNQYWdlNy52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmFFeHRyZW1pZGFkUy1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBhY3RpdmFFeHRyZW1pZGFkU1BhZ2U3KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U4XCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U2XCJcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgYWN0aXZhRXh0cmVtaWRhZFNQYWdlOCBmcm9tIFwiLi4vdmlzdGFzL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTgudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZhRXh0cmVtaWRhZFNQYWdlOCgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXHRcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlOVwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9hY3RpdmEtZXh0cmVtaWRhZC1wYWdlN1wiXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTkgZnJvbSBcIi4uL3Zpc3Rhcy9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U5LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFjdGl2YUV4dHJlbWlkYWRTUGFnZTkoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlx0XG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYWN0aXZhLWV4dHJlbWlkYWQtcGFnZTEwXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U4XCJcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgYW50ZWJyYXpvRXh0cmVtaWRhZGVzIGZyb20gXCIuLi92aXN0YXMvYW50ZWJyYXpvLWV4dHJlbWlkYWQudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW50ZWJyYXpvRXh0cmVtaWRhZGVzLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGFudGVicmF6b0V4dHJlbWlkYWRlcygpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvbXVuaWVjYS1leHRyZW1pZGFkXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2NvZG8tZXh0cmVtaWRhZFwiXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhbmRhRWxhc3RpY2EtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQmFuZGFFbGFzdGljYVZpZXcoKTtcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhMVwiKSxcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTIgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2EyXCIpXG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcdFxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2UyXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL21hbnRlbi1tb3ZpbWllbnRvc1wiXG5cblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTEuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHR9LCBmYWxzZSlcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdH0sIGZhbHNlKVxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBCYW5kYUVsYXN0aWNhUGFnZTJWaWV3IGZyb20gXCIuLi92aXN0YXMvYmFuZGFFbGFzdGljYVBhZ2UyLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhbmRhRWxhc3RpY2EtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQmFuZGFFbGFzdGljYVBhZ2UyVmlldygpO1xuXHRjb25zdCBncmFwaGljQmFuZGFFbGFzdGljYTEgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMi0xXCIpLFxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UyLTJcIiksXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2EzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTItM1wiKSxcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTQgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMi00XCIpXG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTNcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYmFuZGEtZWxhc3RpY2FcIlxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncGJcIilcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0fVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2UyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICB9LCAxMDAwKVxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDIwMDApXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsyXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHQgICAgfSwgMzAwMClcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzNdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICB9LCA0MDAwKVxuXHRcdH1cblx0fSwgZmFsc2UpXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0XHR9XG5cdH0sIGZhbHNlKVxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBCYW5kYUVsYXN0aWNhUGFnZTNWaWV3IGZyb20gXCIuLi92aXN0YXMvYmFuZGFFbGFzdGljYVBhZ2UzLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhbmRhRWxhc3RpY2EtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQmFuZGFFbGFzdGljYVBhZ2UzVmlldygpO1xuXHRjb25zdCBncmFwaGljQmFuZGFFbGFzdGljYTEgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMy0xXCIpLFxuXHRcdGdyYXBoaWNCYW5kYUVsYXN0aWNhMiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UzLTJcIilcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNFwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlMlwiXG5cdGNvbnN0IGFsbEltYWdlID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdwYlwiKVxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbiAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHR9XG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDEwMDApXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHQgICAgfSwgMjAwMClcblx0XHR9XG5cdH0sIGZhbHNlKVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2UzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdFx0fVxuXHR9LCBmYWxzZSlcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U0VmlldyBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNC52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYW5kYUVsYXN0aWNhLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNFZpZXcoKTtcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtMVwiKSxcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTIgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC0yXCIpLFxuXHRcdGJhbmRhc0VsYXN0aWNhc0xpc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhc0VsYXN0aWNhc0xpc3RzXCIpXG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTQtMlwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlM1wiXG5cdGNvbnN0IGFsbEltYWdlID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdwYlwiKVxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbiAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHR9XG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTRcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDEwMDApXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHQgICAgfSwgMjAwMClcblx0XHR9XG5cdH0sIGZhbHNlKVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2U0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdFx0fVxuXHR9LCBmYWxzZSlcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U0UGFydGUyVmlldyBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMi52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYW5kYUVsYXN0aWNhLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMlZpZXcoKTtcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtMVwiKSxcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTIgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC0yXCIpLFxuXHRcdGJhbmRhc0VsYXN0aWNhc0xpc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhc0VsYXN0aWNhc0xpc3RzXCIpXG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTVcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTRcIlxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncGJcIilcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0fVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2U0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICB9LCAxMDAwKVxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDIwMDApXG5cdFx0fVxuXHR9LCBmYWxzZSlcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FQYWdlNFwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XG5cdCAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHRcdH1cblx0fSwgZmFsc2UpXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNVZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9iYW5kYUVsYXN0aWNhUGFnZTUudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmFuZGFFbGFzdGljYS1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBCYW5kYUVsYXN0aWNhUGFnZTVWaWV3KCk7XG5cdGNvbnN0IGdyYXBoaWNCYW5kYUVsYXN0aWNhMSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U1LTFcIiksXG5cdFx0Z3JhcGhpY0JhbmRhRWxhc3RpY2EyID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTUtMlwiKSxcblx0XHRiYW5kYXNFbGFzdGljYXNMaXN0cyA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYXNFbGFzdGljYXNMaXN0c1wiKVxuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U1LTJcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTQtMlwiXG5cdGNvbnN0IGFsbEltYWdlID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdwYlwiKVxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbiAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHR9XG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5kYUVsYXN0aWNhUGFnZTVcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDEwMDApXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHQgICAgfSwgMjAwMClcblx0XHR9XG5cdH0sIGZhbHNlKVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2U1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdFx0fVxuXHR9LCBmYWxzZSlcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgQmFuZGFFbGFzdGljYVBhZ2U1UGFydGUyVmlldyBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMi52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYW5kYUVsYXN0aWNhLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMlZpZXcoKTtcblx0Y29uc3QgZ3JhcGhpY0JhbmRhRWxhc3RpY2ExID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTUtM1wiKSxcblx0XHRncmFwaGljQmFuZGFFbGFzdGljYTIgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNS00XCIpLFxuXHRcdGJhbmRhc0VsYXN0aWNhc0xpc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhc0VsYXN0aWNhc0xpc3RzXCIpXG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTZcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTVcIlxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncGJcIilcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0fVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFuZGFFbGFzdGljYVBhZ2U1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICB9LCAxMDAwKVxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDIwMDApXG5cdFx0fVxuXHR9LCBmYWxzZSlcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhbmRhRWxhc3RpY2FQYWdlNVwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XG5cdCAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHRcdH1cblx0fSwgZmFsc2UpXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNiBmcm9tIFwiLi4vdmlzdGFzL2JhbmRhRWxhc3RpY2FQYWdlNi52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYW5kYUVsYXN0aWNhLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEJhbmRhRWxhc3RpY2FQYWdlNigpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2N1aWRhLWJyYXpvc1wiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlNS0yXCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgQ2xhcm9UaXBzUGFnZTEgZnJvbSBcIi4uL3Zpc3Rhcy9jbGFyb1RpcHNQYWdlMS52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbGFyb1RpcHMtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQ2xhcm9UaXBzUGFnZTEoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2NsYXJvLXRpcHMtcGFnZTJcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvdXNvLWNlbHVsYXItcGFnZTNcIlxuICBcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IENsYXJvVGlwc1BhZ2UyIGZyb20gXCIuLi92aXN0YXMvY2xhcm9UaXBzUGFnZTIudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xhcm9UaXBzLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IENsYXJvVGlwc1BhZ2UyKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9jbGFyby10aXBzLXBhZ2UzXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2NsYXJvLXRpcHMtcGFnZTFcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwibm9uZVwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cImluaGVyaXRcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiaW5oZXJpdFwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiaW5oZXJpdFwiXG4gIFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgQ2xhcm9UaXBzUGFnZTMgZnJvbSBcIi4uL3Zpc3Rhcy9jbGFyb1RpcHNQYWdlMy52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbGFyb1RpcHMtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQ2xhcm9UaXBzUGFnZTMoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwibm9uZVwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cImluaGVyaXRcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiaW5oZXJpdFwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiaW5oZXJpdFwiXG5cblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9jbGFyby10aXBzLXBhZ2U0XCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2NsYXJvLXRpcHMtcGFnZTJcIlxuICBcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IENsYXJvVGlwc1BhZ2U0IGZyb20gXCIuLi92aXN0YXMvY2xhcm9UaXBzUGFnZTQudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xhcm9UaXBzLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IENsYXJvVGlwc1BhZ2U0KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIm5vbmVcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJpbmhlcml0XCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cImluaGVyaXRcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cImluaGVyaXRcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2NsYXJvLXRpcHMtcGFnZTRcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvY2xhcm8tdGlwcy1wYWdlM1wiXG4gIFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgY29kb0V4dHJlbWlkYWRlcyBmcm9tIFwiLi4vdmlzdGFzL2NvZG8tZXh0cmVtaWRhZC52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb2RvRXh0cmVtaWRhZGVzLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGNvZG9FeHRyZW1pZGFkZXMoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FudGVicmF6by1leHRyZW1pZGFkXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2hvbWJyby1leHRyZW1pZGFkXCJcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblx0XG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBjb25vY2VFeHRyZW1pZGFkZXMgZnJvbSBcIi4uL3Zpc3Rhcy9jb25vY2UtZXh0cmVtaWRhZGVzLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbm9jZUV4dHJlbWlkYWRlcy1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBjb25vY2VFeHRyZW1pZGFkZXMoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2hvbWJyby1leHRyZW1pZGFkXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3F1ZS1hY3RpdmF0ZVwiXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEN1aWRhQnJhem9zIGZyb20gXCIuLi92aXN0YXMvY3VpZGFCcmF6b3Mudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY3VpZGFCcmF6b3MtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gQ3VpZGFCcmF6b3MoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U2XCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgY3VpZGFyRXh0cmVtaWRhZGVzIGZyb20gXCIuLi92aXN0YXMvY3VpZGFyLWV4dHJlbWlkYWRlcy52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gY3VpZGFyRXh0cmVtaWRhZGVzKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjY2RkZWZjNDZcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2FjdGl2YS1leHRyZW1pZGFkXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL211bmllY2EtZXh0cmVtaWRhZFwiXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgZWplcmNpdGFFeHRyZW1pZGFkZXNWaWV3IGZyb20gXCIuLi92aXN0YXMvZWplcmNpdGFFeHRyZW1pZGFkZXMudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWplcmNpdGFFeHRyZW1pZGFkZXMtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gZWplcmNpdGFFeHRyZW1pZGFkZXNWaWV3KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VsaWdlLWdvbWFcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTEwXCI7XG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IGVsaWdlR29tYVZpZXcgZnJvbSBcIi4uL3Zpc3Rhcy9lbGlnZUdvbWEudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWxpZ2VHb21hLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGVsaWdlR29tYVZpZXcoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvbWFudGVuLW1vdmltaWVudG9zXCI7XG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lamVyY2l0YS1leHRyZW1pZGFkZXNcIjtcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgRW5DYXNhUGFnZTEgZnJvbSBcIi4uL3Zpc3Rhcy9lbkNhc2FQYWdlMS52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbkNhc2EtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW5DYXNhUGFnZTEoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi1jYXNhLXBhZ2UyXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLXRyYWJham8tcGFnZThcIlxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBFbkNhc2FQYWdlMiBmcm9tIFwiLi4vdmlzdGFzL2VuQ2FzYVBhZ2UyLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuQ2FzYS1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbkNhc2FQYWdlMigpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLWNhc2EtcGFnZTNcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tY2FzYS1wYWdlMVwiXG5cblxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lY3BcIilcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0fVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW5DYXNhUGFnZTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDEwMDApXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHQgICAgfSwgMjAwMClcblx0XHR9XG5cdH0sIGZhbHNlKVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW5DYXNhUGFnZTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0XHR9XG5cdH0sIGZhbHNlKVxuXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEVuQ2FzYVBhZ2UzIGZyb20gXCIuLi92aXN0YXMvZW5DYXNhUGFnZTMudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5DYXNhLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVuQ2FzYVBhZ2UzKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tY2FzYS1wYWdlNFwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi1jYXNhLXBhZ2UyXCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgRW5DYXNhUGFnZTQgZnJvbSBcIi4uL3Zpc3Rhcy9lbkNhc2FQYWdlNC52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbkNhc2EtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW5DYXNhUGFnZTQoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi1jYXNhLXBhZ2U1XCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLWNhc2EtcGFnZTNcIlxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBFbkNhc2FQYWdlNSBmcm9tIFwiLi4vdmlzdGFzL2VuQ2FzYVBhZ2U1LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuQ2FzYS1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbkNhc2FQYWdlNSgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLWNhc2EtcGFnZTZcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tY2FzYS1wYWdlNFwiXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEVuQ2FzYVBhZ2U2IGZyb20gXCIuLi92aXN0YXMvZW5DYXNhUGFnZTYudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5DYXNhLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVuQ2FzYVBhZ2U2KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInRyaWFuZ3VsZVwiKVxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy91c28tY2VsdWxhci1wYWdlMVwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi1jYXNhLXBhZ2U1XCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgRW50cmFiYWpvIGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuVHJhYmFqby1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbnRyYWJham8oKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvLXBhZ2UyXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2N1aWRhLWJyYXpvc1wiXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEVudHJhYmFqb1BhZ2UyIGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvUGFnZTIudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5UcmFiYWpvLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVudHJhYmFqb1BhZ2UyKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tdHJhYmFqby1wYWdlM1wiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi10cmFiYWpvXCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgRW50cmFiYWpvUGFnZTMgZnJvbSBcIi4uL3Zpc3Rhcy9lblRyYWJham9QYWdlMy52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlblRyYWJham8tY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW50cmFiYWpvUGFnZTMoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvLXBhZ2U0XCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLXRyYWJham8tcGFnZTJcIlxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBFbnRyYWJham9QYWdlNCBmcm9tIFwiLi4vdmlzdGFzL2VuVHJhYmFqb1BhZ2U0LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuVHJhYmFqby1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbnRyYWJham9QYWdlNCgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLXRyYWJham8tcGFnZTVcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tdHJhYmFqby1wYWdlM1wiXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEVudHJhYmFqb1BhZ2U1IGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvUGFnZTUudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5UcmFiYWpvLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVudHJhYmFqb1BhZ2U1KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tdHJhYmFqby1wYWdlNlwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi10cmFiYWpvLXBhZ2U0XCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgRW50cmFiYWpvUGFnZTYgZnJvbSBcIi4uL3Zpc3Rhcy9lblRyYWJham9QYWdlNi52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlblRyYWJham8tY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gRW50cmFiYWpvUGFnZTYoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy9lbi10cmFiYWpvLXBhZ2U3XCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VuLXRyYWJham8tcGFnZTVcIlxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBFbnRyYWJham9QYWdlNyBmcm9tIFwiLi4vdmlzdGFzL2VuVHJhYmFqb1BhZ2U3LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVuVHJhYmFqby1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBFbnRyYWJham9QYWdlNygpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2VuLXRyYWJham8tcGFnZThcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvZW4tdHJhYmFqby1wYWdlNlwiXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IEVudHJhYmFqb1BhZ2U4IGZyb20gXCIuLi92aXN0YXMvZW5UcmFiYWpvUGFnZTgudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5UcmFiYWpvLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IEVudHJhYmFqb1BhZ2U4KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvZW4tY2FzYS1wYWdlMVwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi10cmFiYWpvLXBhZ2U3XCJcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgaG9tYnJvRXh0cmVtaWRhZGVzIGZyb20gXCIuLi92aXN0YXMvaG9tYnJvLWV4dHJlbWlkYWQudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaG9tYnJvRXh0cmVtaWRhZGVzLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IGhvbWJyb0V4dHJlbWlkYWRlcygpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvY29kby1leHRyZW1pZGFkXCJcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2Nvbm9jZS1leHRyZW1pZGFkZXNcIlxuXHRcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi4vdmlzdGFzL2hvbWUudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXNwYWNlXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gaG9tZSgpO1xuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNjZGRlZmM0NlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL3F1ZS1hY3RpdmF0ZVwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZj0gXCIjL1wiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwibm9uZVwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJpbmhlcml0XCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiaW5oZXJpdFwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiaW5oZXJpdFwiXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdFx0aWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHR3aW5kb3cubG9jYXRpb24uaHJlZj0gXCIjL3F1ZS1hY3RpdmF0ZVwiXG5cdCAgfVxuXHR9LGZhbHNlKTtcblx0XG5cdHJldHVybiBkaXZFbGVtZW50O1xufVxuXG5cbi8qbmV4dFByZXNlbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdGNvbnNvbGUubG9nKFwiTmV4dCBQcmVzZW50YXRpb25cIilcbn0pXG5wcmV2UHJlc2VudGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KClcblx0Y29uc29sZS5sb2coXCJQcmV2IFByZXNlbnRhdGlvblwiKVxufSkqLyIsImltcG9ydCBQb3J0YWRhIGZyb20gXCIuL3BvcnRhZGEuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFF1ZUVzQWN0aXZhdGUgZnJvbSBcIi4vcXVlLWVzLWFjdGl2YXRlLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBDb25vY2VFeHRyZW1pZGFkZXMgZnJvbSBcIi4vY29ub2NlLWV4dHJlbWlkYWRlcy5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgSG9tYnJvRXh0cmVtaWRhZCBmcm9tIFwiLi9ob21icm8tZXh0cmVtaWRhZC5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQ29kb0V4dHJlbWlkYWQgZnJvbSBcIi4vY29kby1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBBbnRlYnJhem9FeHRyZW1pZGFkIGZyb20gXCIuL2FudGVicmF6by1leHRyZW1pZGFkLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBNdW5pZWNhRXh0cmVtaWRhZCBmcm9tIFwiLi9tdW5pZWNhLWV4dHJlbWlkYWQuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEN1aWRhckV4dHJlbWlkYWRlcyBmcm9tIFwiLi9jdWlkYXItZXh0cmVtaWRhZGVzLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkUyBmcm9tIFwiLi9hY3RpdmFFeHRyZW1pZGFkUy5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQWN0aXZhRXh0cmVtaWRhZFNQYWdlMiBmcm9tIFwiLi9hY3RpdmFFeHRyZW1pZGFkU1BhZ2UyLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkU1BhZ2UzIGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTMuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTQgZnJvbSBcIi4vYWN0aXZhRXh0cmVtaWRhZFNQYWdlNC5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQWN0aXZhRXh0cmVtaWRhZFNQYWdlNSBmcm9tIFwiLi9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U1LmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkU1BhZ2U2IGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTYuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTcgZnJvbSBcIi4vYWN0aXZhRXh0cmVtaWRhZFNQYWdlNy5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQWN0aXZhRXh0cmVtaWRhZFNQYWdlOCBmcm9tIFwiLi9hY3RpdmFFeHRyZW1pZGFkU1BhZ2U4LmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBBY3RpdmFFeHRyZW1pZGFkU1BhZ2U5IGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTkuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTEwIGZyb20gXCIuL2FjdGl2YUV4dHJlbWlkYWRTUGFnZTEwLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBSZWxhamFFeHRyZW1pZGFkZXNTIGZyb20gXCIuL3JlbGFqYUV4dHJlbWlkYWRlc1MuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMiBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMyBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTMuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNCBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNSBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTUuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNiBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTYuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNyBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOCBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTguY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOSBmcm9tIFwiLi9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTkuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAgZnJvbSBcIi4vcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMC5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRWplcmNpdGFFeHRyZW1pZGFkZXMgZnJvbSBcIi4vZWplcmNpdGFFeHRyZW1pZGFkZXMuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEVsaWdlR29tYSBmcm9tIFwiLi9lbGlnZUdvbWEuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IE1hbnRlbk1vdmltaWVudG9zIGZyb20gXCIuL21hbnRlbk1vdmltaWVudG9zLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBCYW5kYUVsYXN0aWNhIGZyb20gXCIuL2JhbmRhRWxhc3RpY2EuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlMiBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTIuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlMyBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTMuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNCBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTQuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMiBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTRQYXJ0ZTIuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNSBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTUuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMiBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTVQYXJ0ZTIuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEJhbmRhRWxhc3RpY2FQYWdlNiBmcm9tIFwiLi9iYW5kYUVsYXN0aWNhUGFnZTYuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEN1aWRhQnJhem9zIGZyb20gXCIuL2N1aWRhQnJhem9zLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFblRyYWJham8gZnJvbSBcIi4vZW5UcmFiYWpvLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFblRyYWJham9QYWdlMiBmcm9tIFwiLi9lblRyYWJham9QYWdlMi5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRW5UcmFiYWpvUGFnZTMgZnJvbSBcIi4vZW5UcmFiYWpvUGFnZTMuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEVuVHJhYmFqb1BhZ2U0IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U0LmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFblRyYWJham9QYWdlNSBmcm9tIFwiLi9lblRyYWJham9QYWdlNS5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRW5UcmFiYWpvUGFnZTYgZnJvbSBcIi4vZW5UcmFiYWpvUGFnZTYuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEVuVHJhYmFqb1BhZ2U3IGZyb20gXCIuL2VuVHJhYmFqb1BhZ2U3LmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFblRyYWJham9QYWdlOCBmcm9tIFwiLi9lblRyYWJham9QYWdlOC5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRW5DYXNhUGFnZTEgZnJvbSBcIi4vZW5DYXNhUGFnZTEuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEVuQ2FzYVBhZ2UyIGZyb20gXCIuL2VuQ2FzYVBhZ2UyLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFbkNhc2FQYWdlMyBmcm9tIFwiLi9lbkNhc2FQYWdlMy5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRW5DYXNhUGFnZTQgZnJvbSBcIi4vZW5DYXNhUGFnZTQuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEVuQ2FzYVBhZ2U1IGZyb20gXCIuL2VuQ2FzYVBhZ2U1LmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFbkNhc2FQYWdlNiBmcm9tIFwiLi9lbkNhc2FQYWdlNi5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2UxIGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlMS5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2UyIGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlMi5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2UzIGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlMy5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2U0IGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlNC5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVXNvQ2VsdWxhclBhZ2U1IGZyb20gXCIuL3Vzb0NlbHVsYXJQYWdlNS5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQ2xhcm9UaXBzUGFnZTEgZnJvbSBcIi4vY2xhcm9UaXBzUGFnZTEuY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IENsYXJvVGlwc1BhZ2UyIGZyb20gXCIuL2NsYXJvVGlwc1BhZ2UyLmNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBDbGFyb1RpcHNQYWdlMyBmcm9tIFwiLi9jbGFyb1RpcHNQYWdlMy5jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQ2xhcm9UaXBzUGFnZTQgZnJvbSBcIi4vY2xhcm9UaXBzUGFnZTQuY29udHJvbGxlci5qc1wiO1xuXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lLmNvbnRyb2xsZXIuanNcIjtcbmNvbnN0IHBhZ2VzID0ge1xuXHRQb3J0YWRhOiBQb3J0YWRhLFxuXHRRdWVFc0FjdGl2YXRlOiBRdWVFc0FjdGl2YXRlLFxuXHRDb25vY2VFeHRyZW1pZGFkZXM6IENvbm9jZUV4dHJlbWlkYWRlcyxcblx0SG9tYnJvRXh0cmVtaWRhZDogSG9tYnJvRXh0cmVtaWRhZCxcblx0Q29kb0V4dHJlbWlkYWQ6IENvZG9FeHRyZW1pZGFkLFxuXHRBbnRlYnJhem9FeHRyZW1pZGFkOiBBbnRlYnJhem9FeHRyZW1pZGFkLFxuXHRNdW5pZWNhRXh0cmVtaWRhZDogTXVuaWVjYUV4dHJlbWlkYWQsXG5cdEN1aWRhckV4dHJlbWlkYWRlczogQ3VpZGFyRXh0cmVtaWRhZGVzLFxuXHRBY3RpdmFFeHRyZW1pZGFkUzogQWN0aXZhRXh0cmVtaWRhZFMsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTI6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTIsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTM6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTMsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTQ6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTQsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTU6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTUsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTY6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTYsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTc6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTcsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTg6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTgsXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTk6IEFjdGl2YUV4dHJlbWlkYWRTUGFnZTksXG5cdEFjdGl2YUV4dHJlbWlkYWRTUGFnZTEwOiBBY3RpdmFFeHRyZW1pZGFkU1BhZ2UxMCxcblx0UmVsYWphRXh0cmVtaWRhZGVzUzogUmVsYWphRXh0cmVtaWRhZGVzUyxcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UyOiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTIsXG5cdFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMzogUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UzLFxuXHRSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQ6IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNCxcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTUsXG5cdFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNjogUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U2LFxuXHRSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTc6IFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNyxcblx0UmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4OiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTgsXG5cdFJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOTogUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LFxuXHRSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTEwOiBSZWxhamFFeHRyZW1pZGFkZXNTUGFnZTEwLFxuXHRFamVyY2l0YUV4dHJlbWlkYWRlczogRWplcmNpdGFFeHRyZW1pZGFkZXMsXG5cdEVsaWdlR29tYTogRWxpZ2VHb21hLFxuXHRNYW50ZW5Nb3ZpbWllbnRvczogTWFudGVuTW92aW1pZW50b3MsXG5cdEJhbmRhRWxhc3RpY2E6IEJhbmRhRWxhc3RpY2EsXG5cdEJhbmRhRWxhc3RpY2FQYWdlMjogQmFuZGFFbGFzdGljYVBhZ2UyLFxuXHRCYW5kYUVsYXN0aWNhUGFnZTM6IEJhbmRhRWxhc3RpY2FQYWdlMyxcblx0QmFuZGFFbGFzdGljYVBhZ2U0OiBCYW5kYUVsYXN0aWNhUGFnZTQsXG5cdEJhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMjogQmFuZGFFbGFzdGljYVBhZ2U0UGFydGUyLFxuXHRCYW5kYUVsYXN0aWNhUGFnZTU6IEJhbmRhRWxhc3RpY2FQYWdlNSxcblx0QmFuZGFFbGFzdGljYVBhZ2U1UGFydGUyOiBCYW5kYUVsYXN0aWNhUGFnZTVQYXJ0ZTIsXG5cdEJhbmRhRWxhc3RpY2FQYWdlNjogQmFuZGFFbGFzdGljYVBhZ2U2LFxuXHRDdWlkYUJyYXpvczogQ3VpZGFCcmF6b3MsXG5cdEVuVHJhYmFqbzogRW5UcmFiYWpvLFxuXHRFblRyYWJham9QYWdlMjogRW5UcmFiYWpvUGFnZTIsXG5cdEVuVHJhYmFqb1BhZ2UzOiBFblRyYWJham9QYWdlMyxcblx0RW5UcmFiYWpvUGFnZTQ6IEVuVHJhYmFqb1BhZ2U0LFxuXHRFblRyYWJham9QYWdlNTogRW5UcmFiYWpvUGFnZTUsXG5cdEVuVHJhYmFqb1BhZ2U2OiBFblRyYWJham9QYWdlNixcblx0RW5UcmFiYWpvUGFnZTc6IEVuVHJhYmFqb1BhZ2U3LFxuXHRFblRyYWJham9QYWdlODogRW5UcmFiYWpvUGFnZTgsXG5cdEVuQ2FzYVBhZ2UxOiBFbkNhc2FQYWdlMSxcblx0RW5DYXNhUGFnZTI6IEVuQ2FzYVBhZ2UyLFxuXHRFbkNhc2FQYWdlMzogRW5DYXNhUGFnZTMsXG5cdEVuQ2FzYVBhZ2U0OiBFbkNhc2FQYWdlNCxcblx0RW5DYXNhUGFnZTU6IEVuQ2FzYVBhZ2U1LFxuXHRFbkNhc2FQYWdlNjogRW5DYXNhUGFnZTYsXG5cdFVzb0NlbHVsYXJQYWdlMTogVXNvQ2VsdWxhclBhZ2UxLFxuXHRVc29DZWx1bGFyUGFnZTI6IFVzb0NlbHVsYXJQYWdlMixcblx0VXNvQ2VsdWxhclBhZ2UzOiBVc29DZWx1bGFyUGFnZTMsXG5cdFVzb0NlbHVsYXJQYWdlNDogVXNvQ2VsdWxhclBhZ2U0LFxuXHRVc29DZWx1bGFyUGFnZTU6IFVzb0NlbHVsYXJQYWdlNSxcblx0Q2xhcm9UaXBzUGFnZTE6IENsYXJvVGlwc1BhZ2UxLFxuXHRDbGFyb1RpcHNQYWdlMjogQ2xhcm9UaXBzUGFnZTIsXG5cdENsYXJvVGlwc1BhZ2UzOiBDbGFyb1RpcHNQYWdlMyxcblx0Q2xhcm9UaXBzUGFnZTQ6IENsYXJvVGlwc1BhZ2U0LFxuXHRIb21lOiBIb21lXG59XG5cbmV4cG9ydCB7IHBhZ2VzIH0iLCJpbXBvcnQgbWFudGVuTW92aW1pZW50b3NWaWV3IGZyb20gXCIuLi92aXN0YXMvbWFudGVuTW92aW1pZW50b3Mudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWFudGVuTW92aW1pZW50b3MtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gbWFudGVuTW92aW1pZW50b3NWaWV3KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYmFuZGEtZWxhc3RpY2FcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VsaWdlLWdvbWFcIjtcblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgbXVuaWVjYUV4dHJlbWlkYWQgZnJvbSBcIi4uL3Zpc3Rhcy9tdW5pZWNhLWV4dHJlbWlkYWQudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibXVuaWVjYUV4dHJlbWlkYWQtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gbXVuaWVjYUV4dHJlbWlkYWQoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2N1aWRhci1leHRyZW1pZGFkZXNcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvYW50ZWJyYXpvLWV4dHJlbWlkYWRcIlxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXHRcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IHBvcnRhZGEgZnJvbSBcIi4uL3Zpc3Rhcy9wb3J0YWRhLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcnRhZGEtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcG9ydGFkYSgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0XG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3BvcnRhZGFcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL1wiO1xuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBxdWVFc0FjdGl2YXRlIGZyb20gXCIuLi92aXN0YXMvcXVlLWVzLWFjdGl2YXRlLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHQvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIilbMl0udGV4dENvbnRlbnRcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInF1ZUVzQWN0aXZhdGUtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcXVlRXNBY3RpdmF0ZSgpO1xuXHRjb25zdCBhdWRpb1F1ZUVzQWN0aXZhdGUgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlXCIpLFxuXHRcdGF1ZGlvU2xpZGUzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1ZGlvMVNsaWRlM1wiKVxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcImphdmFzY3JpcHQ6dm9pZCgwKVwiO1xuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcImphdmFzY3JpcHQ6dm9pZCgwKVwiO1xuXHRhdWRpb1NsaWRlMy5wbGF5KClcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdGF1ZGlvU2xpZGUzLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9jb25vY2UtZXh0cmVtaWRhZGVzXCJcblx0XHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvXCJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdFx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0XHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdFx0ICB9XG5cdFx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0XHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdFx0ICB9XG5cdFx0fSxmYWxzZSk7XG5cdFx0Y29uc29sZS5sb2coXCJUZXJtaW5vIGVsIEF1ZGlvXCIpXG5cdH0pXG5cdFxuXHRhdWRpb1F1ZUVzQWN0aXZhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Ly90ZXh0RmFkZU91dFxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGlmKGF1ZGlvU2xpZGUzLnBhdXNlZCA9PSB0cnVlKXtcblx0XHRcdGF1ZGlvU2xpZGUzLnBsYXkoKVxuXHRcdFx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1ZGlvUXVlRXNBY3RpdmF0ZSBpbWdcIikuc3R5bGUuYW5pbWF0aW9uTmFtZT1cInNtYWxsVG9Ob3JtYWxJblwiXG5cdFx0XHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlIGltZ1wiKS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1cIi4xc1wiXG5cdFx0XHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlIGltZ1wiKS5zcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIlxuXHRcdH1lbHNlIGlmKGF1ZGlvU2xpZGUzLnBhdXNlZCA9PSBmYWxzZSl7XG5cdFx0XHRhdWRpb1NsaWRlMy5wYXVzZSgpXG5cdFx0XHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlIGltZ1wiKS5zdHlsZS5hbmltYXRpb25OYW1lPVwic21hbGxUb05vcm1hbE91dFwiXG5cdFx0XHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlIGltZ1wiKS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1cIi4xc1wiXG5cdFx0XHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9RdWVFc0FjdGl2YXRlIGltZ1wiKS5zcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uLnN2Z1wiXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCByZWxhamFFeHRyZW1pZGFkZXNTIGZyb20gXCIuLi92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzUy52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1MoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybChpbWcvc3ZnL3RyaWFuZ3VsZS1tb2JpbGUuc3ZnKVwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJuby1yZXBlYXRcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJjZW50ZXIgY2VudGVyXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJjb250YWluXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybChpbWcvc3ZnL2hvamFUcmFuc3BhcmVudE1pZGRsZS5zdmcpXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwibm8tcmVwZWF0XCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJib3R0b20gbGVmdFwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemU9XCIxMi41JVwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTJcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UxMFwiO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXHRcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMTAgZnJvbSBcIi4uL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTEwLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMCgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL2VqZXJjaXRhLWV4dHJlbWlkYWRlc1wiO1xuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlOVwiO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXHRcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMiBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMi52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMigpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTNcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXNcIjtcblx0XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXHRcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMyBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMy52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMygpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTRcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTJcIjtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblx0XG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQgZnJvbSBcIi4uL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U1XCI7XG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2UzXCI7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1IGZyb20gXCIuLi92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlNlwiO1xuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlNFwiO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyAzNyA9IEF0cmFzLCAzOSA9IEFkZWxhbnRlXG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNyl7XG5cdCAgXHRwcmV2UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdCAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSl7XG5cdCAgXHRuZXh0UHJlc2VudGF0aW9uLmNsaWNrKClcblx0ICB9XG5cdH0sZmFsc2UpO1xuXHRcblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNiBmcm9tIFwiLi4vdmlzdGFzL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNi52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IHJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNigpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdD1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTdcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTVcIjtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblx0XG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcgZnJvbSBcIi4uL3Zpc3Rhcy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSByZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1cIlwiXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIlwiXG5cblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQ9XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIlwiXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U4XCI7XG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U2XCI7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4IGZyb20gXCIuLi92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblx0XG5cdG5leHRQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U5XCI7XG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U3XCI7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIDM3ID0gQXRyYXMsIDM5ID0gQWRlbGFudGVcblx0ICBpZihldmVudC5rZXlDb2RlID09IDM3KXtcblx0ICBcdHByZXZQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0ICBpZihldmVudC5rZXlDb2RlID09IDM5KXtcblx0ICBcdG5leHRQcmVzZW50YXRpb24uY2xpY2soKVxuXHQgIH1cblx0fSxmYWxzZSk7XG5cdFxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5IGZyb20gXCIuLi92aXN0YXMvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5LnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U5KCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiXCJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCJcIlxuXG5cdGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0PVwiXCJcblx0ZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCJcIlxuXHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplPVwiXCJcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlMTBcIjtcblx0cHJldlByZXNlbnRhdGlvbi5ocmVmID0gXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZThcIjtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly8gMzcgPSBBdHJhcywgMzkgPSBBZGVsYW50ZVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpe1xuXHQgIFx0cHJldlByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHQgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzkpe1xuXHQgIFx0bmV4dFByZXNlbnRhdGlvbi5jbGljaygpXG5cdCAgfVxuXHR9LGZhbHNlKTtcblx0XG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBVc29DZWx1bGFyUGFnZTEgZnJvbSBcIi4uL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTEudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidXNvQ2VsdWxhci1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBVc29DZWx1bGFyUGFnZTEoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5jbGFzc0xpc3QuYWRkKFwidHJpYW5ndWxlXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyaWFuZ3VsZUhvamFcIilcblxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJob2phQm90dG9tXCIpXG5cblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy91c28tY2VsdWxhci1wYWdlMlwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy9lbi1jYXNhLXBhZ2U2XCJcbiAgXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBVc29DZWx1bGFyUGFnZTIgZnJvbSBcIi4uL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTIudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidXNvQ2VsdWxhci1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBVc29DZWx1bGFyUGFnZTIoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhvamFCb3R0b21cIilcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidHJpYW5ndWxlXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyaWFuZ3VsZUhvamFcIilcblxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy91c28tY2VsdWxhci1wYWdlM1wiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy91c28tY2VsdWxhci1wYWdlMVwiXG5cblxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51Y3BcIilcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0fVxuXHRkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNvQ2VsdWxhclBhZ2UyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFsbEltYWdlLmxlbmd0aDsgaSsrKXtcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICB9LCAxMDAwKVxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIH0sIDIwMDApXG5cdFx0fVxuXHR9LCBmYWxzZSlcblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Vzb0NlbHVsYXJQYWdlMlwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XG5cdCAgICBhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHRcdH1cblx0fSwgZmFsc2UpXG5cblxuXHRyZXR1cm4gZGl2RWxlbWVudDtcbn0iLCJpbXBvcnQgVXNvQ2VsdWxhclBhZ2UzIGZyb20gXCIuLi92aXN0YXMvdXNvQ2VsdWxhclBhZ2UzLnZpZXcuanNcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0bmV4dFByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFByZXNlbnRhdGlvblwiKSxcblx0XHRwcmV2UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UHJlc2VudGF0aW9uXCIpXG5cdGRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInVzb0NlbHVsYXItY29udGFpbmVyXCIpXG5cdGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gVXNvQ2VsdWxhclBhZ2UzKCk7XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjRkZGXCJcblx0bmV4dFByZXNlbnRhdGlvbi5ocmVmPSBcIiMvY2xhcm8tdGlwcy1wYWdlMVwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy91c28tY2VsdWxhci1wYWdlMlwiXG5cblxuXHRjb25zdCBhbGxJbWFnZSA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51Y3AzXCIpXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XG4gICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuICAgIGFsbEltYWdlWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdH1cblx0ZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Vzb0NlbHVsYXJQYWdlM1wiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZS5sZW5ndGg7IGkrKyl7XG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVswXS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXHQgICAgfSwgMTAwMClcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzFdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICAgIGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi51c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZVwiKS5pbm5lckhUTUw9XCJSRVBFVElDScOTTiAyXCJcblx0ICAgIH0sIDIwMDApXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0YWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsxXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzJdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICAgIGFsbEltYWdlWzNdLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbNF0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2VcIikuaW5uZXJIVE1MPVwiUkVQRVRJQ0nDk04gM1wiXG5cdCAgICB9LCA1MDAwKVxuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGFsbEltYWdlW2ldLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVsyXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzNdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICAgIGFsbEltYWdlWzRdLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlXCIpLmlubmVySFRNTD1cIlJFUEVUSUNJw5NOIDRcIlxuXHQgICAgfSwgODAwMClcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhbGxJbWFnZVtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzFdLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcblx0ICAgICAgYWxsSW1hZ2VbMl0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgICBhbGxJbWFnZVszXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cdCAgICAgIGFsbEltYWdlWzRdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cdCAgICAgIGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi51c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZVwiKS5pbm5lckhUTUw9XCJSRVBFVElDScOTTiA1XCJcblx0ICAgIH0sIDExMDAwKVxuXHRcdH1cblx0fSwgZmFsc2UpXG5cdGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c29DZWx1bGFyUGFnZTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2UubGVuZ3RoOyBpKyspe1xuXHQgICAgYWxsSW1hZ2VbaV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXHQgICAgYWxsSW1hZ2VbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcblx0ICAgIGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi51c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZVwiKS5pbm5lckhUTUw9XCJSRVBFVElDScOTTiAxXCJcblx0XHR9XG5cdH0sIGZhbHNlKVxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsImltcG9ydCBVc29DZWx1bGFyUGFnZTQgZnJvbSBcIi4uL3Zpc3Rhcy91c29DZWx1bGFyUGFnZTQudmlldy5qc1wiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRuZXh0UHJlc2VudGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UHJlc2VudGF0aW9uXCIpLFxuXHRcdHByZXZQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZQcmVzZW50YXRpb25cIilcblx0ZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidXNvQ2VsdWxhci1jb250YWluZXJcIilcblx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBVc29DZWx1bGFyUGFnZTQoKTtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiNGRkZcIlxuXHRuZXh0UHJlc2VudGF0aW9uLmhyZWY9IFwiIy91c28tY2VsdWxhci1wYWdlNVwiXG5cdHByZXZQcmVzZW50YXRpb24uaHJlZiA9IFwiIy91c28tY2VsdWxhci1wYWdlM1wiXG5cblx0cmV0dXJuIGRpdkVsZW1lbnQ7XG59IiwiaW1wb3J0IFVzb0NlbHVsYXJQYWdlNSBmcm9tIFwiLi4vdmlzdGFzL3Vzb0NlbHVsYXJQYWdlNS52aWV3LmpzXCJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdG5leHRQcmVzZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRQcmVzZW50YXRpb25cIiksXG5cdFx0cHJldlByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlByZXNlbnRhdGlvblwiKVxuXHRkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ1c29DZWx1bGFyLWNvbnRhaW5lclwiKVxuXHRkaXZFbGVtZW50LmlubmVySFRNTCA9IFVzb0NlbHVsYXJQYWdlNSgpO1xuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiI0ZGRlwiXG5cdG5leHRQcmVzZW50YXRpb24uaHJlZj0gXCIjL2NsYXJvLXRpcHMtcGFnZTFcIlxuXHRwcmV2UHJlc2VudGF0aW9uLmhyZWYgPSBcIiMvdXNvLWNlbHVsYXItcGFnZTRcIlxuXG5cdHJldHVybiBkaXZFbGVtZW50O1xufSIsIi8vcXVlRXNBY3RpdmF0ZSA9IHJlcXVpcmUoXCIuL3Zpc3Rhcy9xdWUtZXMtYWN0aXZhdGUuaHRtbFwiKVxuaW1wb3J0IHF1ZUVzQWN0aXZhdGUgZnJvbSBcIi4vdmlzdGFzL2Vycm9yLnZpZXcuanNcIlxuKChkLCB3LCBjKSA9PiB7XG5cdC8vaW1wb3J0IHtwYWdlc30gZnJvbSBcIi4vY29udHJvbGxlci9pbmRleC5qc1wiXG5cdGNvbnN0IGFjdFBvcHVwID0gZC5xdWVyeVNlbGVjdG9yKFwiI2FjdFBvcHVwXCIpLFxuXHRcdHBvcHVwSG93VG9GdW5jdGlvbiA9IGQucXVlcnlTZWxlY3RvcihcIiNwb3B1cEhvd1RvRnVuY3Rpb25cIiksXG5cdFx0bGlua0hvd1RvRnVuY3Rpb24gPSBkLnF1ZXJ5U2VsZWN0b3IoXCIjbGlua0hvd1RvRnVuY3Rpb25cIiksXG5cdFx0cm9vdERhc2hib2FyZCA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJyb290RGFzaGJvYXJkXCIpLFxuXHRcdHtwYWdlc30gPSByZXF1aXJlKFwiLi9jb250cm9sbGVyL2luZGV4LmpzXCIpXG5cdGFjdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHBvcHVwSG93VG9GdW5jdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkQW5pbWF0aW9uXCIpXG5cdH0pXG5cdGxpbmtIb3dUb0Z1bmN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHBvcHVwSG93VG9GdW5jdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkQW5pbWF0aW9uXCIpXG5cdH0pXG5cdGNvbnN0IHJvdXRlcyA9IChyb3V0ZSkgPT4ge1xuXHRcdHJvb3REYXNoYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRzd2l0Y2gocm91dGUpe1xuXHRcdFx0Y2FzZSBcIiMvXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUG9ydGFkYSgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL3BvcnRhZGFcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Ib21lKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvcXVlLWFjdGl2YXRlXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUXVlRXNBY3RpdmF0ZSgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2Nvbm9jZS1leHRyZW1pZGFkZXNcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Db25vY2VFeHRyZW1pZGFkZXMoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9ob21icm8tZXh0cmVtaWRhZFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkhvbWJyb0V4dHJlbWlkYWQoKSApXG5cdFx0XHR9XHRcblx0XHRcdGNhc2UgXCIjL2NvZG8tZXh0cmVtaWRhZFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkNvZG9FeHRyZW1pZGFkKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvYW50ZWJyYXpvLWV4dHJlbWlkYWRcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5BbnRlYnJhem9FeHRyZW1pZGFkKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvbXVuaWVjYS1leHRyZW1pZGFkXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuTXVuaWVjYUV4dHJlbWlkYWQoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9jdWlkYXItZXh0cmVtaWRhZGVzXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQ3VpZGFyRXh0cmVtaWRhZGVzKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvYWN0aXZhLWV4dHJlbWlkYWRcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5BY3RpdmFFeHRyZW1pZGFkUygpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UyXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlMigpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UzXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlMygpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U0XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlNCgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U1XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlNSgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U2XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlNigpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U3XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlNygpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U4XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlOCgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2U5XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQWN0aXZhRXh0cmVtaWRhZFNQYWdlOSgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2FjdGl2YS1leHRyZW1pZGFkLXBhZ2UxMFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkFjdGl2YUV4dHJlbWlkYWRTUGFnZTEwKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlc1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1MoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2UyXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UyKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlM1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMygpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTRcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5SZWxhamFFeHRyZW1pZGFkZXNTUGFnZTQoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U1XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlNlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlNigpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTdcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5SZWxhamFFeHRyZW1pZGFkZXNTUGFnZTcoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9yZWxhamEtZXh0cmVtaWRhZGVzLXBhZ2U4XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U4KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvcmVsYWphLWV4dHJlbWlkYWRlcy1wYWdlOVwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlJlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOSgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL3JlbGFqYS1leHRyZW1pZGFkZXMtcGFnZTEwXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuUmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMCgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2VqZXJjaXRhLWV4dHJlbWlkYWRlc1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVqZXJjaXRhRXh0cmVtaWRhZGVzKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZWxpZ2UtZ29tYVwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVsaWdlR29tYSgpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL21hbnRlbi1tb3ZpbWllbnRvc1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLk1hbnRlbk1vdmltaWVudG9zKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2FcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5CYW5kYUVsYXN0aWNhKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTJcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5CYW5kYUVsYXN0aWNhUGFnZTIoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9iYW5kYS1lbGFzdGljYS1wYWdlM1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkJhbmRhRWxhc3RpY2FQYWdlMygpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U0XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQmFuZGFFbGFzdGljYVBhZ2U0KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTQtMlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkJhbmRhRWxhc3RpY2FQYWdlNFBhcnRlMigpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U1XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQmFuZGFFbGFzdGljYVBhZ2U1KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvYmFuZGEtZWxhc3RpY2EtcGFnZTUtMlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkJhbmRhRWxhc3RpY2FQYWdlNVBhcnRlMigpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL2JhbmRhLWVsYXN0aWNhLXBhZ2U2XCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQmFuZGFFbGFzdGljYVBhZ2U2KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvY3VpZGEtYnJhem9zXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuQ3VpZGFCcmF6b3MoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy9lbi10cmFiYWpvXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuRW5UcmFiYWpvKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlMlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2UyKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlM1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2UzKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlNFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2U0KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlNVwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2U1KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlNlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2U2KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlN1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2U3KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tdHJhYmFqby1wYWdlOFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuVHJhYmFqb1BhZ2U4KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tY2FzYS1wYWdlMVwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuQ2FzYVBhZ2UxKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tY2FzYS1wYWdlMlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuQ2FzYVBhZ2UyKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tY2FzYS1wYWdlM1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuQ2FzYVBhZ2UzKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tY2FzYS1wYWdlNFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuQ2FzYVBhZ2U0KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tY2FzYS1wYWdlNVwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuQ2FzYVBhZ2U1KCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvZW4tY2FzYS1wYWdlNlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkVuQ2FzYVBhZ2U2KCkgKVxuXHRcdFx0fVxuXG5cblxuXHRcdFx0Y2FzZSBcIiMvdXNvLWNlbHVsYXItcGFnZTFcIjp7XG5cdFx0XHRcdHJldHVybiByb290RGFzaGJvYXJkLmFwcGVuZENoaWxkKCBwYWdlcy5Vc29DZWx1bGFyUGFnZTEoKSApXG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwiIy91c28tY2VsdWxhci1wYWdlMlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlVzb0NlbHVsYXJQYWdlMigpIClcblx0XHRcdH1cblx0XHRcdGNhc2UgXCIjL3Vzby1jZWx1bGFyLXBhZ2UzXCI6e1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5hcHBlbmRDaGlsZCggcGFnZXMuVXNvQ2VsdWxhclBhZ2UzKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvY2xhcm8tdGlwcy1wYWdlMVwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkNsYXJvVGlwc1BhZ2UxKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvY2xhcm8tdGlwcy1wYWdlMlwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkNsYXJvVGlwc1BhZ2UyKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvY2xhcm8tdGlwcy1wYWdlM1wiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkNsYXJvVGlwc1BhZ2UzKCkgKVxuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcIiMvY2xhcm8tdGlwcy1wYWdlNFwiOntcblx0XHRcdFx0cmV0dXJuIHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLkNsYXJvVGlwc1BhZ2U0KCkgKVxuXHRcdFx0fVxuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRyZXR1cm4gcm9vdERhc2hib2FyZC5pbm5lckhUTUwgPSBxdWVFc0FjdGl2YXRlKClcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiIy9cIlxuXHRcdHJvb3REYXNoYm9hcmQuYXBwZW5kQ2hpbGQoIHBhZ2VzLlBvcnRhZGEoKSApXG5cdFx0dy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0XHRyb3V0ZXMody5sb2NhdGlvbi5oYXNoKVxuXHRcdH0pXG5cdH1cblx0dy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KVxufSkoZG9jdW1lbnQsIHdpbmRvdywgY29uc29sZS5sb2cpIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwid29tZW5FeHRyZW1pZGFkZXNcIiBzcmM9XCJpbWcvc3ZnL3dvbWVuRXh0cmVtaWRhZGVzU3VwZXJpb3Jlcy5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5BQ1RJVkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3ViVGl0bGVcIj5UZSBwcmVzZW50YW1vcyB1bmEgc2VyaWUgZGUgZWplcmNpY2lvcyBxdWUgdGUgYXl1ZGFyYW4gYTo8L3A+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UmVsYWphciB0dXMgYnJhem9zPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+RGlzbWludWlyIGxhIHRlbnNpw7NuIG11c2N1bGFyPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UmVkdWNpciBlbCByaWVzZ28gZGUgcGFkZWNlciBsZXNpb25lczwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsIi8vY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpIGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGktLXRleHRcIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvd29tZW5CcmF6b0V4dGVuZGlkb0RlcmVjaG8uc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+TVVFVkUgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGkgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saS0tdGV4dFwiPkxsZXZhIHR1cyBicmF6b3MgYWwgZnJlbnRlLCBhYnJlIHkgY2llcnJhIHR1cyBtYW5vcy48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImFudGVzRGVQcmFjdGljYXJcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYyBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtLXBhZ2UyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiYW50ZXNEZVByYWN0aWNhci1pbWdcIiBzcmM9XCJpbWcvc3ZnL21lbkFudGVzRGVQcmFjdGljYXIuc3ZnXCIvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5BTlRFUyBERSBQUkFDVElDQVJMT1M8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zdWJUaXRsZVwiPkRlYmVzIHRlbmVyIGVuIGN1ZW50YWxvIHNpZ3VpZW50ZTo8L3A+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+U8OtIGxhIHJlYWxpemFjacOzbiBkZSB1biBlamVyY2ljaW8gcHJvdm9jYSBkb2xvciwgZGViZXMgaW50ZXJydW1waXJsbyB5IHN1c3RpdHVpcmxvIHBvciBvdHJvLjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlNpIGN1ZW50YXMgY29uIHJlc3RyaWNjaW9uZXMgbyByZWNvbWVuZGFjaW9uZXMgbcOpZGljYXMsIGNvbnN1bHRhIGNvbiB0dSBtw6lkaWNvIHByZXZpYW1lbnRlLjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkxhIGVqZWN1Y2nDs24gZGUgbG9zIGVqZXJjaWNpb3Mgc2UgbGxldmFyw6EgYSBjYWJvIGRlIGZvcm1hIHN1YXZlLCBwcm9ncmVzaXZhIHkgY29udHJvbGFkYS48L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5MbGV2YSB1biBvcmRlbiBlbiBsYSBlamVjdWNpw7NuIGRlIGxvcyBlamVyY2ljaW9zIHJlYWxpemFuZG8gZXN0b3MgZGUgZm9ybWEgY29uc2NpZW50ZSB5IGNvbnRyb2xhZGEgaW50ZW50YW5kbyByZXNwaXJhciByZWd1bGFybWVudGUuIDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmVfdGV4dFwiPlNpIHByZXNlbnRhcyBkb2xvciBzw7piaXRvIGUgaW50ZW5zbywgY29uc3VsdGEgYSB0dSBtw6lkaWNvIGFudGVzIGRlIHJlYWxpemFyIGVzdG9zIGVqZXJjaWNpb3MuPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvd29tZW5NdWV2ZUV4dHJlbWlkYWRlcy5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpLS10ZXh0XCI+UmVjdWVyZGEgaW5pY2lhciBjb24gZWplcmNpY2lvcyBkZSBtb3ZpbGlkYWQgYXJ0aWN1bGFyPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3ViVGl0bGVcIj7CoU5vIG9sdmlkZXMgPGI+Y29udHJvbGFyIHR1IHJlc3BpcmFjacOzbiE8L2I+PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmUtLWJnQWxsXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0IGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHQtLWJnQWxsXCI+UmVhbGl6YSBkZSA8Yj41IGEgMTAgcmVwZXRpY2lvbmVzPC9iPjxici8+IGRlIGNhZGEgdW5vLjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYyBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtLXBhZ2UyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwibXVldmUtZXh0cmVtaWRhZGVzXCIgc3JjPVwiaW1nL3N2Zy9tZW5NdWV2ZUV4dHJlbWlkYWRlcy5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1zdWJUaXRsZSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXN1YlRpdGxlLS1tZWRpdW1cIj5Db250aW7DumEgbGEgc2VzacOzbiBjb24gZWplcmNpY2lvcyBkZSBlc3RpcmFtaWVudG8gbXVzY3VsYXI8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMTwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHRcIj5Db24gZXNwYWxkYSB5IGNhYmV6YSByZWN0YXMsIGVudHJlbGF6YSBsYXMgbWFub3MgeSBsbGV2YSBsb3MgYnJhem9zIHBvciBlbmNpbWEgZGUgbGEgY2FiZXphIDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYyBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtLXBhZ2UyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwibXVldmUtZXh0cmVtaWRhZGVzLWNvZG9cIiBzcmM9XCJpbWcvc3ZnL21lbk11ZXZlRXh0cmVtaWRhZGVzQ29kby5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDVcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMjwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHRcIj5Db24gbG9zIGNvZG9zIHJlY3RvcywgbGxldmEgbG9zIGJyYXpvcyBoYWNpYSBmdWVyYSB5IGFycmliYS4gVnVlbHZhIGEgbGEgcG9zaWNpw7NuIGRlIHBhcnRpZGE8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljLS1wYWdlMlwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2dyYXBoaWMtYXVkaW9cIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGltZyBjbGFzcz1cImJyYXpvcy1hdHJhc1wiIHNyYz1cImltZy9zdmcvd29tZW5CcmF6b3NBdHJhcy5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDVcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMzwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHRcIj5JZ3VhbG1lbnRlLCBjb24gbG9zIGNvZG9zIHJlY3RvcywgbGxldmEgbG9zIGJyYXpvcyBoYWNpYSBhdHLDoXMuIFZ1ZWx2ZSBhIGxhIHBvc2ljacOzbiBkZSBwYXJ0aWRhPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljIGFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy0tcGFnZTJcIj5cblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljLWF1ZGlvXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJjb2Rvcy1hcnJpYmFcIiBzcmM9XCJpbWcvc3ZnL21lbkNvZG9zQXJyaWJhLnN2Z1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlLS1ib3R0b21QNVwiPk1VRVZFIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyA0PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGV4dFwiPkxsZXZhIGxhcyBtYW5vcyBhIGxvcyBob21icm9zLCBnaXJlIGxvcyBob21icm9zIGhhY2lhIGFkZWxhbnRlIHkgbHVlZ28gaGFjaWEgYXRyw6FzPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvbWVuQnJhem9Fc3BhbGRhLnN2Z1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlLS1ib3R0b21QNVwiPk1VRVZFIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyA1PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5VYmljYSBlbCBicmF6byBkZXJlY2hvIGFsIGxhZG8geSBkb2JsYSBlbCBjb2RvPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+TGxldmEgbGEgbWFubyBkZWwgbWlzbW8gbGFkbyBoYWNpYSBhcnJpYmEgeSBsdWVnbyBoYWNpYSBhYmFqbzwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlJlcGl0ZSBlbCBtb3ZpbWllbnRvIGNvbiBlbCBvdHJvIGJyYXpvPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvd29tZW5CcmF6b0V4dGVuZGlkby5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGUgYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYm90dG9tUDVcIj5NVUVWRSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gNjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+VWJpY2EgZWwgYnJhem8gYWwgZnJlbnRlIGNvbiBsYSBwYWxtYSBkZSBsYSBtYW5vIGhhY2lhIGFycmliYTwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkxsZXZhIGxhIG1hbm8gaGFjaWEgZWwgaG9tYnJvIGRlbCBtaXNtbyBsYWRvIGRvYmxhbmRvIHNvbG8gZWwgY29kbzwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlJlZ3Jlc2EgYSBsYSBwb3NpY2nDs24gaW5pY2lhbCB5IHJlcGl0ZSBlbCBtb3ZpLW1pZW50byBjb24gZWwgb3RybyBicmF6bzwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9ncmFwaGljIGFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2dyYXBoaWMtLXdpZHRoXCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL2JvZHlIdW1hbi1hbnRlYnJhem8ucG5nXCIgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9ncmFwaGljLWFudGVicmF6b1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+RVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tc3ViVGl0bGVcIj5BbnRlYnJhem88L3A+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW1cIj5TaXJ2ZSBkZSBuZXhvIGVudHJlIGVsIGJyYXpvIHkgZWwgY3VlcnBvLjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdF9pdGVtXCI+RXN0w6EgZm9ybWFkbyBwb3IgbGEgdW5pw7NuIGRlIGxvcyBleHRyZW1vcyBkZSB0cmVzPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PHAgY2xhc3M9XCJhbnRlYnJhem9FeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi10ZXh0XCI+aHVlc29zOiBsYSBjbGF2w61jdWxhLCBsYSBlc2PDoXB1bGEgKG9tw7NwbGF0bykgeSBlbCBow7ptZXJvLCBhZGVtw6FzIGRlIG3DunNjdWxvcywgbGlnYW1lbnRvcyB5IHRlbmRvbmVzLjwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFudGVicmF6b0V4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYW50ZWJyYXpvRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5Qb2RlbW9zIHJlYWxpemFyIG1vdmltaWVudG9zIGdpcmFuZG8gbGEgcGFsbWEgZGUgbGEgbWFubyBoYWNpYSBhcnJpYmEgKHN1cGluYWNpw7NuKSB5IGdpcmFuZG8gbGEgcGFsbWEgZGUgbGEgbWFubyBoYWNpYSBhYmFqbyAocHJvbmFjacOzbikuPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhXCIgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpY1wiPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2EyXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYTIuc3ZnXCIgLz5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhMVwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb24tMlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYTEuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVKRVJDSVRBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUyBDT04gQkFOREEgRUzDgVNUSUNBUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMTwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkxsZXZhIGVsIGJyYXpvIHBvciBhdHLDoXMgZGUgbGEgZXNwYWxkYSBhIGxhIGFsdHVyYSBkZSBsYSBjaW50dXJhPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNvbiBsYSBtYW5vIGNvbnRyYXJpYSB0b21hIGVsIGV4dHJlbW8gZGUgbGEgYmFuZGEgZWzDoXN0aWNhIHBvciBkZXRyw6FzIGRlIGxhIGNhYmV6YSB5IGV4dGllbmRlIGVsIGJyYXpvIGhhY2lhIGFycmliYSBzb3N0ZW5pZW5kbyBkdXJhbnRlIDMgc2VndW5kb3MuPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlZ1ZWx2ZSBhIGxhIHBvc2ljacOzbiBpbmljaWFsIHkgcmVwaXRlIGVsIGVqZXJjaWNpbzwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5DYW1iaWEgbGEgcG9zaWNpw7NuIGRlIHR1cyBicmF6b3MgeSByZWFsaXphIGVsIGVqZXJjaWNpbyBjb24gbGEgb3RyYSBleHRyZW1pZGFkPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhUGFnZTJcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UyLTFcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGExIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2UyLTEuc3ZnXCIgLz5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTItMlwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYTIgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTItMi5zdmdcIiAvPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlMi0zXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhMyBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlMi0zLnN2Z1wiIC8+XG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UyLTRcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGE0IGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2UyLTQuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVKRVJDSVRBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUyBDT04gQkFOREEgRUzDgVNUSUNBUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMjwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkRlIHBpZSwgY29uIGxvcyBwaWVzIHNlcGFyYWRvcyBhbCBhbmNobyBkZSBsb3MgaG9tYnJvczwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Mb3MgcGllcyBwaXNhbmRvIGxhIG1pdGFkIGRlbCB0aGVyYWJhbmQgeSBsYXMgbWFub3MgdG9tYW5kbyBsb3MgZXh0cmVtb3MgZGUgbGEgYmFuZGEgZWzDoXN0aWNhPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkxsZXZhIGxvcyBicmF6b3MgaGFjaWEgYXJyaWJhIHkgYSBsb3MgbGFkb3MgaGFzdGEgbGEgYWx0dXJhIGRlIGxvcyBob21icm9zLCBzb3N0w6luIGR1cmFudGUgMyBzZWd1bmRvczwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5WdWVsdmUgYSBsYSBwb3NpY2nDs24gaW5pY2lhbCB5IHJlcGl0ZSBlbCBlamVyY2ljaW88L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UHVlZGVzIGFsdGVybmFyIGVsIGRlcmVjaG8gZSBpenF1aWVyZG8gbyByZWFsaXphciBlbCBtb3ZpbWllbnRvIGFsIHRpZW1wbyBjb24gYW1ib3MgYnJhem9zLjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiYmFuZGFFbGFzdGljYVBhZ2UzXCIgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpYyBiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpY1BhZ2UzXCI+XG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2UzLTFcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlMy0xIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2UzLTIuc3ZnXCIgLz5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTMtMlwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2UzLTIgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTMtMS5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+RUpFUkNJVEEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTIENPTiBCQU5EQSBFTMOBU1RJQ0FTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyAzPC9wPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q29uIGxvcyBicmF6b3MgZXh0ZW5kaWRvcyBoYWNpYSBlbCBmcmVudGUgYWdhcnJhIGxvcyBleHRyZW1vcyBkZSBsYSBiYW5kYSBlbMOhc3RpY2E8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+QWJyZSBsb3MgYnJhem9zIHkgc29zdMOpbiBkdXJhbnRlIDMgc2VndW5kb3M8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+VnVlbHZlIGEgbGEgcG9zaWNpw7NuIGluaWNpYWwgeSByZXBpdGUgZWwgZWplcmNpY2lvPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhUGFnZTRcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljIGJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljUGFnZTNcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtMVwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2U0LTEgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTQtMS5zdmdcIiAvPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC0yXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhUGFnZTQtMiBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNC0yLnN2Z1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlXCI+RWplcmNpY2lvIDQ8L3A+XG5cdFx0XHRcdFx0PHVsIGlkPVwiYmFuZGFzRWxhc3RpY2FzTGlzdHNcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UHVlZGVzIGNvbWJpbmFyIGVsIGFudGVyaW9yIGVqZXJjaWNpbywgY29uIGxvcyBjb2RvcyBmbGV4aW9uYWRvcyBhIGxhIGFsdHVyYSBkZWwgcGVjaG8gc29zdGVuaWVuZG8gZnVlcnRlbWVudGUgbGEgYmFuZGEgZWzDoXN0aWNhLjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5BYnJlIGVsIGJyYXpvIGRlcmVjaG8gbWllbnRyYXMgZWwgaXpxdWllcmRvIGhhY2UgcmVzaXN0ZW5jaWEsIHNvc3TDqW4gZHVyYW50ZSAzIHNlZ3VuZG9zPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlZ1ZWx2ZSBhIGxhIHBvc2ljacOzbiBpbmljaWFsIHkgcmVwaXRlIGVsIGVqZXJjaWNpbyBjb24gZWwgYnJhem8gY29udHJhcmlvPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJiYW5kYUVsYXN0aWNhUGFnZTRcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljIGJhbmRhRWxhc3RpY2EtY29udGVudF9ncmFwaGljUGFnZTNcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTQtM1wiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2U0LTMgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTQtMy5zdmdcIiAvPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNC00XCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhUGFnZTQtNCBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNC00LnN2Z1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlXCI+RWplcmNpY2lvIDQ8L3A+XG5cdFx0XHRcdFx0PHVsIGlkPVwiYmFuZGFzRWxhc3RpY2FzTGlzdHNcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UHVlZGVzIGNvbWJpbmFyIGVsIGFudGVyaW9yIGVqZXJjaWNpbywgY29uIGxvcyBjb2RvcyBmbGV4aW9uYWRvcyBhIGxhIGFsdHVyYSBkZWwgcGVjaG8gc29zdGVuaWVuZG8gZnVlcnRlbWVudGUgbGEgYmFuZGEgZWzDoXN0aWNhLiA8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+QWJyZSBlbCBicmF6byBpenF1aWVyZG8gbWllbnRyYXMgZWwgZGVyZWNobyBoYWNlIHJlc2lzdGVuY2lhLCBzb3N0w6luIGR1cmFudGUgMyBzZWd1bmRvczwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiYmFuZGFFbGFzdGljYVBhZ2U1XCIgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpYyBiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZ3JhcGhpY1BhZ2UzXCI+XG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U1LTFcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlNS0xIGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2U1LTEuc3ZnXCIgLz5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNCYW5kYUVsYXN0aWNhUGFnZTUtMlwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2U1LTIgZ3BiXCIgc3JjPVwiaW1nL3N2Zy9iYW5kYUVsYXN0aWNhUGFnZTUtMi5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+RUpFUkNJVEEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTIENPTiBCQU5EQSBFTMOBU1RJQ0FTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyA1PC9wPlxuXHRcdFx0XHRcdDx1bCBpZD1cImJhbmRhc0VsYXN0aWNhc0xpc3RzXCIgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkFwb3lhIGVsIGNvZG8geSBhbnRlYnJhem8gc29icmUgdW5hIHN1cGVyZmljaWUgc3VhdmUsIGRlamFuZG8gbGEgbXXDsWVjYSBsaWJyZTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Db24gbGEgcGFsbWEgZGUgbGEgbWFubyBoYWNpYSBhYmFqbyB0b21hIGxhIG1pdGFkIGRlIGxhIGJhbmRhIGZ1ZXJ0ZW1lbnRlPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkxsZXZhIGxhIG1hbm8gaGFjaWEgYXJyaWJhIChzaW4gZGVzcGVnYXIgZWwgYW50ZS1icmF6bykgbWllbnRyYXMgbGEgbWFubyBjb250cmFyaWEgaGFjZSByZXNpc3RlbmNpYSwgc29zdMOpbiBkdXJhbnRlIDMgc2VndW5kb3M8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+VnVlbHZlIGEgbGEgcG9zaWNpw7NuIGluaWNpYWwgeSByZXBpdGUgZWwgZWplcmNpY2lvPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNhbWJpYSBsYSBwb3NpY2nDs24gZGUgdHVzIGJyYXpvcyB5IHJlYWxpemEgZWwgZWplcmNpY2lvIGNvbiBsYSBvdHJhIG1hbm88L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImJhbmRhRWxhc3RpY2FQYWdlNVwiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWMgYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWNQYWdlM1wiPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNS0zXCIgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvbkJhbmRhUGFnZTUtMyBncGJcIiBzcmM9XCJpbWcvc3ZnL2JhbmRhRWxhc3RpY2FQYWdlNS0zLnN2Z1wiIC8+XG5cdFx0XHRcdDxpbWcgaWQ9XCJncmFwaGljQmFuZGFFbGFzdGljYVBhZ2U1LTRcIiBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uQmFuZGFQYWdlNS00IGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2U1LTQuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVKRVJDSVRBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUyBDT04gQkFOREEgRUzDgVNUSUNBUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gNTwvcD5cblx0XHRcdFx0XHQ8dWwgaWQ9XCJiYW5kYXNFbGFzdGljYXNMaXN0c1wiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5BcG95YSBlbCBjb2RvIHkgYW50ZWJyYXpvIHNvYnJlIHVuYSBzdXBlcmZpY2llIHN1YXZlLCBkZWphbmRvIGxhIG11w7FlY2EgbGlicmU8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q29uIGxhIHBhbG1hIGRlIGxhIG1hbm8gaGFjaWEgYWJham8gdG9tYSBsYSBtaXRhZCBkZSBsYSBiYW5kYSBmdWVydGVtZW50ZSA8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+TGxldmEgbGEgbWFubyBoYWNpYSBhcnJpYmEgKHNpbiBkZXNwZWdhciBlbCBhbnRlLWJyYXpvKSBtaWVudHJhcyBsYSBtYW5vIGNvbnRyYXJpYSBoYWNlIHJlc2lzdGVuY2lhLCBzb3N0w6luIGR1cmFudGUgMyBzZWd1bmRvczwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5WdWVsdmUgYSBsYSBwb3NpY2nDs24gaW5pY2lhbCB5IHJlcGl0ZSBlbCBlamVyY2ljaW88L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImJhbmRhRWxhc3RpY2FQYWdlNVwiIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWMgYmFuZGFFbGFzdGljYS1jb250ZW50X2dyYXBoaWNQYWdlM1wiPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY0JhbmRhRWxhc3RpY2FQYWdlNlwiIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25CYW5kYVBhZ2U2IGdwYlwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYVBhZ2U2LnN2Z1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJiYW5kYUVsYXN0aWNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlXCI+RWplcmNpY2lvIDY8L3A+XG5cdFx0XHRcdFx0PHVsIGlkPVwiYmFuZGFzRWxhc3RpY2FzTGlzdHNcIiBjbGFzcz1cImJhbmRhRWxhc3RpY2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q29tYmluYSBlbCBlamVyY2ljaW8gaGFjaWVuZG8gYWdhcnJlIGRlIGxhIGJhbmRhIGNvbiBsYSBwYWxtYSBkZSBsYSBtYW5vIGhhY2lhIGFycmliYTwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYmFuZGFFbGFzdGljYS1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2VcIj7CoVN1bWEgbWludXRvcyBhIHR1IGJpZW5lc3RhciE8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9jbGFyb1RpcHNQYWdlMS5zdmdcIiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWMtaW1nXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DTEFSTyBUSVBTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGVcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLWNudFN1YnRpdGxlX3N1YnRpdGxlXCI+VXNvIGRlbCBjZWx1bGFyPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHVsIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNvbnRyb2xhIGVsIHRpZW1wbyBkZSBjb25leGnDs248L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYyBjbGFyb1RpcHMtY29udGVudF9ncmFwaGljUGFnZTJcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL2NsYXJvVGlwc1BhZ2UyLnN2Z1wiIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1pbWdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkNMQVJPIFRJUFM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZSBjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZVBhZ2UyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi1jbnRTdWJ0aXRsZV9zdWJ0aXRsZVwiPlVzbyBkZWwgY2VsdWxhcjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Db250cm9sYSBlbCB0aWVtcG8gZGUgY29uZXhpw7NuPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPk1hbnTDqW4gbGEgcGFudGFsbGEgYSBsYSBhbHR1cmEgZGUgdHVzIG9qb3M8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q3J1emEgZWwgYnJhem8gY29udHJhcmlvIGRlbCBxdWUgbWFuZWphcyBlbCBjZWx1bGFyIHBvciBsYSBjaW50dXJhIHkgYXBveWEgZWwgYnJhem8gY29uIGVsIHF1ZSBzb3N0aWVuZXMgZWwgbcOzdmlsIHBvciBlbmNpbWEgZGUgZXN0ZTwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljIGNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWNQYWdlM1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpYy1tYXJrXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL2NsYXJvVGlwc1BhZ2UzLU11bmllbi5zdmdcIiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWMtaW1nXCIgLz5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvY2hlY2suc3ZnXCIgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljLUNoZWNrUDNcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DTEFSTyBUSVBTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGUgY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGVQYWdlMlwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGVfc3VidGl0bGVcIj5Vc28gZGVsIGNlbHVsYXI8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q29udHJvbGEgZWwgdGllbXBvIGRlIGNvbmV4acOzbjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5NYW50w6luIGxhIHBhbnRhbGxhIGEgbGEgYWx0dXJhIGRlIHR1cyBvam9zPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNydXphIGVsIGJyYXpvIGNvbnRyYXJpbyBkZWwgcXVlIG1hbmVqYXMgZWwgY2VsdWxhciBwb3IgbGEgY2ludHVyYSB5IGFwb3lhIGVsIGJyYXpvIGNvbiBlbCBxdWUgc29zdGllbmVzIGVsIG3Ds3ZpbCBwb3IgZW5jaW1hIGRlIGVzdGU8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UHJlZmVyaWJsZW1lbnRlIGNvbsOpY3RhbG8gYSB0dSBjb21wdXRhZG9yIChXaGF0c2FwcFdlYiksIGFww7N5YXRlIGNvbiBub3RhcyBkZSB2b3ogbyBhdWRpb3MgZGlzbWludXllbmRvIGxvcyBtb3ZpbWllbnRvcyBmcmVjdWVudGVzIGVuIG1hbm9zPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWMgY2xhcm9UaXBzLWNvbnRlbnRfZ3JhcGhpY1BhZ2UzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljLW1hcmtQYWdlNFwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9jbGFyb1RpcHNQYWdlNC1NdW5pZW4uc3ZnXCIgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9ncmFwaGljLWltZ1wiIC8+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL25vdC1jaGVjay5zdmdcIiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2dyYXBoaWMtbm90Q2hlY2tcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DTEFSTyBUSVBTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGUgY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGVQYWdlMlwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tY250U3VidGl0bGVfc3VidGl0bGVcIj5Vc28gZGVsIGNlbHVsYXI8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q29udHJvbGEgZWwgdGllbXBvIGRlIGNvbmV4acOzbjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY2xhcm9UaXBzLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5NYW50w6luIGxhIHBhbnRhbGxhIGEgbGEgYWx0dXJhIGRlIHR1cyBvam9zPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNydXphIGVsIGJyYXpvIGNvbnRyYXJpbyBkZWwgcXVlIG1hbmVqYXMgZWwgY2VsdWxhciBwb3IgbGEgY2ludHVyYSB5IGFwb3lhIGVsIGJyYXpvIGNvbiBlbCBxdWUgc29zdGllbmVzIGVsIG3Ds3ZpbCBwb3IgZW5jaW1hIGRlIGVzdGU8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNsYXJvVGlwcy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UHJlZmVyaWJsZW1lbnRlIGNvbsOpY3RhbG8gYSB0dSBjb21wdXRhZG9yIChXaGF0c2FwcFdlYiksIGFww7N5YXRlIGNvbiBub3RhcyBkZSB2b3ogbyBhdWRpb3MgZGlzbWludXllbmRvIGxvcyBtb3ZpbWllbnRvcyBmcmVjdWVudGVzIGVuIG1hbm9zPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjbGFyb1RpcHMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkV2aXRhIGNoYXRlYXIgbWllbnRyYXMgY2FtaW5hczwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2RFeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9ncmFwaGljIGNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2dyYXBoaWMtLXdpZHRoXCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL2JvZHlIdW1hbnMtYm9uZXMucG5nXCIgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9ncmFwaGljLWNvZG9cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJjb2RFeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXN1YlRpdGxlXCI+Q29kbzwvcD5cblx0XHRcdFx0PHVsIGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RfaXRlbVwiPlVuZSBlbCBicmF6byBjb24gZWwgYW50ZWJyYXpvPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjb2RFeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW1cIj5TdSBmdW5jacOzbiBlcyBhY2VyY2FyIHkgYWxlamFyIGxhIG1hbm8gZGVsIHRyb25jbyB5IHBvciBlc28gZXMgaW1wcmVzY2luZGlibGUgZW4gbXVjaGFzIHRhcmVhcyBpbXBvcnRhbnRlcyBkZSBsYXMgYWN0aXZpZGFkZXMgZGlhcmlhcy48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImNvZEV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5odWVzb3M6IGxhIGNsYXbDrWN1bGEsIGxhIGVzY8OhcHVsYSAob23Ds3BsYXRvKSB5IGVsIGjDum1lcm8sIGFkZW3DoXMgZGUgbcO6c2N1bG9zLCBsaWdhbWVudG9zIHkgdGVuZG9uZXMuPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29kRXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJjb2RFeHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmVfdGV4dFwiPlBvZGVtb3MgcmVhbGl6YXIgbW92aW1pZW50b3MgZW50cmUgZG9ibGFyIChmbGV4acOzbikgeSBlc3RpcmFyIChleHRlbnNpw7NuKTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb25vY2VFeHRyZW1pZGFkZXMtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9ib2R5SHVtYW4uc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbm9jZUV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DT05PQ0UgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImNvbm9jZUV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5MYSBleHRyZW1pZGFkIHN1cGVyaW9yIG8gbWllbWJybyBzdXBlcmlvciwgc29uIGNhZGEgdW5hIGRlIGxhcyBleHRyZW1pZGFkZXMgcXVlIHNlIHVuZW4gYSBsYSBwYXJ0ZSBzdXBlcmlvciBkZWwgdHJvbmNvLCBtZWRpYW50ZSBsb3MgbcO6c2N1bG9zLCB0ZW5kb25lcywgbmVydmlvcyB5IGFydGljdWxhY2lvbmVzLjwvcD5cblx0XHRcdFx0PHAgY2xhc3M9XCJjb25vY2VFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0XCI+RW4gY2FkYSBleHRyZW1pZGFkLCBlbmNvbnRyYW1vcyAzMiBodWVzb3MgeSA0NSBtw7pzY3Vsb3MgcXVlIHNlIHVuZW4gZW50cmUgc8OtIHBhcmEgYXl1ZGFyIGEgc3UgbW92aWxpZGFkLiBFc3TDoSBjb21wdWVzdGEgcG9yIDQgc2VnbWVudG9zIGRlIGZvcm1hIGdlbmVyYWwuPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8IS0tPGltZyBzcmM9XCJpbWcvc3ZnL2JvZHlIdW1hbkNpcmNsZS5zdmdcIiBjbGFzcz1cImNvbm9jZUV4dHJlbWlkYWRlcy1jb250ZW50X2JvZHlIdW1hbkNpcmNsZVwiIC8+LS0+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJjdWlkYUJyYXpvc1BhZ2U1XCIgY2xhc3M9XCJjdWlkYUJyYXpvcy1jb250ZW50X2dyYXBoaWMgY3VpZGFCcmF6b3MtY29udGVudF9ncmFwaGljUGFnZTNcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNjdWlkYUJyYXpvc1BhZ2U2XCIgY2xhc3M9XCJncmFwaGljLWN1aWRhQnJhem9zXCIgc3JjPVwiaW1nL3N2Zy9jdWlkYUJyYXpvcy5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3VpZGFCcmF6b3MtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5DVUlEQSBUVVMgQlJBWk9TPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImN1aWRhQnJhem9zLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dFwiPlRlbiBlbiBjdWVudGEgbG9zIHNpZ3VpZW50ZXMgY29uc2Vqb3MgcGFyYSBtYW50ZW5lciBsYSBzYWx1ZCBlbiB0dXMgZXh0cmVtaWRhZGVzIHN1cGVyaW9yZXM8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiY3VpZGFyRXh0cmVtaWRhZGVzLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbiBjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi0td2lkdGhcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZSBjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZS0tYmx1ZVwiPsK/WSBQT1IgUVXDiSBFUyBUQU4gSU1QT1JUQU5URSBDVUlEQVIgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPzwvcD5cblx0XHRcdFx0PHAgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0IGN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHQtLWFsaWduXCI+TGFzIGV4dHJlbWlkYWRlcyBzdXBlcmlvcmVzIHNvbiBzZWdtZW50b3MgY29ycG9yYWxlcyBpbXBvcnRhbnRlcyBlbiBudWVzdHJvIGN1ZXJwbywgY29uc3RhbnRlbWVudGUgcmVxdWVyaW1vcyBkZSBlbGxhcyBwYXJhIHRvZGFzIG51ZXN0cmFzIGFjdGl2aWRhZGVzIGRlIGxhIHZpZGEgZGlhcmlhLCBzaWVuZG8gbmVjZXNhcmlvIHN1IGN1aWRhZG8gYWwgZGVzYXJyb2xsYXIgY3VhbHF1aWVyIHRhcmVhIHUgb2ZpY2lvLiBMb3MgcHJpbmNpcGFsZXMgZmFjdG9yZXMgcXVlIGluY2lkZW4gZW4gbGEgYXBhcmljacOzbiBkZSBwb3NpYmxlcyBtb2xlc3RpYXMsIHB1ZWRlbiBzZXI6PC9wPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi1saXN0XCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiY3VpZGFyRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdF9pdGVtXCI+VXNvIGRlIGZ1ZXJ6YS48L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RfaXRlbVwiPlBvc3R1cmFzIGZvcnphZGFzIHkgbW92aW1pZW50b3MgcmVwZXRpdGl2b3MgcG9yIHRpZW1wb3MgcHJvbG9uZ2Fkb3MgeSBzaW4gcGF1c2FzPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW1cIj5GYWN0b3JlcyBpbmRpdmlkdWFsZXMgKGVkYWQsIGVzdGlsb3MgZGUgdmlkYSwgZ8OpbmVybywgY29uZGljaW9uZXMgaGVyZWRpdGFyaWFzLCBlbnRyZSBvdHJhcykuPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjdWlkYXJFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW1cIj5BY3RpdmlkYWRlcyBleHRyYSBsYWJvcmFsZXMgKHBhc2F0aWVtcG9zIGNvbW8gdmlkZW9qdWVnb3MsIGFjdGl2aWRhZGVzIG1hbnVhbGVzIGNvbW8gcGludGFyLCB0ZWplciwgYm9yZGFyIHkgYWxndW5vcyBkZXBvcnRlcykuPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImN1aWRhckV4dHJlbWlkYWRlcy1jb250ZW50X2dyYXBoaWMgY3VpZGFyRXh0cmVtaWRhZGVzLWNvbnRlbnRfZ3JhcGhpYy0td2lkdGhcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL2N1aWRhci1leHRyZW1pZGFkZXMuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJlamVyY2l0YUV4dHJlbWlkYWRlcy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZWplcmNpdGFFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FSkVSQ0lUQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVMgQ09OIEJBTkRBIEVMw4FTVElDQVM8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZWplcmNpdGFFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0XCI+UGFyYSBsb3Mgc2lndWllbnRlcyBlamVyY2ljaW9zIHBvZHLDoXMgdXRpbGl6YXIgZWxlbWVudG9zIGNvbW86IGJhbmRhcyBlbMOhc3RpY2FzIG8gdGhlcmFiYW5kIChiYW5kYXMgZGUgdGVsYSBvIGdvbWEpLCB0aGVyYXR1YmluZyAodHVibyBkZSBnb21hKSwgbWluaSBiYW5kYXMgKGJhbmRhcyBjZXJyYWRhcyksIGJhbmRhcyBjb24gYXNhcyBkZSBwbMOhc3RpY28sIGVudHJlIG90cmFzOyBoZXJyYW1pZW50YXMgc2VuY2lsbGFzIGRlIHV0aWxpemFyIHkgZGUgYmFqbyBjb3N0byBlbiBzdSBtYXlvcsOtYS48L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZWplcmNpdGFFeHRyZW1pZGFkZXMtY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlXCI+QW50ZXMgZGUgdXRpbGl6YXIgY3VhbHF1aWVyYSBkZSBlc29zIGVsZW1lbnRvcyw8YnIgLz50ZW4gZW4gY3VlbnRhIGxvIHNpZ3VpZW50ZTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVqZXJjaXRhRXh0cmVtaWRhZGVzLWNvbnRlbnRfZ3JhcGhpY1wiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4vaW1nL3N2Zy9tdWplckJhbmRhRWxhc3RpY2Euc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImVsaWdlR29tYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZWxpZ2VHb21hLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlbGlnZUdvbWEtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVMSUdFIENPUlJFQ1RBTUVOVEUgTEEgRFVSRVpBIERFIExBIEdPTUE8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZWxpZ2VHb21hLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dFwiPlRlIHJlY29tZW5kYW1vcyBlbGVnaXIgZWwgY29sb3IgZGUgbGEgYmFuZGEgZGUgYWN1ZXJkbyBhIHR1IGhhYmlsaWRhZCB5IHRvbm8gbXVzY3VsYXIsIGJ1c2NhbmRvIHNpZW1wcmUgdW4gcHVudG8gbWVkaW8gZW50cmUgcsOtZ2lkYSB5IGJsYW5kYSwgcG9yIGVqZW1wbG86IGFtYXJpbGxhLCB2ZXJkZSwgcm9qYSBvIGF6dWwuPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImVsaWdlR29tYS1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5VbmEgYmFuZGEgZGVtYXNpYWRvIHLDrWdpZGEgb2ZyZWNlcsOhIG11Y2hhIHJlc2lzdGVuY2lhIHkgZm9yemFyw6FzIGxvcyBtw7pzY3Vsb3MsIHBvciBlbCBjb250cmFyaW8sIHVuYSBiYW5kYSBtdXkgYmxhbmRhIHB1ZWRlIG9mcmVjZXIgdW4gdHJhYmFqbyBpbnNpZ25pZmljYW50ZS48L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZWxpZ2VHb21hLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dFwiPkFxdcOtIHRlIGRlamFtb3MgdW5hIGd1w61hIGRlIHJlc2lzdGVuY2lhIHBvciBjb2xvcmVzIHBhcmEgdGVuZXIgZW4gY3VlbnRhIGEgbGEgaG9yYSBkZSBlbGVnaXIgdHUgYmFuZGEuPC9wPlxuXG5cdFx0XHRcdDxwIGNsYXNzPVwiZWxpZ2VHb21hLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZVwiPkFsZ3Vub3MgY29sb3JlcyBwb2Ryw61hbiB2YXJpYXIgZGUgYWN1ZXJkbyBhbCBmYWJyaWNhbnRlLjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVsaWdlR29tYS1jb250ZW50X2dyYXBoaWNcIj5cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPkNPTE9SPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPlJFU0lTVEVOQ0lBPC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5NYXJmaWw8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+RXh0cmEgc3VhdmU8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPkFtYXJpbGxvPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlN1YXZlPC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5Sb2pvPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPk1lZGl1bTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+VmVyZGU8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+RnVlcnRlPC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5BenVsPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPkV4dHJhIGZ1ZXJ0ZTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+TmVncmE8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+RXNwZWNpYWwgZnVlcnRlPC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5QbGF0YTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5TdXBlciBmdWVydGU8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPk9ybzwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5VbHRyYSBmdWVydGU8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2UxXCIgc3JjPVwiaW1nL3N2Zy9lbkNhc2FQYWdlMS5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIENBU0E8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Fdml0YSBtYW50ZW5lciBsYXMgbWFub3MgZG9ibGFkYXM8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5TaSBwcmVzZW50YXMgbW9sZXN0aWFzIGVuIHVuYSBkZSB0dXMgZXh0cmVtaWRhZGVzIHN1cGUtcmlvcmVzLCB0cmF0YSBkZSBjYW1iaWFyIGxhIHBvc2ljacOzbiBlbiBsYSBxdWUgZHVlcm1lcy4gRXZpdGEgZG9ybWlyIHNvYnJlIGVsIHNlZ21lbnRvIGFmZWN0YWRvPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImVuQ2FzYVBhZ2UyXCIgY2xhc3M9XCJlbkNhc2EtY29udGVudF9ncmFwaGljIGVuQ2FzYS1jb250ZW50X2dyYXBoaWNQYWdlMlwiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1lbkNhc2FQYWdlMiBlY3BcIiBzcmM9XCJpbWcvc3ZnL2VuQ2FzYVBhZ2UyLTEuc3ZnXCIgLz5cblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtZW5DYXNhUGFnZTIgZWNwXCIgc3JjPVwiaW1nL3N2Zy9lbkNhc2FQYWdlMi0yLnN2Z1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbiBlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvblBhZ2UyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FTiBDQVNBPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5BbCBwcmFjdGljYXIgZGVwb3J0ZTwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5BbCBwcmFjdGljYXIgYWxnw7puIGRlcG9ydGUgbyByZWFsaXphciBhY3RpdmlkYWQgZsOtc2ljYSwgcmVjdWVyZGEgc2llbXByZSBpbmNsdWlyIGVqZXJjaWNpb3MgZGUgY2FsZW50YW1pZW50byB5IGVzdGlyYW1pZW50byBtdXNjdWxhciwgcHJldmluaWVuZG8gbGVzaW9uZXMgbXVzY3VsbyBlc3F1ZWzDqXRpY2FzLjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkR1cmFudGUgbGEgcHLDoWN0aWNhIGRlIGRlcG9ydGVzIG8gYWN0aXZpZGFkZXMgZGUgb2NpbyBxdWUgaW1wbGlxdWVuIGVsIHVzbyBmcmVjdWVudGUgZGUgZXh0cmVtaWRhZGVzIHN1cGVyaW9yZXMsIGV2aXRhIHJlYWxpemFyIG1vdmltaWVudG9zIGZvcnphZG9zIG8gc29icmUgZXNmdWVyem9zIHF1ZSBwdWVkYW4gZ2VuZXJhciBsZXNpb25lcy48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiZW5DYXNhUGFnZTNcIiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2dyYXBoaWMgZW5DYXNhLWNvbnRlbnRfZ3JhcGhpY1BhZ2UzXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2UzIGVjcFwiIHNyYz1cImltZy9zdmcvZW5DYXNhUGFnZTMuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uIGVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uUGFnZTJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIENBU0E8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkFsIGxpbXBpYXI8L3A+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+RW4gbG8gcG9zaWJsZSBwYXJhIGxhcyB0YXJlYXMgZGVsIGhvZ2FyLCB1dGlsaWNlIGhlcnJhbWllbnRhcyBjb21vIGVzY3Vycmlkb3IgZGUgdHJhcGVybywgcGxhbmNoYSBsaXZpYW5hLCBwaWNhZG9yYSwgZW50cmUgb3RyYXMuPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+RHVyYW50ZSBsYSBsaW1waWV6YSBkZSBzdXBlcmZpY2llcyBldml0YSBkZXN2aWFyIGxhIG1hbm8gZGUgbGFkbyBhIGxhZG8gcmVhbGl6YW5kbyBwcmVmZXJpYmxlbWVudGUgbW92aW1pZW50b3MgZW4gYmxvcXVlIGNvbiB0dSBleHRyZW1pZGFkIHN1cGVyaW9yLiBBbHRlcm5hIGVsIHBhw7FvIGRlIGxpbXBpZXphIGRlIHVuYSBtYW5vIGEgbGEgb3RyYTwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9ncmFwaGljIGVuQ2FzYS1jb250ZW50X2dyYXBoaWNQYWdlNFwiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1lbkNhc2FQYWdlNFwiIHNyYz1cImltZy9zdmcvZW5DYXNhUGFnZTQtMS5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIENBU0E8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkFsIG9yZ2FuaXphciBsYSBjYW1hPC9wPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNvbG9jYSBsYSBjb2JpamEgc29icmUgbGEgc3VwZXJmaWNpZTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkVzdGlyYSBwb2NvIGEgcG9jbyBjYWRhIHVuYSBkZSBsYXMgcHVudGFzIGRlIGxhIGNvYmlqYSBwYXJhIHRlbmRlcmxhPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2dyYXBoaWNcIj5cblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtZW5DYXNhUGFnZTVcIiBzcmM9XCJpbWcvc3ZnL2VuQ2FzYVBhZ2U1LTEuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FTiBDQVNBPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5BbCBjYXJnYXI8L3A+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+RXZpdGEgbGV2YW50YXIgb2JqZXRvcyBwZXNhZG9zLjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlNpIGRlYmVzIHRyYW5zcG9ydGFyIG1hbnVhbG1lbnRlIHZhcmlvcyBwYXF1ZXRlcyBkaXN0cmliw7p5ZWxvcyBzb2JyZSB0dXMgZG9zIG1hbm9zLjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLWVuQ2FzYVBhZ2U2XCIgc3JjPVwiaW1nL3N2Zy9lbkNhc2FQYWdlNi5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIENBU0E8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkFsIGNhcmdhcjwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJlbkNhc2EtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5DYXNhLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Fdml0YSBsZXZhbnRhciBvYmpldG9zIHBlc2Fkb3MuPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+U2kgZGViZXMgdHJhbnNwb3J0YXIgbWFudWFsbWVudGUgdmFyaW9zIHBhcXVldGVzIGRpc3RyaWLDunllbG9zIHNvYnJlIHR1cyBkb3MgbWFub3MuPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuQ2FzYS1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+U2kgcG9zZWVzIGJvbHNvIG8gbWFsZXTDrW4sIGRlYmVzIGNvbGdhcmxvIGNydXphZG8geS9vIGRlIGxvcyBkb3MgdGlyYW50ZXMsIHBhcmEgZGlzdHJpYnVpciBlbCBwZXNvIHNvYnJlIGxvcyBkb3MgaG9tYnJvcy48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiZW5UcmFiYWpvUGFnZVwiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham8tY29udGVudF9ncmFwaGljUGFnZTFcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlMVwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9cIiBzcmM9XCJpbWcvc3ZnL2VuVHJhYmFqb1BhZ2UxLnBuZ1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+RU4gRUwgVFJBQkFKTzwvcD5cblx0XHRcdFx0PHVsIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlViaWNhIGxvcyBlbGVtZW50b3MgZGUgdHJhYmFqbyBkZSBtYXlvciB1c28gZGVudHJvIGRlIHpvbmEgbcOtbmltYSwgZXZpdGFuZG8gbG9zIG1vdmltaWVudG9zIGZvcnphZG9zIGVuIHRyb25jbyB5IGV4dHJlbWlkYWQgc3VwZXJpb3IgYWwgcmVhbGl6YXIgYWdhcnJlczwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJlblRyYWJham9QYWdlMlwiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham8tY29udGVudF9ncmFwaGljUGFnZTJcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlMlwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlMlwiIHNyYz1cImltZy9zdmcvZW5UcmFiYWpvUGFnZTIuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FTiBFTCBUUkFCQUpPPC9wPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+UmVjdWVyZGEgYWp1c3RhciBsYSBhbHR1cmEgZGVsIGFzaWVudG8gYWxpbmVhbmRvIGxvcyBjb2RvcyBjb24gbGEgc3VwZXJmaWNpZSBkZSB0cmFiYWpvIChjb2RvcyBkb2JsYWRvcyBlbiDDoW5ndWxvIHJlY3RvIDkwwrApLjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJlblRyYWJham9QYWdlM1wiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham8tY29udGVudF9ncmFwaGljUGFnZTNcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlM1wiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlM1wiIHNyYz1cImltZy9zdmcvZW5UcmFiYWpvUGFnZTMuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5FTiBFTCBUUkFCQUpPPC9wPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+RWwgbW91c2UgZGViZSBlc3RhciBhIHR1IGFsY2FuY2Ugc29icmUgbGEgbWlzbWEgc3VwZXJmaWNpZSBkb25kZSBzZSBlbmN1ZW50cmEgdWJpY2FkbyBlbCB0ZWNsYWRvLiBBc2Vnw7pyYXRlIGRlIG1hbnRlbmVybG9zIHNpZW1wcmUganVudG9zLCBsb2dyYW5kbyB1biBhcG95byBtZWRpbyBkZSBhbnRlYnJhem8g4oCTIG11w7FlY2EgZHVyYW50ZSBzdSB1dGlsaXphY2nDs24uPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJlblRyYWJham8tY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImVuVHJhYmFqb1BhZ2U0XCIgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9ncmFwaGljIGVuVHJhYmFqby1jb250ZW50X2dyYXBoaWNQYWdlNFwiPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY2VuVHJhYmFqb1BhZ2U0XCIgY2xhc3M9XCJncmFwaGljLWVuVHJhYmFqb1BhZ2U0XCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlNC5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIEVMIFRSQUJBSk88L3A+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5FbCBtb3VzZSBkZWJlIGVzdGFyIGEgdHUgYWxjYW5jZSBzb2JyZSBsYSBtaXNtYSBzdXBlcmZpY2llIGRvbmRlIHNlIGVuY3VlbnRyYSB1YmljYWRvIGVsIHRlY2xhZG8uIEFzZWfDunJhdGUgZGUgbWFudGVuZXJsb3Mgc2llbXByZSBqdW50b3MsIGxvZ3JhbmRvIHVuIGFwb3lvIG1lZGlvIGRlIGFudGVicmF6byDigJMgbXXDsWVjYSBkdXJhbnRlIHN1IHV0aWxpemFjacOzbi48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50IGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJlblRyYWJham9QYWdlNVwiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham9QYWdlNS1jb250ZW50X2dyYXBoaWNcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlNVwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlNVwiIHNyYz1cImltZy9zdmcvZW5UcmFiYWpvUGFnZTUuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIEVMIFRSQUJBSk88L3A+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5EdXJhbnRlIGxhIGRpZ2l0YWNpw7NuIHkgbWFuaXB1bGFjacOzbiBkZWwgbW91c2UsIHJlY3VlcmRlIHJlYWxpemFyIG1vdmltaWVudG9zIGVuIGJsb3F1ZS48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLW1lc3NhZ2VcIj5Fdml0YSBsYXMgZGVzdmlhY2lvbmVzIGVuIG11w7FlY2FzPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50IGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJlblRyYWJham9QYWdlNlwiIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZ3JhcGhpYyBlblRyYWJham9QYWdlNS1jb250ZW50X2dyYXBoaWNcIj5cblx0XHRcdFx0PGltZyBpZD1cImdyYXBoaWNlblRyYWJham9QYWdlNVwiIGNsYXNzPVwiZ3JhcGhpYy1lblRyYWJham9QYWdlNVwiIHNyYz1cImltZy9zdmcvZW5UcmFiYWpvUGFnZTYuc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVOIEVMIFRSQUJBSk88L3A+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5EdXJhbnRlIGxhIGRpZ2l0YWNpw7NuIHkgbWFuaXB1bGFjacOzbiBkZWwgbW91c2UscmVjdWVyZGUgcmVhbGl6YXIgbW92aW1pZW50b3MgZW4gYmxvcXVlLjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tbWVzc2FnZVwiPkV2aXRhIGxhcyBkZXN2aWFjaW9uZXMgZW4gbXXDsWVjYXM8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgZW5UcmFiYWpvUGFnZTUtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImVuVHJhYmFqb1BhZ2U3XCIgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9ncmFwaGljIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZ3JhcGhpY1wiPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY2VuVHJhYmFqb1BhZ2U1XCIgY2xhc3M9XCJncmFwaGljLWVuVHJhYmFqb1BhZ2U3XCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlNy5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24gZW5UcmFiYWpvUGFnZTUtY29udGVudF9kZXNjcmlwdGlvbiBlblRyYWJham9QYWdlN1wiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+RU4gRUwgVFJBQkFKTzwvcD5cblx0XHRcdFx0PHVsIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkFsIGhhY2VyIGFnYXJyZSBkZSBjYWphcyB1IG90cm9zIG9iamV0b3MsIHJlY3VlcmRhIG1hbnRlbmVyIGxhIGVzcGFsZGEgcmVjdGEsIHN1amV0YW5kbyBmaXJtZW1lbnRlIGxhIGNhcmdhIGNvbiBhbWJhcyBtYW5vcy48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmVfdGV4dFwiPlV0aWxpemEgaWRlYWxtZW50ZSBjYXNhIGNvbiBhc2FzPGJyIC8+byBhZ2FycmFkZXJhczwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnQgZW5UcmFiYWpvUGFnZTUtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBpZD1cImVuVHJhYmFqb1BhZ2U4XCIgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9ncmFwaGljIGVuVHJhYmFqb1BhZ2U1LWNvbnRlbnRfZ3JhcGhpY1wiPlxuXHRcdFx0XHQ8aW1nIGlkPVwiZ3JhcGhpY2VuVHJhYmFqb1BhZ2U4XCIgY2xhc3M9XCJncmFwaGljLWVuVHJhYmFqb1BhZ2U4XCIgc3JjPVwiaW1nL3N2Zy9lblRyYWJham9QYWdlOC5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24gZW5UcmFiYWpvUGFnZTUtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+RU4gRUwgVFJBQkFKTzwvcD5cblx0XHRcdFx0PHVsIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkFsIGhhY2VyIGFnYXJyZSBkZSBjYWphcyB1IG90cm9zIG9iamV0b3MsIHJlY3VlcmRhIG1hbnRlbmVyIGxhIGVzcGFsZGEgcmVjdGEsIHN1amV0YW5kbyBmaXJtZW1lbnRlIGxhIGNhcmdhIGNvbiBhbWJhcyBtYW5vcy48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJlblRyYWJham8tY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmVfdGV4dFwiPlV0aWxpemEgaWRlYWxtZW50ZSBjYXNhIGNvbiBhc2FzPGJyIC8+byBhZ2FycmFkZXJhczwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImVuVHJhYmFqby1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZW5UcmFiYWpvLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5BbCB0cmFuc3BvcnRhciBtYW51YWxtZW50ZSBjYWphcyB1IG90cm9zIGVsZW1lbnRvcywgbWFudGVubG9zIHNpZW1wcmUgYWwgY3VlcnBvLjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8aDE+RXJyb3IgZGUgUMOhZ2luYTwvaDE+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYyBleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9ncmFwaGljLS13aWR0aFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9ib2R5SHVtYW4tZXh0cmVtaWRhZGVzLnBuZ1wiIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZ3JhcGhpYy1ob21icm9cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXN1YlRpdGxlXCI+SG9tYnJvPC9wPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1saXN0XCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tbGlzdF9pdGVtXCI+U2lydmUgZGUgbmV4byBlbnRyZSBlbCBicmF6byB5IGVsIGN1ZXJwby48L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLWxpc3RfaXRlbVwiPkVzdMOhIGZvcm1hZG8gcG9yIGxhIHVuacOzbiBkZSBsb3MgZXh0cmVtb3MgZGUgdHJlczwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZXh0cmVtaWRhZFN1cGVyaW9yLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dFwiPmh1ZXNvczogbGEgY2xhdsOtY3VsYSwgbGEgZXNjw6FwdWxhIChvbcOzcGxhdG8pIHkgZWwgaMO6bWVybywgYWRlbcOhcyBkZSBtw7pzY3Vsb3MsIGxpZ2FtZW50b3MgeSB0ZW5kb25lcy48L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJleHRyZW1pZGFkU3VwZXJpb3ItY29udGVudF9kZXNjcmlwdGlvbi1zcXVhcmVcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0XCI+RXMgZWwgaG9tYnJvIGxhIGFydGljdWxhY2nDs24gY29uIG1heW9yIGFtcGxpdHVkIGRlIG1vdmltaWVudG9zIGRlIHRvZG8gZWwgY3VlcnBvLCBwb2RlbW9zIHJlYWxpemFyIG1vdmltaWVudG9zIGVuIHRvZGFzIGxhcyBkaXJlY2Npb25lcyBpbmNsdXNpdmUgcm90YWNpw7NuPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJjb250ZW5lZG9yXCI+XG4gICAgPGRpdiBjbGFzcz1cInByaW5jaXBhbF9fZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbmNpcGFsX19ncmlkX19jaGlsZFwiPlxuICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwib3BjaW9uX19tZW51XCIgaHJlZj1cIiMvY3VpZGFyLWV4dHJlbWlkYWRlc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3BjaW9uX19tZW51X190ZXh0XCI+RW5sYWNlIGEgdHJhYmFqYXI8L3A+XG4gICAgICAgICAgICA8L2E+LS0+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm9wY2lvbl9fbWVudVwiIGhyZWY9XCIjL3F1ZS1hY3RpdmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW4tY29udGVuZWRvclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW5cIiBzcmM9XCJpbWcvY3VsdHVyaXNtby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9wY2lvbl9fbWVudV9fdGV4dFwiPiZpcXVlc3Q7UXVlIGVzIGFjdCZpYWN1dGU7dmF0ZT88L3A+XG4gICAgICAgICAgICA8L2E+PGEgY2xhc3M9XCJvcGNpb25fX21lbnVcIiBocmVmPVwiIy9jb25vY2UtZXh0cmVtaWRhZGVzXCI+PHNwYW4gY2xhc3M9XCJvcGNpb25fX21lbnVfX2ltYWdlbi1jb250ZW5lZG9yXCI+PGltZyBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuXCIgc3JjPVwiaW1nL2NlcmVicm8ucG5nXCIgYWx0PVwiXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcGNpb25fX21lbnVfX3RleHRcIj5Db25vY2UgdHVzIGV4dHJlbWlkYWRlcyBzdXBlcmlvcmVzPC9wPlxuICAgICAgICAgICAgPC9hPjxhIGNsYXNzPVwib3BjaW9uX19tZW51XCIgaHJlZj1cIiMvYWN0aXZhLWV4dHJlbWlkYWRcIj48c3BhbiBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuLWNvbnRlbmVkb3JcIj48aW1nIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW5cIiBzcmM9XCJpbWcvYmFuZGFzLnBuZ1wiIGFsdD1cIlwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3BjaW9uX19tZW51X190ZXh0XCI+QWN0aXZhIHR1cyBleHRyZW1pZGFkZXMgc3VwZXJpb3JlczwvcD5cbiAgICAgICAgICAgIDwvYT48YSBjbGFzcz1cIm9wY2lvbl9fbWVudVwiIGhyZWY9XCIjL3JlbGFqYS1leHRyZW1pZGFkZXNcIj48c3BhbiBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuLWNvbnRlbmVkb3JcIj48aW1nIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW5cIiBzcmM9XCJpbWcvbXVzY3Vsby5wbmdcIiBhbHQ9XCJcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9wY2lvbl9fbWVudV9fdGV4dFwiPkN1aWRhIHR1cyBleHRyZW1pZGFkZXMgc3VwZXJpb3JlczwvcD5cbiAgICAgICAgICAgIDwvYT48YSBjbGFzcz1cIm9wY2lvbl9fbWVudVwiIGhyZWY9XCIjL2NsYXJvLXRpcHMtcGFnZTFcIj48c3BhbiBjbGFzcz1cIm9wY2lvbl9fbWVudV9faW1hZ2VuLWNvbnRlbmVkb3JcIj48aW1nIGNsYXNzPVwib3BjaW9uX19tZW51X19pbWFnZW5cIiBzcmM9XCJpbWcvYm9tYmlsbGEucG5nXCIgYWx0PVwiXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcGNpb25fX21lbnVfX3RleHRcIj5DbGFybyB0aXBzPC9wPlxuICAgICAgICAgICAgPC9hPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbmNpcGFsX19ncmlkX19jaGlsZFwiPjxzdmcgY2xhc3M9XCJwcmluY2lwYWxfX2ZpZ3VyYVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDc1MS41NiA3NzMuNFwiPlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNjZGRlZmM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNlNjk1NGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICNjZGRlZmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICMyNjMyMzg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzQ1NWE2NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy02IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmY3MjVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNscy04IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmJjMGE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNkOTQ1Mjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmOGU4ZDg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM0MDM0MzM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmOWIwOTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmNjlkN2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmOTdhNTM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNlMGUwZTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMTgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNlYmViZWI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwiQ2FwYV8yXCIgZGF0YS1uYW1lPVwiQ2FwYSAyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVmVyc2lvbl8xXCIgZGF0YS1uYW1lPVwiVmVyc2lvbiAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk03MDguMjQsNTA0Ljg2QzY4My42NSw1OTkuMTEsNjMxLjcsNjc3LjYsNTY1LjY5LDczMXEtNi45NSw1LjYzLTE0LjA1LDEwLjgzSDE3Ni41MWMtNC4yNS0zLjQ3LTguNDUtNy4wOC0xMi40OS0xMC44M0M2Nyw2NDIuNzcsMjMuMTMsNDkwLjI3LDYzLjEzLDMzNi43NSwxMTcuNDMsMTI4LjI2LDMwNS44OC0zLjExLDQ4NCw0My4yOFM3NjIuNTMsMjk2LjM2LDcwOC4yNCw1MDQuODZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMlwiIGQ9XCJNNDA1LDE4Mi4zOWExMy4yMSwxMy4yMSwwLDEsMSwxMy4yMS0xMy4yMUExMy4yMiwxMy4yMiwwLDAsMSw0MDUsMTgyLjM5Wm0wLTI0YTEwLjgsMTAuOCwwLDEsMCwxMC44LDEwLjc5QTEwLjgsMTAuOCwwLDAsMCw0MDUsMTU4LjM5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTJcIiBkPVwiTTM3My45LDE4Mi4zOWExMy4yMSwxMy4yMSwwLDEsMSwxMy4yMS0xMy4yMUExMy4yMiwxMy4yMiwwLDAsMSwzNzMuOSwxODIuMzlabTAtMjRhMTAuOCwxMC44LDAsMSwwLDEwLjc5LDEwLjc5QTEwLjgsMTAuOCwwLDAsMCwzNzMuOSwxNTguMzlaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMlwiIGQ9XCJNMzg2LjE3LDE2OC4zOWwtMS43OS0xLjYzYzEuNjYtMS44MiwzLjQ1LTIuNyw1LjMxLTIuNTlhNi45Miw2LjkyLDAsMCwxLDQuNzUsMi42OWwtMS45NCwxLjQzLDEtLjcxLTEsLjcyYTMuNzIsMy43MiwwLDAsMC02LjMzLjA5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTNcIiBkPVwiTTczMS44Nyw0OTQuNjZjLTI3LDk4LjMxLTg0LDE4MC4xNy0xNTYuNTEsMjM1Ljg5cS03LjY0LDUuODgtMTUuNDIsMTEuM0gxNDhjLTQuNjYtMy42Mi05LjI2LTcuMzgtMTMuNzEtMTEuMy0xMDYuNTQtOTItMTU0LjY5LTI1MS4xLTExMC43Ny00MTEuMjNDODMuMTcsMTAxLjg1LDI5MC4wOC0zNS4xNyw0ODUuNywxMy4yMlM3OTEuNDksMjc3LjE5LDczMS44Nyw0OTQuNjZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNFwiIGQ9XCJNNTguNjEsNTIyLjI0YTMuNDYsMy40NiwwLDAsMSwuMi40NmMuMTMuMzUuMzEuOC41MywxLjM4bDIsNS4yOUM2Myw1MzQsNjUuNTEsNTQwLjYsNjguOCw1NDguNzJjNi42MiwxNi4yMiwxNi4yOCwzOC40OSwyOS45LDYxLjUzYTEzNy4zLDEzNy4zLDAsMCwxLDguNTMsMTcuNjEsNzkuMDcsNzkuMDcsMCwwLDEsNC41NCwxNy42NiwxMjQsMTI0LDAsMCwxLS4wOSwzMC44Yy0xLDguNzItMi4zNSwxNS43LTMuMjQsMjAuNTJxLS43LDMuNTUtMS4xLDUuNTRjLS4xMy42LS4yMywxLjA3LS4zLDEuNDRhMiwyLDAsMCwxLS4xNC40OCwzLjE0LDMuMTQsMCwwLDEsLjA2LS41Yy4wNi0uMzcuMTMtLjg0LjIzLTEuNDUuMjMtMS4zMi41NS0zLjE4LDEtNS41Ni44LTQuODQsMi0xMS44MywzLTIwLjUzYTEyNS4zOSwxMjUuMzksMCwwLDAtLjA3LTMwLjY0LDc5LjIxLDc5LjIxLDAsMCwwLTQuNTQtMTcuNDlBMTM4LjUsMTM4LjUsMCwwLDAsOTgsNjEwLjYyQzg0LjQsNTg3LjU2LDc0Ljc5LDU2NS4yLDY4LjMsNTQ4LjkyYy0zLjIzLTguMTUtNS42Ni0xNC44Mi03LjI4LTE5LjQ1LS44Mi0yLjMxLTEuNDItNC4xMi0xLjgzLTUuMzRsLS40NS0xLjRBMi40NSwyLjQ1LDAsMCwxLDU4LjYxLDUyMi4yNFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy00XCIgZD1cIk03MSw1OTkuM2EzLjksMy45LDAsMCwxLC41NC42OEw3Myw2MDJsNS4xNiw3LjQ3YzQuMzIsNi4zMiwxMC40MiwxNSwxNi41MiwyNSwzLDUsNS43MSw5LjkyLDgsMTQuNDdzNCw4Ljc4LDUuMzgsMTIuMzcsMi4zNSw2LjU0LDIuOTIsOC42bC42OCwyLjM4YTMuODksMy44OSwwLDAsMSwuMTkuODQsMy41MywzLjUzLDAsMCwxLS4zNC0uOGwtLjgxLTIuMzNjLS42Ni0yLTEuNzQtNC45NC0zLjE0LTguNDlzLTMuMjQtNy43My01LjUyLTEyLjI1LTQuOTUtOS4zOS04LTE0LjM5Yy02LjA4LTEwLTEyLjExLTE4LjY4LTE2LjMyLTI1LjA4LTIuMTItMy4yLTMuODItNS43OS01LTcuNjFsLTEuMy0yLjFBMy41MywzLjUzLDAsMCwxLDcxLDU5OS4zWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTQ1LjcyLDYxOC4zM2M0LjYzLTEwLDE2LjU1LTE2LjQ2LDI3LjUtMTUuNTctMi40NCwxLTMuOTQsMy41MS00LjU1LDYuMDdzLS41LDUuMjItLjcxLDcuODRjLTEsMTIuNTctOS4wNywyMy4zLTE2Ljg0LDMzLjIzLTUuNDYsNy0xMC45NSwxNC0xNy40OCwyMEMzNC40Miw2NTIsMzUuNTUsNjMzLjA2LDQ1LjcyLDYxOC4zM1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk03My4yMiw2MDIuOWMtNy01LjM1LTE1LjkyLTcuNTctMjQuNjktNy42NnMtMTcuNDQsMS44LTI1Ljk0LDRjLTUuMTEsMS4yOS0xMC4yOSwyLjczLTE0LjY2LDUuNjdzLTcuODQsNy43LTcuOTMsMTNjNy4yMS03LjkzLDE4LjgzLTkuNDYsMjkuMTItMTIuNDQsNy0yLDEzLjctNC45MywyMC44MS02LjQxczE3LC4yOCwyMy4yOSwzLjkxXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNzIsNjAxLjQ4YzMtMy4xOSwxLjM2LTEwLjY3LTEuMjktMTQuMnMtNi44Ny01LjUxLTExLTdhNzcuMTYsNzcuMTYsMCwwLDAtMTctMy45NCwxNy4yMiwxNy4yMiwwLDAsMCw1LjM2LDkuNDJBNTEuMjUsNTEuMjUsMCwwLDAsNTcsNTkyLjIxbDE1LDkuMjdcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk0xMDAuNjEsNTk3LjE5YzguNzEsMy44MSwxNS40NSwxMC45NCwyMiwxNy44OGE5Nyw5NywwLDAsMS0yNy4zOC0xMS4zNGMtMy4zNy0yLjA1LTYuNzItNC4zNS0xMC41Ny01LjIxcy04LjE4Ljg2LTExLjM5LDMuNTJDNzguNjcsNTk0LDkxLjkxLDU5My4zOCwxMDAuNjEsNTk3LjE5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTIxOS42Nyw1OTMuNTdjMTAuODMsMTMuNzgsMTQuNDMsMzIuMTcsMTMuMjIsNDkuNjVhMTE5LDExOSwwLDAsMC0zOC40MS01OS42M2MtNy01Ljg3LTE2LjA4LTEwLjUxLTI0LjgyLTEwLjUxQzE4Ny42NSw1NzEuNDcsMjA4LjUxLDU3OS4zNiwyMTkuNjcsNTkzLjU3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTE5NC41NCw1NjUuOTFjNiwuNDQsMTEuNTYsMy41LDE2LjU1LDYuOTIsNy42NCw1LjI1LDE0LjgsMTEuODYsMTguMTQsMjAuNTFhNjMuNTQsNjMuNTQsMCwwLDAtNTUuNjktMjJDMTgwLjEyLDU2OC4wOSwxODcuMjIsNTY1LjM3LDE5NC41NCw1NjUuOTFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNMTc3LjYzLDU0NS4yMmMzLjQ5LDIuNDMsNi4xNyw2LjQxLDYsMTAuNjZhMTMuMTUsMTMuMTUsMCwwLDEtMy40Nyw3Ljg2LDUyLjYsNTIuNiwwLDAsMS03LjMyLDdjLTIuMjEtOS44Mi00Ljg4LTIwLjA4LTcuMDktMjkuOUMxNjkuOTEsNTQxLjY4LDE3NC4xMyw1NDIuNzksMTc3LjYzLDU0NS4yMlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk0xNTcuMTgsNTQ0LjI4YzQuNzMsMyw4Ljk0LDcuMDksMTEuMjQsMTIuMjFzMy4yNSwxMS41OC4zNSwxNi4zOEE0MjAsNDIwLDAsMCwwLDE0Miw1MzcuMDlDMTQ3LjIxLDUzOS4xNiwxNTIuNDYsNTQxLjI1LDE1Ny4xOCw1NDQuMjhaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNMTM5Ljg0LDU2MS4xNEEzMy42NiwzMy42NiwwLDAsMSwxNjguNSw1NzMuN2EyOCwyOCwwLDAsMC0xNS4zOS0yLjkxLDM2OC42LDM2OC42LDAsMCwwLTM5LjU2LDcuMzRBMzMuNjUsMzMuNjUsMCwwLDEsMTM5Ljg0LDU2MS4xNFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01OC43NCw1MjIuMjRjLS4zMi0zLjE0LDMuMDctNi4yNiw2LTcuMzZzNi4yNS0uNzQsOS4zMy0uMDZjMTcuODYsNCwzMi42MiwxOS4zNywzNS44MSwzNy4zOUEyMzAuNDgsMjMwLjQ4LDAsMCwwLDg0LjUsNTQxLjQ3bDEuNDcuNDFhMjkuNjYsMjkuNjYsMCwwLDEtMjAtMTQuNjMsMTUuNTgsMTUuNTgsMCwwLDAtMi42OC00LjExYy0xLjItMS4xMy0zLjA5LTEuNzMtNC41MS0uOVwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTU4LjcyLDUyMi4yMUEzOC41LDM4LjUsMCwwLDAsMzAuNiw1MTUuOSwzMy42NCwzMy42NCwwLDAsMCw3LjIzLDUzMi4zN2EyOS44NywyOS44NywwLDAsMC0uMTUsMjguMzJjNC41NS05LjQ1LDkuNDItMTkuMjgsMTcuODgtMjUuNDcsMi0xLjQ1LDQuMjMtMi43Nyw1LjM0LTUsMS4zLTIuNTMuNzctNS42NywxLjg3LTguMjksMS4zNy0zLjIzLDUuMTItNC4xNyw4LjYzLTQuMzVzMTMuNjUsMywxNy45Miw0LjU5XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTguOTQsNTIyLjA2QzUwLjUzLDUxOS41Niw0MSw1MjMuNjgsMzUuMyw1MzBzLTguNjMsMTQuNzYtOS42MiwyMy4yMS0uMTksMTcsLjY2LDI1LjQ3YTEwNS43NywxMDUuNzcsMCwwLDAsMTQuNDktMzIuMTFjMS4zNS01LjE2LDIuMzMtMTAuNDksNC43Ni0xNS4yNHM4LjA3LTguNDcsMTMuMzUtOS4yNFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTU5LjIyLDUyMi4yNGMtNi43Mi0zLjExLTEwLjUxLTEwLjEzLTExLjM3LTE3LjQ5QTIyLjIsMjIuMiwwLDAsMSw1Niw0ODUuMTEsMjMuOCwyMy44LDAsMCwxLDYyLjI2LDUxMGMtMS40Miw0LTQsOC4xLTMsMTIuMjdcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy00XCIgZD1cIk0xMTIuMzksNjU4LjU0YTUuNDEsNS40MSwwLDAsMSwuMjgtMS4wNmMuMjMtLjY4LjUyLTEuNywxLTMsLjktMi41OCwyLjM4LTYuMjYsNC40My0xMC42OWEyNzEuMzEsMjcxLjMxLDAsMCwxLDQyLjUzLTYzLjE0LDY4LjkzLDY4LjkzLDAsMCwxLDguNTEtNy44NiwyMC4xMSwyMC4xMSwwLDAsMSwyLjY3LTEuNjgsNSw1LDAsMCwxLDEtLjQsNi41MSw2LjUxLDAsMCwxLTEsLjU0LDI0LjA3LDI0LjA3LDAsMCwwLTIuNTYsMS43OCw3NS4xNyw3NS4xNywwLDAsMC04LjI5LDgsMjk0Ljc1LDI5NC43NSwwLDAsMC00Mi40NCw2M2MtMi4xMSw0LjM5LTMuNjUsOC00LjY0LDEwLjU2LS41MywxLjI2LS44NiwyLjI3LTEuMTMsMi45M0E2LjcsNi43LDAsMCwxLDExMi4zOSw2NTguNTRaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9XCJjbHMtNlwiIHBvaW50cz1cIjg4LjU5IDc0MC43NSAxMzQuNTEgNzQwLjc1IDE0MS44MyA2ODIuMTQgODAuMiA2ODIuMTQgODguNTkgNzQwLjc1XCI+PC9wb2x5Z29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNMTA0LjcsNjU0LjEzYy00Ljg2LTExLjE4LTIuODEtMjQuNzMtOS0zNS4yNC00LjczLTgtMTMuNDgtMTIuODItMjIuMTctMTYuMjEtMiw2LjA2LTEuMDYsMTIuODIsMS41LDE4LjY3czYuNjEsMTAuOTEsMTAuOSwxNS42NGM1LjkyLDYuNTUsMTIuMzMsMTEuMDksMTguNzYsMTcuMTRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcz1cImNscy02XCIgeD1cIjc3LjM3XCIgeT1cIjY4Mi4xNFwiIHdpZHRoPVwiNjguNjhcIiBoZWlnaHQ9XCIxMS45NlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMjMuNDIgMTM3Ni4yNCkgcm90YXRlKDE4MClcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy00XCIgZD1cIk03OS42Niw2OTQuNDljMC0uMjIsMTQuODYtLjM5LDMzLjE5LS4zOXMzMy4yLjE3LDMzLjIuMzktMTQuODYuMzgtMzMuMi4zOFM3OS42Niw2OTQuNyw3OS42Niw2OTQuNDlaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTUuNTgsNTIyLjcxYTc1LjY3LDc1LjY3LDAsMCwxLDgtMTIsMjUuNDUsMjUuNDUsMCwwLDEsMTEuNzMtOC4wOGM2LjE5LTEuODEsMTIuODQtLjM3LDE5LDEuNDdhMTUxLjcyLDE1MS43MiwwLDAsMSwyMS4xMiw4LDQxLjgxLDQxLjgxLDAsMCwxLTI4LjA3LjVjLTQuNzMtMS42MS05LjMyLTEuNC0xNC4yNy0uODQtNiwuNjktMTMuNiw2LjI3LTE3LjUxLDEwLjkyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNMTY3LjI1LDU3Mi44N2MxMC4yLjU2LDE5LjEyLDguNDEsMjIuNjgsMThzMi4zNCwyMC40My0xLjUxLDI5Ljg5LTEwLjE0LDE3LjcxLTE2LjgxLDI1LjQ0Yy0zLjM1LTExLjUxLTYuNzItMjMuMDgtOC4xOS0zNVMxNjMuMDcsNTg0LjExLDE2Ny4yNSw1NzIuODdaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjE5LjY3LDU5My41N2MxMC44MywxMy43OCwxNC40MywzMi4xNywxMy4yMiw0OS42NWExMTksMTE5LDAsMCwwLTM4LjQxLTU5LjYxNi4wOC0xMC41MS0yNC44Mi0xMC41MUMxODcuNjUsNTcxLjQ3LDIwOC41MSw1NzkuMzYsMjE5LjY3LDU5My41N1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOTQuNTQsNTY1LjkxYzYsLjQ0LDExLjU2LDMuNSwxNi41NSw2LjkyLDcuNjQsNS4yNSwxNC44LDExLjg2LDE4LjE0LDIwLjUxYTQsMCwwLDAtNTUuNjktMjJDMTgwLjEyLDU2OC4wOSwxODcuMjIsNTY1LjM3LDE5NC41NCw1NjUuOTFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc3LjYzLDU0NS4yMmMzLjQ5LDIuNDMsNi4xNyw2LjQxLDYsMTAuNjZhMTMuMTUsMTMuMTUsMCwwLDEtMy40Nyw3Ljg2LDUyLjYxLTcuMzIsN2MtMi4yMS05LjgyLTQuODgtMjAuMDgtNy4wOS0yOS45QzE2OS45MSw1NDEuNjgsMTc0LjEzLDU0Mi43OSwxNzcuNjMsNTQ1LjIyWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1Ny4xOCw1NDQuMjhjNC43MywzLDguOTQsNy4wOSwxMS4yNCwxMi4yMXMzLjI1LDExLjU4LjM1LDE2LjM4QTQyMCw0MjAsMCwwLjA5QzE0Ny4yMSw1MzkuMTYsMTUyLjQ2LDU0MS4yNSwxNTcuMTgsNTQ0LjI4WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzOS44NCw1NjEuMTRBMzMuNjYsMzMuNjYsMCwwLDEsMTY4LjUsNTczLjdhMjgsMjgsMCwwLDAtMTUuMzktMi45MSwzNjguNiwzLTM5LjU2LDcuMzRBMzMuNjUsMzMuNjUsMCwwLDEsMTM5Ljg0LDU2MS4xNFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNjcuMjUsNTcyLjg3YzEwLjIuNTYsMTkuMTIsOC40MSwyMi42OCwxOHMyLjM0LDIwLjQzLTEuNTEsMjkuODktMTAuMTQsMTcuNy40NGMtMy4zNS0xMS41MS02LjcyLTIzLjA4LTguMTktMzVTMTYzLjA3LDU4NC4xMSwxNjcuMjUsNTcyLjg3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTRcIiBkPVwiTTYyMy4xNyw2MDQuOHMtLjA2LjA5LS4xMy4yOGwtLjMzLjg2LTEuMjIsMy4yOWMtMS4wNiwyLjg2LTIuNjIsNy00LjY3LDEyYTI4OS4zMSwyODkuMzEsMCwwLDEtMTguNiwzOC4yOCw4NS4zNyw4NS4zNywwLDAsMC01LjMxLDExLDQ5LjUzLDQ5LjUzLDAsMCwwLTIuODIsMTEsNzcuMTEsNzcuMTEsMCwwLDAsLjA2LDE5LjE2Yy42Myw1LjQzLDEuNDUsOS43NywyLDEyLjc3bC42OCwzLjQ0Yy4wOC4zOC4xNS42Ny4xOS45YTEuMzEsMS4zMSwwLDAsMCwuMDkuM3MwLS4xMSwwLS4zMS0uMDgtLjUzLS4xNC0uOWMtLjE0LS44Mi0uMzQtMi0uNi0zLjQ3LS41LTMtMS4yNy03LjM1LTEuODYtMTIuNzdhNzcuNzQsNzcuNzQsMCwwLDEsMC0xOS4wNiw0OS4xLDQ5LjEsMCwwLDEsMi44My0xMC44OCw4NC4zNiw4NC4zNiwwLDAsMSw1LjI5LTEwLjg5LDI3NiwyNzYsMCwwLDAsMTguNDktMzguMzljMi01LjA4LDMuNTMtOS4yMyw0LjUzLTEyLjExLjUyLTEuNDMuODktMi41NiwxLjE0LTMuMzJsLjI4LS44N0EyLjU0LDIuNTQsMCwwLDAsNjIzLjE3LDYwNC44WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTUyMyw2NDkuMThjLTYuNzMsOC41Ny05LDIwLTguMjIsMzAuODlhNzQuMDUsNzQuMDUsMCwwLDEsMjMuOS0zNy4xYzQuMzktMy42NiwxMC02LjU1LDE1LjQ0LTYuNTVDNTQyLjg3LDYzNS40Myw1MjkuOSw2NDAuMzQsNTIzLDY0OS4xOFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01MzguNTksNjMyYy0zLjc2LjI4LTcuMTksMi4xOC0xMC4zLDQuMzEtNC43NSwzLjI3LTkuMjEsNy4zOC0xMS4yOCwxMi43NmEzOS41MSwzOS41MSwwLDAsMSwzNC42NS0xMy42N0M1NDcuNTYsNjMzLjMyLDU0My4xNSw2MzEuNjMsNTM4LjU5LDYzMlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk01NDkuMTEsNjE5LjA5YTgsOCwwLDAsMC0zLjcyLDYuNjQsOC4xNyw4LjE3LDAsMCwwLDIuMTUsNC44OEEzMi4zNCwzMi4zNCwwLDAsMCw1NTIuMSw2MzVjMS4zNy02LjExLDMtMTIuNDksNC40MS0xOC42QTE5Ljc0LDE5Ljc0LDAsMCwwLDU0OS4xMSw2MTkuMDlaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTYxLjgzLDYxOC41MWExOC4xNiwxOC4xNiwwLDAsMC03LDcuNmMtMS40MiwzLjE4LTIsNy4yLS4yMiwxMC4xOUEyNTguNCwyNTguNCwwLDAsMSw1NzEuMjgsNjE0LDUzLjcyLDUzLjcyLDAsMCwwLDU2MS44Myw2MTguNTFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTcyLjYzLDYyOWEyMSwyMSwwLDAsMC0xNy44NCw3LjgxLDE3LjM5LDE3LjM5LDAsMCwxLDkuNTgtMS44MUEyMjguMTksMjI4LjE5LDAsMCwxLDU4OSw2MzkuNTcsMjAuOTIsMjAuOTIsMCwwLDAsNTcyLjYzLDYyOVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy01XCIgZD1cIk02MjMuMDgsNjA0LjhjLjItMi0xLjkxLTMuOS0zLjc1LTQuNThhMTAuMjUsMTAuMjUsMCwwLDAtNS44MSwwLDI5LjczLDI5LjczLDAsMCwwLTIyLjI4LDIzLjI2LDE0NC4yMSwxNDQuMjEsMCwwLDEsMTUuODEtNi42OGwtLjkxLjI2YTE4LjQ4LDE4LjQ4LDAsMCwwLDEyLjQ3LTkuMTEsOS41OCw5LjU4LDAsMCwxLDEuNjctMi41NiwyLjQ1LDIuNDUsMCwwLDEsMi44LS41NVwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTYyMy4xLDYwNC43OGEyMy45NCwyMy45NCwwLDAsMSwxNy40OS0zLjkzLDIwLjksMjAuOSwwLDAsMSwxNC41NCwxMC4yNSwxOC41NiwxOC41NiwwLDAsMSwuMDksMTcuNjJjLTIuODMtNS44OC01Ljg1LTEyLTExLjEyLTE1Ljg1LTEuMjMtLjktMi42My0xLjcyLTMuMzItMy4wOC0uODEtMS41OC0uNDgtMy41My0xLjE3LTUuMTYtLjg1LTItMy4xOC0yLjYtNS4zNi0yLjcxcy04LjUsMS44OS0xMS4xNSwyLjg2XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNjIzLDYwNC42OGM1LjIzLTEuNTUsMTEuMTUsMSwxNC43MSw0LjkzczUuMzcsOS4xOCw2LDE0LjQ0LjEyLDEwLjU3LS40MSwxNS44NGE2NS44MSw2NS44MSwwLDAsMS05LTIwYy0uODQtMy4yMi0xLjQ2LTYuNTMtMy05LjQ5YTExLjc1LDExLjc1LDAsMCwwLTguMy01Ljc1XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNjIyLjc5LDYwNC44YzQuMTgtMS45NCw2LjUzLTYuMzEsNy4wNy0xMC44OGExMy44MiwxMy44MiwwLDAsMC01LjA3LTEyLjIzLDE0LjgzLDE0LjgzLDAsMCwwLTMuOSwxNS40N2MuODksMi41MiwyLjUsNSwxLjksNy42NFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTRcIiBkPVwiTTU4OS43MSw2ODkuNmE1LjM4LDUuMzgsMCwwLDAtLjE4LS42NmMtLjE0LS40Mi0uMzItMS4wNi0uNjItMS44Ni0uNTctMS42LTEuNDgtMy44OS0yLjc2LTYuNjVhMTY4LjQ5LDE2OC40OSwwLDAsMC0yNi40Ni0zOS4yOCw0MS4wOCw0MS4wOCwwLDAsMC01LjMtNC44OSwxMi4xMiwxMi4xMiwwLDAsMC0xLjY2LTEsNC41NCw0LjU0LDAsMCwwLS42My0uMjUsMy4zNywzLjM3LDAsMCwwLC41OS4zNCwxNC4yOSwxNC4yOSwwLDAsMSwxLjU5LDEuMTEsNDYuMDgsNDYuMDgsMCwwLDEsNS4xNiw1LDE4My40NiwxODMuNDYsMCwwLDEsMjYuNCwzOS4yYzEuMzIsMi43MywyLjI4LDUsMi44OSw2LjU3LjMzLjc4LjU0LDEuNDEuNzEsMS44MkEyLjkzLDIuOTMsMCwwLDAsNTg5LjcxLDY4OS42WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGNsYXNzPVwiY2xzLTZcIiBwb2ludHM9XCI2MDQuNTEgNzQwLjc1IDU3NS45NCA3NDAuNzUgNTcxLjM4IDcwNC4yOCA2MDkuNzMgNzA0LjI4IDYwNC41MSA3NDAuNzVcIj48L3BvbHlnb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcz1cImNscy02XCIgeD1cIjU2OC43NlwiIHk9XCI3MDQuMjhcIiB3aWR0aD1cIjQyLjczXCIgaGVpZ2h0PVwiNy40NFwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTRcIiBkPVwiTTYxMC4wNyw3MTJjMC0uMTMtOS4yNS0uMjMtMjAuNjYtLjIzcy0yMC42NS4xLTIwLjY1LjIzLDkuMjQuMjQsMjAuNjUuMjRTNjEwLjA3LDcxMi4xLDYxMC4wNyw3MTJaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNjI1LjA1LDYwNS4wOWE0Ni40LDQ2LjQsMCwwLDAtNS03LjQ3LDE1LjczLDE1LjczLDAsMCwwLTcuMy01Yy0zLjg1LTEuMTMtOC0uMjMtMTEuODMuOTFhOTQuNzQsOTQuNzQsMCwwLDAtMTMuMTQsNSwyNS45NCwyNS45NCwwLDAsMCwxNy40Ny4zMSwxOS43LDE5LjcsMCwwLDEsOC44OC0uNTJjMy43NS40Myw4LjQ2LDMuOTEsMTAuODksNi44XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtNVwiIGQ9XCJNNTU1LjU3LDYzNi4zYy02LjM0LjM1LTExLjksNS4yMy0xNC4xMSwxMS4xOHMtMS40NiwxMi43Mi45NCwxOC42LDYuMzEsMTEsMTAuNDYsMTUuODNjMi4wOC03LjE3LDQuMTgtMTQuMzYsNS4wOS0yMS43N1M1NTguMTcsNjQzLjI5LDU1NS41Nyw2MzYuM1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MjMsNjQ5LjE4Yy02LjczLDguNTctOSwyMC04LjIyLDMwLjg5YTc0LjA1LDc0LjA1LDAsMCwxLDIzLjktMzcuMWM0LjM5LTMuNjE1LjQ0LTYuNTVDNTQyLjg3LDYzNS40Myw1MjkuOSw2NDAuMzQsNTIzLDY0OS4xOFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNscy03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MzguNTksNjMyYy0zLjc2LjI4LTcuMTksMi4xOC0xMC4zLDQuMzEtNC43NSwzLjI3LTkuMjEsNy4zOC0xMS4yOCwxMi43NmEzOTAsMCwxLDM0LjY1LTEzLjY3QzU0Ny41Niw2MzMuMzIsNTQzLjE1LDYzMS42Myw1MzguNTksNjMyWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU0OS4xMSw2MTkuMDlhOCw4LDAsMCwwLTMuNzIsNi42NCw4LjE3LDguMTcsMCwwLDAsMi4xNSw0Ljg4QTMyLjM0LDMyLjM0LDAsNjM1YzEuMzctNi4xMSwzLTEyLjQ5LDQuNDEtMTguNkExOS43NCwxOS43NCwwLDAsMCw1NDkuMTEsNjE5LjA5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU2MS44Myw2MTguNTFhMTguMTYsMTguMTYsMCwwLDAtNyw3LjZjLTEuNDIsMy4xOC0yLDcuMi0uMjIsMTAuMTlBMjU4LjQsMjU4NzEuMjgsNjE0LDUzLjcyLDUzLjcyLDAsMCwwLDU2MS44Myw2MTguNTFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJjbHMtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTcyLjYzLDYyOWEyMSwyMSwwLDAsMC0xNy44NCw3LjgxLDE3LjM5LDE3LjM5LDAsMCwxLDkuNTgtMS44MUEyMjguMTksMjI4LjE5LDYzOS41NywyMC45MiwyMC45MiwwLDAsMCw1NzIuNjMsNjI5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2xzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU1NS41Nyw2MzYuM2MtNi4zNC4zNS0xMS45LDUuMjMtMTQuMTEsMTEuMThzLTEuNDYsMTIuNzIuOTQsMTguNiw2LjMxLDExLDEwMi4wOC03LjE3LDQuMTgtMTQuMzYsNS4wOS0yMS43N1M1NTguMTcsNjQzLjI5LDU1NS41Nyw2MzYuM1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk0zNzEuMjYsNTE0LjYzYy0xLDkuODMtMi4xMSwyMC4wOS0yLjExLDIwLjA5cy0zLjgsMTEuNjEtNy42MywxOC45MmMxMC44NCw0LjEyLDIyLjE5LDQuMzgsMzIuMzgsOS44OS41Mi0yLjQzLDQuNTMtMjMuOTMsMTQuODItMzIuOS42NC0uNTUsMS4xNC0yLjIsMS44Mi00LjQ2QzM5Ny40OCw1MjIuMjEsMzg0LjI2LDUxOC43OCwzNzEuMjYsNTE0LjYzWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJjbHMtOFwiIGN4PVwiMzc3LjE1XCIgY3k9XCI1NjAuNDNcIiByPVwiMTcuMDRcIj48L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLThcIiBkPVwiTTQzMS4yNiw1MjMuNjRjLTcuMjktLjQ0LTE1LjU3LTIuNTMtMjMuMjQtMi41NC0uNzMsMTIuODgtMS40NCwyNi4xLTIuMTIsMzkuMzMsMTEuNzUuMzQsMzQuMDgsMCwzNC4wOCwwYTI1Ni43MiwyNTYuNzIsMCwwLDAsOC4yOC0zNS43OVE0MzkuNzYsNTI0LjE2LDQzMS4yNiw1MjMuNjRaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cImNscy04XCIgY3g9XCI0MjIuOTRcIiBjeT1cIjU2MC40M1wiIHI9XCIxNy4wNFwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMlwiIGQ9XCJNNDYyLjIxLDM3OS40NmMyMC44MSw1Ny41Mi05LjcsMTQ5LjctOS43LDE0OS43cy00NS4zMiwyMS04Ni45MiwzLjM5bC0xNS40Mi02OS4zNHMtMTEuODMtNTYuNiwyMi42OS04MS43M1M0NjIuMjEsMzc5LjQ2LDQ2Mi4yMSwzNzkuNDZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNNDM0Ljc2LDcyMWMtMS4zOS0yLjY1LTQuNTYtNC4xNC04LjgxLTE3LjkzLTMuNTQtMTEuNDYsOS44My03Mi4wOSwxNC45LTEwNC42MWgwYzIuNy0xNC43NS4wOC0zMi4xMy0uODctMzguMDUtMTIuMzcuNTgtMjEuNy40LTM0LjA4LDAtLjI0LDQuODctMS4xNCwxOS4zOC0xLjM3LDI0LjE5LS4xNSwzLjI2LS4yNSw2LjQ2LS4zMyw5LjY1aDBzLTIuNDUsMzMuNzYsMS43Myw2Mi44MWM2LjE2LDQyLjg0LjExLDU0LjEyLS4xMSw1NC44OCwwLDAsMiwxMC42OSw2LjYzLDExLjY3LDEyLjg3LDIuNjcsMjAuMzksMTguNzEsMjguNDIsMTcuMDlzOS41LTMuNzYsOS41LTMuNzZTNDM3Ljg1LDcyNi45MSw0MzQuNzYsNzIxWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJjbHMtOFwiIGN4PVwiNDIyLjk0XCIgY3k9XCI1NjAuNDNcIiByPVwiMTcuMDRcIj48L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTlcIiBkPVwiTTQ0Ni40NSw3MzkuMmMzLjktLjQxLTYuNTctMTEuNDktNS44NS0xMXMyNC4yNiwxOS4wNywyNS44NywyMy4yOWMuNiwxLjU1LS42LDQuNC01LjMzLDQuNzJzLTIwLjI3LTQuMzYtMjQuNzMtNi0xOS44Ny0yMS4zOS0yMy4xNy0yMi45LTMuODEsMTguNzgtNC41NSwxOWwtMi41OS0xLjc4cy00LjU1LTIwLjk0LS4zLTMyLjYxYzAsMCwzLjQ2LjY0LDExLjQ4LDguNjNDNDI1LjgyLDcyOS4xMSw0NDEsNzM5Ljc3LDQ0Ni40NSw3MzkuMlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk01MDUuMjEsNDA5LjRjMS4xMywyLjI5LS41NCwxMi45My0uODgsMTkuNTdzMS45MSwxMywzLjk0LDEyLjg5LS4xMi0xMi40NSw0LjMxLTExLjgxLDYuODQsNi40Nyw5LDEyLjExLDUuOTEsMjAuNDEsOC41NywxOC40MWMyLjg5LTIuMTgtNS4xOS0yMi43NS0yLjk1LTIzLjY4LDEuNTYtLjY1LDEwLjU2LDE5LjkxLDE0LjEyLDE4Ljk0LDMuNzYtMS0xMC43Mi0yMC41NS05LjA4LTIzLjI4czEzLjEzLDE3LjY4LDE2LDE1LjMxLTEyLjktMjAuOS0xMi4xNS0yMy4xLDEyLjE2LDEyLjE5LDEzLjYyLDkuNDljMS41NS0yLjg1LTEwLjU1LTE0Ljg4LTE2Ljc4LTIxcy0xNi0xNC4zOS0xNy43OS0xNS44NVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk01MDUuMjEsNDA5LjRhNy44MSw3LjgxLDAsMSwwLS4wOC0xMUE3LjgxLDcuODEsMCwwLDAsNTA1LjIxLDQwOS40WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk00NjkuODgsMzUyLjYyYTE2LjI0LDE2LjI0LDAsMCwxLTE2LjM0LTIxLDE2LjI0LDE2LjI0LDAsMSwxLDE2LjM0LDIxWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk01MDAuOTQsNDExLjg4Yy04LjkyLTguNzktNDQuMDktNjQuNjQtNDUuNi02Ni43OWwtMS41NS0zLjE1LDI3Ljk0LTE2LDEuMTEsMS44M2EyMDcuNDQsMjA3LjQ0LDAsMCwxLDExLjgyLDI0YzEuNjcsMy44OSwyNi4yMSw0NS4xNCwyNi4yMSw0NS4xNEw1MDIuMjgsNDEzLjNaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTBcIiBkPVwiTTQ1MywyNzQuNzhhMTguNzgsMTguNzgsMCwwLDEtMzAuNTctMy43LDE4Ljc4LDE4Ljc4LDAsMSwxLDMwLjU3LDMuN1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMFwiIGQ9XCJNNDU1LjY5LDM0Ni42MmwtMS41OC0yLjQxYy0xLjE3LTIuMTktMjguNjEtNTQuMTMtMzMuNDMtNzhsLS40MS0yLDM2LjQ1LTguMzEuNTUsMS45NGM3LjU5LDI2Ljc1LDIzLjE4LDY2LjA1LDI1LjU3LDcxLjI5bC44MywxLjgxWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk00ODAuNTYsMzQ3LjRhMTYuMjQsMTYuMjQsMCwxLDEsMS42My0xOS40OCwxNi4yNywxNi4yNywwLDAsMS0xLjYzLDE5LjQ4WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLThcIiBkPVwiTTMyMC4zNSw0NDcuMTljLS43NiwyLjQzLDIuNTksMTIuNjgsNCwxOS4xN3MuMTksMTMuMTUtMS44NCwxMy4zNS0xLjg2LTEyLjMtNi4xMy0xMS01LjcyLDcuNDgtNywxMy40LTIuNTgsMjEuMDktNS41MywxOS41M2MtMy4yLTEuNjgsMS41LTIzLjI4LS44NS0yMy44NS0xLjY0LS4zOS03LjI2LDIxLjM0LTEwLjkzLDIwLjk1LTMuODgtLjQxLDcuMzEtMjIsNS4yNi0yNC40M1MyODcuMTcsNDkzLjg5LDI4My45NCw0OTJzOS40MS0yMi42OSw4LjMyLTI0Ljc0LTEwLjA3LDE0LTExLjk0LDExLjU0LDguMDUtMTYuMzgsMTMuMjQtMjMuMzcsMTMuNS0xNi43NSwxNS0xOC40N1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk0zMjAuMzUsNDQ3LjE5YTcuODIsNy44MiwwLDEsMS0xLjY5LTEwLjkzQTcuODMsNy44MywwLDAsMSwzMjAuMzUsNDQ3LjE5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zMzguMjcsMzc0LjkxYTE2LjI0LDE2LjI0LDAsMSwwLTE3LjktNS4wOEExNi4yNCwxNi4yNCwwLDAsMCwzMzguMjcsMzc0LjkxWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zMjQuODQsNDQ0LjkyYzUtMTEuNSwyMy40OS03OS44OCwyNC4wOS04Mi40NGwuMjUtMy41LTMxLjg4LTQuMzItLjM0LDIuMTFjLS4wNy40LTEuNjEsOS45Mi0yLDI2LjY2LS4wOSw0LjI0LTE0LjIzLDU1LjEtMTQuMjMsNTUuMWwyMy4zNyw4LjJaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTBcIiBkPVwiTTM1MS43NywyOTMuNTVhMTguODYsMTguODYsMCwwLDEtNi40NCwxLjI2LDE4Ljc4LDE4Ljc4LDAsMCwxLTE5LjEzLTE4LjQyLDE4Ljc4LDE4Ljc4LDAsMSwxLDI1LjU3LDE3LjE2WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEwXCIgZD1cIk0zMTcsMzYyLjczbC0uMzEtMi44N2MwLTIuNDgsMy41Ni02NS4xNywxMC4xMS04OC42N2wuNTYtMiwzNi4yNSw5LjEzLS4zOSwyYy01LjM3LDI3LjI4LTEzLjgxLDczLjMzLTE0LjA1LDc5LjA4bC0uMDksMlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMFwiIGQ9XCJNMzM4Ljg0LDM3NC43YTE2LjI0LDE2LjI0LDAsMSwxLDYuNi00Ljc1QTE2LjI1LDE2LjI1LDAsMCwxLDMzOC44NCwzNzQuN1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy05XCIgZD1cIk0zNDAuNjQsNzE0LjY3czMuMzcsNy4yNC4yNCwxNC40LTYuODUsMTYuMTQtNy4yNCwyMi41LTYsMTguMTMtMTYuMTIsMjEtMTUuODktMi42OC0xNC45LTEwLjg2UzMxMyw3NDIuNDUsMzEzLDc0Mi40NVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy04XCIgZD1cIk0zMzkuMTIsNjQwLjQzYy01LjE4LDMyLjYzLTcsNjctMjMuMDgsOTYuODEtMS40MSwyLjYxLTIuOTQsNS4yNC0zLjQ4LDguMTVzLjExLDYuMjcsMi40Myw4LjEyLDYuMDYsMS43MSw4Ljc1LjE3LDQuNi00LjEzLDYuMi02Ljc5YzguNy0xNC40OCwxMC4xMy0zMiwxNS00OC4yMiw2LjkzLTIzLjE4LDE5Ljc1LTQzLjUxLDI4Ljg4LTY1LjcyUzM4OC4yOCw1ODYuNiwzOTQsNTYzLjI4Yy0xMC42LTMuNy0yMS4zNS04LTMyLjQ1LTkuNjQsMCwwLTkuMzUsMTguMDctMTAuMjQsMjAuMTJhMTIwLjQ4LDEyMC40OCwwLDAsMC02LjkxLDIwLjg1Yy0zLjQ1LDE0Ljk0LTIuODUsMzAuNjgtNS4yNSw0NS44MlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJjbHMtOFwiIGN4PVwiMzc3LjE1XCIgY3k9XCI1NjAuNDNcIiByPVwiMTcuMDRcIj48L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTExXCIgZD1cIk0zMzQuNCwxMjcuNTVjMTEuMDctMTMuODIsMzItMjcuMzIsNjAuMTgtMjQuNDEsMTcuNzcsMS44Myw0Ny43NSwxNC4yMyw0NC43OSw0MXMtMTAuOTMsMjMuMDUsMS40OCwzNy44Miw0Mi4zMSw2Mi4xNy45MSw5MC45My05MiwxMy45MS0xMjAuNjYtMThTMzIwLDE0NS41MywzMzQuNCwxMjcuNTVaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTBcIiBkPVwiTTQ0NS4yMywzMDMuNzdjMTAuMjUtMTAuNTQsOS42NS0yMC4xOSw1LjY3LTI3Ljc3LjE1LS4xNC4zMi0uMjYuNDctLjRhMTguNzIsMTguNzIsMCwwLDAtNy41NS0zMS43MnYwcy0xLjI4LS43Ni0yNS02LjY1Yy0xNC4wOS0zLjc1LTI5LjMzLTEyLjA2LTU1LjYyLDQuNi02LDUuNDQtMTguNjYsOS4yOS0yOC44MiwxOUExOC43MywxOC43MywwLDAsMCwzMzgsMjk0LjE3YTE4LjUyLDE4LjUyLDAsMCwwLDYuNDUsMS4xNiwxOC4xNiwxOC4xNiwwLDAsMCwyLjc3LS4yMmM1LjMzLDE0LjQ2LDE3LjY5LDUyLjk1LDE3LjY5LDUyLjk1bC03LjYzLDM4Ljc3YzU1LjU1LDI5LDExMC00Ljc1LDExMC00Ljc1WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLThcIiBkPVwiTTQwMi44NCwyNDRjLTQuMjYsMi40Ni03LjYxLDMuNzUtMTIuMzksMy44Ny03LjExLjE5LTkuNzEtNC0xMi4wOC00LjZsLTIzLjA2LTUzLjI1TDM5NywyMDguODVsLjEsMS43N1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMlwiIGQ9XCJNMzkxLjM4LDIyNy40N2E0MS45NCw0MS45NCwwLDAsMS0xMi44MS0zLjc0LDg3LjQ4LDg3LjQ4LDAsMCwxLTExLjM3LTYuMjJsLTExLjg5LTI3LjQ2TDM5NywyMDguODVsLjEsMS43NywzLDE3LjY1QzM5Ny4yMiwyMjgsMzk0LjMsMjI3LjgxLDM5MS4zOCwyMjcuNDdaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNMzQxLjIsMTYxLjcxcy0xNS4zMS0zLjI5LTEzLjMyLDEzLjkxLDE0LjQ1LDE3LjU0LDE4LjEzLDE4LjI5YzAsMCw2Ljg1LDMwLjYzLDQ0LjY0LDI3LjY5UzQyMi4yNCwxODkuNDEsNDIyLDE3MHMxLjg5LTUzLjA5LTIyLjg0LTU1LjU4QzM3NC4xNywxMTEuOTMsMzM5LDExMy41NywzNDEuMiwxNjEuNzFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTEgb2pvXCIgZD1cIk0zODIsMTcwYTUuMDgsNS4wOCwwLDEsMS01LjMtNC44NEE1LjA4LDUuMDgsMCwwLDEsMzgyLDE3MFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMSBvam9cIiBkPVwiTTQwNy45MSwxNzBhNS4wOCw1LjA4LDAsMSwxLTUuMy00Ljg0QTUuMDgsNS4wOCwwLDAsMSw0MDcuOTEsMTcwWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTExXCIgZD1cIk0zODQuMDcsMTU4LjExYy4yLS4yNy0uNTUtMS4yOC0yLjI2LTIuMjVhMTMuMTksMTMuMTksMCwwLDAtMTQuNTksMS4zOSw3Ljg3LDcuODcsMCwwLDAtMS41NiwxLjczYy0uMjkuNDctLjM2Ljc5LS4yNC45MnMuNDUsMCwuOTItLjE5bDEuODgtLjk0YTE4Ljc0LDE4Ljc0LDAsMCwxLDYuMy0xLjg2LDE4LjQsMTguNCwwLDAsMSw2LjU5LjYzQzM4Mi43OSwxNTgsMzgzLjg2LDE1OC40MiwzODQuMDcsMTU4LjExWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTExXCIgZD1cIk0zOTguNjcsMTU3LjQ3Yy4yNy4yNiwxLjI0LS4zNiwyLjgxLTEuMTJhMTcuMzMsMTcuMzMsMCwwLDEsMTIuODgtMS4yNGwyLC41N2MuNTEuMTMuODQuMTYuOTQsMHMwLS40NC0uNDEtLjg1YTcuODcsNy44NywwLDAsMC0xLjg2LTEuNCwxMy4xOSwxMy4xOSwwLDAsMC0xNC41OSwxLjRDMzk5LDE1Ni4xMiwzOTguNDMsMTU3LjI0LDM5OC42NywxNTcuNDdaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTJcIiBkPVwiTTMzMC44NiwxNjkuMzhjLTEuMzIsNC41NS41NSw5LjM1LDIuMzgsMTMuNzJhNy40NCw3LjQ0LDAsMCwwLDIuMzEsMy40NmMxLjE2LjgsMy4wNi42OCwzLjY3LS41OXMtLjI4LTIuNjEtMS0zLjc5LTEuMDctMywuMDgtMy42OWMuNTMtLjM0LDEuMjMtLjMxLDEuNzktLjYxLDEuMjItLjY0LDEuMjEtMi4zOC45LTMuNzNhMjEuMjMsMjEuMjMsMCwwLDAtMi01LjMyYy0uOTEtMS42NC0yLjM0LTMuMzItNC4yMS0zLjI5UzMzMS40LDE2Ny41LDMzMC44NiwxNjkuMzhaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTNcIiBkPVwiTTM3Mi41MiwyMjkuOHMxOC41OSwxNi4wNiwyMi44OSwxNS4zNiw0LjczLTE2Ljg5LDQuNzMtMTYuODksMTAuNjcsMi45MSwxMi41NCw1LDQuNjUsMjIuMyw0LjY1LDIyLjNjLTMuMjgsMy40My0xOC4xLTguOC0yMC40My03cy0xMS44MSwxNi41My0xNCwxNi4yOWMwLDAtMTgtMjMuMTgtMTcuMzgtMjdDMzY1Ljc5LDIzNi4yOSwzNzIuNTIsMjI5LjgsMzcyLjUyLDIyOS44WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTExXCIgZD1cIk0zNDEuMiwxNjEuNzFjMjAuMzQtNC41NywyNS42MS0xMy41NiwyNy41Mi0yOS4yOCwwLDAsMTMuMywzNy41NSw2My4zNCwyOC0uMzMtLjI3LTIuOC01MC0zNC41Mi00OS4xMS0zMi44MS45NC01MC44Miw2LTU2LjM0LDI2LjM0QzMzNywxNTMuMTMsMzQxLjIsMTYxLjcxLDM0MS4yLDE2MS43MVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xMVwiIGQ9XCJNMzQxLjIsMTYxLjcxYy4xMSw1LjI2LDYsMjQuMTMsNiwyNC4xM3MtMS4xNC0yNS41NiwyLjI3LTMxUzM0MS4yLDE2MS43MSwzNDEuMiwxNjEuNzFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTJcIiBkPVwiTTM3Ni45NCwxOTAuMDdhMTAuMTQsMTAuMTQsMCwxLDEtMTAuNTktOS42NkExMC4xNSwxMC4xNSwwLDAsMSwzNzYuOTQsMTkwLjA3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTEyXCIgZD1cIk00MjIuMTgsMTg4YTkuODQsOS44NCwwLDEsMS0xMC4yNy05LjM4QTkuODMsOS44MywwLDAsMSw0MjIuMTgsMTg4WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTE0XCIgZD1cIk0zOTYuNjEsMTg0LjA1Yy42NS42Ny0uMzYsMi41OC0yLjcsM3MtNC0xLTMuNjItMS44MSwxLjY0LTEuMjYsMy0xLjU1UzM5NiwxODMuMzQsMzk2LjYxLDE4NC4wNVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xNVwiIGQ9XCJNMzk5LjQsMTkzLjU5Yy4yMi4zNy0uNjQsMS40NS0yLjYxLDIuMzNhMTQuMDksMTQuMDksMCwwLDEtMTUuNDctMy40Yy0xLjQyLTEuNjMtMS43NS0zLTEuMzktMy4yMi43OS0uNTUsNCwyLjg4LDkuMzQsNEMzOTQuNTYsMTk0LjUyLDM5OC45MiwxOTIuNzUsMzk5LjQsMTkzLjU5WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwiY2xzLTE2XCIgeD1cIjcyOS42M1wiIHk9XCI5LjQ3XCIgd2lkdGg9XCI5LjMzXCIgaGVpZ2h0PVwiMjAwLjYxXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJjbHMtMTdcIiB4PVwiNTk0LjI5XCIgeT1cIjExLjAyXCIgd2lkdGg9XCIxMzMuOTNcIiBoZWlnaHQ9XCIxOTkuMzRcIiByeD1cIjAuMTNcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xOFwiIGQ9XCJNNzI5LjYzLDIxMS45MUg1OTIuODdhLjEzLjEzLDAsMCwxLS4xNC0uMTNWOS42MWEuMTQuMTQsMCwwLDEsLjE0LS4xNEg3MjkuNjNhLjE0LjE0LDAsMCwxLC4xNC4xNFYyMTEuNzhBLjEzLjEzLDAsMCwxLDcyOS42MywyMTEuOTFaTTU5NiwyMDguODFINzI2LjUzYS4xMy4xMywwLDAsMCwuMTMtLjE0di0xOTZhLjEzLjEzLDAsMCwwLS4xMy0uMTRINTk2YS4xMy4xMywwLDAsMC0uMTMuMTR2MTk2QS4xMy4xMywwLDAsMCw1OTYsMjA4LjgxWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwiY2xzLTEzXCIgeD1cIjYwNy43N1wiIHk9XCIyMy4zMlwiIHdpZHRoPVwiMTA3LjE5XCIgaGVpZ2h0PVwiMTc0LjYxXCIgcng9XCIwLjEzXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJjbHMtMThcIiB4PVwiNjMxLjE2XCIgeT1cIjcyLjgyXCIgd2lkdGg9XCI2MC4xOVwiIGhlaWdodD1cIjcwLjU1XCIgcng9XCIwLjA2XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjbHMtMTZcIiBkPVwiTTY4Ni41OCwxMzQuNzNjLjA4LjIzLTIuODksMS41My04LjU1Ljg3YTIwLjkxLDIwLjkxLDAsMCwxLTkuNi0zLjg0QTE5LjQzLDE5LjQzLDAsMCwxLDY2MSwxMjBhMTYuODgsMTYuODgsMCwwLDEsNS43LTE2LDE1LjE3LDE1LjE3LDAsMCwxLDQuMzMtMi41MywxMS41OCwxMS41OCwwLDAsMSw1LjQyLS42Myw5LjUzLDkuNTMsMCwwLDEsNS40MSwyLjM3LDcsNywwLDAsMSwyLjEzLDYuMywxMC4yOCwxMC4yOCwwLDAsMS0zLDUuNDIsMjAuMTMsMjAuMTMsMCwwLDEtNC41MywzLjM0LDI1LjA4LDI1LjA4LDAsMCwxLTEwLjgyLDMuMDksMjEuNTUsMjEuNTUsMCwwLDEtMTEuNTMtMi42MywyMC45MSwyMC45MSwwLDAsMS04LjQ4LTguNzksMTcuOTMsMTcuOTMsMCwwLDEtMS41Mi0xMi4zMiwxOC4zMywxOC4zMywwLDAsMSw2LjQ5LTEwLjE0QTE1Ljg4LDE1Ljg4LDAsMCwxLDY1Niw4NC43YTEzLjUsMTMuNSwwLDAsMSw2LjEzLS4xOSwxMCwxMCwwLDAsMSw1LjU2LDMuMTQsOS4yMyw5LjIzLDAsMCwxLDIuMTgsNS45NCwxMS4zMywxMS4zMywwLDAsMS0xLjQ1LDUuNjYsMTUuMTQsMTUuMTQsMCwwLDEtMy40Myw0LjEyLDIzLDIzLDAsMCwxLTguNTMsNC41MywyMS44NCwyMS44NCwwLDAsMS05LC43LDE4LjQsMTguNCwwLDAsMS03LjgxLTMsMTYuOSwxNi45LDAsMCwxLTcuNDUtMTEuODFBMTQuMjIsMTQuMjIsMCwwLDEsNjM1LDgzLjY3YTEyLjA2LDEyLjA2LDAsMCwxLDUuMTEtNC4wOGMxLjQtLjUzLDIuMjEtLjUyLDIuMjQtLjM4cy0uNjQuNS0xLjc4LDEuMjZhMTMuNDMsMTMuNDMsMCwwLDAtNCw0LjI3QTEyLjY1LDEyLjY1LDAsMCwwLDYzNSw5My4zOWExNC4xNywxNC4xNywwLDAsMCw2LjYzLDkuMjhBMTYuMzQsMTYuMzQsMCwwLDAsNjU1LjMxLDEwNGExOS4zNiwxOS4zNiwwLDAsMCw2Ljg0LTMuODdjMi0xLjc3LDMuMzEtNCwzLjItNi40MmE0LjYxLDQuNjEsMCwwLDAtNC4xMi00LjU1LDksOSwwLDAsMC0zLjk0LjE5LDExLjMsMTEuMywwLDAsMC0zLjcxLDEuOTQsMTMuNTUsMTMuNTUsMCwwLDAtNC42OCw3LjQ2LDEzLDEzLDAsMCwwLDEuMTUsOSwxNi4yMSwxNi4yMSwwLDAsMCw2LjQ3LDYuNzMsMTYuNzksMTYuNzksMCwwLDAsOC45MSwyLjA3LDIwLjM2LDIwLjM2LDAsMCwwLDguNzctMi4zOSwxNS41MSwxNS41MSwwLDAsMCwzLjQ5LTIuNDcsNS45Miw1LjkyLDAsMCwwLDEuNzgtMi44OSwyLjU1LDIuNTUsMCwwLDAtLjcyLTIuMzMsNS4yMiw1LjIyLDAsMCwwLTIuOS0xLjI3LDcuMjMsNy4yMywwLDAsMC0zLjQxLjI5LDEwLjcxLDEwLjcxLDAsMCwwLTMuMTgsMS43NCwxMy4xOSwxMy4xOSwwLDAsMC00Ljg0LDEyLjI3LDE2Ljg2LDE2Ljg2LDAsMCwwLDUuNzMsMTAuMTYsMjAuMzUsMjAuMzUsMCwwLDAsOC4yNCw0LjEyQzY4My40OCwxMzQuODksNjg2LjU0LDEzNC4zLDY4Ni41OCwxMzQuNzNaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLTxkaXYgY2xhc3M9XCJjb250ZW5lZG9yX19uYXZlZ2FjaW9uXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25cIiBocmVmPVwiLi92aXN0YXMvdmlzdGEtMS5odG1sXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvdG9uX19uYXZlZ2FjaW9uX19maWd1cmEtY29udGVuZWRvclwiPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJib3Rvbl9fbmF2ZWdhY2lvbl9fZmlndXJhXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgMjYuNDQgMjYuMjdcIiBmaWxsPVwiI2ZmZlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkNhcGFfMlwiIGRhdGEtbmFtZT1cIkNhcGEgMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJQb3BfdXBcIiBkYXRhLW5hbWU9XCJQb3AgdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkxvZ29feV9ib3RvbmVzXCIgZGF0YS1uYW1lPVwiTG9nbyB5IGJvdG9uZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTEuNTYsMjYuMjdBMS41OCwxLjU4LDAsMCwxLDAsMjQuNjV2LTIzQTEuNTgsMS41OCwwLDAsMSwxLjU2LDAsMS42OSwxLjY5LDAsMCwxLDIuNC4yM0wxOS43OSwxMS43NWExLjU3LDEuNTcsMCwwLDEsMCwyLjc3TDIuNCwyNmExLjY5LDEuNjksMCwwLDEtLjg0LjIzWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIzLjI0LDI1LjcxYTMuMiwzLjIsMCwwLDEtMy4yLTMuMlYzLjc2YTMuMiwzLjIsMCwwLDEsNi40LDBWMjIuNTFBMy4yLDMuMiwwLDAsMSwyMy4yNCwyNS43MVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJib3Rvbl9fbmF2ZWdhY2lvblwiIGhyZWY9XCIuL3Zpc3Rhcy92aXN0YS0xLmh0bWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm90b25fX25hdmVnYWNpb25fX2ZpZ3VyYS1jb250ZW5lZG9yXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImJvdG9uX19uYXZlZ2FjaW9uX19maWd1cmFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld2JveD1cIjAgMCAyNi40NCAyNi4yN1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkNhcGFfMlwiIGRhdGEtbmFtZT1cIkNhcGEgMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJQb3BfdXBcIiBkYXRhLW5hbWU9XCJQb3AgdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkxvZ29feV9ib3RvbmVzXCIgZGF0YS1uYW1lPVwiTG9nbyB5IGJvdG9uZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTEuNTYsMjYuMjdBMS41OCwxLjU4LDAsMCwxLDAsMjQuNjV2LTIzQTEuNTgsMS41OCwwLDAsMSwxLjU2LDAsMS42OSwxLjY5LDAsMCwxLDIuNC4yM0wxOS43OSwxMS43NWExLjU3LDEuNTcsMCwwLDEsMCwyLjc3TDIuNCwyNmExLjY5LDEuNjksMCwwLDEtLjg0LjIzWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIzLjI0LDI1LjcxYTMuMiwzLjIsMCwwLDEtMy4yLTMuMlYzLjc2YTMuMiwzLjIsMCwwLDEsNi40LDBWMjIuNTFBMy4yLDMuMiwwLDAsMSwyMy4yNCwyNS43MVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj4tLT5cblx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cIm1hbnRlbk1vdmltaWVudG9zLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtYW50ZW5Nb3ZpbWllbnRvcy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwibWFudGVuTW92aW1pZW50b3MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPk1BTlTDiU4gVU5BIEJVRU5BIFBPU1RVUkEgRU4gRVNQQUxEQSBZIENPTlRST0xBIExBIFZFTE9DSURBRCBERSBMT1MgTU9WSU1JRU5UT1M8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwibWFudGVuTW92aW1pZW50b3MtY29udGVudF9kZXNjcmlwdGlvbi10ZXh0XCI+QWwgcmVhbGl6YXIgZXN0b3MgZWplcmNpY2lvcyBjb24gcmVzaXN0ZW5jaWEsIHJlY3VlcmRhIHF1ZSBsYSBlc3BhbGRhIGRlYmUgZXN0YXIgc2llbXByZSByZWN0YSwgZXZpdGFuZG8gZmxleGlvbmVzIG8gY3VydmF0dXJhcyBxdWUgZmF2b3JlemNhbiBsYSByZWFsaXphY2nDs24gZGVsIGVqZXJjaWNpby4gVGVuIGVuIGN1ZW50YSBxdWUgbG9zIG1vdmltaWVudG9zIG5vIGRlYmVuIHNlciBicnVzY29zLiBNaWVudHJhcyByZWdyZXNhcyBhIGxhIHBvc2ljacOzbiBpbmljaWFsIGRlbCBlamVyY2ljaW8sIHJlYWxpemEgdW4gcGVxdWXDsW8gZnJlbmFkbyBwYXJhIG5vIHBlcm1pdGlyIHF1ZSBsYSBiYW5kYSBsZSBnYW5lIGEgbnVlc3RyYSBmdWVyemEuIFRlIGludml0YW1vcyBhIHByYWN0aWNhciBsb3Mgc2lndWllbnRlcyBlamVyY2ljaW9zPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWFudGVuTW92aW1pZW50b3MtY29udGVudF9ncmFwaGljXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvYmFuZGFFbGFzdGljYU1hbnRlbi5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cIm11bmllY2FFeHRyZW1pZGFkLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50X2dyYXBoaWMgbXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9ncmFwaGljLS13aWR0aFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9ib2R5SHVtYW5NdW5pZWNhTWFuby5wbmdcIiBjbGFzcz1cImV4dHJlbWlkYWRTdXBlcmlvci1jb250ZW50X2dyYXBoaWMtbXVuaWVjYVwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cIm11bmllY2FFeHRyZW1pZGFkLWNvbnRlbnRfZGVzY3JpcHRpb24tc3ViVGl0bGVcIj5NdcOxZWNhIHkgTWFubzwvcD5cblx0XHRcdFx0PHVsIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi1saXN0XCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW1cIj5MYSBtdcOxZWNhIG5vcyBwZXJtaXRlIGxhIHVuacOzbiBlbnRyZSBlbCBhbnRlYnJhem8geSBsYSBtYW5vLjwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwibXVuaWVjYUV4dHJlbWlkYWQtY29udGVudF9kZXNjcmlwdGlvbi1saXN0X2l0ZW1cIj5MYSBtYW5vIGVzIGVsIHNlZ21lbnRvIGVudHJlIGxhIG11w7FlY2EgeSBsb3MgZGVkb3MsPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PHAgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5lbmNvbnRyw6FuZG9zZSB2YXJpb3MgaHVlc29zIHF1ZSBzZSB1bmVuIGVudHJlIHPDrSwgcGVybWl0acOpbmRvbm9zIHJlYWxpemFyIGRpZmVyZW50ZXMgbW92aW1pZW50b3MgcXVlIG5vcyBmYWNpbGl0YW4gbGEgbWFuaXB1bGFjacOzbiBkZSBsb3Mgb2JqZXRvcyB5L28gZWxlbWVudG9zLjwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm11bmllY2FFeHRyZW1pZGFkLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJtdW5pZWNhRXh0cmVtaWRhZC1jb250ZW50X2Rlc2NyaXB0aW9uLXNxdWFyZV90ZXh0XCI+Q29tbyBtb3ZpbWllbnRvcyBhIG5pdmVsIGRlIG11w7FlY2EgdGVuZW1vcyBhYmFqbyBvIGZsZXhpw7NuLCBhcnJpYmEgbyBleHRlbnNpw7NuLCBhIGxhIGRlcmVjaGEgbyBpenF1aWVyZGEgeSBhIG5pdmVsIGRlIGxvcyBkZWRvcyBhYmFqbyBvIGFycmliYSwgc2VwYXJhciB5IHVuaXIgbG9zIGRlZG9zLjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDwhLS08aW1nIHNyYz1cImltZy9zdmcvYm9keUh1bWFuQ2lyY2xlLnN2Z1wiIGNsYXNzPVwiY29ub2NlRXh0cmVtaWRhZGVzLWNvbnRlbnRfYm9keUh1bWFuQ2lyY2xlXCIgLz4tLT5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8aGVhZGVyIGNsYXNzPVwicG9ydGFkYS1oZWFkZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWhlYWRlcl9jbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvcnRhZGEtaGVhZGVyX2xvZ29MZWZ0XCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIuL2ltZy9sb2dvLnBuZ1wiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9ydGFkYS1oZWFkZXJfbG9nb1JpZ2h0XCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIuL2ltZy9nZXN0aW9uLXRhbGVudG8ucG5nXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cInBvcnRhZGEtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYxXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2MS1sZWZ0XCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2MS1sZWZ0X3RleHRMYXJnZVwiPkFDVMONPC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicG9ydGFkYS1jb250ZW50X2RpdjEtbGVmdF90ZXh0U21hbGxcIj5FWFRSRU1JREFERVM8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4vaW1nL3N2Zy9wb3J0YWRhTXVqZXIuc3ZnXCIgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfaW1nQ2VudGVyXCIgLz5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYyLWxlZnRcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYyLWxlZnRfdGV4dExhcmdlXCI+VkFURTwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYyLWxlZnRfdGV4dFNtYWxsXCI+SU5GRVJJT1JFUzwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3J0YWRhLWNvbnRlbnRfZGl2MlwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInBvcnRhZGEtY29udGVudF9kaXYyLXRleHRcIj5FUVVJUE8gREUgU0VHVVJJREFELCBTQUxVRCBFTiBFTCBUUkFCQUpPPGJyLz5ZIEFNQklFTlRFPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHRgO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwicXVlRXNBY3RpdmF0ZS1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwicXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+wr9RVUUgRVMgQUNUw41WQVRFPzwvcD5cblx0XHRcdFx0PHAgY2xhc3M9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19zbGlkZUluTGVmdCBhbmltYXRlX19kZWxheS0ycyBxdWVFc0FjdGl2YXRlLWNvbnRlbnRfZGVzY3JpcHRpb24tdGV4dFwiPkFjdMOtdmF0ZSBlcyB1bmEgaGVycmFtaWVudGEgcXVlIGhhIHNpZG8gZGlzZcOxYWRhIHBhcmEgYnJpbmRhcnRlIHVuYSBzZXJpZSBkZSBlamVyY2ljaW9zIGbDrXNpY29zIHF1ZSBwb2Ryw6FzIHJlYWxpemFyIGNvbW8gcGFydGUgZGUgdHUgZ2ltbmFzaWEgbGFib3JhbCB5YSBzZWEgZW4gbGEgc2VkZSBkZSB0cmFiYWpvIG8gZW4gbGEgY2FzYS48L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fc2xpZGVJbkxlZnQgYW5pbWF0ZV9fZGVsYXktM3MgcXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5MYXMgcGF1c2FzIGFjdGl2YXMgZGVudHJvIGRlIGxhIGpvcm5hZGEgbGFib3JhbCBzb24gaW1wb3J0YW50ZXMgcGFyYSB0dSBzYWx1ZCBmw61zaWNhIHkgbWVudGFsLiBUZSByZWNvcmRhbW9zIHF1ZSwgY29tbyBwYXJ0ZSBkZWwgYXV0b2N1aWRhZG8gZGViZXMgYXNlZ3VyYXIgbGEgaW5jbHVzacOzbiBkZSBlamVyY2ljaW9zIHF1ZSB0ZSBwZXJtaXRhbiBhY3RpdmFyIHR1IHJlc3BpcmFjacOzbiwgY2lyY3VsYWNpw7NuLCBtZWpvcmFyIHR1IG1vdmlsaWRhZCBhcnRpY3VsYXIsIHJlYWxpemFyIGVzdGlyYW1pZW50b3MgbXVzY3VsYXJlcyB5IHByb3BpY2lhciBjYW1iaW9zIGRlIHBvc2ljacOzbi48L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fc2xpZGVJbkxlZnQgYW5pbWF0ZV9fZGVsYXktNHMgcXVlRXNBY3RpdmF0ZS1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRcIj5MYSBwcsOhY3RpY2EgZGlhcmlhIGRlIGVzdGEgYWN0aXZpZGFkLCB0ZSBheXVkYXLDoSBhIGRpc21pbnVpciBsYSBmYXRpZ2EgZsOtc2ljYSwgcHJldmVuaXIgbGEgYXBhcmljacOzbiBkZSBlbmZlcm1lZGFkZXMgb3N0ZW9tdXNjdWxhcmVzIHkgcG90ZW5jaWFsaXphciBlbCBmdW5jaW9uYW1pZW50byBjZXJlYnJhbCBpbmNyZW1lbnRhbmRvIHR1IHByb2R1Y3RpdmlkYWQgbGFib3JhbC48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJxdWVFc0FjdGl2YXRlLWNvbnRlbnRfZ3JhcGhpY1wiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvaHVtYW4tZXhjZXJjaXNlLnN2Z1wiIC8+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInF1ZUVzQWN0aXZhdGUtY29udGVudF9ncmFwaGljLWF1ZGlvXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxhdWRpbyBpZD1cImF1ZGlvMVNsaWRlM1wiIGNsYXNzPVwiYXVkaW8xU2xpZGUzXCIgY29udHJvbHM+XG5cdFx0XHRcdDxzb3VyY2Ugc3JjPVwiLi9hdWRpby9hdWRpbzFTbGlkZTMubXAzXCIgdHlwZT1cImF1ZGlvL21wM1wiIC8+XG5cdFx0XHQ8L2F1ZGlvPlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpY1wiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25cIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1Muc3ZnXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRleHRTbWFsbFwiPkNvbnRpbsO6YSBsYSBzZXNpw7NuIGNvbiBlamVyY2ljaW9zIGRlIGVzdGlyYW1pZW50byBtdXNjdWxhcjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGU4XCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2UxMC5zdmdcIiAvPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+UkVMQUpBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gOTwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+VW5lIGxhcyBwYWxtYXMgZGUgbGFzIG1hbm9zIGNvbiBkZWRvcyBleHRlbmRpZG9zPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5TaW4gZGVzcGVnYXIgbGFzIHBhbG1hcyBkZXNjaWVuZGUgbGFzIG1hbm9zIGhhc3RhIHF1ZSBzaWVudGFzIGVsIGVzdGlyYW1pZW50by48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljIHJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLS1jaGFuZ2VTdHlsZVwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25cIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlMi5zdmdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+UkVMQUpBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMTwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGV4dFwiPkNvbiBlc3BhbGRhIHkgY2FiZXphIHJlY3RhcywgZW50cmVsYXphIGxhcyBtYW5vcyB5IGxsZXZhIGxvcyBicmF6b3MgcG9yIGVuY2ltYSBkZSBsYSBjYWJlemE8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljIHJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLS1jaGFuZ2VTdHlsZTJcIj5cblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uXCIgc3JjPVwiaW1nL3N2Zy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTMuc3ZnXCIgLz5cblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtYXVkaW9cIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlXCI+RWplcmNpY2lvIDI8L3A+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkNydXphIGVsIGJyYXpvIGRlcmVjaG8gZnJlbnRlIGFsIHBlY2hvPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5FbXB1amEgY29uIGxhIG1hbm8gaXpxdWllcmRhIHBvciBlbmNpbWEgZGUgbGEgYXJ0aWN1bGFjacOzbiBkZWwgY29kbyBxdWUgZXN0YXMgY3J1emFuZG88L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPk1hbnTDqW4gZWwgZXN0aXJhbWllbnRvPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGUzXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U0LnN2Z1wiIC8+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLWF1ZGlvXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyAzPC9wPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5QdWVkZXMgY29tYmluYXIgZWwgYW50ZXJpb3IgZWplcmNpY2lvIGxsZXZhbmRvIGxhIG1hbm8gaGFjaWEgbGEgZXNwYWxkYTwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV9zcXVhcmUgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV9zcXVhcmUtLWJnQWxsXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2Vfc3F1YXJlLXRleHQtLWJnQWxsXCI+RXMgaW1wb3J0YW50ZSBxdWUgYWwgcmVhbGl6YXIgZXN0b3MgZWplcmNpY2lvcyBubyBwcmVzaW9uZXMgZGlyZWN0YW1lbnRlIGxhIGFydGljdWxhY2nDs24gZGVsIGNvZG8sIGVzdGlyYSBkZSB1bmEgem9uYSBhZHlhY2VudGUgYSBsYSBhcnRpY3VsYWNpw7NuIHkgbm8gZGlyZWN0YW1lbnRlIGVuIGVsbGEuPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGU0XCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U1LnN2Z1wiIC8+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLWF1ZGlvXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyA0PC9wPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5FbnRyZWxhemEgbGFzIG1hbm9zIGFsIGZyZW50ZS48L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkVzdGlyYSBsb3MgY29kb3MgeSBsbGV2YSBsb3MgaG9tYnJvcyBoYWNpYSBkZWxhbnRlIGFycXVlYW5kbyBsYSBlc3BhbGRhIHkgYmFqYW5kbyBsYSBjYWJlemE8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgXG5cdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudCBjb250YWluZXItY29udGVudF9zbGlkZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljIHJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLS1jaGFuZ2VTdHlsZTVcIj5cblx0XHRcdFx0PGltZyBjbGFzcz1cImdyYXBoaWMtcHJlc2VudGF0aW9uXCIgc3JjPVwiaW1nL3N2Zy9yZWxhamFFeHRyZW1pZGFkZXNTUGFnZTYuc3ZnXCIgLz5cblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImF1ZGlvUXVlRXNBY3RpdmF0ZVwiIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtYXVkaW9cIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvc291bmRCdXR0b24yLnN2Z1wiIC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPlJFTEFKQSBUVVMgRVhUUkVNSURBREVTIFNVUEVSSU9SRVM8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RpdGxlXCI+RWplcmNpY2lvIDU8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX3RleHRcIj5JbnRlbnRhIHRvbWFydGUgZGUgbGFzIG1hbm9zIHBvciBkZXRyw6FzIGRlIHR1IGVzcGFsZGEuPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYyByZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy0tY2hhbmdlU3R5bGU2XCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJncmFwaGljLXByZXNlbnRhdGlvblwiIHNyYz1cImltZy9zdmcvcmVsYWphRXh0cmVtaWRhZGVzU1BhZ2U3LnN2Z1wiIC8+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJhdWRpb1F1ZUVzQWN0aXZhdGVcIiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9ncmFwaGljLWF1ZGlvXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3NvdW5kQnV0dG9uMi5zdmdcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5SRUxBSkEgVFVTIEVYVFJFTUlEQURFUyBTVVBFUklPUkVTPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyA2PC9wPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5MbGV2YSBlbCBicmF6byBoYWNpYSBlbCBmcmVudGUgY29uIGxhIHBhbG1hIGRlIGxhIG1hbm8gaGFjaWEgYXJyaWJhPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5Db24gbGEgbWFubyBjb250cmFyaWEgZWplcmNlIHVuIHBvY28gZGUgcHJlc2nDs24gc29icmUgdG9kb3MgbG9zIGRlZG9zLCBoYXN0YSBxdWUgc2llbnRhcyBhbGdvIGRlIHRlbnNpw7NuPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5NYW50w6luIGxhIHBvc2ljacOzbiB5IGx1ZWdvIHJlYWxpemEgZWwgZWplcmNpY2lvIGNvbiBsYSBvdHJhIG1hbm88L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZGVzY3JpcHRpb24tZXhjZXJzaWNlX21lc3NhZ2VcIj48Yj5SZWN1ZXJkYTwvYj4gdGFtYmnDqW4gaW52b2x1Y3JhciBlbCBkZWRvIHB1bGdhcjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtLWNoYW5nZVN0eWxlN1wiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25cIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOC5zdmdcIiAvPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+UkVMQUpBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gNzwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+TGxldmEgdHUgYnJhem8gYWwgZnJlbnRlPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2YUV4dHJlbWlkYWRTLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5FbXB1w7FhIHkgYmFqYSB0dSBtYW5vIGhhc3RhIHF1ZSBzaWVudGFzIHVuIHBvY28gZGUgdGVuc2nDs248L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlNvc3TDqW4gZWwgZXN0aXJhbWllbnRvIHkgbHVlZ28gcmVhbGl6YSBlbCBtaXNtbyBlamVyY2ljaW8gY29uIGxhIG90cmEgbWFubzwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMgcmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2dyYXBoaWMtLWNoYW5nZVN0eWxlOFwiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiZ3JhcGhpYy1wcmVzZW50YXRpb25cIiBzcmM9XCJpbWcvc3ZnL3JlbGFqYUV4dHJlbWlkYWRlc1NQYWdlOS5zdmdcIiAvPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiYXVkaW9RdWVFc0FjdGl2YXRlXCIgY2xhc3M9XCJyZWxhamFFeHRyZW1pZGFkZXNTLWNvbnRlbnRfZ3JhcGhpYy1hdWRpb1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy9zb3VuZEJ1dHRvbjIuc3ZnXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwicmVsYWphRXh0cmVtaWRhZGVzUy1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+UkVMQUpBIFRVUyBFWFRSRU1JREFERVMgU1VQRVJJT1JFUzwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInJlbGFqYUV4dHJlbWlkYWRlc1MtY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gODwvcD5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmFFeHRyZW1pZGFkUy1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+RW1wdcOxYSB0dXMgbWFub3M8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZhRXh0cmVtaWRhZFMtY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPkFicmUgeSBzZXBhcmEgbG9zIGRlZG9zIHNvc3RlbmllbmRvIGVsIGVzdGlyYW1pZW50bzwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWNcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMS5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdGl0bGVcIj5BTCBIQUNFUiBVU08gREVMIENFTFVMQVI8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tc3F1YXJlX3RleHRcIj5Mb3Mgc2lndWllbnRlcyBlamVyY2ljaW9zIHRlIGF5dWRhcsOhbiBhPGJyLz5kaXNtaW51aXIgbGEgZmF0aWdhIG11c2N1bGFyIHBvciBlbCB1c288YnIvPmRlbCBjZWx1bGFyPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYFxuXHRcdDxkaXYgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnQgY29udGFpbmVyLWNvbnRlbnRfc2xpZGVcIj5cblx0XHRcdDxkaXYgaWQ9XCJ1c29DZWx1bGFyUGFnZTJcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljUGFnZTJcIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMi0xLnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1BhZ2UyIHVjcFwiIC8+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy91c29DZWx1bGFyUGFnZTItMi5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZyB1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYy1pbWdQYWdlMiB1Y3BcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXRpdGxlXCI+QUwgSEFDRVIgVVNPIERFTCBDRUxVTEFSPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLWV4Y2Vyc2ljZV90aXRsZVwiPkVqZXJjaWNpbyAxPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHVsIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXVsXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2Rlc2NyaXB0aW9uLXVsX2xpXCI+Q29uIGxvcyBicmF6b3MgYWwgZnJlbnRlPC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZGVzY3JpcHRpb24tdWxfbGlcIj5BYnJhY2UgZWwgcHVsZ2FyIGNvbiBsb3MgZGVkb3M8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPlN1YXZlbWVudGUgbGxldmUgbGEgbXXDsWVjYSBoYWNpYSBhYmFqbywgc29zdMOpbiBkdXJhbnRlIDEwIOKAkyAxNSBzZWd1bmRvczwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIGBcblx0XHQ8ZGl2IGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50IGNvbnRhaW5lci1jb250ZW50X3NsaWRlXCI+XG5cdFx0XHQ8ZGl2IGlkPVwidXNvQ2VsdWxhclBhZ2UzXCIgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYyB1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpY1BhZ2UyXCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy91c29DZWx1bGFyUGFnZTMtMS5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZyB1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYy1pbWdQYWdlMyB1Y3AzXCIgLz5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWcvc3ZnL3Vzb0NlbHVsYXJQYWdlMy0yLnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZ1BhZ2UzIHVjcDNcIiAvPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvdXNvQ2VsdWxhclBhZ2U0LnN2Z1wiIGNsYXNzPVwidXNvQ2VsdWxhci1jb250ZW50X2dyYXBoaWMtaW1nIHVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZzIyIHVjcDNcIiAvPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImltZy9zdmcvdXNvQ2VsdWxhclBhZ2U1LTEuc3ZnXCIgY2xhc3M9XCJ1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYy1pbWcgdWNwM1wiIC8+XG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1nL3N2Zy91c29DZWx1bGFyUGFnZTUtMi5zdmdcIiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9ncmFwaGljLWltZyB1c29DZWx1bGFyLWNvbnRlbnRfZ3JhcGhpYy1pbWcyOCB1Y3AzXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi10aXRsZVwiPkFMIEhBQ0VSIFVTTyBERUwgQ0VMVUxBUjwvcD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VcIj5cblx0XHRcdFx0XHQ8cCBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1leGNlcnNpY2VfdGl0bGVcIj5FamVyY2ljaW8gMjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx1bCBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi11bFwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi11bF9saVwiPk1hbnTDqW4gbGFzIHNpZ3VpZW50ZXMgcG9zaWNpb25lcyBkZSB0dXMgbWFub3MgZHVyYW50ZSA1IHNlZ3VuZG9zLCByZXBpdGUgZGUgNSDigJMgMTAgdmVjZXMgZGUgZm9ybWEgZ3JhZHVhZGEgeSBkZXNjYW5zYS48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInVzb0NlbHVsYXItY29udGVudF9kZXNjcmlwdGlvbi1tZXNzYWdlXCI+UkVQRVRJQ0nDk04gMTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRyZXR1cm4gYGBcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBgYFxufSJdfQ==
