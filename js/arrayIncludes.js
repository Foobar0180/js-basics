function arrayIncludes(array, item) {
    return item in array;
}

function run_tests() {

    const arr = [0, 1, '2', 3, 'Hello', 5, true, -1];

    assertEquals(arrayIncludes(arr, '2'), true);
    assertEquals(arrayIncludes(arr, 5), true);
    assertEquals(arrayIncludes(arr, 'Bye'), false);
    assertEquals(arrayIncludes(arr, '-1'), false);
}

run_tests();