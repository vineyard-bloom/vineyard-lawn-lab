const promiseRequest = require('./request-promise')

export class WebClient {
  url: string

  constructor(url: string) {
    this.url = url;
  }

  private request(method, path, params, data?) {
    return promiseRequest({
      url: this.url + '/' + path,
      json: true,
      qs: params,
      body: data,
    })
  }

  get(path: string, params?: any) {
    let paramString = ''

    if (params && Object.keys(params).length > 0) {
      const array = []
      for (let i in params) {
        array.push(i + '=' + params[i])
      }
      paramString = '?' + array.join('&')
    }

    return this.request('get', path, params)
  }

  post(path: string, data: any) {
    return this.request('post', path, data)
  }

  put(path: string, data: any) {
    return this.request('put', path, data)
  }

}