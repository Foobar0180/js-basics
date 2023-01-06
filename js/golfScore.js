// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    let nickname;

    if (strokes === 1) {
        nickname = names[0]; // Hole-in-one!
    } else if (strokes === par - 2) {
        nickname = names[1]; // Eagle
    } else if (strokes === par - 1) {
        nickname = names[2]; // Birdie
    } else if (par === strokes) {
        nickname = names[3]; // Par
    } else if (strokes === par + 1) {
        nickname = names[4]; // Bogey
    } else if (strokes === par + 2) {
        nickname = names[5]; // Double Bogey
    } else {
        nickname = names[6]; // Go Home!
    }
    
    return nickname;
}

// Unit tests

function should_return_hole_in_one(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Hole-in-one!");
    assert(expected);
}

function should_return_eagle(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Eagle");
    assert(expected);
}

function should_return_birdie(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Birdie");
    assert(expected);
}

function should_return_par(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Par");
    assert(expected);
}

function should_return_bogey(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Bogey");
    assert(expected);
}

function should_return_double_bogey(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Double Bogey");
    assert(expected);
}

function should_return_go_home(par, strokes) {
    let output = golfScore(par, strokes);
    let expected = (output === "Go Home!");
    assert(expected);
}

function assert(testResult) {
    let passOrFail = testResult ? 'Test pass' : 'Test fail';
    console.log(passOrFail)
}

function run_tests() {
    should_return_hole_in_one(4, 1);
    should_return_eagle(4, 2);
    should_return_eagle(5, 3);
    should_return_birdie(4, 3);
    should_return_par(4, 4);
    should_return_hole_in_one(1, 1);
    should_return_par(5, 5);
    should_return_bogey(4, 5);
    should_return_double_bogey(3, 5);
    should_return_go_home(4, 7);
    should_return_go_home(5, 9);
}

run_tests();