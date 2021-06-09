arr1 = [15,38,2,86,945,32,83,56,27,38,79,1]

long_arr = () =>{
    let arr = []
    for (let i = 0; i <= 100000; i++){
        arr.push(Math.floor(Math.random() * 100000))
    }
    return arr
}
test_arr = long_arr()

insertionSort = (arr) => {
    for (let i = 1; i <= arr.length -1; i++){
        element = arr[i]
        j = i
        while(j > 0 && arr[j-1] > element){
            arr[j] = arr[j-1]
            arr[j-1] = element
            j--
        }
    }
    return arr
}
console.log(insertionSort(test_arr))