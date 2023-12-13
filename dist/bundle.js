(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cypherCeasar = void 0;
const Utils_1 = __importDefault(require("../utils/Utils"));
const delay = 3;
function cypherCeasar() {
    const txt = Utils_1.default.labelTxt.value;
    let result = "";
    for (let i = 0; i < txt.length; i++) {
        const actualLetter = txt[i];
        const index = Utils_1.default.alphabet.findIndex(letter => letter === actualLetter);
        const nextLetterIndex = index + delay;
        result += Utils_1.default.alphabet[nextLetterIndex >= Utils_1.default.alphabet.length ? nextLetterIndex - (Utils_1.default.alphabet.length - 1) : nextLetterIndex];
    }
    Utils_1.default.displayResult(result);
    let decypher = "";
    for (let i = 0; i < result.length; i++) {
        const actualLetter = result[i];
        const index = Utils_1.default.alphabet.findIndex(letter => letter === actualLetter);
        const nextLetterIndex = index - delay;
        decypher += Utils_1.default.alphabet[nextLetterIndex < 0 ? (Utils_1.default.alphabet.length - 1) + nextLetterIndex : nextLetterIndex];
    }
}
exports.cypherCeasar = cypherCeasar;

},{"../utils/Utils":3}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ceasar_1 = require("./ceasar/ceasar");
const Utils_1 = __importDefault(require("./utils/Utils"));
const cypherSelect = document.getElementById("select-cypher");
const everyCyphers = ["ceasar"];
let selectedCypher = "";
Utils_1.default.labelTxt.addEventListener("input", cypher);
cypherSelect.addEventListener("change", () => {
    selectedCypher = cypherSelect.value;
    cypher();
});
function displayCyphers() {
    let display = "<option value='' selected></option>";
    for (let i = 0; i < everyCyphers.length; i++) {
        const aCypher = everyCyphers[i];
        display += `<option value="${aCypher}">${aCypher}</option>`;
    }
    cypherSelect.innerHTML = display;
}
function cypher() {
    if (selectedCypher === "ceasar")
        (0, ceasar_1.cypherCeasar)();
}
displayCyphers();

},{"./ceasar/ceasar":1,"./utils/Utils":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
