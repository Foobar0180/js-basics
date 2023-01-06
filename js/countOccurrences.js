function countOccurrences(numbers, searchElement) {

    // let count = 0;

    // for (let i = 0; i < numbers.length; i++) {
    //     if (searchElement === numbers[i]) count++;
    // }

    // return count;

    // const filtered = numbers.filter(ele => ele === searchElement);
    // return filtered.length;

    return numbers.filter(ele => ele === searchElement).length;

    // return numbers.reduce((accumulator, currentValue) => {
    //     const occurrence  = (currentValue === searchElement) ? 1 : 0;
    //     return accumulator + occurrence;
    // }, 0);

}

function run_tests() {

    const arr = [1, 2, 3, 4, 1];

    assertEquals(countOccurrences(arr, 1), 2);
    assertEquals(countOccurrences(arr, 2), 1);
    assertEquals(countOccurrences(arr, 5), 0);
    assertEquals(countOccurrences(arr, 'Hello'), 0);
}

run_tests();