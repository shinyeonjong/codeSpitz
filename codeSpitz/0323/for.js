const sum = (arr, accumulator) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        accumulator += arr[i]
    }
    return accumulator
}
sum([1,2,3,4,5,6], 0)
