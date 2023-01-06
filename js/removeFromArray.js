function removeFromArray(arr, excluded) {
    const newArr = []
    for (const key of arr) {
        if (!excluded.includes(key)) {
            newArr.push(key);
        }
    }

    return newArr;
}

function run_tests() {

    const arr = [0, 1, '2', 3, 'Hello', 5, true, -1];
    const itemsToRemove = [1, 'Hello', true];
    const result = removeFromArray(arr, itemsToRemove);

    assertEquals(arraysMatch(arr, itemsToRemove), false);
    assertEquals(arraysMatch(result, [0, "2", 3, 5, -1]), true);
}

run_tests();