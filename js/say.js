// User story: As a user, I want the app to greet me appropriately when I login.

// If hour is between 6am and 12pm then say, "Good morning"
// Else if the hour is between 12pm and 6pm say, "Good afternoon"
// Otherwise say, "Good evening"

function say(hour) {
    let greeting = '';

    try {
        if (isNaN(hour)) throw 'Not a number';
        if (hour < 0) throw 'Negative number';

        if (hour >= 6 && hour <= 12) {
            greeting = 'Good morning';
        } else if (hour > 12 && hour <= 18) {
            greeting = 'Good afternoon'; 
        } else {
            greeting = 'Good evening';
        }
    } catch (error) {
        return error;
    }
    return greeting;
}

// Unit tests

function should_say_good_morning(input) {
    let output = say(input);
    let expected = output === 'Good morning';

    assert(expected);
}

function should_say_good_afternoon(input) {
    let output = say(input);
    let expected = (output === 'Good afternoon');

    assert(expected);
}

function should_say_good_evening(input) {
    let output = say(input);
    let expected = (output === 'Good evening');

    assert(expected);
}

function should_throw_exception_when_hour_is_negative(input) {
    let output = say(input);
    let expected = (output === 'Negative number');

    assert(expected);    
}

function should_throw_exception_when_hour_isNaN(input) {
    let output = say(input);
    let expected = (output === 'Not a number');

    assert(expected);
}

function assert(testResult) {
    let passOrFail = testResult ? 'Test pass' : 'Test fail';
    console.log(passOrFail)
}

should_say_good_morning(6);
should_say_good_morning(10);
should_say_good_morning(12);
should_say_good_afternoon(16);
should_say_good_afternoon(18);
should_say_good_evening(22);
should_say_good_evening(0);
should_throw_exception_when_hour_is_negative(-5);
should_throw_exception_when_hour_isNaN('John');