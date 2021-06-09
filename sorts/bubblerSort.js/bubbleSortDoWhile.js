arr1 = [15,38,2,86,945,32,83,56,27,38,79]

long_arr = () =>{
    let arr = []
    for (let i = 0; i <= 100000; i++){
        arr.push(Math.floor(Math.random() * 100000))
    }
    return arr
}
test_arr = long_arr()


function doWhileBubbleSort(arr){
    count = 0
    do{
        var swapping = false
        for (let i = 0; i <= arr.length -1 -count; i++){
            if (arr[i+1] < arr[i]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapping = true
            }
        }
    }
    while(swapping == true)
    return arr
}
console.log(doWhileBubbleSort(test_arr))