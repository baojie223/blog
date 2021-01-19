class Bromise {
  constructor(executor) {
    executor(this.resolve, null)
  }

  resolve() {
    this.onResolve()
  }

  then(onResolve, onReject) {
    this.onResolve = onResolve
    this.onReject = onReject
  }
}