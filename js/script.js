"use strict";

// Типы Данных
// Их 8шт

// Простые:

// 1)ЧИСЛА
// 	1,2,3; 
// 	бывают Infinity (4/0) и -Infinity (-4/0)
// 	NaN ('string' * 9) Not a Number;
// 2)СТРОКИ
// 	'string',"string";
// 3)ЛОГИЧЕСКИЙ ТИП (boolean)
// 	true/false;
// 4)null;

// 5)undefined;

// 6)Symbol;

// 7)BigInt (число  2 в 53 степени и выше);

// 8)ОБЬЕКТЫ (обычные обьекты)
// 	спец. обьекты:
// 	Массивы [];
// 	Функции, function;
// 	Обькты Даты;
// 	Регулярные выражения;
// 	ошибки;

// 	Важно !!!

// 	Вся информация которая приходит от пользователя будет ввиде строк(string);


let number = 4.5;

console.log(-4/0);

console.log( 'str' * 9 );

const persone = `5`;

const bool = false;

// console.log(something);

let und;
console.log(und);

const obj = {
	name: "Jhone",
	age: 25,
	isMarrid: false
};

// console.log(obj.name);
// console.log(obj["name"]);

let arr = ['plum.png', 'oranje.jpg', 6, 'apple.bmp', {}, [] ];
console.log(arr[1]);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log( typeof(answers) );
// console.log( typeof(null) );

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/5`);

// const user = "Ivan";

// alert(`Привет,  ${user}`);

console.log('arr' + ' - object');

console.log(4 + ' - object');

console.log(4 + '5');

let incr = 10,
		decr = 10;

	// ++incr;
	// --decr;

	console.log(incr++);
	console.log(--decr);

	console.log(5 % 2);

	
	console.log(2 * 4 === 8);

	const isChecked = false,
				isClose = false;

	console.log(isChecked || !isClose);
	console.log(isChecked && isClose);

	console.log(2 + 2 * 2 === 8);

	if (4 == 9) {
		console.log('OK!');
	} else {
		console.log('error');
	}
	
	
	
	// if (num < 49) {
	// 	console.log('Error');
	// } else if (num > 100){
	// 	console.log('Meny');
	// } else {
	// 	console.log('Ok!');
	// }
	
	// (num === 50) ? console.log('Ok!') : console.log('Error');
	
	const num = 50;
	
	switch (num) {
		case 49:
			console.log('Not');
			break;
		case 100:
			console.log('Not');
			break;
		case 51:
			console.log('GOt it!');
			break;
		default:
			console.log('Not this time!');
			break;
	}



let num1 = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

do {
	console.log(num1);
	num1++;
}
while (num1 < 49);

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		// break;
		continue;
	}
	console.log(i);
}

//Home work 1

	// let numberOfFilms;

	// const personalMovieDB = {
	// 	count: numberOfFilms,
	// 	movies: {},
	// 	actors: {},
	// 	genres: [],
	// 	privat: false
	// };


		
	// 	do{
	// 		personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');

	// 		if (personalMovieDB.count == '' || personalMovieDB.count == null){
	// 			alert ('Введите число фильмов');
	// 		}
			
	// 	}
	// 	while(personalMovieDB.count == '');
		
	// 		if ( personalMovieDB.count < 10 ){

	// 			alert('Просмотренно довольно мало фильмов');
			
	// 		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			
	// 			alert('Вы классический зритель');
			
	// 		} else if (personalMovieDB.count >= 30) {
			
	// 			alert('Вы киноман');
			
	// 		} else {
			
	// 			alert('Произошла ошибка');
			
	// 		}

	// 	let lustOfFilmsFirst, ratingOfFilmsFirst;

	// 	for (let i = 0; i < 2; i++) {
	// 		do{
	// 			lustOfFilmsFirst = prompt('Один из последних просмотренных фильмов?', '');
	// 			// console.log(lustOfFilmsFirst.length);
	// 			if (lustOfFilmsFirst == '' || lustOfFilmsFirst == null){
	// 				alert('Введите значение');
	// 			} else if(lustOfFilmsFirst.length > 50) {
	// 				alert('Слишком длинное название');
	// 			}
	// 		}
	// 		while(lustOfFilmsFirst == '' || lustOfFilmsFirst == null || lustOfFilmsFirst.length > 50);
		
	// 		do{
	// 			ratingOfFilmsFirst = +prompt('На сколько оценете его?', '');
	// 			if (ratingOfFilmsFirst == ''){
	// 				alert('Введите значение');
	// 			}
	// 		}
	// 		while(ratingOfFilmsFirst == '' || ratingOfFilmsFirst == null || ratingOfFilmsFirst == null);
		
	// 		personalMovieDB.movies[lustOfFilmsFirst] = ratingOfFilmsFirst;
		
	// 	}



//console.log(personalMovieDB);
// end Home work 1




	//методы перебора массивов
	{
	let numbers = [1, 10, 15, 20, -4, 8, 14];

	//for 
		for (let i = 0; i < numbers.length; i++) {
			console.log(numbers[i]);
		}
	}
	//forEach
	{
		let numbers = [1, 10, 15, 20, -4, 8, 14];
	
		numbers.forEach(function(item, i){
			console.log(item);

		});
	}
	//filter
	{
		let numbers = [1, 10, 15, 20, -4, 8, 14];

		let neg = numbers.filter(function(item){
			return item < 0;
		});

		console.log(neg);

	}

	//map
	{
		let data = ['1', '10', '15', '20', '-4', '8', '14'];

		let numbers = data.map(function(item){
			return +(item);
		});

		console.log(data);
		console.log(numbers);
	}

	//every
{
	let numbers = [1, 10, 15, -20, 4, 8, 14];

	let allPos = numbers.every(function(item){
		return item >= 0;
	});

	console.log(allPos);
}

	//some
	{
		let numbers = [1, 10, 15, -20, 4, 8, 14];
	
		let allPos = numbers.some(function(item){
			return item < 0;
		});
	
		console.log(allPos);
	}

	//reduce или reduceRight справа налево
	{
		let numbers = [1, 10, 15, -20, 4, 8, 14];

		let sum = numbers.reduce(function(total, item){
			return total + item;
		},0);

		console.log(sum);
	}

	//reduce может преобразовать двумерный массив в одномерный 

	{
		let numbers = [
			[1, 10], 
			[15, -20], 
			[4, 8], 
			[14,6]
		];

		let arr = numbers.reduce(function(total, item){
			return total.concat(item);
		},[]);

		console.log(arr);
	}


//функции
//замыкание функции это сама функция с ее переменными которые ей доступны
let num2 = 20;
function showFirstMessage(text) {
	console.log(text);
	let num2 = 10;
}

showFirstMessage("hello123");
console.log(num2);

function calc(a,b) {
	return (a + b);
}

console.log(calc(6,3));
console.log(calc(16,3));
console.log(calc(6,23));

function ret() {
	let num = 50;
	
	//

	return num;
}

const anotherNum = ret();
console.log(anotherNum);

// FUNCTION DECLARATION пример: функцию можно вызвать до ее самой 
//(;) в конце можно не ставить
	console.log(calc(6,23));
	function calc(a,b) {
		return (a + b);
	}
// FUNCTION EXPRESSION пример: вызвать можно только после ее обьявления
//(;) в конце нужно ставить
	const logger = function() {
		console.log("Hello EXPRESSION");
	};

	logger();


//СТРЕЛОЧНЫЕ ФУНКЦИИ
//если в одну строчку то скобки {} можно не ставить
//не имеет своего контекста (this)
const calc1 = (a, b) =>  a + b;

//с одним аргументом можно вот так
const calc2 = a =>  a * 2;

const calc3 = (a, b) => { 
	return a + b; 
};

//Методы и свойства у строк и чисел
//методы это вспомагательные функции 
// пример вызова: str.met()
//свойства это вспомагательные значения 
// пример вызова:str.length

const str = "teSt";
const arr2 = [1,2,4];

console.log(str.length);
console.log(arr2.length);
console.log(str[2]);

console.log(str.toLocaleUpperCase()); // мы не изменяим переменну str на прямую
console.log(str.toLocaleLowerCase());
console.log(str); // str остается такой как и была

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf(" "));
console.log(fruit.indexOf("it"));

//МЕТОДЫ для  измменения СТРОК
// 1)slice поиск строки по индексу от и до
const logg = "Hello world";
console.log(logg.slice(6,11)); //тут с 6-w по 10-d (world) но нужно указать следующую тоесть 11
console.log(logg.slice(6)); //вырезаем с 6 и до конца
console.log(logg.slice(-6, -1)); //вырезаем с 6 справа и заканчиваю 1 справа

//substring тоже что и slice только нельза задавать -минусовые значения
//но первое значение может быть больше второго
console.log(logg.substring(11,6)); //или оно же logg.substring(6,11)

//substr (тут с 6 позиции вырезвем 5 символов)
console.log(logg.substr(6,5));

//МЕТОДЫ для  измменения ЧИСЕЛ (встроенная библиотека Math)

const num3 = 12.2;
console.log(Math.round(num3)); //округление до ближайшего целого

const test2 = "12.2px";
console.log(parseInt(test2)); // = 12 в число, возьмет целое число до ближайшего не соответствия, тоетсь до . 
console.log(parseFloat(test2)); // = 12.2 в число c плавающей точкой







