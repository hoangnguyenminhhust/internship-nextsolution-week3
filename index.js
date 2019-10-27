const arr = [3, 5, 7, 8, 4, 34, 634, 73, 4, -3000, 723, 436, 7, -5, 474, 57, 100004];
const min = arr.reduce((min, random, arr) => {
    while (min > random) min = random;
    return min
}, arr[0]);
const max = arr.reduce((max, random, arr) => {
    while (max < random) max = random;
    return max
}, arr[0]);
console.log('max: ', max, ', min: ', min)

// const arr = [3, 5, 7, 8, 4, 34, 634, 73, 4,-3000, 723, 436, 7, -5, 474, 57,100004]; const min = arr.reduce((min, random, arr) => { while (min > random) min = random;return min}, arr[0]) ; const max = arr.reduce((max, random, arr) => { while (max < random) max = random;return max}, arr[0]) ; console.log('max: ' , max ,  ', min: ' , min)