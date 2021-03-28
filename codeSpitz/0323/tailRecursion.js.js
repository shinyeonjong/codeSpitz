const sum = arr => _sum(arr, arr.length - 1)
const _sum = (arr, index, accumulator = 0) => index > 0
    ? _sum(arr, index - 1, accumulator + arr[index])
    : accumulator + arr[index]
sum([1, 2, 3, 4, 5, 6])