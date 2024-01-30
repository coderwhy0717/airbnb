import React, { memo, useEffect, useRef } from 'react'

import { NotFoundWrapper } from './style'
import { coverFn } from './hooks'
import Localcache from '../../utils/cache'
const NotFound = memo(() => {
  const cvs = useRef()
  console.dir(cvs, 'cvs')

  const videoRef = useRef()
  const ctx = useRef()
  useEffect(() => {
    ctx.current = cvs.current.getContext('2d')

    // videoRef.current.src = require('../../asstes/img/video.mp4')
    videoRef.current.src =
      'http://a-image-demo.oss-cn-qingdao.aliyuncs.com/demo.mp4'
    console.dir(videoRef.current, 'cvs')

    let video = document.createElement('video')
    console.dir(video, 'video')

    video.src = require('../../asstes/img/video.mp4')
    // console.dir(vid)

    // img.onload = () => {
    //   cvs.current.width = videoRef.current.videoWidth * 0.4
    //   cvs.current.height = videoRef.current.videoHeight * 0.4
    //   ctx.current.drawImage(
    //     img,
    //     0,
    //     0,
    //     videoRef.current.videoWidth * 0.4,
    //     videoRef.current.videoHeight * 0.4
    //   )
    // }

    let setInter

    videoRef.current.addEventListener('play', function () {
      console.log('eeeeeee')
      // cvs.current.width = videoRef.current.videoWidth * 0.4
      // cvs.current.height = videoRef.current.videoHeight * 0.4
      if (setInter) return
      setInter = setInterval(() => {
        render(ctx.current)
        console.log(videoRef.current.currentTime, 'first')
      }, 12)
      console.dir(videoRef.current, 'cvs')
      // ctx.current.scale(1, 1)
      // videoRef.current.play()
    })

    cvs.current.addEventListener('click', function () {
      // 判断视频的状态 是否在播放还是在暂停
      if (videoRef.current.paused) {
        videoRef.current.play()
        return
      }
      // 暂停了 也要清空一下 定时器
      videoRef.current.pause()
      clearInterval(setInter)
      setInter = null
    })

    // videoRef.current.onpause = () => {
    //   console.log('pause')
    //   clearInterval(setInter)
    //   setInter = null
    // }

    // videoRef.current.onloadedmetadata = () => {
    //   console.log('abc')

    //   cvs.current.width = videoRef.current.videoWidth * 0.4
    //   cvs.current.height = videoRef.current.videoHeight * 0.4
    //   render(ctx.current)
    // }
    videoRef.current.onloadeddata = () => {
      console.log('cpa')
      let imgurl =
        'https://th.bing.com/th/id/R.84c068e18b0e5a875c9bd740f316ac0f?rik=5tqBWd3YtcIMFg&riu=http%3a%2f%2fpic.bizhi360.com%2fbpic%2f89%2f9689_1.jpg&ehk=I8fpveNtoP3fUX46xZMB2ZURco5Q1AkqzE%2bmCo0cyBQ%3d&risl=&pid=ImgRaw&r=0'
      imgurl = require('../../asstes/img/jn.jpg')
      const coverUrl = Localcache.getCache('coverUrl')
      if (coverUrl) {
        imgurl = coverUrl
      }
      // const img = new Image()
      // img.src = require('../../asstes/img/780.jpg')

      // img.onload = () => {
      //   cvs.current.width = videoRef.current.videoWidth * 0.4
      //   cvs.current.height = videoRef.current.videoHeight * 0.4
      //   ctx.current.drawImage(
      //     img,
      //     0,
      //     0,
      //     videoRef.current.videoWidth * 0.4,
      //     videoRef.current.videoHeight * 0.4
      //   )
      //   ctx.current.font = 100 + "px/1 Tahoma,Helvetica,Arial,'宋体',sans-serif"
      //   ctx.current.fillStyle = 'red'

      //   ctx.current.fillText('零三的笔记', 250, 350)
      //   ctx.current.fillText('123abc', 100, 100)

      //   ctx.current.scale(1, 1)
      // }

      coverFn(
        cvs,
        imgurl,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      )
    }
    const coverfn = () => {}
    cvs.current.onmouseenter = () => {
      console.log('进入')
    }

    // videoRef.current.onended = () => {
    //   console.dir(videoRef.current, 'aaa')
    //   const imgs = new Image()
    //   imgs.setAttribute('crossorigin', 'anonymous')

    //   imgs.src = require('../../asstes/img/780.jpg')
    //   imgs.onload = () => {
    //     ctx.current.clearRect(
    //       0,
    //       0,
    //       videoRef2.current.videoWidth * 0.4,
    //       videoRef2.current.videoHeight * 0.4
    //     ) //清除画布内容
    //     ctx.current.drawImage(
    //       imgs,
    //       videoRef2.current.videoWidth * 0.4,
    //       videoRef2.current.videoHeight * 0.4
    //     )

    //     ctx.current.font = 100 + "px/1 Tahoma,Helvetica,Arial,'宋体',sans-serif"
    //     ctx.current.fillStyle = 'red'

    //     ctx.current.fillText('结束bb的笔记', 150, 350)
    //     ctx.current.fillText('123abc', 100, 100)

    //     ctx.current.scale(1, 1)
    //   }

    //   // cvs.current.width = videoRef.current.width
    //   // cvs.current.height = videoRef.current.height
    //   // ctx.current.drawImage(videoRef.current, 0, 0, 500, 500)
    //   // videoRef.current.play()
    // }
    videoRef.current.onended = () => {
      // 终止循环画板canvas
      clearInterval(setInter)
      setInter = null

      const img = new Image()
      const as = Localcache.getCache('endcoverUrl')
      // img.src = require('../../asstes/img/780.jpg')
      img.src = require('../../asstes/img/jn.jpg')
      if (as) {
        img.src = as
      }
      img.onload = () => {
        ctx.current.clearRect(
          0,
          0,
          videoRef.current.videoWidth * 0.4,
          videoRef.current.videoHeight * 0.4
        ) //清除画布内容

        ctx.current.drawImage(
          img,
          0,
          0,
          videoRef.current.videoWidth * 0.4,
          videoRef.current.videoHeight * 0.4
        )

        ctx.current.font = 100 + "px/1 Tahoma,Helvetica,Arial,'宋体',sans-serif"
        ctx.current.fillStyle = 'red'
        ctx.current.strokeStyle = 'red'
        ctx.current.strokeText('结束bb的笔记', 150, 350)
        ctx.current.fillText('123abc', 100, 100)
        // ctx.current.font = '60px serif'
        // ctx.current.textAlign = 'center'
        // ctx.direction = "rtl"
        // ctx.current.strokeStyle = 'red'
        ctx.current.scale(1, 1)
        for (var i = 0; i < 6; i++) {
          for (var j = 0; j < 6; j++) {
            ctx.current.fillStyle =
              'rgb(' +
              Math.floor(255 - 42.5 * i) +
              ',' +
              Math.floor(255 - 42.5 * j) +
              ',0)'
            ctx.current.fillRect(j * 25, i * 25, 25, 25)
          }
        }
        // 太极图
        ctx.current.beginPath()
        ctx.current.arc(250, 250, 100, (Math.PI * 3) / 2, Math.PI / 2, true)
        ctx.current.arc(250, 300, 50, Math.PI / 2, (Math.PI * 3) / 2, true)
        ctx.current.arc(250, 200, 50, Math.PI / 2, (Math.PI * 3) / 2, false)
        // ctx.stroke();
        ctx.current.fillStyle = '#000000'
        ctx.current.fill()
        ctx.current.closePath()
        ctx.current.beginPath()
        ctx.current.arc(250, 300, 5, 0, Math.PI * 2, false)
        ctx.current.fillStyle = '#ffffff'
        ctx.current.fill()
        ctx.current.closePath()
        ctx.current.beginPath()
        ctx.current.arc(250, 250, 100, (Math.PI * 3) / 2, Math.PI / 2, false)
        ctx.current.arc(250, 300, 50, Math.PI / 2, (Math.PI * 3) / 2, true)
        ctx.current.arc(250, 200, 50, Math.PI / 2, (Math.PI * 3) / 2, false)
        ctx.current.strokeStyle = '#ffffff'
        ctx.current.fill()
        ctx.current.beginPath()
        ctx.current.arc(250, 200, 5, 0, Math.PI * 2, false)
        ctx.current.fillStyle = '#000000'
        ctx.current.fill()
      }
    }
  }, [])

  const render = () => {
    // videoRef.current.setAttribute('crossorigin', 'anonymous')
    ctx.current.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth * 0.4,
      videoRef.current.videoHeight * 0.4
    )
    ctx.current.font = 100 + "px/1 Tahoma,Helvetica,Arial,'宋体',sans-serif"
    ctx.current.fillStyle = 'red'

    ctx.current.fillText('bb的笔记', 250, 350)
    ctx.current.fillText('123abc', 100, 100)

    ctx.current.scale(1, 1)
  }
  const vimgRef = useRef()
  const afn = useRef()

  const videoRef2 = useRef()

  // const canvas = document.createElement('canvas')
  // 截图 从一个没有关联的播放视频中截图 放入 canvas 做为封面
  const changeImage = () => {
    const vw = videoRef2.current.videoWidth * 0.4
    const vh = videoRef2.current.videoHeight * 0.4
    // cvs 是canvas实例
    // const ctx.current2 = cvs.current.getContext('2d')
    // 设置值 宽高
    vimgRef.current.width = vw
    vimgRef.current.height = vh
    ctx.current.clearRect(0, 0, vw, vh) //清除画布内容
    ctx.current.drawImage(videoRef2.current, 0, 0, vw, vh) //设置截图

    const as = cvs.current.toDataURL('image/png')
    // 点击截图直接存入本地
    Localcache.setCache('coverUrl', as)

    console.log(as)
    console.log('diao')
  }

  console.log(afn.current, 'afn')
  useEffect(() => {
    videoRef2.current.src = require('../../asstes/img/video.mp4')
    videoRef2.current.onclick = () => {
      videoRef2.current.play()
    }
    console.dir(videoRef2.current)
  })
  //
  /**
   * 获取视频的封面图信息
   * @param url 视频地址
   * @param second 秒数
   */
  async function getVideoBase64(url, second = 20) {
    // const video = document.createElement('video')
    // video.setAttribute('crossOrigin', 'anonymous') // 处理跨域
    // video.setAttribute('src', url)
    // // 静音操作，防止播放失败
    // video.setAttribute('muted', 'muted')
    // video.addEventListener('loadeddata', async () => {
    //   const canvas = document.createElement('canvas')
    //   const { width, height } = video // canvas的尺寸和图片一样
    //   canvas.width = width
    //   canvas.height = height
    //   if (second) {
    //     video.currentTime = second
    //     // 播放到当前时间的帧，才能截取到当前的画面
    //     await video.play()
    //     // await video.pause()
    //   }
    //   canvas.getContext('2d')?.drawImage(video, 0, 0, width, height)
    //   return canvas.toDataURL('image/jpeg')
    // })
  }
  // 删除本地存储封面
  const changeDelete = (end) => {
    if (end) {
      Localcache.deleteCache('endcoverUrl')
      return
    }
    Localcache.deleteCache('coverUrl')
  }

  // 输入地址链接
  const oneblur = (e, end) => {
    if (!e.target.value) return
    const img = new Image()
    img.src = e.target.value
    let son = false

    img.onload = () => {
      if (end === 'end') {
        oneFn(img, 'endcoverUrl')
      } else {
        oneFn(img)
      }

      const person = alert(`${img.src}\n 设置成功!!!`)
      if (!person) {
        e.target.value = null
        son = true
      }
    }

    img.onerror = () => {
      if (son) return
      const per = alert(`${e.target.value}\n不是图片url 解析失败`)
      if (!per) {
        e.target.value = null
        son = false
      }
    }
  }
  /**
   * first
   * @param img 照片实例
   * @param name 存入本地名字 coverUrl endCoverUrl
   */
  const oneFn = (img, name = 'coverUrl') => {
    Localcache.setCache(name, img.src)
    if (name === 'coverUrl') resetCover(img)
  }

  /**
   *  重置封面 cover
   *  @param coverInstance 封面的实例
   */
  const resetCover = (coverInstance) => {
    ctx.current.clearRect(
      0,
      0,
      videoRef2.current.videoWidth * 0.4,
      videoRef2.current.videoHeight * 0.4
    ) //清除画布内容
    ctx.current.drawImage(
      coverInstance,
      0,
      0,
      videoRef2.current.videoWidth * 0.4,
      videoRef2.current.videoHeight
    ) //设置截图
  }

  return (
    <NotFoundWrapper>
      <br />
      <label>
        首次播放封面url:
        <textarea type="text" onBlur={oneblur} />
      </label>
      播放后的封面url:
      <textarea type="text" onBlur={(e) => oneblur(e, 'end')} />
      <br />
      <br />
      <canvas ref={cvs} crossOrigin="anonymous">
        <track
          kind="subtitles"
          default
          src={require('./zh.vtt')}
          label="中文字幕"
        />
        <track
          kind="subtitles"
          default
          src={require('./en.vtt')}
          label="英文字幕"
        />
      </canvas>
      {/* <div className="playbtn">播放</div> */}
      <video
        ref={videoRef}
        id="vID"
        controls
        autoPlay
        crossOrigin="anonymous"
        // src="https://us-stock5.xpccdn.com/ee53aa95-44e9-4da6-b236-34d8826be141.mp4"
      >
        <track
          kind="captions"
          default
          src={require('./zh.vtt')}
          label="中文字幕"
        />
        <track
          kind="subtitles"
          default
          src={require('./en.vtt')}
          label="英文字幕"
        />
      </video>
      <br />
      <canvas ref={vimgRef} crossOrigin="anonymous"></canvas>
      <button onClick={changeImage}>截图封面</button>
      <button onClick={(e) => changeDelete()}>删除本地存储首页封面</button>
      <button onClick={(e) => changeDelete('end')}>
        删除本地存储播放后封面
      </button>
      <video
        ref={videoRef2}
        controls
        autoPlay
        src={require('../../asstes/img/video.mp4')}
        style={{ width: '500px', height: '400px' }}
      >
        <track
          kind="subtitles"
          default
          src={require('./zh.vtt')}
          label="中文字幕"
        />
        <track
          kind="subtitles"
          default
          src={require('./en.vtt')}
          label="英文字幕"
        />
      </video>
      <audio controls>
        <source src={require('../../asstes/img/video.mp4')} type="audio/mp4" />
        <source src="viper.ogg" type="audio/ogg" />
        <p>
          Your browser doesn't support this audio file. Here is a
          <a href={require('../../asstes/img/video.mp4')}>link to the audio</a>{' '}
          instead.
        </p>
      </audio>
    </NotFoundWrapper>
  )
})

export default NotFound
