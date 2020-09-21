import {
  getAction
} from '@/api/api'

const bannerList = (params) => getAction('/banner', params)
const personalizedList = (params) => getAction('/personalized', params)
const newSongList = () => getAction('/personalized/newsong')
const getSong = (params) => getAction('/song/url', params)
const getMvList = (params) => getAction('/personalized/mv', params)

export {
  bannerList,
  personalizedList,
  newSongList,
  getSong,
  getMvList
}
