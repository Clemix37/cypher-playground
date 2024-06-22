export default interface ICypher {
    cypher(msg: string): string;
    decypher(msg: string): string;
}