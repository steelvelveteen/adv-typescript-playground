function identity(arg: number) {
    return arg;
}

let ident = identity(45);
console.log(ident);

const genericIdentity = <T>(arg: T): T => {
    return arg;
};

let genIdent = genericIdentity<number>(55);
console.log(genIdent);

const genArrayIdentity = <T>(arg: T[]): T[] => {
    return arg;
};
let argument = ['one', 'two', 'three'];
let genArrayIdent = genArrayIdentity<string>(argument);
console.log(genArrayIdent.length);

let argument2 = [2, 4, 5, 7];
let genArrayIdent2 = genArrayIdentity<number>(argument2);

console.log(genArrayIdent2.length);
