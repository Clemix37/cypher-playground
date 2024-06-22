import ICypher from "../interfaces/ICypher";
import Utils from "../utils/Utils";

export default class Ceasar implements ICypher {
    //#region Properties

    #delay = 13;

    //#endregion

    //#region Constructor

    constructor(){

    }

    //#endregion

    //#region Public methods

    cypher(msg: string) : string {
        let result = "";
        for (let i = 0; i < msg.length; i++) {
            const actualChar = msg[i];
            const index = Utils.alphabet.findIndex(letter => letter === actualChar);
            const nextLetterIndex = index+this.#delay;
            const isInAlphabet = Utils.alphabet.includes(actualChar);
            result += isInAlphabet 
                ? Utils.alphabet[nextLetterIndex >= Utils.alphabet.length ? nextLetterIndex - Utils.alphabet.length : nextLetterIndex]
                : actualChar;
        }
        return result;
    }

    decypher(msg: string) : string {
        let decypher = "";
        for (let i = 0; i < msg.length; i++) {
            const actualChar = msg[i];
            const index = Utils.alphabet.findIndex(letter => letter === actualChar);
            const nextLetterIndex = index-this.#delay;
            decypher += Utils.alphabet[nextLetterIndex < 0 ? (Utils.alphabet.length-1) + nextLetterIndex : nextLetterIndex];
        }
        return decypher;
    }

    //#endregion
}
