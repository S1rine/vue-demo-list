const DAMAINCONFIG = require('./../../config/index')

export default {
  PLAT_NAME: DAMAINCONFIG.PLAT_NAME,
  APIURL: process.env.NODE_ENV === 'development' ? '/api' : DAMAINCONFIG.BASE_API,
  CONFIG: {
    CODE_SUCCESS: 200, // 成功返回状态码
  },
  TOP_SONG_TYPE: {
    '全部': 0,
    '华语': 7,
    '欧美': 96,
    '日本': 8,
    '韩国': 16
  }
}
