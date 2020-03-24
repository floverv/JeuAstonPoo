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
/* harmony import */ var _classes_arme_Hache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_arme_Epee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _classes_Gentil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _classes_Partie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _classes_enum_Roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





/* const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('question ?', (variable: any) => {
    console.log(variable+'--');
    readline.close();
})  */
var arme1 = new _classes_arme_Epee__WEBPACK_IMPORTED_MODULE_1__["default"]();
var arme2 = new _classes_arme_Hache__WEBPACK_IMPORTED_MODULE_0__["default"]();
var perso1 = new _classes_Gentil__WEBPACK_IMPORTED_MODULE_2__["Gentil"]('michel', arme1, _classes_enum_Roles__WEBPACK_IMPORTED_MODULE_4__["Roles"].Assassin);
var perso2 = new _classes_Gentil__WEBPACK_IMPORTED_MODULE_2__["Gentil"]('jack', arme2, _classes_enum_Roles__WEBPACK_IMPORTED_MODULE_4__["Roles"].Tank);
var tabGentil = [perso1, perso2];
var partie = new _classes_Partie__WEBPACK_IMPORTED_MODULE_3__["Partie"](tabGentil);
console.log(partie.getTabMechants(), partie.getTabGentils());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gentil", function() { return Gentil; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _enum_Roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
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


