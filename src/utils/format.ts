// 请求图片格式化尺寸
export function formatImgSize(imgUrl: string, size = 140) {
  return `${imgUrl}?param=${size}x${size}`
}

// 请求歌曲流媒体
export function getSongPlay(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
