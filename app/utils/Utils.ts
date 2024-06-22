class Utils {
    
    //#region Properties

    labelTxt: HTMLInputElement;
    alphabet: string[];
    resultElement: HTMLSpanElement;

    //#endregion

    //#region Constructor

    constructor() {
        this.labelTxt = document.getElementById("label-txt") as HTMLInputElement;
        this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        this.resultElement = document.getElementById("result-cypher") as HTMLSpanElement;
    }

    //#endregion

    //#region Public methods

    displayResult(result: string) {
        this.resultElement.innerText = result;
    }

    //#endregion

}

export default new Utils();