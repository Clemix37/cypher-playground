import ICypher from "../interfaces/ICypher";

export default class Default implements ICypher {
    //#region Constructor

    constructor(){

    }

    //#endregion

    //#region Public methods

    cypher(msg: string) : string {
        return msg;
    }

    decypher(msg: string): string {
        return msg;
    }

    //#endregion
}