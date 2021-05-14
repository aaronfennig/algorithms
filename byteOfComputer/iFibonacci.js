function iFibonacci1(num){
    let seq = [0,1]
    for (let i = 2; i<= num; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }
    return seq[num]
}
console.log(iFibonacci1(10));

//given solution

function iFibonacci2(num){
    let seq = [0,1]
    for (let i = 0; i<= num -1; i++){
        seq.push(seq[0] + seq[1]);
        seq.shift();
    }
    return seq[0];
}
console.log(iFibonacci2(10));