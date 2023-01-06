function sum(...items) {
    try {
        if (!Array.isArray(items[0]))
            throw "not an array";

        items = [...items[0]]; // flatten the rest operator array into a new array
        return items.reduce((a, b) => a + b);
    } catch (err) {
        return err;
    }
}

function run_tests() {

    assertEquals(sum([1, 2, 3, 4]), 10);
    assertEquals(sum([10, 22, 136, 384]), 552);
    assertEquals(sum([10, 22, -136, 384]), 280);
    assertEquals(sum(1, 2, 3, 4), "not an array");
}

run_tests();