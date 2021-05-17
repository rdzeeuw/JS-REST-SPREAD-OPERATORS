// Functie 1: Rest Operator: meerder cijfers optellen

const sum = function(...args){
    return args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
}

console.log(sum(1,2,3,4,5,6));

// functie 2: Spread Operator: array optellen

const sum2 = function(num1, num2, num3) {
    return num1 + num2 + num3;
}

const numbers = [1,2,3];

console.log(sum2(...numbers));