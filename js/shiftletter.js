// Given a string, shift each letter in the string one character up, and return the 
// new string. If the next character goes past 'z', come back around to the letter 'a'.
//
// Create a function called shiftLetterUp() that takes one parameter, a string, 
// and returns the new string with shifted letters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function shiftLetterUp(str) {
    let newStr = '';

    try {

        if (str === '') throw 'empty';
        if (typeof(str) !== 'string') throw 'not a string';
        if (!isNaN(str)) throw 'is number';

        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
            let pos = alphabet.indexOf(letter);
    
            if (letter === 'z') {
                newStr += 'a';
            }
    
            newStr += alphabet.charAt(++pos);
        }
    } catch (err) {
        return err;
    }

    return newStr;
}

// Unit tests

function test_shiftLetterUp(word, expected) {
    assertEquals(shiftLetterUp(word), expected);
}

function assertEquals(actual, expected) {
    let equal = actual === expected;
    let passOrFail = equal ? 'Test pass' : 'Test fail';
    console.log(passOrFail);

    if (!equal) {
        console.log('Expected ' + expected, 'but was ' + actual);
    }
}

function run_tests() {
    test_shiftLetterUp('h', 'i');
    test_shiftLetterUp('z', 'a');
    test_shiftLetterUp('apple', 'bqqmf');
    test_shiftLetterUp('zebra', 'afcsb');
    test_shiftLetterUp('1', 'is number');
    test_shiftLetterUp(1, 'not a string');
    test_shiftLetterUp(-9999999, 'not a string');
    test_shiftLetterUp('', 'empty');
}

run_tests();