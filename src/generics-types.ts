const identity = (arg: number) => arg;

const ident = identity(45);
console.log(ident);

const genericIdentity = <T>(arg: T): T => arg;

const genIdent = genericIdentity<number>(55);
console.log(genIdent);

const genArrayIdentity = <T>(arg: T[]): T[] => arg;

const argument = ['one', 'two', 'three'];
const genArrayIdent = genArrayIdentity<string>(argument);
console.log(genArrayIdent.length);

const argument2 = [2, 4, 5, 7];
const genArrayIdent2 = genArrayIdentity<number>(argument2);

console.log(genArrayIdent2.length);
