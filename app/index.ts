import Ceasar from "./ceasar/ceasar";
import Default from "./default/default";
import ICypher from "./interfaces/ICypher";
import Utils from "./utils/Utils";

//#region Properties & Constants

const cypherSelect:HTMLSelectElement = document.getElementById("select-cypher") as HTMLSelectElement;
const everyCyphers:string[] = ["ceasar"];
let selectedCypher:string = "";

//#endregion

//#region Events

Utils.labelTxt.addEventListener("input", cypher);

cypherSelect.addEventListener("change", () => {
    selectedCypher = cypherSelect.value;
    cypher();
});

//#endregion

//#region Display

function displayCyphers():void{
    let display:string = "<option value='' selected></option>";
    for (let i = 0; i < everyCyphers.length; i++) {
        const aCypher = everyCyphers[i];
        display += `<option value="${aCypher}">${aCypher}</option>`;
    }
    cypherSelect.innerHTML = display; 
}

//#endregion

//#region Cypher

function cypher(){
    let theCypher: ICypher = new Default();
    if(selectedCypher === "ceasar") theCypher = new Ceasar();
    const result = theCypher.cypher(Utils.labelTxt.value);
    Utils.displayResult(result);
}

//#endregion

displayCyphers();