var Gentil = /** @class */ (function (_super) {
    __extends(Gentil, _super);
    function Gentil(nom, arme, role) {
        if (nom === void 0) { nom = ''; }
        var _this = _super.call(this, nom, arme) || this;
        _this.soigner = function (personnageSoigne) {
            //Si le gentil est un mage
            if (_this.role == _enum_Roles__WEBPACK_IMPORTED_MODULE_1__["Roles"].Mage) {
                var soinPv = Math.floor(Math.random() * 10 + 5);
                var pvPerso = personnageSoigne.getPv();
                var pvMaxPerso = personnageSoigne.getPvMax();
                //Si les pv soignée sont superieur au pv MAX.
                if ((pvPerso + soinPv) > pvMaxPerso) {
                    personnageSoigne.setPv(pvMaxPerso);
                }
                else {
                    personnageSoigne.setPv(pvPerso + soinPv);
                }
                console.log(personnageSoigne.getNom() + " vient d'etre soign\u00E9 de " + soinPv + " PV.");
            }
        };
        _this.role = role;
        return _this;
    }
    return Gentil;
}(_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
var Personnage = /** @class */ (function () {
    function Personnage(nom, arme) {
        var _this = this;
        this.cible = null;
        /**
         * Le personnage attaque la cible
         */
        this.attaquer = function () {
            var pvCible = _this.cible.pv;
            var nomCible = _this.cible.nom;
            var defenseCible = _this.cible.defense;
            var degat = Math.floor(Math.random() * (_this.arme.getDegatMax() - _this.arme.getDegatMin()) + _this.arme.getDegatMin());
            var CC = _this.arme.getTauxCC() / 100;
            //Taux de chance de critique
            if (Math.random() < CC) {
                console.log("CRITIQUE !");
                degat * CC;
            }
            //S'il y a une cible
            if (_this.cible != null) {
                console.log(_this.nom + " a inflige " + degat + " de degats");
                //S'il y a encore de l'armure
                if ((defenseCible - degat) > 0) {
                    defenseCible -= degat;
                    console.log(_this.nom + " a attaqu\u00E9 " + nomCible + ", il lui reste " + pvCible + " pv et " + defenseCible + " de defense.");
                }
                else {
                    //S'il n'a plus d'armure
                    defenseCible = 0;
                    if (pvCible - degat <= 0) {
                        pvCible -= degat;
                        console.log(_this.nom + " a attaqu\u00E9 " + nomCible + ", il lui reste " + pvCible + " pv.");
                    }
                    else {
                        _this.cible.setPv(0);
                        console.log(_this.nom + " a tu\u00E9 " + nomCible + ".");
                    }
                }
            }
        };
        /**
         * Le personnage cible un ennemie
         */
        this.cibler = function (cible) {
            _this.cible = cible;
            console.log(_this.nom + " a cibl\u00E9 " + _this.cible.nom);
        };
        /**
         * Remet à zero la cible
         */
        this.resetCible = function () {
            _this.cible = null;
        };
        this.nom = nom;
        this.pv = Math.floor(Math.random() * 150) + 50;
        this.pvMax = this.pv;
        this.defense = Math.floor(Math.random() * 50) + 5;
        this.arme = arme;
    }
    Personnage.prototype.getCible = function () {
        return this.cible;
    };
    Personnage.prototype.setCible = function (cible) {
        this.cible = cible;
    };
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles[Roles["Guerrier"] = 0] = "Guerrier";
    Roles[Roles["Assassin"] = 1] = "Assassin";
    Roles[Roles["Mage"] = 2] = "Mage";
    Roles[Roles["Tank"] = 3] = "Tank";
})(Roles || (Roles = {}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _Mechant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var Partie = /** @class */ (function () {
    function Partie(tabGentils) {
        var _this = this;
        /**
         * Rajout d'un personnage au tableau des gentils
         * @param personnage
         */
        this.ajoutGentil = function (personnage) {
            _this.tabGentils.push(personnage);
        };
        /**
         * Generation des mechants en fonction du nombre de gentils
         */
        this.generationMechants = function () {
            var listMechants = [];
            for (var i = 0; i < _this.tabGentils.length; i++) {
                var mechant = new _Mechant__WEBPACK_IMPORTED_MODULE_0__["Mechant"]('', new _Arme__WEBPACK_IMPORTED_MODULE_1__["Arme"]());
                mechant.randomName(mechant);
                listMechants.push(mechant);
            }
            return listMechants;
        };
        this.tabGentils = tabGentils;
        this.tabMechants = this.generationMechants();
    }
    Partie.prototype.getTabGentils = function () {
        return this.tabGentils;
    };
    Partie.prototype.getTabMechants = function () {
        return this.tabMechants;
    };
    return Partie;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechant", function() { return Mechant; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
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

var Mechant = /** @class */ (function (_super) {
    __extends(Mechant, _super);
    function Mechant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomName = function (personnage) {
            var name = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < 8; i++) {
                name += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            personnage.setNom(name);
        };
        return _this;
    }
    return Mechant;
}(_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2FybWUvSGFjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXJtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcm1lL0VwZWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvR2VudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZW51bS9Sb2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9QYXJ0aWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvTWVjaGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDRjtBQUNHO0FBQ0E7QUFDRztBQUU3Qzs7Ozs7Ozs7TUFRTTtBQUVOLElBQUksS0FBSyxHQUFHLElBQUksMERBQUksRUFBRSxDQUFDO0FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksMkRBQUssRUFBRSxDQUFDO0FBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksc0RBQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLHlEQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekQsSUFBSSxNQUFNLEdBQUcsSUFBSSxzREFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUseURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVuRCxJQUFJLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNEQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I5QjtBQUUvQixrQ0FBa0M7QUFDbEM7SUFBbUMseUJBQUk7SUFJbkM7O09BRUc7SUFDSDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVRPLFdBQUssR0FBVyxFQUFFLENBQUM7UUFPdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDdEQsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBWmtDLDBDQUFJLEdBWXRDOzs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7SUFLSTs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBCQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3QkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBUyxHQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCw0QkFBYSxHQUFiO1FBQ0ksSUFBSSxRQUFRLEdBQVcsNEVBQ0QsSUFBSSxDQUFDLFFBQVEsZ0RBQ2IsSUFBSSxDQUFDLFFBQVEsK0NBQ0osSUFBSSxDQUFDLE1BQVEsQ0FBQztRQUM3QyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBSUwsV0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFOEI7QUFFL0Isc0RBQXNEO0FBQ3REO0lBQWtDLHdCQUFJO0lBSWxDOztPQUVHO0lBQ0g7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFSTyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBT3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBWGlDLDBDQUFJLEdBV3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R5QztBQUNMO0FBR3JDO0lBQTRCLDBCQUFVO0lBR2xDLGdCQUFZLEdBQVEsRUFBRSxJQUFVLEVBQUUsSUFBVztRQUFqQyw4QkFBUTtRQUFwQixZQUNJLGtCQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FFbkI7UUFFRCxhQUFPLEdBQUcsVUFBQyxnQkFBNEI7WUFDbkMsMEJBQTBCO1lBQzFCLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxpREFBSyxDQUFDLElBQUksRUFBRTtnQkFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLE9BQU8sR0FBVyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxVQUFVLEdBQVcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRXJELDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxVQUFVLEVBQUU7b0JBQ2pDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0gsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUscUNBQTJCLE1BQU0sU0FBTSxDQUFDLENBQUM7YUFDcEY7UUFDTCxDQUFDO1FBbkJHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNyQixDQUFDO0lBbUJMLGFBQUM7QUFBRCxDQUFDLENBekIyQixzREFBVSxHQXlCckM7Ozs7Ozs7OztBQzNCRDtBQUFBO0FBQUE7SUFRSSxvQkFBWSxHQUFXLEVBQUUsSUFBVTtRQUFuQyxpQkFNQztRQVJPLFVBQUssR0FBUSxJQUFJLENBQUM7UUFVMUI7O1dBRUc7UUFDSCxhQUFRLEdBQUc7WUFDUCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM1QixJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN0QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN0SCxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUVuQyw0QkFBNEI7WUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7WUFFRCxvQkFBb0I7WUFDcEIsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBSSxLQUFJLENBQUMsR0FBRyxtQkFBYyxLQUFLLGVBQVksQ0FBQyxDQUFDO2dCQUN4RCw2QkFBNkI7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixZQUFZLElBQUcsS0FBSyxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxHQUFHLHdCQUFjLFFBQVEsdUJBQWtCLE9BQU8sZUFBVSxZQUFZLGlCQUFjLENBQUMsQ0FBQztpQkFDL0c7cUJBQU07b0JBQ0gsd0JBQXdCO29CQUN4QixZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixJQUFJLE9BQU8sR0FBRyxLQUFLLElBQUksQ0FBQyxFQUFFO3dCQUN0QixPQUFPLElBQUcsS0FBSyxDQUFDO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxHQUFHLHdCQUFjLFFBQVEsdUJBQWtCLE9BQU8sU0FBTSxDQUFDLENBQUM7cUJBQ2pGO3lCQUFNO3dCQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxHQUFHLG9CQUFVLFFBQVEsTUFBRyxDQUFDLENBQUM7cUJBQ2pEO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxXQUFNLEdBQUcsVUFBQyxLQUFpQjtZQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxHQUFHLHNCQUFZLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsZUFBVSxHQUFHO1lBQ1QsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQXpERyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBc0RELDZCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBR0QsMkJBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEdBQVc7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMEJBQUssR0FBTCxVQUFNLEVBQVU7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxPQUFlO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7OztBQ3RIRDtBQUFBO0FBQUEsSUFBWSxLQUtYO0FBTEQsV0FBWSxLQUFLO0lBQ2IseUNBQVE7SUFDUix5Q0FBUTtJQUNSLGlDQUFJO0lBQ0osaUNBQUk7QUFDUixDQUFDLEVBTFcsS0FBSyxLQUFMLEtBQUssUUFLaEI7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDTjtBQUU5QjtJQUlJLGdCQUFZLFVBQW9CO1FBQWhDLGlCQUdDO1FBRUQ7OztXQUdHO1FBQ0gsZ0JBQVcsR0FBRyxVQUFDLFVBQWtCO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRDs7V0FFRztRQUNILHVCQUFrQixHQUFHO1lBQ2pCLElBQUksWUFBWSxHQUFjLEVBQUUsQ0FBQztZQUNqQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksT0FBTyxHQUFZLElBQUksZ0RBQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSwwQ0FBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5QjtZQUVELE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUF4QkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBd0JELDhCQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN5QztBQUUxQztJQUE2QiwyQkFBVTtJQUF2QztRQUFBLHFFQVVDO1FBVEcsZ0JBQVUsR0FBRyxVQUFDLFVBQXNCO1lBQ2hDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLFVBQVUsR0FBVyxzREFBc0QsQ0FBQztZQUNoRixJQUFJLGdCQUFnQixHQUFXLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDakQsS0FBTSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRztnQkFDbkMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDOztJQUNMLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxDQVY0QixzREFBVSxHQVV0QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4vY2xhc3Nlcy9Bcm1lXCI7XHJcbmltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9jbGFzc2VzL1BlcnNvbm5hZ2VcIjtcclxuaW1wb3J0IEhhY2hlIGZyb20gXCIuL2NsYXNzZXMvYXJtZS9IYWNoZVwiO1xyXG5pbXBvcnQgRXBlZSBmcm9tIFwiLi9jbGFzc2VzL2FybWUvRXBlZVwiO1xyXG5pbXBvcnQgeyBHZW50aWwgfSBmcm9tIFwiLi9jbGFzc2VzL0dlbnRpbFwiO1xyXG5pbXBvcnQgeyBQYXJ0aWUgfSBmcm9tIFwiLi9jbGFzc2VzL1BhcnRpZVwiO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gXCIuL2NsYXNzZXMvZW51bS9Sb2xlc1wiO1xyXG5cclxuLyogY29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpLmNyZWF0ZUludGVyZmFjZSh7XHJcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxufSlcclxuXHJcbnJlYWRsaW5lLnF1ZXN0aW9uKCdxdWVzdGlvbiA/JywgKHZhcmlhYmxlOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhcmlhYmxlKyctLScpO1xyXG4gICAgcmVhZGxpbmUuY2xvc2UoKTtcclxufSkgICovXHJcblxyXG5sZXQgYXJtZTEgPSBuZXcgRXBlZSgpO1xyXG5sZXQgYXJtZTIgPSBuZXcgSGFjaGUoKTtcclxubGV0IHBlcnNvMSA9IG5ldyBHZW50aWwoJ21pY2hlbCcsIGFybWUxLCBSb2xlcy5Bc3Nhc3Npbik7IFxyXG5sZXQgcGVyc28yID0gbmV3IEdlbnRpbCgnamFjaycsIGFybWUyLCBSb2xlcy5UYW5rKTsgXHJcblxyXG5sZXQgdGFiR2VudGlsID0gW3BlcnNvMSwgcGVyc28yXTtcclxuXHJcbmxldCBwYXJ0aWUgPSBuZXcgUGFydGllKHRhYkdlbnRpbCk7XHJcblxyXG5jb25zb2xlLmxvZyhwYXJ0aWUuZ2V0VGFiTWVjaGFudHMoKSwgcGFydGllLmdldFRhYkdlbnRpbHMoKSk7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4uL0FybWVcIjtcclxuXHJcbi8vQ2V0dGUgY2xhc3NlIGF1Z21lbnRlIGxlcyBkw6lnYXRzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhY2hlIGV4dGVuZHMgQXJtZSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgYm9vc3Q6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0ZXVyIGRlIGxhIGhhY2hlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXREZWdhdE1pbih0aGlzLmdldERlZ2F0TWluKCkgKyB0aGlzLmJvb3N0KTtcclxuICAgICAgICB0aGlzLnNldERlZ2F0TWF4KHRoaXMuZ2V0RGVnYXRNYXgoKSArIHRoaXMuYm9vc3QpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFybWUge1xyXG4gICAgcHJpdmF0ZSBkZWdhdE1pbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWdhdE1heDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0YXV4Q0M6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdGV1ciBkZSBsJ8OpcMOpZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlZ2F0TWluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcclxuICAgICAgICB0aGlzLmRlZ2F0TWF4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTA7XHJcbiAgICAgICAgdGhpcy50YXV4Q0MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCArIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIGRlZ2FNaW5cclxuICAgICAqL1xyXG4gICAgZ2V0RGVnYXRNaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVnYXRNaW47ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIGRlZ2FNYXhcclxuICAgICAqIEBwYXJhbSBkZWdhdE1pblxyXG4gICAgICovXHJcbiAgICBzZXREZWdhdE1pbihkZWdhdE1pbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWdhdE1pbiA9IGRlZ2F0TWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIGRlZ2FNYXhcclxuICAgICAqL1xyXG4gICAgZ2V0RGVnYXRNYXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVnYXRNYXg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIGRlZ2FNYXhcclxuICAgICAqIEBwYXJhbSBkZWdhdE1heCBcclxuICAgICAqL1xyXG4gICAgc2V0RGVnYXRNYXgoZGVnYXRNYXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVnYXRNYXggPSBkZWdhdE1heDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBkZSB0YXV4Q0NcclxuICAgICAqL1xyXG4gICAgZ2V0VGF1eENDKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhdXhDQztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciBkZSB0YXV4Q0NcclxuICAgICAqIEBwYXJhbSB0YXV4Q0MgXHJcbiAgICAgKi9cclxuICAgIHNldFRhdXhDQyh0YXV4Q0M6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGF1eENDID0gdGF1eENDO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSBsZXMgc3RhdHMgZGUgbCdhcm1lXHJcbiAgICAgKi9cclxuICAgIGFmZmljaGVyU3RhdHMoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBgVm9pY2kgbGVzIHN0YXRzIGRlIGNldHRlIGFybWUgOlxyXG4gICAgICAgID4gRMOpZ8OidHMgbWluaW11bXMgOiAke3RoaXMuZGVnYXRNaW59XHJcbiAgICAgICAgPiBEw6lnw6J0cyBtYXhpbXVtcyA6ICR7dGhpcy5kZWdhdE1heH1cclxuICAgICAgICA+IENoYW5jZSBkZSBjb3VwIGNyaXRpcXVlcyA6ICR7dGhpcy50YXV4Q0N9YDtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4uL0FybWVcIjtcclxuXHJcbi8vQ2V0dGUgY2xhc3NlIGF1Z21lbnRlIGxlcyBjaGFuY2VzIGRlIGNvdXBzIGNyaXRpcXVlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcGVlIGV4dGVuZHMgQXJtZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBib29zdDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RldXIgZGUgbCfDqXDDqWVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldFRhdXhDQyh0aGlzLmdldFRhdXhDQygpICsgdGhpcy5ib29zdCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSBcIi4vUGVyc29ubmFnZVwiO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gXCIuL2VudW0vUm9sZXNcIjtcclxuaW1wb3J0IHsgQXJtZSB9IGZyb20gXCIuL0FybWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW50aWwgZXh0ZW5kcyBQZXJzb25uYWdlIHtcclxuICAgIHByaXZhdGUgcm9sZTogUm9sZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tID0gJycsIGFybWU6IEFybWUsIHJvbGU6IFJvbGVzKSB7XHJcbiAgICAgICAgc3VwZXIobm9tLCBhcm1lKTtcclxuICAgICAgICB0aGlzLnJvbGUgPSByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvaWduZXIgPSAocGVyc29ubmFnZVNvaWduZTogUGVyc29ubmFnZSkgPT4ge1xyXG4gICAgICAgIC8vU2kgbGUgZ2VudGlsIGVzdCB1biBtYWdlXHJcbiAgICAgICAgaWYoIHRoaXMucm9sZSA9PSBSb2xlcy5NYWdlKSB7XHJcbiAgICAgICAgICAgIGxldCBzb2luUHYgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCArIDUpO1xyXG4gICAgICAgICAgICBsZXQgcHZQZXJzbzogbnVtYmVyID0gcGVyc29ubmFnZVNvaWduZS5nZXRQdigpO1xyXG4gICAgICAgICAgICBsZXQgcHZNYXhQZXJzbzogbnVtYmVyID0gcGVyc29ubmFnZVNvaWduZS5nZXRQdk1heCgpO1xyXG5cclxuICAgICAgICAgICAgLy9TaSBsZXMgcHYgc29pZ27DqWUgc29udCBzdXBlcmlldXIgYXUgcHYgTUFYLlxyXG4gICAgICAgICAgICBpZiAoKHB2UGVyc28gKyBzb2luUHYpID4gcHZNYXhQZXJzbykge1xyXG4gICAgICAgICAgICAgICAgcGVyc29ubmFnZVNvaWduZS5zZXRQdihwdk1heFBlcnNvKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5hZ2VTb2lnbmUuc2V0UHYocHZQZXJzbyArIHNvaW5Qdik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BlcnNvbm5hZ2VTb2lnbmUuZ2V0Tm9tKCl9IHZpZW50IGQnZXRyZSBzb2lnbsOpIGRlICR7c29pblB2fSBQVi5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBcm1lIH0gZnJvbSAnLi9Bcm1lJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbm5hZ2Uge1xyXG4gICAgcHJpdmF0ZSBub20gOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHB2IDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwdk1heDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFybWU6IEFybWU7XHJcbiAgICBwcml2YXRlIGNpYmxlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nLCBhcm1lOiBBcm1lKSB7XHJcbiAgICAgICAgdGhpcy5ub20gPSBub207XHJcbiAgICAgICAgdGhpcy5wdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1MCkgKyA1MDtcclxuICAgICAgICB0aGlzLnB2TWF4ID0gdGhpcy5wdjtcclxuICAgICAgICB0aGlzLmRlZmVuc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgICAgIHRoaXMuYXJtZSA9IGFybWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZSBwZXJzb25uYWdlIGF0dGFxdWUgbGEgY2libGVcclxuICAgICAqL1xyXG4gICAgYXR0YXF1ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHB2Q2libGUgPSB0aGlzLmNpYmxlLnB2O1xyXG4gICAgICAgIGxldCBub21DaWJsZSA9IHRoaXMuY2libGUubm9tO1xyXG4gICAgICAgIGxldCBkZWZlbnNlQ2libGUgPSB0aGlzLmNpYmxlLmRlZmVuc2U7XHJcbiAgICAgICAgbGV0IGRlZ2F0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuYXJtZS5nZXREZWdhdE1heCgpIC0gdGhpcy5hcm1lLmdldERlZ2F0TWluKCkpICsgdGhpcy5hcm1lLmdldERlZ2F0TWluKCkpO1xyXG4gICAgICAgIGxldCBDQyA9IHRoaXMuYXJtZS5nZXRUYXV4Q0MoKS8xMDA7XHJcblxyXG4gICAgICAgIC8vVGF1eCBkZSBjaGFuY2UgZGUgY3JpdGlxdWVcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IENDKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDUklUSVFVRSAhYCk7XHJcbiAgICAgICAgICAgIGRlZ2F0ICogQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vUydpbCB5IGEgdW5lIGNpYmxlXHJcbiAgICAgICAgaWYgKHRoaXMuY2libGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSBpbmZsaWdlICR7ZGVnYXR9IGRlIGRlZ2F0c2ApO1xyXG4gICAgICAgICAgICAvL1MnaWwgeSBhIGVuY29yZSBkZSBsJ2FybXVyZVxyXG4gICAgICAgICAgICBpZiAoKGRlZmVuc2VDaWJsZSAtIGRlZ2F0KSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRlZmVuc2VDaWJsZS09IGRlZ2F0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5ub219IGEgYXR0YXF1w6kgJHtub21DaWJsZX0sIGlsIGx1aSByZXN0ZSAke3B2Q2libGV9IHB2IGV0ICR7ZGVmZW5zZUNpYmxlfSBkZSBkZWZlbnNlLmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9TJ2lsIG4nYSBwbHVzIGQnYXJtdXJlXHJcbiAgICAgICAgICAgICAgICBkZWZlbnNlQ2libGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHB2Q2libGUgLSBkZWdhdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHZDaWJsZS09IGRlZ2F0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubm9tfSBhIGF0dGFxdcOpICR7bm9tQ2libGV9LCBpbCBsdWkgcmVzdGUgJHtwdkNpYmxlfSBwdi5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaWJsZS5zZXRQdigwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSB0dcOpICR7bm9tQ2libGV9LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGUgcGVyc29ubmFnZSBjaWJsZSB1biBlbm5lbWllXHJcbiAgICAgKi9cclxuICAgIGNpYmxlciA9IChjaWJsZTogUGVyc29ubmFnZSkgPT4geyBcclxuICAgICAgICB0aGlzLmNpYmxlID0gY2libGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5ub219IGEgY2libMOpICR7dGhpcy5jaWJsZS5ub219YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1ldCDDoCB6ZXJvIGxhIGNpYmxlXHJcbiAgICAgKi9cclxuICAgIHJlc2V0Q2libGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaWJsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2libGUoY2libGU6IFBlcnNvbm5hZ2UpIHtcclxuICAgICAgICB0aGlzLmNpYmxlID0gY2libGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE5vbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5ub20gPSBub207XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHY7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHYocHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHYgPSBwdjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQdk1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdk1heDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQdk1heChwdk1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdk1heCA9IHB2TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmVuc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWZlbnNlKGRlZmVuc2U6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcm1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFybWUoYXJtZTogQXJtZSkge1xyXG4gICAgICAgIHRoaXMuYXJtZSA9IGFybWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBSb2xlcyB7XHJcbiAgICBHdWVycmllcixcclxuICAgIEFzc2Fzc2luLFxyXG4gICAgTWFnZSxcclxuICAgIFRhbmtcclxufSIsImltcG9ydCB7IEdlbnRpbCB9IGZyb20gXCIuL0dlbnRpbFwiO1xyXG5pbXBvcnQgeyBNZWNoYW50IH0gZnJvbSBcIi4vTWVjaGFudFwiO1xyXG5pbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4vQXJtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpZSB7XHJcbiAgICBwcml2YXRlIHRhYkdlbnRpbHM6IEdlbnRpbFtdO1xyXG4gICAgcHJpdmF0ZSB0YWJNZWNoYW50czogTWVjaGFudFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhYkdlbnRpbHM6IEdlbnRpbFtdKSB7XHJcbiAgICAgICAgdGhpcy50YWJHZW50aWxzID0gdGFiR2VudGlscztcclxuICAgICAgICB0aGlzLnRhYk1lY2hhbnRzID0gdGhpcy5nZW5lcmF0aW9uTWVjaGFudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJham91dCBkJ3VuIHBlcnNvbm5hZ2UgYXUgdGFibGVhdSBkZXMgZ2VudGlsc1xyXG4gICAgICogQHBhcmFtIHBlcnNvbm5hZ2UgXHJcbiAgICAgKi9cclxuICAgIGFqb3V0R2VudGlsID0gKHBlcnNvbm5hZ2U6IEdlbnRpbCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFiR2VudGlscy5wdXNoKHBlcnNvbm5hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGlvbiBkZXMgbWVjaGFudHMgZW4gZm9uY3Rpb24gZHUgbm9tYnJlIGRlIGdlbnRpbHNcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGlvbk1lY2hhbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBsaXN0TWVjaGFudHM6IE1lY2hhbnRbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkdlbnRpbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1lY2hhbnQ6IE1lY2hhbnQgPSBuZXcgTWVjaGFudCgnJywgbmV3IEFybWUoKSk7XHJcbiAgICAgICAgICAgIG1lY2hhbnQucmFuZG9tTmFtZShtZWNoYW50KTtcclxuICAgICAgICAgICAgbGlzdE1lY2hhbnRzLnB1c2gobWVjaGFudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdE1lY2hhbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYkdlbnRpbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiR2VudGlscztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJNZWNoYW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJNZWNoYW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9QZXJzb25uYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVjaGFudCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG4gICAgcmFuZG9tTmFtZSA9IChwZXJzb25uYWdlOiBQZXJzb25uYWdlKSA9PiB7XHJcbiAgICAgICAgdmFyIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHZhciBjaGFyYWN0ZXJzOiBzdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcbiAgICAgICAgdmFyIGNoYXJhY3RlcnNMZW5ndGg6IG51bWJlciA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoIHZhciBpOiBudW1iZXIgPSAwOyBpIDwgODsgaSsrICkge1xyXG4gICAgICAgICAgIG5hbWUgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwZXJzb25uYWdlLnNldE5vbShuYW1lKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=