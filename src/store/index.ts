import { defineStore } from 'pinia'
import {
  getHotPlaylistCategory,
  getHotRecommends,
  getHomepageNewDiscs,
  getRankings,
  getToplist,
} from '@/network/discover'
import {
  HotPlaylistCategory,
  HotRecommends,
  NewDiscs,
  playList,
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
    playlist: new Array<playList>(),
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
    allPlaylistCategory: [],
    allPlaylist: [],
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
