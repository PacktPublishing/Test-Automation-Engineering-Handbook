const movies = [
  {
    id: 1,
    name: 'Pulp Fiction',
    director: 'Quentin Tarantino'
  },
  {
    id: 2,
    name: 'Inception',
    director: 'Christopher Nolan'
  },
  {
    id: 3,
    name: 'The Shawshank Redemption',
    director: 'Frank Darabont'
  }
]
for (const movie of movies) {
  console.log(`Director of ${movie.name} is ${movie.director}`)
}
