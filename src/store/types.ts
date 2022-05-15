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
