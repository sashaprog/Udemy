const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{}, 
    actors: {},
    genres: [],
    privat: false

};


const answer1_1 = prompt('Один из последних просмотренных фильмов?', '');
const answer2_2 = +prompt('На сколько оцените его?', '');
const answer1_2 = prompt('Один из последних просмотренных фильмов?', '');
const answer2_1 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[answer1_1] = answer2_2;
personalMovieDB.movies[answer1_2] = answer2_1;

console.log(personalMovieDB);