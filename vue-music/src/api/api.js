import request from '@/utils/request'
import COMMON_GLOBAL from '@/utils/common'

//post
export function postAction(url, parameter) {
  return request({
    url: COMMON_GLOBAL.APIURL + url,
    method: 'post',
    data: parameter,
  })
}

//get
export function getAction(url, parameter) {
  return request({
    url: COMMON_GLOBAL.APIURL + url,
    method: 'get',
    params: parameter
  })
}
