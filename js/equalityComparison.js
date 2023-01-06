function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(source, target) {
    return source.street === target.street && 
        source.city === target.city &&
        source.zipCode === target.zipCode;
}

function areSame(sourceObj, targetObj) {
    return sourceObj === targetObj;
}

function run_tests() {
    let address1 = new Address('a', 'b', 'c');
    let address2 = new Address('a', 'b', 'c');

    assertEquals(areEqual(address1, address2), true);
    assertEquals(areSame(address1, address2), false);
}

run_tests();