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
/* harmony import */ var _classes_Gentil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_Partie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _classes_enum_Roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _classes_arme_Epee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _classes_arme_Hache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _classes_Combat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);






var arme1 = new _classes_arme_Epee__WEBPACK_IMPORTED_MODULE_3__["default"]();
var arme2 = new _classes_arme_Hache__WEBPACK_IMPORTED_MODULE_4__["default"]();
var perso1 = new _classes_Gentil__WEBPACK_IMPORTED_MODULE_0__["Gentil"]('michel', arme1, _classes_enum_Roles__WEBPACK_IMPORTED_MODULE_2__["Roles"].Assassin);
var perso2 = new _classes_Gentil__WEBPACK_IMPORTED_MODULE_0__["Gentil"]('jack', arme2, _classes_enum_Roles__WEBPACK_IMPORTED_MODULE_2__["Roles"].Tank);
var tabGentil = [perso1, perso2];
var partie = new _classes_Partie__WEBPACK_IMPORTED_MODULE_1__["Partie"](tabGentil);
var combat = new _classes_Combat__WEBPACK_IMPORTED_MODULE_5__["default"](partie);
combat.creerGentil();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gentil", function() { return Gentil; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _enum_Roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
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
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _Mechant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


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
         * Supprimer un gentil
         */
        this.supprGentil = function (personnage) {
            return _this.tabGentils.splice(_this.tabGentils.indexOf(personnage), 1);
        };
        /**
         * Supprimer un mechant
         */
        this.supprMechant = function (personnage) {
            return _this.tabGentils.splice(_this.tabMechants.indexOf(personnage), 1);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechant", function() { return Mechant; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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



/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arme_Hache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _arme_Epee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Combat = /** @class */ (function () {
    function Combat(partie) {
        var _this = this;
        this.readlineReader = function (question) { return __awaiter(_this, void 0, void 0, function () {
            var response, rl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rl = readline__WEBPACK_IMPORTED_MODULE_2___default.a.createInterface({
                            input: process.stdin,
                            output: process.stdout,
                            terminal: false
                        });
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                rl.question("" + question, function (answer) {
                                    resolve(answer);
                                });
                            }).then(function (onfull) {
                                response = onfull;
                                rl.close();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        this.partie = partie;
    }
    Combat.prototype.creerGentil = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arme, role, name, nameArme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readlineReader('Quel est le nom de votre Hero ?')];
                    case 1:
                        name = _a.sent();
                        console.log("Le nom de votre hero est: " + name);
                        return [4 /*yield*/, this.readlineReader('Quel est votre arme -> Epee ou Hache ?')];
                    case 2:
                        nameArme = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(nameArme != "Epee" && nameArme != "Hache")) return [3 /*break*/, 5];
                        console.log("Le nom de votre arme est incorrect, veuillez choisir entre une Epee ou une Hache");
                        return [4 /*yield*/, this.readlineReader('Quel est votre arme -> Epee ou Hache ?')];
                    case 4:
                        nameArme = _a.sent();
                        return [3 /*break*/, 3];
                    case 5:
                        if (nameArme == 'Epee') {
                            arme = new _arme_Epee__WEBPACK_IMPORTED_MODULE_1__["default"]();
                        }
                        else {
                            arme = new _arme_Hache__WEBPACK_IMPORTED_MODULE_0__["default"]();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Combat.prototype.verifieMort = function () {
        var _this = this;
        var tabGentil = this.partie.getTabGentils();
        var tabMechant = this.partie.getTabMechants();
        tabGentil.forEach(function (perso) {
            if (perso.getPv() == 0) {
                _this.partie.supprGentil(perso);
            }
        });
        tabMechant.forEach(function (perso) {
            if (perso.getPv() == 0) {
                _this.partie.supprMechant(perso);
            }
        });
    };
    return Combat;
}());
/* harmony default export */ __webpack_exports__["default"] = (Combat);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0dlbnRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9QZXJzb25uYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2VudW0vUm9sZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvUGFydGllLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL01lY2hhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXJtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcm1lL0VwZWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYXJtZS9IYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Db21iYXQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhZGxpbmVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFB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QUFJLE9BQU87d0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0ZBQWtGLENBQUMsQ0FBQzt3QkFDckYscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyx3Q0FBd0MsQ0FBQzs7d0JBQTlFLFFBQVEsR0FBRyxTQUFtRSxDQUFDOzs7d0JBR25GLElBQUksUUFBUSxJQUFJLE1BQU0sRUFBRTs0QkFDcEIsSUFBSSxHQUFHLElBQUksa0RBQUksRUFBRSxDQUFDO3lCQUNyQjs2QkFBTTs0QkFDSCxJQUFJLEdBQUcsSUFBSSxtREFBSyxFQUFFLENBQUM7eUJBQ3RCOzs7OztLQVNKO0lBR0QsNEJBQVcsR0FBWDtRQUFBLGlCQWVDO1FBZEcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNuQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQUs7WUFDcEIsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQy9FRCxxQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBHZW50aWwgfSBmcm9tIFwiLi9jbGFzc2VzL0dlbnRpbFwiO1xyXG5pbXBvcnQgeyBQYXJ0aWUgfSBmcm9tIFwiLi9jbGFzc2VzL1BhcnRpZVwiO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gXCIuL2NsYXNzZXMvZW51bS9Sb2xlc1wiO1xyXG5pbXBvcnQgRXBlZSBmcm9tIFwiLi9jbGFzc2VzL2FybWUvRXBlZVwiO1xyXG5pbXBvcnQgSGFjaGUgZnJvbSBcIi4vY2xhc3Nlcy9hcm1lL0hhY2hlXCI7XHJcbmltcG9ydCBDb21iYXQgZnJvbSBcIi4vY2xhc3Nlcy9Db21iYXRcIjtcclxuXHJcbmxldCBhcm1lMSA9IG5ldyBFcGVlKCk7XHJcbmxldCBhcm1lMiA9IG5ldyBIYWNoZSgpO1xyXG5sZXQgcGVyc28xID0gbmV3IEdlbnRpbCgnbWljaGVsJywgYXJtZTEsIFJvbGVzLkFzc2Fzc2luKTsgXHJcbmxldCBwZXJzbzIgPSBuZXcgR2VudGlsKCdqYWNrJywgYXJtZTIsIFJvbGVzLlRhbmspOyBcclxuXHJcbmxldCB0YWJHZW50aWwgPSBbcGVyc28xLCBwZXJzbzJdO1xyXG5cclxubGV0IHBhcnRpZSA9IG5ldyBQYXJ0aWUodGFiR2VudGlsKTtcclxuXHJcbmxldCBjb21iYXQgPSBuZXcgQ29tYmF0KHBhcnRpZSk7XHJcbmNvbWJhdC5jcmVlckdlbnRpbCgpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gXCIuL1BlcnNvbm5hZ2VcIjtcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tIFwiLi9lbnVtL1JvbGVzXCI7XHJcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcbiAgICBwcml2YXRlIHJvbGU6IFJvbGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbSA9ICcnLCBhcm1lOiBBcm1lLCByb2xlOiBSb2xlcykge1xyXG4gICAgICAgIHN1cGVyKG5vbSwgYXJtZSk7XHJcbiAgICAgICAgdGhpcy5yb2xlID0gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICBzb2lnbmVyID0gKHBlcnNvbm5hZ2VTb2lnbmU6IFBlcnNvbm5hZ2UpID0+IHtcclxuICAgICAgICAvL1NpIGxlIGdlbnRpbCBlc3QgdW4gbWFnZVxyXG4gICAgICAgIGlmKCB0aGlzLnJvbGUgPT0gUm9sZXMuTWFnZSkge1xyXG4gICAgICAgICAgICBsZXQgc29pblB2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyA1KTtcclxuICAgICAgICAgICAgbGV0IHB2UGVyc286IG51bWJlciA9IHBlcnNvbm5hZ2VTb2lnbmUuZ2V0UHYoKTtcclxuICAgICAgICAgICAgbGV0IHB2TWF4UGVyc286IG51bWJlciA9IHBlcnNvbm5hZ2VTb2lnbmUuZ2V0UHZNYXgoKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2kgbGVzIHB2IHNvaWduw6llIHNvbnQgc3VwZXJpZXVyIGF1IHB2IE1BWC5cclxuICAgICAgICAgICAgaWYgKChwdlBlcnNvICsgc29pblB2KSA+IHB2TWF4UGVyc28pIHtcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5hZ2VTb2lnbmUuc2V0UHYocHZNYXhQZXJzbyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwZXJzb25uYWdlU29pZ25lLnNldFB2KHB2UGVyc28gKyBzb2luUHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwZXJzb25uYWdlU29pZ25lLmdldE5vbSgpfSB2aWVudCBkJ2V0cmUgc29pZ27DqSBkZSAke3NvaW5Qdn0gUFYuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXJtZSB9IGZyb20gJy4vQXJtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyc29ubmFnZSB7XHJcbiAgICBwcml2YXRlIG5vbSA6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHYgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHB2TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlZmVuc2U6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJtZTogQXJtZTtcclxuICAgIHByaXZhdGUgY2libGU6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIGFybWU6IEFybWUpIHtcclxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuICAgICAgICB0aGlzLnB2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUwKSArIDUwO1xyXG4gICAgICAgIHRoaXMucHZNYXggPSB0aGlzLnB2O1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICAgICAgdGhpcy5hcm1lID0gYXJtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlIHBlcnNvbm5hZ2UgYXR0YXF1ZSBsYSBjaWJsZVxyXG4gICAgICovXHJcbiAgICBhdHRhcXVlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcHZDaWJsZSA9IHRoaXMuY2libGUucHY7XHJcbiAgICAgICAgbGV0IG5vbUNpYmxlID0gdGhpcy5jaWJsZS5ub207XHJcbiAgICAgICAgbGV0IGRlZmVuc2VDaWJsZSA9IHRoaXMuY2libGUuZGVmZW5zZTtcclxuICAgICAgICBsZXQgZGVnYXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5hcm1lLmdldERlZ2F0TWF4KCkgLSB0aGlzLmFybWUuZ2V0RGVnYXRNaW4oKSkgKyB0aGlzLmFybWUuZ2V0RGVnYXRNaW4oKSk7XHJcbiAgICAgICAgbGV0IENDID0gdGhpcy5hcm1lLmdldFRhdXhDQygpLzEwMDtcclxuXHJcbiAgICAgICAgLy9UYXV4IGRlIGNoYW5jZSBkZSBjcml0aXF1ZVxyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgQ0MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENSSVRJUVVFICFgKTtcclxuICAgICAgICAgICAgZGVnYXQgKiBDQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9TJ2lsIHkgYSB1bmUgY2libGVcclxuICAgICAgICBpZiAodGhpcy5jaWJsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubm9tfSBhIGluZmxpZ2UgJHtkZWdhdH0gZGUgZGVnYXRzYCk7XHJcbiAgICAgICAgICAgIC8vUydpbCB5IGEgZW5jb3JlIGRlIGwnYXJtdXJlXHJcbiAgICAgICAgICAgIGlmICgoZGVmZW5zZUNpYmxlIC0gZGVnYXQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVmZW5zZUNpYmxlLT0gZGVnYXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSBhdHRhcXXDqSAke25vbUNpYmxlfSwgaWwgbHVpIHJlc3RlICR7cHZDaWJsZX0gcHYgZXQgJHtkZWZlbnNlQ2libGV9IGRlIGRlZmVuc2UuYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1MnaWwgbidhIHBsdXMgZCdhcm11cmVcclxuICAgICAgICAgICAgICAgIGRlZmVuc2VDaWJsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocHZDaWJsZSAtIGRlZ2F0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwdkNpYmxlLT0gZGVnYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5ub219IGEgYXR0YXF1w6kgJHtub21DaWJsZX0sIGlsIGx1aSByZXN0ZSAke3B2Q2libGV9IHB2LmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpYmxlLnNldFB2KDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubm9tfSBhIHR1w6kgJHtub21DaWJsZX0uYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZSBwZXJzb25uYWdlIGNpYmxlIHVuIGVubmVtaWVcclxuICAgICAqL1xyXG4gICAgY2libGVyID0gKGNpYmxlOiBQZXJzb25uYWdlKSA9PiB7IFxyXG4gICAgICAgIHRoaXMuY2libGUgPSBjaWJsZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSBjaWJsw6kgJHt0aGlzLmNpYmxlLm5vbX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbWV0IMOgIHplcm8gbGEgY2libGVcclxuICAgICAqL1xyXG4gICAgcmVzZXRDaWJsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmNpYmxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaWJsZShjaWJsZTogUGVyc29ubmFnZSkge1xyXG4gICAgICAgIHRoaXMuY2libGUgPSBjaWJsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Tm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROb20obm9tOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQdihwdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdiA9IHB2O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFB2TWF4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB2TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFB2TWF4KHB2TWF4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnB2TWF4ID0gcHZNYXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmZW5zZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZlbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmVuc2UoZGVmZW5zZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcm1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFybWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXJtZShhcm1lOiBBcm1lKSB7XHJcbiAgICAgICAgdGhpcy5hcm1lID0gYXJtZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIFJvbGVzIHtcclxuICAgIEd1ZXJyaWVyLFxyXG4gICAgQXNzYXNzaW4sXHJcbiAgICBNYWdlLFxyXG4gICAgVGFua1xyXG59IiwiaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4vR2VudGlsXCI7XHJcbmltcG9ydCB7IE1lY2hhbnQgfSBmcm9tIFwiLi9NZWNoYW50XCI7XHJcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XHJcbmltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9QZXJzb25uYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGllIHtcclxuICAgIHByaXZhdGUgdGFiR2VudGlsczogR2VudGlsW107XHJcbiAgICBwcml2YXRlIHRhYk1lY2hhbnRzOiBNZWNoYW50W107XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiR2VudGlsczogR2VudGlsW10pIHtcclxuICAgICAgICB0aGlzLnRhYkdlbnRpbHMgPSB0YWJHZW50aWxzO1xyXG4gICAgICAgIHRoaXMudGFiTWVjaGFudHMgPSB0aGlzLmdlbmVyYXRpb25NZWNoYW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFqb3V0IGQndW4gcGVyc29ubmFnZSBhdSB0YWJsZWF1IGRlcyBnZW50aWxzXHJcbiAgICAgKiBAcGFyYW0gcGVyc29ubmFnZSBcclxuICAgICAqL1xyXG4gICAgYWpvdXRHZW50aWwgPSAocGVyc29ubmFnZTogR2VudGlsKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJHZW50aWxzLnB1c2gocGVyc29ubmFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwcmltZXIgdW4gZ2VudGlsXHJcbiAgICAgKi9cclxuICAgIHN1cHByR2VudGlsID0gKHBlcnNvbm5hZ2U6IEdlbnRpbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYkdlbnRpbHMuc3BsaWNlKHRoaXMudGFiR2VudGlscy5pbmRleE9mKHBlcnNvbm5hZ2UpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1cHByaW1lciB1biBtZWNoYW50XHJcbiAgICAgKi9cclxuICAgIHN1cHByTWVjaGFudCA9IChwZXJzb25uYWdlOiBNZWNoYW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiR2VudGlscy5zcGxpY2UodGhpcy50YWJNZWNoYW50cy5pbmRleE9mKHBlcnNvbm5hZ2UpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRpb24gZGVzIG1lY2hhbnRzIGVuIGZvbmN0aW9uIGR1IG5vbWJyZSBkZSBnZW50aWxzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRpb25NZWNoYW50cyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbGlzdE1lY2hhbnRzOiBNZWNoYW50W10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJHZW50aWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtZWNoYW50OiBNZWNoYW50ID0gbmV3IE1lY2hhbnQoJycsIG5ldyBBcm1lKCkpO1xyXG4gICAgICAgICAgICBtZWNoYW50LnJhbmRvbU5hbWUobWVjaGFudCk7XHJcbiAgICAgICAgICAgIGxpc3RNZWNoYW50cy5wdXNoKG1lY2hhbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3RNZWNoYW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJHZW50aWxzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYkdlbnRpbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFiTWVjaGFudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiTWVjaGFudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSBcIi4vUGVyc29ubmFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lY2hhbnQgZXh0ZW5kcyBQZXJzb25uYWdlIHtcclxuICAgIHJhbmRvbU5hbWUgPSAocGVyc29ubmFnZTogUGVyc29ubmFnZSkgPT4ge1xyXG4gICAgICAgIHZhciBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgICAgICB2YXIgY2hhcmFjdGVyczogc3RyaW5nID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xyXG4gICAgICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoOiBudW1iZXIgPSBjaGFyYWN0ZXJzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKCB2YXIgaTogbnVtYmVyID0gMDsgaSA8IDg7IGkrKyApIHtcclxuICAgICAgICAgICBuYW1lICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGVyc29ubmFnZS5zZXROb20obmFtZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXJtZSB7XHJcbiAgICBwcml2YXRlIGRlZ2F0TWluOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlZ2F0TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRhdXhDQzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0ZXVyIGRlIGwnw6lww6llXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVnYXRNaW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xyXG4gICAgICAgIHRoaXMuZGVnYXRNYXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMDtcclxuICAgICAgICB0aGlzLnRhdXhDQyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwICsgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZGUgZGVnYU1pblxyXG4gICAgICovXHJcbiAgICBnZXREZWdhdE1pbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWdhdE1pbjsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICogQHBhcmFtIGRlZ2F0TWluXHJcbiAgICAgKi9cclxuICAgIHNldERlZ2F0TWluKGRlZ2F0TWluOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlZ2F0TWluID0gZGVnYXRNaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICovXHJcbiAgICBnZXREZWdhdE1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWdhdE1heDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICogQHBhcmFtIGRlZ2F0TWF4IFxyXG4gICAgICovXHJcbiAgICBzZXREZWdhdE1heChkZWdhdE1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWdhdE1heCA9IGRlZ2F0TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIHRhdXhDQ1xyXG4gICAgICovXHJcbiAgICBnZXRUYXV4Q0MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGF1eENDO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIHRhdXhDQ1xyXG4gICAgICogQHBhcmFtIHRhdXhDQyBcclxuICAgICAqL1xyXG4gICAgc2V0VGF1eENDKHRhdXhDQzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50YXV4Q0MgPSB0YXV4Q0M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxlcyBzdGF0cyBkZSBsJ2FybWVcclxuICAgICAqL1xyXG4gICAgYWZmaWNoZXJTdGF0cygpIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IGBWb2ljaSBsZXMgc3RhdHMgZGUgY2V0dGUgYXJtZSA6XHJcbiAgICAgICAgPiBEw6lnw6J0cyBtaW5pbXVtcyA6ICR7dGhpcy5kZWdhdE1pbn1cclxuICAgICAgICA+IETDqWfDonRzIG1heGltdW1zIDogJHt0aGlzLmRlZ2F0TWF4fVxyXG4gICAgICAgID4gQ2hhbmNlIGRlIGNvdXAgY3JpdGlxdWVzIDogJHt0aGlzLnRhdXhDQ31gO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi4vQXJtZVwiO1xyXG5cclxuLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGNoYW5jZXMgZGUgY291cHMgY3JpdGlxdWVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwZWUgZXh0ZW5kcyBBcm1lIHtcclxuXHJcbiAgICBwcml2YXRlIGJvb3N0OiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdGV1ciBkZSBsJ8OpcMOpZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0VGF1eENDKHRoaXMuZ2V0VGF1eENDKCkgKyB0aGlzLmJvb3N0KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi4vQXJtZVwiO1xyXG5cclxuLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGTDqWdhdHNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFjaGUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBib29zdDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RldXIgZGUgbGEgaGFjaGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldERlZ2F0TWluKHRoaXMuZ2V0RGVnYXRNaW4oKSArIHRoaXMuYm9vc3QpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVnYXRNYXgodGhpcy5nZXREZWdhdE1heCgpICsgdGhpcy5ib29zdCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQYXJ0aWUgfSBmcm9tIFwiLi9QYXJ0aWVcIlxyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gXCIuL2VudW0vUm9sZXNcIjtcclxuaW1wb3J0IHsgQXJtZSB9IGZyb20gXCIuL0FybWVcIjtcclxuaW1wb3J0IEhhY2hlIGZyb20gXCIuL2FybWUvSGFjaGVcIjtcclxuaW1wb3J0IEVwZWUgZnJvbSBcIi4vYXJtZS9FcGVlXCI7XHJcbmltcG9ydCByZWFkbGluZSBmcm9tIFwicmVhZGxpbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJhdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJ0aWU6IFBhcnRpZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJ0aWU6IFBhcnRpZSkge1xyXG4gICAgICAgIHRoaXMucGFydGllID0gcGFydGllO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRsaW5lUmVhZGVyID0gYXN5bmMgKHF1ZXN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgICAgICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgICAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcclxuICAgICAgICAgICAgdGVybWluYWw6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJsLnF1ZXN0aW9uKGAke3F1ZXN0aW9ufWAsIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbnN3ZXIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbihvbmZ1bGwgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IG9uZnVsbDtcclxuICAgICAgICAgICAgcmwuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBjcmVlckdlbnRpbCgpIHtcclxuICAgICAgICBsZXQgYXJtZTogQXJtZTtcclxuICAgICAgICBsZXQgcm9sZTogUm9sZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5hbWUgPSBhd2FpdCB0aGlzLnJlYWRsaW5lUmVhZGVyKCdRdWVsIGVzdCBsZSBub20gZGUgdm90cmUgSGVybyA/Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYExlIG5vbSBkZSB2b3RyZSBoZXJvIGVzdDogJHtuYW1lfWApO1xyXG5cclxuICAgICAgICBsZXQgbmFtZUFybWUgPSBhd2FpdCB0aGlzLnJlYWRsaW5lUmVhZGVyKCdRdWVsIGVzdCB2b3RyZSBhcm1lIC0+IEVwZWUgb3UgSGFjaGUgPycpO1xyXG4gICAgICAgIHdoaWxlIChuYW1lQXJtZSAhPSBcIkVwZWVcIiAmJiBuYW1lQXJtZSAhPSBcIkhhY2hlXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExlIG5vbSBkZSB2b3RyZSBhcm1lIGVzdCBpbmNvcnJlY3QsIHZldWlsbGV6IGNob2lzaXIgZW50cmUgdW5lIEVwZWUgb3UgdW5lIEhhY2hlYCk7XHJcbiAgICAgICAgICAgIG5hbWVBcm1lID0gYXdhaXQgdGhpcy5yZWFkbGluZVJlYWRlcignUXVlbCBlc3Qgdm90cmUgYXJtZSAtPiBFcGVlIG91IEhhY2hlID8nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lQXJtZSA9PSAnRXBlZScpIHtcclxuICAgICAgICAgICAgYXJtZSA9IG5ldyBFcGVlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJtZSA9IG5ldyBIYWNoZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogbGV0IG5hbWVSb2xlID0gYXdhaXQgdGhpcy5yZWFkbGluZVJlYWRlcignUXVlbCBlc3QgbGUgdm90cmUgY2xhc3NlIC0+IFtBc3Nhc3NpbjsgTWFnZTsgVGFuazsgR3VlcnJpZXJdID8nKTtcclxuICAgICAgICB3aGlsZSAobmFtZVJvbGUgIT0gXCJFcGVlXCIgfHwgbmFtZVJvbGUgIT0gXCJIYWNoZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMZSBub20gZGUgdm90cmUgY2xhc3NlZSBlc3QgaW5jb3JyZWN0LCB2ZXVpbGxleiBjaG9pc2lyIHVuZSBjbGFzc2VgKTtcclxuICAgICAgICAgICAgbmFtZVJvbGUgPSBhd2FpdCB0aGlzLnJlYWRsaW5lUmVhZGVyKCdRdWVsIGVzdCBsZSBub20gZGUgdm90cmUgSGVybyA/Jyk7XHJcbiAgICAgICAgfSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2ZXJpZmllTW9ydCgpIHtcclxuICAgICAgICBsZXQgdGFiR2VudGlsID0gdGhpcy5wYXJ0aWUuZ2V0VGFiR2VudGlscygpO1xyXG4gICAgICAgIGxldCB0YWJNZWNoYW50ID0gdGhpcy5wYXJ0aWUuZ2V0VGFiTWVjaGFudHMoKTtcclxuXHJcbiAgICAgICAgdGFiR2VudGlsLmZvckVhY2gocGVyc28gPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyc28uZ2V0UHYoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpZS5zdXBwckdlbnRpbChwZXJzbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFiTWVjaGFudC5mb3JFYWNoKHBlcnNvID0+IHtcclxuICAgICAgICAgICAgaWYgKHBlcnNvLmdldFB2KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWUuc3VwcHJNZWNoYW50KHBlcnNvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9