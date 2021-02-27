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
            timezone: data.timezone,
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
/* harmony export */   "inputEV": () => (/* binding */ inputEV),
/* harmony export */   "windowEV": () => (/* binding */ windowEV)
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
                displayData(processedData);
                console.log(processedData)
            })
            .catch(err => console.error(err));
    })
}

function displayData(data) {
    let location= Array.from(document.querySelectorAll('#location > span'));
    location[0].textContent= `${data.name}, ${data.info.country}`;

    let main= Array.from(document.querySelectorAll('#main > span'));
    main[0].textContent= `${data.weather.description}`;
    main[1].textContent= `${data.weather.temp}`;

    let info1= Array.from(document.querySelectorAll('#info1 > span'));
    info1[0].textContent= `Min: ${data.weather.tempMin}`;
    info1[1].textContent= `Max: ${data.weather.tempMax}`;
    info1[2].textContent= `Feels like: ${data.weather.tempFeels}`;

    let info2= Array.from(document.querySelectorAll('#info2 > span'));
    info2[0].textContent= `Humidity: ${data.weather.humidity}%`;
    info2[1].textContent= `Pressure: ${data.weather.pressure} hPa`;
    info2[2].textContent= `Wind: ${Math.round(data.weather.wind * 3.6)} km/h`;

    let sunSetRise= Array.from(document.querySelectorAll('#sunset-sunrise > span'));
    let sunrise= new Date((data.info.sunrise + data.info.timezone - 3600) * 1000);
    console.log(sunrise);
    sunSetRise[0].textContent= `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}`;
    let sunset= new Date((data.info.sunset + data.info.timezone - 3600) * 1000);
    console.log(sunset);
    sunSetRise[1].textContent= `Sunset: ${sunset.getHours()}:${sunset.getMinutes()}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxxRkFBcUYsS0FBSywyQ0FBMkMsYUFBYTs7QUFFbEo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQU87QUFDaEM7QUFDQSx1QkFBdUIsc0VBQWlCO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBTztBQUM1QjtBQUNBLHVCQUF1QixzRUFBaUI7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsSUFBSSxrQkFBa0I7O0FBRWhFO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRCw0QkFBNEIsa0JBQWtCOztBQUU5QztBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQsa0NBQWtDLHFCQUFxQjtBQUN2RCx5Q0FBeUMsdUJBQXVCOztBQUVoRTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0QsdUNBQXVDLHNCQUFzQjtBQUM3RCxtQ0FBbUMsb0NBQW9DOztBQUV2RTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ3RGO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBQ25GOzs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTNDLGlEQUFRO0FBQ1IsZ0RBQU8sRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGdldERhdGE9IGFzeW5jIGZ1bmN0aW9uKGNpdHkpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTgzYzRkYzVmZGQ4NTU3OTljYmU5MGRhNGEzMTlkOGQwYCwge21vZGU6ICdjb3JzJ30pO1xyXG4gICAgXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YT0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVsZXZhbnRPYmooZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgd2VhdGhlcjoge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcclxuICAgICAgICAgICAgdGVtcEZlZWxzOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcclxuICAgICAgICAgICAgdGVtcE1pbjogZGF0YS5tYWluLnRlbXBfbWluLFxyXG4gICAgICAgICAgICB0ZW1wTWF4OiBkYXRhLm1haW4udGVtcF9tYXgsXHJcbiAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxyXG4gICAgICAgICAgICB0aW1lem9uZTogZGF0YS50aW1lem9uZSxcclxuICAgICAgICAgICAgc3VucmlzZTogZGF0YS5zeXMuc3VucmlzZSxcclxuICAgICAgICAgICAgc3Vuc2V0OiBkYXRhLnN5cy5zdW5zZXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0RGF0YSwgY3JlYXRlUmVsZXZhbnRPYmp9OyIsImltcG9ydHtnZXREYXRhLCBjcmVhdGVSZWxldmFudE9ian0gZnJvbSAnLi9kYXRhLXByb2Nlc3NpbmcuanMnO1xyXG5cclxuZnVuY3Rpb24gaW5wdXRFVigpIHtcclxuICAgIGxldCBpbnB1dD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZV0nKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgbGV0IHJhd0RhdGE9IGdldERhdGEoaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJhd0RhdGEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVJlbGV2YW50T2JqKHJhd0RhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihwcm9jZXNzZWREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YShwcm9jZXNzZWREYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZERhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dFVigpIHtcclxuICAgIGxldCBpbnB1dD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZV0nKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBsZXQgdmFsdWU9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB2YWx1ZT0gJ0xqdWJsamFuYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYXdEYXRhPSBnZXREYXRhKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyYXdEYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVSZWxldmFudE9iaihyYXdEYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocHJvY2Vzc2VkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheURhdGEocHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWREYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhKSB7XHJcbiAgICBsZXQgbG9jYXRpb249IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xvY2F0aW9uID4gc3BhbicpKTtcclxuICAgIGxvY2F0aW9uWzBdLnRleHRDb250ZW50PSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuaW5mby5jb3VudHJ5fWA7XHJcblxyXG4gICAgbGV0IG1haW49IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW4gPiBzcGFuJykpO1xyXG4gICAgbWFpblswXS50ZXh0Q29udGVudD0gYCR7ZGF0YS53ZWF0aGVyLmRlc2NyaXB0aW9ufWA7XHJcbiAgICBtYWluWzFdLnRleHRDb250ZW50PSBgJHtkYXRhLndlYXRoZXIudGVtcH1gO1xyXG5cclxuICAgIGxldCBpbmZvMT0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW5mbzEgPiBzcGFuJykpO1xyXG4gICAgaW5mbzFbMF0udGV4dENvbnRlbnQ9IGBNaW46ICR7ZGF0YS53ZWF0aGVyLnRlbXBNaW59YDtcclxuICAgIGluZm8xWzFdLnRleHRDb250ZW50PSBgTWF4OiAke2RhdGEud2VhdGhlci50ZW1wTWF4fWA7XHJcbiAgICBpbmZvMVsyXS50ZXh0Q29udGVudD0gYEZlZWxzIGxpa2U6ICR7ZGF0YS53ZWF0aGVyLnRlbXBGZWVsc31gO1xyXG5cclxuICAgIGxldCBpbmZvMj0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW5mbzIgPiBzcGFuJykpO1xyXG4gICAgaW5mbzJbMF0udGV4dENvbnRlbnQ9IGBIdW1pZGl0eTogJHtkYXRhLndlYXRoZXIuaHVtaWRpdHl9JWA7XHJcbiAgICBpbmZvMlsxXS50ZXh0Q29udGVudD0gYFByZXNzdXJlOiAke2RhdGEud2VhdGhlci5wcmVzc3VyZX0gaFBhYDtcclxuICAgIGluZm8yWzJdLnRleHRDb250ZW50PSBgV2luZDogJHtNYXRoLnJvdW5kKGRhdGEud2VhdGhlci53aW5kICogMy42KX0ga20vaGA7XHJcblxyXG4gICAgbGV0IHN1blNldFJpc2U9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N1bnNldC1zdW5yaXNlID4gc3BhbicpKTtcclxuICAgIGxldCBzdW5yaXNlPSBuZXcgRGF0ZSgoZGF0YS5pbmZvLnN1bnJpc2UgKyBkYXRhLmluZm8udGltZXpvbmUgLSAzNjAwKSAqIDEwMDApO1xyXG4gICAgY29uc29sZS5sb2coc3VucmlzZSk7XHJcbiAgICBzdW5TZXRSaXNlWzBdLnRleHRDb250ZW50PSBgU3VucmlzZTogJHtzdW5yaXNlLmdldEhvdXJzKCl9OiR7c3VucmlzZS5nZXRNaW51dGVzKCl9YDtcclxuICAgIGxldCBzdW5zZXQ9IG5ldyBEYXRlKChkYXRhLmluZm8uc3Vuc2V0ICsgZGF0YS5pbmZvLnRpbWV6b25lIC0gMzYwMCkgKiAxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKHN1bnNldCk7XHJcbiAgICBzdW5TZXRSaXNlWzFdLnRleHRDb250ZW50PSBgU3Vuc2V0OiAke3N1bnNldC5nZXRIb3VycygpfToke3N1bnNldC5nZXRNaW51dGVzKCl9YDtcclxufVxyXG5cclxuZXhwb3J0IHtpbnB1dEVWLCB3aW5kb3dFVn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbnB1dEVWLCB3aW5kb3dFVn0gZnJvbSAnLi9kb20uanMnO1xyXG5cclxud2luZG93RVYoKTtcclxuaW5wdXRFVigpOyJdLCJzb3VyY2VSb290IjoiIn0=