import PropTypes from 'prop-types'
import React, { Fragment, memo } from 'react'
import HouseCover from '../house-cover'
import { HouseFrameWrapper } from './style'

const HouseFrame = memo((props) => {
  // 通过Scroll属性 传递具名组件 要是没有传组件 设置默认值为 Fragment
  const { houseList = [], width = '25%', Scroll = Fragment } = props

  return (
    <HouseFrameWrapper>
      {/* Scroll 具名插槽  showBgc={0} false 阴影去掉*/}
      <Scroll>
        {houseList.map((item) => {
          return <HouseCover key={item.id} itemData={item} width={width} />
        })}
      </Scroll>
    </HouseFrameWrapper>
  )
})

HouseFrame.propTypes = {
  houseList: PropTypes.array,
  width: PropTypes.string,
  Scroll: PropTypes.object
}

export default HouseFrame
