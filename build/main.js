/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/framework/appMap.js":
/*!*********************************!*\
  !*** ./src/framework/appMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst appMap = {\n  root: {\n    1: {\n      controller: {\n        1: {\n          test1: 'test3'\n        },\n        2: 'test2',\n      }\n    },\n    2: 'test4'\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appMap);\n\n//# sourceURL=webpack:///./src/framework/appMap.js?");

/***/ }),

/***/ "./src/framework/components/root.js":
/*!******************************************!*\
  !*** ./src/framework/components/root.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction root() {\n  console.log('root')\n  let innerElement = document.createElement('div')\n  innerElement.className = 'template'\n\n  let outerElement = document.createElement('div')\n  outerElement.appendChild(innerElement)\n  \n  return outerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (root);\n\n//# sourceURL=webpack:///./src/framework/components/root.js?");

/***/ }),

/***/ "./src/framework/components/test1.js":
/*!*******************************************!*\
  !*** ./src/framework/components/test1.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test1() {\n  console.log('test1')\n  let innerElement = document.createElement('div')\n  innerElement.className = 'template'\n\n  let outerElement = document.createElement('div')\n  outerElement.appendChild(innerElement)\n  \n  return outerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test1);\n\n//# sourceURL=webpack:///./src/framework/components/test1.js?");

/***/ }),

/***/ "./src/framework/components/test2.js":
/*!*******************************************!*\
  !*** ./src/framework/components/test2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test2() {\n  console.log('test2')\n  let innerElement = document.createElement('div')\n  innerElement.className = 'template'\n\n  let outerElement = document.createElement('div')\n  outerElement.appendChild(innerElement)\n  \n  return outerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test2);\n\n//# sourceURL=webpack:///./src/framework/components/test2.js?");

/***/ }),

/***/ "./src/framework/components/test3.js":
/*!*******************************************!*\
  !*** ./src/framework/components/test3.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test3() {\n  console.log('test3')\n  let innerElement = document.createElement('div')\n  innerElement.className = 'template'\n\n  let outerElement = document.createElement('div')\n  outerElement.appendChild(innerElement)\n  \n  return outerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test3);\n\n//# sourceURL=webpack:///./src/framework/components/test3.js?");

/***/ }),

/***/ "./src/framework/components/test4.js":
/*!*******************************************!*\
  !*** ./src/framework/components/test4.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction test4() {\n  console.log('test4')\n  let innerElement = document.createElement('button')\n  innerElement.onclick = function() {\n    window.state = !window.state\n    window.render()\n  }\n  \n  innerElement.innerHTML = 'Change status'\n\n  let outerElement = document.createElement('div')\n  outerElement.appendChild(innerElement)\n  \n  return outerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test4);\n\n//# sourceURL=webpack:///./src/framework/components/test4.js?");

/***/ }),

/***/ "./src/framework/componentsMap.js":
/*!****************************************!*\
  !*** ./src/framework/componentsMap.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/root */ \"./src/framework/components/root.js\");\n/* harmony import */ var _components_test1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/test1 */ \"./src/framework/components/test1.js\");\n/* harmony import */ var _components_test2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test2 */ \"./src/framework/components/test2.js\");\n/* harmony import */ var _components_test3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/test3 */ \"./src/framework/components/test3.js\");\n/* harmony import */ var _components_test4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test4 */ \"./src/framework/components/test4.js\");\n/* harmony import */ var _controllers_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/controller */ \"./src/framework/controllers/controller.js\");\n\n\n\n\n\n\n\n\nconst componentsMap = {\n  root: _components_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  test1: _components_test1__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  test2: _components_test2__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  test3: _components_test3__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  controller: _controllers_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  test4: _components_test4__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (componentsMap);\n\n//# sourceURL=webpack:///./src/framework/componentsMap.js?");

/***/ }),

/***/ "./src/framework/controllers/controller.js":
/*!*************************************************!*\
  !*** ./src/framework/controllers/controller.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction controller() {\n  console.log('controller')\n  if(window.state){\n    return 1\n  }else{\n    return 2\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/framework/controllers/controller.js?");

/***/ }),

/***/ "./src/framework/injector.js":
/*!***********************************!*\
  !*** ./src/framework/injector.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction injector(componentsMap = {}, functionsMap = {}) {\n\n  function generateId() {\n    let text = \"\";\n    const possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n  \n    for (let i = 0; i < 10; i++)\n      text += possible.charAt(Math.floor(Math.random() * possible.length));\n  \n    return text;\n  }\n\n  function creator(node, templateNodeId){\n    // controllers logic\n    let component = null\n    try {\n      component = functionsMap[node]()\n    } catch(e) {\n      throw new Error(`There is no component '${node}' in components map`)\n    }\n    if(typeof component === 'number'){\n      return component// here are number of next component\n    // components logic\n    }else{\n      let templateId = generateId()\n      let template = component.querySelector('.template')\n      const parent = document.getElementById(templateNodeId)\n      if (template) {\n        template.id = templateId  \n      }\n      parent.appendChild(component)\n      return templateId\n    }\n  }\n\n  function selector(map, nodeId){\n    // last component in branch\n    if(typeof map === 'string'){\n      creator(map, nodeId)\n    // not las component in branch\n    }else{\n      for(let node in map){\n        if(typeof parseInt(node) === 'number' && !isNaN(parseInt(node))){\n          selector(map[node], nodeId)\n        }else{\n          let templateId = creator(node, nodeId)\n          // controller logic\n          if(typeof templateId === 'number'){\n            selector(map[node][templateId], nodeId)\n            return\n           // component logic \n          }else{\n            selector(map[node], templateId)\n          }\n        }\n      }\n    }\n  }\n\n  if (componentsMap.root) {\n    let currentId = null\n    let rootComponent = functionsMap['root']()\n    const appDiv = document.getElementById('app')\n    let template = rootComponent.querySelector('.template')\n    currentId = generateId()\n    template.id = currentId    \n    appDiv.appendChild(rootComponent)\n\n    selector(componentsMap.root, currentId)\n  } else {\n    throw new Error('There is no root components map')\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (injector);\n\n//# sourceURL=webpack:///./src/framework/injector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/injector */ \"./src/framework/injector.js\");\n/* harmony import */ var _framework_appMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/appMap */ \"./src/framework/appMap.js\");\n/* harmony import */ var _framework_componentsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/componentsMap */ \"./src/framework/componentsMap.js\");\n\n\n\n\nwindow.state = true;\n\nwindow.render = function() {\n  document.getElementById('app').innerHTML = ''\n  Object(_framework_injector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_framework_appMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _framework_componentsMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n}\n\nObject(_framework_injector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_framework_appMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _framework_componentsMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });