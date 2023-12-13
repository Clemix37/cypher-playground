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
