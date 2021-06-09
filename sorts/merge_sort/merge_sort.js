long_arr = () =>{
    let arr = []
    for (let i = 0; i <= 100000; i++){
        arr.push(Math.floor(Math.random() * 100000))
    }
    return arr
}
test_arr = long_arr()

const merge_arrays = (arr1, arr2) =>{
    const ret_arr = []

    while(arr1.length && arr2.length){
        ret_arr.push(arr1[0] > arr2[0] ? arr2.shift(): arr1.shift())
    }
    while(arr1.length){
        ret_arr.push(arr1.shift())
    }
    while(arr2.length){
        ret_arr.push(arr2.shift())
    }
    return ret_arr
}

const merge_sort = (arr) => {
    if (arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const sorted_left = merge_sort(left)
    const sorted_right = merge_sort(right)
    return merge_arrays(sorted_left, sorted_right)
}
console.log(merge_sort(test_arr))


