import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import Rating from '@mui/material/Rating'

import { HouseCoverWrapper } from './style'
import IconLeftArrow from '@/asstes/svg/icon-left-arrow'
import IconRightArrow from '@/asstes/svg/icon-right-arrow'
import IndicatorView from '../indicator-view'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
const HouseCover = memo((props) => {
  const { itemData = {}, width = '25%' } = props
  const slideRef = useRef()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeclick = (value = true) => {
    // 1轮播图切换
    value ? slideRef.current.next() : slideRef.current.prev()
    // 2. 下面 beforeChange 方法完成 没有bug
    // let indexs = value ? currentIndex + 1 : currentIndex - 1
    // if (indexs > itemData.picture_urls.slice(0, 8).length - 1) indexs = 0
    // if (indexs < 0) indexs = itemData.picture_urls.slice(0, 8).length - 1
    // setCurrentIndex(indexs)
  }

  // html img
  const picture = (
    <div className="box-img">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  //  html imgs

  const beforeChange = (from, to) => {
    console.log(from, to, 'current')
    setCurrentIndex(to)
  }
  const changeItem = (data) => {
    console.log(data, '点击')
    navigate('/detail')
  }
  return (
    <HouseCoverWrapper
      verifyColor={itemData?.verify_info?.text_color ?? '#39576a'}
      width={width}
    >
      {!itemData.picture_urls ? (
        picture
      ) : (
        <div className="slide">
          {/* 左键按钮 */}
          <div className="icon-box left" onClick={(e) => changeclick(false)}>
            <div className="bgc "></div>
            <div className="icon">
              <IconLeftArrow height={24} width={24} />
            </div>
          </div>
          {/* 照片s */}
          <div onClick={(e) => changeItem(itemData)}>
            {
              <Carousel dots={false} ref={slideRef} beforeChange={beforeChange}>
                {itemData?.picture_urls.map((item) => {
                  return (
                    <div key={item} className="box-img">
                      <img src={item} alt="" />
                    </div>
                  )
                })}
              </Carousel>
            }
          </div>

          {/* 右键按钮 */}
          <div className="icon-box right" onClick={(e) => changeclick()}>
            <div className="bgc icon-right"></div>
            <div className="icon">
              <IconRightArrow height={24} width={24} />
            </div>
          </div>
          {/* 指示器 */}
          <div className="indicator-position indicator-view ">
            <IndicatorView currentIndex={currentIndex} width={40}>
              {itemData?.picture_urls.map((item, index) => {
                return (
                  <div className="indicators-box" key={item}>
                    <div
                      className={classNames('indicators', {
                        active: index === currentIndex,
                        index1:
                          currentIndex < itemData?.picture_urls.length - 3 &&
                          index === currentIndex - 1,
                        index2:
                          currentIndex < itemData?.picture_urls.length - 3 &&
                          index === currentIndex - 2,
                        index3:
                          currentIndex < itemData?.picture_urls.length - 3 &&
                          index === currentIndex - 3,
                        index5: currentIndex > 2 && index === currentIndex + 1,
                        index6: currentIndex > 2 && index === currentIndex + 2,
                        index7: currentIndex > 2 && index === currentIndex + 3
                      })}
                    />
                  </div>
                )
              })}
            </IndicatorView>
          </div>
          <div className="indicator-position bgc-box">
            <div className=" indicator-bgc"></div>
          </div>
        </div>
      )}

      <div className="message">
        {itemData.verify_info?.kicker_badge?.label && (
          <span className="filled">
            {itemData.verify_info?.kicker_badge?.label.toUpperCase()}
          </span>
        )}

        {itemData.verify_info?.messages.join(' · ')}
      </div>
      <div className="house-name">{itemData.name}</div>
      <div className="price">￥{itemData.price}/晚</div>
      <div className="reviews">
        {/* 评分 */}
        <Rating
          value={itemData.star_rating ?? 5}
          readOnly
          precision={0.1}
          sx={{
            fontSize: '12px',
            color: itemData.verify_info?.kicker_badge?.label
              ? itemData?.verify_info?.text_color
              : '#00848A'
          }}
        />

        <span className="reviews-count">{itemData.reviews_count}</span>
        {itemData.bottom_info?.content && (
          <span>
            &nbsp;·&nbsp;
            <span className="score">{itemData.bottom_info?.content}</span>
          </span>
        )}
      </div>
    </HouseCoverWrapper>
  )
})

HouseCover.propTypes = {
  itemData: PropTypes.object,
  width: PropTypes.string
}

export default HouseCover
