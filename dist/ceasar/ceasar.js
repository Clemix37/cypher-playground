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
