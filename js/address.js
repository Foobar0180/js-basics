function showAddress(address) {
    return `${address.street}, ${address.city}, ${address.zipCode}`;;
}

function run_tests() {
    
    function createAddress() {
        return {
            street: '4120 Freidrich Lane',
            city: 'Austin, Tx',
            zipCode: '78744'
        }
    };

    const address = createAddress();
    assertEquals(showAddress(address), '4120 Freidrich Lane, Austin, Tx, 78744');
}

run_tests();