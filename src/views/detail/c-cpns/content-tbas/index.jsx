import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ContentWrapper } from './style'

const ContentTbas = memo((props) => {
  const { arr = [], changeIndex, Index = 0 } = props
  const change = (index) => {
    // 方法在父组件里 方便处理数据
    changeIndex(index)
  }
  return (
    <ContentWrapper>
      <div className="nav-btns">
        {arr.map((item, index) => {
          return (
            <div
              key={item}
              className="item-btns"
              onClick={(e) => change(index)}
            >
              <span className={classNames({ active: Index === index })}>
                {item}
              </span>
              <span className="dian">·</span>
            </div>
          )
        })}
      </div>
    </ContentWrapper>
  )
})

ContentTbas.propTypes = {
  arr: PropTypes.array,
  changeIndex: PropTypes.func,
  Index: PropTypes.number
}

export default ContentTbas
