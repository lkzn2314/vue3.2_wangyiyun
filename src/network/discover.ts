import request from './request'

// 轮播图
export function getBanners() {
  return request({
    url: '/banner',
  })
}

// 热门推荐
export function getHotRecommends(limit?: number) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

// 热门歌单分类
export function getHotPlaylistCategory() {
  return request({
    url: '/playlist/hot',
  })
}

// 首页新碟上架
export function getHomepageNewDiscs() {
  return request({
    url: '/album/newest',
  })
}

// 新碟上架
/* 可选参数 :
limit: 取出数量 , 默认为 50
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
type : new:全部 hot:热门,默认为 new
year : 年,默认本年
month : 月,默认本月 */
export function getNewDiscs(limit = 50, page = 1, type: string, area = 'ALL') {
  return request({
    url: '/top/album',
    params: {
      offset: (page - 1) * limit,
      limit,
      type,
      area,
    },
  })
}

// 榜单详情（此为新接口，与获取歌单详情接口一致）
export function getRankings(id: number) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}

// 歌手
export function getArtists(limit: number) {
  return request({
    url: '/artist/list',
    params: {
      limit,
    },
  })
}

// 所有榜单
export function getToplist() {
  return request({
    url: '/toplist',
  })
}

// 歌单评论
export function getPlaylistComment(playlistId: any) {
  return request({
    url: '/comment/playlist',
    params: {
      id: playlistId,
    },
  })
}

// 所有歌单
/* 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
limit: 取出歌单数量 , 默认为 50
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值 */
export interface allPlaylist {
  offset: number
  limit: number
  cat: string
  order: string
}

export function getAllPlaylist(
  params: allPlaylist = {
    offset: 1,
    limit: 50,
    cat: '全部',
    order: 'hot',
  }
) {
  return request({
    url: '/top/playlist',
    params: {
      offset: (params.offset - 1) * params.limit,
      limit: params.limit,
      cat: params.cat,
      order: params.order || 'hot',
    },
  })
}

// 所有歌单分类
export function getAllPlaylistCategory() {
  return request({
    url: '/playlist/catlist',
  })
}
