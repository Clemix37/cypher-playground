import Utils from "../utils/Utils";

//#region Properties & Constants

const delay = 3;

//#endregion

//#region Cypher

function cypherCeasar():void{
    const txt:string = Utils.labelTxt.value;
    let result = "";
    for (let i = 0; i < txt.length; i++) {
        const actualLetter = txt[i];
        const index = Utils.alphabet.findIndex(letter => letter === actualLetter);
        const nextLetterIndex = index+delay;
        result += Utils.alphabet[nextLetterIndex >= Utils.alphabet.length ? nextLetterIndex - Utils.alphabet.length : nextLetterIndex];
    }
    Utils.displayResult(result);
    decypherCeasar(result);
}

//#endregion

//#region Decypher

function decypherCeasar(txt:string):void{
    // const txt:string = Utils.labelTxt.value;
    let decypher = "";
    for (let i = 0; i < txt.length; i++) {
        const actualLetter = txt[i];
        const index = Utils.alphabet.findIndex(letter => letter === actualLetter);
        const nextLetterIndex = index-delay;
        decypher += Utils.alphabet[nextLetterIndex < 0 ? (Utils.alphabet.length-1) + nextLetterIndex : nextLetterIndex];
    }
    console.log(decypher);
}

//#endregion

export {cypherCeasar};