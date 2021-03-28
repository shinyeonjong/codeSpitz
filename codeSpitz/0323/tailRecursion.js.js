const arr = [1, 2, 3, 4, 5, 6]
const sum = arr => _sum(arr, arr.length - 1, 0)
const _sum = (arr, index, accumulator) => index > 0
    ? _sum(arr, index - 1, accumulator + arr[index])
    : accumulator + arr[index]
sum(arr)