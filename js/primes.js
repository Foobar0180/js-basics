function showPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

function isPrime(num) {

    if (num === 1) {
        return false; // # 1 is not a prime number
    }

    for (let factor = 2; factor < num; factor++) {
        if (num % factor === 0) {
            return false; 
        }
    }
  
  return true; 
}

function run_tests() {
    assertEquals(isPrime(1), false);
    assertEquals(isPrime(2), true);
    assertEquals(isPrime(10), false);
    assertEquals(isPrime(3), true);
    assertEquals(isPrime(12), false);
    assertEquals(isPrime(13), true);
    assertEquals(isPrime(26), false);
    assertEquals(isPrime(67), true);
    assertEquals(isPrime(77), false);
    assertEquals(isPrime(97), true);
}

// showPrimes(10);

run_tests();