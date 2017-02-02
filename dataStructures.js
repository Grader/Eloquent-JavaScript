//Сумма диапазона
const range = (start, end, step) => {
    if (isNaN(step)) {
    	step = 1;
    }
    let result = [];
    for (let i = start; i <= end; i+=step) {
        result.push(i);
    }
    return result;
};
console.log(range(1, 5, 1));  