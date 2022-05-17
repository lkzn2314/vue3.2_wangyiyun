export interface HotRecommends {
  id: number
  name: string
  picUrl: string
  coverImgUrl: string
  playCount: number
  creator?: any
  artist?: any
}

export interface NewDiscs
  extends Pick<HotRecommends, 'id' | 'name' | 'picUrl' | 'artist'> {}

export interface HotPlaylistCategory
  extends Pick<HotRecommends, 'id' | 'name'> {}

export interface Rankings {
  id: number
  name: string
  coverImgUrl: string
  tracks: any
}

export interface Toplist {
  id: number
  coverImgUrl: string
  name: string
  updateFrequency?: string
  updateTime?: string
  subscribedCount?: number
  trackCount?: number
  playCount?: number
}

export interface PlayList {
  id: number
  name: string
  dt: number
  ar: { name: string }[]
  al: { picUrl: string }
}

export interface AllPlaylistCategorySubs {
  name: string
}
export interface AllPlaylistCategory {
  name: string
  subs: AllPlaylistCategorySubs[]
}

export interface AllPlaylist
  extends Pick<
    HotRecommends,
    'id' | 'name' | 'picUrl' | 'coverImgUrl' | 'playCount'
  > {}
