import PropTypes from 'prop-types'

import IconSearch from '@/asstes/svg/icon-search'
import classNames from 'classnames'
import React, { memo, useEffect, useState } from 'react'
import { HConentWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsShowAppHead } from '@/store/modules/detail'

const HConent = memo((props) => {
  const text = ['搜索房源', '搜索体验']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isShow, setIsShow] = useState(true)

  const { isShowAppHead: Show } = useSelector(
    (state) => ({
      isShowAppHead: state.detail.isShowAppHead
    }),
    shallowEqual
  )
  useEffect(() => {
    setIsShow(Show)
  }, [Show])
  const dispatch = useDispatch()
  const changeClick = () => {
    console.log('first 备注： head有bug', Show)
    // setIsShow(!Show)

    dispatch(changeIsShowAppHead(!Show))
  }
  const changeIndex = (index) => {
    setCurrentIndex(index)
  }
  return (
    <HConentWrapper isShow={isShow}>
      {isShow ? (
        <div className="search" onClick={changeClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="box" onClick={changeClick}>
        <div className="box-b">
          {text.map((item, index) => {
            return (
              <div
                key={item}
                className={classNames('b-box', {
                  active: index === currentIndex
                })}
                onClick={(e) => changeIndex(index)}
              >
                <div className="book-text">{item}</div>
              </div>
            )
          })}
        </div>
      </div>
    </HConentWrapper>
  )
})
HConent.propTypes = {}

export default HConent
