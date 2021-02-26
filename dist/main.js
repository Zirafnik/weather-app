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
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83c4dc5fdd855799cbe90da4a319d8d0`, {mode: 'cors'});
    
    const weatherData= await response.json();

    return weatherData;
}

function createRelevantObj(data) {
    return {
        name: data.name,
        weather: {
            description: data.weather[0].description,
            temp: data.main.temp,
            tempFeels: data.main.feels_like,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: data.wind.speed
        },
        info: {
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
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
/* harmony export */   "inputEV": () => (/* binding */ inputEV)
/* harmony export */ });
/* harmony import */ var _data_processing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-processing.js */ "./src/data-processing.js");


function inputEV() {
    let input= document.querySelector('input[type]');
    input.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            let rawData= (0,_data_processing_js__WEBPACK_IMPORTED_MODULE_0__.getData)(input.value)
            .then(function(rawData){
                return (0,_data_processing_js__WEBPACK_IMPORTED_MODULE_0__.createRelevantObj)(rawData);
            })
            .then(function(processedData) {
                displayData(processedData);
                console.log(processedData)
            })
            .catch(err => console.error(err));
        }
    })
}

function displayData(data) {
    let allSpans= Array.from(document.querySelectorAll('span'));
    allSpans[0].textContent= data.name;
    allSpans[1].textContent= data.info.country;
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


(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.inputEV)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxxRkFBcUYsS0FBSywyQ0FBMkMsYUFBYTs7QUFFbEo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQU87QUFDaEM7QUFDQSx1QkFBdUIsc0VBQWlCO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOaUM7O0FBRWpDLGdEQUFPLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBnZXREYXRhPSBhc3luYyBmdW5jdGlvbihjaXR5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD04M2M0ZGM1ZmRkODU1Nzk5Y2JlOTBkYTRhMzE5ZDhkMGAsIHttb2RlOiAnY29ycyd9KTtcclxuICAgIFxyXG4gICAgY29uc3Qgd2VhdGhlckRhdGE9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlbGV2YW50T2JqKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIHdlYXRoZXI6IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgIHRlbXBGZWVsczogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgICAgICAgIHRlbXBNaW46IGRhdGEubWFpbi50ZW1wX21pbixcclxuICAgICAgICAgICAgdGVtcE1heDogZGF0YS5tYWluLnRlbXBfbWF4LFxyXG4gICAgICAgICAgICBwcmVzc3VyZTogZGF0YS5tYWluLnByZXNzdXJlLFxyXG4gICAgICAgICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcclxuICAgICAgICAgICAgc3VucmlzZTogZGF0YS5zeXMuc3VucmlzZSxcclxuICAgICAgICAgICAgc3Vuc2V0OiBkYXRhLnN5cy5zdW5zZXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0RGF0YSwgY3JlYXRlUmVsZXZhbnRPYmp9OyIsImltcG9ydHtnZXREYXRhLCBjcmVhdGVSZWxldmFudE9ian0gZnJvbSAnLi9kYXRhLXByb2Nlc3NpbmcuanMnO1xyXG5cclxuZnVuY3Rpb24gaW5wdXRFVigpIHtcclxuICAgIGxldCBpbnB1dD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZV0nKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgbGV0IHJhd0RhdGE9IGdldERhdGEoaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJhd0RhdGEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVJlbGV2YW50T2JqKHJhd0RhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihwcm9jZXNzZWREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YShwcm9jZXNzZWREYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZERhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhKSB7XHJcbiAgICBsZXQgYWxsU3BhbnM9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpKTtcclxuICAgIGFsbFNwYW5zWzBdLnRleHRDb250ZW50PSBkYXRhLm5hbWU7XHJcbiAgICBhbGxTcGFuc1sxXS50ZXh0Q29udGVudD0gZGF0YS5pbmZvLmNvdW50cnk7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5wdXRFVn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbnB1dEVWfSBmcm9tICcuL2RvbS5qcyc7XHJcblxyXG5pbnB1dEVWKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==