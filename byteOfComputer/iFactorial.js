function iFactorial(num){
    for (let i = 1; i <= num; i++){
        if (i == 1){
            var sum = 1;
        }
        else{
            sum *= i;
        }
    }
    return sum;
}
console.log(iFactorial(5));

// official solution

function iFactorial(num){
    let multiplier = 1;
    for (let i = 1; i <= num; i++){
            multiplier *= i;
    }
    return multiplier;
}
console.log(iFactorial(5));