import {
  getAction
} from '@/api/api.js'

const getAllMv = (params) => getAction('/mv/all', params)

export {
  getAllMv
}
