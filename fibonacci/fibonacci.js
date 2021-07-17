const fibonacci = function(number) {

    number = Number(number);

    if (typeof(number) === 'number' && number > 0) {
        let fibonacciArr = [1, 1];
    
        for (let i = 1; i < number - 1 ; i++) {
            fibonacciArr[i+1] = fibonacciArr[i-1] + fibonacciArr[i];
        }
        return fibonacciArr[number-1];

    }
    else return "OOPS";


};

module.exports = fibonacci;
