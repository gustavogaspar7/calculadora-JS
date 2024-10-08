function calculadora(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            if (b === 0) {
                return 'Divisão por zero não é permitida';
            }
            return a / b;
        default:
            return 'Operação inválida';
    }
}

console.log(calculadora(5, 3, 'soma'));           
console.log(calculadora(5, 3, 'subtracao'));      
console.log(calculadora(5, 3, 'multiplicacao'));   
console.log(calculadora(5, 0, 'divisao'));         
console.log(calculadora(5, 3, 'modulo'));          