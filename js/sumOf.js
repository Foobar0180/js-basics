function sumOf(limit) {
    let total = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }

    return total;
}


function run_tests() {
    assertEquals(sumOf(3), 3);
    assertEquals(sumOf(5), 8);
    assertEquals(sumOf(10), 33);
    assertEquals(sumOf(12), 45);
}

run_tests();