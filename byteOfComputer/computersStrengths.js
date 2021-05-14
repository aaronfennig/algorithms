var arr = [24, 8, 23, 3];

function linearSearch(num, arr){
    for (var i = 0; i <= arr.length -1; i++){
        if(num == arr[i]){
            return [i, arr.length];
        }
    }
    return false;
}

console.log(linearSearch(8, arr));   // => 1
console.log(linearSearch(-99, arr)); // => false
