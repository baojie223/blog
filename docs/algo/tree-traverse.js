const exec = (x) => {}

// Morris前序遍历
const morrisInorder = (root) => {
  let pre = null,
    cur = root
  while (cur) {
    if (!cur.left) {
      exec(cur.val)
      cur = cur.right
      continue
    }
    pre = cur.left
    while (pre.right && pre.right !== cur) {
      pre = pre.right
    }
    if (!pre.right) {
      pre.right = cur
      exec(cur.val)
      cur = cur.left
    } else {
      pre.right = null
      cur = cur.right
    }
  }
}

// Morris中序遍历
const morrisInorder = (root) => {
  let pre = null,
    cur = root
  while (cur) {
    if (!cur.left) {
      exec(cur.val)
      cur = cur.right
      continue
    }
    pre = cur.left
    while (pre.right && pre.right !== cur) {
      pre = pre.right
    }
    if (!pre.right) {
      pre.right = cur
      cur = cur.left
    } else {
      pre.right = null
      exec(cur.val)
      cur = cur.right
    }
  }
}
