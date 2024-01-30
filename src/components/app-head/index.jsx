import React, { memo, useState } from 'react'
import { HeadWrapper } from './style'
import HLeft from './cpn/h-left'
import HConent from './cpn/h-conent'
import HRight from './cpn/h-right'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsShowAppHead } from '@/store/modules/detail'
import IconSearch from '@/asstes/svg/icon-search'
import classNames from 'classnames'
const AppHead = memo(() => {
  const { isShowAppHead: isShow } = useSelector(
    (state) => ({
      isShowAppHead: state.detail.isShowAppHead
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const changeShow = () => {
    dispatch(changeIsShowAppHead(!isShow))
  }

  const searchMeassge = [
    {
      title: '城市',
      message: '大阪'
    },
    {
      title: '入住退房日期'
    },
    {
      title: '关键词'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const changeIndex = (index) => {
    setCurrentIndex(index)
  }
  return (
    <HeadWrapper isShow={isShow}>
      <div className="head">
        <HLeft />
        <HConent />
        <HRight />
      </div>
      <div className="footer">
        <div className="tab-item">
          {searchMeassge.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('city as', {
                  day: index === 1,
                  activec: index === currentIndex
                })}
                onClick={(e) => changeIndex(index)}
              >
                {item.title}
              </div>
            )
          })}
          {/* -------------- */}
          {/* <div className="city as">城市</div>
          <div className="day as">入住退房日期</div>
          <div className="search as">
            <div>关键词</div>
            <div>搜索</div>
          </div> */}
        </div>
      </div>
      <div className="muban" onClick={changeShow}></div>
    </HeadWrapper>
  )
})

export default AppHead
