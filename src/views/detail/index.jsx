import IconLeftArrow from '@/asstes/svg/icon-left-arrow'
import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import IndicatorView from '@/components/indicator-view'
import { Carousel } from 'antd'
import classNames from 'classnames'
import React, { memo, useCallback, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
// import { useSelector } from 'react-redux'
import DetailImageView from './c-cpns/detail-image-view'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  // const { houseDetail } = useSelector((state) => ({
  //   houseDetail: state.detail.houseDetail
  // }))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  const arr = ['详情', '评价', '可订日期', '位置', '须知', '房东']
  const housedata = JSON.parse(window.localStorage.getItem('housedetail'))
  const changeIndex = (index) => {
    setCurrentIndex(index)
  }
  const lookImagesClick = useCallback(() => {
    setShowDetail(!showDetail)
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
    <DetailWrapper showDetail={showDetail}>
      <div className="detail-box">
        <DetailImageView
          lookImagesClick={lookImagesClick}
          changeGoTo={changeGoTo}
        />
        <div className="box">
          <div className="nav-btns">
            {arr.map((item, index) => {
              return (
                <div
                  key={item}
                  className="item-btns"
                  onClick={(e) => changeIndex(index)}
                >
                  <span
                    className={classNames({ active: currentIndex === index })}
                  >
                    {item}
                  </span>
                  <span className="dian">·</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* 查看所有照片 lookimages */}
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
