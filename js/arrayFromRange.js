function arrayFromRange(min, max) {
    const arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    return arr;
}

function run_tests() {
    const result = arrayFromRange(1, 5);
    const match = arraysMatch(result, [1,2,3,4,5]);

    assertEquals(Array.isArray(result), true);
    assertEquals(match, true);
    assertEquals(result.length, 5);
}

run_tests();