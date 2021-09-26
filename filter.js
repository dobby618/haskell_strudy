function odd(n) {
  return n % 2 == 1
}

// 再帰関数を使わない場合
function filter(array, check) {
  passed = []
  for(let element of array) {
    if(check(element)) passed.push(element)
  }
  return passed
}

// 再帰関数を使う場合
function filter2(array, check) {
  if(array.length <= 0) return []

  x = array.slice(0, 1)
  xs = array.slice(1)

  if(check(x[0])) {
    return x.concat(filter2(xs, check))
  } else {
    return filter2(xs, check)
  }
}

array = [1, 10, 3]
console.log(filter(array, odd)) // => [1, 3]
