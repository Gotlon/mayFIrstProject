"use strict"

 const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели(запитатння №1)?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели(запитатння №1)?", '');
        }
    },
    rememberMyFilms: function () {
        for( let i = 0; i < 2; i++){
            const a = prompt('один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцениваете его?', '');
            
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
            }else{
                i--;
            }
        
              
        };
        console.log(personalMovieDB)
    },
    detectedPersonalLevel:  function () {
        if(personalMovieDB.count < 10){
            alert('переглянуто занадто мало фільмів');
        } else if(personalMovieDB.count <= 30 && personalMovieDB.count < 30) {
            alert('ви звичайний переглядач фільмів');
        } else if(personalMovieDB.count >= 30){
            alert(' Секрети пліткарів');
        } else {
            alert('errossr');
        };
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB.privat);
        }
    },
    toggLeVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true ;
        }
    },

    writeYourGenres:()=> {
        for(let i = 1; i <= 3; i++){
            let genre = prompt( ` ваш олюблений жанр під номером ${i}`);

            if ( genre === '' || genre == null){
                alert('ти далбайоб?')
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre
            }
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`любимий жанр ${i + 1} це ${item}`);
        });
    }
    
};
// personalMovieDB.start();
// personalMovieDB.detectedPersonalLevel();
// personalMovieDB.writeYourGenres();

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length)

