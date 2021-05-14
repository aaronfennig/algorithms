var arr1 = [-90,-19,0,2,12,29,33,190,320];

function iBS(arr, num){
    low = 0
    high = arr.length -1
    while (low < high){
        mid = Math.floor((low + high)/2)
        console.log(low, mid, high)
        if (num == arr[mid]){
            return mid
        }
        else if (num < arr[mid]){
            low = 0
            high = mid -1
        }
        else{
            low = mid +1
        }
    }
    return false
}
console.log(iBS(arr1, 5))//              => false
console.log(iBS(arr1, 12))//             => 4
console.log(iBS(arr1, 0))//              => 2
console.log(iBS(arr1, 190))//            => 7
