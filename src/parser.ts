import assert from "assert";

export function Parser(userData: string): Array<Array<string>>{
    console.log(userData);
    var result = new Array();
    const split1 = userData.split('\n');
    var split2: Array<string>;
    for (const field of split1){
        split2 = field.split('|');
        result.push(split2);
    }
    console.log(result);
    return result;
}