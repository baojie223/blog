class UF {
  constructor(n) {
    this.count = n
    this.id = new Array(n).fill(null).map((_, index) => index)
  }

  connected(p, q) {
    return this.find(p) === this.find(q)
  }

  // quick-find, 平方级

  // 1
  // find(p) {
  //   return this.id[p]
  // }

  // N
  // union(p, q) {
  //   const pId = this.find(p)
  //   const qId = this.find(q)
  //   if (pId === qId) return
  //   for (let i = 0; i < this.id.length; i++) {
  //     if (this.id[i] === pId) this.id[i] = qId
  //   }
  //   this.count--
  // }

  // quick-union, 最坏情况下是平方级的, union永远是线性级的, 是对quick-find的改进
  // 树的高度
  find(p) {
    while (p !== this.id[p]) p = this.id[p]
    return p
  }
  // 树的高度
  union(p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)
    if (pRoot === qRoot) return
    this.id[pRoot] = qRoot
    this.count--
  }
}

// 加权quick-union算法
class WeightedQuickUnionUF {
  constructor(n) {
    this.count = n
    this.id = new Array(n).fill(null).map((_, index) => index)
    this.sz = new Array(n).fill(null).map((_, index) => index)
  }

  connected(p, q) {
    return this.find(p) === this.find(q)
  }

  // lgN
  find(p) {
    const nodes = []
    while (p !== this.id[p]) {
      nodes.push(p)
      p = this.id[p]
    }
    for (let node of nodes) this.id[node] = p
    return p
  }

  // lgN
  union(p, q) {
    const i = this.find(p),
      j = this.find(q)
    if (i === j) return
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j
      this.sz[j] += this.sz[i]
    } else {
      this.id[j] = i
      this.sz[i] += this.sz[j]
    }
    this.count--
  }
}

function solve(n, pairs) {
  const uf = new WeightedQuickUnionUF(n)
  for (let pair of pairs) {
    const [p, q] = pair
    if (uf.connected(p, q)) continue
    uf.union(p, q)
  }
  return uf.count
}

solve(10, [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [8, 9],
  [5, 0],
  [7, 2],
  [6, 1],
  [1, 0],
  [6, 7],
])
