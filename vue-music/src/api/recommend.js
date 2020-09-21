import {
  getAction
} from '@/api/api.js'

const getHighQualityPlayList = (params) => getAction('/top/playlist/highquality', params)
const getPlayList = (params) => getAction('/top/playlist/', params)

export {
  getPlayList,
  getHighQualityPlayList
}
