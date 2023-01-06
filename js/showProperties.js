const movie = {
    title: 'Jurassic Park',
    releaseYear: 1993,
    rating: 8.32,
    director: 'Steven Spielberg'
}

function showProperties(obj) {
    for (let key in obj) {
        console.log(key, obj[key])
    }
}

function countProperties(obj) {
    let count = 0;
    for (let key in obj) ++count;
    return count;
}

function getProperty(prop) {
    return movie[prop];
}

function run_tests() {
    assertEquals(getProperty('rating'), 8.32);
    assertEquals(getProperty('title'), 'Jurassic Park');
    assertEquals(getProperty('genre'), undefined);
    assertEquals(countProperties(movie), 4);
}

// showProperties(movie);

run_tests();