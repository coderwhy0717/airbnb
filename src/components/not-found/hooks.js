/**
 * 获取封面封装
 * @param cvs canvas的ref实例
 * @param src 图片地址
 * @param type 类型
 * @param w width 设置封面的元素实例的宽 视频宽
 * @param h height 设置封面的实例的高
 * @param number 几倍
 */
export const coverFn = (cvs, src, w, h, number = 0.4) => {
  // ctx : cvs 的 canvas画板
  try {
    const ctx = cvs.current.getContext('2d')
    let newInstance = new Image()
    //   type === 'video'
    //     ? document.createElement('video')
    //     : type === 'img'
    //     ? new Image()
    //     : null
    // if (!newInstance) {
    //   console.log('bba')
    //   return
    // }

    newInstance.setAttribute('crossorigin', 'anonymous')

    newInstance.src = src
    let scale = window.devicePixelRatio // Change to 1 on retina screens to see blurry canvas.
    console.log(Math.floor(1 * scale))

    newInstance.onload = () => {
      const width = w * number
      const height = h * number

      cvs.current.width = width
      cvs.current.height = height

      const local = calculate(newInstance.width, newInstance.height)
      console.log('first', local)

      console.log(width)
      console.log(height)

      // newInstance.style.objectFit = 'cover'

      // console.dir(ctx, 'ctx')
      // ctx.fill()
      ctx.drawImage(newInstance, 0, 0, width, height)

      console.dir(newInstance, 'newInstance.style')

      ctx.font = 100 + "px/1 Tahoma,Helvetica,Arial,'宋体',sans-serif"
      ctx.fillStyle = 'red'

      ctx.fillText('aa的笔记', 10 * number, (h - 40) * number)
      ctx.fillText('123abc', 100, 100)

      //   ctx.scale(1, 1) 0.4
      // ctx.scale(number * 0.625, number * 2)
      // ctx.scale(2, 2)
      // let imgSrc = cvs.current.toDataURL('image/png')
      // let imgDom = document.createElement('img')
      // imgDom.src = imgSrc
      // document.body.appendChild(imgDom)
      console.dir(ctx, 'ctx')
    }
    // 计算出图片画在canvas中的四个参数
    function calculate(pw, ph) {
      let px = 0
      let py = 0
      if (pw < w && ph < h) {
        px = 0.5 * w - 0.5 * pw
        py = 0.5 * h - 0.5 * ph
      } else if (ph / pw > h / w) {
        let uu = ph
        ph = h
        pw = (pw * h) / uu
        px = 0.5 * w - 0.5 * pw
      } else {
        let uu = pw
        pw = w
        ph = (ph * pw) / uu
        py = 0.5 * h - 0.5 * ph
      }
      return { px, py, pw, ph }
    }
  } catch (error) {
    console.log(error, '报错')
  }
}
