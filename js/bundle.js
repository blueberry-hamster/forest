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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/jianifan/Desktop/appAcademy_2019/forest/js/main.js: Unexpected token (5:8)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39mlet params \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m  start \u001b[33m=\u001b[39m { x\u001b[33m:\u001b[39m \u001b[35m500\u001b[39m\u001b[33m,\u001b[39m y\u001b[33m:\u001b[39m \u001b[35m900\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m  length\u001b[33m:\u001b[39m \u001b[35m200\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m  angle\u001b[33m:\u001b[39m \u001b[35m90\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m  width\u001b[33m:\u001b[39m \u001b[35m20\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Parser.raise (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Parser.unexpected (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Parser.parseMaybeUnary (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9170:14)\n    at Parser.parseExprOps (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Parser.parseMaybeConditional (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Parser.parseMaybeAssign (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Parser.parseObjectProperty (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:10079:101)\n    at Parser.parseObjPropValue (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:10104:101)\n    at Parser.parseObjectMember (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:10028:10)\n    at Parser.parseObj (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9948:25)\n    at Parser.parseExprAtom (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9570:28)\n    at Parser.parseExprSubscripts (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Parser.parseMaybeUnary (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Parser.parseExprOps (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Parser.parseMaybeConditional (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Parser.parseMaybeAssign (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Parser.parseVar (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:11307:26)\n    at Parser.parseVarStatement (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Parser.parseStatementContent (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:10723:21)\n    at Parser.parseStatement (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Parser.parseBlockBody (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Parser.parseTopLevel (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:10587:10)\n    at Parser.parse (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:12097:10)\n    at parse (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/parser/lib/index.js:12148:38)\n    at parser (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/jianifan/Desktop/appAcademy_2019/forest/node_modules/@babel/core/lib/transform.js:34:34)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map