// 自己封装xhr
const request = ({ url, method, data, headers, responseType }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = (event) => {
      switch (xhr.readyState) {
        case 0:
          console.log('请求未初始化')
          break
        case 1:
          console.log('OPENED')
          break
        case 2:
          console.log('HEADERS_RECEVIED')
          break
        case 3:
          console.log('LOADING')
          break
        case 4:
          if (xhr.status === 200 || xhr.status === 304) {
            resolve(xhr.responseText)
          }
          console.log('DONE')
          break
      }
    }

    xhr.ontimeout = () => reject('timeout')

    xhr.onerror = () => reject('error')

    xhr.open(method, url, true)

    xhr.timeout = 6000

    xhr.responseType = responseType
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key])
    }

    xhr.send(data)
  })
}
