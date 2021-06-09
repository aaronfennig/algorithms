arr1 = [15,38,2,86,945,32,83,56,27,38,79,1]

long_arr = () =>{
    let arr = []
    for (let i = 0; i <= 100000; i++){
        arr.push(Math.floor(Math.random() * 100000))
    }
    return arr
}
test_arr = long_arr()

function selectionSort(arr){
    for (let i = 0; i <= arr.length -1; i++){
        let min = i
        for (let j = i + 1; j <= arr.length -1; j++){
            if (arr[min] > arr[j]){
                min = j
                // console.log(min)
            }
        }
        if (min != i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
            // console.log(arr)
        }
    }
    return arr
}
console.log(selectionSort(test_arr))