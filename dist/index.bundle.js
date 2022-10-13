"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domElements.js */ "./src/modules/domElements.js");
/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API.js */ "./src/modules/API.js");



// submitting deatils
_modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener('click', () => {
  const nameValue = _modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.name.value;
  const scoreValue = _modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.score.value;
  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.createScore)(nameValue, scoreValue);
  _modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.name.value = '';
  _modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.score.value = '';
});

// getting all scores
const diplayScores = async () => {
  const scoresData = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.gettingAllScores)();
  const scores = scoresData.result;
  scores.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user}: ${item.score}`;
    _modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.list.appendChild(li);
  });
};
diplayScores();

// add event listener to the resfresh button
_modules_domElements_js__WEBPACK_IMPORTED_MODULE_0__.refresh.addEventListener('click', () => {
  window.location.reload();
});


/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createScore": () => (/* binding */ createScore),
/* harmony export */   "gettingAllScores": () => (/* binding */ gettingAllScores)
/* harmony export */ });
/* eslint-disable no-return-await */

const gameId = 'MfajigELXfDTHFYxkrm1';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const game = {
  name: 'scores',
};

// creating game
const createGame = async () => {
  const response = await fetch(`${baseUrl}/games/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(game),
  });
  return await response.json();
};

createGame();

// create score - endpoint => /games/:id/scores/
const createScore = async (name, score) => {
  // creating score object
  const userScore = {
    user: name,
    score,
  };

  // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ps3snRuZTZ5A3DYTBWNI/scores/')
  const response = await fetch(`${baseUrl}/games/${gameId}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userScore),
  });
  await response.json();
};

// get all scores
const gettingAllScores = async () => {
  const response = await fetch(`${baseUrl}/games/${gameId}/scores/`);
  return await response.json();
};




/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "refresh": () => (/* binding */ refresh),
/* harmony export */   "score": () => (/* binding */ score),
/* harmony export */   "submit": () => (/* binding */ submit)
/* harmony export */ });
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submit = document.querySelector('.submitButton');
const refresh = document.querySelector('.refreshButton');
const list = document.querySelector('.nameList');




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVrQztBQUMrQjs7QUFFakU7QUFDQSw0RUFBdUI7QUFDdkIsb0JBQW9CLCtEQUFVO0FBQzlCLHFCQUFxQixnRUFBVztBQUNoQyxFQUFFLDREQUFXO0FBQ2IsRUFBRSwrREFBVTtBQUNaLEVBQUUsZ0VBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSwyQkFBMkIsaUVBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVLElBQUksV0FBVztBQUMvQyxJQUFJLHFFQUFnQjtBQUNwQixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLDZFQUF3QjtBQUN4QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsUUFBUSxTQUFTLE9BQU87QUFDMUQ7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUSxTQUFTLE9BQU87QUFDMUQ7QUFDQTs7QUFFeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2RvbUVsZW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIG5hbWUsIHNjb3JlLCBzdWJtaXQsIHJlZnJlc2gsIGxpc3QsXG59IGZyb20gJy4vbW9kdWxlcy9kb21FbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVTY29yZSwgZ2V0dGluZ0FsbFNjb3JlcyB9IGZyb20gJy4vbW9kdWxlcy9BUEkuanMnO1xuXG4vLyBzdWJtaXR0aW5nIGRlYXRpbHNcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcbiAgY29uc3Qgc2NvcmVWYWx1ZSA9IHNjb3JlLnZhbHVlO1xuICBjcmVhdGVTY29yZShuYW1lVmFsdWUsIHNjb3JlVmFsdWUpO1xuICBuYW1lLnZhbHVlID0gJyc7XG4gIHNjb3JlLnZhbHVlID0gJyc7XG59KTtcblxuLy8gZ2V0dGluZyBhbGwgc2NvcmVzXG5jb25zdCBkaXBsYXlTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNjb3Jlc0RhdGEgPSBhd2FpdCBnZXR0aW5nQWxsU2NvcmVzKCk7XG4gIGNvbnN0IHNjb3JlcyA9IHNjb3Jlc0RhdGEucmVzdWx0O1xuICBzY29yZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgJHtpdGVtLnVzZXJ9OiAke2l0ZW0uc2NvcmV9YDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59O1xuZGlwbGF5U2NvcmVzKCk7XG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgcmVzZnJlc2ggYnV0dG9uXG5yZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hd2FpdCAqL1xuXG5jb25zdCBnYW1lSWQgPSAnTWZhamlnRUxYZkRUSEZZeGtybTEnO1xuXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpJztcblxuY29uc3QgZ2FtZSA9IHtcbiAgbmFtZTogJ3Njb3JlcycsXG59O1xuXG4vLyBjcmVhdGluZyBnYW1lXG5jb25zdCBjcmVhdGVHYW1lID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2dhbWVzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnYW1lKSxcbiAgfSk7XG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jcmVhdGVHYW1lKCk7XG5cbi8vIGNyZWF0ZSBzY29yZSAtIGVuZHBvaW50ID0+IC9nYW1lcy86aWQvc2NvcmVzL1xuY29uc3QgY3JlYXRlU2NvcmUgPSBhc3luYyAobmFtZSwgc2NvcmUpID0+IHtcbiAgLy8gY3JlYXRpbmcgc2NvcmUgb2JqZWN0XG4gIGNvbnN0IHVzZXJTY29yZSA9IHtcbiAgICB1c2VyOiBuYW1lLFxuICAgIHNjb3JlLFxuICB9O1xuXG4gIC8vIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9QczNzblJ1WlRaNUEzRFlUQldOSS9zY29yZXMvJylcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9nYW1lcy8ke2dhbWVJZH0vc2NvcmVzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyU2NvcmUpLFxuICB9KTtcbiAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufTtcblxuLy8gZ2V0IGFsbCBzY29yZXNcbmNvbnN0IGdldHRpbmdBbGxTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vZ2FtZXMvJHtnYW1lSWR9L3Njb3Jlcy9gKTtcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVNjb3JlLCBnZXR0aW5nQWxsU2NvcmVzIH07XG4iLCJjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnV0dG9uJyk7XG5jb25zdCByZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2hCdXR0b24nKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUxpc3QnKTtcblxuZXhwb3J0IHtcbiAgbmFtZSwgc2NvcmUsIHN1Ym1pdCwgcmVmcmVzaCwgbGlzdCxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=