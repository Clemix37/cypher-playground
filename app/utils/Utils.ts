class Utils {
    
    //#region Properties

    labelTxt:HTMLInputElement;
    alphabet:string[];

    //#endregion

    //#region Constructor

    constructor(){
        this.labelTxt = document.getElementById("label-txt") as HTMLInputElement;
        this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    }

    //#endregion

    //#region Public methods

    //#endregion

}

export default new Utils();