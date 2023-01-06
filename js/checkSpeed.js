function checkSpeed(speed) {
    const limit = 70;
    const perPoint = 5;
    const points = Math.floor((speed - limit) / perPoint);

    if (speed < limit + perPoint) {
        return 'Ok';
    }
    
    if (points >= 12) {
        return 'License suspended';
    }

    if (points === 1) {
        return points + ' point';
    } else {
        return points + ' points';
    }
}

function run_tests() {
    assertEquals(checkSpeed(65), 'Ok');
    assertEquals(checkSpeed(70), 'Ok');
    assertEquals(checkSpeed(72), 'Ok');
    assertEquals(checkSpeed(75), '1 point');
    assertEquals(checkSpeed(85), '3 points');
    assertEquals(checkSpeed(130), 'License suspended');
    assertEquals(checkSpeed(180), 'License suspended');
}

run_tests();