function increment(n) {
  return n + 1
}

// 再帰関数を使わない場合
function map(array, transform) {
  mapped = []
  for(let element of array) {
    mapped.push(transform(element))
  }
  return mapped
}

// 再帰関数を使う場合（自分で考えて書いた => 複雑になった…）
function map2(array, transform) {
  return recursion0(array, array.length, [], transform)
}

function recursion0(array, length, mapped, transform) {
  if(length <= 0) return

  mapped.push(recursion0(array, length - 1, mapped, transform))
  return mapped
}

// 再帰関数を使う場合（haskell の map の実装を見て書き直した）
function map3(array, transform) {
  if(array.length <= 0) return []

  x = array.slice(0, 1)
  xs = array.slice(1)
  return [transform(x[0])].concat(map2(xs, transform))
}

array = [1, 10, 3]
console.log(map(array, increment)) // => [2, 11, 4]
