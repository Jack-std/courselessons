"use strict"

/*
//Вариант №1
console.log('35' + - "22");
//Вернет 13

//Вариант №2
console.log('35' * "22");
//Вернет 770

//Вариант №3
console.log('558' > 22++);
//Вернет true

//Вариант №4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
//Вернет 1

//Вариант №5
console.log(!false && 11 || 18 && !'');
//Вернет 18

//Вариан №6
let name = 0;
console.log(name ?? "Без имени")
*/
//===========================================================

/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/
/*
//Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//Вариант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}
*/
//===========================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
Задача №1
Вывести в консоль числа от 1 до 5
}*/

// for (let num = 1; num < 6; num++) {
// 	console.log(num);
// }


/*
Задача №2
let num = 8;
while (num) {
	Последний результат 0, верно?
	console.log(num);
	num--;
}
*/
/*
Задача №3. Переписать на while
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}
*/
/*
let num = 0
while (num < 3) {
	num++;
	console.log(`Число: ${num}`);
}
*/


/*
Задача №4. Прекратить работу цикла №1 когда size равна 1
Цикл №1
for (let num = 0; num < 2; num++) {}
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}

*/
/*
for (let num = 0; num < 2; num++) {
	if (num == 1) break;
}
*/
/*
for (let size = 0; size < 3; size++) {
	console.log(size);
	if (size == 1) break;
}
*/
//===========================================================
//ДОМАШКА

/*
Задача №1. Получить верное значение округления
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); Выведет 1 что не верно
*/
//Рішення
/*
let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);
*/
/*
Задача №2. Получить число 135.58 из строки
let value = "135.58px";
*/
//Рішення
/*
let value = parseFloat("135.58px");
console.log(value)
*/
/*
Задача №3. Посттроить верное условное ветвление
let value = 58 + "Фрилансер";
if (написать ответ) {
	console.log('Результат выражения NaN');
}
*/
//Рішення
/*
let value1 = 58 + "Фрилансер";
if (value1) {
	console.log('Результат выражения NaN');
}
*/
/*
Задача №4.
Найти максимальное число из 10,58,39,-150,0
*/
//Рішення
/*
console.log(Math.max(10, 58, 39, -150, 0))
*/
/*
Задача №5.
Округлить число 58.858 до числа 58
*/
//Рішення
/*
console.log(Math.floor(58.858))
*/
//===========================================================
//ДОМАШКА 

/*
Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
Ожидаем получить Привет! Я фрилансер
console.log(text);
*/
/*
Задача №2. Получить символ "н" строки:
let text = 'фрилансер';
*/
/*
let text = 'фрилансер';
let leter = text[5];
console.log(leter);
*/
/*
Задача №3. Верно?
let text = 123 + "456";
Ожидаем 579
console.log(text);
*/
/*
Задача №4. Получить строку в верхнем регистре
let text = 'фрилансер';
*/
/*
let text = 'фрилансер';
console.log(text.toUpperCase())
*/
/*
Задача №5. Получить подстроку "лан" из:
let text = 'фрилансер';
*/
/*
let text = 'фрилансер';
console.log(text.slice(3, 6));
*/
/*
Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));
*/
let text = 'фрилансер';
console.log(text.includes('лан', 4));