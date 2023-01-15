import axios from 'axios'
import { baseURL, TIMEOUT } from './config'

class WYRequest {
  constructor(baseURL, TIMEOUT) {
    this.instance = axios.create({
      baseURL,
      TIMEOUT
    })
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功')
        return config
      },
      (err) => {
        console.log('全局请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功')

        return res
      },
      (err) => {
        console.log('全局响应失败')
        return err
      }
    )
  }
  request(config) {
    return new Promise((reslove, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          // console.log(res.data)
          reslove(res.data)
        })
        .catch((err) => {
          console.log(err, '错误')
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new WYRequest(baseURL, TIMEOUT)
