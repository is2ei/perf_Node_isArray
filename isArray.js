const array = []

console.time('perf')

for (let i = 0; i < 1000000000; i++) {
  Array.isArray(array)
}

console.timeEnd('perf')
