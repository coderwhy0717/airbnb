// import PropTypes from 'prop-types'
import IconLeftArrow from '@/asstes/svg/icon-left-arrow'
import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { ContentWrapper } from './style'

const EntireContent = memo((props) => {
  const { entireList } = useSelector(
    (state) => ({
      entireList: state.entire.entireList
    }),
    shallowEqual
  )
  const imgsRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentInstaceRef = useRef(0)
  let arr = useRef({ 0: 0, 1: 0, 2: 0 })
  const changeclick = (index) => {
    const indexs = Object.keys(arr.current)
    const newKey = indexs.find((item) => item == index)
    currentInstaceRef.current = newKey
    console.log(newKey)
    console.log(arr.current[newKey]++, 'key')
    console.log(arr.current)

    // console.log(indexs)

    // currentIndexRef.current += 1
    const currentIndexs = currentIndex + 1
    setCurrentIndex(currentIndexs)
    // 框架视图包裹 的 一个个图片 instance 实例
    const coverInstance =
      imgsRef.current.children[index].children[0].children[0].children[1]
    console.log(coverInstance)

    //  一个个图片的个数 30个
    const instance =
      imgsRef.current.children[index].children[0].children[0].children[1]
        .children
    // console.log(instance.length, 'changdu')
    // if (currentInstaceRef.current !== index) {
    //   currentInstaceRef.current = index
    //   currentIndexRef.current = 0
    //   coverInstance.style.transform = `translateX(-${0}px)`
    // }
    // 如果移动 没有下一个了 初始化数据
    if (currentIndexs >= instance.length) {
      setCurrentIndex(0)
      coverInstance.style.transform = `translateX(-${0}px)`
    }
    // 一个个图片滚动的距离
    const distance =
      imgsRef.current.children[index].children[0].children[0].children[1]
        .children[currentIndexs].offsetLeft

    coverInstance.style.transform = `translateX(-${distance}px)`
  }
  return (
    <ContentWrapper>
      <div>a{arr.current[currentInstaceRef.current]}</div>
      <div className="info" ref={imgsRef}>
        {entireList?.map((item, index) => {
          return (
            <div key={item._id} className="cover">
              {/* 照片s */}
              <div className="infosss">
                <div className="infos">
                  {/* 左键按钮 */}
                  <div className="icon-left-box">
                    <div className="bgc"></div>
                    <div
                      className="icon-left"
                      onClick={(e) => changeclick(index)}
                    >
                      <IconLeftArrow height={24} width={24} />
                    </div>
                  </div>
                  <div className="box">
                    {item.picture_urls.map((img, indeximg) => {
                      return (
                        <div key={indeximg} className="coverimg">
                          <img src={img} alt="" />
                        </div>
                      )
                    })}
                  </div>
                  {/* 指示器 */}
                  <div className="indicator-box">
                    {item.picture_urls.map((intance, indextan) => {
                      return (
                        <div
                          key={indextan}
                          className={classNames('indicators', {
                            active:
                              arr.current[currentInstaceRef.current] ===
                              indextan
                          })}
                        >
                          <div className="indicator"></div>
                        </div>
                      )
                    })}
                  </div>
                  {/* 右键按钮 */}
                  <div className="icon-right-box">
                    <div className="bgc"></div>
                    <div
                      className="icon-right"
                      onClick={(e) => changeclick(index)}
                    >
                      <IconRightArrow height={24} width={24} />
                    </div>
                  </div>
                  <div className="bgcbot"></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ContentWrapper>
  )
})

EntireContent.propTypes = {}

export default EntireContent
