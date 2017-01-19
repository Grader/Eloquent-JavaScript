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