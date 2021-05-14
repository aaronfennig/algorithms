function rFibonacci(num){
    if (num === 1 || num === 2){
        return 1
    }
    else{
        console.log("rfib(num-1) is **", rFibonacci(num-1), "**and rfib(num-2) is **", rFibonacci(num-2), "**");
        return rFibonacci(num-1) + rFibonacci(num-2)
    }
}
console.log(rFibonacci(10));