"use strict";

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
let num = 20;
function showFirstMessage(text) {
	console.log(text);
	let num = 10;
}

showFirstMessage("hello123");
console.log(num);

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
