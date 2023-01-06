function showStars(rows) {
    let pattern = '';
    let row = 1;

    while (row <= rows) {
        pattern += '*';
        console.log(pattern);
        row++;
    }
}

showStars(10);