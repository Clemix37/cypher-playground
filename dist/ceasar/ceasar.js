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
