function isLandscape(width, height) {
    return (width > height);
}

function run_tests() {
    assertEquals(isLandscape(595, 842), false);
    assertEquals(isLandscape(842, 595), true);
}

run_tests();