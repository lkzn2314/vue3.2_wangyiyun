import { defineStore } from 'pinia'

export const recommendStore = defineStore('recommendStore', {
  state: () => ({
    hotRecommends: [],
    newDiscs: [],
    upRankings: {},
    newRankings: {},
    originRankings: {},
  }),
  getters: {},
  actions: {},
})

export const musiclistStore = defineStore('musiclistStore', {
  state: () => ({
    toplist: [],
    currentIndex: 0,
    playlist: {},
  }),
  getters: {},
  actions: {},
})

export const playlistStore = defineStore('playlistStore', {
  state: () => ({
    hotPlaylistCategory: [],
    allPlaylistCategory: [],
    allPlaylist: [],
    total: 0,
    currentCat: '全部',
  }),
  getters: {},
  actions: {},
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
