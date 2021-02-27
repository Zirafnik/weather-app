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
    info2[0].textContent= `Humidity: ${data.weather.humidity}`;
    info2[1].textContent= `Pressure: ${data.weather.pressure}`;
    info2[2].textContent= `Wind: ${data.weather.wind}`;

    let sunSetRise= Array.from(document.querySelectorAll('#sunset-sunrise > span'));
    sunSetRise[0].textContent= `Sunrise: ${data.info.sunrise}`;
    sunSetRise[1].textContent= `Sunset: ${data.info.sunset}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxxRkFBcUYsS0FBSywyQ0FBMkMsYUFBYTs7QUFFbEo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFPO0FBQ2hDO0FBQ0EsdUJBQXVCLHNFQUFpQjtBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQU87QUFDNUI7QUFDQSx1QkFBdUIsc0VBQWlCO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLElBQUksa0JBQWtCOztBQUVoRTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQsNEJBQTRCLGtCQUFrQjs7QUFFOUM7QUFDQSxrQ0FBa0MscUJBQXFCO0FBQ3ZELGtDQUFrQyxxQkFBcUI7QUFDdkQseUNBQXlDLHVCQUF1Qjs7QUFFaEU7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdELHVDQUF1QyxzQkFBc0I7QUFDN0QsbUNBQW1DLGtCQUFrQjs7QUFFckQ7QUFDQSwyQ0FBMkMsa0JBQWtCO0FBQzdELDBDQUEwQyxpQkFBaUI7QUFDM0Q7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0MsaURBQVE7QUFDUixnREFBTyxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2V0RGF0YT0gYXN5bmMgZnVuY3Rpb24oY2l0eSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ODNjNGRjNWZkZDg1NTc5OWNiZTkwZGE0YTMxOWQ4ZDBgLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZWxldmFudE9iaihkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICB3ZWF0aGVyOiB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgICAgICB0ZW1wRmVlbHM6IGRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgICAgICAgICB0ZW1wTWluOiBkYXRhLm1haW4udGVtcF9taW4sXHJcbiAgICAgICAgICAgIHRlbXBNYXg6IGRhdGEubWFpbi50ZW1wX21heCxcclxuICAgICAgICAgICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcclxuICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcclxuICAgICAgICAgICAgd2luZDogZGF0YS53aW5kLnNwZWVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXHJcbiAgICAgICAgICAgIHN1bnJpc2U6IGRhdGEuc3lzLnN1bnJpc2UsXHJcbiAgICAgICAgICAgIHN1bnNldDogZGF0YS5zeXMuc3Vuc2V0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2dldERhdGEsIGNyZWF0ZVJlbGV2YW50T2JqfTsiLCJpbXBvcnR7Z2V0RGF0YSwgY3JlYXRlUmVsZXZhbnRPYmp9IGZyb20gJy4vZGF0YS1wcm9jZXNzaW5nLmpzJztcclxuXHJcbmZ1bmN0aW9uIGlucHV0RVYoKSB7XHJcbiAgICBsZXQgaW5wdXQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGVdJyk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGxldCByYXdEYXRhPSBnZXREYXRhKGlucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyYXdEYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVSZWxldmFudE9iaihyYXdEYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocHJvY2Vzc2VkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheURhdGEocHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWREYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gd2luZG93RVYoKSB7XHJcbiAgICBsZXQgaW5wdXQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGVdJyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdmFsdWU9ICdManVibGphbmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmF3RGF0YT0gZ2V0RGF0YSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmF3RGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVsZXZhbnRPYmoocmF3RGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHByb2Nlc3NlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlEYXRhKHByb2Nlc3NlZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzc2VkRGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURhdGEoZGF0YSkge1xyXG4gICAgbGV0IGxvY2F0aW9uPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsb2NhdGlvbiA+IHNwYW4nKSk7XHJcbiAgICBsb2NhdGlvblswXS50ZXh0Q29udGVudD0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLmluZm8uY291bnRyeX1gO1xyXG5cclxuICAgIGxldCBtYWluPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWluID4gc3BhbicpKTtcclxuICAgIG1haW5bMF0udGV4dENvbnRlbnQ9IGAke2RhdGEud2VhdGhlci5kZXNjcmlwdGlvbn1gO1xyXG4gICAgbWFpblsxXS50ZXh0Q29udGVudD0gYCR7ZGF0YS53ZWF0aGVyLnRlbXB9YDtcclxuXHJcbiAgICBsZXQgaW5mbzE9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2luZm8xID4gc3BhbicpKTtcclxuICAgIGluZm8xWzBdLnRleHRDb250ZW50PSBgTWluOiAke2RhdGEud2VhdGhlci50ZW1wTWlufWA7XHJcbiAgICBpbmZvMVsxXS50ZXh0Q29udGVudD0gYE1heDogJHtkYXRhLndlYXRoZXIudGVtcE1heH1gO1xyXG4gICAgaW5mbzFbMl0udGV4dENvbnRlbnQ9IGBGZWVscyBsaWtlOiAke2RhdGEud2VhdGhlci50ZW1wRmVlbHN9YDtcclxuXHJcbiAgICBsZXQgaW5mbzI9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2luZm8yID4gc3BhbicpKTtcclxuICAgIGluZm8yWzBdLnRleHRDb250ZW50PSBgSHVtaWRpdHk6ICR7ZGF0YS53ZWF0aGVyLmh1bWlkaXR5fWA7XHJcbiAgICBpbmZvMlsxXS50ZXh0Q29udGVudD0gYFByZXNzdXJlOiAke2RhdGEud2VhdGhlci5wcmVzc3VyZX1gO1xyXG4gICAgaW5mbzJbMl0udGV4dENvbnRlbnQ9IGBXaW5kOiAke2RhdGEud2VhdGhlci53aW5kfWA7XHJcblxyXG4gICAgbGV0IHN1blNldFJpc2U9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N1bnNldC1zdW5yaXNlID4gc3BhbicpKTtcclxuICAgIHN1blNldFJpc2VbMF0udGV4dENvbnRlbnQ9IGBTdW5yaXNlOiAke2RhdGEuaW5mby5zdW5yaXNlfWA7XHJcbiAgICBzdW5TZXRSaXNlWzFdLnRleHRDb250ZW50PSBgU3Vuc2V0OiAke2RhdGEuaW5mby5zdW5zZXR9YDtcclxufVxyXG5cclxuZXhwb3J0IHtpbnB1dEVWLCB3aW5kb3dFVn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbnB1dEVWLCB3aW5kb3dFVn0gZnJvbSAnLi9kb20uanMnO1xyXG5cclxud2luZG93RVYoKTtcclxuaW5wdXRFVigpOyJdLCJzb3VyY2VSb290IjoiIn0=