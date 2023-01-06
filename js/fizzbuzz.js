// Write a program that prints the numbers from 1 to 100. But for multiples of 
// three print “Fizz” instead of the number and for the multiples of five print 
// “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function print() {
    let i = 1;
    while (i <= 100) {
        console.log(fizzbuzz(i));
        i++;
    }
}

function fizzbuzz(input) {
    if (typeof(input) != 'number') {
        return 'not a number';
    }

    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    }

    if (input % 3 === 0) {
        return 'Fizz';
    }

    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input
}

function run_tests() {
    assertEquals(fizzbuzz(3), 'Fizz');
    assertEquals(fizzbuzz(5), 'Buzz');
    assertEquals(fizzbuzz(15), 'FizzBuzz');
    assertEquals(fizzbuzz('3'), 'not a number');
    assertEquals(fizzbuzz(true), 'not a number');
}

// print(); uncomment to print 1 to 100

run_tests();