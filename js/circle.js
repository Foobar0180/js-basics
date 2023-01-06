const circle = {
    radius: 2,
    get area() {
        return (Math.PI * (this.radius * this.radius));
    }
};

function run_tests() {
    assertEquals(circle.area, 12.566370614359172);
}

run_tests();