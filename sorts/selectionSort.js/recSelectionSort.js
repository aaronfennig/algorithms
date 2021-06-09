arr1 = [15,38,2,86,945,32,83,56,27,38,79,1]

long_arr = () =>{
    let arr = []
    for (let i = 0; i <= 100000; i++){
        arr.push(Math.floor(Math.random() * 100000))
    }
    return arr
}
test_arr = long_arr()

function selectionSort(arr, idx){
    let min = idx
    if (idx == arr.length -1){
        return arr
    }
    else{
        for (i = idx; i <= arr.length-1; i++){
            console.log(i)
            if (arr[i] < arr[min]){
                min = i
            }
        }
        let temp = arr[idx]
        arr[idx] = arr[min]
        arr[min] = temp
        console.log("idx is:", idx,arr)
        return selectionSort(arr, idx +1)
    }
}
console.log(selectionSort(arr1, 0))