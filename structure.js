/*
Треугольник в цикле

Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

#
##
###
####
#####
######
#######

Будет полезно знать, что длину строки можно узнать, приписав к переменной .length.

var abc = "abc";
console.log(abc.length);
// → 3
*/
let x = "#";
for (let i = 7; i >= 0; i--) {
	console.log(x);
	x += "#";
};
//Вариант 2
let x = "#";
for (let i = 0; i <= 6; i++) {
	console.log(x);
	x += "#";
};


/*
FizzBuzz

Напишите программу, которая выводит через console.log все числа
 от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3,
  она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3)
   – ‘Buzz’.

Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» 
для всех чисел, которые делятся и на 3, и на 5.
*/
let x = 1;
for (let i = 99; i >= 0; i--) {
		if (x%3 === 0 && x%5 === 0) {
		console.log("FizzBuzz");
		x += 1;
		}
		if (x%3 === 0) {
		console.log("Fizz");
		x += 1;
	}
		if (x%5 === 0) {
		console.log("Buzz");
		x += 1;
	}
		if (x <= 100) {
		console.log(x);
		x += 1;
	}
};

/*
Шахматная доска

Напишите программу, создающую строку, содержащую решётку 8х8,
в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #.
 В результате должна получиться шахматная доска.

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

Когда справитесь, сделайте размер доски переменным,
чтобы можно было создавать доски любого размера.
*/

let x = "# ";
let y = " #";
let z = 8;
for (let i = (z-3)/2; i >= 0; i--) {
	x += "# ";
	y += " #";
}
for (let i = z - 1; i >= 0; i--) {
	if (i%2 !== 0) {
		console.log(x);
	}
	if (i%2 === 0) {
		console.log(y);
	}
};
//variant2
let x = "# ";
let y = " #";
let z = 8;
for (let i = 0; x.length <= z-1; i++) {
	x += "# ";
	y += " #";
}
for (let i = z - 1; i >= 0; i--) {
	if (i%2 !== 0) {
		console.log(x);
	}
	if (i%2 === 0) {
		console.log(y);
	}
};



