/**
 * Run with
 * deno run --unstable --watch src/functions_primer.ts
 */

/**
 * A primer with functions in typescript
 */

let add: Function;

add = (argument: number) => console.log(argument);

// add = 15; /* error of course */

let add2: (a: number, b: number) => void;
add2 = (a: number, b: number) => {
    console.log(a + b);
};
add2(5, 15);

// add2 = (c: string, d: number) => console.log(c + d);

let add3: (a: number, b: number) => number;
add3 = (a: number, b: number) => a + b;

type funcAdd4 = (a: number, b: number) => number;
let add4: funcAdd4 = (a: number, b: number) => a + b;
console.log('Add4 function');
let result = add4(5, 4);
console.log(result);
// add3 = (c: number, d: number) => console.log(c + d);

// let add4: (a: number, b: number, cb: (r: number) => void) => void;
// add4 = (a: number, b: number, cb: (r: number) => void) => console.log(a + b);
// add4(5, 15, (5 + 15) => console.log(r));
// add4(5, 15, () => console.log('Callback'));
