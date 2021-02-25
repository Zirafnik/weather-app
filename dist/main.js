/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let getData= async function(city) {
    let response= await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=83c4dc5fdd855799cbe90da4a319d8d0`, {mode: 'cors'});
    console.log(response);
}

getData('Ljubljana');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsMkVBQTJFLEtBQUssMkNBQTJDLGFBQWE7QUFDeEk7QUFDQTs7QUFFQSxxQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGdldERhdGE9IGFzeW5jIGZ1bmN0aW9uKGNpdHkpIHtcclxuICAgIGxldCByZXNwb25zZT0gYXdhaXQgZmV0Y2goYGFwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ODNjNGRjNWZkZDg1NTc5OWNiZTkwZGE0YTMxOWQ4ZDBgLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn1cclxuXHJcbmdldERhdGEoJ0xqdWJsamFuYScpOyJdLCJzb3VyY2VSb290IjoiIn0=