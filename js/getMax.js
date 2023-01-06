function getMax(arr) {

    if (arr.length === 0) {
        return 'cannot be empty';
    }

    return arr.reduce((a, b) => (a > b) ? a : b);
}

function run_tests(array) {
    const arr1 = [1, -62, 1, 5, 0, 150, 13, 28, -3, 99, 130];

    assertEquals(getMax([]), 'cannot be empty')
    assertEquals(getMax(arr1), 150)
}

run_tests();