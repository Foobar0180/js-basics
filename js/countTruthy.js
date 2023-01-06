function countTruthy(arr) {
    let count = 0;
    for (const item of arr) {
        if (item) ++count;
    }

    return count;
}

function run_tests() {
    const data = [null, 1, 'Hello', 2, undefined, 3, true, false, 0, 4, NaN, '', 6]

    assertEquals(countTruthy(data), 7);
}

run_tests();