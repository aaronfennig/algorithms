var arr = [-90,-19,0,2,12,29,33,190,320];

function rBS(anArr, num, max, min){
    mid = Math.floor((max + min)/2)
    console.log(min, mid, max)
    if(max > min)
        return false
    else{
        if(num == anArr[mid]){
        return mid
        }
        else if(num < anArr[mid]){
            return rBS(anArr, num, mid-1, 0)
        }
        else if(num > anArr[mid]){
            return rBS(anArr, num, max, mid+1)
        }
    }
}

console.log(rBS(arr, 5, arr.length-1, 0))
console.log(rBS(arr, 12, arr.length -1, 0 ))
console.log(rBS(arr, 0, arr.length -1, 0))
console.log(rBS(arr, 190, arr.length-1, 0))
