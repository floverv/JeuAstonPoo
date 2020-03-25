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
        this.tour = 0;
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
        this.cibleGentil = [];
        this.cibleMechant = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BhcnRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9NZWNoYW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXJtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9vdXRpbC9vdXRpbC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2FybWUvRXBlZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcm1lL0hhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2VudW0vUm9sZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvR2VudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NvbWJhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgUGFydGllIH0gZnJvbSBcIi4vY2xhc3Nlcy9QYXJ0aWVcIjtcclxuaW1wb3J0IHsgT3V0aWwgfSBmcm9tIFwiLi9jbGFzc2VzL291dGlsL291dGlsXCI7XHJcbmltcG9ydCBDb21iYXQgZnJvbSBcIi4vY2xhc3Nlcy9Db21iYXRcIjtcclxuXHJcbmxldCBvdXRpbENyZWF0aW9uID0gbmV3IE91dGlsKCk7XHJcblxyXG5vdXRpbENyZWF0aW9uLmNyZWVyVGFiR2VudGlsKCkudGhlbihsaXN0R2VudGlscyA9PiB7XHJcbiAgICBsZXQgcGFydGllID0gbmV3IFBhcnRpZShsaXN0R2VudGlscyk7XHJcbiAgICBsZXQgY29tYmF0ID0gbmV3IENvbWJhdChwYXJ0aWUpO1xyXG4gICAgY29tYmF0LmNpYmxlcigpO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4vR2VudGlsXCI7XHJcbmltcG9ydCB7IE1lY2hhbnQgfSBmcm9tIFwiLi9NZWNoYW50XCI7XHJcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGllIHtcclxuICAgIHByaXZhdGUgdGFiR2VudGlsczogR2VudGlsW107XHJcbiAgICBwcml2YXRlIHRhYk1lY2hhbnRzOiBNZWNoYW50W107XHJcbiAgICBwcml2YXRlIHRvdXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiR2VudGlsczogR2VudGlsW10pIHtcclxuICAgICAgICB0aGlzLnRhYkdlbnRpbHMgPSB0YWJHZW50aWxzO1xyXG4gICAgICAgIHRoaXMudGFiTWVjaGFudHMgPSB0aGlzLmdlbmVyYXRpb25NZWNoYW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFqb3V0IGQndW4gcGVyc29ubmFnZSBhdSB0YWJsZWF1IGRlcyBnZW50aWxzXHJcbiAgICAgKiBAcGFyYW0gcGVyc29ubmFnZSBcclxuICAgICAqL1xyXG4gICAgYWpvdXRHZW50aWwgPSAocGVyc29ubmFnZTogR2VudGlsKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJHZW50aWxzLnB1c2gocGVyc29ubmFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwcmltZXIgdW4gZ2VudGlsXHJcbiAgICAgKi9cclxuICAgIHN1cHByR2VudGlsID0gKHBlcnNvbm5hZ2U6IEdlbnRpbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYkdlbnRpbHMuc3BsaWNlKHRoaXMudGFiR2VudGlscy5pbmRleE9mKHBlcnNvbm5hZ2UpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1cHByaW1lciB1biBtZWNoYW50XHJcbiAgICAgKi9cclxuICAgIHN1cHByTWVjaGFudCA9IChwZXJzb25uYWdlOiBNZWNoYW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiR2VudGlscy5zcGxpY2UodGhpcy50YWJNZWNoYW50cy5pbmRleE9mKHBlcnNvbm5hZ2UpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRpb24gZGVzIG1lY2hhbnRzIGVuIGZvbmN0aW9uIGR1IG5vbWJyZSBkZSBnZW50aWxzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRpb25NZWNoYW50cyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbGlzdE1lY2hhbnRzOiBNZWNoYW50W10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJHZW50aWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtZWNoYW50OiBNZWNoYW50ID0gbmV3IE1lY2hhbnQoJycsIG5ldyBBcm1lKCkpO1xyXG4gICAgICAgICAgICBtZWNoYW50LnJhbmRvbU5hbWUobWVjaGFudCk7XHJcbiAgICAgICAgICAgIGxpc3RNZWNoYW50cy5wdXNoKG1lY2hhbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3RNZWNoYW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJHZW50aWxzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYkdlbnRpbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFiTWVjaGFudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiTWVjaGFudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG91cigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdXIodG91cjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3VyID0gdG91cjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9QZXJzb25uYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVjaGFudCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG4gICAgcmFuZG9tTmFtZSA9IChwZXJzb25uYWdlOiBQZXJzb25uYWdlKSA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxyXG4gICAgICAgIHBlcnNvbm5hZ2Uuc2V0Tm9tKG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tICcuL0FybWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbm5hZ2Uge1xyXG4gICAgcHJpdmF0ZSBub20gOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHB2IDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwdk1heDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFybWU6IEFybWU7XHJcbiAgICBwcml2YXRlIGNpYmxlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nLCBhcm1lOiBBcm1lKSB7XHJcbiAgICAgICAgdGhpcy5ub20gPSBub207XHJcbiAgICAgICAgdGhpcy5wdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1MCkgKyA1MDtcclxuICAgICAgICB0aGlzLnB2TWF4ID0gdGhpcy5wdjtcclxuICAgICAgICB0aGlzLmRlZmVuc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgICAgIHRoaXMuYXJtZSA9IGFybWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZSBwZXJzb25uYWdlIGF0dGFxdWUgbGEgY2libGVcclxuICAgICAqL1xyXG4gICAgYXR0YXF1ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHB2Q2libGUgPSB0aGlzLmNpYmxlLnB2O1xyXG4gICAgICAgIGxldCBub21DaWJsZSA9IHRoaXMuY2libGUubm9tO1xyXG4gICAgICAgIGxldCBkZWZlbnNlQ2libGUgPSB0aGlzLmNpYmxlLmRlZmVuc2U7XHJcbiAgICAgICAgbGV0IGRlZ2F0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuYXJtZS5nZXREZWdhdE1heCgpIC0gdGhpcy5hcm1lLmdldERlZ2F0TWluKCkpICsgdGhpcy5hcm1lLmdldERlZ2F0TWluKCkpO1xyXG4gICAgICAgIGxldCBDQyA9IHRoaXMuYXJtZS5nZXRUYXV4Q0MoKS8xMDA7XHJcblxyXG4gICAgICAgIC8vVGF1eCBkZSBjaGFuY2UgZGUgY3JpdGlxdWVcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IENDKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDUklUSVFVRSAhYCk7XHJcbiAgICAgICAgICAgIGRlZ2F0ICogQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vUydpbCB5IGEgdW5lIGNpYmxlXHJcbiAgICAgICAgaWYgKHRoaXMuY2libGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSBpbmZsaWdlICR7ZGVnYXR9IGRlIGRlZ2F0c2ApO1xyXG4gICAgICAgICAgICAvL1MnaWwgeSBhIGVuY29yZSBkZSBsJ2FybXVyZVxyXG4gICAgICAgICAgICBpZiAoKGRlZmVuc2VDaWJsZSAtIGRlZ2F0KSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRlZmVuc2VDaWJsZS09IGRlZ2F0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5ub219IGEgYXR0YXF1w6kgJHtub21DaWJsZX0sIGlsIGx1aSByZXN0ZSAke3B2Q2libGV9IHB2IGV0ICR7ZGVmZW5zZUNpYmxlfSBkZSBkZWZlbnNlLmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9TJ2lsIG4nYSBwbHVzIGQnYXJtdXJlXHJcbiAgICAgICAgICAgICAgICBkZWZlbnNlQ2libGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHB2Q2libGUgLSBkZWdhdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHZDaWJsZS09IGRlZ2F0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubm9tfSBhIGF0dGFxdcOpICR7bm9tQ2libGV9LCBpbCBsdWkgcmVzdGUgJHtwdkNpYmxlfSBwdi5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaWJsZS5zZXRQdigwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gYSB0dcOpICR7bm9tQ2libGV9LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGUgcGVyc29ubmFnZSBjaWJsZSB1biBlbm5lbWllXHJcbiAgICAgKi9cclxuICAgIGNpYmxlciA9IChjaWJsZTogUGVyc29ubmFnZSkgPT4geyBcclxuICAgICAgICB0aGlzLmNpYmxlID0gY2libGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5ub219IGEgY2libMOpICR7dGhpcy5jaWJsZS5ub219YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1ldCDDoCB6ZXJvIGxhIGNpYmxlXHJcbiAgICAgKi9cclxuICAgIHJlc2V0Q2libGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaWJsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2libGUoY2libGU6IFBlcnNvbm5hZ2UpIHtcclxuICAgICAgICB0aGlzLmNpYmxlID0gY2libGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE5vbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5ub20gPSBub207XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHY7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHYocHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHYgPSBwdjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQdk1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdk1heDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQdk1heChwdk1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdk1heCA9IHB2TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmVuc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWZlbnNlKGRlZmVuc2U6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcm1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFybWUoYXJtZTogQXJtZSkge1xyXG4gICAgICAgIHRoaXMuYXJtZSA9IGFybWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXJtZSB7XHJcbiAgICBwcml2YXRlIGRlZ2F0TWluOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlZ2F0TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRhdXhDQzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0ZXVyIGRlIGwnw6lww6llXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVnYXRNaW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xyXG4gICAgICAgIHRoaXMuZGVnYXRNYXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMDtcclxuICAgICAgICB0aGlzLnRhdXhDQyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwICsgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZGUgZGVnYU1pblxyXG4gICAgICovXHJcbiAgICBnZXREZWdhdE1pbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWdhdE1pbjsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICogQHBhcmFtIGRlZ2F0TWluXHJcbiAgICAgKi9cclxuICAgIHNldERlZ2F0TWluKGRlZ2F0TWluOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlZ2F0TWluID0gZGVnYXRNaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICovXHJcbiAgICBnZXREZWdhdE1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWdhdE1heDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR0ZXIgZGUgZGVnYU1heFxyXG4gICAgICogQHBhcmFtIGRlZ2F0TWF4IFxyXG4gICAgICovXHJcbiAgICBzZXREZWdhdE1heChkZWdhdE1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZWdhdE1heCA9IGRlZ2F0TWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGRlIHRhdXhDQ1xyXG4gICAgICovXHJcbiAgICBnZXRUYXV4Q0MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGF1eENDO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGRlIHRhdXhDQ1xyXG4gICAgICogQHBhcmFtIHRhdXhDQyBcclxuICAgICAqL1xyXG4gICAgc2V0VGF1eENDKHRhdXhDQzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50YXV4Q0MgPSB0YXV4Q0M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxlcyBzdGF0cyBkZSBsJ2FybWVcclxuICAgICAqL1xyXG4gICAgYWZmaWNoZXJTdGF0cygpIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IGBWb2ljaSBsZXMgc3RhdHMgZGUgY2V0dGUgYXJtZSA6XHJcbiAgICAgICAgPiBEw6lnw6J0cyBtaW5pbXVtcyA6ICR7dGhpcy5kZWdhdE1pbn1cclxuICAgICAgICA+IETDqWfDonRzIG1heGltdW1zIDogJHt0aGlzLmRlZ2F0TWF4fVxyXG4gICAgICAgID4gQ2hhbmNlIGRlIGNvdXAgY3JpdGlxdWVzIDogJHt0aGlzLnRhdXhDQ31gO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCByZWFkbGluZSBmcm9tIFwicmVhZGxpbmVcIjtcclxuaW1wb3J0IEVwZWUgZnJvbSBcIi4uL2FybWUvRXBlZVwiO1xyXG5pbXBvcnQgSGFjaGUgZnJvbSBcIi4uL2FybWUvSGFjaGVcIjtcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tIFwiLi4vZW51bS9Sb2xlc1wiO1xyXG5pbXBvcnQgeyBHZW50aWwgfSBmcm9tIFwiLi4vR2VudGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3V0aWwge1xyXG5cclxuICAgIGlucHV0UmVhZGVyID0gYXN5bmMgKHF1ZXN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgICAgICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgICAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcclxuICAgICAgICAgICAgdGVybWluYWw6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJsLnF1ZXN0aW9uKGAke3F1ZXN0aW9ufWAsIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbnN3ZXIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbihvbmZ1bGwgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IG9uZnVsbDtcclxuICAgICAgICAgICAgcmwuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVlclRhYkdlbnRpbCgpIHtcclxuICAgICAgICBsZXQgdGFiR2VudGlsOiBHZW50aWxbXSA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGNob2l4ID0gYXdhaXQgdGhpcy5pbnB1dFJlYWRlcignVm91bGV6LXZvdXMgY3JlZXIgdW4gcGVyc29ubmFnZSAoby9uKSA/Jyk7XHJcbiAgICAgICAgd2hpbGUgKGNob2l4ICE9IFwiblwiKSB7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW9uIGR1biBub3V2ZWF1IHBlcnNvbm5hZ2UgbnVtZXJvIDogJytpKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVlckdlbnRpbCgpLnRoZW4ocGVyc28gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFiR2VudGlsLnB1c2gocGVyc28pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hvaXggPSBhd2FpdCB0aGlzLmlucHV0UmVhZGVyKCdWb3VsZXotdm91cyBjcmVlciB1biBwZXJzb25uYWdlIChvL24pID8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbiBkZSBsYSBjcmVhdGlvbiBkZXMgcGVyc29ubmFnZXMgIScpO1xyXG4gICAgICAgIHJldHVybiB0YWJHZW50aWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlZXJHZW50aWwoKSB7XHJcbiAgICAgICAgbGV0IGFybWU6IGFueTtcclxuICAgICAgICBsZXQgcm9sZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBub20gPSBhd2FpdCB0aGlzLmlucHV0UmVhZGVyKCdRdWVsIGVzdCBsZSBub20gZGUgdm90cmUgSGVybyA/Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYExlIG5vbSBkZSB2b3RyZSBoZXJvIGVzdDogJHtub219YCk7XHJcblxyXG4gICAgICAgIGxldCBub21Bcm1lID0gYXdhaXQgdGhpcy5pbnB1dFJlYWRlcignUXVlbCBlc3Qgdm90cmUgYXJtZSAtPiBFcGVlIG91IEhhY2hlID8nKTtcclxuICAgICAgICB3aGlsZSAobm9tQXJtZSAhPSBcIkVwZWVcIiAmJiBub21Bcm1lICE9IFwiSGFjaGVcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTGUgbm9tIGRlIHZvdHJlIGFybWUgZXN0IGluY29ycmVjdCwgdmV1aWxsZXogY2hvaXNpciBlbnRyZSB1bmUgRXBlZSBvdSB1bmUgSGFjaGVgKTtcclxuICAgICAgICAgICAgbm9tQXJtZSA9IGF3YWl0IHRoaXMuaW5wdXRSZWFkZXIoJ1F1ZWwgZXN0IHZvdHJlIGFybWUgLT4gRXBlZSBvdSBIYWNoZSA/Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9tQXJtZSA9PSAnRXBlZScpIHtcclxuICAgICAgICAgICAgYXJtZSA9IG5ldyBFcGVlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJtZSA9IG5ldyBIYWNoZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5vbVJvbGUgPSBhd2FpdCB0aGlzLmlucHV0UmVhZGVyKCdRdWVsIGVzdCBsZSB2b3RyZSBjbGFzc2UgLT4gW01hZ2U7IFRhbms7XSA/Jyk7XHJcbiAgICAgICAgd2hpbGUgKG5vbVJvbGUgIT0gXCJUYW5rXCIgJiYgbm9tUm9sZSAhPSBcIk1hZ2VcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTGUgbm9tIGRlIHZvdHJlIGNsYXNzZWUgZXN0IGluY29ycmVjdCwgdmV1aWxsZXogY2hvaXNpciB1bmUgY2xhc3NlYCk7XHJcbiAgICAgICAgICAgIG5vbVJvbGUgPSBhd2FpdCB0aGlzLmlucHV0UmVhZGVyKCdRdWVsIGVzdCBsYSBjbGFzc2UgZGUgdm90cmUgSGVybyA/Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9tUm9sZSA9PSAnTWFnZScpIHtcclxuICAgICAgICAgICAgcm9sZSA9IFJvbGVzLk1hZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChub21Sb2xlID09ICdUYW5rJykge1xyXG4gICAgICAgICAgICByb2xlID0gUm9sZXMuVGFuaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR2VudGlsKG5vbSwgYXJtZSwgcm9sZSk7XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiaW1wb3J0IHsgQXJtZSB9IGZyb20gXCIuLi9Bcm1lXCI7XHJcblxyXG4vL0NldHRlIGNsYXNzZSBhdWdtZW50ZSBsZXMgY2hhbmNlcyBkZSBjb3VwcyBjcml0aXF1ZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBlZSBleHRlbmRzIEFybWUge1xyXG5cclxuICAgIHByaXZhdGUgYm9vc3Q6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0ZXVyIGRlIGwnw6lww6llXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUYXV4Q0ModGhpcy5nZXRUYXV4Q0MoKSArIHRoaXMuYm9vc3QpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXJtZSB9IGZyb20gXCIuLi9Bcm1lXCI7XHJcblxyXG4vL0NldHRlIGNsYXNzZSBhdWdtZW50ZSBsZXMgZMOpZ2F0c1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWNoZSBleHRlbmRzIEFybWUge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGJvb3N0OiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdGV1ciBkZSBsYSBoYWNoZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVnYXRNaW4odGhpcy5nZXREZWdhdE1pbigpICsgdGhpcy5ib29zdCk7XHJcbiAgICAgICAgdGhpcy5zZXREZWdhdE1heCh0aGlzLmdldERlZ2F0TWF4KCkgKyB0aGlzLmJvb3N0KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIFJvbGVzIHtcclxuICAgIEd1ZXJyaWVyLFxyXG4gICAgQXNzYXNzaW4sXHJcbiAgICBNYWdlLFxyXG4gICAgVGFua1xyXG59IiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gXCIuL1BlcnNvbm5hZ2VcIjtcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tIFwiLi9lbnVtL1JvbGVzXCI7XHJcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcbiAgICBwcml2YXRlIHJvbGU6IFJvbGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbSA9ICcnLCBhcm1lOiBBcm1lLCByb2xlOiBSb2xlcykge1xyXG4gICAgICAgIHN1cGVyKG5vbSwgYXJtZSk7XHJcbiAgICAgICAgdGhpcy5yb2xlID0gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICBzb2lnbmVyID0gKHBlcnNvbm5hZ2VTb2lnbmU6IFBlcnNvbm5hZ2UpID0+IHtcclxuICAgICAgICAvL1NpIGxlIGdlbnRpbCBlc3QgdW4gbWFnZVxyXG4gICAgICAgIGlmKCB0aGlzLnJvbGUgPT0gUm9sZXMuTWFnZSkge1xyXG4gICAgICAgICAgICBsZXQgc29pblB2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyA1KTtcclxuICAgICAgICAgICAgbGV0IHB2UGVyc286IG51bWJlciA9IHBlcnNvbm5hZ2VTb2lnbmUuZ2V0UHYoKTtcclxuICAgICAgICAgICAgbGV0IHB2TWF4UGVyc286IG51bWJlciA9IHBlcnNvbm5hZ2VTb2lnbmUuZ2V0UHZNYXgoKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2kgbGVzIHB2IHNvaWduw6llIHNvbnQgc3VwZXJpZXVyIGF1IHB2IE1BWC5cclxuICAgICAgICAgICAgaWYgKChwdlBlcnNvICsgc29pblB2KSA+IHB2TWF4UGVyc28pIHtcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5hZ2VTb2lnbmUuc2V0UHYocHZNYXhQZXJzbyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwZXJzb25uYWdlU29pZ25lLnNldFB2KHB2UGVyc28gKyBzb2luUHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwZXJzb25uYWdlU29pZ25lLmdldE5vbSgpfSB2aWVudCBkJ2V0cmUgc29pZ27DqSBkZSAke3NvaW5Qdn0gUFYuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGFydGllIH0gZnJvbSBcIi4vUGFydGllXCI7XHJcbmltcG9ydCB7IEdlbnRpbCB9IGZyb20gXCIuL0dlbnRpbFwiO1xyXG5pbXBvcnQgeyBNZWNoYW50IH0gZnJvbSBcIi4vTWVjaGFudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmF0IHtcclxuXHJcbiAgICBwcml2YXRlIHBhcnRpZTogUGFydGllO1xyXG4gICAgcHJpdmF0ZSBjaWJsZUdlbnRpbDogTWVjaGFudFtdID0gW107XHJcbiAgICBwcml2YXRlIGNpYmxlTWVjaGFudDogR2VudGlsW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJ0aWU6IFBhcnRpZSkge1xyXG4gICAgICAgIHRoaXMucGFydGllID0gcGFydGllO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmVyaWZpZSBzaSB1bmUgZXF1aXBlIGVzdCBtb3J0ZSByZXRvdXJuZSB0cnVlXHJcbiAgICAgKi9cclxuICAgIHZlcmlmaWVNb3J0KCkge1xyXG4gICAgICAgIGxldCB0YWJHZW50aWwgPSB0aGlzLnBhcnRpZS5nZXRUYWJHZW50aWxzKCk7XHJcbiAgICAgICAgbGV0IHRhYk1lY2hhbnQgPSB0aGlzLnBhcnRpZS5nZXRUYWJNZWNoYW50cygpO1xyXG5cclxuICAgICAgICB0YWJHZW50aWwuZm9yRWFjaChwZXJzbyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJzby5nZXRQdigpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydGllLnN1cHByR2VudGlsKHBlcnNvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YWJNZWNoYW50LmZvckVhY2gocGVyc28gPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyc28uZ2V0UHYoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpZS5zdXBwck1lY2hhbnQocGVyc28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJHZW50aWwubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFiTWVjaGFudC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaWJsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhYk1lY2hhbnRzID0gdGhpcy5wYXJ0aWUuZ2V0VGFiTWVjaGFudHMoKTtcclxuICAgICAgICBsZXQgdGFiR2VudGlscyA9IHRoaXMucGFydGllLmdldFRhYkdlbnRpbHMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBhcnRpZS5nZXRUYWJHZW50aWxzKCkuZm9yRWFjaChwZXJzb0dlbnRpbCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YWJNZWNoYW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgcGVyc29NZWNoYW50ID0gdGFiTWVjaGFudHNbcmFuZG9tXTtcclxuXHJcbiAgICAgICAgICAgIHBlcnNvR2VudGlsLmNpYmxlcihwZXJzb01lY2hhbnQpO1xyXG4gICAgICAgICAgICB0YWJNZWNoYW50cyA9IHRhYk1lY2hhbnRzLmZpbHRlcihtb25zdHJlID0+IG1vbnN0cmUgIT0gcGVyc29NZWNoYW50KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnRpZS5nZXRUYWJNZWNoYW50cygpLmZvckVhY2gocGVyc29NZWNoYW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhYkdlbnRpbHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IHBlcnNvR2VudGlsID0gdGFiR2VudGlsc1tyYW5kb21dO1xyXG5cclxuICAgICAgICAgICAgcGVyc29NZWNoYW50LmNpYmxlcihwZXJzb0dlbnRpbCk7XHJcbiAgICAgICAgICAgIHRhYkdlbnRpbHMgPSB0YWJHZW50aWxzLmZpbHRlcihnZW50aWwgPT4gZ2VudGlsICE9IHBlcnNvR2VudGlsKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=