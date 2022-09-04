
"use strict"
// умови 
const num = 50;
if(num == 50){
    console.log('ok');
} else{
    console.log('Error')
}

const number5 = 55;
(number5 ==555) ? console.log('ok'): console.log('Error')
//  суворе порівняня
const jojo = 50;
switch(jojo){
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 50:
        console.log('n22o');
        break;
    default:
        console.log('yes');
        break;
}
// цикл
let nax = 50;
while(nax<55){
    console.log(nax);
    nax++;
}
// цикл який спершу робить дію а затім перевіряє умову
let tON = 50;
do{
    console.log(tON);
    tON++
}
while(tON<55);
//  найбільш популярний цикл, оскільки його можна настроїти
let pereminna = 2;
for(let i = 1; i < 8; i++){
    console.log(i);
}

for(let i = 1; i < 10; i++){
    if(i === 6){
        break;
        continue;
    }
    console.log(i);
}
// dead insaid цикл
for (let i = 1000; i > 3; i = i - 7) { 
    console.log(i);
    if(i <= 6){ 
        console.log('dead insaid')
    }
}


function calc(a, b){
    return (a - b);
}

console.log(calc(4, 66));



const joJo = 'hello this fuking world'
// console.log(joJo.slice(11, 17));
// console.log(joJo.substring(11, 17));
console.log(joJo.substr(11, 6));
console.log(joJo.indexOf('q'));
// console.log(joJo.toUpperCase());
console.log(joJo.toLowerCase());


function propper(lang, calback){
    console.log(` я учу ${lang}`);
    calback();
}

propper('JS', function(){
    console.log('text');
});

// обєкти 

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // також у оюєкті можна створити властний метод ось так 
    makeTest: function() {
        console.log('test');
    }
};

// деструктизація обєкта
const { border, bg} = options.colors;
console.log(border);

options.makeTest();
// лічба ключів в обєкті 
console.log(Object.keys(options).length);

console.log(options.name);
// оператор удалити 
delete options.name;
console.log(options)
// перебираємо обєкт
for (let key in options) {
    if (typeof(options[key]) === 'object' ) {
        for (let i in options[key]) {
            console.log(`свойство ${i} має значення ${options[key][i]}`);
        }
    } else {
        console.log(`свойство ${key} має значення ${options[key]}`);    
    } 
}

// МАССИВ ,методи

const arr = [1, 222, 14, 633, 2218];
// arr.pop(); // удаляє останнє значення в масиві 
// arr.push(55); // добовляє останнє значення в масиві
//  console.log(arr);

// сортіровка по правельному від 1 до 2 в 52 степені
arr.sort(compareNun);
console.log(arr);
function compareNun(a, d){
    return a - d;
}

// перебор за допомогою функціЇ
// for ( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// передобор при for of тут можна використати breack і continue
// for ( let name1 of arr) {
//     console.log(name1);
// }

// forEach метод найбільш частий варіант перебору оскільки його можна настроїти 
arr.forEach( function(item, i, arr){
    console.log(`${i}: ${item} всередені ${arr}`);
});
//  корисна функція якби працювала
const str = prompt("","");
const product = str.split(",");
console.log(product);


//  СТВОРЕННЯ КОПІЇ ОБЄКТІВ 

//  метод Object.assign

const objectNum1 = {
    a: 57,
    b: 55
}

const objectNum2 = {
    v: 33,
    k: 221
}

const objectNum3 = Object.assign(objectNum1, objectNum2);

console.log(Object.assign(objectNum1, objectNum2));
objectNum3.k = 228;
console.log(objectNum3);

//  Метод за допомогою цикла 

function copy(MainObj) {
    let objCopy = {};

    let key;
    for ( key in MainObj) {
        objCopy[key] = MainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 5,
    b: 2,
    c: {
        x: 4,
        y: 22
    }
}

const newNumbers = copy(numbers);
newNumbers.a = 33;
console.log(numbers);
console.log(newNumbers);

// Метод slice

const oldArray = ['a', 'b', 'c']
const newAraay = oldArray.slice();
newAraay[1] = 'goul ss rang'
console.log(newAraay);
console.log(oldArray);

// Метод ...

const video = ['значення1', 'значення2', 'значення3', 'значенняN'],
      blogs = ['blog1', 'blog2', 'blog3', 'blogN'],
      internet = [...video, ...blogs, 'stern', 'saaaa'];

console.log(internet);

// Метод ... це також метод розвороту 

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const rams = [2, 5, 77, 55];
log(...rams);


const array = ['a', 'b']
const newAraayup = [...array]; //copy

const q = {
    one: 1,
    two: 2
}

const newQ = {...q};


// ЗАДАЧКИ

// задачка 1
// let x = 5;
// alert(x++);
// виводиться 5
// тому що х++ а не ++х в такому випадку буде 6

// задача 2
console.log([ ] + false - null + true)
// виведеться NaN тому що це неправильні математичні дії

// задача 3
// let y = 1
// let x = y = 2;
// console.log(x);
// виводить 2 

// задача 4
 const s2s = [] + 1 + 2;
console.log(s2s);
// виведе 12 тому що пустий массив [] перетворює тип данних в строку 

// задача 5 
console.log('1'[0])
// виводить 1  тип данних string

// задача 6 
console.log(2 && 3 && 4 && null && 0 && 45);
// виведе null тому що && запинається на брехні тобто null і дальше код не піде

//  задача 7
// умова чи є різниця між :
!!(a && b) (a && b)
// є різниця тому що !! перетворюють (a && b) в буліновий тип данних

// задача 8
console.log(null || 2 && 3 || 4);
// виводить 3 тому що || запиняється на правді, але && виконюється спершу і бере значення лівіше

// задача 9
// a = [1, 2, 3]
// b = [1, 2, 3]
// умова a == b
// це не правда тому що незважаючи на те що вміст одинаковий массиви різні 

// задача 10
alert(+'infinity');
// виведе infinity тип данних number

// задача 11 
'Eжик' > 'яблуко'
// не вірно тому що 6 букв у останньому 

// задача 12
// чому равно це
0 || "" || 2 || undefined || true || false
// равно 2 тому що || запиняється на правді 










