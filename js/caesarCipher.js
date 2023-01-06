// A Caesar cipher, or a shift cipher, is one of the most well known encryption 
// techniques. It works by substituting the letters in the message with letters 
// some fixed number of positions down the alphabet.

// Your challenge is to write a function that will accept a string and a shift 
// key. It will return the encrypted text. If something in the string is not in 
// the alphabet (e.g. punctuation, spaces) leave it as is.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function rot13(plainText) {
    return caesarShift(plainText, 13);
}

function caesarShift(plainText, offset) {
    let cipherText = '';

    try {
        if (plainText === '') throw 'empty';
        if (offset < 0) throw 'cannot be negative';
        if (typeof(plainText) !== 'string') throw 'not a string';
        if (!isNaN(plainText)) throw 'is number';

        for (let i = 0; i < plainText.length; i++) {
            // get the current letter
            let letter = plainText[i];
            
            // check if not whitespace
            if (letter != ' ') {            
                // find its position in the alphabet
                let currentPos = alphabet.indexOf(letter.toLowerCase());

                // could not find the character
                if (currentPos === -1) {
                    cipherText += letter;
                    continue;
                }

                // is the letter lowercase or uppercase
                let isUpper = letter === letter.toUpperCase();
                // calculate the displacement for the specified offset 
                let newPos = (currentPos + offset) % 26;

                cipherText += isUpper 
                    ? alphabet.charAt(newPos).toUpperCase()
                    : alphabet.charAt(newPos);        
            } else {
                cipherText += letter;
            }
        }
    } catch (err) {
        return err;
    }

    return cipherText;
}

// function rot13(plainText) {
//     let cipherText = '';

//     for (let i = 0; i < plainText.length; i++) {
//         let ascii = plainText[i].charCodeAt();

//         if (ascii >= 65 && ascii <= 77) {
//             cipherText += String.fromCharCode(ascii + 13);
//         } else if (ascii >= 78 && ascii <= 90) {
//             cipherText += String.fromCharCode(ascii - 13);
//         } else {
//             cipherText += plainText[i];
//         }
//     }

//     return cipherText;
// }

// Unit tests

function assertEquals(actual, expected) {
    let equal = actual === expected;
    if (!equal) {
        console.log('Test fail: Expected ' + expected, 'but was ' + actual);
    } else {
        console.log('Test pass');
    }
}

function run_tests() {
    console.log('Running tests');
    assertEquals(caesarShift('bahzy', -4), 'cannot be negative');
    assertEquals(caesarShift('1'), 'is number');
    assertEquals(caesarShift('-5'), 'is number');
    assertEquals(caesarShift(1), 'not a string');
    assertEquals(caesarShift(0), 'not a string');
    assertEquals(caesarShift(-9999999), 'not a string');
    assertEquals(caesarShift(''), 'empty');
    assertEquals(caesarShift('h', 2), 'j');
    assertEquals(caesarShift('D', 1), 'E');
    assertEquals(caesarShift('z', 15), 'o');
    assertEquals(caesarShift('hello', 9), 'qnuux');
    assertEquals(caesarShift('Fox', 0), 'Fox');
    assertEquals(caesarShift('zebra', 6), 'fkhxg');
    assertEquals(caesarShift('Attack at dawn!', 3), 'Dwwdfn dw gdzq!');

    // ROT13
    assertEquals(rot13('SeRr cvMmN!'), 'FrEe piZzA!');
    assertEquals(rot13('SERR PBQR PNZC'), 'FREE CODE CAMP');
    console.log('Tests completed');
}

run_tests();