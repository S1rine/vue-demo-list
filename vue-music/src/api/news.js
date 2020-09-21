import {
  getAction
} from '@/api/api.js'

const getNewSong = (params) => getAction('/top/song', params)

export {
  getNewSong,
}
