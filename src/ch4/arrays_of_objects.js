//Arrays of objects
const movies = [
        {
                id:1,
                name: 'Pulp Fiction',
                director: 'Quentin Tarantino'
        },
        {
                id:2,
                name: 'Inception',
                director: 'Christopher Nolan'
        },
        {
                id:3,
                name: 'The Shawshank Redemption',
                director: 'Frank Darabont'
        }
];
console.log(movies[1].name, movies[1].director);
console.log(JSON.stringify(movies));
