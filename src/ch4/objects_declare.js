//Objects Declaration and access
const movie = { name: 'Pulp Fiction',
                director: 'Quentin Tanrantino',
                year_of_release: 1994,
                cast: {
                        'Vincent Vega': 'John Travolta',
                        'Jules': 'Samuel Jackson',
                        'Mia': 'Uma Thurman'
                        },
                awards: ['Academy Awards 1995', 'Golden Globes 1995', 'Cannes 1994', 'SAG 1995']
                }
console.log(movie);
console.log(movie.name, movie.year_of_release);
console.log(movie.awards[0]);
console.log(movie.cast.Jules)