function less(v, w) {
  return v < w
}

function exch(a, i, j) {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}

function selection(a) {
  const n = a.length
  let min
  for (let i = 0; i < n; i++) {
    min = i
    for (let j = i + 1; j < n; j++) {
      if (less(a[min], a[j])) min = j
    }
    exch(a, i, min)
  }
}

function insertion(a) {
  const n = a.length
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
      exch(a, j, j - 1)
    }
  }
}

function shell(a) {
  const n = a.length
  let h = 1
  while (h < n / 3) h = 3 * h + 1 // 4 13 40 121
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && less(a[j], a[j - h]); j -= h) exch(a, j, j - h)
    }
    h = Math.floor(h / 3)
  }
}

// 自顶向下的归并排序
function mergeTd(a) {
  const n = a.length
  sort(a, 0, n - 1)

  function merge(a, lo, mid, hi, aux) {
    if (a[mid] < a[mid + 1]) return
    let i = lo,
      j = mid + 1
    for (let k = lo; k <= hi; k++) aux[k] = a[k]

    for (let k = lo; k <= hi; k++) {
      if (i > mid) a[k] = aux[j++]
      else if (j > hi) a[k] = aux[i++]
      else if (less(aux[j], aux[i])) a[k] = aux[j++]
      else a[k] = aux[i++]
    }
  }

  function sort(a, lo, hi) {
    if (lo >= hi) return
    const aux = []
    const mid = Math.floor(lo + (hi - lo) / 2)
    sort(a, lo, mid)
    sort(a, mid + 1, hi)
    merge(a, lo, mid, hi, aux)
  }
}

// 自底向上的归并排序
function mergeBu(a) {
  const n = a.length
  const aux = []
  for (let sz = 1; sz < n; sz += sz) {
    for (let lo = 0; lo < n - sz; lo += sz + sz) {
      merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, n - 1), aux)
    }
  }

  function merge(a, lo, mid, hi, aux) {
    let i = lo,
      j = mid + 1
    for (let k = lo; k <= hi; k++) aux[k] = a[k]

    for (let k = lo; k <= hi; k++) {
      if (i > mid) a[k] = aux[j++]
      else if (j > hi) a[k] = aux[i++]
      else if (less(aux[j], aux[i])) a[k] = aux[j++]
      else a[k] = aux[i++]
    }
  }
}

function quick(a) {
  sort(a, 0, a.length - 1)

  function sort(a, lo, hi) {
    if (hi <= lo) return
    const j = partition(a, lo, hi)
    sort(a, lo, j - 1)
    sort(a, j + 1, hi)
  }

  // 普通切分
  function partition(a, lo, hi) {
    let i = lo,
      j = hi + 1
    let v = a[lo]
    while (true) {
      while (less(a[++i], v)) if (i === hi) break
      while (less(v, a[--j])) if (j === lo) break
      if (i >= j) break
      exch(a, i, j)
    }
    exch(a, j, lo)
    return j
  }
}

// 三向切分的快排
function quick3way(a) {
  sort(a, 0, a.length - 1)

  function sort(a, lo, hi) {
    if (hi <= lo) return
    let lt = lo,
      i = lo + 1,
      gt = hi
    let v = a[lo]
    while (i <= gt) {
      if (a[i] < v) exch(a, lt++, i++)
      else if (a[i] > v) exch(a, i, gt--)
      else i++
    }
    sort(a, lo, lt - 1)
    sort(a, gt + 1, hi)
  }
}

const a = [3, 1, 5, 4, 2]
quick3way(a) // a?
