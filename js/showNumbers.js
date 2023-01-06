function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let even = (i % 2 === 0);
        const message = (even) ? "EVEN" : "ODD";
        console.log(i, message)
    }
}

showNumbers(10);