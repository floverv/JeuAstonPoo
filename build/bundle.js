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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_arme_Hache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _classes_arme_Epee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var readline = __webpack_require__(5).createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('question ?', function (variable) {
    console.log(variable + '--');
    readline.close();
});
var arme1 = new _classes_arme_Epee__WEBPACK_IMPORTED_MODULE_2__["default"]();
var perso1 = new _classes_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]('michel', arme1);
var arme2 = new _classes_arme_Hache__WEBPACK_IMPORTED_MODULE_1__["default"]();
var perso2 = new _classes_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]('michelle', arme2);
console.log(arme1.afficherStats());
//console.log(perso1, perso2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
var Personnage = /** @class */ (function () {
    function Personnage(nom, arme) {
        this.attaque = function (ennemie) { };
        this.cibler = function (cible) { };
        this.nom = nom;
        this.pv = Math.floor(Math.random() * 100) + 20;
        this.pvMax = this.pv;
        this.defense = 50;
        this.arme = arme;
    }
    Personnage.prototype.getNom = function () {
        return this.nom;
    };
    Personnage.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personnage.prototype.getPv = function () {
        return this.pv;
    };
    Personnage.prototype.setPv = function (pv) {
        this.pv = pv;
    };
    Personnage.prototype.getPvMax = function () {
        return this.pvMax;
    };
    Personnage.prototype.setPvMax = function (pvMax) {
        this.pvMax = pvMax;
    };
    Personnage.prototype.getDefense = function () {
        return this.defense;
    };
    Personnage.prototype.setDefense = function (defense) {
        this.defense = defense;
    };
    Personnage.prototype.getArme = function () {
        return this.arme;
    };
    Personnage.prototype.setArme = function (arme) {
        this.arme = arme;
    };
    return Personnage;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//Cette classe augmente les dégats
var Hache = /** @class */ (function (_super) {
    __extends(Hache, _super);
    /**
     * Constructeur de la hache
     */
    function Hache() {
        var _this = _super.call(this) || this;
        _this.boost = 20;
        _this.setDegatMin(_this.getDegatMin() + _this.boost);
        _this.setDegatMax(_this.getDegatMax() + _this.boost);
        return _this;
    }
    return Hache;
}(_Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"]));
/* harmony default export */ __webpack_exports__["default"] = (Hache);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme", function() { return Arme; });
var Arme = /** @class */ (function () {
    /**
     * Constructeur de l'épée
     */
    function Arme() {
        this.degatMin = Math.floor(Math.random() * 10) + 1;
        this.degatMax = Math.floor(Math.random() * 10) + 10;
        this.tauxCC = Math.floor(Math.random() * 20 + 4);
    }
    /**
     * Getter de degaMin
     */
    Arme.prototype.getDegatMin = function () {
        return this.degatMin;
    };
    /**
     * Setter de degaMax
     * @param degatMin
     */
    Arme.prototype.setDegatMin = function (degatMin) {
        this.degatMin = degatMin;
    };
    /**
     * Getter de degaMax
     */
    Arme.prototype.getDegatMax = function () {
        return this.degatMax;
    };
    /**
     * Setter de degaMax
     * @param degatMax
     */
    Arme.prototype.setDegatMax = function (degatMax) {
        this.degatMax = degatMax;
    };
    /**
     * Getter de tauxCC
     */
    Arme.prototype.getTauxCC = function () {
        return this.tauxCC;
    };
    /**
     * Setter de tauxCC
     * @param tauxCC
     */
    Arme.prototype.setTauxCC = function (tauxCC) {
        this.tauxCC = tauxCC;
    };
    /**
     * Affiche les stats de l'arme
     */
    Arme.prototype.afficherStats = function () {
        var response = "Voici les stats de cette arme :\n        > D\u00E9g\u00E2ts minimums : " + this.degatMin + "\n        > D\u00E9g\u00E2ts maximums : " + this.degatMax + "\n        > Chance de coup critiques : " + this.tauxCC;
        return response;
    };
    return Arme;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//Cette classe augmente les chances de coups critiques
var Epee = /** @class */ (function (_super) {
    __extends(Epee, _super);
    /**
     * Constructeur de l'épée
     */
    function Epee() {
        var _this = _super.call(this) || this;
        _this.boost = 20;
        _this.setTauxCC(_this.getTauxCC() + _this.boost);
        return _this;
    }
    return Epee;
}(_Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"]));
/* harmony default export */ __webpack_exports__["default"] = (Epee);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYXJtZS9IYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Bcm1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2FybWUvRXBlZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ1Q7QUFDRjtBQUV2QyxJQUFNLFFBQVEsR0FBRyxtQkFBTyxDQUFDLENBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUNqRCxLQUFLLEVBQUUsT0FBTyxD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QUFJLENBQUMsUUFBUSxnREFDYixJQUFJLENBQUMsUUFBUSwrQ0FDSixJQUFJLENBQUMsTUFBUSxDQUFDO1FBQzdDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFJTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEU4QjtBQUUvQixzREFBc0Q7QUFDdEQ7SUFBa0Msd0JBQUk7SUFJbEM7O09BRUc7SUFDSDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQVJPLFdBQUssR0FBVyxFQUFFLENBQUM7UUFPdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUNsRCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0FYaUMsMENBQUksR0FXckM7Ozs7Ozs7O0FDZEQscUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQXJtZSB9IGZyb20gXCIuL2NsYXNzZXMvQXJtZVwiO1xyXG5pbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSBcIi4vY2xhc3Nlcy9QZXJzb25uYWdlXCI7XHJcbmltcG9ydCBIYWNoZSBmcm9tIFwiLi9jbGFzc2VzL2FybWUvSGFjaGVcIjtcclxuaW1wb3J0IEVwZWUgZnJvbSBcIi4vY2xhc3Nlcy9hcm1lL0VwZWVcIjtcclxuXHJcbmNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XHJcbn0pXHJcblxyXG5yZWFkbGluZS5xdWVzdGlvbigncXVlc3Rpb24gPycsICh2YXJpYWJsZTogYW55KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YXJpYWJsZSsnLS0nKTtcclxuICAgIHJlYWRsaW5lLmNsb3NlKCk7XHJcbn0pIFxyXG5cclxubGV0IGFybWUxID0gbmV3IEVwZWUoKTtcclxubGV0IHBlcnNvMSA9IG5ldyBQZXJzb25uYWdlKCdtaWNoZWwnLCBhcm1lMSk7IFxyXG5cclxubGV0IGFybWUyID0gbmV3IEhhY2hlKCk7XHJcbmxldCBwZXJzbzIgPSBuZXcgUGVyc29ubmFnZSgnbWljaGVsbGUnLCBhcm1lMik7IFxyXG5cclxuY29uc29sZS5sb2coYXJtZTEuYWZmaWNoZXJTdGF0cygpKTtcclxuXHJcbi8vY29uc29sZS5sb2cocGVyc28xLCBwZXJzbzIpO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IEFybWUgfSBmcm9tICcuL0FybWUnXHJcblxyXG5leHBvcnQgY2xhc3MgUGVyc29ubmFnZSB7XHJcbiAgICBwcml2YXRlIG5vbSA6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHYgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHB2TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlZmVuc2U6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJtZTogQXJtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZywgYXJtZTogQXJtZSkge1xyXG4gICAgICAgIHRoaXMubm9tID0gbm9tO1xyXG4gICAgICAgIHRoaXMucHYgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMjA7XHJcbiAgICAgICAgdGhpcy5wdk1heCA9IHRoaXMucHY7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlID0gNTA7XHJcbiAgICAgICAgdGhpcy5hcm1lID0gYXJtZTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhcXVlID0gKGVubmVtaWU6IFBlcnNvbm5hZ2UpID0+IHsgfVxyXG5cclxuICAgIGNpYmxlciA9IChjaWJsZTogUGVyc29ubmFnZSkgPT4geyB9XHJcblxyXG4gICAgZ2V0Tm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROb20obm9tOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQdihwdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdiA9IHB2O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFB2TWF4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB2TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFB2TWF4KHB2TWF4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnB2TWF4ID0gcHZNYXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmZW5zZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZlbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmVuc2UoZGVmZW5zZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcm1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFybWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXJtZShhcm1lOiBBcm1lKSB7XHJcbiAgICAgICAgdGhpcy5hcm1lID0gYXJtZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi4vQXJtZVwiO1xyXG5cclxuLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGTDqWdhdHNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFjaGUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBib29zdDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RldXIgZGUgbGEgaGFjaGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldERlZ2F0TWluKHRoaXMuZ2V0RGVnYXRNaW4oKSArIHRoaXMuYm9vc3QpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVnYXRNYXgodGhpcy5nZXREZWdhdE1heCgpICsgdGhpcy5ib29zdCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXJtZSB7XHJcbiAgICBwcml2YXRlIGRlZ2F0TWluOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlZ2F0TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRhdXhDQzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0ZXVyIGRlIGwnw6lww6llXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVnYXRNaW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xyXG4gICAgICAgIHRoaXMuZGVnYXRNYXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMDtcclxuICAgICAgICB0aGlzLnRhdXhDQyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwICsgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZGUgZGVnYU1pblxyXG4gICAgICovXHJcbiAgICBnZXREZWdhdE1pbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWdhdE1pbjsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICogQHBhcmFtIGRlZ2F0TWluXHJcbiAgICAgKi9cclxuICAgIHNldERlZ2F0TWluKGRlZ2F0TWluOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlZ2F0TWluID0gZGVnYXRNaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICovXHJcbiAgICBnZXREZWdhdE1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWdhdE1heDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICogQHBhcmFtIGRlZ2F0TWF4IFxyXG4gICAgICovXHJcbiAgICBzZXREZWdhdE1heChkZWdhdE1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWdhdE1heCA9IGRlZ2F0TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIHRhdXhDQ1xyXG4gICAgICovXHJcbiAgICBnZXRUYXV4Q0MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGF1eENDO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIHRhdXhDQ1xyXG4gICAgICogQHBhcmFtIHRhdXhDQyBcclxuICAgICAqL1xyXG4gICAgc2V0VGF1eENDKHRhdXhDQzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50YXV4Q0MgPSB0YXV4Q0M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxlcyBzdGF0cyBkZSBsJ2FybWVcclxuICAgICAqL1xyXG4gICAgYWZmaWNoZXJTdGF0cygpIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IGBWb2ljaSBsZXMgc3RhdHMgZGUgY2V0dGUgYXJtZSA6XHJcbiAgICAgICAgPiBEw6lnw6J0cyBtaW5pbXVtcyA6ICR7dGhpcy5kZWdhdE1pbn1cclxuICAgICAgICA+IETDqWfDonRzIG1heGltdW1zIDogJHt0aGlzLmRlZ2F0TWF4fVxyXG4gICAgICAgID4gQ2hhbmNlIGRlIGNvdXAgY3JpdGlxdWVzIDogJHt0aGlzLnRhdXhDQ31gO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi4vQXJtZVwiO1xyXG5cclxuLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGNoYW5jZXMgZGUgY291cHMgY3JpdGlxdWVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwZWUgZXh0ZW5kcyBBcm1lIHtcclxuXHJcbiAgICBwcml2YXRlIGJvb3N0OiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdGV1ciBkZSBsJ8OpcMOpZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0VGF1eENDKHRoaXMuZ2V0VGF1eENDKCkgKyB0aGlzLmJvb3N0KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=