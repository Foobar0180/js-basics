function Movie(id, title, year, rating, director) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.director = director;
}

function getMovies() {
    const movies = [
        new Movie(1, 'Iron Man', 2008, 7.78, 'Jon Favreau'),
        new Movie(2, 'The Incredible Hulk', 2008, 6.17, 'Louis Leterrier'),
        new Movie(3, 'Thor', 2011, 6.72, 'Kenneth Branagh'),
        new Movie(4, 'Captain America: The First Avenger', 2011, 7.62, 'Joe Johnston')
    ];

    return movies;
}


function sortMoviesByYear(year) {
    return getMovies(year)
        .filter(m => m.year === year)
        .sort((a, b) => {
            a = a.title.toUpperCase();
            b = b.title.toUpperCase(); // so we can ignore upper or lowercase issues
            
            if (a < b) return -1;
            if (a > b) return 1; 

            return 0; // titles must be equal
        })
        .map(m => m.title);
}


console.log(sortMoviesByYear(2011));