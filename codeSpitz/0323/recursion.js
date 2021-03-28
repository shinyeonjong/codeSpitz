const sum = arr => _sum(arr, arr.length - 1)
const _sum = (arr, index) => index > 0
    ? arr[index] + _sum(arr, index - 1)
    : arr[index]
sum([1, 2, 3, 4, 5, 6])