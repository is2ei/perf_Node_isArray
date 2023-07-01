const array = []

console.time('perf')

for (let i = 0; i < 1000000000; i++) {
  array instanceof Array
}

console.timeEnd('perf')
