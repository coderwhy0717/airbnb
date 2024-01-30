import IconLeftArrow from '@/asstes/svg/icon-left-arrow'
import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import IndicatorView from '@/components/indicator-view'
import { useScrollHooks } from '@/hooks/scroll-hooks'
import { Carousel } from 'antd'
import classNames from 'classnames'
import React, { memo, useCallback, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import ContentTbas from './c-cpns/content-tbas'
// import DetailContent from './c-cpns/detail-content'
// import { useSelector } from 'react-redux'
import DetailImageView from './c-cpns/detail-image-view'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  // const { houseDetail } = useSelector((state) => ({
  //   houseDetail: state.detail.houseDetail
  // }))
  const ConenteRef = useRef()
  const arr = ['详情', '评价', '可订日期', '位置', '须知', '房东']
  const [showDetail, setShowDetail] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // tabs 内容
  const arrEls = useRef({})
  // 获取需要滚动的 ref绑定
  const fooRef = (el) => {
    if (!el) return
    // 页面刷新 如果arrEls里有数据的话就不用执行
    const name = el.getAttribute('name') //获取自定义属性
    if (arrEls.current[name]) return
    console.log(el)

    arrEls.current[name] = el
  }
  // 变量 控制滚动
  const istrue = useRef(true)
  // 传入子组件
  const { scrollTop, scrollTops } = useScrollHooks()
  const [showTbas, setShowTbas] = useState(true)
  const changeIndex = useCallback(
    (index) => {
      const arr = ['详情', '评价', '可订日期', '位置', '须知', '房东']
      //点击滚动时 不让滚动监听他设置值

      setCurrentIndex(index)
      console.log(
        scrollTops.current + 48,
        arrEls.current[arr[index]].offsetTop,
        'arrEls.current[arr[index]].offsetTop'
      )
      // 判断第二三四...多次点击进来的 tabs变色的 bug
      if (
        currentIndex === index &&
        scrollTops.current + 48 === arrEls.current[arr[index]].offsetTop
      ) {
        istrue.current = true
      } else {
        istrue.current = false
      }
      // console.log(arrEls.current, '点击')
      // console.log(arrEls.current[arr[index]].offsetTop, '点击')
      // console.log(Object.values(arrEls.current).map((item) => item.offsetTop))
      let distance = arrEls.current[arr[index]].offsetTop ?? 0
      // 这里再减48  当点击index === 0 第一个时 滚动到指定的位置 也就是相当于减了 48*2了
      if (index === 0) {
        distance = distance - 70
      }
      // 增加就是减  y轴滚动就是负
      distance = distance - 48
      window.scrollTo({
        top: distance,
        behavior: 'smooth'
      })
    },
    [currentIndex, scrollTops]
  )
  useEffect(() => {
    const arrs = ['详情', '评价', '可订日期', '位置', '须知', '房东']
    let distance0 = arrEls.current[arrs[0]].offsetTop
    if (scrollTop + 48 >= distance0) {
      setShowTbas(false)
    } else if (scrollTop - 48 < distance0) {
      setShowTbas(true)
    }
  }, [scrollTop])

  useEffect(() => {
    // 这里可以 性能优化
    const els = Object.values(arrEls.current)
    const arr = els.map((el) => el.offsetTop)
    // 与下面的一样 只不过只减了一个48 因为没有点击 48是tabs的高度
    if (Math.round(scrollTop) + 48 === arr[currentIndex]) {
      // 到指定位置了 设置可以滚动
      console.log('到了')
      istrue.current = true
      return // 不执行下面的 从新进来执行
    }
    // + 48 *2 点击arr[0]第一个时了 滚动到指定的位置时
    // 鼠标再去滚动的话 需要scrollTop +48*2 因为点击的时候分两次减了48
    // 两个距离相等 放行
    if (Math.round(scrollTop) + 48 * 2 === arr[0] && currentIndex === 0) {
      console.log('first')

      // 到指定位置了 设置可以滚动
      istrue.current = true
      return // 不执行下面的 从新进来执行
    }
    // 如果是点击滚动的就return出去
    if (!istrue.current) return
    console.log(Math.round(scrollTop))
    let index = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
      // 当前的距离1826 scrollTop的距离 1778  这里减48 就是因为 scrollTop 少了48px了
      // 因为点击的时候   要减去 tab的高度48 这里就要加上去
      // 解决了点击滚动某个位置 然后鼠标滚动 tabs 的 index前后跳的问题
      if (arr[i] - 48 > scrollTop) {
        index = i - 1
        break
      }
    }

    // index === -1 的话就让 index = 0
    if (index === -1) index = 0
    setCurrentIndex(index)
  }, [scrollTops, scrollTop, currentIndex])

  const housedata = JSON.parse(window.localStorage.getItem('housedetail'))
  const lookImagesClick = useCallback(() => {
    setShowDetail(!showDetail)
    //tabs //bug
    setShowTbas(true)
    setCurrentIndex(0)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    istrue.current = true
  }, [showDetail])

  // 照片处理
  const imageRef = useRef()
  const [imageIndex, setImageIndex] = useState(0)
  const changeClick = (value) => {
    value ? imageRef.current?.prev() : imageRef.current?.next()
  }
  const beforeChange = (from, to) => {
    console.log(to)
    setImageIndex(to)
  }

  const changeGoTo = useCallback((value) => {
    //1.子传父 点击五个页面中得一个 显示画中画
    setShowDetail(true)
    // 2.让指示器调到指定页面 还有轮播图
    setImageIndex(value)
    /* 名称音/e/f/  发音 /f/
      fas lam man nax
    /ae/ a
  ssssww
    */

    // console.log(imageRef.current) // undefined
  }, [])

  //3.  因为在方法里获取不到实例 采用useEffect变量来改变 让轮播图跳到指定页面
  useEffect(() => {
    // 判断第一次的时候 showDetail为 true 显示画中画时才执行
    if (showDetail) {
      imageRef.current.goTo(imageIndex, true)
    }
  }, [imageRef, showDetail, imageIndex])
  // 点击指示器 轮播图/指示器跳转指定位置
  const changeimages = (index) => {
    setImageIndex(index)
  }
  return (
    <DetailWrapper showDetail={showDetail} showTbas={showTbas}>
      {/* 图片 */}
      <DetailImageView
        lookImagesClick={lookImagesClick}
        changeGoTo={changeGoTo}
      />
      <div className="detail-box" ref={ConenteRef}>
        {/* 内容 */}
        {/* <DetailContent arr={arr} /> */}
        <ContentTbas arr={arr} changeIndex={changeIndex} Index={currentIndex} />
        {showTbas ? (
          ''
        ) : (
          <div className="contentTbas">
            <ContentTbas
              arr={arr}
              changeIndex={changeIndex}
              Index={currentIndex}
            />
          </div>
        )}

        <div className="conent">
          <div className="box-conents">
            <div className="message"></div>
            <div className="itemdiv" name="详情" ref={fooRef}>
              详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情情详情详情详
              情详情详情详情详情详情详情详情详情情详情详情详情详
              情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
            </div>
            <div className="itemdiv" name="评价" ref={fooRef}>
              评价
            </div>
            <div className="itemdiv" name="可订日期" ref={fooRef}>
              可定日期
            </div>
            <div className="itemdiv" name="位置" ref={fooRef}>
              位置
              详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情情详情详情详
              情详情详情详情详情详情详情详情详情情详情详情详情详
              情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
            </div>
            <div className="itemdiv" name="须知" ref={fooRef}>
              须知
            </div>
            <div className="itemdiv" name="房东" ref={fooRef}>
              房东
            </div>
          </div>
          <div className="price">
            <div className="price-box">
              <div className="conentss">
                <div className="price-info">
                  <div className="q">
                    <span className="text"> ¥ 795</span>
                    &nbsp; /晚
                  </div>
                  <div className="score" onClick={(e) => changeIndex(1)}>
                    www231条
                  </div>
                </div>
                <div className="day">
                  <div className="head">日期</div>
                  <input type="text" placeholder="入住日期" />
                </div>
                <div className="day">
                  <div className="head">人数</div>
                  <input type="text" placeholder="1人" />
                </div>
                <div className="btn">
                  <span>查看可订状态</span>
                </div>
                <div className="tishi">您暂时不会被收费</div>
              </div>
              <div className="report">举报此房源</div>
            </div>
          </div>
        </div>
      </div>

      {/* 点击查看所有照片显示的画面 lookimages */}
      {showDetail && (
        <div className="lookimages">
          <span onClick={lookImagesClick}>×</span>
          <div className="scroll-box">
            {/* svg icon */}
            <div onClick={changeClick} className="svg-icon">
              <IconLeftArrow height={80} width={80} />
            </div>

            {/* imags */}
            <div className="imags">
              <Carousel
                dots={false}
                ref={imageRef}
                effect="fade"
                beforeChange={beforeChange}
              >
                {housedata.picture_urls.map((item, index) => {
                  return (
                    <div key={item} className="image-box">
                      <img
                        src={item}
                        alt=""
                        onClick={(e) => changeClick(false)}
                      />
                    </div>
                  )
                })}
              </Carousel>
            </div>
            <div onClick={(e) => changeClick(false)} className="svg-icon">
              <IconRightArrow height={80} width={80} />
            </div>
          </div>
          {/* message title */}
          <div className="info-box">
            <div className="info-title">
              {imageIndex + 1}/{housedata.picture_urls.length}：{housedata.name}
              图片{imageIndex + 1}
            </div>
            {/* indicator */}
            <div className="indicator">
              <IndicatorView
                currentIndex={imageIndex}
                width={'45%'}
                aotuHeight={false}
              >
                {housedata.picture_urls.map((item, index) => {
                  return (
                    <div
                      key={item}
                      className="indicator-box"
                      onClick={(e) => changeimages(index)}
                    >
                      <img src={item} alt="" />
                      <div
                        className={classNames('bgc', {
                          active: index === imageIndex
                        })}
                      ></div>
                    </div>
                  )
                })}
              </IndicatorView>
            </div>
          </div>
        </div>
      )}
    </DetailWrapper>
  )
})

export default Detail
