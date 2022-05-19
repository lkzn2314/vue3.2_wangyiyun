import { defineStore } from 'pinia'
import {
  getHotPlaylistCategory,
  getHotRecommends,
  getHomepageNewDiscs,
  getRankings,
  getToplist,
  getAllPlaylist,
  getAllPlaylistCategory,
  AllPlaylistParams,
} from '@/network/discover'
import {
  AllPlaylist,
  AllPlaylistCategory,
  AllPlaylistCategorySubs,
  HotPlaylistCategory,
  HotRecommends,
  NewDiscs,
  PlayList,
  Rankings,
  Toplist,
} from './types'

export const useRecommendStore = defineStore('recommendStore', {
  state: () => ({
    hotRecommends: new Array<HotRecommends>(),
    newDiscs: new Array<NewDiscs>(),
    upRankings: {} as Rankings,
    newRankings: {} as Rankings,
    originRankings: {} as Rankings,
  }),
  getters: {},
  actions: {
    getHotRecommendsAction(limit: number) {
      getHotRecommends(limit).then((res: any) => {
        if (res.code === 200) {
          // console.log(res)
          this.hotRecommends = res.result
        }
      })
    },

    getHomepageNewDiscsAction() {
      getHomepageNewDiscs().then((res: any) => {
        if (res.code === 200) {
          // console.log(res)
          this.newDiscs = res.albums
        }
      })
    },

    getRankingAction(id: number) {
      getRankings(id).then((res: any) => {
        // console.log(res)
        switch (id) {
          case 3779629:
            this.newRankings = res.playlist
            break
          case 2884035:
            this.originRankings = res.playlist
            break
          case 19723756:
            this.upRankings = res.playlist
            break
          default:
        }
      })
    },
  },
})

export const useMusiclistStore = defineStore('musiclistStore', {
  state: () => ({
    toplist: new Array<Toplist>(),
    currentIndex: 0,
    playlist: new Array<PlayList>(),
  }),
  getters: {
    getToplistDetail(): Toplist {
      return this.toplist[this.currentIndex]
    },
  },
  actions: {
    getToplistAction() {
      getToplist().then((res: any) => {
        if (res.code === 200) {
          this.toplist = res.list
        }
      })
    },

    changeCurrentIndexAction(index: number) {
      this.currentIndex = index
    },

    getRankingDetailAction(playlistId: number) {
      getRankings(playlistId).then((res: any) => {
        // console.log('ranking', res)
        if (res.code === 200) {
          this.playlist = res.playlist?.tracks
        }
      })
    },
  },
})

export const usePlaylistStore = defineStore('playlistStore', {
  state: () => ({
    hotPlaylistCategory: new Array<HotPlaylistCategory>(),
    allPlaylistCategory: new Array<AllPlaylistCategory>(),
    allPlaylist: new Array<AllPlaylist>(),
    total: 0,
    currentCat: '全部',
  }),
  getters: {},
  actions: {
    getHotPlaylistAction() {
      getHotPlaylistCategory().then((res: any) => {
        if (res.code === 200) {
          // console.log(res)
          this.hotPlaylistCategory = res.tags
        }
      })
    },

    getAllPlaylistAction(params: AllPlaylistParams) {
      getAllPlaylist(params).then((res: any) => {
        if (res.code === 200) {
          this.allPlaylist = res.playlists
          this.total = res.total
        }
      })
    },

    changeCurrentCatAction(currentCat: string) {
      this.currentCat = currentCat
    },

    getAllPlaylistCategoryAction() {
      getAllPlaylistCategory().then((res: any) => {
        if (res.code === 200) {
          const categories = Object.entries(res.categories).map(
            ([key, value]) => ({
              name: value as string,
              subs: new Array<AllPlaylistCategorySubs>(),
            })
          )
          for (const item of res.sub) {
            categories[item.category].subs.push(item)
          }
          this.allPlaylistCategory = categories
        }
      })
    },
  },
})

export const playerStore = defineStore('playerStore', {
  state: () => ({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
    sequence: 0, //0 循环  1 随机  2 单曲
    lyric: [],
    lyricItemIndex: 0,
  }),
  getters: {},
  actions: {},
})
