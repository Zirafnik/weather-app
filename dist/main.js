/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-processing.js":
/*!********************************!*\
  !*** ./src/data-processing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "createRelevantObj": () => (/* binding */ createRelevantObj)
/* harmony export */ });
let getData= async function(city) {
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=83c4dc5fdd855799cbe90da4a319d8d0`, {mode: 'cors'});
    
    const weatherData= await response.json();

    return weatherData;
}

function createRelevantObj(data) {
    return {
        name: data.name,
        weather: {
            description: data.weather[0].description,
            temp: Math.round(data.main.temp),
            tempFeels: Math.round(data.main.feels_like),
            tempMin: Math.round(data.main.temp_min),
            tempMax: Math.round(data.main.temp_max),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: data.wind.speed
        },
        info: {
            country: data.sys.country,
            timezone: data.timezone,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            icon: data.weather[0].icon
        }
    }
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputEV": () => (/* binding */ inputEV),
/* harmony export */   "windowEV": () => (/* binding */ windowEV),
/* harmony export */   "toggleEV": () => (/* binding */ toggleEV)
/* harmony export */ });
/* harmony import */ var _data_processing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-processing.js */ "./src/data-processing.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");



function inputEV() {
    let input= document.querySelector('input[type]');
    input.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            let rawData= (0,_data_processing_js__WEBPACK_IMPORTED_MODULE_0__.getData)(input.value)
            .then(function(rawData){
                return (0,_data_processing_js__WEBPACK_IMPORTED_MODULE_0__.createRelevantObj)(rawData);
            })
            .then(function(processedData) {
                toggleEV(processedData);
                displayData(processedData);
            })
            .catch(err => console.error(err));
        }
    })
}

function windowEV() {
    let input= document.querySelector('input[type]');
    window.addEventListener('load', function(event) {
        let value= input.value;
        if(input.value === '') {
            value= 'Ljubljana';
        }
        let rawData= (0,_data_processing_js__WEBPACK_IMPORTED_MODULE_0__.getData)(value)
            .then(function(rawData){
                return (0,_data_processing_js__WEBPACK_IMPORTED_MODULE_0__.createRelevantObj)(rawData);
            })
            .then(function(processedData) {
                toggleEV(processedData);
                displayData(processedData);
            })
            .catch(err => console.error(err));
    })
}

function displayData(data) {
    let location= Array.from(document.querySelectorAll('#location > span'));
    location[0].textContent= `${data.name}, ${data.info.country}`;

    let main= Array.from(document.querySelectorAll('#main > span'));
    main[0].textContent= `${data.weather.description}`;
    main[1].textContent= `${data.weather.temp}\u2103`;
    let img= document.querySelector('#wicon');
    img.src= 'http://openweathermap.org/img/w/' + data.info.icon + '.png';

    let info1= Array.from(document.querySelectorAll('#info1 > span'));
    info1[0].textContent= `Min: ${data.weather.tempMin}\u2103`;
    info1[1].textContent= `Max: ${data.weather.tempMax}\u2103`;
    info1[2].textContent= `Feels like: ${data.weather.tempFeels}\u2103`;

    let info2= Array.from(document.querySelectorAll('#info2 > span'));
    info2[0].textContent= `Humidity: ${data.weather.humidity}%`;
    info2[1].textContent= `Pressure: ${data.weather.pressure} hPa`;
    info2[2].textContent= `Wind: ${Math.round(data.weather.wind * 3.6)} km/h`;

    let sunSetRise= Array.from(document.querySelectorAll('#sunset-sunrise > span'));
    let sunrise= (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getLocalSun)(data.info.sunrise, data.info.timezone);
    sunSetRise[0].textContent= `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}`;
    let sunset= (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getLocalSun)(data.info.sunset, data.info.timezone);
    sunSetRise[1].textContent= `Sunset: ${sunset.getHours()}:${sunset.getMinutes()}`;
}

function toggleEV(data) {
    let toggle= document.querySelector('#temp-converter');
    toggle.addEventListener('click', function(){
        let temps= Array.from(document.querySelectorAll('.temp'));
        if(toggle.checked) {
            temps[0].textContent=`${data.weather.temp}\u2103`;
            temps[1].textContent=`Min: ${data.weather.tempMin}\u2103`;
            temps[2].textContent=`Max: ${data.weather.tempMax}\u2103`;
            temps[3].textContent=`Feels like: ${data.weather.tempFeels}\u2103`;
        } else {
            temps[0].textContent=`${(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.convertToF)(data.weather.temp)}\u2109`;
            temps[1].textContent=`Min: ${(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.convertToF)(data.weather.tempMin)}\u2109`;
            temps[2].textContent=`Max: ${(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.convertToF)(data.weather.tempMax)}\u2109`;
            temps[3].textContent=`Feels like: ${(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.convertToF)(data.weather.tempFeels)}\u2109`;
            //temps.forEach(span => span.textContent= span.textContent.slice(0, -1) + '\u2109');
        }
    })
}



/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToC": () => (/* binding */ convertToC),
/* harmony export */   "convertToF": () => (/* binding */ convertToF),
/* harmony export */   "getLocalSun": () => (/* binding */ getLocalSun)
/* harmony export */ });
function convertToC(K) {
    let c= ((K-273.15)*1.8)+32;
    return c;
}

function convertToF(C) {
    let f= (C/5) * 9 + 32;
    return Math.round(f);
}

function getLocalSun(sun, timezone) {
    return new Date((sun + timezone - 3600) * 1000);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.windowEV)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.inputEV)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHFGQUFxRixLQUFLLHdEQUF3RCxhQUFhOztBQUUvSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0IrRDtBQUNSOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0REFBTztBQUNoQztBQUNBLHVCQUF1QixzRUFBaUI7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFPO0FBQzVCO0FBQ0EsdUJBQXVCLHNFQUFpQjtBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxJQUFJLGtCQUFrQjs7QUFFaEU7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JELDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQsa0NBQWtDLHFCQUFxQjtBQUN2RCx5Q0FBeUMsdUJBQXVCOztBQUVoRTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0QsdUNBQXVDLHNCQUFzQjtBQUM3RCxtQ0FBbUMsb0NBQW9DOztBQUV2RTtBQUNBLGlCQUFpQix3REFBVztBQUM1QiwyQ0FBMkMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ3RGLGdCQUFnQix3REFBVztBQUMzQiwwQ0FBMEMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCO0FBQ3RELHlDQUF5QyxxQkFBcUI7QUFDOUQseUNBQXlDLHFCQUFxQjtBQUM5RCxnREFBZ0QsdUJBQXVCO0FBQ3ZFLFNBQVM7QUFDVCxvQ0FBb0MsdURBQVUsb0JBQW9CO0FBQ2xFLHlDQUF5Qyx1REFBVSx1QkFBdUI7QUFDMUUseUNBQXlDLHVEQUFVLHVCQUF1QjtBQUMxRSxnREFBZ0QsdURBQVUseUJBQXlCO0FBQ25GO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnFEOztBQUVyRCxpREFBUTtBQUNSLGdEQUFPLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBnZXREYXRhPSBhc3luYyBmdW5jdGlvbihjaXR5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9ODNjNGRjNWZkZDg1NTc5OWNiZTkwZGE0YTMxOWQ4ZDBgLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZWxldmFudE9iaihkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICB3ZWF0aGVyOiB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRlbXA6IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApLFxyXG4gICAgICAgICAgICB0ZW1wRmVlbHM6IE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpLFxyXG4gICAgICAgICAgICB0ZW1wTWluOiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbiksXHJcbiAgICAgICAgICAgIHRlbXBNYXg6IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KSxcclxuICAgICAgICAgICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcclxuICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcclxuICAgICAgICAgICAgd2luZDogZGF0YS53aW5kLnNwZWVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXHJcbiAgICAgICAgICAgIHRpbWV6b25lOiBkYXRhLnRpbWV6b25lLFxyXG4gICAgICAgICAgICBzdW5yaXNlOiBkYXRhLnN5cy5zdW5yaXNlLFxyXG4gICAgICAgICAgICBzdW5zZXQ6IGRhdGEuc3lzLnN1bnNldCxcclxuICAgICAgICAgICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0RGF0YSwgY3JlYXRlUmVsZXZhbnRPYmp9OyIsImltcG9ydHtnZXREYXRhLCBjcmVhdGVSZWxldmFudE9ian0gZnJvbSAnLi9kYXRhLXByb2Nlc3NpbmcuanMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9GLCBnZXRMb2NhbFN1biB9IGZyb20gJy4vaGVscGVycy5qcyc7XHJcblxyXG5mdW5jdGlvbiBpbnB1dEVWKCkge1xyXG4gICAgbGV0IGlucHV0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlXScpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBsZXQgcmF3RGF0YT0gZ2V0RGF0YShpbnB1dC52YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmF3RGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVsZXZhbnRPYmoocmF3RGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHByb2Nlc3NlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUVWKHByb2Nlc3NlZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheURhdGEocHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dFVigpIHtcclxuICAgIGxldCBpbnB1dD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZV0nKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBsZXQgdmFsdWU9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB2YWx1ZT0gJ0xqdWJsamFuYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYXdEYXRhPSBnZXREYXRhKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyYXdEYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVSZWxldmFudE9iaihyYXdEYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocHJvY2Vzc2VkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRVYocHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YShwcm9jZXNzZWREYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURhdGEoZGF0YSkge1xyXG4gICAgbGV0IGxvY2F0aW9uPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsb2NhdGlvbiA+IHNwYW4nKSk7XHJcbiAgICBsb2NhdGlvblswXS50ZXh0Q29udGVudD0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLmluZm8uY291bnRyeX1gO1xyXG5cclxuICAgIGxldCBtYWluPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWluID4gc3BhbicpKTtcclxuICAgIG1haW5bMF0udGV4dENvbnRlbnQ9IGAke2RhdGEud2VhdGhlci5kZXNjcmlwdGlvbn1gO1xyXG4gICAgbWFpblsxXS50ZXh0Q29udGVudD0gYCR7ZGF0YS53ZWF0aGVyLnRlbXB9XFx1MjEwM2A7XHJcbiAgICBsZXQgaW1nPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2ljb24nKTtcclxuICAgIGltZy5zcmM9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LycgKyBkYXRhLmluZm8uaWNvbiArICcucG5nJztcclxuXHJcbiAgICBsZXQgaW5mbzE9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2luZm8xID4gc3BhbicpKTtcclxuICAgIGluZm8xWzBdLnRleHRDb250ZW50PSBgTWluOiAke2RhdGEud2VhdGhlci50ZW1wTWlufVxcdTIxMDNgO1xyXG4gICAgaW5mbzFbMV0udGV4dENvbnRlbnQ9IGBNYXg6ICR7ZGF0YS53ZWF0aGVyLnRlbXBNYXh9XFx1MjEwM2A7XHJcbiAgICBpbmZvMVsyXS50ZXh0Q29udGVudD0gYEZlZWxzIGxpa2U6ICR7ZGF0YS53ZWF0aGVyLnRlbXBGZWVsc31cXHUyMTAzYDtcclxuXHJcbiAgICBsZXQgaW5mbzI9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2luZm8yID4gc3BhbicpKTtcclxuICAgIGluZm8yWzBdLnRleHRDb250ZW50PSBgSHVtaWRpdHk6ICR7ZGF0YS53ZWF0aGVyLmh1bWlkaXR5fSVgO1xyXG4gICAgaW5mbzJbMV0udGV4dENvbnRlbnQ9IGBQcmVzc3VyZTogJHtkYXRhLndlYXRoZXIucHJlc3N1cmV9IGhQYWA7XHJcbiAgICBpbmZvMlsyXS50ZXh0Q29udGVudD0gYFdpbmQ6ICR7TWF0aC5yb3VuZChkYXRhLndlYXRoZXIud2luZCAqIDMuNil9IGttL2hgO1xyXG5cclxuICAgIGxldCBzdW5TZXRSaXNlPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzdW5zZXQtc3VucmlzZSA+IHNwYW4nKSk7XHJcbiAgICBsZXQgc3VucmlzZT0gZ2V0TG9jYWxTdW4oZGF0YS5pbmZvLnN1bnJpc2UsIGRhdGEuaW5mby50aW1lem9uZSk7XHJcbiAgICBzdW5TZXRSaXNlWzBdLnRleHRDb250ZW50PSBgU3VucmlzZTogJHtzdW5yaXNlLmdldEhvdXJzKCl9OiR7c3VucmlzZS5nZXRNaW51dGVzKCl9YDtcclxuICAgIGxldCBzdW5zZXQ9IGdldExvY2FsU3VuKGRhdGEuaW5mby5zdW5zZXQsIGRhdGEuaW5mby50aW1lem9uZSk7XHJcbiAgICBzdW5TZXRSaXNlWzFdLnRleHRDb250ZW50PSBgU3Vuc2V0OiAke3N1bnNldC5nZXRIb3VycygpfToke3N1bnNldC5nZXRNaW51dGVzKCl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRVYoZGF0YSkge1xyXG4gICAgbGV0IHRvZ2dsZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtY29udmVydGVyJyk7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCB0ZW1wcz0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcCcpKTtcclxuICAgICAgICBpZih0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0ZW1wc1swXS50ZXh0Q29udGVudD1gJHtkYXRhLndlYXRoZXIudGVtcH1cXHUyMTAzYDtcclxuICAgICAgICAgICAgdGVtcHNbMV0udGV4dENvbnRlbnQ9YE1pbjogJHtkYXRhLndlYXRoZXIudGVtcE1pbn1cXHUyMTAzYDtcclxuICAgICAgICAgICAgdGVtcHNbMl0udGV4dENvbnRlbnQ9YE1heDogJHtkYXRhLndlYXRoZXIudGVtcE1heH1cXHUyMTAzYDtcclxuICAgICAgICAgICAgdGVtcHNbM10udGV4dENvbnRlbnQ9YEZlZWxzIGxpa2U6ICR7ZGF0YS53ZWF0aGVyLnRlbXBGZWVsc31cXHUyMTAzYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wc1swXS50ZXh0Q29udGVudD1gJHtjb252ZXJ0VG9GKGRhdGEud2VhdGhlci50ZW1wKX1cXHUyMTA5YDtcclxuICAgICAgICAgICAgdGVtcHNbMV0udGV4dENvbnRlbnQ9YE1pbjogJHtjb252ZXJ0VG9GKGRhdGEud2VhdGhlci50ZW1wTWluKX1cXHUyMTA5YDtcclxuICAgICAgICAgICAgdGVtcHNbMl0udGV4dENvbnRlbnQ9YE1heDogJHtjb252ZXJ0VG9GKGRhdGEud2VhdGhlci50ZW1wTWF4KX1cXHUyMTA5YDtcclxuICAgICAgICAgICAgdGVtcHNbM10udGV4dENvbnRlbnQ9YEZlZWxzIGxpa2U6ICR7Y29udmVydFRvRihkYXRhLndlYXRoZXIudGVtcEZlZWxzKX1cXHUyMTA5YDtcclxuICAgICAgICAgICAgLy90ZW1wcy5mb3JFYWNoKHNwYW4gPT4gc3Bhbi50ZXh0Q29udGVudD0gc3Bhbi50ZXh0Q29udGVudC5zbGljZSgwLCAtMSkgKyAnXFx1MjEwOScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7aW5wdXRFViwgd2luZG93RVYsIHRvZ2dsZUVWfTsiLCJmdW5jdGlvbiBjb252ZXJ0VG9DKEspIHtcclxuICAgIGxldCBjPSAoKEstMjczLjE1KSoxLjgpKzMyO1xyXG4gICAgcmV0dXJuIGM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0YoQykge1xyXG4gICAgbGV0IGY9IChDLzUpICogOSArIDMyO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvY2FsU3VuKHN1biwgdGltZXpvbmUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgoc3VuICsgdGltZXpvbmUgLSAzNjAwKSAqIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQge2NvbnZlcnRUb0MsIGNvbnZlcnRUb0YsIGdldExvY2FsU3VufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aW5wdXRFViwgdG9nZ2xlRVYsIHdpbmRvd0VWfSBmcm9tICcuL2RvbS5qcyc7XHJcblxyXG53aW5kb3dFVigpO1xyXG5pbnB1dEVWKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==