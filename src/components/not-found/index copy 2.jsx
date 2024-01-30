import React, { memo, useEffect, useRef } from 'react'

import { NotFoundWrapper } from './style'

const NotFound = memo(() => {
  const cvs = useRef()
  const ctxx = useRef()
  console.dir(cvs, 'cvs')

  useEffect(() => {
    let sun = new Image()
    let moon = new Image()
    let earth = new Image()
    function init() {
      sun.src = require('../../asstes/img/sun.png')
      moon.src = require('../../asstes/img/moon.png')
      earth.src = require('../../asstes/img/earth.png')
      window.requestAnimationFrame(draw)
    }

    function draw() {
      let ctx = cvs.current.getContext('2d')

      ctx.globalCompositeOperation = 'destination-over'
      ctx.clearRect(0, 0, 300, 300) // clear canvas

      ctx.fillStyle = 'rgba(0,0,0,0.4)'
      ctx.strokeStyle = 'rgba(0,153,255,0.4)'
      ctx.save()
      ctx.translate(150, 150)

      // Earth
      let time = new Date()
      ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
          ((2 * Math.PI) / 60000) * time.getMilliseconds()
      )
      ctx.translate(105, 0)
      ctx.fillRect(0, -12, 50, 24) // Shadow
      ctx.drawImage(earth, -12, -12)

      // Moon
      ctx.save()
      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
          ((2 * Math.PI) / 6000) * time.getMilliseconds()
      )
      ctx.translate(10, 28.5)
      ctx.drawImage(moon, -3.5, -3.5)
      ctx.restore()

      ctx.restore()

      ctx.beginPath()
      ctx.arc(150, 150, 105, 0, Math.PI * 2, false) // Earth orbit
      ctx.stroke()

      ctx.drawImage(sun, 0, 0, 300, 300)

      window.requestAnimationFrame(draw)
    }
    init()
  })
  const changeCvsFn = (e, ctxx) => {}
  // const changeColor = (x, y, targetColor, imgData, clickColor) => {
  //   // if (x < 0 || x >= cvs.current.width || y < 0 || y >= cvs.current.height)
  //   //   return
  //   // const curColor = getColor(x, y, imgData)
  //   // if (diff(clickColor, curColor) > 100) return
  //   // if (diff(curColor, targetColor) === 0) return
  //   // const index = point(x, y)
  //   // imgData.set(targetColor, index)
  //   // changeColor(x + 1, y, targetColor, imgData, clickColor)
  //   // changeColor(x - 1, y, targetColor, imgData, clickColor)
  //   // changeColor(x, y + 1, targetColor, imgData, clickColor)
  //   // changeColor(x, y - 1, targetColor, imgData, clickColor)
  //   // imgData[index] = targetColor[0]
  //   // imgData[index + 1] = targetColor[1]
  //   // imgData[index + 2] = targetColor[2]
  //   // imgData[index + 3] = targetColor[3] *255
  //   _changeColor(x, y, clickColor, targetColor)
  // }

  //
  const changeColor = (x, y, targetColor, imgData, clickColor) => {
    const stack = [[x, y]]
    while (stack.length > 0) {
      const [x, y] = stack.pop()
      // const i = point2Index(x,y)

      // const color = getColor(x,y,imgData)
      if (x < 0 || x >= cvs.current.width || y < 0 || y >= cvs.current.height)
        continue
      const curColor = getColor(x, y, imgData)
      if (diff(clickColor, curColor) > 100) continue
      if (diff(curColor, targetColor) === 0) continue
      const index = point(x, y)
      imgData.set(targetColor, index)
      stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1])
    }
  }

  //

  const point = (x, y) => {
    return (y * cvs.current.width + x) * 4
  }
  const diff = (color1, color2) => {
    return (
      Math.abs(color1[0] - color2[0]) +
      Math.abs(color1[1] - color2[1]) +
      Math.abs(color1[2] - color2[2]) +
      Math.abs(color1[3] - color2[3])
    )
  }
  const getColor = (x, y, imgData) => {
    const index = point(x, y)
    return [
      imgData[index],
      imgData[index + 1],
      imgData[index + 2],
      imgData[index + 3]
    ]
  }
  return (
    <NotFoundWrapper>
      {/* <div className="boxss">
        <span>NotFound</span>
        <span>2</span>
        <span>1</span>

      </div> */}
      {/* <img src={require('../../asstes/img/780.jpg')} alt="" /> */}
      <canvas
        width="300"
        height="300"
        ref={cvs}
        onClick={(e) => changeCvsFn(e, ctxx.current)}
      ></canvas>

      {/* <div className="head">
        <ul>
          <li className="li1">5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
        </ul>
      </div> */}
    </NotFoundWrapper>
  )
})

export default NotFound
