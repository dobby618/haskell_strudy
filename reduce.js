function max(n, m) {
  if(n > m) {
    return n
  } else {
    return m
  }
}

// 再帰関数を使わない場合
function reduce(array, combine, start) {
  let current = start
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

// 再帰関数を使う場合
function reduce2(array, combine, start) {
  if(array.length <= 0) return start

  x = array.slice(0, 1)
  xs = array.slice(1)
  return combine(x[0], reduce2(xs, combine, start))
}

array = [1, 10, 3]
console.log(reduce(array, max, 0)) // => 10
