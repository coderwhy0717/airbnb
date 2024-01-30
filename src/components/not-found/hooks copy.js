/**
 * first
 * cvs: canvas的ref
 * videoRef: 需要画的视频或者图片ref实例
 * src
 */

export const coverFn = (cvs, src, type, number = 0.5) => {
  // ctx : cvs 的 canvas画板
  try {
    const ctx = cvs.current.getContext('2d')
    let newInstance =
      type === 'video'
        ? document.createElement('video')
        : type === 'img'
        ? new Image()
        : null
    if (!newInstance) {
      console.log('bba')
      return
    }

    // newInstance.setAttribute('crossorigin', 'anonymous')
    // const fn = () => {
    //   return ctx.drawImage(newInstance, 0, 0, width, height)
    // }

    console.log(newInstance, 'img')
    newInstance.src = src
    // let w = 100
    // let h = 150
    // const fn = () => {}
    //`${type === 'img'? newInstance.onload : newInstance.onload}`
    newInstance.onload = () => {
      const width =
        type === 'video'
          ? newInstance.videoWidth * number
          : newInstance.width * number
      const height =
        type === 'video'
          ? newInstance.videoHeight * number
          : newInstance.height * number

      cvs.current.width = width
      cvs.current.height = height
      ctx.drawImage(newInstance, 0, 0, width, height)
      // ctx.font = 100 + "px/1 Tahoma,Helvetica,Arial,'宋体',sans-serif"
      //   ctx.fillStyle = 'red'

      //   ctx.fillText('零三的笔记', 10 * number, (h-40)*number)
      //   ctx.fillText('123abc', 100, 100)

      //   ctx.scale(1, 1) 0.4
      ctx.scale(number * 0.625, number * 2)
      // let imgSrc = cvs.current.toDataURL('image/png')
      // let imgDom = document.createElement('img')
      // imgDom.src = imgSrc
      // document.body.appendChild(imgDom)
    }
    console.log('cccc')
  } catch (error) {
    console.log(error, '报错')
  }
}
