function rFactorial(num){
    if (num === 1){
        return 1;
    }
    else{
        return num * rFactorial(num-1);
    }
}
console.log(rFactorial(5));



// Stack Diagram

// rFactorial(1)    returns 1  top of the stack
// rFactorial(2)    returns 2
// rFactorial(3)    returns 3
// rFactorial(4)    returns 4
// rFactorial(5)    returns 5  bottom of the stack
// so, 1*2*3*4*5 = 120
