const sortByMarks = obj => Object.entries(obj)
    .filter(item => item[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0])

console.log(sortByMarks({"Java": 10, "Ruby": 80, "Python": 65}))
console.log(sortByMarks({"Hindi": 60, "Dutch": 93, "Greek": 71}))
console.log(sortByMarks({"C++": 50, "ASM": 10, "Haskell": 20}))
