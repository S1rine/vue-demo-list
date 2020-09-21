import {
  getAction
} from '@/api/api'

const search = (params) => getAction('/search', params)

export {
  search
}
