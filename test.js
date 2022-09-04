"use strict"

const myFirstTXT = document.getElementById('myFirstTxt');
console.log(myFirstTXT)

const div = document.getElementsByTagName('div');
console.log(div); // получаємо HTML колекцію (псевдомассиив )
console.log(div[2]); //  получаємо тег під індексом 2 тобто 3 

const container = document.getElementsByClassName('container');
console.log(container);
console.log(container[0])

const box = document.querySelectorAll('.box');
console.log(box);

const large = document.querySelector('.front');
console.log(large);

large.style.backgroundColor = 'aquamarine';