function move(arr, index, offset) {
    const pos = index + offset;

    // ensure the offset is a positive number to compare against the size of the array
    // if the size of the offset is out of range then return
    if (pos >= arr.length || pos < 0) {
        return 'Invalid offset';
    }

    const output = [ ...arr ]; // create a copy
    const ele = output.splice(index, 1)[0]; // remove the item at the specified index and return the element that was removed

    output.splice(pos, 0, ele); // add the element at the offset

    return output;
}

function run_tests() {
    const arr1 = [1, 2, 3, 4];
    
    assertEquals(arraysMatch(move(arr1, 0, 0), [1, 2, 3, 4]), true);
    assertEquals(arraysMatch(move(arr1, 0, 1), [1, 2, 3, 4]), false);
    assertEquals(arraysMatch(move(arr1, 0, 1), [2, 1, 3, 4]), true); 
    assertEquals(arraysMatch(move(arr1, 2, -1), [1, 3, 2, 4]), true);
    assertEquals(arraysMatch(move(arr1, 3, -3), [4, 1, 2, 3]), true);
    assertEquals(move(arr1, 3, 5), 'Invalid offset'); // offset exceeds the length of the array
    assertEquals(move(arr1, 1, -5), 'Invalid offset'); // offset exceeds the length of the array
    assertEquals(move(arr1, 1, 4), 'Invalid offset'); // if the offset is in range but would move the element outside of the array
}

run_tests();