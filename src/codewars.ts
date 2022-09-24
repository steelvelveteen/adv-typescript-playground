/* Return the number (count) of vowels in the given string. */
export class Kata {
  static getCount(str: string) {
    const list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }
}

const result = Kata.getCount('abracadabra');
console.log(result);

/* Your task is to write a function that takes a string and return a new string with all vowels removed. */

export class Kata2 {
  static disemvowel(str: string) {
    return str.replace(/[aeiou]/gi, '');
  }
}
const cleaned = Kata2.disemvowel('This website is for losers LOL!');
console.log(cleaned);
