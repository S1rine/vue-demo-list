import axios from 'axios'
import {
  Message
} from 'element-ui'
import GLOBAL from '@/utils/common'
import router from '@/router'

//创建axios实例
const request = axios.create({
  timeout: 5000, //请求超时时间
  withCredentials: true,
})

request.interceptors.response.use(
  (response) => {
    if (response) {
      if (
        response.data.code != GLOBAL.CONFIG.CODE_SUCCESS &&
        response.data.code != GLOBAL.CONFIG.CODE_VERIFY
      ) {
        Message({
          type: 'error',
          message: response.data.msg,
        })
      }
      if (response.data.code == GLOBAL.CONFIG.CODE_USER_CONFLICT) {
        router.push({
          path: '/'
        })
        location.reload()
      }
      return response.data
    } else {
      return Message({
        type: 'error',
        message: '网路错误，请稍后再试！',
      })
    }
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default request
