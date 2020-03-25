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
/* harmony import */ var _classes_Partie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_outil_outil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _classes_Combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);



var outilCreation = new _classes_outil_outil__WEBPACK_IMPORTED_MODULE_1__["Outil"]();
outilCreation.creerTabGentil().then(function (listGentils) {
    var partie = new _classes_Partie__WEBPACK_IMPORTED_MODULE_0__["Partie"](listGentils);
    var combat = new _classes_Combat__WEBPACK_IMPORTED_MODULE_2__["default"](partie);
    combat.cibler();
    while (!combat.verifieMort()) {
        combat.tour();
    }
    var name;
    if (partie.getTabGentils().length == 0) {
        name = "Gentils";
    }
    else {
        name = "Mechants";
    }
    console.log("Les " + name + " ont remport\u00E9 ce combat !");
    console.log('Fin du combat.');
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _Mechant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


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
        this.tour = 0;
    }
    Partie.prototype.getTabGentils = function () {
        return this.tabGentils;
    };
    Partie.prototype.getTabMechants = function () {
        return this.tabMechants;
    };
    Partie.prototype.getTour = function () {
        return this.tour;
    };
    Partie.prototype.setTour = function (tour) {
        this.tour = tour;
    };
    return Partie;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechant", function() { return Mechant; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
            var name = Math.random().toString(36).replace(/[^a-z]+/g, '');
            personnage.setNom(name[0].toUpperCase() + name.substring(1));
        };
        return _this;
    }
    return Mechant;
}(_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ }),
/* 3 */
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
            var pvCible = _this.cible.getPv();
            var nomCible = _this.cible.getNom();
            var defenseCible = _this.cible.getDefense();
            var degat = Math.floor(Math.random() * (_this.arme.getDegatMax() - _this.arme.getDegatMin()) + _this.arme.getDegatMin());
            var CC = _this.arme.getTauxCC() / 100;
            //Taux de chance de critique
            if (Math.random() < CC) {
                console.log("CRITIQUE !");
                degat * CC;
            }
            //S'il y a une cible
            if (_this.cible != null) {
                //S'il y a encore de l'armure
                if (defenseCible > degat) {
                    _this.cible.setDefense(defenseCible - degat);
                    console.log(_this.nom + " a attaqu\u00E9 " + nomCible + " avec " + degat + " de degats, il lui reste " + pvCible + " pv et " + defenseCible + " de defense.");
                }
                else {
                    //S'il n'a plus d'armure
                    _this.cible.setDefense(0);
                    if (pvCible > degat) {
                        _this.cible.setPv(pvCible - degat);
                        console.log(_this.nom + " a attaqu\u00E9 " + nomCible + " avec " + degat + " de degats, il lui reste " + pvCible + " pv.");
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outil", function() { return Outil; });
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arme_Epee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _arme_Hache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _enum_Roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _Gentil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
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





var Outil = /** @class */ (function () {
    function Outil() {
        var _this = this;
        this.inputReader = function (question) { return __awaiter(_this, void 0, void 0, function () {
            var response, rl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rl = readline__WEBPACK_IMPORTED_MODULE_0___default.a.createInterface({
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
    }
    Outil.prototype.creerTabGentil = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabGentil, i, choix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabGentil = [];
                        i = 0;
                        return [4 /*yield*/, this.inputReader('Voulez-vous creer un personnage (o/n) ?')];
                    case 1:
                        choix = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(choix != "n")) return [3 /*break*/, 5];
                        i++;
                        console.log('Creation dun nouveau personnage numero : ' + i);
                        return [4 /*yield*/, this.creerGentil().then(function (perso) {
                                tabGentil.push(perso);
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.inputReader('Voulez-vous creer un personnage (o/n) ?')];
                    case 4:
                        choix = _a.sent();
                        return [3 /*break*/, 2];
                    case 5:
                        console.log('Fin de la creation des personnages !');
                        return [2 /*return*/, tabGentil];
                }
            });
        });
    };
    Outil.prototype.creerGentil = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arme, role, nom, nomArme, nomRole;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.inputReader('Quel est le nom de votre Hero ?')];
                    case 1:
                        nom = _a.sent();
                        console.log("Le nom de votre hero est: " + nom);
                        return [4 /*yield*/, this.inputReader('Quel est votre arme -> Epee ou Hache ?')];
                    case 2:
                        nomArme = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(nomArme != "Epee" && nomArme != "Hache")) return [3 /*break*/, 5];
                        console.log("Le nom de votre arme est incorrect, veuillez choisir entre une Epee ou une Hache");
                        return [4 /*yield*/, this.inputReader('Quel est votre arme -> Epee ou Hache ?')];
                    case 4:
                        nomArme = _a.sent();
                        return [3 /*break*/, 3];
                    case 5:
                        if (nomArme == 'Epee') {
                            arme = new _arme_Epee__WEBPACK_IMPORTED_MODULE_1__["default"]();
                        }
                        else {
                            arme = new _arme_Hache__WEBPACK_IMPORTED_MODULE_2__["default"]();
                        }
                        return [4 /*yield*/, this.inputReader('Quel est le votre classe -> [Mage; Tank;] ?')];
                    case 6:
                        nomRole = _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(nomRole != "Tank" && nomRole != "Mage")) return [3 /*break*/, 9];
                        console.log("Le nom de votre classee est incorrect, veuillez choisir une classe");
                        return [4 /*yield*/, this.inputReader('Quel est la classe de votre Hero ?')];
                    case 8:
                        nomRole = _a.sent();
                        return [3 /*break*/, 7];
                    case 9:
                        if (nomRole == 'Mage') {
                            role = _enum_Roles__WEBPACK_IMPORTED_MODULE_3__["Roles"].Mage;
                        }
                        else if (nomRole == 'Tank') {
                            role = _enum_Roles__WEBPACK_IMPORTED_MODULE_3__["Roles"].Tank;
                        }
                        return [2 /*return*/, new _Gentil__WEBPACK_IMPORTED_MODULE_4__["Gentil"](nom, arme, role)];
                }
            });
        });
    };
    return Outil;
}());



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles[Roles["Guerrier"] = 0] = "Guerrier";
    Roles[Roles["Assassin"] = 1] = "Assassin";
    Roles[Roles["Mage"] = 2] = "Mage";
    Roles[Roles["Tank"] = 3] = "Tank";
})(Roles || (Roles = {}));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gentil", function() { return Gentil; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _enum_Roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Combat = /** @class */ (function () {
    function Combat(partie) {
        var _this = this;
        this.cibler = function () {
            var tabMechants = _this.partie.getTabMechants();
            var tabGentils = _this.partie.getTabGentils();
            _this.partie.getTabGentils().forEach(function (persoGentil) {
                var random = Math.floor(Math.random() * tabMechants.length);
                var persoMechant = tabMechants[random];
                persoGentil.cibler(persoMechant);
                tabMechants = tabMechants.filter(function (monstre) { return monstre != persoMechant; });
            });
            _this.partie.getTabMechants().forEach(function (persoMechant) {
                var random = Math.floor(Math.random() * tabGentils.length);
                var persoGentil = tabGentils[random];
                persoMechant.cibler(persoGentil);
                tabGentils = tabGentils.filter(function (gentil) { return gentil != persoGentil; });
            });
        };
        this.tour = function () {
            console.log('Tour numero : ' + _this.partie.getTour());
            _this.partie.setTour(_this.partie.getTour() + 1);
            if (Math.random() <= 0.5) {
                //Tour des gentils
                _this.partie.getTabGentils().forEach(function (persoGentil) { return persoGentil.attaquer(); });
            }
            else {
                //Tour des mechants
                _this.partie.getTabMechants().forEach(function (persoMechant) { return persoMechant.attaquer(); });
            }
        };
        this.partie = partie;
    }
    /**
     * Verifie si une equipe est morte retourne true
     */
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
        if (tabGentil.length == 0) {
            return true;
        }
        if (tabMechant.length == 0) {
            return true;
        }
        return false;
    };
    return Combat;
}());
/* harmony default export */ __webpack_exports__["default"] = (Combat);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BhcnRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9NZWNoYW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXJtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9vdXRpbC9vdXRpbC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2FybWUvRXBlZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcm1lL0hhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2VudW0vUm9sZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvR2VudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NvbWJhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNJO0FBQ1I7QUFFdEMsSUFBSSxhQUFhLEdBQUcsSUFBSSwwREFBSyxFQUFFLENBQUM7QUFFaEMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBVztJQUMzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNEQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSx1REFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNqQjtJQUNELElBQUksSUFBWSxDQUFDO0lBQ2pCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDcEMsSUFBSSxHQUFHLFNBQVM7S0FDbkI7U0FBTTtRQUNILElBQUksR0FBRyxVQUFVO0tBQ3BCO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFPLElBQUksbUNBQTJCLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDOzs7Ozs7OztBQ3BCRjtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNOO0FBRTlCO0lBS0ksZ0JBQVksVUFBb0I7UUFBaEMsaUJBSUM7UUFFRDs7O1dBR0c7UUFDSCxnQkFBVyxHQUFHLFVBQUMsVUFBa0I7WUFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVEOztXQUVHO1FBQ0gsZ0JBQVcsR0FBRyxVQUFDLFVBQWtCO1lBQzdCLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVEOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxVQUFDLFVBQW1CO1lBQy9CLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUVEOztXQUVHO1FBQ0gsdUJBQWtCLEdBQUc7WUFDakIsSUFBSSxZQUFZLEdBQWMsRUFBRSxDQUFDO1lBQ2pDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxPQUFPLEdBQVksSUFBSSxnREFBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLDBDQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCO1lBRUQsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQXZDRyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFzQ0QsOEJBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV5QztBQUUxQztJQUE2QiwyQkFBVTtJQUF2QztRQUFBLHFFQUtDO1FBSkcsZ0JBQVUsR0FBRyxVQUFDLFVBQXNCO1lBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDN0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7O0lBQ0wsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLENBTDRCLHNEQUFVLEdBS3RDOzs7Ozs7Ozs7QUNMRDtBQUFBO0FBQUE7SUFRSSxvQkFBWSxHQUFXLEVBQUUsSUFBVTtRQUFuQyxpQkFNQztRQVJPLFVBQUssR0FBUSxJQUFJLENBQUM7UUFVMUI7O1dBRUc7UUFDSCxhQUFRLEdBQUc7WUFDUCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pDLElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkMsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMzQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN0SCxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUVuQyw0QkFBNEI7WUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7WUFFRCxvQkFBb0I7WUFDcEIsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDcEIsNkJBQTZCO2dCQUM3QixJQUFJLFlBQVksR0FBRyxLQUFLLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBSSxLQUFJLENBQUMsR0FBRyx3QkFBYyxRQUFRLGNBQVMsS0FBSyxpQ0FBNEIsT0FBTyxlQUFVLFlBQVksaUJBQWMsQ0FBQyxDQUFDO2lCQUN2STtxQkFBTTtvQkFDSCx3QkFBd0I7b0JBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLE9BQU8sR0FBRyxLQUFLLEVBQUU7d0JBQ2pCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBSSxLQUFJLENBQUMsR0FBRyx3QkFBYyxRQUFRLGNBQVMsS0FBSyxpQ0FBNEIsT0FBTyxTQUFNLENBQUMsQ0FBQztxQkFDekc7eUJBQU07d0JBQ0gsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLEdBQUcsb0JBQVUsUUFBUSxNQUFHLENBQUMsQ0FBQztxQkFDakQ7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNILFdBQU0sR0FBRyxVQUFDLEtBQWlCO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLEdBQUcsc0JBQVksS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxlQUFVLEdBQUc7WUFDVCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDO1FBeERHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFxREQsNkJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCwyQkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sR0FBVztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwwQkFBSyxHQUFMLFVBQU0sRUFBVTtRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLE9BQWU7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDckhEO0FBQUE7QUFBQTtJQUtJOztPQUVHO0lBQ0g7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwwQkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQkFBVyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNILHdCQUFTLEdBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdCQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILDRCQUFhLEdBQWI7UUFDSSxJQUFJLFFBQVEsR0FBVyw0RUFDRCxJQUFJLENBQUMsUUFBUSxnREFDYixJQUFJLENBQUMsUUFBUSwrQ0FDSixJQUFJLENBQUMsTUFBUSxDQUFDO1FBQzdDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFJTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RStCO0FBQ0E7QUFDRTtBQUNJO0FBQ0g7QUFFbkM7SUFBQTtRQUFBLGlCQXNFQztRQXBFRyxnQkFBVyxHQUFHLFVBQU8sUUFBZ0I7Ozs7O3dCQUUzQixFQUFFLEdBQUcsK0NBQVEsQ0FBQyxlQUFlLENBQUM7NEJBQ2hDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixRQUFRLEVBQUUsS0FBSzt5QkFDbEIsQ0FBQzt3QkFDRixxQkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dDQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUcsUUFBVSxFQUFFLFVBQUMsTUFBYztvQ0FDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDbkIsQ0FBQyxDQUFDOzRCQUNOLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBTTtnQ0FDVixRQUFRLEdBQUcsTUFBTSxDQUFDO2dDQUNsQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2YsQ0FBQyxDQUFDOzt3QkFQRixTQU9FO3dCQUNGLHNCQUFPLFFBQVEsRUFBQzs7O2FBQ25CO0lBb0RMLENBQUM7SUFsRFMsOEJBQWMsR0FBcEI7Ozs7Ozt3QkFDUSxTQUFTLEdBQWEsRUFBRSxDQUFDO3dCQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUVFLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMseUNBQXlDLENBQUM7O3dCQUF6RSxLQUFLLEdBQUcsU0FBaUU7Ozs2QkFDdEUsTUFBSyxJQUFJLEdBQUc7d0JBQ2YsQ0FBQyxFQUFFLENBQUM7d0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0QscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFLO2dDQUMvQixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMxQixDQUFDLENBQUM7O3dCQUZGLFNBRUUsQ0FBQzt3QkFDSyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLHlDQUF5QyxDQUFDOzt3QkFBekUsS0FBSyxHQUFHLFNBQWlFLENBQUM7Ozt3QkFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3dCQUNwRCxzQkFBTyxTQUFTLEVBQUM7Ozs7S0FDcEI7SUFFSywyQkFBVyxHQUFqQjs7Ozs7NEJBSWMscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQzs7d0JBQS9ELEdBQUcsR0FBRyxTQUF5RDt3QkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBNkIsR0FBSyxDQUFDLENBQUM7d0JBRWxDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsd0NBQXdDLENBQUM7O3dCQUExRSxPQUFPLEdBQUcsU0FBZ0U7Ozs2QkFDdkUsUUFBTyxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksT0FBTzt3QkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO3dCQUN0RixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLHdDQUF3QyxDQUFDOzt3QkFBMUUsT0FBTyxHQUFHLFNBQWdFLENBQUM7Ozt3QkFHL0UsSUFBSSxPQUFPLElBQUksTUFBTSxFQUFFOzRCQUNuQixJQUFJLEdBQUcsSUFBSSxrREFBSSxFQUFFLENBQUM7eUJBQ3JCOzZCQUFNOzRCQUNILElBQUksR0FBRyxJQUFJLG1EQUFLLEVBQUUsQ0FBQzt5QkFDdEI7d0JBRWEscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyw2Q0FBNkMsQ0FBQzs7d0JBQS9FLE9BQU8sR0FBRyxTQUFxRTs7OzZCQUM1RSxRQUFPLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxNQUFNO3dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7d0JBQ3hFLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsb0NBQW9DLENBQUM7O3dCQUF0RSxPQUFPLEdBQUcsU0FBNEQsQ0FBQzs7O3dCQUczRSxJQUFJLE9BQU8sSUFBSSxNQUFNLEVBQUU7NEJBQ25CLElBQUksR0FBRyxpREFBSyxDQUFDLElBQUksQ0FBQzt5QkFDckI7NkJBQU0sSUFBSSxPQUFPLElBQUksTUFBTSxFQUFFOzRCQUMxQixJQUFJLEdBQUcsaURBQUssQ0FBQyxJQUFJLENBQUM7eUJBQ3JCO3dCQUVELHNCQUFPLElBQUksOENBQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFDOzs7O0tBQ3RDO0lBQ0wsWUFBQztBQUFELENBQUM7Ozs7Ozs7O0FDNUVELHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBRS9CLHNEQUFzRDtBQUN0RDtJQUFrQyx3QkFBSTtJQUlsQzs7T0FFRztJQUNIO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBUk8sV0FBSyxHQUFXLEVBQUUsQ0FBQztRQU92QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQ2xELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxDQVhpQywwQ0FBSSxHQVdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDhCO0FBRS9CLGtDQUFrQztBQUNsQztJQUFtQyx5QkFBSTtJQUluQzs7T0FFRztJQUNIO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBVE8sV0FBSyxHQUFXLEVBQUUsQ0FBQztRQU92QixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUN0RCxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQ0Faa0MsMENBQUksR0FZdEM7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQSxJQUFZLEtBS1g7QUFMRCxXQUFZLEtBQUs7SUFDYix5Q0FBUTtJQUNSLHlDQUFRO0lBQ1IsaUNBQUk7SUFDSixpQ0FBSTtBQUNSLENBQUMsRUFMVyxLQUFLLEtBQUwsS0FBSyxRQUtoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QztBQUNMO0FBR3JDO0lBQTRCLDBCQUFVO0lBR2xDLGdCQUFZLEdBQVEsRUFBRSxJQUFVLEVBQUUsSUFBVztRQUFqQyw4QkFBUTtRQUFwQixZQUNJLGtCQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FFbkI7UUFFRCxhQUFPLEdBQUcsVUFBQyxnQkFBNEI7WUFDbkMsMEJBQTBCO1lBQzFCLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxpREFBSyxDQUFDLElBQUksRUFBRTtnQkFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLE9BQU8sR0FBVyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxVQUFVLEdBQVcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRXJELDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxVQUFVLEVBQUU7b0JBQ2pDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0gsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUscUNBQTJCLE1BQU0sU0FBTSxDQUFDLENBQUM7YUFDcEY7UUFDTCxDQUFDO1FBbkJHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNyQixDQUFDO0lBbUJMLGFBQUM7QUFBRCxDQUFDLENBekIyQixzREFBVSxHQXlCckM7Ozs7Ozs7OztBQzNCRDtBQUFBO0lBSUksZ0JBQVksTUFBYztRQUExQixpQkFFQztRQWdDRCxXQUFNLEdBQUc7WUFDTCxJQUFJLFdBQVcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9DLElBQUksVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMscUJBQVc7Z0JBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV2QyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxpQkFBTyxJQUFJLGNBQU8sSUFBSSxZQUFZLEVBQXZCLENBQXVCLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxzQkFBWTtnQkFDN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXJDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFNLElBQUksYUFBTSxJQUFJLFdBQVcsRUFBckIsQ0FBcUIsQ0FBQztZQUNuRSxDQUFDLENBQUM7UUFDTixDQUFDO1FBRUQsU0FBSSxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3RCLGtCQUFrQjtnQkFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMscUJBQVcsSUFBSSxrQkFBVyxDQUFDLFFBQVEsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7YUFDOUU7aUJBQU07Z0JBQ0gsbUJBQW1CO2dCQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxzQkFBWSxJQUFJLG1CQUFZLENBQUMsUUFBUSxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQzthQUVqRjtRQUNMLENBQUM7UUFsRUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQVcsR0FBWDtRQUFBLGlCQXlCQztRQXhCRyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFLO1lBQ25CLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNwQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBb0NMLGFBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IFBhcnRpZSB9IGZyb20gXCIuL2NsYXNzZXMvUGFydGllXCI7XHJcbmltcG9ydCB7IE91dGlsIH0gZnJvbSBcIi4vY2xhc3Nlcy9vdXRpbC9vdXRpbFwiO1xyXG5pbXBvcnQgQ29tYmF0IGZyb20gXCIuL2NsYXNzZXMvQ29tYmF0XCI7XHJcblxyXG5sZXQgb3V0aWxDcmVhdGlvbiA9IG5ldyBPdXRpbCgpO1xyXG5cclxub3V0aWxDcmVhdGlvbi5jcmVlclRhYkdlbnRpbCgpLnRoZW4obGlzdEdlbnRpbHMgPT4ge1xyXG4gICAgbGV0IHBhcnRpZSA9IG5ldyBQYXJ0aWUobGlzdEdlbnRpbHMpO1xyXG4gICAgbGV0IGNvbWJhdCA9IG5ldyBDb21iYXQocGFydGllKTtcclxuICAgIGNvbWJhdC5jaWJsZXIoKTtcclxuICAgIHdoaWxlICghY29tYmF0LnZlcmlmaWVNb3J0KCkpIHtcclxuICAgICAgICBjb21iYXQudG91cigpO1xyXG4gICAgfVxyXG4gICAgbGV0IG5hbWU6IHN0cmluZztcclxuICAgIGlmIChwYXJ0aWUuZ2V0VGFiR2VudGlscygpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgbmFtZSA9IFwiR2VudGlsc1wiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hbWUgPSBcIk1lY2hhbnRzXCJcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGBMZXMgJHtuYW1lfSBvbnQgcmVtcG9ydMOpIGNlIGNvbWJhdCAhYCk7XHJcbiAgICBjb25zb2xlLmxvZygnRmluIGR1IGNvbWJhdC4nKTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IEdlbnRpbCB9IGZyb20gXCIuL0dlbnRpbFwiO1xyXG5pbXBvcnQgeyBNZWNoYW50IH0gZnJvbSBcIi4vTWVjaGFudFwiO1xyXG5pbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4vQXJtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpZSB7XHJcbiAgICBwcml2YXRlIHRhYkdlbnRpbHM6IEdlbnRpbFtdO1xyXG4gICAgcHJpdmF0ZSB0YWJNZWNoYW50czogTWVjaGFudFtdO1xyXG4gICAgcHJpdmF0ZSB0b3VyOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiR2VudGlsczogR2VudGlsW10pIHtcclxuICAgICAgICB0aGlzLnRhYkdlbnRpbHMgPSB0YWJHZW50aWxzO1xyXG4gICAgICAgIHRoaXMudGFiTWVjaGFudHMgPSB0aGlzLmdlbmVyYXRpb25NZWNoYW50cygpO1xyXG4gICAgICAgIHRoaXMudG91ciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWpvdXQgZCd1biBwZXJzb25uYWdlIGF1IHRhYmxlYXUgZGVzIGdlbnRpbHNcclxuICAgICAqIEBwYXJhbSBwZXJzb25uYWdlIFxyXG4gICAgICovXHJcbiAgICBham91dEdlbnRpbCA9IChwZXJzb25uYWdlOiBHZW50aWwpID0+IHtcclxuICAgICAgICB0aGlzLnRhYkdlbnRpbHMucHVzaChwZXJzb25uYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1cHByaW1lciB1biBnZW50aWxcclxuICAgICAqL1xyXG4gICAgc3VwcHJHZW50aWwgPSAocGVyc29ubmFnZTogR2VudGlsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiR2VudGlscy5zcGxpY2UodGhpcy50YWJHZW50aWxzLmluZGV4T2YocGVyc29ubmFnZSksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VwcHJpbWVyIHVuIG1lY2hhbnRcclxuICAgICAqL1xyXG4gICAgc3VwcHJNZWNoYW50ID0gKHBlcnNvbm5hZ2U6IE1lY2hhbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJHZW50aWxzLnNwbGljZSh0aGlzLnRhYk1lY2hhbnRzLmluZGV4T2YocGVyc29ubmFnZSksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGlvbiBkZXMgbWVjaGFudHMgZW4gZm9uY3Rpb24gZHUgbm9tYnJlIGRlIGdlbnRpbHNcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGlvbk1lY2hhbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBsaXN0TWVjaGFudHM6IE1lY2hhbnRbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkdlbnRpbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1lY2hhbnQ6IE1lY2hhbnQgPSBuZXcgTWVjaGFudCgnJywgbmV3IEFybWUoKSk7XHJcbiAgICAgICAgICAgIG1lY2hhbnQucmFuZG9tTmFtZShtZWNoYW50KTtcclxuICAgICAgICAgICAgbGlzdE1lY2hhbnRzLnB1c2gobWVjaGFudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdE1lY2hhbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYkdlbnRpbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiR2VudGlscztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJNZWNoYW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJNZWNoYW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG91cih0b3VyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvdXIgPSB0b3VyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gXCIuL1BlcnNvbm5hZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWNoYW50IGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcbiAgICByYW5kb21OYW1lID0gKHBlcnNvbm5hZ2U6IFBlcnNvbm5hZ2UpID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpXHJcbiAgICAgICAgcGVyc29ubmFnZS5zZXROb20obmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXJtZSB9IGZyb20gJy4vQXJtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyc29ubmFnZSB7XHJcbiAgICBwcml2YXRlIG5vbSA6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHYgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHB2TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlZmVuc2U6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJtZTogQXJtZTtcclxuICAgIHByaXZhdGUgY2libGU6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIGFybWU6IEFybWUpIHtcclxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuICAgICAgICB0aGlzLnB2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUwKSArIDUwO1xyXG4gICAgICAgIHRoaXMucHZNYXggPSB0aGlzLnB2O1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICAgICAgdGhpcy5hcm1lID0gYXJtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlIHBlcnNvbm5hZ2UgYXR0YXF1ZSBsYSBjaWJsZVxyXG4gICAgICovXHJcbiAgICBhdHRhcXVlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcHZDaWJsZSA9IHRoaXMuY2libGUuZ2V0UHYoKTtcclxuICAgICAgICBsZXQgbm9tQ2libGUgPSB0aGlzLmNpYmxlLmdldE5vbSgpO1xyXG4gICAgICAgIGxldCBkZWZlbnNlQ2libGUgPSB0aGlzLmNpYmxlLmdldERlZmVuc2UoKTtcclxuICAgICAgICBsZXQgZGVnYXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5hcm1lLmdldERlZ2F0TWF4KCkgLSB0aGlzLmFybWUuZ2V0RGVnYXRNaW4oKSkgKyB0aGlzLmFybWUuZ2V0RGVnYXRNaW4oKSk7XHJcbiAgICAgICAgbGV0IENDID0gdGhpcy5hcm1lLmdldFRhdXhDQygpLzEwMDtcclxuXHJcbiAgICAgICAgLy9UYXV4IGRlIGNoYW5jZSBkZSBjcml0aXF1ZVxyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgQ0MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENSSVRJUVVFICFgKTtcclxuICAgICAgICAgICAgZGVnYXQgKiBDQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9TJ2lsIHkgYSB1bmUgY2libGVcclxuICAgICAgICBpZiAodGhpcy5jaWJsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vUydpbCB5IGEgZW5jb3JlIGRlIGwnYXJtdXJlXHJcbiAgICAgICAgICAgIGlmIChkZWZlbnNlQ2libGUgPiBkZWdhdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaWJsZS5zZXREZWZlbnNlKGRlZmVuc2VDaWJsZSAtIGRlZ2F0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubm9tfSBhIGF0dGFxdcOpICR7bm9tQ2libGV9IGF2ZWMgJHtkZWdhdH0gZGUgZGVnYXRzLCBpbCBsdWkgcmVzdGUgJHtwdkNpYmxlfSBwdiBldCAke2RlZmVuc2VDaWJsZX0gZGUgZGVmZW5zZS5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vUydpbCBuJ2EgcGx1cyBkJ2FybXVyZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaWJsZS5zZXREZWZlbnNlKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHB2Q2libGUgPiBkZWdhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2libGUuc2V0UHYocHZDaWJsZSAtIGRlZ2F0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSBhdHRhcXXDqSAke25vbUNpYmxlfSBhdmVjICR7ZGVnYXR9IGRlIGRlZ2F0cywgaWwgbHVpIHJlc3RlICR7cHZDaWJsZX0gcHYuYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2libGUuc2V0UHYoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5ub219IGEgdHXDqSAke25vbUNpYmxlfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlIHBlcnNvbm5hZ2UgY2libGUgdW4gZW5uZW1pZVxyXG4gICAgICovXHJcbiAgICBjaWJsZXIgPSAoY2libGU6IFBlcnNvbm5hZ2UpID0+IHsgXHJcbiAgICAgICAgdGhpcy5jaWJsZSA9IGNpYmxlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubm9tfSBhIGNpYmzDqSAke3RoaXMuY2libGUubm9tfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtZXQgw6AgemVybyBsYSBjaWJsZVxyXG4gICAgICovXHJcbiAgICByZXNldENpYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2libGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENpYmxlKGNpYmxlOiBQZXJzb25uYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jaWJsZSA9IGNpYmxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXROb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9tO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5vbShub206IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubm9tID0gbm9tO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFB2KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB2O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFB2KHB2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnB2ID0gcHY7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHZNYXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHZNYXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHZNYXgocHZNYXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHZNYXggPSBwdk1heDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZlbnNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlZmVuc2UgPSBkZWZlbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFybWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBcm1lKGFybWU6IEFybWUpIHtcclxuICAgICAgICB0aGlzLmFybWUgPSBhcm1lO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFybWUge1xyXG4gICAgcHJpdmF0ZSBkZWdhdE1pbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWdhdE1heDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0YXV4Q0M6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdGV1ciBkZSBsJ8OpcMOpZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlZ2F0TWluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcclxuICAgICAgICB0aGlzLmRlZ2F0TWF4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTA7XHJcbiAgICAgICAgdGhpcy50YXV4Q0MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCArIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIGRlZ2FNaW5cclxuICAgICAqL1xyXG4gICAgZ2V0RGVnYXRNaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVnYXRNaW47ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIGRlZ2FNYXhcclxuICAgICAqIEBwYXJhbSBkZWdhdE1pblxyXG4gICAgICovXHJcbiAgICBzZXREZWdhdE1pbihkZWdhdE1pbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWdhdE1pbiA9IGRlZ2F0TWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIGRlZ2FNYXhcclxuICAgICAqL1xyXG4gICAgZ2V0RGVnYXRNYXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVnYXRNYXg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIGRlZ2FNYXhcclxuICAgICAqIEBwYXJhbSBkZWdhdE1heCBcclxuICAgICAqL1xyXG4gICAgc2V0RGVnYXRNYXgoZGVnYXRNYXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVnYXRNYXggPSBkZWdhdE1heDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBkZSB0YXV4Q0NcclxuICAgICAqL1xyXG4gICAgZ2V0VGF1eENDKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhdXhDQztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciBkZSB0YXV4Q0NcclxuICAgICAqIEBwYXJhbSB0YXV4Q0MgXHJcbiAgICAgKi9cclxuICAgIHNldFRhdXhDQyh0YXV4Q0M6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGF1eENDID0gdGF1eENDO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSBsZXMgc3RhdHMgZGUgbCdhcm1lXHJcbiAgICAgKi9cclxuICAgIGFmZmljaGVyU3RhdHMoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBgVm9pY2kgbGVzIHN0YXRzIGRlIGNldHRlIGFybWUgOlxyXG4gICAgICAgID4gRMOpZ8OidHMgbWluaW11bXMgOiAke3RoaXMuZGVnYXRNaW59XHJcbiAgICAgICAgPiBEw6lnw6J0cyBtYXhpbXVtcyA6ICR7dGhpcy5kZWdhdE1heH1cclxuICAgICAgICA+IENoYW5jZSBkZSBjb3VwIGNyaXRpcXVlcyA6ICR7dGhpcy50YXV4Q0N9YDtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgcmVhZGxpbmUgZnJvbSBcInJlYWRsaW5lXCI7XHJcbmltcG9ydCBFcGVlIGZyb20gXCIuLi9hcm1lL0VwZWVcIjtcclxuaW1wb3J0IEhhY2hlIGZyb20gXCIuLi9hcm1lL0hhY2hlXCI7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSBcIi4uL2VudW0vUm9sZXNcIjtcclxuaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4uL0dlbnRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE91dGlsIHtcclxuXHJcbiAgICBpbnB1dFJlYWRlciA9IGFzeW5jIChxdWVzdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICAgICAgICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXQsXHJcbiAgICAgICAgICAgIHRlcm1pbmFsOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBybC5xdWVzdGlvbihgJHtxdWVzdGlvbn1gLCAoYW5zd2VyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYW5zd2VyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLnRoZW4ob25mdWxsID0+IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBvbmZ1bGw7XHJcbiAgICAgICAgICAgIHJsLmNsb3NlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlZXJUYWJHZW50aWwoKSB7XHJcbiAgICAgICAgbGV0IHRhYkdlbnRpbDogR2VudGlsW10gPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIGxldCBjaG9peCA9IGF3YWl0IHRoaXMuaW5wdXRSZWFkZXIoJ1ZvdWxlei12b3VzIGNyZWVyIHVuIHBlcnNvbm5hZ2UgKG8vbikgPycpO1xyXG4gICAgICAgIHdoaWxlIChjaG9peCAhPSBcIm5cIikge1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGlvbiBkdW4gbm91dmVhdSBwZXJzb25uYWdlIG51bWVybyA6ICcraSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlZXJHZW50aWwoKS50aGVuKHBlcnNvID0+IHtcclxuICAgICAgICAgICAgICAgIHRhYkdlbnRpbC5wdXNoKHBlcnNvKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNob2l4ID0gYXdhaXQgdGhpcy5pbnB1dFJlYWRlcignVm91bGV6LXZvdXMgY3JlZXIgdW4gcGVyc29ubmFnZSAoby9uKSA/Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGaW4gZGUgbGEgY3JlYXRpb24gZGVzIHBlcnNvbm5hZ2VzICEnKTtcclxuICAgICAgICByZXR1cm4gdGFiR2VudGlsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWVyR2VudGlsKCkge1xyXG4gICAgICAgIGxldCBhcm1lOiBhbnk7XHJcbiAgICAgICAgbGV0IHJvbGU6IGFueTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbm9tID0gYXdhaXQgdGhpcy5pbnB1dFJlYWRlcignUXVlbCBlc3QgbGUgbm9tIGRlIHZvdHJlIEhlcm8gPycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBMZSBub20gZGUgdm90cmUgaGVybyBlc3Q6ICR7bm9tfWApO1xyXG5cclxuICAgICAgICBsZXQgbm9tQXJtZSA9IGF3YWl0IHRoaXMuaW5wdXRSZWFkZXIoJ1F1ZWwgZXN0IHZvdHJlIGFybWUgLT4gRXBlZSBvdSBIYWNoZSA/Jyk7XHJcbiAgICAgICAgd2hpbGUgKG5vbUFybWUgIT0gXCJFcGVlXCIgJiYgbm9tQXJtZSAhPSBcIkhhY2hlXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExlIG5vbSBkZSB2b3RyZSBhcm1lIGVzdCBpbmNvcnJlY3QsIHZldWlsbGV6IGNob2lzaXIgZW50cmUgdW5lIEVwZWUgb3UgdW5lIEhhY2hlYCk7XHJcbiAgICAgICAgICAgIG5vbUFybWUgPSBhd2FpdCB0aGlzLmlucHV0UmVhZGVyKCdRdWVsIGVzdCB2b3RyZSBhcm1lIC0+IEVwZWUgb3UgSGFjaGUgPycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vbUFybWUgPT0gJ0VwZWUnKSB7XHJcbiAgICAgICAgICAgIGFybWUgPSBuZXcgRXBlZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFybWUgPSBuZXcgSGFjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub21Sb2xlID0gYXdhaXQgdGhpcy5pbnB1dFJlYWRlcignUXVlbCBlc3QgbGUgdm90cmUgY2xhc3NlIC0+IFtNYWdlOyBUYW5rO10gPycpO1xyXG4gICAgICAgIHdoaWxlIChub21Sb2xlICE9IFwiVGFua1wiICYmIG5vbVJvbGUgIT0gXCJNYWdlXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExlIG5vbSBkZSB2b3RyZSBjbGFzc2VlIGVzdCBpbmNvcnJlY3QsIHZldWlsbGV6IGNob2lzaXIgdW5lIGNsYXNzZWApO1xyXG4gICAgICAgICAgICBub21Sb2xlID0gYXdhaXQgdGhpcy5pbnB1dFJlYWRlcignUXVlbCBlc3QgbGEgY2xhc3NlIGRlIHZvdHJlIEhlcm8gPycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vbVJvbGUgPT0gJ01hZ2UnKSB7XHJcbiAgICAgICAgICAgIHJvbGUgPSBSb2xlcy5NYWdlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobm9tUm9sZSA9PSAnVGFuaycpIHtcclxuICAgICAgICAgICAgcm9sZSA9IFJvbGVzLlRhbms7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdlbnRpbChub20sIGFybWUsIHJvbGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi4vQXJtZVwiO1xyXG5cclxuLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGNoYW5jZXMgZGUgY291cHMgY3JpdGlxdWVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwZWUgZXh0ZW5kcyBBcm1lIHtcclxuXHJcbiAgICBwcml2YXRlIGJvb3N0OiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdGV1ciBkZSBsJ8OpcMOpZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0VGF1eENDKHRoaXMuZ2V0VGF1eENDKCkgKyB0aGlzLmJvb3N0KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi4vQXJtZVwiO1xyXG5cclxuLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGTDqWdhdHNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFjaGUgZXh0ZW5kcyBBcm1lIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBib29zdDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RldXIgZGUgbGEgaGFjaGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldERlZ2F0TWluKHRoaXMuZ2V0RGVnYXRNaW4oKSArIHRoaXMuYm9vc3QpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVnYXRNYXgodGhpcy5nZXREZWdhdE1heCgpICsgdGhpcy5ib29zdCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBSb2xlcyB7XHJcbiAgICBHdWVycmllcixcclxuICAgIEFzc2Fzc2luLFxyXG4gICAgTWFnZSxcclxuICAgIFRhbmtcclxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9QZXJzb25uYWdlXCI7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSBcIi4vZW51bS9Sb2xlc1wiO1xyXG5pbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4vQXJtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlbnRpbCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG4gICAgcHJpdmF0ZSByb2xlOiBSb2xlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub20gPSAnJywgYXJtZTogQXJtZSwgcm9sZTogUm9sZXMpIHtcclxuICAgICAgICBzdXBlcihub20sIGFybWUpO1xyXG4gICAgICAgIHRoaXMucm9sZSA9IHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc29pZ25lciA9IChwZXJzb25uYWdlU29pZ25lOiBQZXJzb25uYWdlKSA9PiB7XHJcbiAgICAgICAgLy9TaSBsZSBnZW50aWwgZXN0IHVuIG1hZ2VcclxuICAgICAgICBpZiggdGhpcy5yb2xlID09IFJvbGVzLk1hZ2UpIHtcclxuICAgICAgICAgICAgbGV0IHNvaW5QdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwICsgNSk7XHJcbiAgICAgICAgICAgIGxldCBwdlBlcnNvOiBudW1iZXIgPSBwZXJzb25uYWdlU29pZ25lLmdldFB2KCk7XHJcbiAgICAgICAgICAgIGxldCBwdk1heFBlcnNvOiBudW1iZXIgPSBwZXJzb25uYWdlU29pZ25lLmdldFB2TWF4KCk7XHJcblxyXG4gICAgICAgICAgICAvL1NpIGxlcyBwdiBzb2lnbsOpZSBzb250IHN1cGVyaWV1ciBhdSBwdiBNQVguXHJcbiAgICAgICAgICAgIGlmICgocHZQZXJzbyArIHNvaW5QdikgPiBwdk1heFBlcnNvKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJzb25uYWdlU29pZ25lLnNldFB2KHB2TWF4UGVyc28pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGVyc29ubmFnZVNvaWduZS5zZXRQdihwdlBlcnNvICsgc29pblB2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGVyc29ubmFnZVNvaWduZS5nZXROb20oKX0gdmllbnQgZCdldHJlIHNvaWduw6kgZGUgJHtzb2luUHZ9IFBWLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFBhcnRpZSB9IGZyb20gXCIuL1BhcnRpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmF0IHtcclxuXHJcbiAgICBwcml2YXRlIHBhcnRpZTogUGFydGllO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcnRpZTogUGFydGllKSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWUgPSBwYXJ0aWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZmllIHNpIHVuZSBlcXVpcGUgZXN0IG1vcnRlIHJldG91cm5lIHRydWVcclxuICAgICAqL1xyXG4gICAgdmVyaWZpZU1vcnQoKSB7XHJcbiAgICAgICAgbGV0IHRhYkdlbnRpbCA9IHRoaXMucGFydGllLmdldFRhYkdlbnRpbHMoKTtcclxuICAgICAgICBsZXQgdGFiTWVjaGFudCA9IHRoaXMucGFydGllLmdldFRhYk1lY2hhbnRzKCk7XHJcblxyXG4gICAgICAgIHRhYkdlbnRpbC5mb3JFYWNoKHBlcnNvID0+IHtcclxuICAgICAgICAgICAgaWYgKHBlcnNvLmdldFB2KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWUuc3VwcHJHZW50aWwocGVyc28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRhYk1lY2hhbnQuZm9yRWFjaChwZXJzbyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJzby5nZXRQdigpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydGllLnN1cHByTWVjaGFudChwZXJzbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRhYkdlbnRpbC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YWJNZWNoYW50Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNpYmxlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGFiTWVjaGFudHMgPSB0aGlzLnBhcnRpZS5nZXRUYWJNZWNoYW50cygpO1xyXG4gICAgICAgIGxldCB0YWJHZW50aWxzID0gdGhpcy5wYXJ0aWUuZ2V0VGFiR2VudGlscygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFydGllLmdldFRhYkdlbnRpbHMoKS5mb3JFYWNoKHBlcnNvR2VudGlsID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhYk1lY2hhbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBwZXJzb01lY2hhbnQgPSB0YWJNZWNoYW50c1tyYW5kb21dO1xyXG5cclxuICAgICAgICAgICAgcGVyc29HZW50aWwuY2libGVyKHBlcnNvTWVjaGFudCk7XHJcbiAgICAgICAgICAgIHRhYk1lY2hhbnRzID0gdGFiTWVjaGFudHMuZmlsdGVyKG1vbnN0cmUgPT4gbW9uc3RyZSAhPSBwZXJzb01lY2hhbnQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFydGllLmdldFRhYk1lY2hhbnRzKCkuZm9yRWFjaChwZXJzb01lY2hhbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFiR2VudGlscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgcGVyc29HZW50aWwgPSB0YWJHZW50aWxzW3JhbmRvbV07XHJcblxyXG4gICAgICAgICAgICBwZXJzb01lY2hhbnQuY2libGVyKHBlcnNvR2VudGlsKTtcclxuICAgICAgICAgICAgdGFiR2VudGlscyA9IHRhYkdlbnRpbHMuZmlsdGVyKGdlbnRpbCA9PiBnZW50aWwgIT0gcGVyc29HZW50aWwpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b3VyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb3VyIG51bWVybyA6ICcrdGhpcy5wYXJ0aWUuZ2V0VG91cigpKTtcclxuICAgICAgICB0aGlzLnBhcnRpZS5zZXRUb3VyKHRoaXMucGFydGllLmdldFRvdXIoKSArIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IDAuNSkge1xyXG4gICAgICAgICAgICAvL1RvdXIgZGVzIGdlbnRpbHNcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWUuZ2V0VGFiR2VudGlscygpLmZvckVhY2gocGVyc29HZW50aWwgPT4gcGVyc29HZW50aWwuYXR0YXF1ZXIoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9Ub3VyIGRlcyBtZWNoYW50c1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpZS5nZXRUYWJNZWNoYW50cygpLmZvckVhY2gocGVyc29NZWNoYW50ID0+IHBlcnNvTWVjaGFudC5hdHRhcXVlcigpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9