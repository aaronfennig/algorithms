arr1 = [15,38,2,86,945,32,83,56,27,38,79]

long_arr = () =>{
    let arr = []
    for (let i = 0; i <= 100000; i++){
        arr.push(Math.floor(Math.random() * 100000))
    }
    return arr
}
test_arr = long_arr()

function bubbleSort(arr){
    for (let i = 0; i <= arr.length-1; i++){
        for (let j = 0; j <=arr.length -1 -i; j++){
            if (arr[j+1] < arr[j]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort(test_arr))


