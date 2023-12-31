"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ceasar_1 = require("./ceasar/ceasar");
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
    if (selectedCypher === "ceasar")
        (0, ceasar_1.cypherCeasar)();
}
//#endregion
displayCyphers();
