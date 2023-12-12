import { cypherCeasar } from "./ceasar/ceasar";
import Utils from "./utils/Utils";

const cypherSelect:HTMLSelectElement = document.getElementById("select-cypher") as HTMLSelectElement;
const everyCyphers:string[] = ["ceasar"];
let selectedCypher:string = "";

Utils.labelTxt.addEventListener("input", cypher);

cypherSelect.addEventListener("change", () => {
    selectedCypher = cypherSelect.value;
    cypher();
});

function displayCyphers():void{
    let display:string = "<option value='' selected></option>";
    for (let i = 0; i < everyCyphers.length; i++) {
        const aCypher = everyCyphers[i];
        display += `<option value="${aCypher}">${aCypher}</option>`;
    }
    cypherSelect.innerHTML = display; 
}

function cypher(){
    if(selectedCypher === "ceasar") cypherCeasar();
}

displayCyphers();