function calculateGrade(marks) {
    const avg = calculateAverage(marks);
    
    if (avg < 60) return grade = 'F';
    if (avg < 70) return grade = 'D';
    if (avg < 80) return grade = 'C';
    if (avg < 90) return grade = 'B';         
    return grade = 'A'
}

function calculateAverage(marks) {
    let total = 0;
    
    for (const mark of marks) {
        total += mark;
    }

    let percent = Math.round(total / marks.length);

    return percent;
}

function run_tests() {
    assertEquals(calculateAverage([46, 54, 79]), 60);
    assertEquals(calculateAverage([64, 33, 52]), 50);
    assertEquals(calculateAverage([80, 83, 73]), 79);
    assertEquals(calculateAverage([58, 63, 64]), 62);
    assertEquals(calculateGrade([46, 54, 71]), 'F');
    assertEquals(calculateGrade([58, 63, 64]), 'D');
    assertEquals(calculateGrade([80, 83, 73]), 'C');
}

run_tests();