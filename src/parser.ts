import assert from "assert";

export function Parser(userData: string): Array<Array<string>>{
    var result = new Array();
    const split1 = userData.split('\n');
    var split2: Array<string>;
    for (const field in split1){
        split2 = field.split('|');
        result.push(split2);
    }
    return result;
}