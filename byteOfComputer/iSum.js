//RECURSION PRACTICE

function rSum(num){
    if (num ===1){
        return 1;    //this is the base case. if a recursive call has no base case it will overflow (stack overflow)
    }
    else{
        console.log(num)
        return num + rSum(num -1)
    }
}

console.log(rSum(21));
console.log(rSum(5));

// same problem solved through an iterative approach

function iSum(num){
    sum = 0;
    for (var i = num; i >=1; i--){
        sum += i
        console.log("sum is ", sum )
    }
    return sum;
}
console.log(iSum(5));

