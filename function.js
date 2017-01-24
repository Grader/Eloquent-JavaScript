//Напишите функцию min, 
//принимающую два аргумента, и возвращающую минимальный из них
const min = (a, b) => {
	if (a > b) {
		return b;
	}
	if (a < b) {
		return a;
	}
};
console.log(min(5, 12))
console.log(min(44, 34))
console.log(min(4, 10))
//Variant 2
const min = (a, b) => {
	if (a > b) {
		return b;
	}
	else {
		return a;
	}
};
console.log(min(5, 12))
console.log(min(44, 34))
console.log(min(4, 10))
//variant 3
const min = (a, b) => {
	if (a > b) return b;
	else return a;
};
console.log(min(5, 12))
console.log(min(44, 34))
console.log(min(4, 10))

/*Определение четности числа
    Ноль чётный.
    Единица нечётная.
    У любого числа N чётность такая же, как у N - 2.

Напишите рекурсивную функцию isEven согласно этим правилам.
Она должна принимать число и возвращать булевское значение
*/
const isEven = (x) => {
	if (x < 0) {
		x = Math.abs(x);
	}
	if (x < 2) {
		if (x === 0) {
			return console.log ("true");
		}
		else if (x === 1) {
			return console.log ("false");
		}
	}
	return isEven(x - 2);
};
isEven(25);
isEven(20);
isEven(16);
isEven(15);

/*
Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке
*/
const countBs = (str) => {
	const iter = (i, acc) => {
		if (i > str.length - 1) {
			return acc;
		}
		const newAcc = str.charAt(i) === 'B' ? acc + 1 : acc;
		return iter(i + 1, newAcc);
	}
	return iter(0, 0);
}
console.log(countBs('BarBara'));
console.log(countBs('garBaraBB'));
console.log(countBs('BBarBarassB B dB'));

const countChar = (str, symb) => {
	const iter = (i, acc) => {
		if (i > str.length - 1) {
			return acc;
		}
		const newAcc = str.charAt(i) === symb ? acc + 1 : acc;
		return iter(i + 1, newAcc);
	}
	return iter(0, 0);
}
console.log(countChar('BarBara', 'a'));
console.log(countChar('garBaraBB', 'B'));
console.log(countChar('BBarBarassB B dB', 'r'));
