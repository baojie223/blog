function isObject(x) {
  return typeof x === 'object' && !!x
}

function reactive(data) {
  if (isObject(data)) {
    const keys = Object.keys(data)
    for (let key of keys) defineReactive(data, key)
  }
  return data
}

function defineReactive(data, key) {
  let val = data[key]
  const dep = new Dep()
  Object.defineProperty(data, key, {
    get() {
      dep.depend(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        dep.notify()
      }
      val = newVal
    },
  })

  if (isObject(val)) {
    reactive(val)
  }
}

class Dep {
  static target = null

  constructor() {
    this.deps = new Set()
  }

  depend(watcher) {
    this.deps.add(watcher)
  }

  notify() {
    for (let dep of this.deps) {
      dep.update()
    }
  }
}

// Watcher
const targetStack = []

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

function popTarget() {
  Dep.target = targetStack.pop()
}

class Watcher {
  constructor(getter) {
    this.getter = getter

    this.get()
  }

  get() {
    pushTarget(this)
    this.value = this.getter()
    popTarget()
    return this.value
  }

  update() {
    this.get()
  }
}

// 使用
const data = reactive({
  msg: 'baojie',
})
const app = document.createElement('div')
app.id = 'app'
document.body.appendChild(app)
const btn = document.createElement('button')
btn.onclick = (e) => {
  data.msg = JSON.stringify(e)
}
document.body.appendChild(btn)

new Watcher(() => {
  document.getElementById('app').innerHTML = `hello ${data.msg}`
})
