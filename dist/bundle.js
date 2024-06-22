(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Ceasar_delay;
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("../utils/Utils"));
class Ceasar {
    //#endregion
    //#region Constructor
    constructor() {
        //#region Properties
        _Ceasar_delay.set(this, 13);
    }
    //#endregion
    //#region Public methods
    cypher(msg) {
        let result = "";
        for (let i = 0; i < msg.length; i++) {
            const actualChar = msg[i];
            const index = Utils_1.default.alphabet.findIndex(letter => letter === actualChar);
            const nextLetterIndex = index + __classPrivateFieldGet(this, _Ceasar_delay, "f");
            const isInAlphabet = Utils_1.default.alphabet.includes(actualChar);
            result += isInAlphabet
                ? Utils_1.default.alphabet[nextLetterIndex >= Utils_1.default.alphabet.length ? nextLetterIndex - Utils_1.default.alphabet.length : nextLetterIndex]
                : actualChar;
        }
        return result;
    }
    decypher(msg) {
        let decypher = "";
        for (let i = 0; i < msg.length; i++) {
            const actualChar = msg[i];
            const index = Utils_1.default.alphabet.findIndex(letter => letter === actualChar);
            const nextLetterIndex = index - __classPrivateFieldGet(this, _Ceasar_delay, "f");
            decypher += Utils_1.default.alphabet[nextLetterIndex < 0 ? (Utils_1.default.alphabet.length - 1) + nextLetterIndex : nextLetterIndex];
        }
        return decypher;
    }
}
_Ceasar_delay = new WeakMap();
exports.default = Ceasar;

},{"../utils/Utils":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Default {
    //#region Constructor
    constructor() {
    }
    //#endregion
    //#region Public methods
    cypher(msg) {
        return msg;
    }
    decypher(msg) {
        return msg;
    }
}
exports.default = Default;

},{}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ceasar_1 = __importDefault(require("./ceasar/ceasar"));
const default_1 = __importDefault(require("./default/default"));
const Utils_1 = __importDefault(require("./utils/Utils"));
//#region Properties & Constants
const cypherSelect = document.getElementById("select-cypher");
const everyCyphers = ["ceasar"];
let selectedCypher = "";
//#endregion
//#region Events
Utils_1.default.labelTxt.addEventListener("input", cypher);
cypherSelect.addEventListener("change", () => {
    selectedCypher = cypherSelect.value;
    cypher();
});
//#endregion
//#region Display
function displayCyphers() {
    let display = "<option value='' selected></option>";
    for (let i = 0; i < everyCyphers.length; i++) {
        const aCypher = everyCyphers[i];
        display += `<option value="${aCypher}">${aCypher}</option>`;
    }
    cypherSelect.innerHTML = display;
}
//#endregion
//#region Cypher
function cypher() {
    let theCypher = new default_1.default();
    if (selectedCypher === "ceasar")
        theCypher = new ceasar_1.default();
    const result = theCypher.cypher(Utils_1.default.labelTxt.value);
    Utils_1.default.displayResult(result);
}
//#endregion
displayCyphers();

},{"./ceasar/ceasar":1,"./default/default":2,"./utils/Utils":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    //#endregion
    //#region Constructor
    constructor() {
        this.labelTxt = document.getElementById("label-txt");
        this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        this.resultElement = document.getElementById("result-cypher");
    }
    //#endregion
    //#region Public methods
    displayResult(result) {
        this.resultElement.innerText = result;
    }
}
exports.default = new Utils();

},{}]},{},[3]);
