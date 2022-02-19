function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (bitCount(arr[j]) > bitCount(arr[j + 1])) {
                const cur = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = cur;
            }else  if (bitCount(arr[j]) === bitCount(arr[j + 1])){
                if(arr[j] > arr[j + 1]){
                    const cur = arr[j + 1]
                    arr[j + 1] = arr[j]
                    arr[j] = cur;
                }
            }
        }
    }
    return arr;
}

function bitCount (n) {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}

console.log(sortArray([7, 6, 15, 8]))
console.log(sortArray([7, 12, 10, 8]))
