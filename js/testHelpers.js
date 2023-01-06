function assertEquals(actual, expected) {
    let equal = actual === expected;
    if (!equal) {
        console.log('Test fail: Expected ' + expected, 'but was ' + actual);
    } else {
        console.log('Test pass');
    }
}

function arraysMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}