import Utils from "../utils/Utils";

const delay = 3;

function cypherCeasar():void{
    const txt:string = Utils.labelTxt.value;
    let result = "";
    for (let i = 0; i < txt.length; i++) {
        const actualLetter = txt[i];
        const index = Utils.alphabet.findIndex(letter => letter === actualLetter);
        const nextLetterIndex = index+delay;
        result += Utils.alphabet[nextLetterIndex > Utils.alphabet.length ? nextLetterIndex - Utils.alphabet.length : nextLetterIndex];
    }
    console.log(result);
    let decypher = "";
    for (let i = 0; i < result.length; i++) {
        const actualLetter = result[i];
        const index = Utils.alphabet.findIndex(letter => letter === actualLetter);
        const nextLetterIndex = index-delay;
        decypher += Utils.alphabet[nextLetterIndex < 0 ? 0 - nextLetterIndex : nextLetterIndex];
    }
    console.log(decypher);
}

export {cypherCeasar};